<?php

namespace App\Services;

use Ixudra\Curl\Facades\Curl;

class ApiService
{
    private $url = 'http://davidslot.pantera.co.ua/';

    public function startGame($token, $userId, $nickname, $gameId, $demo, $platformId)
    {
        if ($token == false || $userId == false || $nickname == false || $demo == false || $platformId == false) {
            $responseStartGame = '{"status": false}';
        }
        $responseStartGame = '{"status": true}';

        return $responseStartGame;
    }

    public function getBalace($token, $userId, $gameId)
    {
        $responseGetBalance = Curl::to("{$this->url}getBalance")
            ->withData( array(
                'token' => $token,
                'userId' => $userId,
                'gameId' => $gameId,
            ) )
            ->post();

        return $responseGetBalance;
    }

    public function sessionCheck($token, $userId)
    {
        $responseSessionCheck = Curl::to("{$this->url}sessionCheck")
            ->withData( array(
                'token' => $token,
                'userId' => $userId
            ) )
            ->post();

        return $responseSessionCheck;
    }

    public function moveFunds($params)
    {
        $responseMoveFunds = Curl::to("{$this->url}moveFunds")
            ->withData( array(
                'token' => $params['token'],
                'userId' => $params['userId'],
                'gameId' => $params['gameId'],
                'eventId' => $params['eventId'],
                'direction' => $params['direction'],
                'transactionId' => $params['transactionId'],
                'eventType' => $params['eventType'],
                'amount' => $params['amount'],
                'extraInfo' => $params['extraInfo'],
                'selected' => $params['selected'],
                'result' => $params['result'],
                'featureGame' => $params['featureGame']
            ) )
            ->post();

        return $responseMoveFunds;
    }
}
