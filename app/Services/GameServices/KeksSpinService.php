<?php
namespace App\Services\GameServices;

class KeksSpinService extends AbstractSpinService {

    public function getSpinResultData($betLine, $linesInGame, $gameName) {
        $gameRules = $this->getGameRules($gameName);

        $spinResultData = [];

        // прибавляем к балансу предыдущий выигрышь
        session(['balance' => (session('balance') + session('allWin'))]);

        $info = $this->generatingValuesForCells($gameRules);
        /*$info = [8,8,8,10,10,10,7,10,10,7,10,10,10,7,10];
        $linesInGame = 9;
        $betLine = 1;*/

        $winLinesData = $this->getWinLinesData($gameRules, $info, $linesInGame);

        //dd($winLinesData);

        if($winLinesData == 'rope') {
            $wl = false;
            $dcard = false;

            $rope = $this->getRope(); //$rope = [1,0,6,1,1,1];

            $allWin = 0;
            for ($i = 0; $i < 5; $i++) { // вычисление выигрыша в игре с печками
                if($rope[$i] === 0 || $rope[$i] === 6) {
                    break;
                } else {
                    $allWin += $rope[$i]*$betLine*$linesInGame;
                }
            }

            // прибавка от супер игры
            if($rope[5] > 0) {
                // проверка будет ли супер игра
                $checkSmoke = false;
                for ($i = 0; $i < 5; $i++) {
                    if($rope[$i] === 0) {
                        $checkSmoke = true;

                        // проверка не было ли перед дымом символа переключающего на супер игру
                        for ($k = 0; $k < $i; $k++) {
                            if($rope[$k] == 6) {
                                $checkSmoke = false;
                            }
                        }

                        break;
                    }
                }

                if($checkSmoke === false) {
                    $allWin = $rope[5]*$allWin*2;
                }
            }

            session(['allWin' => $allWin]);
            $balance = session('balance') - $betLine*$linesInGame;
        } else {
            $allWin = $this->getAllWin($gameRules, $winLinesData, $betLine);
            $wl = $this->getWl($gameRules, $winLinesData,$betLine);
            $dcard = $this->getDcard($gameRules);
            $rope = false;
            $balance = session('balance') - $betLine * $linesInGame;

            session(['allWin' => $allWin]);
        }


        session(['balance' => $balance]);

        // сохраняем в сессии выиграную сумму и карту диллера

        session(['dcard' => $dcard]);

        $spinResultData = [
            'info' => $info,
            'allWin' => $allWin,
            'betLine' => $betLine,
            'linesInGame' => $linesInGame,
            'wl' => $wl,
            'state' => true,
            'dcard' => $dcard,
            'balance' => $balance,
            'rope' => $rope
        ];

        return $spinResultData;

    }

    /**
     * Получение карты диллекра
     *
     * return int dcard
     * */
    private function getDcard($gameRules) {

        $dcardMaxValue = count($gameRules->cards) - 2;

        $dcardValue = rand(1,$dcardMaxValue);

        $dcard = $gameRules->cards[$dcardValue][rand(0,3)];

        return $dcard;
    }

    /**
     * Получение данных о выигрышных линиях
     *
     * @return array $winLinesData [[номер линии, значение, кол-во значений], ...]
     */
    private function getWinLinesData($gameRules, $info, $linesInGame)
    {

        $winLinesData = [];

        // проверяем на наличие особых значений запускающих бонусную игру. Если есть, то возвращаем 'rope'
        $counter = 0;
        foreach ($info as $value) {
            if ($value == 8) {
                $counter += 1;
            }
        }

        if ($counter > 2) {
            return 'rope';
        }


        // прогоняем массив содержащий значения позиций ячеек для каждой из линий
        foreach ($gameRules->lines as $lineNumber => $cellNumbers) {

            $valueCounters = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
                }
            }

            //получаем кол-во джокеров на линии
            $jokers = $valueCounters[6];

            if ($jokers > 0) {
                $valueCounters[5] += $jokers;
                $valueCounters[4] += $jokers;
                $valueCounters[3] += $jokers;
                $valueCounters[2] += $jokers;
                $valueCounters[1] += $jokers;
                $valueCounters[0] += $jokers;
            }

            if($lineNumber < $linesInGame) {
                // определяем является линия выигрышной
                // $winLineData = [номер линии, значение, кол-во значений]

                $array = [];
                foreach ($valueCounters as $value => $valueCounter) {
                    if ($valueCounter > 2) {
                        // проверка идут ли значения подрят с одной, либо с другой стороны
                        $checkStep = false;

                        if ($info[$cellNumbers[0]] === $value || $info[$cellNumbers[0]] === 6) {

                            $checkStep = true;
                            for ($i = 0; $i < ($valueCounter - 1); $i++) {

                                if ($value !== $info[$cellNumbers[$i + 1]] && $info[$cellNumbers[$i+1]] !== 6) {
                                    if ($i > 1) {
                                        $winLineData[0] = $lineNumber;
                                        $winLineData[1] = $value;
                                        $winLineData[2] = $i + 1;

                                        $array[] = $winLineData;

                                        break(2);
                                    }

                                    $checkStep = false;
                                    break;
                                }
                            }
                        }

                        if($checkStep === false) {
                            if ($info[$cellNumbers[4]] === $value || $info[$cellNumbers[4]] === 6) {
                                $checkStep = true;

                                for ($i = 0; $i < $valueCounter - 1; $i++) {
                                    if ($value !== $info[$cellNumbers[4 - $i - 1]] && $info[$cellNumbers[4 - $i - 1]] !== 6) {
                                        if ($i > 1) {
                                            $winLineData[0] = $lineNumber;
                                            $winLineData[1] = $value;
                                            $winLineData[2] = $i + 1;

                                            $array[] = $winLineData;
                                            break(2);
                                        }

                                        $checkStep = false;
                                        break;
                                    }
                                }
                            }
                        }

                        if($checkStep === true) {
                            $winLineData[0] = $lineNumber;
                            $winLineData[1] = $value;
                            $winLineData[2] = $valueCounter;

                            $array[] = $winLineData;
                        }
                    }
                }

                // получаем наиболее стоящий выигрышь
                $maxWinLineData = [0,0,0];
                foreach ($array as $item) {
                    if($item[2] > $maxWinLineData[2]) {
                        $maxWinLineData = $item;
                    }
                }

                if($maxWinLineData[2] !== 0) { // отсекаем пустые наборы данных
                    $winLinesData[] = $maxWinLineData;
                }
            }
        }

        return $winLinesData;
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
            $randValue = rand(0, 6040);

            if ($randValue <= 900) {
                $rope[] = 0;
            } elseif ($randValue > 900 && $randValue <= 2023) {
                $rope[] = 1;
            } elseif ($randValue > 2023 && $randValue <= 2653) {
                $rope[] = 2;
            } elseif ($randValue > 2653 && $randValue <= 3024) {
                $rope[] = 3;
            } elseif ($randValue > 3024 && $randValue <= 3117) {
                $rope[] = 4;
            } elseif ($randValue > 3117 && $randValue <= 4000) {
                $rope[] = 5;
            } elseif ($randValue > 4000 && $randValue <= 4248) {
                $rope[] = 6;
            } elseif ($randValue > 4248 && $randValue <= 4290) {
                $rope[] = 7;
            } elseif ($randValue > 4290 && $randValue <= 4332) {
                $rope[] = 8;
            } elseif ($randValue > 4332 && $randValue <= 4372) {
                $rope[] = 9;
            } elseif ($randValue > 4372 && $randValue <= 5469) {
                $rope[] = 10;
            } elseif ($randValue > 5469 && $randValue <= 5654) {
                $rope[] = 15;
            } elseif ($randValue > 5654 && $randValue <= 5803) {
                $rope[] = 20;
            } elseif ($randValue > 5803 && $randValue <= 6040) {
                $rope[] = 25;
            }
        }

        // финальная игра
        $randValue = rand(0, 9);
        if($randValue < 1){
            $rope[] = 1;
        } else {
            $rope[] = 0;
        }

        //$rope = [1,6,1,1,1,1];
        return $rope;
    }

    /**
     * Генерация значений для ячеек
     *
     * @return array $valueForCells
     */
    protected function generatingValuesForCells($gameRules)
    {
        $allValuesArray = [];
        for ($i = 0; $i < 620; $i++) {
            if($i < 150) {
                $allValuesArray[] = 0;
            } elseif ($i > 149 && $i < 275) {
                $allValuesArray[] = 1;
            } elseif ($i > 274 && $i < 375) {
                $allValuesArray[] = 2;
            } elseif ($i > 374 && $i < 450) {
                $allValuesArray[] = 3;
            } elseif ($i > 449 && $i < 505) {
                $allValuesArray[] = 4;
            } elseif ($i > 504 && $i < 555) {
                $allValuesArray[] = 5;
            } elseif ($i > 554 && $i < 575) {
                $allValuesArray[] = 8;
            } elseif ($i > 574 && $i < 600) {
                $allValuesArray[] = 7;
            } elseif ($i > 599) {
                $allValuesArray[] = 6;
            }
        }

        $valueForCells = [];

        for ($i = 0; $i < 15; $i++) {
            $valueForCells[] = $allValuesArray[rand(0, 619)];
        }

        //$valueForCells = [3, 2, 0, 2, 3, 1, 2, 3, 0, 2, 6, 1, 5, 1, 0];

        /**
         * Получаем кол-во каждого элемента в массиве
         *
         * @param $valueForCells
         * @return array
         */
        function getValueCouner($valueForCells) {
            $valueCounts = [0,0,0,0,0,0,0,0,0];
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
                }
            }

            return $valueCounts;
        }

        /**
         * Проверка наличия более 5 одинаковых символов
         *
         * @param $valueCounts
         * @return bool|array Возвращает false, либо значение символа, которого больше 5 и его кол-во
         */
        function checkHave5Symbols ($valueCounts) {
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
        function updateValueForCells($valueForCells) {
            for ($i = 0; $i < 13; $i += 3) {
                if ($valueForCells[$i] === $valueForCells[$i+1] || $valueForCells[$i] === $valueForCells[$i+2]) {
                    if($valueForCells[$i] < 5) {
                        $valueForCells[$i] += 1;
                    } else {
                        $valueForCells[$i] -= 1;
                    }
                } elseif ($valueForCells[$i+1] === $valueForCells[$i+2]) {
                    if($valueForCells[$i] < 5) {
                        $valueForCells[$i+1] += 1;
                    } else {
                        $valueForCells[$i+1] -= 1;
                    }
                }
            }

            $symbol = checkHave5Symbols(getValueCouner($valueForCells));

            for ($i = 0; $i < $symbol[1] - 5; $i++) {
                foreach ($valueForCells as $key => $cell) {
                    if ($cell === $symbol[0]) {
                        if($cell < 5) {
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
                if($cell === -1 || $cell === 9) {
                    $valueForCells[$key] = 5;
                }
            }

            return $valueForCells;
        }

        $check = true;
        while ($check) {
            $newValueForCells = updateValueForCells($valueForCells, checkHave5Symbols(getValueCouner($valueForCells)));
            if ($newValueForCells === $valueForCells) {
                $check = false;
            }

            $valueForCells = $newValueForCells;
        }

        return $valueForCells;

    }
}