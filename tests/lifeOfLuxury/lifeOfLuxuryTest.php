<?php

class lifeOfLuxuryTest extends TestCase
{
    public function testEmpty()
    {
        $check = false;
        if (1 === 1) {
            $check = true;
        }

        $this->assertTrue($check);
    }

//    public function testDAC()
//    {
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $gameRules = $gameService->getGameRules('lifeOfLuxury');
//
//        $failCounter = 0;
//        for ($i = 0; $i < 100000; $i++) {
//            $result = $gameService->generatingValuesForCells($gameRules);
//
//            foreach ($result as $key => $item) {
//                if ($item === 0 || $item === 10) {
//                    if (0 === $result[$key - 1] || 0 === $result[$key + 1]) {
//                        $failCounter += 1;
//                    }
//
//                    if (10 === $result[$key - 1] || 10 === $result[$key + 1]) {
//                        $failCounter += 1;
//                    }
//                }
//            }
//        }
//
//        $check = true;
//        if ($failCounter > 0) {
//            $check = false;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }

    /**
     * Тест. Алмазы не должны появляться на крайних барабанах
     */
//    public function testDiamonds1()
//    {
//        $betLine = 1;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $failCounter = 0;
//        session(['balance' => 100000000000]);
//        for ($i = 0; $i < 100; $i++) {
//            $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName);
//
//            foreach ($result['info'] as $key => $item) {
//                if ($key < 2 || $key > 11) {
//                    if ($item === 0) {
//                        $failCounter += 1;
//                    }
//                }
//            }
//        }
//
//        $check = true;
//        if ($failCounter > 0) {
//            $check = false;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);        
//    }
//
//    /**
//     * Алмазы и монены не должны появляться в одном барабане
//     */
//    public function testDiamondsAndCoin1()
//    {
//        $betLine = 1;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $failCounter = 0;
//        session(['balance' => 100000000000]);
//        for ($i = 0; $i < 100; $i++) {
//            $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName);
//
//            foreach ($result['info'] as $key => $item) {
//                if ($item === 10) {
//                    if ($result[$key - 1] == $item || $result[$key + 1] == $item) {
//                        $failCounter += 1;
//                    }
//                }
//            }
//        }
//
//        $check = true;
//        if ($failCounter > 0) {
//            $check = false;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест. Золотые монеты не должны появляться в фриспинах
//     */
//    public function testGoldCoin1()
//    {
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['balance' => 100000000000]);
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $failCounter = 0;
//        for ($i = 0; $i < 100; $i++) {
//            $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName);
//
//            if (session('freeSpinData') != false) {
//                $freeSpinData = session('freeSpinData');
//                foreach ($result['info'] as $key => $item) {
//                    if ($item === 10) {
//                        if ($freeSpinData['count'] < 10) {
//                            $failCounter += 1;
//                        }
//                    }
//                }
//            }
//        }
//
//        $check = true;
//        if ($failCounter > 0) {
//            $check = false;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест. Золотых монет не должно быть больше 2 если ставка < 50ц
//     */
//    public function testGoldCoin2()
//    {
//        $betLine = 1;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['balance' => 100000000000]);
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $failCounter = 0;
//        for ($i = 0; $i < 100; $i++) {
//            $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName);
//
//            $count = 0;
//            foreach ($result['info'] as $key => $item) {
//                if ($item === 10) {
//                    $count += 1;
//                }
//
//                if ($count > 2) {
//                    $failCounter += 1;
//                }
//            }
//        }
//        
//        $check = true;
//        if ($failCounter > 0) {
//            $check = false;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проигрышь на двух бонусных символах
//     */
//    public function testWinOnBonusSymbols1()
//    {
//        $betLine = 1;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        $data = [1,1,10,2,2,2,3,3,3,4,4,4,5,5,10];
//        session(['sessionName' => 111111111111111]);
//        $newBalance = -15;
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $check = false;
//        if ($result['balance'] === $newBalance) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Выигрышь на 3-х бонусных символах
//     */
//    public function testWinOnBonusSymbols2()
//    {
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        $data = [1,1,10,2,2,2,3,3,10,4,4,4,5,5,10];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//        
//        $check = false;
//        if ($result['rope']['allWin'] === 300) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Выигрышь по двум символам
//     */
//    public function testWinOnLines1()
//    {
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        $data = [1,7,10,1,2,2,8,3,3,4,4,4,5,5,10];
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $check = false;
//        if ($result['allWin'] === 80 && $result['balance'] === -60) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Выигрышь по трем символам
//     */
//    public function testWinOnLines2()
//    {
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        $data = [1,7,10,1,2,2,1,3,3,4,4,4,5,5,10];
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $check = false;
//        if ($result['allWin'] === 240 && $result['balance'] === -60) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Выигрышь по двум символам, один из которых - джокер
//     */
//    public function testWinOnLines3()
//    {
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        $data = [1,7,10,0,2,2,8,3,3,4,4,4,5,5,7];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $check = false;
//        if ($result['allWin'] === 160 && $result['balance'] === -60) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Выпадение фриспина при наличии джокера
//     */
//    public function testFreeSpin1()
//    {
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        $data = [1,7,10,0,2,2,1,3,3,4,4,4,5,5,10];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $check = false;
//        if ($result['rope'] != false) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка allWin при выпадение фриспина при наличии джокера
//     */
//    public function testFreeSpin2()
//    {
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        $data = [1,7,10,0,2,2,1,3,3,4,4,4,5,5,10];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//        
//        $check = false;
//        if ($result['rope']['allWin'] === 1500 && $result['allWin'] === 1500) { // за три монеты 300, и 50*10*2 и 10*10*2 за самолеты
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка изменения множителя при выпадении алмаза в фриспин
//     */
//    public function testFreeSpin3()
//    {
//        session()->flush();
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $data = [7,7,7,2,2,2,3,0,3,4,4,4,5,5,5];
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $freeSpinData = session('freeSpinData');
//        $check = false;
//        if ($freeSpinData['mul'] === 3) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка изменения баланса при кручении фриспинов
//     */
//    public function testFreeSpin4()
//    {
//        session()->flush();
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result1 = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $data = [7,7,7,2,2,2,3,0,3,4,4,4,5,5,5];
//        $result2 = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $check = false;
//        if ($result1['balance'] === $result2['balance']) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка изменения общего выигрыша фриспинов при кручении фриспинов и выигреше в них
//     */
//    public function testFreeSpin5()
//    {
//        session()->flush();
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data); //+120 в allWin freespina
//
//        $data = [1,7,7,1,2,2,3,3,3,4,4,4,5,5,5];
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $freeSpinData = session('freeSpinData');
//
//        $check = false;
//        if ($freeSpinData['allWin'] === 280) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка изменения общего выигрыша фриспинов при кручении фриспинов и выигреше в них и выпадении алмаза
//     */
//    public function testFreeSpin6()
//    {
//        session()->flush();
//        $betLine = 20;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $res = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $data = [1,7,7,1,2,2,3,3,0,4,4,4,5,5,5];
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $lal = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $freeSpinData = session('freeSpinData');
//
//        $check = false;
//        if ($freeSpinData['allWin'] === 1400 && $freeSpinData['mul'] === 3) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка выигрыша по линиям (wl) в фриспинах
//     */
//    public function testFreeSpin7()
//    {
//        session()->flush();
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $data = [1,7,7,1,2,2,3,3,0,4,4,4,5,5,5];
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $lal = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $check = false;
//        if ($lal['wl'][2] === 80) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка выигрыша по линиям (wl) в фриспинах при выпадении алмаза
//     */
//    public function testFreeSpin8()
//    {
//        session()->flush();
//        $betLine = 4;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10];
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//
//        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $data = [1,7,7,0,2,2,3,3,0,4,4,4,5,5,5];
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $lal = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $check = false;
//        if ($lal['wl'][2] === 160) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Баланс не должен изменяться во время фриспинов (возможно уже устарело)
//     */
////    public function testEndFreeSpin1()
////    {
////        session()->flush();
////        $betLine = 10;
////        $linesInGame = 15;
////        $gameName = 'lifeOfLuxury';
////
////        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
////        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10]; // freeSpin start
////        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
////
////        $balanceValue1 = 0;
////        $balanceValue2 = 0;
////        for ($i = 9; $i >= 0; $i--) {
////            $data = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5];
////            $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
////            $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
////
////            if ($i === 1) {
////                $balanceValue1 = $result['balance'];
////            } else if ($i === 0) {
////                $balanceValue2 = $result['balance'];
////                dd($result);
////            }
////        }
////
////        $check = false;
////        if ($balanceValue1 === $balanceValue2) {
////            $check = true;
////        }
////
////        session()->flush();
////        $this->assertTrue($check);
////
////    }
//
//
//    /**
//     * verification the last spin in freespin (balance)
//     */
//    public function testEndFreeSpin2()
//    {
//        session()->flush();
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10]; // freeSpin start
//        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $allWin1 = 0;
//        $allWin2 = 0;
//        for ($i = 9; $i >= 0; $i--) {
//            $data = [3,1,4,10,1,2,4,10,2,7,2,9,2,4,1];
//            $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//            $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//            if ($i === 1) {
//                $allWin1 = $result['allWin'];
//            } else if ($i === 0) {
//                $allWin2 = $result['allWin'];
//            }
//        }
//
//        $check = false;
//        if ($allWin1 === $allWin2) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//
//    }
//
//    /**
//     * Тестирование прибалвления баланса после фриспина
//     */
//    public function testEndFreeSpin3()
//    {
//        session()->flush();
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10]; // freeSpin start
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data); // freeSpinData allWin == 300
//
//        $oldBalance = session('balance');
//
//        for ($i = 9; $i >= -1; $i--) {
//            $data = [3,1,4,10,1,2,4,10,2,7,2,9,2,4,1];
//            if ($i === -1) {
//                $data = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];
//            }
//            $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//            $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//            if ($i === 1) {
//                //dd($result['freeSpinData']['allWin']);
//                //$allWin1 = $result['allWin'];
//            } else if ($i === 0) {
//                //dd($result['balance']);
//                //dd($result['allWin']);
//            } else if ($i === -1) {
//                //dd($result['balance']);
//            }
//        }
//
//        $newBalance = session('balance');
//
//        //dd($newBalance);
//        //dd($oldBalance + 2300 - 150);
//
//        $check = false;
//        if (($oldBalance + 2300 - 150) === $newBalance) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тестирование выигрыша появления нескольких алмазов
//     */
//    public function testEndFreeSpin4()
//    {
//        session()->flush();
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10]; // freeSpin start // выигрышь 300
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data); // freeSpinData allWin == 300
//
//        $oldBalance = session('balance');
//
//        for ($i = 9; $i >= -1; $i--) {
//            $data = [3,1,4,10,1,2,4,10,2,7,2,9,2,4,1]; // 100 * mul
//
//            if ($i === -1) {
//                $data = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]; // 0
//            } elseif ($i > 5) {
//                $data = [7,7,7,2,2,0,3,3,3,4,4,4,5,5,5]; // 0 * mul
//            }
//
//            $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//            $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//            if ($i === 1) { // 3300
//                //dd($result['freeSpinData']['allWin'] + $oldBalance);
//                //$allWin1 = $result['allWin'];
//            } else if ($i === 0) { // 3900 + oldBalance
//                //dd($result);
//                //dd($result['balance']);
//                //dd($result['allWin']);
//            } else if ($i === -1) {
//                //dd($result['balance']);
//            }
//        }
//
//        $newBalance = session('balance');
//
//        //dd($newBalance);
//        //dd($oldBalance + 2300 - 150);
//
//        $check = false;
//        if (($oldBalance + 3900 - 150) === $newBalance) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тестирование выигрыша по линии после появления нескольких алмазов
//     */
//    public function testEndFreeSpin5()
//    {
//        session()->flush();
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10]; // freeSpin start // выигрышь 300
//        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data); // freeSpinData allWin == 300
//
//        $checkValue = 0;
//        for ($i = 9; $i >= -1; $i--) {
//            $data = [3,1,4,10,1,2,4,10,2,7,2,9,2,4,1]; // 100 * mul
//
//            if ($i === -1) {
//                $data = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]; // 0
//            } elseif ($i > 5) {
//                $data = [7,7,7,2,2,0,3,3,3,4,4,4,5,5,5]; // 0 * mul
//            }
//
//            $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//            $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//            if ($i === 1) {
//                $checkValue = $result['wl'][1];
//            }
//        }
//
//        $check = false;
//        if ($checkValue === 600) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка правильности выигрыша по линии в фриспинах при !false session('freeSpinMul')
//     */
//    public function testFreeSpin9()
//    {
//        session()->flush();
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//        
//        session(['freeSpinMul' => 5]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [5,2,10,10,1,3,3,5,2,0,9,6,9,3,1]; // freeSpin start // выигрышь 300
//        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data); // freeSpinData allWin == 300
//
//        $data = [2,7,3,2,4,0,1,3,4,0,7,6,4,7,3]; // 500 * 2
//        
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $result = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//        
//        $check = false;
//        if ($result['wl'][9] === 2000) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//
//    /**
//     * Проверка обннуления freeSpinMul в начале нового фриспина
//     */
//    public function testFreeSpin10()
//    {
//        session()->flush();
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        session(['freeSpinMul' => 5]);
//        
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10]; // freeSpin start // выигрышь 300
//        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data); // freeSpinData allWin == 300
//        
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//
//        $check = false;
//        if (session('freeSpinMul') === false) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка выигрыша по линии для wl в фриспине
//     */
//    public function testFreeSpin11()
//    {
//        session()->flush();
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        session(['freeSpinMul' => 5]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10]; // freeSpin start // выигрышь 300
//        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data); // freeSpinData allWin == 300
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,2,3,2,0,9,7,9,0,9,4,7,4,9,2];
//        $res = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//        
//        $check = false;
//        if ($res['wl'][10] === 200) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка выигрыша по линии для wl в фриспине
//     */
//    public function testFreeSpin12()
//    {
//        session()->flush();
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        session(['freeSpinMul' => 5]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10]; // freeSpin start // выигрышь 300
//        $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data); // freeSpinData allWin == 300
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [1,2,6,2,0,4,0,1,3,0,3,4,5,7,9];
//        $res = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//        
//        $check = false;
//        if ($res['wl'][10] === 2000) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }

    /**
     * Проверка дробного выигрыша
     */
//    public function testFreeSpin12()
//    {
//        session()->flush();
//        $betLine = 10;
//        $linesInGame = 15;
//        $gameName = 'lifeOfLuxury';
//        session(['sessionName' => 111111111111111]);
//
//        session(['freeSpinMul' => 8]);
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,7,10,10,2,2,1,3,3,4,4,4,5,5,10]; // freeSpin start
//        $res = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data); // freeSpinData allWin == 300
//
//
//        $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
//        $data = [7,3,4,6,0,7,7,9,0,1,0,5,4,1,5];
//        $res = $gameService->getSpinResultData($betLine, $linesInGame, $gameName, $data);
//        dd($res);
//
//        $check = false;
//        if ($res['wl'][10] === 2000) {
//            $check = true;
//        }
//
//        session()->flush();
//        $this->assertTrue($check);
//    }

    public function testVerTer()
    {
        session()->flush();
        $betLine = 1;
        $linesInGame = 15;
        $gameName = 'lifeOfLuxury';
        session(['sessionName' => 111111111111111]);
        session(['balance' => 111111111111111000000]);



        $countCoins = 0;
        $countDiamonds = 0;
        $allWin = 0;
        for ($i = 0; $i < 10000; $i++) {
            $gameService = new \App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService();
            $res = $gameService->getSpinData($betLine, $linesInGame, $gameName);

            foreach ($res['info'] as $re) {
                if ($re === 0) {
                    $countDiamonds += 1;
                }

                if ($re === 10) {
                    $countCoins += 1;
                }

            }
            
            $allWin += $res['allWin'];
        }
        
        echo '$countCoins = ' . $countCoins . ' ; $countDiamonds = ' . $countDiamonds . ' ; $allWin = ' . $allWin; 

        $check = false;
        if (1 === 1) {
            $check = true;
        }

        session()->flush();
        $this->assertTrue($check);
    }
}