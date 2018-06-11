<?php
namespace App\Services\GameServices;

class IgrosoftDoubleService extends AbstractDoubleService
{

    public function getDoubleResultData($selectedCard, $gameName) {

        $gameRules = $this->getGameRules($gameName);

        $numbers = [];
        for ($i = 0; $i < 100; $i++) {
            if ($i < 40) {
                $numbers[] = 1;
            } elseif ($i >= 40 && $i < 90) {
                $numbers[] = 0;
            } else {
                $numbers[] = 2;
            }
        }

        $randWin = $numbers[rand(0,100)];

        if($randWin == 1) {

            $dwin = $this->getDwin();
            $dcard2 = $this->getDcard2($gameRules);
            $valuesOfAllCards = $this->getValuesOfAllCards($gameRules, $selectedCard, $randWin);

            $balance = session('balance') + session('allWin') * 2;
            session(['allWin' => session('allWin') * 2]);
            session(['dcard' => $dcard2]);

            $doubleResultData = [
                'dwin' => $dwin,
                'dcard' => $dcard2,
                'balance' => $balance,
                'valuesOfAllCards' => $valuesOfAllCards,
                'selectedCardR' => $selectedCard,
                'resutlState' => $randWin
            ];

        } elseif ($randWin == 2) {

            $dwin = session('allWin');
            $dcard2 = $this->getDcard2($gameRules);
            $valuesOfAllCards = $this->getValuesOfAllCards($gameRules, $selectedCard, $randWin);

            $balance = session('balance') + session('allWin');
            session(['dcard' => $dcard2]);

            $doubleResultData = [
                'dwin' => $dwin,
                'dcard' => $dcard2,
                'balance' => $balance,
                'valuesOfAllCards' => $valuesOfAllCards,
                'selectedCardR' => $selectedCard,
                'resutlState' => $randWin
            ];

        } else {
            $valuesOfAllCards = $this->getValuesOfAllCards($gameRules, $selectedCard, $randWin);

            $balance = session('balance');

            session(['allWin' => 0]);

            $doubleResultData = [
                'dwin' => false,
                'dcard' => false,
                'balance' => $balance,
                'valuesOfAllCards' => $valuesOfAllCards,
                'selectedCardR' => $selectedCard,
                'resutlState' => $randWin
            ];

        }

        return $doubleResultData;

    }
    
}