<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Services\ApiService;

class ApiController extends Controller
{
    public function startGame(Request $request) {
        $token = $request->input('token');
        $userId = $request->input('userId');
        $nickname = $request->input('nickname');
        $gameId = $request->input('gameId');
        $demo = $request->input('demo');
        $token = $request->input('token');
        $platformId = $request->input('platformId');

        $responseStartGame = (new ApiService)->startGame($token, $userId, $nickname, $gameId, $demo, $platformId);

        if ($responseStartGame == false) {
            return json_encode($responseStartGame);
        }

        if ($_GET['gameId'] === '1') {
            header("Location: http://ezsl.tk/games/elGallo/");
            die();
        }

        if ($_GET['gameId'] === '2') {
            header("Location: http://ezsl.tk/games/lifeOfLuxury/");
            die();
        }

        if ($_GET['gameId'] === '3') {
            header("Location: http://ezsl.tk/games/superballKeno/");
            die();
        }

        if ($_GET['gameId'] === '4') {
            header("Location: http://ezsl.tk/games/superDoubleUp/");
            die();
        }

        return $responseStartGame;
    }

    public function getBalance(Request $request)
    {
        $token = $request->input('token');
        $userId = $request->input('userId');
        $nickname = $request->input('nickname');
        $gameId = $request->input('gameId');
        $demo = $request->input('demo');
        $token = $request->input('token');
        $platformId = $request->input('platformId');

        $responseGetBalance = (new ApiService)->getBalace($token, $userId, $gameId);

        if ($responseGetBalance == false) {
            return json_encode($responseGetBalance);
        }

        return $responseGetBalance;
    }

    public function sessionCheck(Request $request)
    {
        $token = $request->input('token');
        $userId = $request->input('userId');

        $responseSessionCheck = (new ApiService)->sessionCheck($token, $userId);

        if ($responseSessionCheck == false) {
            return json_encode($responseSessionCheck);
        }

        return $responseSessionCheck;
    }

    public function moveFunds(Request $request)
    {
        $params = [
            'token' => $request->input('token'),
            'userId' => $request->input('userId'),
            'gameId' => $request->input('gameId'),
            'eventId' => $request->input('eventId'),
            'direction' => $request->input('direction'),
            'transactionId' => $request->input('transactionId'),
            'amount' => $request->input('amount'),
            'amount' => $request->input('amount'),
            'selected' => $request->input('selected'),
            'result' => $request->input('result'),
            'featureGame' => $request->input('featureGame')
        ];

        $responseMoveFunds = (new ApiService)->moveFunds($params);

        if ($responseMoveFunds == false) {
            return json_encode($responseMoveFunds);
        }

        return $responseMoveFunds;
    }
}
