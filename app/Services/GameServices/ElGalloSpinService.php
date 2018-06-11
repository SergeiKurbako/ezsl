<?php

namespace App\Services\GameServices;

use App\Models\Jackpot;
use App\Models\SavedDataBundle;

class ElGalloSpinService extends AbstractSpinService
{
    private $jokerValue = 0;
    private $bonusValue = 2;
    private $wl = [];
    private $balance;
    private $allWin;
    private $rope = false;
    private $freeSpinData;
    private $jackpotPercentageIncrease = 0.005;
    private $bet;

    public function getSpinResultData($betLine, $linesInGame, $gameName, $data = 'main')
    {
        session(['userId' => 1]);
        session(['gameId' => 2]);

        if ($data === 'main') {
            $result = $this->getSpinData($betLine, $linesInGame, $gameName);
        } else {
            $result = $this->getTestSpinData($betLine, $linesInGame, $gameName, $data);
        }

        return $result;
    }

    //$this->getGameRules($gameName);
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


        $this->balance = session('balance');

        $this->bet = $linesInGame * $betLine;
        $this->allWin = session('allWin');

        // при недостаточном балансе отправляется false
        if ((session('balance') - ($betLine * $linesInGame) + $this->allWin) < 0) {
            if (session('freeSpinData') == false) {
                return false;
            }
        }

        $gameRules = $this->getGameRules($gameName);

        // прибавляем к балансу предыдущий выигрышь
        session(['balance' => (session('balance') + session('allWin'))]);
        session(['cardGameIteration' => 0]);

        session(['allWin' => 0]); // обнуляем общий выигрышь
        $this->allWin = 0;

        $info = $this->generatingValuesForCells($gameRules);
        //$info = [8,2,2,2,7,8,6,7,8,4,2,8,2,11,1];

        $winBonusSymbolsData = $this->getWinBonusSymbolsData($gameRules, $info, $this->bonusValue); // [count, winValue]

        // джекпот
        if (session('freeSpinData') == false) {
            $this->updateJackpots($betLine, $linesInGame, $this->jackpotPercentageIncrease);
            $jackpotData = $this->getJackpotData();

            if ($winBonusSymbolsData[0] < 3) {
                if ($this->bet >= 50) {
                    $jackpot = $this->getJackpot();
                } else {
                    $jackpot = false;
                }
            } else {
                $jackpot = false;
            }
        } else {
            $jackpotData = $this->getJackpotData();
            $jackpot = false;
        }

        if ($jackpot == false && $winBonusSymbolsData[0] < 3) {
            $winLinesData = $this->getWinLinesData($gameRules, $info, $linesInGame);
        } else {
            if ($winBonusSymbolsData[0] > 2) {
                $winLinesData = 'freeSpin';
            } else { // иначе - это джекпот
                $winLinesData = [];
            }
        }


        $winCellInfo = [];

        if ($winLinesData == 'freeSpin') {
            $this->firstStartFreeSpin($betLine, $linesInGame, $winBonusSymbolsData);
            $this->balance = session('balance') - $betLine * $linesInGame;
        } else {
            if (session('freeSpinData') != false) {
                $this->freeSpinIteration($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame);
            } else {
                $this->allWin += $this->getAllWinWithBonus($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame);
                $this->balance = session('balance') - $betLine * $linesInGame; // выигрыш прибавляется на следующем ходу
                session(['allWin' => (session('allWin') + $this->allWin)]);
            }

            $winCellInfo = $this->getWinCellInfo($winLinesData, $gameRules, $info);
            $this->wl = $this->getWl($gameRules, $winLinesData, $betLine);
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
            'jackpot' => $jackpot,
            'jackpotData' => $jackpotData,
            'freeSpinDara' => session('freeSpinData'),
            'reconnect' => session('reconnect')
        ];

        return $spinResultData;
    }

    /**
     * Тестовая функция getSpinData
     *
     * @param $betLine
     * @param $linesInGame
     * @param $gameName
     * @param $data
     * @return array
     */
    public function getTestSpinData($betLine, $linesInGame, $gameName, $data)
    {
        $bet = $linesInGame * $betLine;
        $this->balance = session('balance');
        $this->allWin = session('allWin');

        $gameRules = $this->getGameRules($gameName);

        // прибавляем к балансу предыдущий выигрышь
        session(['balance' => (session('balance') + session('allWin'))]);
        session(['cardGameIteration' => 0]);

        session(['allWin' => 0]); // обнуляем общий выигрышь
        $this->allWin = 0;

        $info = $data;
        //$info = [7,0,3,9,10,8,1,8,4,1,9,8,5,10,1];

        $winBonusSymbolsData = $this->getWinBonusSymbolsData($gameRules, $info, $this->bonusValue); // [count, winValue]

        // джекпот
        //$jackpot = $this->getJackpot();

        if (session('freeSpinData') == false) {
            if ($winBonusSymbolsData[0] < 2) {
                if ($bet >= 50) {
                    $jackpot = $this->getJackpot();
                } else {
                    $jackpot = false;
                }
            } else {
                $jackpot = false;
            }
        } else {
            $jackpot = false;
        }

        if ($jackpot == false && $winBonusSymbolsData[0] < 3) {
            $winLinesData = $this->getWinLinesData($gameRules, $info, $linesInGame);
        } else {
            if ($winBonusSymbolsData[0] > 2) {
                $winLinesData = 'freeSpin';
            } else {
                $winLinesData = [];
            }
        }


        $winCellInfo = [];


        //$winLinesData = 'freeSpin';

        if ($winLinesData == 'freeSpin') {
            $this->firstStartFreeSpin($betLine, $linesInGame, $winBonusSymbolsData);
            $this->balance = session('balance') - $betLine * $linesInGame;
        } else {
            if (session('freeSpinData') != false) {
                $this->freeSpinIteration($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame);
            } else {
                $this->allWin += $this->getAllWinWithBonus($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame);
                $this->balance = session('balance') - $betLine * $linesInGame; // выигрыш прибавляется на следующем ходу
                session(['allWin' => (session('allWin') + $this->allWin)]);
            }

            $winCellInfo = $this->getWinCellInfo($winLinesData, $gameRules, $info);
            $this->wl = $this->getWl($gameRules, $winLinesData, $betLine);
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
            'jackpot' => $jackpot
        ];

        return $spinResultData;
    }

    public function getLiteTestSpinData($betLine, $linesInGame, $gameName)
    {
        $gameRules = $this->getGameRules($gameName);

        $info = $this->generatingValuesForCells($gameRules);

        $winBonusSymbolsData = [0, 0];

        $winLinesData = $this->getWinLinesData($gameRules, $info, $linesInGame);

        $this->allWin += $this->getAllWinWithBonus($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame);
        $this->balance = session('balance') - $betLine * $linesInGame; // выигрыш прибавляется на следующем ходу
        session(['allWin' => (session('allWin') + $this->allWin)]);

        $this->wl = $this->getWl($gameRules, $winLinesData, $betLine);

        $spinResultData = [
            'allWin' => $this->allWin,
            'balance' => $this->balance,
        ];

        return $spinResultData;
    }


    public function updateJackpots(int $betLine, int $linesInGame, float $jackpotPercentageIncrease)
    {
        $increase = $betLine * $linesInGame * $jackpotPercentageIncrease;

        $jackpots = Jackpot::firstOrFail();

        if (($jackpots->mini + $increase) <= $jackpots->max_mini) {
            $jackpots->mini += $increase;
        } else {
            $jackpots->mini = $jackpots->max_mini;
        }

        if (($jackpots->minor + $increase) <= $jackpots->max_minor) {
            $jackpots->minor += $increase;
        } else {
            $jackpots->minor = $jackpots->max_minor;
        }

        if (($jackpots->major + $increase) <= $jackpots->max_major) {
            $jackpots->major += $increase;
        } else {
            $jackpots->major = $jackpots->max_major;
        }

        if (($jackpots->big_daddy + $increase) <= $jackpots->max_big_daddy) {
            $jackpots->big_daddy += $increase;
        } else {
            $jackpots->big_daddy = $jackpots->max_big_daddy;
        }

        $jackpots->save();
    }

    public function getJackpotData()
    {
        $data = Jackpot::firstOrFail()->toArray();

        $jackpotsData = ['MINI' => floor($data['mini']), 'MINOR' => floor($data['minor']), 'MAJOR' => floor($data['major']), 'BIG DADDY' => floor($data['big_daddy'])];

        return $jackpotsData;
    }

    public function getWinCellInfo($winLinesData, $gameRules, $info)
    {
        // получаем позиции выйгравших ячеек и их значения
        $winCellPositions = [];
        $winCellInfo = [];
        foreach ($winLinesData as $item) { //получаем информацию по отдельной выигрышной линии
            if ($item !== 0) {
                $savedKey = -1;
                foreach ($gameRules->lines[$item[0]] as $key => $cellPosition) {
                    // проверяем есть ли в данной линии символ-joker
                    if ($info[$cellPosition] == 0) {
                        if ($savedKey === ($key - 1)) {
                            $winCellPositions[] = [$cellPosition, 0]; // записываем позицию ячейки и ее значение
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

        return $winCellInfo;
    }

    protected function getWl($gameRules, $winLinesData, $betLine)
    {
        $winOfLines = [];
        for ($i = 1; $i <= 25; $i++) {
            foreach ($winLinesData as $winLineData) {
                if (($winLineData[0] + 1) != $i) {
                    $winOfLines[$i] = 0;
                } else {
                    foreach ($gameRules->winRules as $rule) {
                        if ($rule[0] == $winLineData[1]) {
                            if ($rule[1] == $winLineData[2]) {
                                $winOfLines[$i] = $betLine * $rule[2];
                            }
                        }
                    }
                    break;
                }
            }
        }

        return $winOfLines;
    }

    public function getDoubleResultData($selectedCard)
    {
        $prevAllWin = session('allWin');
        $win = false;
        $dcard = false;
        $count = 0;

        if ($selectedCard === 'red' || $selectedCard === 'black') { // если выбран цвет цвет
            $rand = rand(1, 100);

            if ($rand > 55) {
                // выигрышь

                $count = session('cardGameIteration') + 1;
                session(['cardGameIteration' => $count]);

                if ($count >= 6) {
                    return false;
                }

                if ($selectedCard === 'red') {
                    session(['allWin' => $prevAllWin * 2]);
                    $this->allWin = $prevAllWin * 2;
                    $win = true;

                    $array = ['c', 'b'];
                    $dcard = $array[array_rand($array)];
                    session(['dcard' => $dcard]);
                }

                if ($selectedCard === 'black') {
                    session(['allWin' => $prevAllWin * 2]);
                    $this->allWin = $prevAllWin * 2;
                    $win = true;

                    $array = ['p', 'k'];
                    $dcard = $array[array_rand($array)];
                    session(['dcard' => $dcard]);
                }

            } else {
                // проигрышь

                $win = false;

                if ($selectedCard === 'red') {
                    $array = ['k', 'p'];
                    $dcard = $array[array_rand($array)];
                    session(['dcard' => $dcard]);
                }

                if ($selectedCard === 'black') {
                    $array = ['c', 'b'];
                    $dcard = $array[array_rand($array)];
                    session(['dcard' => $dcard]);
                }

                session(['cardGameIteration' => 0]);
                session(['allWin' => 0]);
                $this->allWin = 0;
                $win = false;
            }
        } else { // если выбрана масть
            $rand = rand(1, 100);

            if ($rand > 80) {
                // выигрышь

                $count = session('cardGameIteration') + 1;
                session(['cardGameIteration' => $count]);

                if ($count >= 6) {
                    return false;
                }

                if ($selectedCard === 'c') {
                    session(['allWin' => $prevAllWin * 4]);
                    $this->allWin = $prevAllWin * 4;
                    $win = true;
                    $dcard = 'c';

                    session(['dcard' => 'c']);
                }

                if ($selectedCard === 'b') {
                    session(['allWin' => $prevAllWin * 4]);
                    $this->allWin = $prevAllWin * 4;
                    $win = true;

                    $dcard = 'b';
                    session(['dcard' => 'b']);
                }

                if ($selectedCard === 'k') {
                    session(['allWin' => $prevAllWin * 4]);
                    $this->allWin = $prevAllWin * 4;
                    $win = true;

                    $dcard = 'k';
                    session(['dcard' => 'k']);
                }

                if ($selectedCard === 'p') {
                    session(['allWin' => $prevAllWin * 4]);
                    $this->allWin = $prevAllWin * 4;
                    $win = true;

                    $dcard = 'p';
                    session(['dcard' => 'p']);
                }
            } else {
                // проигрышь

                if ($selectedCard === 'c' || $selectedCard === 'b') {
                    $array = ['k', 'p'];
                    $dcard = $array[array_rand($array)];
                    session(['dcard' => $dcard]);
                }

                if ($selectedCard === 'k' || $selectedCard === 'p') {
                    $array = ['c', 'b'];
                    $dcard = $array[array_rand($array)];
                    session(['dcard' => $dcard]);
                }

                session(['cardGameIteration' => 0]);
                session(['allWin' => 0]);
                $this->allWin = 0;
                $win = false;
            }
        }


        return [
            'win' => $win,
            'allWin' => $this->allWin,
            'dcard' => $dcard,
            'count' => $count
        ];
    }

    /**
     * Получение jackpot
     *
     * @return array|bool
     */
    public function getJackpot()
    {
        $jackpots = $this->getJackpotData();

        $data = Jackpot::firstOrFail()->toArray();

        // выпадает первый достигнувший своего выигрышного значения джекпот
        if ($jackpots['MINI'] >= $data['result_mini']) {
            session(['allWin' => (session('allWin') + $data['result_mini'])]);
            $this->allWin = session('allWin');
            $jackpots['result'] = 'MINI';

            // генерация нового выигрышного значения
            $jackpot = Jackpot::firstOrFail();
            $jackpot->result_mini = rand(1000, 4000);
            $jackpot->save();

            // обнуляем джекпот выигравшей категории
            $this->resetJackpot('MINI');

            // добавляем данные для отображения после джекпота на первом экране
            $jackpots['nextData'] = $this->getJackpotData();

            return $jackpots;
        }

        if ($jackpots['MINOR'] >= $data['result_minor']) {
            session(['allWin' => (session('allWin') + $data['result_minor'])]);
            $this->allWin = session('allWin');
            $jackpots['result'] = 'MINOR';

            // генерация нового выигрышного значения
            $jackpot = Jackpot::firstOrFail();
            $jackpot->result_minor = rand(5000, 25000);
            $jackpot->save();

            // обнуляем джекпот выигравшей категории
            $this->resetJackpot('MINOR');

            // добавляем данные для отображения после джекпота на первом экране
            $jackpots['nextData'] = $this->getJackpotData();

            return $jackpots;
        }

        if ($jackpots['MAJOR'] >= $data['result_major']) {
            session(['allWin' => (session('allWin') + $data['result_major'])]);
            $this->allWin = session('allWin');
            $jackpots['result'] = 'MAJOR';

            // генерация нового выигрышного значения
            $jackpot = Jackpot::firstOrFail();
            $jackpot->result_major = rand(25000, 35000);
            $jackpot->save();

            // обнуляем джекпот выигравшей категории
            $this->resetJackpot('MAJOR');

            // добавляем данные для отображения после джекпота на первом экране
            $jackpots['nextData'] = $this->getJackpotData();

            return $jackpots;
        }

        if ($jackpots['BIG DADDY'] >= $data['result_big_daddy']) {
            session(['allWin' => (session('allWin') + $data['result_big_daddy'])]);
            $this->allWin = session('allWin');
            $jackpots['result'] = 'BIG DADDY';

            // генерация нового выигрышного значения
            $jackpot = Jackpot::firstOrFail();
            $jackpot->result_big_daddy = rand(50000, 100000);
            $jackpot->save();

            // обнуляем джекпот выигравшей категории
            $this->resetJackpot('BIG DADDY');

            // добавляем данные для отображения после джекпота на первом экране
            $jackpots['nextData'] = $this->getJackpotData();

            return $jackpots;
        }

        return false;
    }

    public function resetJackpot(string $jackpotKey)
    {
        $jackpotDB = Jackpot::firstOrFail();

        switch ($jackpotKey) {
            case 'MINI' :
                //$remainder = $jackpotDB->mini - floor($jackpotDB->mini);
                $jackpotDB->mini = $jackpotDB->min_mini;
                break;
            case 'MINOR' :
                //$remainder = $jackpotDB->minor - floor($jackpotDB->minor);
                $jackpotDB->minor = $jackpotDB->min_minor;
                break;
            case 'MAJOR' :
                //$remainder = $jackpotDB->major - floor($jackpotDB->major);
                $jackpotDB->major = $jackpotDB->min_major;
                break;
            case 'BIG DADDY' :
                //$remainder = $jackpotDB->big_daddy - floor($jackpotDB->big_daddy);
                $jackpotDB->big_daddy = $jackpotDB->min_big_daddy;
                break;
        }

        $jackpotDB->save();
    }

    /**
     * Получение выигрыша с учетов бонусной игры и выигрыша не по линиям
     *
     * @param $gameRules
     * @param $winLinesData
     * @param $betLine
     * @param $winBonusSymbolsData
     */
    public function getAllWinWithBonus($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame)
    {
        $freeSpinData = session('freeSpinData');

        if (session('freeSpinData')) {
            $this->allWin = $this->getAllWin($gameRules, $winLinesData, $betLine) * $freeSpinData['mul'];
        } else {
            $this->allWin = $this->getAllWin($gameRules, $winLinesData, $betLine);
        }

        if ($winBonusSymbolsData !== [0, 0]) {
            $this->allWin += $winBonusSymbolsData[1] * $betLine * $linesInGame;
        }
    }

    /**
     * Запуск игры freeSpin
     *
     * @param $betLine
     * @param $linesInGame
     * @param $winBonusSymbolsData
     */
    public function firstStartFreeSpin($betLine, $linesInGame, $winBonusSymbolsData)
    {
        $this->wl = [];
        $this->rope = $this->getRope(); // ['count' => ... , 'mul' => ..., 'allWin' => ..., 'repeat' => ...]
        $this->rope['allWin'] = $betLine * $linesInGame * $winBonusSymbolsData[1];
        session(['linesInGame' => $linesInGame]);
        session(['freeSpinData' => $this->rope]);
        session(['preAllWinOnRope' => $betLine * $linesInGame * $winBonusSymbolsData[1]]);

        //$this->allWin = $betLine * $linesInGame * $winBonusSymbolsData[1];
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
    public function freeSpinIteration($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame)
    {
        $freeSpinData = session('freeSpinData');

        if ($freeSpinData['count'] <= 0) {
            session(['freeSpinData' => false]);
            session(['linesInGame' => false]);

            return false;
        }

        $newCount = $this->correctionFreeSpinCounter();

        session(['freeSpinData' => [
            'count' => $newCount,
            'mul' => $freeSpinData['mul'],
            'allWin' => ($freeSpinData['allWin'] + ($this->getAllWin($gameRules, $winLinesData, $betLine) * $freeSpinData['mul']) + $this->getAllWinWithBonus($gameRules, $winLinesData, $betLine, $winBonusSymbolsData, $linesInGame)),
            'repeat' => $freeSpinData['repeat']
        ]]);


        $this->balance = session('balance');
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
            if ($item === $bonusValue) {
                $bonusSymbolCount += 1;
            }
        }

        // в случае если не достаточно бонусных символов, то выходим
        if ($bonusSymbolCount <= 1) {
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


    /**
     * Обработка выбора пользователя после freeSpin
     *
     * @param string $choice
     * @return array|string
     */
    public function getChoiceResultData(string $choice)
    {
        $freeSpinData = session('freeSpinData');

        if ($freeSpinData['count'] !== 0) {
            return 'freeSpin don\'t ended';
        }

        switch ($choice) {
            case 'repeat' :
                if ($freeSpinData['repeat'] === false) {
                    $rope = $this->getRope($freeSpinData['repeat']); // ['count' => ... , 'mul' => ..., 'allWin' => ... , 'repeat' => false]
                    $rope['allWin'] = session('preAllWinOnRope');
                    session(['preAllWinOnRope' => 0]);
                    session(['freeSpinData' => $rope]);
                    session(['allWin' => 0]);
                    return session('freeSpinData');
                } else {
                    session(['freeSpinData' => false]);
                    return 'repeat error';
                }

            case 'get' :
                session(['balance' => (session('balance') + $freeSpinData['allWin'])]);

                $this->balance = session('balance');
                session(['freeSpinData' => false]);

                return $freeSpinData['allWin'];
            case 'random' :
                $middle = floor($freeSpinData['allWin']/2);

                if (($freeSpinData['allWin'] - $middle) > 0) {
                    $minRand = $freeSpinData['allWin'] - $middle;
                } else {
                    $minRand = 0;
                }

                $maxRand = $freeSpinData['allWin'] + $middle;

                $randWin = rand($minRand, $maxRand);
                session(['balance' => (session('balance') + $randWin)]);

                $this->balance = session('balance');
                session(['freeSpinData' => false]);
                return $randWin;
        }
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

        if ($this->checkBonusGame($info, $this->bonusValue) === 'bonus') {
            if (!session('freeSpinData')) {
                return 'freeSpin';
            }
        }

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
                    if ($valueCounter > 2) {

                        $checkStep = false;

                        if ($info[$cellNumbers[0]] === $value || $info[$cellNumbers[0]] === $this->jokerValue) {
                            $checkStep = true;
                            for ($i = 0; $i < ($valueCounter - 1); $i++) {

                                if ($value !== $info[$cellNumbers[$i + 1]] && $info[$cellNumbers[$i + 1]] !== $this->jokerValue) {
                                    if ($i > 1) {
                                        $winLineData[0] = $lineNumber;
                                        $winLineData[1] = $value;
                                        $winLineData[2] = $i + 1;

                                        $winLineDataArray[] = $winLineData;

                                        break(2);
                                    }

                                    $checkStep = false;
                                    break;
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
     * @param string $repeat
     * @return array|string
     */
    private function getRope($repeat = 'start')
    {
        $countsArray = [10, 15, 20, 25, 30];
        if ($repeat === false) {
            $freeSpinData = ['count' => $countsArray[array_rand($countsArray)], 'mul' => rand(1, 5), 'allWin' => 0, 'repeat' => true];
        } elseif ($repeat === 'start') {
            $freeSpinData = ['count' => $countsArray[array_rand($countsArray)], 'mul' => rand(1, 5), 'allWin' => 0, 'repeat' => false];
        } else {
            return 'repeat error';
        }

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
        for ($i = 0; $i < 1000; $i++) {
            if ($i < 173) { //97%
                $allValuesArray[] = 8;
            } elseif ($i > 172 && $i < 343) {
                $allValuesArray[] = 3;
            } elseif ($i > 342 && $i < 491) {
                $allValuesArray[] = 7;
            } elseif ($i > 490 && $i < 620) {
                $allValuesArray[] = 6;
            } elseif ($i > 619 && $i < 720) {
                $allValuesArray[] = 11;
            } elseif ($i > 719 && $i < 790) {
                $allValuesArray[] = 1;
            } elseif ($i > 789 && $i < 850) {
                $allValuesArray[] = 9;
            } elseif ($i > 849 && $i < 900) {
                $allValuesArray[] = 5;
            } elseif ($i > 898 && $i < 920) {
                $allValuesArray[] = 4;
            } elseif ($i > 919 && $i < 951) {
                $allValuesArray[] = 10;
            } elseif ($i > 950 && $i < 971) {
                if (session('freeSpinData') != false) {
                    $allValuesArray[] = 8;
                } else {
                    $allValuesArray[] = 2;
                }
            } elseif ($i > 970 && $i < 1000) {
                $allValuesArray[] = 0;
            }

            /*if ($i < 180) { // для частого выпадения петухов
                $allValuesArray[] = 8;
            } elseif ($i > 179 && $i < 350) {
                $allValuesArray[] = 3;
            } elseif ($i > 349 && $i < 500) {
                $allValuesArray[] = 7;
            } elseif ($i > 499 && $i < 630) {
                $allValuesArray[] = 6;
            } elseif ($i > 629 && $i < 730) {
                $allValuesArray[] = 11;
            } elseif ($i > 729 && $i < 800) {
                $allValuesArray[] = 1;
            } elseif ($i > 970 && $i < 970) {
                $allValuesArray[] = 9;
            } elseif ($i > 970 && $i < 970) {
                $allValuesArray[] = 5;
            } elseif ($i > 970 && $i < 970) {
                $allValuesArray[] = 4;
            } elseif ($i > 970 && $i < 970) {
                $allValuesArray[] = 10;
            } elseif ($i > 799 && $i < 970) {
                if (session('freeSpinData') != false) {
                    $allValuesArray[] = 8;
                } else {
                    $allValuesArray[] = 2;
                }
            } elseif ($i > 969 && $i < 1000) {
                $allValuesArray[] = 0;
            }*/
        }

        $valueForCells = [];

        for ($i = 0; $i < 15; $i++) {
            $valueForCells[] = $allValuesArray[rand(0, 999)];
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
        // задаем вероятность выпадения петухов
        // убираем лишних петухов если ставка < 50 центов
        if ($this->bet < 50) {
            $count = 0;
            foreach ($valueForCells as $key => $valueForCell) {
                if ($valueForCell === 2) {
                    $count += 1;
                }

                if ($count > 2) {
                    $valueForCells = [];

                    for ($i = 0; $i < 15; $i++) {
                        $valueForCells[] = $allValuesArray[rand(0, 999)];
                    }
                }
            }
        }

        // убираем петухов из фреспинов
        if (session('freeSpinData') != false) {
            $count = 0;
            foreach ($valueForCells as $key => $valueForCell) {
                if ($valueForCell === 2) {
                    $count += 1;
                }

                if ($count > 0) {
                    $valueForCells = [];

                    for ($i = 0; $i < 15; $i++) {
                        $valueForCells[] = $allValuesArray[rand(0, 999)];
                    }
                }
            }
        }

        for ($i = 0; $i < 13; $i += 3) {
            if ($valueForCells[$i] === $valueForCells[$i + 1] || $valueForCells[$i] === $valueForCells[$i + 2]) {
                $valueForCells = [];

                for ($i = 0; $i < 15; $i++) {
                    $valueForCells[] = $allValuesArray[rand(0, 999)];
                }
            } elseif ($valueForCells[$i + 1] === $valueForCells[$i + 2]) {
                $valueForCells = [];

                for ($i = 0; $i < 15; $i++) {
                    $valueForCells[] = $allValuesArray[rand(0, 999)];
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

        // задаем вероятность выпадения фриспинов петухов
        if ($this->bet > 50) {
            $count = 0;
            foreach ($valueForCells as $key => $valueForCell) {
                if ($valueForCell === 2) {
                    $count += 1;
                }

                if ($count > 2) {
                    //if (rand(0, 1)) {
                    if (0) { //вероятность выпадения фриспинов не ограничевается
                        $valueForCells = [];

                        for ($i = 0; $i < 15; $i++) {
                            $valueForCells[] = $allValuesArray[rand(0, 999)];
                        }
                    }
                }
            }
        }

        // убираем лишних петухов если ставка < 50 центов
        if ($this->bet < 50) {
            $count = 0;
            foreach ($valueForCells as $key => $valueForCell) {
                if ($valueForCell === 2) {
                    $count += 1;
                }

                if ($count > 2) {
                    $valueForCells = [];

                    for ($i = 0; $i < 15; $i++) {
                        $valueForCells[] = $allValuesArray[rand(0, 999)];
                    }
                }
            }
        }

        // убираем петухов из фреспинов
        if (session('freeSpinData') != false) {
            $count = 0;
            foreach ($valueForCells as $key => $valueForCell) {
                if ($valueForCell === 2) {
                    $count += 1;
                }

                if ($count > 0) {
                    $valueForCells = [];

                    for ($i = 0; $i < 15; $i++) {
                        $valueForCells[] = $allValuesArray[rand(0, 999)];
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
                case 11:
                    $valueCounts[11] += 1;
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
            if ($value == $bonusValue) {
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
                case 11:
                    $countCellValuesOnLine[11] += 1;
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
                        $allWin += $betLine * $rule[2];
                    }
                }
            }
        }

        return $allWin;
    }

    public function correctionFreeSpinCounter()
    {
        // проверить наличие записи о фриспинах для данного пользователя и данной иггры
        $freeSpinDB = (new SavedDataBundle())
            ->where('user_id', '=', session('userId'))
            ->where('game_id', '=', session('gameId'))
            ->where('session_name', '=', session('sessionName'))
            ->get()
            ->last();

        if ($freeSpinDB) {
            if (json_decode($freeSpinDB->data)->freeSpinData->count <= 0) {
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
        $freeSpinDB->game_id = 2;
        $freeSpinDB->session_name = session('sessionName');
        $freeSpinDB->data = json_encode(['freeSpinData' => $freeSpinData]);
        $freeSpinDB->save();
    }
}
