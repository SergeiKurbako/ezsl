<?php
namespace App\Services\GameServices;


class AlaskaSpinService extends AbstractSpinService
{

    public function getSpinResultData($betLine, $linesInGame, $gameName)
    {
        $gameRules = $this->getGameRules($gameName);

        $info = $this->generatingValuesForCells($gameRules); //$info = [1,2,3,1,5,6,1,8,0,1,2,3,4,5,6];
        //$info = [1,1,1,2,4,5,4,3,1,2,0,1,11,11,11]; // freeSpin
        //$info = [1,9,1,2,4,5,2,3,1,11,2,7,6,8,11]; // empty
        //$info = [0,9,1,0,2,5,0,3,1,11,2,7,6,8,2]; // win joker-symbol
        //$info = [1,9,1,0,4,5,0,3,1,11,2,7,6,8,1]; // fish
        //$info = [0,2,3,5,4,6,4,5,1,11,2,7,6,8,1]; // спорная ситуация

        // запрещаем одновременное появление на экране более двух жокер символов
        /*$jokerCount = 0;
        foreach ($info as $cellValue) {
            if($cellValue === 0) {
                $jokerCount += 1;
            }
        }
        if($jokerCount > 2) {
            $symbolCount = 0;
            foreach ($info as $key => $cellValue) {
                if($symbolCount > 1) {
                    $info[$key] = rand(2,10);
                }
                if($cellValue === 0) {
                    $symbolCount += 1;
                }
            }
        }*/

        // получаем выигрышные линии
        $winLinesData = $this->getWinLinesData($gameRules, $info, $linesInGame);

        $freeSpin = session('gameData');

        // проверям была ли инициализированная дополнительная переменная для подсчета кол-ва бесплатных спинов
        if ($freeSpin === 0) {
            $freeSpin = false;
        } elseif($freeSpin > 1) {
            $freeSpin = $freeSpin - 1;
        }

        if ($winLinesData == 'rope') {
            $rope = $this->getRope();
            
            for($i = 0; $i < 15; $i++) {
                if($i == 0 || $i == 1 || $i == 2 || $i == 12 || $i == 13 || $i == 14) {
                    if($info[$i] == 1) {
                        $winCellInfo[] = 1;
                    } else {
                        $winCellInfo[] = false;
                    }
                } else {
                    $winCellInfo[] = false;
                }
            }

            $allWin = 0;
            foreach ($rope as $item) { // сумма выигрыша
                $allWin += $item;
            }

            session(['allWin' => $allWin]);
            $balance = session('balance') + $allWin - $betLine*$linesInGame;

        } elseif($winLinesData === '15freeSpin') {
            $rope = '15freeSpin';

            $count = 0;
            for($i = 0; $i < 15; $i++) {
                if($info[$i] == 11) {
                    $count += 1;
                    $winCellInfo[] = 11;
                } else {
                    $winCellInfo[] = false;
                }
            }

            if($count == 3) {
                $allWin = $betLine*$linesInGame*5;
            } elseif ($count == 4) {
                $allWin = $betLine*$linesInGame*10;
            } elseif ($count > 4) {
                $allWin = $betLine*$linesInGame*100;
            }

            // если в игре с бесплтными спинами выпадает она же еще раз, то удваиваем за нее выигышь
            if(is_numeric($freeSpin)) {
                $balance = session('balance') + $allWin*2;
                session(['allWin' => $allWin*2]);
                $allWin = $allWin*2;
            } else {
                $balance = session('balance') + $allWin - $betLine*$linesInGame;
                session(['allWin' => $allWin]);
            }
            $freeSpin = 15; // добавляем спины
        } else { // для ответа без бонусов
            $allWin = $this->getAllWin($gameRules, $winLinesData, $betLine);
            
            $rope = false;

            $winCellInfo = $this->getWinCellInfo($winLinesData, $gameRules, $info);

            // вычисление баланса в обычной игре, либо во freeSpin
            if($freeSpin) {
                $balance = session('balance') + $allWin*2;
                session(['allWin' => $allWin*2]);
                $allWin = $allWin*2;
            } else {
                $balance = session('balance') + $allWin - $betLine*$linesInGame;
                session(['allWin' => $allWin]);
            }
        }

        session(['balance' => $balance]);
        session(['gameData' => $freeSpin]);

        $spinResultData = [
            'info' => $info,
            'winCellInfo' => $winCellInfo,
            'allWin' => $allWin,
            'betLine' => $betLine,
            'linesInGame' => $linesInGame,
            'state' => true,
            'balance' => $balance,
            'rope' => $rope,
            'freeSpin' => $freeSpin
        ];

        return $spinResultData;
    }

    /**
     * Получение данных о выигрышных линиях
     *
     * @return array $winLinesData [[номер линии, значение, кол-во значений], ...]
     */
    private function getWinLinesData($gameRules, $info, $linesInGame)
    {
        // проверяем на наличие особых значений запускающих бонусную игру. Если есть, то возвращаем 'rope'
        $counter = 0;
        if ($info[0] == 1 || $info[1] == 1 || $info[2] == 1) { // крайние слева ячейки
            if ($info[12] == 1 || $info[13] == 1 || $info[14] == 1) { // крайние справая ячейки
                return 'rope';
            }
        }

        // проверка на игру с бесплатными спинами
        $freeSpinCellCounter = 0;
        foreach ($info as $value) {
            if($value == 11) {
                $freeSpinCellCounter += 1;
            }
        }
        if($freeSpinCellCounter > 2) return '15freeSpin';


        // прогоняем массив содержащий значения позиций ячеек для каждой из линий
        $winLinesData = [0,0,0]; // массив для разрешения конфликта между выигрышными линиями претендующими на одну и туже начальную ячейку

        foreach ($gameRules->lines as $lineNumber => $cellNumbers) {
            $valueCounters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            $winLineData = [];

            // получаем общее кол-во значений на линии
            foreach ($cellNumbers as $cellNumber) {
                switch ($info[$cellNumber]) {
                    case 0:
                        $valueCounters[0] += 1;
                        break;
                    case 1:
                        $valueCounters[1] += 1;
                        break;
                    case 2:
                        $valueCounters[2] += 1;
                        break;
                    case 3:
                        $valueCounters[3] += 1;
                        break;
                    case 4:
                        $valueCounters[4] += 1;
                        break;
                    case 5:
                        $valueCounters[5] += 1;
                        break;
                    case 6:
                        $valueCounters[6] += 1;
                        break;
                    case 7:
                        $valueCounters[7] += 1;
                        break;
                    case 8:
                        $valueCounters[8] += 1;
                        break;
                    case 9:
                        $valueCounters[9] += 1;
                        break;
                    case 10:
                        $valueCounters[10] += 1;
                        break;
                    case 11:
                        $valueCounters[11] += 1;
                        break;
                }
            }

            //получаем кол-во джокеров на линии
            $jokers = $valueCounters[0];

            if ($jokers > 0) {
                $valueCounters[2] += $jokers;
                $valueCounters[3] += $jokers;
                $valueCounters[4] += $jokers;
                $valueCounters[5] += $jokers;
                $valueCounters[6] += $jokers;
                $valueCounters[7] += $jokers;
                $valueCounters[8] += $jokers;
                $valueCounters[9] += $jokers;
                $valueCounters[10] += $jokers;
            }

            // определяем является ли линия выигрышной
            // $winLineData = [номер линии, значение, кол-во значений]
            foreach ($valueCounters as $value => $valueCounter) {
                if ($valueCounter > 2) {                    
                    $winLineData[0] = $lineNumber;
                    $winLineData[1] = $value;
                    $winLineData[2] = $valueCounter;

                    // Проверяем является ли она выигрышной последовательно и с первого барабана (учитывая joker-символы)
                    $check = true;
                    for ($i = 0; $i < $winLineData[2]; $i++) {
                        if($info[$cellNumbers[$i]] !== $winLineData[1]) { // проверяем последовательность выигрышных символов
                            if($info[$cellNumbers[$i]] !== 0) { // проверяем джокеры
                                $check = false;
                            }
                        }
                    }
                    if($check === true) {
                        //проверяем занятые позиции ячеек, и еще делаем проверку на кол-во выигрышных ячеек в линии
                        $checkPositionAndCount = false;
                        // проверка на кол-во выигрышных значений в линии
                        foreach ($winLinesData as $key => $lineData) {
                            // проверяем к какой линии относится $lineData и текущая проверяемая линия и сравниваем их кол-во выигрышных символов
                            /*if($gameRules->lines[$lineNumber][0] === $key){
                                if($lineData[2] < $valueCounter) {
                                    $checkPositionAndCount = true;
                                }
                            }*/

                            // сначала проверяем позиции первых символов. Далее получаем величину нового и старого выигрыша, а затем сравниваем
                            if($gameRules->lines[$lineNumber][0] === $key){

                                $oldWin = 0;
                                $newWin = 0;
                                foreach ($gameRules->winRules as $winRule) {
                                    if($winRule[0] === $lineData[1] && $winRule[1] === $lineData[2]) {
                                        $oldWin = $winRule[2];
                                    }
                                    if($winRule[0] === $winLineData[1] && $winRule[1] === $winLineData[2]) {
                                        $newWin = $winRule[2];
                                    }
                                }
                                if($newWin > $oldWin) {
                                    $checkPositionAndCount = true;
                                }
                            }
                        }

                        //перезаписываем данные
                        if($checkPositionAndCount === true) {
                            $winLinesData[$cellNumbers[0]] = $winLineData;
                        }
                    }                    
                }
            }
        }

        return $winLinesData;
    }

    /**
     * Получение данных о выигрышных значения
     *
     * @param $winLinesData
     * @param $gameRules
     * @param $info
     *
     * @return $winCellInfo
     */
    private function getWinCellInfo($winLinesData, $gameRules, $info)
    {
        // получаем позиции выйгравших ячеек и их значения
        $winCellPositions = [];
        foreach ($winLinesData as $item) {//получаем информацию по отдельной выигрышной линии
            if($item !== 0) {
                foreach ($gameRules->lines[$item[0]] as $cellPosition) {
                    // проверяем есть ли в данной линии символ-joker
                    if($info[$cellPosition] == 0) {
                        $winCellPositions[] = [$cellPosition, 0]; // записываем позицию ячейки и ее значение
                    }
                    if($info[$cellPosition] == $item[1]) {
                        $winCellPositions[] = [$cellPosition, $item[1]]; // записываем позицию ячейки и ее значение
                    }
                }
            }
        }

        // получение позиций и значений выигрышных ячеек
        for ($i = 0; $i < 15; $i++) {
            $value = false;

            foreach ($winCellPositions as $winCellPosition) {
                if($winCellPosition[0] == $i) {
                    $value = $winCellPosition[1];
                    break;
                }
            }

            $winCellInfo[] = $value;
        }
        
        // добавление к выигрышным ячейкам, значений необходимых для вывода анимаций показывающих бонусы (то, что они "почти выпали")
        for ($i = 0; $i < 15; $i++) {
            if ($winCellInfo[$i] == false){
                // анимация для значения с рыбаком
                if($i == 0 || $i == 1 || $i == 2 || $i == 12 || $i == 13 || $i == 14 ){
                    if($info[$i] == 1) {
                        $winCellInfo[$i] = 'bonusCell12';
                    }
                }

                // анимация для значения с коробкой со снастями
                if($info[$i] == 11) {
                    $winCellInfo[$i] = 'bonusCell13';
                }
            }
        }

        return $winCellInfo;
    }

    /**
     * Получение значений для бонусной игры
     *
     * return array $rope = [x,x,x,x,x,x]
     */
    private function getRope()
    {
        $rope = [];

        for ($i = 0; $i < 5; $i++) {
            $rand = rand(0,2);

            if($rand == 0) {
                $rope[] = 600;
            } elseif ($rand == 1) {
                $rope[] = 1500;
            } else {
                $rope[] = 2400;
            }
        }

        return $rope;
    }

}