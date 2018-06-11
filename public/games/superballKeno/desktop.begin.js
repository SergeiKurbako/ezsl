//переменные получаемые из api
// var gamename = 'superballKeno'; //название игры
var gamename = 'elGallo'; //название игры
var result;
var state;
var sid;
var user;
var min;
var id;
var balance = 1000;
var betline = 1;
var betValue = 1;
var lines = 25;
var bet = 9;
var info;
info = [0,3,5,6,7,9,5,5,6,7,10,11,4,2,5];	
var wl;
var preloaderStatus = false;
var firstRequest = false;
var allWinOld = 0;
//звуки и полноэкранный режим
var fullStatus = false;
var soundStatus = true;

// Сброс сессии 
resetSession();
/* init-запрос */
// requestInit();