<?php
Route::auth();

Route::group(['namespace' => 'Front'], function() {
    Route::get('/', 'IndexController@getIndex');
    Route::get('/home', 'IndexController@getHome');
    Route::get('game/{gameName}', 'IndexController@getGame');
});

Route::get('/startGame', 'Api\ApiController@startGame');
Route::get('/getBalance', 'Api\ApiController@getBalance');
Route::get('/sessionCheck', 'Api\ApiController@sessionCheck');
Route::get('/moveFunds', 'Api\ApiController@moveFunds');

Route::group(['namespace' => 'Api'], function() {
    Route::get('init', 'GameController@actionInit');
    Route::get('state', 'GameController@actionState');
    Route::get('spin/{gameName}', 'GameController@actionSpin');
    Route::get('double/{gameName}', 'GameController@actionDouble');
    Route::get('choice/{gameName}', 'GameController@actionChoice');

    Route::get('increaseBalance/{banknote}', 'UserController@increaseBalance');

    Route::get('reset-session', 'GameController@resetSession');
    Route::get('reconnect', 'GameController@reconnect');

    Route::get('test/{gameName}', 'TesterController@testSlots');
    Route::post('test/{gameName}', 'TesterController@testSlots');
    Route::get('jackpot-test/{gameName}', 'TesterController@testJackpots');
    Route::post('jackpot-test/{gameName}', 'TesterController@testJackpots');
    Route::get('jackpot-probability-test/{gameName}', 'TesterController@testJackpots');
    Route::post('jackpot-probability-test/{gameName}', 'TesterController@jackpotProbabilityTest');
    Route::get('common-test/{gameName}', 'TesterController@commonTest');
    Route::get('test', 'TesterController@test');
});
