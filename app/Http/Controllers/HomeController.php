<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use App\Services\GameServices\ElGalloSpinService2;
use App\Models\TestLog;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allValuesArray = [];
        for ($i = 0; $i < 620; $i++) {
            if ($i < 150) {
                $allValuesArray[] = 0;
            } elseif ($i > 149 && $i < 275) {
                $allValuesArray[] = 1;
            } elseif ($i > 274 && $i < 375) {
                $allValuesArray[] = 2;
            } elseif ($i > 374 && $i < 450) {
                $allValuesArray[] = 3;
            } elseif ($i > 449 && $i < 505) {
                $allValuesArray[] = 4;
            } elseif ($i > 504 && $i < 545) {
                $allValuesArray[] = 5;
            } elseif ($i > 544 && $i < 575) {
                $allValuesArray[] = 6;
            } elseif ($i > 574 && $i < 600) {
                $allValuesArray[] = 7;
            }

            if ($i > 599) {
                $allValuesArray[] = 0;
            }
        }

        $resultValues = [0, 0, 0, 0, 0, 0, 0, 0];
        for ($i = 0; $i < 100000; $i++) {
            $value = rand(0, 619);

            switch ($allValuesArray[$value]) {
                case 0 :
                    $resultValues[0] += 1;
                    break;
                case 1 :
                    $resultValues[1] += 1;
                    break;
                case 2 :
                    $resultValues[2] += 1;
                    break;
                case 3 :
                    $resultValues[3] += 1;
                    break;
                case 4 :
                    $resultValues[4] += 1;
                    break;
                case 5 :
                    $resultValues[5] += 1;
                    break;
                case 6 :
                    $resultValues[6] += 1;
                    break;
                case 7 :
                    $resultValues[7] += 1;
                    break;
            }
        }

        dd($resultValues);
    }

    public function testLog()
    {
        $betLine = 1;
        $linesInGame = 25;
        $itr = 100000;

        $elGallo = new ElGalloSpinService2();

        $allWinOnSlots = 0;
        for ($i = 0; $i < $itr; $i++) {
            $resultData = $elGallo->getLiteTestSpinData($betLine, $linesInGame, 'elGallo');
            $allWinOnSlots += $resultData['allWin'];
        }

        $allBet = $itr * $betLine * $linesInGame;
        $probability = 100 / $allBet * $allWinOnSlots;

        $testLog = new TestLog();
        $testLog->itr = $itr;
        $testLog->all_win_on_slots = $allWinOnSlots;
        $testLog->all_bet = $allBet;
        $testLog->probability = $probability;
        $testLog->save();


    }

    public function getTestLogs()
    {
        $data = TestLog::all()->toArray();

        foreach ($data as $item) {
            echo $item['probability'].'<br>';
        }
    }
}
