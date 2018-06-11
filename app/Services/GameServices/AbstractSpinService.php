<?php

namespace app\Services\GameServices;

use App\Models\Game;

abstract class AbstractSpinService
{

    /**
     * Получаем игровые правила
     *
     * return array $gameRules
     */
    public function getGameRules($gameName)
    {
        $gameData = Game::where('gameName', '=', $gameName)->firstOrFail();

        isset($gameData->gameRules) ? $gameRules = json_decode($gameData->gameRules) : $gameRules = false;

        return $gameRules;
    }

    /**
     * Получение общей суммы выигрыша
     *
     * @return int $allWin
     */
    protected function getAllWin($gameRules, $winLinesData, $betLine)
    {
        $allWin = 0;

        foreach ($gameRules->winRules as $rule) {
            foreach ($winLinesData as $winLineData) {
                if ($rule[0] == $winLineData[1]) {
                    if ($rule[1] == $winLineData[2]) {
                        $allWin += $betLine * $rule[2];
                    }
                }
            }
        }

        return $allWin;
    }

    /**
     * Генерация значений для ячеек
     *
     * @return array $valueForCells
     */
    protected function generatingValuesForCells($gameRules)
    {
        $valueForCells = [];
        for ($i = 0; $i < 15; $i++) {
            $valueForCells[] = rand(0, $gameRules->numberOfCellValues - 1);
        }

        return $valueForCells;
    }

    /**
     * Получении данных о сумме выигрыша по каждой из линий
     *
     * return array $winDataOfLines
     */
    protected function getWl($gameRules, $winLinesData, $betLine)
    {
        $winOfLines = [];
        for ($i = 1; $i <= 9; $i++) {
            foreach ($winLinesData as $winLineData) {
                if (($winLineData[0] + 1) != $i) {
                    $winOfLines[$i] = 0;
                } else {
                    foreach ($gameRules->winRules as $rule) {
                        if ($rule[0] == $winLineData[1]) {
                            if ($rule[1] == $winLineData[2]) {
                                $winOfLines[$i] = $betLine * $rule[2];
                            }
                        }
                    }
                    break;
                }
            }
        }

        return $winOfLines;
    }



}