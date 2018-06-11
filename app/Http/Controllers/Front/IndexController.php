<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Game;
use URL;
use Jenssegers\Agent\Agent;

class IndexController extends Controller
{
    function getIndex()
    {
        return view('ezsl');
    }

    public function getHome()
    {
        $games = Game::all();
        $preURL = url()->current();

        return view('index',['games' => $games, 'preURL' => $preURL]);
    }

    function getGame(Agent $agent, $gameName)
    {
        $game = Game::where('gameName','=',$gameName);

        if ($agent->isMobile() || $agent->isTablet()) {
            return view('mobile-game',['game' => $game, 'gameName' => $gameName]);
        }
        return view('game',['game' => $game, 'gameName' => $gameName]);
    }
}
