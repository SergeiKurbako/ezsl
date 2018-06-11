<?php
namespace App\Services\TestServices;

use App\Services\GameServices\ElGallo\ElGalloSpinService3;
use App\Models\ProbabilityTest;

class TestServiceType1
{
    public function common($betLine, $linesInGame, $gameName, $iteration)
    {
        session()->flush();
        $start = microtime(true);

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
        while ($allBet <= ($iteration*$betLine*$linesInGame - 1)) {
            $i += 1;
            $resultData = $elGallo->getSpinData($betLine, $linesInGame, $gameName);

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
        $probability1 = 100/$allBet*$allWinOnSlots; // общий выигрышь в игре
        $probability2 = 100/$allBet*$allWinOnMainLocation; // общий выигрышь только по слотам
        $freeSpinProbability = 100/$allBet*$freeSpinAllWin; // попытка подсчитать
        $freeSpinProbability2 = 100/$allBet*($allWinOnSlots - $jackpotWinnings - $allWinOnMainLocation); // относительная джекпота и основоного экрана
        $jackpotProbability = 100/$allBet*$jackpotWinnings;

        $time = microtime(true) - $start;

        $probabilityTest = new ProbabilityTest();
        $probabilityTest->iterations = $iteration;
        $probabilityTest->total_bet = $allBet;
        $probabilityTest->total_balance = $resultData['balance'];
        $probabilityTest->total_win = $allWinOnSlots;
        $probabilityTest->total_winnings_in_the_main_game = $allWinOnMainLocation;
        $probabilityTest->total_winnings_in_jackpot = $jackpotWinnings;
        $probabilityTest->total_winnings_in_freespin = $freeSpinAllWin;
        $probabilityTest->percentage_of_money_returned = $probability1;
        $probabilityTest->percentage_of_money_returned_om_main_game = $probability2;
        $probabilityTest->percentage_of_money_returned_on_jackpots = $jackpotProbability;
        $probabilityTest->percentage_of_money_returned_on_freespin = $freeSpinProbability2;
        $probabilityTest->execution_time = $time;
        $probabilityTest->save();

        return [
            'iterations' => $iteration,
            'total_bet' => $allBet,
            'total_balance' => $resultData['balance'],
            'total_win' => $allWinOnSlots,
            'total_winnings_in_the_main_game' => $allWinOnMainLocation,
            'total_winnings_in_jackpot' => $jackpotWinnings,
            'total_winnings_in_freespin' => $freeSpinAllWin,
            'percentage_of_money_returned' => $probability1,
            'percentage_of_money_returned_om_main_game' => $probability2,
            'percentage_of_money_returned_on_jackpots' => $jackpotProbability,
            'percentage_of_money_returned_on_freespin' => $freeSpinProbability2,
            'execution_time' => $time
        ];
    }
}