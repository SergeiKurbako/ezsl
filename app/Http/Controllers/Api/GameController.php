<?php

namespace App\Http\Controllers\Api;

use App\Services\GameServices\ElGalloSpinService;
use App\Services\GameServices\LifeOfLuxury\LifeOfLuxuryService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\GameServices\AlaskaSpinService;
use App\Services\GameServices\KeksSpinService;
use App\Services\GameServices\IgrosoftDoubleService;
use App\Services\GameServices\GonzaSpinService;
use App\Models\User;
use App\Models\SavedDataBundle;
use App\Services\ApiService;
use App\Models\Event;

class GameController extends Controller
{
    public function actionInit(Request $request)
    {
        $sessionName = rand(0, 10000000000000);

        $token = $request->input('token');
        $userId = $request->input('userId');
        $nickname = $request->input('nickname');
        $gameId = $request->input('gameId');
        $demo = $request->input('demo');
        $platformId = $request->input('platformId');

        $apiService = new ApiService();

        if ($apiService->startGame($token, $userId, $nickname, $gameId, $demo, $platformId) == '{"status": true}') {
              session(['sessionName' => $sessionName]);
              session(['token' => $token]);
              session(['nickname' => $nickname]);
              session(['gameId' => $gameId]);
              session(['demo' => $demo]);
              session(['platformId' => $platformId]);

              return session('sessionName');
        } else {
            return false;
        }
    }

    public function actionState(Request $request)
    {
        $sessionName = $request->input('sessionName');

        if (session('sessionName') == $sessionName) {
            //получаем баланс пользователя
            $apiService = new ApiService();

            $getBalance = json_decode($apiService->getBalace(session('token'), session('userId'), session('gameId')));

            $balance = false;
            if (isset($getBalance['balance'])) {
                $balance = $getBalance['balance'];
            }

            session(['gameData' => false]); // обнуляем значение data
            session(['balance' => $balance]);
            session(['allWin' => 0]);

            $answerData = [
                'state' => 'true',
                'balance' => $balance
            ];

            return json_encode($answerData);

        } else {
            $errorData = [
                'state' => 'false'
            ];

            return json_encode($errorData);
        }
    }

    public function actionSpin(Request $request, GonzaSpinService $gonzaSpinService, AlaskaSpinService $alaskaSpinService, KeksSpinService $keksSpinService, $gameName)
    {
        $sessionName = $request->input('sessionName');
        $betLine = $request->input('betLine');
        $linesInGame = $request->input('linesInGame');

        if (1 == 1) { //TODO: сделать проверку
            // получаем данные о выпавших значениях для ячеек
            $spinResultData = false;
            switch ($gameName) {
                case 'keks':
                    $spinResultData = $keksSpinService->getSpinResultData($betLine, $linesInGame, $gameName);
                    break;
                case 'alaskanFishing':
                    $spinResultData = $alaskaSpinService->getSpinResultData($betLine, $linesInGame, $gameName);
                    break;
                case 'gonzosQuest':
                    $spinResultData = $gonzaSpinService->getSpinResultData($betLine, $gameName);
                    break;
                case 'elGallo':
                    $spinResultData = (new ElGalloSpinService())->getSpinResultData($betLine, $linesInGame, $gameName);
                    break;
                case 'lifeOfLuxury':
                    $spinResultData = (new LifeOfLuxuryService())->getSpinResultData($betLine, $linesInGame, $gameName);
                    break;
            }

            // отправка события изменения баланса кошелька
            if ($spinResultData != false) {
                $event = new Event();
                $event->save();
                $direction = 'debit';
                $amount = $betLine * $linesInGame;
                $eventType = 'Lose';
                if ($spinResultData['allWin'] > 0) {
                    $direction = 'credit';
                    $amount = $spinResultData['allWin'];

                    if ($spinResultData['allWin'] > 0) {
                        $eventType = 'Win';
                    }

                    if ($spinResultData['jackpot'] > 0) {
                        $eventType = 'Jackpot';
                    }
                }

                session('freeSpinData') == false ? $freespin = false : $freespin = true;

                (new ApiService())->moveFunds(array(
                    'token' => session('token'),
                    'userId' => session('userId'),
                    'gameId' => session('gameId'),
                    'eventId' => $event->id,
                    'direction' => $direction,
                    'transactionId' => $event->id,
                    'eventType' => $eventType,
                    'amount' => $amount,
                    'extraInfo' => json_encode($spinResultData),
                    'selected' => $spinResultData['wl'],
                    'result' => json_encode($spinResultData),
                    'featureGame' => $freespin
                ));

            }

            return $spinResultData;

        } else {
            $errorData = [
                'state' => 'false'
            ];

            return json_encode($errorData);
        }

    }

    public function actionDouble(Request $request, IgrosoftDoubleService $igrosoftDoubleService, $gameName)
    {
        $sessionName = $request->input('sessionName');
        $selectedCard = $request->input('selectedCard');

        if (1 == 1) { //TODO: вписать в условие: && $sessionName != false && $sessionName != false

            // получаем данные о раскрытых картах
            $doubleResultData = false;
            switch ($gameName) {
                case 'keks':
                    $doubleResultData = $igrosoftDoubleService->getDoubleResultData($selectedCard, $gameName);
                    break;
                case 'elGallo':
                    $doubleResultData = (new ElGalloSpinService())->getDoubleResultData($selectedCard);
                    break;
            }


            // отправка события изменения баланса кошелька
            $event = new Event();
            $event->save();
            $direction = 'debit';
            $amount = $betLine * $linesInGame;
            $eventType = 'Lose';
            if ($spinResultData['allWin'] > 0) {
                $direction = 'credit';
                $amount = $spinResultData['allWin'];

                if ($spinResultData['allWin'] > 0) {
                    $eventType = 'Win';
                }
            }

            $freespin = false;

            (new ApiService())->moveFunds(array(
                'token' => session('token'),
                'userId' => session('userId'),
                'gameId' => session('gameId'),
                'eventId' => $event->id,
                'direction' => $direction,
                'transactionId' => $event->id,
                'eventType' => $eventType,
                'amount' => $amount,
                'extraInfo' => json_encode($spinResultData),
                'selected' => $spinResultData['wl'],
                'result' => json_encode($spinResultData),
                'featureGame' => $freespin
            ));

            return $doubleResultData;
        } else {
            $errorData = [
                'state' => 'false'
            ];

            return json_encode($errorData);
        }
    }

    public function actionChoice(Request $request, $gameName)
    {
        $choiceResultData = false;
        switch ($gameName) {
            case 'elGallo':
                $choiceResultData = (new ElGalloSpinService())->getChoiceResultData($request->input('choice'));
                break;
        }

        return json_encode($choiceResultData);
    }

    public function resetSession()
    {
        session()->flush();

        return 'reset session';
    }

    public function reconnect()
    {
        session(['reconnect' => true]);
    }






}
