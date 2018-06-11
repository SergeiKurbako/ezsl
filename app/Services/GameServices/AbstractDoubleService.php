<?php

namespace app\Services\GameServices;

use App\Models\Game;

abstract class AbstractDoubleService
{

    /**
     * Получаем игровые правила
     *
     * return array $gameRules
     */
    protected function getGameRules($gameName)
    {
        $gameData = Game::where('gameName', '=', $gameName)->firstOrFail();
        isset($gameData->gameRules) ? $gameRules = json_decode($gameData->gameRules) : $gameRules = false;

        return $gameRules;
    }

    /**
     * Получение баланса после бонусной игры
     * return int $balance
     */
    protected function getBalanceAfterBonusGame($rope, $betLine, $linesInGame)
    {

        $deltaBalance = 0;

        foreach ($rope as $value) {
            if ($value > 0) {
                $deltaBalance += $betLine * $value * $linesInGame;
            } else {
                break;
            }
        }

        session(['allWin' => $deltaBalance]);

        $balance = session('balance') - $betLine * $linesInGame;

        return $balance;
    }

    /**
     * Получаем удвоенную сумму
     * @return int dwin
     */
    protected function getDwin()
    {
        return session('allWin') * 2;
    }

    /**
     * Получаем следующую карту диллера
     *
     * return int $dcatd2
     */
    protected function getDcard2($gameRules)
    {

        $value = [rand(1, 11), rand(0, 3)];

        $dcatd2 = $gameRules->cards[$value[0]][$value[1]];

        return $dcatd2;

    }

    /**
     * Получаем значения открываемых игроку карт
     * @return array $valuesOfAllCards
     */
    protected function getValuesOfAllCards($gameRules, $selectedCard, $randWin)
    {
        $dcardValue = $this->getDcardValue($gameRules);
        $userCardValue = $this->getUserCardValue($dcardValue, $randWin);
        $userSelectedCard = $this->getSelectedCard($gameRules, $userCardValue);

        //формируем массив карт открываемых пользователю
        $valuesOfAllCards = [false, false, false, false];

        $valuesOfAllCards[$selectedCard - 1] = $userSelectedCard;

        foreach ($valuesOfAllCards as $key => $value) {
            if ($value === false) {
                $valuesOfAllCards[$key] = $gameRules->cards[rand(0, 12)][rand(0, 3)];
            }
        }

        return $valuesOfAllCards;
    }

    /**
     * Получаем величину карты диллера (относительно $gameRules)
     * @return int $dcardValue
     */
    protected function getDcardValue($gameRules)
    {

        foreach ($gameRules->cards as $value => $cardNumbersArray) {
            foreach ($cardNumbersArray as $number) {
                if ($number == session('dcard')) {
                    $dcardValue = $value;

                    return $dcardValue;
                }
            }
        }

    }

    /**
     * Получение величина карты пользователя
     * retutn int $userCardValue
     */
    protected function getUserCardValue($dcardValue, $randWin)
    {
        if ($randWin == 1) {
            $userCardValue = rand($dcardValue + 1, 12);
        } elseif ($randWin == 2) {
            $userCardValue = $dcardValue;
        } elseif ($randWin == 0) {
            $userCardValue = rand(0, $dcardValue - 1);
        }
    
        return $userCardValue;
    }

    /**
     * Получаем карту выбранную пользователем
     * @return int $userSelectedCard
     */
    protected function getSelectedCard($gameRules, $userCardValue)
    {

        $userSelectedCard = $gameRules->cards[$userCardValue][rand(0, 3)];

        return $userSelectedCard;
    }

}