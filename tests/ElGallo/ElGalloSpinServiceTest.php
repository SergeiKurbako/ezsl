<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Services\GameServices\ElGalloSpinService;

class ElGalloSpinServiceTest extends TestCase
{
    private $bonusValue = 2;
    private $elGalloSpinService;
    private $gameName = 'ElGallo';
    private $linesInGame = 25;
    private $betLine = 1;
    private $gameRules;

    public function __construct($name = null, array $data = array(), $dataName = '')
    {
        parent::__construct($name, $data, $dataName);
        $this->elGalloSpinService = new \App\Services\GameServices\ElGalloSpinService();
    }

    public function testEmpty()
    {
        $check = false;
        if (1 === 1) {
            $check = true;
        }

        $this->assertTrue($check);
    }

//    public function testGetWinLinesData1()
//    {
//        $info = [8,8,8,8,10,10,8,1,1,7,7,7,3,3,3];
//        $linesInGame = 25;
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//
//        $winLinesData = $this->elGalloSpinService->getWinLinesData($this->gameRules, $info, $linesInGame);
//
//        $check = true;
//
//        if ($winLinesData !== [[1,8,3],[6,8,3]]) {
//            $check = false;
//        }
//
//        $this->assertTrue($check);
//    }

//    public function testGetWinLinesData2()
//    {
//        $info = [2,0,1,0,3,4,5,6,1,0,2,8,8,4,0];
//        $linesInGame = 25;
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//
//        $winLinesData = $this->elGalloSpinService->getWinLinesData($this->gameRules, $info, $linesInGame);
//
//        $check = true;
//
//        if ($winLinesData !== [[6,5,4],[15,6,4],[17,1,5],[19,1,4]]) {
//            $check = false;
//        }
//
//        $this->assertTrue($check);
//    }
//
//    //TODO сделать отвязку от конкретных значений, т.е. нужно получать из правил
//    // общая проверка правильности получения ответа
//    public function testGetWinBonusSymbolsData1() {
//        $bonusValue = 2;
//        $info = [8,2,8,8,2,2,8,2,1,7,7,7,2,3,3];
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//
//        $winBonusSymbolsData = $this->elGalloSpinService->getWinBonusSymbolsData($this->gameRules, $info, $bonusValue);
//
//        $check = false;
//        if ($winBonusSymbolsData === [5, 400]) {
//            $check = true;
//        }
//
//        $this->assertTrue($check);
//    }
//
//    // проверка правильности получения ответа в случае когда бонусных символов больше чем 5
//    public function testGetWinBonusSymbolsData2() {
//        $bonusValue = 2;
//        $info = [8,2,8,8,2,2,8,2,2,7,7,7,2,3,3];
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//
//        $winBonusSymbolsData = $this->elGalloSpinService->getWinBonusSymbolsData($this->gameRules, $info, $bonusValue);
//
//        $check = false;
//        if ($winBonusSymbolsData === [6, 400]) {
//            $check = true;
//        }
//
//        $this->assertTrue($check);
//    }
//
//    public function testWinLinesDataReturnFreeSpin1()
//    {
//        $info = [8, 2, 8, 8, 2, 2, 8, 2, 1, 7, 7, 7, 2, 3, 3];
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//        $winLinesData = $this->elGalloSpinService->getWinLinesData($this->gameRules, $info, $this->linesInGame);
//
//        $winLinesData === 'freeSpin' ? $check = true : $check = false;
//
//        $this->assertTrue($check);
//    }
//
//    public function testWinLinesDataReturnFreeSpin2()
//    {
//        $info = [0, 4, 9, 0, 2, 11, 0, 1, 10, 3, 2, 1, 0, 2, 4];
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//        $winLinesData = $this->elGalloSpinService->getWinLinesData($this->gameRules, $info, $this->linesInGame);
//
//        $winLinesData === 'freeSpin' ? $check = true : $check = false;
//
//        $this->assertTrue($check);
//    }
//
//    public function testOpenFreeSpinDataSession() {
//        $info = [8, 2, 8, 8, 2, 2, 8, 2, 1, 7, 7, 7, 2, 3, 3];
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//
//        $winBonusSymbolsData = $this->elGalloSpinService->getWinBonusSymbolsData($this->gameRules, $info, $this->bonusValue);
//
//        $this->elGalloSpinService->firstStartFreeSpin($this->betLine, $this->linesInGame, $winBonusSymbolsData);
//
//        $check = true;
//
//        if (!session('freeSpinData')) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    public function testFirstStartFreeSpin()
//    {
//        $info = [8, 2, 8, 8, 2, 2, 8, 2, 1, 7, 7, 7, 2, 3, 3];
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//
//        $winBonusSymbolsData = $this->elGalloSpinService->getWinBonusSymbolsData($this->gameRules, $info, $this->bonusValue);
//
//        $this->elGalloSpinService->firstStartFreeSpin($this->betLine, $this->linesInGame, $winBonusSymbolsData);
//
//        $check = true;
//
//        $freeSpinData = session('freeSpinData');
//
//        if ($freeSpinData['allWin'] === 0) {
//            $check = false;
//        }
//
//        if ($freeSpinData['repeat'] !== false) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }

//    public function testFreeSpinIteration()
//    {
//        $info = [8, 2, 8, 8, 2, 2, 8, 2, 1, 7, 7, 7, 2, 3, 3];
//        $oldBalance = 10;
//        session(['balance' => $oldBalance]);
//        session(['freeSpinData' => ['count' => 2 , 'mul' => 2, 'allWin' => 10, 'repeat' => false]]);
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//        $winLinesData = $this->elGalloSpinService->getWinLinesData($this->gameRules, $info, $this->linesInGame);
//
//        $winBonusSymbolsData = $this->elGalloSpinService->getWinBonusSymbolsData($this->gameRules, $info, $this->bonusValue);
//
//        $this->elGalloSpinService->freeSpinIteration($this->gameRules, $winLinesData, $this->betLine, $winBonusSymbolsData, 25);
//
//        $newBalance = session('balance');
//
//        $check = true;
//
//        if ($newBalance !== $oldBalance) {
//            $check = false;
//        }
//
//        $freeSpinData = session('freeSpinData');
//        if ($freeSpinData['count'] !== 1) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }

    /**
     * Проверка увеличения общего выигрыша во фрииспинах
     */
//    public function testFreeSpinUpAllWin()
//    {
//        $info = [8, 6, 6, 8, 2, 2, 8, 1, 1, 7, 7, 7, 3, 3, 3];
//        $oldAllWin = 0;
//        session(['balance' => 0]);
//        session(['freeSpinData' => ['count' => 2 , 'mul' => 2, 'allWin' => $oldAllWin, 'repeat' => false]]);
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//        $winLinesData = $this->elGalloSpinService->getWinLinesData($this->gameRules, $info, $this->linesInGame);
//        $win = $this->elGalloSpinService->getAllWin($this->gameRules, $winLinesData, $this->betLine);
//
//        $winBonusSymbolsData = [0,0];
//
//        $this->elGalloSpinService->freeSpinIteration($this->gameRules, $winLinesData, $this->betLine, $winBonusSymbolsData, 25);
//
//        $freeSpinData = session('freeSpinData');
//
//        $check = true;
//
//        if ($freeSpinData['allWin'] !== ($win * $freeSpinData['mul'])) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }

    /**
     * Проверка не увеличения общего выигрыша во фрииспинах
     */
//    public function testFreeSpinStepAllWin()
//    {
//        $info = [6, 6, 6, 2, 2, 2, 1, 1, 1, 7, 7, 7, 3, 3, 3];
//        $oldAllWin = 0;
//        session(['balance' => 0]);
//        session(['freeSpinData' => ['count' => 2 , 'mul' => 2, 'allWin' => $oldAllWin, 'repeat' => false]]);
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//        $winLinesData = $this->elGalloSpinService->getWinLinesData($this->gameRules, $info, $this->linesInGame);
//        $win = $this->elGalloSpinService->getAllWin($this->gameRules, $winLinesData, $this->betLine);
//
//        $winBonusSymbolsData = $this->elGalloSpinService->getWinBonusSymbolsData($this->gameRules, $info, $this->bonusValue);
//
//        $this->elGalloSpinService->freeSpinIteration($this->gameRules, $winLinesData, $this->betLine, $winBonusSymbolsData, 25);
//
//        $freeSpinData = session('freeSpinData');
//
//        $check = true;
//
//        if ($freeSpinData['allWin'] !== ($win * $freeSpinData['mul'])) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка варианта после игры freeSpin, когда пльзователь забирает выигрышь
//     */
//    public function testGetChoiceResultData1()
//    {
//        $allWin = 10;
//        session(['balance' => 0]);
//        session(['freeSpinData' => ['count' => 0 , 'mul' => 2, 'allWin' => $allWin, 'repeat' => false]]);
//        $choice = 'get';
//
//        $this->elGalloSpinService->getChoiceResultData($choice);
//
//        $check = true;
//
//        if (session('balance') !== $allWin) {
//            $check = false;
//        }
//
//        if (session('freeSpinData') !== false) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка варианта после игры freeSpin, когда пльзователь выбирает рандомный выигрышь
//     */
//    public function testGetChoiceResultData2()
//    {
//        $allWin = 10;
//        session(['balance' => 0]);
//        session(['freeSpinData' => ['count' => 0 , 'mul' => 2, 'allWin' => $allWin, 'repeat' => false]]);
//        $choice = 'random';
//
//        $this->elGalloSpinService->getChoiceResultData($choice);
//
//        $check = true;
//
//        if (session('balance') === 0) {
//            $check = false;
//        }
//
//        if (session('freeSpinData') !== false) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка варианта после игры freeSpin, когда пльзователь первый раз перезапускает freeSpin
//     */
//    public function testGetChoiceResultData3()
//    {
//        session(['balance' => 10]);
//        session(['freeSpinData' => ['count' => 0 , 'mul' => 2, 'allWin' => 1111, 'repeat' => false]]);
//        $choice = 'repeat';
//
//        $this->elGalloSpinService->getChoiceResultData($choice);
//
//        $freeSpinData = session('freeSpinData');
//
//        $check = true;
//
//        if (session('balance') !== 10) {
//            $check = false;
//        }
//
//        if (!$freeSpinData) {
//            $check = false;
//        }
//
//        if ($freeSpinData['repeat'] !== true) {
//            $check = false;
//        }
//
//        if ($freeSpinData['count'] === 0) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Проверка варианта после игры freeSpin, когда пльзователь второй раз перезапускает freeSpin
//     */
//    public function testGetChoiceResultData4()
//    {
//        session(['balance' => 10]);
//        session(['freeSpinData' => ['count' => 0 , 'mul' => 2, 'allWin' => 1111, 'repeat' => true]]);
//        $choice = 'repeat';
//
//        $this->elGalloSpinService->getChoiceResultData($choice);
//
//        $freeSpinData = session('freeSpinData');
//
//        $check = true;
//        if ($freeSpinData) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    public function testGetWinCellInfo1()
//    {
//        $info = [1,7,7,1,3,3,1,4,4,5,5,5,6,6,6];
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//        $winLinesData = [[1,1,3]];
//
//        $winCellInfo = $this->elGalloSpinService->getWinCellInfo($winLinesData, $this->gameRules, $info);
//
//        $check = true;
//        if ($winCellInfo !== [1,false,false,1,false,false,1,false,false,false,false,false,false,false,false]) {
//            $check = false;
//        }
//
//        $this->assertTrue($check);
//    }
//
//    public function testGetWinCellInfo2()
//    {
//        $info = [1, 5, 3, 4, 1, 2, 3, 6, 0, 9, 10, 1, 1, 0, 9];
//        $this->gameRules = $this->elGalloSpinService->getGameRules('ElGallo');
//        $winLinesData = [[3,1,3]];
//
//        $winCellInfo = $this->elGalloSpinService->getWinCellInfo($winLinesData, $this->gameRules, $info);
//
//        $check = true;
//        if ($winCellInfo !== [1,false,false,false,1,false,false,false,0,false,false,false,false,false,false]) {
//            $check = false;
//        }
//
//        $this->assertTrue($check);
//    }

//    public function testGetDoubleResultData1()
//    {
//        $selectedCard = 'c';
//        session(['dcard' => 'c']);
//        session(['cardGameIteration' => 0]);
//        session(['allWin' => 10]);
//
//        $doubleResultData = $this->elGalloSpinService->getDoubleResultData($selectedCard);
//
//        $check = true;
//        if ($doubleResultData['win'] !== true || $doubleResultData['allWin'] !== 40 || $doubleResultData['count'] !== 1) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    public function testGetDoubleResultData2()
//    {
//        $selectedCard = 'red';
//        session(['dcard' => 'c']);
//        session(['cardGameIteration' => 0]);
//        session(['allWin' => 10]);
//
//        $doubleResultData = $this->elGalloSpinService->getDoubleResultData($selectedCard);
//
//        $check = true;
//        if ($doubleResultData['win'] !== true || $doubleResultData['allWin'] !== 20 || $doubleResultData['count'] !== 1) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест уменьшения баланса при кручении слотов в отсутсвии выигрышей
//     */
//    public function testBalance1()
//    {
//        $prevBalance = \App\Models\User::find(1)->balance;
//        session(['balance' => $prevBalance]);
//        $checkBalance = $prevBalance - 25;
//        $betLine = 1;
//        $linesInGame = 25;
//        $data = [1,1,1,3,3,3,4,4,4,5,5,5,6,6,6];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        $check = true;
//        if ($resultData['balance'] !== $checkBalance && session('allWin') === 0) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест баланса при выигрыше
//     */
//    public function testBalance2()
//    {
//        $prevBalance = \App\Models\User::find(1)->balance;
//        session(['balance' => $prevBalance]);
//        $checkBalance = $prevBalance - 25;
//        $betLine = 1;
//        $linesInGame = 25;
//        $data = [1,7,7,1,3,3,1,4,4,5,5,5,6,6,6];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        $check = true;
//        if ($resultData['balance'] !== $checkBalance && session('allWin') === 25) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест баланса при выпадении двух петухов
//     */
//    public function testBalance3()
//    {
//        $prevBalance = \App\Models\User::find(1)->balance;
//        session(['balance' => $prevBalance]);
//        $checkBalance = $prevBalance - 25;
//        $betLine = 1;
//        $linesInGame = 25;
//        $data = [7,2,7,3,3,3,4,2,4,5,5,5,6,6,6];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        $check = true;
//        if ($resultData['balance'] !== $checkBalance && session('allWin') === 50) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест баланса при выпадении трех петухов + должна начать freeSpin игра
//     */
//    public function testBalance4()
//    {
//        $prevBalance = \App\Models\User::find(1)->balance;
//        session(['balance' => $prevBalance]);
//        $checkBalance = $prevBalance - 25;
//        $betLine = 1;
//        $linesInGame = 25;
//        $data = [7,2,7,3,3,3,4,2,4,5,5,5,6,6,2];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        $check = true;
//        if ($resultData['balance'] !== $checkBalance && session('freeSpinData') != false) {
//            $check = false;
//        }
//
//        if (session('allWin') !== 0) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест баланса при выпадении трех петухов + должна начать freeSpin игра + в фрииспине на первой итерации делается выигрышь * множитель
//     */
//    public function testBalance5()
//    {
//        $prevBalance = \App\Models\User::find(1)->balance;
//        session(['balance' => $prevBalance]);
//        $checkBalance = $prevBalance - 25;
//        $betLine = 1;
//        $linesInGame = 25;
//        $data = [7,2,7,3,3,3,4,2,4,5,5,5,6,6,2];
//
//        // выпадение фрииспинов
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        $check = true;
//        if ($resultData['balance'] !== $checkBalance && session('freeSpinData') == false) {
//            $check = false;
//        }
//
//        if (session('allWin') !== 0) {
//            $check = false;
//        }
//
//        // выпадение выигрыша
//        $checkBalance = 975;
//        $data = [7,8,8,7,3,3,7,4,4,5,5,5,6,6,6];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        if ($resultData['balance'] !== $checkBalance) {
//            $check = false;
//        }
//
//        if (session('allWin') !== 0) {
//            $check = false;
//        }
//
//        $freeSpinData = session('freeSpinData');
//        $allWin = $freeSpinData['allWin'];
//        $checkAllWin = $freeSpinData['mul'] * 20 + 125;
//
//        if ($allWin !== $checkAllWin) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест баланса при выпадении петухов с дъяволами
//     */
//    public function testBalance6()
//    {
//        $prevBalance = \App\Models\User::find(1)->balance;
//        session(['balance' => $prevBalance]);
//        $checkBalance = $prevBalance - 25;
//        $betLine = 1;
//        $linesInGame = 25;
//        $data = [1,9,0,3,4,2,1,3,0,0,4,8,0,8,6];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//        $check = true;
//        if ($resultData['balance'] !== $checkBalance && session('allWin') === 50) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест выпадения двух петухов
//     */
//    public function testBalance7()
//    {
//        $prevBalance = \App\Models\User::find(1)->balance;
//        session(['balance' => $prevBalance]);
//        $checkBalance = $prevBalance - 25;
//        $betLine = 1;
//        $linesInGame = 25;
//        $data = [7,1,0,4,3,2,4,11,6,6,2,11,7,11,6];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        $check = true;
//        if ($resultData['balance'] !== $checkBalance && session('allWin') === 50) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Тест allWin при выпадении трех петухов
//     */
//    public function testBalance8()
//    {
//        $prevBalance = \App\Models\User::find(1)->balance;
//        session(['balance' => $prevBalance]);
//        $checkBalance = $prevBalance - 25;
//        $betLine = 1;
//        $linesInGame = 25;
//        $data = [1,0,2,11,0,3,0,10,2,4,10,3,3,2,10];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        $check = true;
//        if ($resultData['balance'] !== $checkBalance && session('allWin') === 0) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    /**
//     * Исправлени увеличения баланса на "1000" при выпадении фриспина. (Причина оказалась в неучтенном джекпоте)
//     */
//    public function testBalance9()
//    {
//        session()->flush();
//        $prevBalance = \App\Models\User::find(1)->balance;
//        session(['balance' => $prevBalance]);
//        $checkBalance = $prevBalance - 25;
//        $betLine = 1;
//        $linesInGame = 25;
//        $data = [1,1,1,11,11,11,3,3,3,4,4,4,5,5,5];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        $check = true;
//        if ($resultData['balance'] !== $checkBalance && session('allWin') !== 40) {
//            $check = false;
//        }
//
//        $checkBalance = $checkBalance - $betLine * $linesInGame + session('allWin');
//
//        $data = [11,2,0,2,9,1,7,1,2,9,8,0,9,10,0];
//
//        $resultData = $this->elGalloSpinService->getTestSpinData($betLine, $linesInGame, $this->gameName, $data);
//
//        if ($resultData['balance'] !== $checkBalance && session('allWin') !== 0 && $resultData['allWin'] !== 0) {
//            $check = false;
//        }
//
//        session()->flush();
//
//        $this->assertTrue($check);
//    }
//
//    public function testGetJackpotData1()
//    {
//        $data = $this->elGalloSpinService->getJackpotData();
//
//        $check = false;
//        if ($data['MINI'] && $data['MINOR'] && $data['MAJOR'] && $data['BIG DADDY']) {
//            $check = true;
//        }
//
//        $this->assertTrue($check);
//    }
//
//
//
//    /**
//     * Проверка функции на случай, когда джекпоты достигли своего максимального значения
//     */
//    public function testUpdateJackpots2()
//    {
//        $betLine = 1;
//        $linesInGame = 25;
//        $jackpotPercentageIncrease = 0.5;
//
//        $increase = $betLine * $linesInGame * $jackpotPercentageIncrease;
//
//        $oldJackpots = \App\Models\Jackpot::firstOrFail();
//
//        $currentJackpot = \App\Models\Jackpot::firstOrFail();
//        $currentJackpot->mini = $currentJackpot->max_mini;
//        $currentJackpot->minor = $currentJackpot->max_minor;
//        $currentJackpot->major = $currentJackpot->max_major;
//        $currentJackpot->big_daddy = $currentJackpot->max_big_daddy;
//        $currentJackpot->save();
//
//        $this->elGalloSpinService->updateJackpots($betLine, $linesInGame, $jackpotPercentageIncrease);
//
//        $newJackpots = \App\Models\Jackpot::firstOrFail();
//
//        $check = false;
//        if (($newJackpots->max_mini) === $newJackpots->mini &&
//            ($newJackpots->max_minor) === $newJackpots->minor &&
//            ($newJackpots->max_major) === $newJackpots->major &&
//            ($newJackpots->max_big_daddy) === $newJackpots->big_daddy)
//        {
//            $check = true;
//        }
//
//        $newJackpots->mini = $oldJackpots->mini;
//        $newJackpots->minor = $oldJackpots->minor;
//        $newJackpots->major = $oldJackpots->major;
//        $newJackpots->big_daddy = $oldJackpots->big_daddy;
//        $newJackpots->save();
//
//        $this->assertTrue($check);
//    }
//
//    public function test()
//    {
//        $oldJackpots = \App\Models\Jackpot::firstOrFail();
//
//        $this->elGalloSpinService->resetJackpot('MINI');
//
//        $newJackpots = \App\Models\Jackpot::firstOrFail();
//
//        $check = false;
//        if (floor($newJackpots->mini) === $newJackpots->min_mini) {
//            $check = true;
//        }
//
//        $newJackpots->mini = $oldJackpots->mini;
//        $newJackpots->save();
//
//        $this->assertTrue($check);
//    }
}