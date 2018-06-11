//переменные получаемые из api
var gamename = 'lifeOfLuxury'; //название игры
var result;
var state;
var sid;
var user;
var min;
var id;
var balance = 1000;
var extralife = 45;
var jackpots;
var betline = 10;
var lines = 15;
var bet = 150;
var info;
var wl;
var dcard;
var dwin;
var dcard2;
var select;
var allWinOld = 0;
var winOldTrigerFreeSpin = 0;
var afterFreespinStatus = false;
var infoOld = [];
var wcvWinValuesArrayOld;
var topAnim = false;
//звуки и полноэкранный режим
var fullStatus = false;
var soundStatus = true;
var waterfallCoin = false;
var firstStartGame = true;
/* init-запрос */

resetSession();