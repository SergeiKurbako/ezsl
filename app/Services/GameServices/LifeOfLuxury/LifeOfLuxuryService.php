<?php

namespace App\Services\GameServices\LifeOfLuxury;

use App\Services\GameServices\AbstractSpinService;
use App\Models\SavedDataBundle;

class LifeOfLuxuryService extends AbstractSpinService
{
    private $jokerValue = 0;
    private $bonusValue = 10;
    private $maxNOVGFA = 1000; // максимальное колличество сгенерированных для массива значений
    private $wl = [];
    private $balance;
    private $allWin;
    private $rope = false;
    private $bet;
    private $checkWinJoker = false;
    private $info;
    private $winCellInfo;

    public function getSpinResultData($betLine, $linesInGame, $gameName, $data = 'main')
    {
        session(['userId' => 1]);
        session(['gameId' => 1]);

        if ($data === 'main') {
            $result = $this->getSpinData($betLine, $linesInGame, $gameName);
        } else {
            $result = $this->getTestSpinData($betLine, $linesInGame, $gameName, $data);
        }

        return $result;
    }

    //$info = $this->generatingValuesForCells($gameRules);
    public function getSpinData($betLine, $linesInGame, $gameName)
    {

        if (session('reconnect') === true) {
            session(['reconnect' => 'count+1']);
        } elseif (session('reconnect') === 'count+1') {
            if (session('freeSpinData') != false) {
                session(['reconnect' => false]);
                $freeSpinData = session('freeSpinData');
                $freeSpinData['count'] += 1;
                session(['freeSpinData' => $freeSpinData]);

                $freeSpinDB = (new SavedDataBundle())
                    ->where('user_id', '=', session('userId'))
                    ->where('game_id', '=', session('gameId'))
                    ->where('session_name', '=', session('sessionName'))
                    ->get()
                    ->first();

                $data = json_decode($freeSpinDB->data);
                $data->freeSpinData->count += 1;
                $freeSpinDB->data = json_encode($data);
                $freeSpinDB->save();
            }
        }

        //session(['freeSpinData' => ['count' => 1, 'mul' => 11, 'allWin' => 0]]);
        $this->bet = $linesInGame * $betLine;


        if (session('freeSpinResultAllWin') != false) { // прибавление к балансу выигрыша из freespin
            //session(['allWin' => session('freeSpinResultAllWin')]);
            session(['freeSpinResultAllWin' => false]);

        }

        $this->balance = session('balance');
        $this->allWin = session('allWin');

        $gameRules = $this->getGameRules($gameName);

        // прибавляем к балансу предыдущий выигрышь
        session(['balance' => (session('balance') + session('allWin'))]);

        session(['allWin' => 0]); // обнуляем общий выигрышь
        $this->allWin = 0;

        // при недостаточном балансе отправляется false
        if ((session('balance') - ($betLine * $linesInGame) + $this->allWin) < 0) {
            if (session('freeSpinData') == false && session('freeSpinResultAllWin') == false) {
                return false;
            }
        }

        $info = $this->generatingValuesForCells($gameRules);
        //$info = [1,2,6,2,0,4,0,1,3,0,3,4,5,7,9];
        //$info = [5,2,10,10,1,3,3,5,2,0,9,6,9,3,1]; // freespin
        //$info = [2,7,3,2,4,0,1,3,4,0,7,6,4,7,3];
        $this->info = $info;

        $winBonusSymbolsData = $this->getWinBonusSymbolsData($gameRules, $info, $this->bonusValue); // [count, winValue]

        $startFreeSpin = false;
        if ($this->checkBonusGame($info, $this->bonusValue) === 'bonus') {
            if (!session('freeSpinData')) {
                $startFreeSpin = true;
            }
        }

        $winLinesData = $this->getWinLinesData($gameRules, $info, $linesInGame);
        $winCellInfo = $this->getWinCellInfo($winLinesData, $gameRules, $info, $winBonusSymbolsData);
        $this->winCellInfo = $winCellInfo;
        $this->wl = $this->getWl($gameRules, $winLinesData, $betLine);

        if ($startFreeSpin) {
            $this->firstStartFreeSpin($betLine, $linesInGame, $winBonusSymbolsData, $gameRules, $winLinesData);

            //session(['allWin' => (session('allWin') + $this->allWin)]);
        } else {
            if (session('freeSpinData') != false || session('check0FreeSpin') != false) {
                $this->freeSpinIteration($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame, $info);
            } else {
                $this->allWin += $this->getAllWinWithBonus($gameRules, $winLinesData, $betLine);
                $this->balance = session('balance') - $betLine * $linesInGame; // выигрыш прибавляется на следующем ходу
                session(['allWin' => (session('allWin') + $this->allWin)]);
            }
        }

        session(['balance' => $this->balance]);

        $spinResultData = [
            'info' => $info,
            'allWin' => $this->allWin,
            'betLine' => $betLine,
            'linesInGame' => $linesInGame,
            'winCellInfo' => $winCellInfo,
            'wl' => $this->wl,
            'state' => true,
            'balance' => $this->balance,
            'rope' => $this->rope,
            'winBonusSymbolsData' => $winBonusSymbolsData,
            'freeSpinData' => session('freeSpinData'),
            'check0FreeSpin' => session('check0FreeSpin')

        ];

        if (session('check0FreeSpin') === true) {
            session(['check0FreeSpin' => false]);
        }

        return $spinResultData;
    }

    public function getTestSpinData($betLine, $linesInGame, $gameName, $data)
    {
        if (session('reconnect') === true) {
            session(['reconnect' => 'count+1']);
        } elseif (session('reconnect') === 'count+1') {
            if (session('freeSpinData') != false) {
                session(['reconnect' => false]);
                $freeSpinData = session('freeSpinData');
                $freeSpinData['count'] += 1;
                session(['freeSpinData' => $freeSpinData]);

                $freeSpinDB = (new SavedDataBundle())
                    ->where('user_id', '=', session('userId'))
                    ->where('game_id', '=', session('gameId'))
                    ->where('session_name', '=', session('sessionName'))
                    ->get()
                    ->first();

                $data = json_decode($freeSpinDB->data);
                $data->freeSpinData->count += 1;
                $freeSpinDB->data = json_encode($data);
                $freeSpinDB->save();
            }
        }

        //session(['freeSpinData' => ['count' => 1, 'mul' => 11, 'allWin' => 0]]);
        $this->bet = $linesInGame * $betLine;


        if (session('freeSpinResultAllWin') != false) { // прибавление к балансу выигрыша из freespin
            //session(['allWin' => session('freeSpinResultAllWin')]);
            session(['freeSpinResultAllWin' => false]);

        }

        $this->balance = session('balance');
        $this->allWin = session('allWin');

        $gameRules = $this->getGameRules($gameName);

        // прибавляем к балансу предыдущий выигрышь
        session(['balance' => (session('balance') + session('allWin'))]);

        session(['allWin' => 0]); // обнуляем общий выигрышь
        $this->allWin = 0;

        // при недостаточном балансе отправляется false
//        if ((session('balance') - ($betLine * $linesInGame) + $this->allWin) < 0) {
//            if (session('freeSpinData') == false && session('freeSpinResultAllWin') == false) {
//                return false;
//            }
//        }

        $info = $this->generatingValuesForCells($gameRules);
        //$info = [1,7,10,0,2,2,1,3,3,4,4,4,5,5,10]; // freespin
        //$info = [3,1,4,2,1,2,4,4,2,7,2,9,2,4,1];
        //$info = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];
        $this->info = $info;

        $winBonusSymbolsData = $this->getWinBonusSymbolsData($gameRules, $info, $this->bonusValue); // [count, winValue]

        $startFreeSpin = false;
        if ($this->checkBonusGame($info, $this->bonusValue) === 'bonus') {
            if (!session('freeSpinData')) {
                $startFreeSpin = true;
            }
        }

        $winLinesData = $this->getWinLinesData($gameRules, $info, $linesInGame);
        $winCellInfo = $this->getWinCellInfo($winLinesData, $gameRules, $info, $winBonusSymbolsData);
        $this->winCellInfo = $winCellInfo;
        $this->wl = $this->getWl($gameRules, $winLinesData, $betLine);

        if ($startFreeSpin) {
            $this->firstStartFreeSpin($betLine, $linesInGame, $winBonusSymbolsData, $gameRules, $winLinesData);

            //session(['allWin' => (session('allWin') + $this->allWin)]);
        } else {
            if (session('freeSpinData') != false || session('check0FreeSpin') != false) {
                $this->freeSpinIteration($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame, $info);
            } else {
                $this->allWin += $this->getAllWinWithBonus($gameRules, $winLinesData, $betLine);
                $this->balance = session('balance') - $betLine * $linesInGame; // выигрыш прибавляется на следующем ходу
                session(['allWin' => (session('allWin') + $this->allWin)]);
            }
        }

        session(['balance' => $this->balance]);

        $spinResultData = [
            'info' => $info,
            'allWin' => $this->allWin,
            'betLine' => $betLine,
            'linesInGame' => $linesInGame,
            'winCellInfo' => $winCellInfo,
            'wl' => $this->wl,
            'state' => true,
            'balance' => $this->balance,
            'rope' => $this->rope,
            'winBonusSymbolsData' => $winBonusSymbolsData,
            'freeSpinData' => session('freeSpinData'),
            'check0FreeSpin' => session('check0FreeSpin')

        ];

        if (session('check0FreeSpin') === true) {
            session(['check0FreeSpin' => false]);
        }

        return $spinResultData;
    }

    public function getWinCellInfo($winLinesData, $gameRules, $info, $winBonusSymbolsData)
    {
        // получаем позиции выйгравших ячеек и их значения
        $winCellPositions = [];
        $winCellInfo = [];
        foreach ($winLinesData as $item) { //получаем информацию по отдельной выигрышной линии
            if ($item !== 0) {
                $savedKey = -1;
                foreach ($gameRules->lines[$item[0]] as $key => $cellPosition) {
                    // проверяем есть ли в данной линии символ-joker
                    if ($info[$cellPosition] == $this->jokerValue) {
                        if ($savedKey === ($key - 1)) {
                            $this->checkWinJoker = true;
                            $winCellPositions[] = [$cellPosition, $this->jokerValue]; // записываем позицию ячейки и ее значение
                            $savedKey += 1;
                        }
                    }

                    if ($info[$cellPosition] == $item[1]) {
                        if ($savedKey === ($key - 1)) {
                            $winCellPositions[] = [$cellPosition, $item[1]]; // записываем позицию ячейки и ее значение
                            $savedKey += 1;
                        }
                    }
                }
            }
        }


        // получение позиций и значений выигрышных ячеек
        for ($i = 0; $i < 15; $i++) {
            $value = false;

            foreach ($winCellPositions as $winCellPosition) {
                if ($winCellPosition[0] == $i) {
                    $value = $winCellPosition[1];
                    break;
                }
            }

            $winCellInfo[] = $value;
        }

        // добавление символов и джокеров вызывающих фриспин
        if ($winBonusSymbolsData[0] != 0) {
            foreach ($info as $key => $item) {
                if ($item === $this->bonusValue) {
                    $winCellInfo[$key] = $this->bonusValue;
                }

                if ($item === $this->jokerValue) {
                    $winCellInfo[$key] = $this->jokerValue;
                }
            }
        }

        return $winCellInfo;
    }

    protected function getWl($gameRules, $winLinesData, $betLine)
    {
        $winOfLines = [];
        for ($i = 1; $i <= 15; $i++) {
            foreach ($winLinesData as $winLineData) {
                if (($winLineData[0] + 1) != $i) {
                    $winOfLines[$i] = 0;
                } else {
                    foreach ($gameRules->winRules as $rule) {
                        if ($rule[0] == $winLineData[1]) {
                            // проверка есть ли в выигрышной линии джокер
                            foreach ($gameRules->lines[$winLineData[0]] as $cellNumber) {
                                if ($this->winCellInfo[$cellNumber] === $this->jokerValue) {
                                    $this->checkWinJoker = true;
                                    break;
                                } else {
                                    $this->checkWinJoker = false;
                                }
                            }

                            if ($rule[1] == $winLineData[2]) {
                                if (session('freeSpinData') != false || session('freeSpinResultAllWin') != false) {
                                    $freeSpinMul = session('freeSpinMul');
                                    $fsd = session('freeSpinData');

                                    if ($freeSpinMul) {
                                        $winOfLines[$i] = $betLine * $rule[2] * $freeSpinMul;
                                    } else {
                                        $winOfLines[$i] = $betLine * $rule[2] * $fsd['mul'];
                                    }

                                    if ($this->checkWinJoker) {
                                        $winOfLines[$i] = $winOfLines[$i] * 2;
                                    }
                                } else {
                                    if ($this->checkWinJoker) {
                                        $winOfLines[$i] = $betLine * $rule[2] * 2;
                                    } else {
                                        $winOfLines[$i] = $betLine * $rule[2];
                                    }
                                }


                            }
                        }
                    }
                    break;
                }
            }
        }

        session(['freeSpinResultAllWin' => false]);

        return $winOfLines;
    }


    /**
     * Получение выигрыша с учетов бонусной игры и выигрыша не по линиям
     *
     * @param $gameRules
     * @param $winLinesData
     * @param $betLine
     * @param $winBonusSymbolsData
     */
    public function getAllWinWithBonus($gameRules, $winLinesData, $betLine)
    {
        $this->allWin = $this->getAllWin($gameRules, $winLinesData, $betLine);
    }

    /**
     * Запуск игры freeSpin
     *
     * @param $betLine
     * @param $linesInGame
     * @param $winBonusSymbolsData
     */
    public function firstStartFreeSpin($betLine, $linesInGame, $winBonusSymbolsData, $gameRules, $winLinesData)
    {
        $this->rope = $this->getRope(); // ['count' => ... , 'mul' => ..., 'allWin' => ...]
        $this->getAllWinWithBonus($gameRules, $winLinesData, $betLine);

        session(['freeSpinMul' => false]);

//        if ($this->checkWinJoker) {
//            $this->rope['allWin'] = $winBonusSymbolsData[1] * 2 * $betLine * $linesInGame + $this->allWin;
//        } else {
//            $this->rope['allWin'] = $winBonusSymbolsData[1] * $betLine * $linesInGame + $this->allWin;
//        }

        $this->rope['allWin'] = $winBonusSymbolsData[1] * $betLine * $linesInGame + $this->allWin;

        session(['linesInGame' => $linesInGame]);
        session(['freeSpinData' => $this->rope]);

        $this->allWin = $this->rope['allWin'];
        //session(['allWin' => $this->allWin]);
        $this->balance = session('balance') - $betLine * $linesInGame; // выигрыш прибавляется на следующем ходу
    }

    /**
     * Итерация в игре freeSpin
     *
     * @param $gameRules
     * @param $winLinesData
     * @param $betLine
     */
    public function freeSpinIteration($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame, $info)
    {
        $freeSpinData = session('freeSpinData');

        $oldMul = $freeSpinData['mul'];
        $newMul = $freeSpinData['mul'];


        $newCount = $this->correctionFreeSpinCounter();

        if (($freeSpinData['count'] - 1) == 0) {
            //session(['balance' => (session('balance') + $freeSpinData['allWin'])]);


            session(['check0FreeSpin' => true]);

            $this->allWin = $this->getAllWin($gameRules, $winLinesData, $betLine) * $oldMul;

            session(['freeSpinResultAllWin' => ($freeSpinData['allWin'] + $this->allWin)]); // сохранение информации о выигрые в freespin

            session(['balance' => session('balance') + ($freeSpinData['allWin'])]);
            $this->balance = session('balance');

            session(['freeSpinMul' => $newMul]);

            session(['allWin' => $this->allWin]);
            session(['freeSpinData' => false]);
            session(['linesInGame' => false]);

            return false;
        } elseif ($freeSpinData['count'] < 0) {
            session(['freeSpinData' => false]);
            session(['linesInGame' => false]);

            return false;
        } else {
            foreach ($info as $item) {
                if ($item === $this->jokerValue && $newMul < 29) {
                    $newMul += 1;
                }
            }

            session(['freeSpinData' => [
                'count' => $newCount,
                'mul' => $newMul,
                'allWin' => ($freeSpinData['allWin'] + ($this->getAllWin($gameRules, $winLinesData, $betLine) * $oldMul))
            ]]);

            $this->allWin = $this->getAllWin($gameRules, $winLinesData, $betLine) * $oldMul;

            $this->balance = session('balance');
        }

    }

    /**
     * Получение выигрыша от бонусного символа
     *
     * @param $gameRules
     * @param array $info
     * @param int $bonusValue
     * @return array
     */
    public function getWinBonusSymbolsData($gameRules, array $info, int $bonusValue)
    {
        $bonusSymbolCount = 0;
        foreach ($info as $item) {
            if ($item === $bonusValue || $item === $this->jokerValue) {
                $bonusSymbolCount += 1;
            }
        }

        // в случае если не достаточно бонусных символов, то выходим
        if ($bonusSymbolCount <= 2) {
            return [0, 0];
        }

        $winValue = 0;
        foreach ($gameRules->winRules as $item) {
            if ($item[0] === $bonusValue) {
                if ($bonusSymbolCount <= 5) {
                    if ($item[1] === $bonusSymbolCount) {
                        $winValue = $item[2];
                        break;
                    }
                } else {
                    // если бонусных символов больше чем пять, то отбираем наибольший возможный выигрыш
                    if ($winValue < $item[2]) {
                        $winValue = $item[2];
                    }
                }
            }
        }

        $winBonusSymbolsData = [$bonusSymbolCount, $winValue];

        return $winBonusSymbolsData;
    }

    public function getCountCellValuesOnLinePlusJokers(array $countCellValuesOnLine, int $jokerCount)
    {
        foreach ($countCellValuesOnLine as $key => $item) {
            if ($key !== $this->jokerValue && $key !== $this->bonusValue) {
                $countCellValuesOnLine[$key] += $jokerCount;
            }
        }

        return $countCellValuesOnLine;
    }

    /**
     * Получение данных о выигрышных линиях
     *
     * @return $winLinesData [[номер линии, значение, кол-во значений], ...]
     */
    public function getWinLinesData($gameRules, $info, $linesInGame)
    {
        $winLinesData = [];

        if (session('freeSpinData')) {
            $linesInGame = session('linesInGame');
        }

        // прогоняем массив содержащий значения позиций ячеек для каждой из линий
        foreach ($gameRules->lines as $lineNumber => $cellNumbers) {

            $winLineData = [];

            $countCellValuesOnLine = $this->getCountCellValuesOnLine($cellNumbers, $info);

            //получаем кол-во джокеров на линии
            $jokerCount = $this->getCountJokersOnLine($countCellValuesOnLine, $this->jokerValue);

            $countCellValuesOnLinePlusJokers = $this->getCountCellValuesOnLinePlusJokers($countCellValuesOnLine, $jokerCount);

            if ($lineNumber < $linesInGame) {

                // определяем является ли линия выигрышной
                // $winLineData = [номер линии, значение, кол-во значений]

                $winLineDataArray = [];

                foreach ($countCellValuesOnLinePlusJokers as $value => $valueCounter) {
                    if ($value === 1 || $value === 9) {
                        $needCount = 2;
                    } else {
                        $needCount = 3;
                    }

                    if ($valueCounter >= $needCount) {
                        $checkStep = false;
                        if ($info[$cellNumbers[0]] === $value || $info[$cellNumbers[0]] === $this->jokerValue) {
                            if ($info[$cellNumbers[0]] !== 10) {
                                $checkStep = true;
                                for ($i = 0; $i < ($valueCounter - 1); $i++) {

                                    if ($value !== $info[$cellNumbers[$i + 1]] && $info[$cellNumbers[$i + 1]] !== $this->jokerValue) {
                                        if ($value === 1 || $value === 9) {
                                            if ($i > 0) {
                                                $winLineData[0] = $lineNumber;
                                                $winLineData[1] = $value;
                                                $winLineData[2] = $i + 1;

                                                $winLineDataArray[] = $winLineData;

                                                break(2);
                                            }
                                        } else {
                                            if ($i > 1) {
                                                $winLineData[0] = $lineNumber;
                                                $winLineData[1] = $value;
                                                $winLineData[2] = $i + 1;

                                                $winLineDataArray[] = $winLineData;

                                                break(2);
                                            }
                                        }

                                        $checkStep = false;
                                        break;
                                    }
                                }
                            }
                        }

                        if ($checkStep === true) {
                            $winLineData[0] = $lineNumber;
                            $winLineData[1] = $value;
                            $winLineData[2] = $valueCounter;

                            $winLineDataArray[] = $winLineData;
                        }
                    }
                }

                $winLinesData[] = $this->getMaxWinLineData($winLineDataArray); // получаем наиболее стоящий выигрышь
            }
        }

        $winLinesData = $this->trimEmptyWinLineData($winLinesData); // отсекаем пустые наборы данных

        return $winLinesData;
    }

    /**
     * Получение значений для бонусной игры
     *
     * @return array|string
     */
    private function getRope()
    {
        $freeSpinData = ['count' => 10, 'mul' => 2, 'allWin' => 0];

        return $freeSpinData;
    }

    /**
     * Генерация значений для ячеек
     *
     * @return array $valueForCells
     */
    public function generatingValuesForCells($gameRules)
    {
        $allValuesArray = [];
        for ($i = 0; $i <= $this->maxNOVGFA; $i++) {

            if ($this->bet < 50) {
                if ($i < 360) {
                    $allValuesArray[] = 8;
                } elseif ($i > 359 && $i < 400) {
                    $allValuesArray[] = 1;
                } elseif ($i > 399 && $i < 450) {
                    $allValuesArray[] = 2;
                } elseif ($i > 449 && $i < 550) {
                    $allValuesArray[] = 3;
                } elseif ($i > 549 && $i < 630) {
                    $allValuesArray[] = 4;
                } elseif ($i > 629 && $i < 700) {
                    $allValuesArray[] = 5;
                } elseif ($i > 699 && $i < 810) {
                    $allValuesArray[] = 7;
                } elseif ($i > 809 && $i < 860) {
                    $allValuesArray[] = 6;
                } elseif ($i > 859 && $i < 920) {
                    $allValuesArray[] = 9;
                } elseif ($i > 919 && $i < 930) {
                    if (session('freeSpinData') != false || session('freeSpinResultAllWin') != false) {
                        $allValuesArray[] = 4;
                    } else {
                        $allValuesArray[] = 4;
                    }
                } elseif ($i > 929 && $i < $this->maxNOVGFA) {
                    $allValuesArray[] = 0;
                }
            } else {
                
                if ($i < 300) {
                    $allValuesArray[] = 8;
                } elseif ($i > 299 && $i < 400) {
                    $allValuesArray[] = 1;
                } elseif ($i > 399 && $i < 500) {
                    $allValuesArray[] = 2;
                } elseif ($i > 499 && $i < 600) {
                    $allValuesArray[] = 3;
                } elseif ($i > 599 && $i < 660) {
                    $allValuesArray[] = 4;
                } elseif ($i > 659 && $i < 710) {
                    $allValuesArray[] = 5;
                } elseif ($i > 709 && $i < 810) {
                    $allValuesArray[] = 7;
                } elseif ($i > 809 && $i < 860) {
                    $allValuesArray[] = 6;
                } elseif ($i > 859 && $i < 910) {
                    $allValuesArray[] = 9;
                } elseif ($i > 909 && $i < 960) {
                    if (session('freeSpinData') != false || session('freeSpinResultAllWin') != false) {
                        $allValuesArray[] = 4;
                    } else {
                        $allValuesArray[] = 10;
                    }
                } elseif ($i > 959 && $i < $this->maxNOVGFA) {
                    $allValuesArray[] = 0;
                }
            }

        }

        $valueForCells = [];

        for ($i = 0; $i < 15; $i++) {
            if ($i < 3 || $i > 11) { // исключаем из первого и последнего барабана алмазы
                $valueForCells[] = $allValuesArray[rand(301, $this->maxNOVGFA - 1)];
            } else {
                $valueForCells[] = $allValuesArray[rand(0, $this->maxNOVGFA - 1)];
            }
        }

        $check = true;
        while ($check) {
            $newValueForCells = $this->updateValueForCells($valueForCells, $allValuesArray);
            if ($newValueForCells === $valueForCells) {
                $check = false;
            }

            $valueForCells = $newValueForCells;
        }

        if (session('freeSpinData') != false) {
            foreach ($valueForCells as $key => $valueForCell) {
                if ($valueForCell === $this->bonusValue) {
                    $valueForCells[$key] = 10;
                }
            }
        }

        return $valueForCells;

    }

    /**
     * Проверка наличия более 5 одинаковых символов
     *
     * @param $valueCounts
     * @return bool|array Возвращает false, либо значение символа, которого больше 5 и его кол-во
     */
    public function checkHave5Symbols($valueCounts)
    {
        foreach ($valueCounts as $value => $count) {
            if ($count > 5) {
                return [$value, $count];
            }
        }

        return false;
    }

    /**
     * Делаем так, чтобы в столбе не было три повторяющиеся символа. Убираем из сгенерированного набора лишние символы, чтобы их было < 5.
     *
     * @param $valueForCells
     * @param $symbol
     * @return array
     */
    public function updateValueForCells($valueForCells, $allValuesArray)
    {
        // убираем лишние зоторые манеты если ставка < 50 центов
        if ($this->bet < 50) {
            foreach ($valueForCells as $key => $valueForCell) {
                foreach ($valueForCells as $key2 => $cell) {
                    if ($cell === 10) {
                        $valueForCells[$key2] = rand(1, 9);
                    }
                }
            }
        }


        for ($i = 0; $i < 13; $i += 3) {
            if ($valueForCells[$i] === $valueForCells[$i + 1] || $valueForCells[$i] === $valueForCells[$i + 2]) {
                $valueForCells = [];

                for ($i = 0; $i < 15; $i++) {
                    $valueForCells[] = $allValuesArray[rand(300, $this->maxNOVGFA - 1)];
                }
            } elseif ($valueForCells[$i + 1] === $valueForCells[$i + 2]) {
                $valueForCells = [];

                for ($i = 0; $i < 15; $i++) {
                    $valueForCells[] = $allValuesArray[rand(300, $this->maxNOVGFA - 1)];
                }
            }
        }


        $symbol = $this->checkHave5Symbols($this->getValueCouner($valueForCells));

        for ($i = 0; $i < $symbol[1] - 5; $i++) {
            foreach ($valueForCells as $key => $cell) {
                if ($cell === $symbol[0]) {
                    if ($cell < 5) {
                        $valueForCells[$key] = $cell + 2;
                    } else {
                        $valueForCells[$key] = $cell - 2;
                    }

                    break;
                }
            }
        }

        //проверка наличина несуществующих символов
        foreach ($valueForCells as $key => $cell) {
            if ($cell === -1 || $cell === 12) {
                $valueForCells[$key] = 5;
            }
        }

        // убираем алмазы из крайних барабанов
        foreach ($valueForCells as $key => $cell) {
            if ($key < 3 || $key > 11) {
                if ($cell === 0) {
                    $valueForCells[$key] = rand(1, 9);
                }
            }
        }

        // убираем золотые монеты из фриспинов
        if (session('freeSpinData') != false || session('freeSpinResultAllWin') != false) {
            foreach ($valueForCells as $key => $cell) {
                if ($cell === 10) {
                    $valueForCells[$key] = rand(1, 9);
                }
            }
        }

        // убираем лишние золотые монеты если ставка < 50 центов
        if ($this->bet < 50) {
            foreach ($valueForCells as $key => $valueForCell) {
                foreach ($valueForCells as $key2 => $cell) {
                    if ($cell === 10) {
                        $valueForCells[$key2] = rand(1, 9);
                    }
                }
            }
        }

        // убираем алмазы из крайних барабанов еще раз
        foreach ($valueForCells as $key => $cell) {
            if ($key < 3 || $key > 11) {
                if ($cell === 0) {
                    $valueForCells[$key] = rand(1, 9);
                }
            }
        }

        // убираем рядом стоящие алмазы и монеты
        foreach ($valueForCells as $key => $cell) {
            if ($cell === 0) {
                if (isset($valueForCells[$key - 1])) {
                    if ($valueForCells[$key - 1] === 10) {
                        $valueForCells[$key] = rand(1, 9);
                    }
                }

                if (isset($valueForCells[$key + 1])) {
                    if ($valueForCells[$key + 1] === 10) {
                        $valueForCells[$key] = rand(1, 9);
                    }
                }
            }

            if ($cell === 10) {
                if (isset($valueForCells[$key - 1])) {
                    if ($valueForCells[$key - 1] === 0) {
                        $valueForCells[$key] = rand(1, 9);
                    }
                }

                if (isset($valueForCells[$key + 1])) {
                    if ($valueForCells[$key + 1] === 0) {
                        $valueForCells[$key] = rand(1, 9);
                    }
                }
            }

            if ($cell === 10) {
                if (isset($valueForCells[$key - 1])) {
                    if ($valueForCells[$key - 1] === 10) {
                        $valueForCells[$key] = rand(1, 9);
                    }
                }

                if (isset($valueForCells[$key + 1])) {
                    if ($valueForCells[$key + 1] === 10) {
                        $valueForCells[$key] = rand(1, 9);
                    }
                }
            }

            if ($cell === 0) {
                if (isset($valueForCells[$key - 1])) {
                    if ($valueForCells[$key - 1] === 0) {
                        $valueForCells[$key] = rand(1, 9);
                    }
                }

                if (isset($valueForCells[$key + 1])) {
                    if ($valueForCells[$key + 1] === 0) {
                        $valueForCells[$key] = rand(1, 9);
                    }
                }
            }
        }

        return $valueForCells;
    }

    /**
     * Получаем кол-во каждого элемента в массиве
     *
     * @param $valueForCells
     * @return array
     */
    public function getValueCouner($valueForCells)
    {
        $valueCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        foreach ($valueForCells as $cell) {
            switch ($cell) {
                case 0:
                    $valueCounts[0] += 1;
                    break;
                case 1:
                    $valueCounts[1] += 1;
                    break;
                case 2:
                    $valueCounts[2] += 1;
                    break;
                case 3:
                    $valueCounts[3] += 1;
                    break;
                case 4:
                    $valueCounts[4] += 1;
                    break;
                case 5:
                    $valueCounts[5] += 1;
                    break;
                case 6:
                    $valueCounts[6] += 1;
                    break;
                case 7:
                    $valueCounts[7] += 1;
                    break;
                case 8:
                    $valueCounts[8] += 1;
                    break;
                case 9:
                    $valueCounts[9] += 1;
                    break;
                case 10:
                    $valueCounts[10] += 1;
                    break;
            }
        }

        return $valueCounts;
    }

    // проверяем на наличие особых значений запускающих бонусную игру. Если есть, то возвращаем 'freeSpin'
    public function checkBonusGame(array $cellValues, int $bonusValue)
    {
        $counter = 0;
        foreach ($cellValues as $value) {
            if ($value == $bonusValue || $value == $this->jokerValue) {
                $counter += 1;
            }
        }

        if ($counter > 2) {
            return 'bonus';
        }
    }

    // получаем общее кол-во значений на линии
    public function getCountCellValuesOnLine(array $cellNumbers, array $cellValues)
    {
        $countCellValuesOnLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        foreach ($cellNumbers as $cellNumber) {
            switch ($cellValues[$cellNumber]) {
                case 0:
                    $countCellValuesOnLine[0] += 1;
                    break;
                case 1:
                    $countCellValuesOnLine[1] += 1;
                    break;
                case 2:
                    $countCellValuesOnLine[2] += 1;
                    break;
                case 3:
                    $countCellValuesOnLine[3] += 1;
                    break;
                case 4:
                    $countCellValuesOnLine[4] += 1;
                    break;
                case 5:
                    $countCellValuesOnLine[5] += 1;
                    break;
                case 6:
                    $countCellValuesOnLine[6] += 1;
                    break;
                case 7:
                    $countCellValuesOnLine[7] += 1;
                    break;
                case 8:
                    $countCellValuesOnLine[8] += 1;
                    break;
                case 9:
                    $countCellValuesOnLine[9] += 1;
                    break;
                case 10:
                    $countCellValuesOnLine[10] += 1;
                    break;
            }
        }

        return $countCellValuesOnLine;
    }


    public function getCountJokersOnLine(array $countCellValuesOnLine, int $jokerValue)
    {
        $count = $countCellValuesOnLine[$jokerValue];

        return $count;
    }

    // получаем наиболее стоящий выигрышь
    public function getMaxWinLineData(array $winLineDataArray)
    {
        $maxWinLineData = [0, 0, 0];
        foreach ($winLineDataArray as $item) {
            if ($item[2] > $maxWinLineData[2]) {
                $maxWinLineData = $item;
            }
        }

        return $maxWinLineData;
    }

    // отсекаем пустые наборы данных
    public function trimEmptyWinLineData(array $winLinesData)
    {
        $newWinLineData = [];
        foreach ($winLinesData as $item) {
            if ($item[2] !== 0) {
                $newWinLineData[] = $item;
            }
        }


        return $newWinLineData;
    }

    /**
     * Получение общей суммы выигрыша
     *
     * @return int $allWin
     */
    public function getAllWin($gameRules, $winLinesData, $betLine)
    {
        $allWin = 0;

        foreach ($gameRules->winRules as $key => $rule) {
            foreach ($winLinesData as $winLineData) {
                if ($rule[0] == $winLineData[1]) {
                    if ($rule[1] == $winLineData[2]) {
                        $allWinItr = $betLine * $rule[2];

                        // проверка на наличие в линии joker
                        foreach ($gameRules->lines as $key => $lineNumbres) {
                            if ($key === $winLineData[0]) {
                                foreach ($lineNumbres as $lineNumbre) {
                                    if ($this->info[$lineNumbre] === $this->jokerValue && $this->winCellInfo[$lineNumbre] === $this->jokerValue) {
                                        $allWinItr *= 2;
                                        break(2);
                                    }
                                }
                            }
                        }

                        $allWin += $allWinItr;
                    }
                }
            }
        }

        return $allWin;
    }

    public function correctionFreeSpinCounter()
    {
        // проверить наличие записи о фриспинах для данного пользователя и данной игры
        $freeSpinDB = (new SavedDataBundle())
            ->where('user_id', '=', session('userId'))
            ->where('game_id', '=', session('gameId'))
            ->where('session_name', '=', session('sessionName'))
            ->get()
            ->last();

        if ($freeSpinDB) {
            if (json_decode($freeSpinDB->data)->freeSpinData->count <= 1) {
                $freeSpinDB->delete();

                $this->setNewFreeSpinDB();
                $newCount = session('freeSpinData')['count'] - 1;
            } else {
                $data = json_decode($freeSpinDB->data);
                $countDB = $data->freeSpinData->count;
                $newCount = $countDB - 1; // отнимаем 1 так как не учитывается предыдущая итерация

                // исправление значения в сессии
                $freeSpinData = session('freeSpinData');
                if (($freeSpinData['count'] - 1) !== $newCount) {
                    $freeSpinData['count'] = $newCount;
                    session(['freeSpinData' => $freeSpinData]);
                }

                $data->freeSpinData->count = $newCount;

                $freeSpinDB->data = json_encode($data);
                $freeSpinDB->save();
            }
        } else {
            $this->setNewFreeSpinDB();
            $newCount = session('freeSpinData')['count'] - 1;
        }

        return $newCount;
    }

    public function setNewFreeSpinDB()
    {
        $freeSpinData = session('freeSpinData');
        $freeSpinData['count'] = $freeSpinData['count'] - 1;
        $freeSpinDB = new SavedDataBundle();
        $freeSpinDB->user_id = 1;
        $freeSpinDB->game_id = 1;
        $freeSpinDB->session_name = session('sessionName');
        $freeSpinDB->data = json_encode(['freeSpinData' => $freeSpinData]);
        $freeSpinDB->save();
    }

}
