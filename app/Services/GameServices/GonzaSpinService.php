<?php

namespace App\Services\GameServices;


class GonzaSpinService extends AbstractSpinService
{
    /**
     * Получение ответа на spin-запрос
     *
     * @return array $spinDataArray
     * */
    public function getSpinResultData($betLine, $gameName)
    {
        $gameRules = $this->getGameRules($gameName);

        $spinDataArray = $this->getSpinData($gameRules, $betLine);

        return $spinDataArray;
    }

    /**
     *  Тестировка spin-ответов
     *
     * @testRules array [ [[Input data],[Expected data]] , ... ]
     *
     * @return array;
     * */
    public function spinDataTests($gameName)
    {
        $gameRules = $this->getGameRules($gameName);
        $betLine = 1;

        $testRules = [
            [
                [
                    'name' => 'Проигрыш; freeSpin = false; oldAllWin = -20;',
                    'info' => [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5],
                    'oldAllWin' => -20,
                    'gameData' => ['freeSpin' => false, 'multiplier' => 1],
                    'balance' => 20
                ],
                [
                    'winCellInfo' => [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    'wl' => [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'allWin' => -20,
                    'freeSpin' => false,
                    'multiplier' => 1,
                    'balance' => 0
                ]
            ],
            [
                [
                    'name' => 'Выигрыш трех символов на нижней линии; freeSpin = false; oldAllWin = -20;',
                    'info' => [1,1,0,2,2,0,3,3,0,4,4,4,5,5,5],
                    'oldAllWin' => -20,
                    'gameData' => ['freeSpin' => false, 'multiplier' => 1],
                    'balance' => 20
                ],
                [
                    'winCellInfo' => [false,false,0,false,false,0,false,false,0,false,false,false,false,false,false],
                    'wl' => [0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'allWin' => -17,
                    'freeSpin' => false,
                    'multiplier' => 1,
                    'balance' => 3
                ]
            ],
            [
                [
                    'name' => 'Выигрыш второй подрят; freeSpin = false; oldAllWin = 3;',
                    'info' => [1,0,1,2,0,2,3,0,3,4,4,4,5,5,5],
                    'oldAllWin' => 3,
                    'gameData' => ['freeSpin' => false, 'multiplier' => 1],
                    'balance' => 20
                ],
                [
                    'winCellInfo' => [false,0,false,false,0,false,false,0,false,false,false,false,false,false,false],
                    'wl' => [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'allWin' => -14,
                    'freeSpin' => false,
                    'multiplier' => 2,
                    'balance' => 6
                ]
            ],
            [
                [
                    'name' => 'Выпадение freeSpin; freeSpin = false; multiplier = 5; oldAllWin = 3;',
                    'info' => [1,7,1,2,7,2,3,7,3,4,4,4,5,5,5],
                    'oldAllWin' => 3,
                    'gameData' => ['freeSpin' => false, 'multiplier' => 5],
                    'balance' => 3
                ],
                [
                    'winCellInfo' => [false,7,false,false,7,false,false,7,false,false,false,false,false,false,false],
                    'wl' => [0,0,'bonusGame',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'allWin' => -20,
                    'freeSpin' => 11,
                    'multiplier' => 1,
                    'balance' => -17
                ]
            ],
            [
                [
                    'name' => 'Проигрыш во freeSpin; freeSpin = 10; multiplier = 3; oldAllWin = 0;',
                    'info' => [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5],
                    'oldAllWin' => 0,
                    'gameData' => ['freeSpin' => 11, 'multiplier' => 3],
                    'balance' => 0
                ],
                [
                    'winCellInfo' => [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    'wl' => [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'allWin' => 0,
                    'freeSpin' => 10,
                    'multiplier' => 3,
                    'balance' => 0
                ]
            ],
            [
                [
                    'name' => 'Проигрыш во freeSpin; freeSpin = 1; oldAllWin = 0;',
                    'info' => [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5],
                    'oldAllWin' => 0,
                    'gameData' => ['freeSpin' => 1, 'multiplier' => 3],
                    'balance' => 0
                ],
                [
                    'winCellInfo' => [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    'wl' => [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'allWin' => -20,
                    'freeSpin' => 0,
                    'multiplier' => 3,
                    'balance' => -20
                ]
            ],
            [
                [
                    'name' => 'Проигрыш во freeSpin; freeSpin = 0; oldAllWin = 0;',
                    'info' => [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5],
                    'oldAllWin' => 0,
                    'gameData' => ['freeSpin' => 0, 'multiplier' => 3],
                    'balance' => 0
                ],
                [
                    'winCellInfo' => [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    'wl' => [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'allWin' => -20,
                    'freeSpin' => false,
                    'multiplier' => 1,
                    'balance' => -20
                ]
            ],
            [
                [
                    'name' => 'Выпадение freeSpin; freeSpin = 5; multiplier = 3; oldAllWin = 0;',
                    'info' => [1,7,1,2,7,2,3,7,3,4,7,4,5,5,5],
                    'oldAllWin' => 0,
                    'gameData' => ['freeSpin' => 3, 'multiplier' => 3],
                    'balance' => 0
                ],
                [
                    'winCellInfo' => [false,7,false,false,7,false,false,7,false,false,7,false,false,false,false],
                    'wl' => ['bonusGame',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'allWin' => 0,
                    'freeSpin' => 11,
                    'multiplier' => 3,
                    'balance' => 0
                ]
            ],
            [
                [
                    'name' => 'Проигрыш; freeSpin = false; oldAllWin = 0; multiplier = 5',
                    'info' => [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5],
                    'oldAllWin' => 3,
                    'gameData' => ['freeSpin' => false, 'multiplier' => 5],
                    'balance' => 20
                ],
                [
                    'winCellInfo' => [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                    'wl' => [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'allWin' => -20,
                    'freeSpin' => false,
                    'multiplier' => 1,
                    'balance' => 0
                ]
            ],
            [
                [
                    'name' => 'Выигышь; freeSpin = 9; oldAllWin = 0; multiplier = 3',
                    'info' => [3,1,6,0,6,0,1,3,6,6,1,2,5,1,5],
                    'oldAllWin' => 0,
                    'gameData' => ['freeSpin' => 9, 'multiplier' => 3],
                    'balance' => 0
                ],
                [
                    'winCellInfo' => [false,1,6,false,6,false,1,false,6,false,false,false,false,1,false],
                    'wl' => [0,0,0,0,0,0,0,0,4,0,0,0,50,0,0,0,0,0,0,0],
                    'allWin' => 162,
                    'freeSpin' => 8,
                    'multiplier' => 3,
                    'balance' => 162
                ]
            ],
        ];

        // проверка на соответствие основных параметров (кроме name)
        $testResults = [];
        foreach ($testRules as $testRule) {
            $testData = $this->getSpinDataTest($gameRules, $betLine, $testRule[0]['info'], $testRule[0]['oldAllWin'], $testRule[0]['gameData'], $testRule[0]['balance']);

            $checkWinCellInfo = true;
            if(array_diff($testData['winCellInfo'], $testRule[1]['winCellInfo']) !== []) {
                $checkWinCellInfo = false;
            }

            $checkWl = true;
            if(array_diff($testData['wl'], $testRule[1]['wl']) !== []) {
                $checkWl = false;
            }

            $checkAllWin = true;
            if($testData['allWin'] !== $testRule[1]['allWin']) {
                $checkAllWin = $testData['allWin'];
            }

            $checkFreeSpin = true;
            if($testData['freeSpin'] !== $testRule[1]['freeSpin']) {
                $checkFreeSpin = $testData['freeSpin'];
            }

            $checkMultiplier = true;
            if($testData['multiplier'] !== $testRule[1]['multiplier']) {
                $checkMultiplier = $testData['multiplier'];
            }

            $checkBalance = true;
            if($testData['balance'] !== $testRule[1]['balance']) {
                $checkBalance = $testData['balance'];
            }

            $testResults[] = [
                'name' => $testRule[0]['name'],
                'checkWinCellInfo' => $checkWinCellInfo,
                'checkWl' => $checkWl,
                'checkAllWin' => $checkAllWin,
                'checkFreeSpin' => $checkFreeSpin,
                'checkMultiplier' => $checkMultiplier,
                'checkBalance' => $checkBalance,
            ];
        }

        // делаем общую проверку всего массива параметров
        $mainCheck = true;
        foreach ($testResults as $testResult) {
            foreach ($testResult as $key => $item) {
                if($key !== 'name') {
                    if($item !== true) {
                        $mainCheck = false;
                        break(2);
                    }
                }
            }
        }

        if($mainCheck === true) {
            return $mainCheck;
        } else {
            return $testResults;
        }
    }

    /**
     * Получение spinData для проведения теста
     *
     * @return array
     * */
    private function getSpinDataTest($gameRules, $betLine, $info, $oldAllWin, $oldGameData, $balance)
    {
        $checkAvalance = 1;
        $checkFreeSpinGame = $this->getCheckFreeSpinGame($gameRules, $info, $oldGameData); // [[freeSpinInfo], [wl]]
        $winLinesData = $this->getWinLinesData($gameRules, $info, $checkFreeSpinGame);
        $winCellInfo = $this->getWinCellInfo($winLinesData, $gameRules, $info, $checkFreeSpinGame);
        $wl = $this->getWlG($gameRules, $winLinesData, $betLine, $winCellInfo, $checkFreeSpinGame, $oldGameData);
        $gameData = $this->getGameData($oldGameData, $checkFreeSpinGame, $wl, $oldAllWin, $betLine, $checkAvalance);
        $allWin = $this->getAllWinG($gameRules, $winLinesData, $betLine, $gameData, $oldGameData, $checkFreeSpinGame, $checkAvalance);
        $balance = $balance + $allWin;

        $spinData = [
            'info' => $info,
            'winCellInfo' => $winCellInfo,
            'wl' => $wl,
            'allWin' => $allWin,
            'betLine' => $betLine,
            'state' => true,
            'freeSpin' => $gameData['freeSpin'],
            'multiplier' => $gameData['multiplier'],
            'balance' => $balance
        ];

        return $spinData;
    }

    /**
     * Получаем массив содержащий ответы для череды выигрышей
     * @return array $spinDataArray
     * */
    private function getSpinData($gameRules, $betLine)
    {
        $spinDataArray = [];
        $checkAvalance = 0;
        $checkNextSpin = true;

        if(!session('gameData')) {
            session(['gameData' => ['freeSpin' => false, 'multiplier' => 1]]);
        }

        while ($checkNextSpin === true) {
            $checkAvalance += 1; // если $checkAvalance > 1, то идет лавина выигрышей

            $info = $this->generatingValuesForCellsG($gameRules, $spinDataArray); //$info = [5,3,8,0,1,8,2,4,7,0,5,0,3,0,8]; //$info = [5,1,1,5,2,2,2,3,3,4,4,4,5,5,5];
            //$info = [7,1,8,6,6,7,0,7,5,0,7,4,3,6,8];

            $oldAllWin = session('allWin');
            $oldGameData = session('gameData');

            $checkFreeSpinGame = $this->getCheckFreeSpinGame($gameRules, $info, $oldGameData); // [[freeSpinInfo], [wl]]
            $winLinesData = $this->getWinLinesData($gameRules, $info, $checkFreeSpinGame);
            $winCellInfo = $this->getWinCellInfo($winLinesData, $gameRules, $info, $checkFreeSpinGame);
            $wl = $this->getWlG($gameRules, $winLinesData, $betLine, $winCellInfo, $checkFreeSpinGame, $oldGameData);
            $gameData = $this->getGameData($oldGameData, $checkFreeSpinGame, $wl, $oldAllWin, $betLine, $checkAvalance);
            $allWin = $this->getAllWinG($gameRules, $winLinesData, $betLine, $gameData, $oldGameData, $checkFreeSpinGame, $checkAvalance);
            $balance = session('balance') + $allWin;

            session(['allWin' => $allWin]);
            session(['balance' => $balance]);
            session(['gameData' => $gameData]);

            $spinData = [
                'info' => $info,
                'winCellInfo' => $winCellInfo,
                'wl' => $wl,
                'allWin' => $allWin,
                'betLine' => $betLine,
                'state' => true,
                'balance' => $balance,
                'freeSpin' => $gameData['freeSpin'],
                'multiplier' => $gameData['multiplier']
            ];

            // пересчитываем $dlta для проверки необходимости генерации лавины
            $spinDataArray[] = $spinData;

            if($gameData['freeSpin'] != false) {
                if($allWin > 0) {
                    $checkNextSpin = true;
                } else {
                    $checkNextSpin = false;
                }
            } else {
                if($checkAvalance > 1) {
                    if($allWin > 0) {
                        $checkNextSpin = true;
                    } else {
                        $checkNextSpin = false;
                    }
                } else {
                    if($allWin > -20*$betLine) {
                        $checkNextSpin = true;
                    } else {
                        $checkNextSpin = false;
                    }
                }
            }
        }



        return $spinDataArray;
    }

    /**
     * Генерация ячеек с учетом пердыдущего результата
     *
     * @return array $info
     * */
    private function generatingValuesForCellsG($gameRules, $spinDataArray)
    {
        if($spinDataArray !== []) {
            $count = count($spinDataArray);
            $currentSpinDataArray = $spinDataArray[$count - 1];

            // уничтожаем предыдущие выигрышные ячейки для каждого барабана и опускаем вышестоящие ячейки
            $keyArray = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [9,10,11],
                [12,13,14],
            ];

            foreach ($keyArray as $itemArray) {
                foreach ($itemArray as $key) {
                    // удаление верхних символов
                    if($key === 0 || ($key % 3 === 0)) {
                        if($currentSpinDataArray['winCellInfo'][$key] !== false) {
                            $currentSpinDataArray['info'][$key] = 'removed';
                        }
                    }

                    if($key === 1 || $key === 4 || $key === 7 || $key === 10 || $key === 13) {
                        if($currentSpinDataArray['winCellInfo'][$key] !== false) {
                            $currentSpinDataArray['info'][$key] = $currentSpinDataArray['info'][$key - 1];
                            $currentSpinDataArray['info'][$key - 1] = 'removed';
                        }
                    }

                    if($key === 2 || $key === 5 || $key === 8 || $key === 11 || $key === 14) {
                        if($currentSpinDataArray['winCellInfo'][$key] !== false) {
                            $currentSpinDataArray['info'][$key] = $currentSpinDataArray['info'][$key - 1];
                            $currentSpinDataArray['info'][$key - 1] = $currentSpinDataArray['info'][$key - 2];
                            $currentSpinDataArray['info'][$key - 2] = 'removed';
                        }
                    }
                }
            }

            // дополняем недостающие
            foreach ($currentSpinDataArray['info'] as $key => $cellValue) {
                if($cellValue === 'removed') {
                    $currentSpinDataArray['info'][$key] = rand(0, ($gameRules->numberOfCellValues - 1));
                }
            }

            return $currentSpinDataArray['info'];
        } else {
            return $this->generatingValuesForCells($gameRules);
        }
    }

    /**
     * Получение gameData = [['freeSpin'],['multiplier']]
     *
     * @return array $gameData
     * */
    private function getGameData($oldGameData, $checkFreeSpinGame, $wl, $oldAllWin, $betLine, $checkAvalance)
    {
        $gameData = [];
        // первая активация $gameData
        if($oldGameData === false) {
            $gameData['multiplier'] = 1;
            $gameData['freeSpin'] = $this->getFreeSpin($oldGameData, $checkFreeSpinGame, $checkAvalance);
            $gameData['allWin'] = false;

            return $gameData;
        } else {
            $gameData['multiplier'] = $this->getMultiplier($oldGameData, $checkAvalance, $wl, $oldAllWin, $betLine);
            $gameData['freeSpin'] = $this->getFreeSpin($oldGameData, $checkFreeSpinGame, $checkAvalance);
        }

        return $gameData;
    }

    /**
     * Получение значения freeSpin
     *
     * @return $freeSpin
     * */
    private function getFreeSpin($gameData, $checkFreeSpinGame, $checkAvalance)
    {
        $freeSpin = false;

        if($gameData === null || $gameData === false) {
            $gameData = [];
        }

        if(array_key_exists('freeSpin', $gameData)) {
            if($gameData['freeSpin'] != false) {
                if($gameData['freeSpin'] > 0) {
                    // делаем проверку $checkFreeSpinGame
                    $checkFreeSpin = false;
                    foreach ($checkFreeSpinGame[0] as $item) {
                        if($item !== false) {
                            $checkFreeSpin = true;
                            break;
                        }
                    }

                    // в случае выпадения бонусной комбинации увеличиваем кол-во бесплатных спинов
                    if($checkFreeSpin !== false) {
                        $gameData['freeSpin'] += 10;
                    }

                    if($checkAvalance < 2) {
                        $freeSpin = $gameData['freeSpin'] - 1;
                    } else {
                        $freeSpin = $gameData['freeSpin'];
                    }
                }
            } else {
                // делаем проверку $checkFreeSpinGame
                $checkFreeSpin = false;
                foreach ($checkFreeSpinGame[0] as $item) {
                    if($item !== false) {
                        $checkFreeSpin = true;
                        break;
                    }
                }

                if($checkFreeSpin === true) {
                    $freeSpin = 11;
                } else {
                    $freeSpin = false;
                }
            }
        } else {
            return false;
        }

        return $freeSpin;
    }

    /**
     * Получение значения множителя для текущего кручения
     *
     * @return $multiplier
     * */
    private function getMultiplier($oldGameData, $checkAvalance, $wl, $oldAllWin, $betLine)
    {
        $multiplier = 0;

        // определяем является ли данный ход выигрышным
        $checkWin = false;

        foreach ($wl as $item) {
            if($item > 0) {
                $checkWin = true;
                break;
            }
        }

        if($oldGameData['freeSpin'] > 0 && $oldGameData['freeSpin'] !== 0) {
            if($checkWin !== false && $oldAllWin > 0) {
                switch ($oldGameData['multiplier']) {
                    case 3:
                        $multiplier = 6;
                        break;
                    case 6:
                        $multiplier = 9;
                        break;
                    case 9:
                        $multiplier = 15;
                        break;
                    case 15:
                        $multiplier = 15;
                        break;
                }
            } else {
                $multiplier = 3;
            }
        } else {
            if($checkAvalance === 1) {
                $multiplier = 1;
            } elseif($checkAvalance === 2) {
                if($checkWin !== false) {
                    $multiplier = 2;
                } else {
                    $multiplier = 1;
                }
            } elseif ($checkAvalance > 2) {
                if($checkWin !== false && $oldAllWin > 0) {
                    switch ($oldGameData['multiplier']) {
                        case 1:
                            $multiplier = 2;
                            break;
                        case 2:
                            $multiplier = 3;
                            break;
                        case 3:
                            $multiplier = 5;
                            break;
                        case 5:
                            $multiplier = 5;
                            break;
                    }
                } else {
                    $multiplier = 1;
                }
            }
        }

        return $multiplier;
    }

    /**
     * Проверяем на наличие бонусной комбинации
     *
     * @param $gameRules
     * @param $info
     *
     * @return array or false массив с данными для показа бонусных и joker-ячеек
     */
    private function getCheckFreeSpinGame($gameRules, $info, $gameData)
    {
        $lines = $gameRules->lines;

        $winLineNumbers = []; // если > 0, то нужно сформировать массив с данными об анимированных ячейках
        foreach ($lines as $i => $line) { // полуем позиции ячеек для отдельной линии
            if($this->checkLine($line, $info, $gameData)) {
                $winLineNumbers[] = $i;
            }
        }

        if($winLineNumbers !== null) {
            // получаем позиции бонусных ячеек и их значения
            $bonusGameCellInfo = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
            foreach ($winLineNumbers as $winLineNumber) {
                $arrayKey = 0;
                foreach ($lines[$winLineNumber] as $key => $cellPosition) {
                    if($arrayKey == $key) {
                        if($info[$cellPosition] == 7) {
                            $bonusGameCellInfo[$cellPosition] = 7;
                            $arrayKey += 1;
                        } elseif ($info[$cellPosition] == 8) {
                            $bonusGameCellInfo[$cellPosition] = 8;
                            $arrayKey += 1;
                        }
                    } else {
                        break;
                    }
                }
            }
        } else {
            // выходим из проверки в случае если нет выигрышной линии с freeSpin-ами
            return false;
        }

        // получаем wl
        $wl = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        for ($i = 0; $i <= 19; $i++) {
            $check = false;
            foreach ($winLineNumbers as $winLineNumber) {
                if($i == $winLineNumber) {
                    $check = true;
                }
            }

            if($check === true) {
                $wl[$i] = 'bonusGame';
            } else {
                $wl[$i] = 0;
            }
        }


        $checkInfo[] = $bonusGameCellInfo;
        $checkInfo[] = $wl;

        return $checkInfo;
    }

    /**
     * Проверка является ли линия бонусной
     * @param $lines
     * @param $info
     * @return bool
     */
    private function checkLine($lines, $info, $oldGameData)
    {
        $check = 0;
        $freeSpinSymbol = 0;
        foreach ($lines as $cellPosition) {
            if($info[$cellPosition] == 7 || $info[$cellPosition] == 8) { // проверяем подходит ли третий символ
                // хотя бы один элемент должен быть не джокером
                if($info[$cellPosition] === 7) $freeSpinSymbol += 1;
                $check += 1;
            } else {
                break;
            }
        }

        if($oldGameData === null || $oldGameData === false) {
            $oldGameData = [];
        }
        if(array_key_exists('freeSpin', $oldGameData)) {
            if($oldGameData['freeSpin'] !== 0 && $oldGameData['freeSpin'] !== false) {
                if($check > 3) {
                    if($freeSpinSymbol > 0) {
                        return true;
                    }
                } else {
                    return false;
                }
            } else {
                if($check > 2) {
                    if($freeSpinSymbol > 0) {
                        return true;
                    }
                } else {
                    return false;
                }
            }
        } else {
            if($check > 2) {
                if($freeSpinSymbol > 0) {
                    return true;
                }
            } else {
                return false;
            }
        }


    }

    /**
     * Получение данных о выигрышных линиях
     *
     * @return array $winLinesData [[номер линии, значение, кол-во значений], ...]
     */
    private function getWinLinesData($gameRules, $info, $checkFreeSpinGame)
    {
        // делаем проверку $checkFreeSpinGame
        $checkFreeSpin = false;
        foreach ($checkFreeSpinGame[0] as $item) {
            if($item !== false) {
                $checkFreeSpin = true;
                break;
            }
        }

        // проверка выпала ли freeSpin-игра
        if($checkFreeSpin === false) {
            // прогоняем массив содержащий значения позиций ячеек для каждой из линий
            $winLinesData = []; // массив для разрешения конфликта между выигрышными линиями претендующими на одну и туже начальную ячейку

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
                        case 8:
                            $valueCounters[8] += 1;
                            break;
                    }
                }

                //получаем кол-во джокеров на линии
                $jokers = $valueCounters[8];

                if ($jokers > 0) {
                    $valueCounters[0] += $jokers;
                    $valueCounters[1] += $jokers;
                    $valueCounters[2] += $jokers;
                    $valueCounters[3] += $jokers;
                    $valueCounters[4] += $jokers;
                    $valueCounters[5] += $jokers;
                    $valueCounters[6] += $jokers;
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
                                if($info[$cellNumbers[$i]] !== 8) { // проверяем джокеры
                                    $check = false;
                                }
                            }
                        }

                        if($check === true) {
                            //делаем проверку на кол-во выигрышных ячеек в линии
                            $checkPositionAndCount = false;
                            // проверка на кол-во выигрышных значений в линии
                            if($winLinesData != []) {
                                // делаем проверку на то есть ли уже в $winLinesData данная линия
                                $checkCurrentLine = false;
                                foreach ($winLinesData as $lineData) {
                                    if($lineData[0] === $winLineData[2]) {
                                        $checkCurrentLine = true;
                                        break;
                                    }
                                }

                                if($checkCurrentLine === true) {
                                    foreach ($winLinesData as $key => $lineData) {
                                        if($lineData[0] === $winLineData[0]) {
                                            // делаем проверку на то, где больше выигрышных символов
                                            if($winLineData[2] > $lineData[2]) {
                                                $winLinesData[$key] = $winLineData;
                                            }
                                        }
                                    }
                                } else {
                                    $winLinesData[] = $winLineData;
                                }
                            } else {
                                $winLinesData[] = $winLineData;
                            }
                        }
                    }
                }
            }

            return $winLinesData;
        } else {
            return [0,0,0];
        }
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
    private function getWinCellInfo($winLinesData, $gameRules, $info, $checkFreeSpinGame)
    {
        // делаем проверку $checkFreeSpinGame
        $checkFreeSpin = false;
        foreach ($checkFreeSpinGame[0] as $item) {
            if($item !== false) {
                $checkFreeSpin = true;
                break;
            }
        }

        if($checkFreeSpin !== false) {
            $winCellInfo = $checkFreeSpinGame[0];
            return $winCellInfo;
        } else {
            // получаем позиции выйгравших ячеек и их значения
            $winCellPositions = [];
            foreach ($winLinesData as $item) {// получаем информацию по отдельной выигрышной линии
                if($item != 0) {
                    foreach ($gameRules->lines as $lineKey => $line) { // позиции ячеек на отдельной линии
                        if($lineKey == $item[0]) {
                            $arrayKey = 0;
                            foreach ($line as $key => $cellPosition) { // позиция ячейки
                                // проверяем есть ли в данной линии символ-joker
                                if($arrayKey == $key) {
                                    if($info[$cellPosition] == 8) {
                                        $winCellPositions[] = [$cellPosition, 8]; // записываем позицию ячейки и ее значение
                                        $arrayKey += 1;
                                    } elseif($info[$cellPosition] === $item[1]) {
                                        $winCellPositions[] = [$cellPosition, $item[1]]; // записываем позицию ячейки и ее значение
                                        $arrayKey += 1;
                                    } else {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // формирование $winCellInfo
            for ($i = 0; $i < 15; $i++) {
                $check = false;

                foreach ($winCellPositions as $winCellPosition) {
                    if($winCellPosition[0] == $i) {
                        $check = $winCellPosition[1];
                        break;
                    }
                }

                $winCellInfo[] = $check;
            }

            return $winCellInfo;
        }
    }

    /**
     * Получении данных о сумме выигрыша по каждой из линий
     *
     * return array $wl
     */
    protected function getWlG($gameRules, $winLinesData, $betLine, $winCellInfo, $checkFreeSpinGame, $oldGameData)
    {
        $wl = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        // проверка есть ли bonusGame значения
        $checkBonusGame = false;
        foreach ($winCellInfo as $item) {
            if($item === 7) {
                $checkBonusGame = true;
            }
        }

        if($checkBonusGame !== false) {
            $wl = $checkFreeSpinGame[1];
        } else {
            foreach ($winLinesData as $winLineData) {
                if($winLineData != 0) {
                    foreach ($gameRules->winRules as $rule) {
                        if ($rule[0] === $winLineData[1]) {
                            if ($rule[1] === $winLineData[2]) {
                                $wl[$winLineData[0]] = $betLine * $rule[2];
                            }
                        }
                    }
                }
            }
        }

        return $wl;
    }

    /**
     * Получение общей суммы выигрыша
     *
     * @return int $allWin
     */
    protected function getAllWinG($gameRules, $winLinesData, $betLine, $gameData, $oldGameData, $checkFreeSpinGame, $checkAvalance)
    {
        $allWin = 0;

        foreach ($gameRules->winRules as $rule) {
            foreach ($winLinesData as $winLineData) {
                if ($rule[0] === $winLineData[1]) {
                    if ($rule[1] == $winLineData[2]) {
                        $allWin += $betLine * $rule[2] * $gameData['multiplier'];
                    }
                }
            }
        }

        if($checkAvalance < 2) {
            if ($gameData['freeSpin'] == 0) {
                $allWin -= $betLine * 20;
            } elseif ($gameData['freeSpin'] === 11 && $oldGameData['freeSpin'] == false) {
                $allWin -= $betLine * 20;
            }
        }

        return $allWin;
    }
}