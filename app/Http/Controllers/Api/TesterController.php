<?php

namespace App\Http\Controllers\Api;

use App\Services\TestServices\TestServiceType1;
use App\Models\ProbabilityTest;
use function Couchbase\defaultDecoder;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Services\GameServices\ElGallo\ElGalloSpinService2;
use App\Services\GameServices\ElGallo\ElGalloSpinService3;
use App\Models\Jackpot;

class TesterController extends Controller
{
    public function getData()
    {
        $data = [];

        $probabilities = ProbabilityTest::all();

        foreach ($probabilities as $key => $probability) {
            if ($key === 0) {
                $data[] = [
                    'iterations' => $probability['iterations'],
                    'total_bet' => $probability['total_bet'],
                    'total_balance' => $probability['total_balance'],
                    'total_win' => $probability['total_win'],
                    'total_winnings_in_the_main_game' => $probability['total_winnings_in_the_main_game'],
                    'total_winnings_in_jackpot' => $probability['total_winnings_in_jackpot'],
                    'total_winnings_in_freespin' => $probability['total_winnings_in_freespin'],
                    'percentage_of_money_returned' => $probability['percentage_of_money_returned'],
                    'percentage_of_money_returned_om_main_game' => $probability['percentage_of_money_returned_om_main_game'],
                    'percentage_of_money_returned_on_jackpots' => $probability['percentage_of_money_returned_on_jackpots'],
                    'percentage_of_money_returned_on_freespin' => $probability['percentage_of_money_returned_on_freespin'],
                    'execution_time' => $probability['execution_time']
                ];
            } else {

            }
        }

        dd($data);
    }

    public function test()
    {
        $betLine = 10;
        $linesInGame = 25;
        $iteration = 1000000;

        $gameName = 'elGallo';

        for ($i = 0; $i < 3; $i++) {
            switch ($gameName) {
                case 'elGallo' :
                    $jackpot = (new Jackpot())->firstOrFail();
                    $jackpot->mini = 1000;
                    $jackpot->minor = 4000;
                    $jackpot->major = 25000;
                    $jackpot->big_daddy = 50000;
                    $jackpot->save();

                    $testData = (new TestServiceType1())->common($betLine, $linesInGame, $gameName, $iteration);
                    break;
                default :
                    $testData = [];
            }
        }

        //return $testData;
        dd('done');
    }

    public function testSlots(Request $request, $gameName)
    {
        $itr = 10000;
        $betLine = 1;
        $linesInGame = 25;

        $allWinOnSlots = 0;
        $allBet = 0;
        $probability = 0;
        $time = 0;

        if ($_POST) {
            $start = microtime(true);
            $betLine = $request->input('betLine');
            $linesInGame = $request->input('linesInGame');
            $itr = $request->input('itr');
            //$itr = $itr/10;

            $elGallo = new ElGalloSpinService2();

            $allWinOnSlots = 0;
            for ($i = 0; $i < $itr; $i++) {
                $resultData = $elGallo->getLiteTestSpinData($betLine, $linesInGame, $gameName);
                $allWinOnSlots += $resultData['allWin'];
            }

            $allBet = $itr * $betLine * $linesInGame;
            $probability = 100 / $allBet * $allWinOnSlots;

            $time = microtime(true) - $start;

//            echo 'iterations = ' . $itr . ' ; <br>';
//            echo 'all win = ' . $allWinOnSlots . ' ; <br>';
//            echo 'all bet = ' . $allBet . ' ; <br>';
//            echo 'percentage of money returned = ' . $probability . '% ; <br>';
//            echo 'execution time = ' . $time . ' сек <br>';
//            echo '<br><br><br>';
        }

        return view('tests.test', [
            'itr' => $itr,
            'betLine' => $betLine,
            'linesInGame' => $linesInGame,
            'allWinOnSlots' => $allWinOnSlots,
            'allBet' => $allBet,
            'probability' => $probability,
            'time' => $time
        ]);
    }


    public function testJackpots()
    {
        $linesInGame = 25;
        $betLine = 1;
        $itr = 10000;

        $mini = 1000;
        $minor = 5000;
        $major = 25000;
        $bigDaddy = 50000;

        $allWin = 0;
        $percentage = 0;

        $jackpots = Jackpot::find(1)->toArray();

        if ($_POST) {
            $jackpots = Jackpot::find(1);
            $jackpots->mini = $_POST['mini'] * 100;
            $jackpots->minor = $_POST['minor'] * 100;
            $jackpots->major = $_POST['major'] * 100;
            $jackpots->big_daddy = $_POST['big_daddy'] * 100;
            $jackpots->save();

            $mini = $_POST['mini'] * 100;
            $minor = $_POST['minor'] * 100;
            $major = $_POST['major'] * 100;
            $bigDaddy = $_POST['big_daddy'] * 100;
        }

        if ($_POST) {
            $jackpots = Jackpot::find(1);
            $jackpots->result_mini = $_POST['result_mini'] * 100;
            $jackpots->result_minor = $_POST['result_minor'] * 100;
            $jackpots->result_major = $_POST['result_major'] * 100;
            $jackpots->result_big_daddy = $_POST['result_big_daddy'] * 100;
            $jackpots->save();
        }


        $mini = floor($mini);
        $minor = floor($minor);
        $major = floor($major);
        $bigDaddy = floor($bigDaddy);

        return view('tests.jackpot-test', [
            'jackpots' => $jackpots,
            'mini' => $mini,
            'minor' => $minor,
            'major' => $major,
            'big_daddy' => $bigDaddy,
            'linesInGame' => $linesInGame,
            'betLine' => $betLine,
            'itr' => $itr,
            'allWin' => $allWin,
            'percentage' => $percentage
        ]);
    }

    public function jackpotProbabilityTest(Request $request)
    {
        $gameName = 'elGallo';
        $linesInGame = $request->input('linesInGame');
        $betLine = $request->input('betLine');
        $itr = $request->input('itr');
        $mini = 1000;
        $minor = 5000;
        $major = 25000;
        $bigDaddy = 50000;
        $jackpots = Jackpot::find(1)->toArray();

        $elGallo = new ElGalloSpinService3();
        $allWin = 0;
        for ($i = 0; $i < $itr; $i++) {
            $resultData = $elGallo->getSpinData($betLine, $linesInGame, $gameName, 3);

            if ($resultData['jackpot'] != false) {
                $winType = $resultData['jackpot']['result'];
                $allWin += $resultData['jackpot'][$winType];
            }
        }

        $percentage = 100 / ($itr * $betLine * $linesInGame) * $allWin;

//        echo 'all win: ' . $allWin . '<br>';
//        echo 'percentage of money returned: ' . $percentage . '<br><br><br><br>';

        return view('tests.jackpot-test', [
            'jackpots' => $jackpots,
            'mini' => $mini,
            'minor' => $minor,
            'major' => $major,
            'big_daddy' => $bigDaddy,
            'linesInGame' => $linesInGame,
            'betLine' => $betLine,
            'itr' => $itr,
            'percentage' => $percentage,
            'allWin' => $allWin
        ]);
    }

    public function commonTest(Request $request)
    {
        $itr = 100000;
        $betLine = 10;
        $linesInGame = 25;
        $gameName = 'elGallo';
        $allBet = 0;
        $resultData['balance'] = 0;
        $allWinOnSlots = 0;
        $allWinOnMainLocation = 0;
        $freeSpinAllWin = 0;
        $freeSpinProbability2 = 0;
        $jackpotProbability = 0;
        $jackpotWinnings = 0;
        $probability1 = 0;
        $probability2 = 0;
        $countFreeSpin = 0;
        $time = 0;
        $recoil = 3;

        if ($_GET) {
            $start = microtime(true);
            $betLine = $request->input('betLine');
            $linesInGame = $request->input('linesInGame');
            $itr = $request->input('itr');
            $recoil = $request->input('recoil');

            session()->flush();

            $elGallo = new ElGalloSpinService3();

            $countFreeSpin = 0;
            $resultData = [];
            $freeSpinItrCounter = 0;
            $freeSpinAllWin = 0;
            $jackpotWinnings = 0;
            $allWinOnMainLocation = 0;
            $rope = ['count' => 0, 'mul' => 0, 'hash' => 0];
            $allBet = 0;
            $i = 0;
            while ($allBet <= ($itr * $betLine * $linesInGame - 1)) {
                $i += 1;
                $resultData = $elGallo->getSpinData($betLine, $linesInGame, $gameName, $recoil);

                if (session('freeSpinData') == false) {
                    $allWinOnMainLocation += $resultData['allWin'];
                }

                if ($resultData['rope'] != false) {
                    $check = true;
                    if ($resultData['rope']['count'] == $rope['count'] && $resultData['rope']['mul'] == $rope['mul'] && $resultData['rope']['hash'] == $rope['hash']) {
                        $check = false;
                    } else {
                        $rope['count'] = $resultData['rope']['count'];
                        $rope['mul'] = $resultData['rope']['mul'];
                        $rope['hash'] = $resultData['rope']['hash'];
                    }

                    if (session('freeSpinData')) {
                        $freeSpinData = session('freeSpinData');

                        if ($freeSpinData['count'] === 0) {
                            $allWinOnMainLocation -= $freeSpinData['allWin'];
                            $freeSpinAllWin += $freeSpinData['allWin'];
                        }
                    }

                    if ($check) {
                        $countFreeSpin += 1;
                        $freeSpinItrCounter += $resultData['rope']['count'];
                    }
                }

                if ($resultData['jackpot'] != false) {
                    $winType = $resultData['jackpot']['result'];
                    $jackpotWinnings += $resultData['jackpot'][$winType];
                }

                $allBet += $betLine * $linesInGame;
            }

            $allWinOnSlots = $resultData['balance'] - 1000 + $allBet + $jackpotWinnings;
            $probability1 = 100 / $allBet * $allWinOnSlots; // общий выигрышь в игре
            $probability2 = 100 / $allBet * $allWinOnMainLocation; // общий выигрышь только по слотам
            $freeSpinProbability = 100 / $allBet * $freeSpinAllWin; // попытка подсчитать
            $freeSpinProbability2 = 100 / $allBet * ($allWinOnSlots - $jackpotWinnings - $allWinOnMainLocation); // относительная джекпота и основоного экрана
            $jackpotProbability = 100 / $allBet * $jackpotWinnings;

            $time = microtime(true) - $start;
        }


        return view('tests.common-test', [
            'itr' => $itr,
            'betLine' => $betLine,
            'linesInGame' => $linesInGame,
            'allBet' => $allBet,
            'balance' => $resultData['balance'],
            'allWinOnSlots' => $allWinOnSlots,
            'allWinOnMainLocation' => $allWinOnMainLocation,
            'freeSpinAllWin' => $freeSpinAllWin,
            'freeSpinProbability2' => $freeSpinProbability2,
            'jackpotProbability' => $jackpotProbability,
            'jackpotWinnings' => $jackpotWinnings,
            'probability1' => $probability1,
            'probability2' => $probability2,
            'countFreeSpin' => $countFreeSpin,
            'time' => $time,
            'recoil' => $recoil
        ]);
    }
}
