//переменные получаемые из api
var gamename = 'elGallo'; //название игры
var result;
var state;
var sid;
var user;
var min;
var id;
var balance = 1000;
var realBalance = 1000;
var extralife = 45;
var jackpots;
var betline = 1;
var lines = 25;
var bet = 9;
var info;
info = [0,3,5,6,7,9,5,5,6,7,10,11,4,2,5];	
var wl;
var dcard;
var dwin;
var dcard2;
var select;
var infoCard = [];
var freespinStatus = false;
var freeSpinCount = 0;
var repaetFreespin = false;
var allWinOld = 0;
var allWinBeforeFreespin = 0;
var realSpinStatus = false;
var firstStartGame = true;
var curGame = 0;
infoCard[0] = 'figure_b';
infoCard[1] = 'figure_c';
infoCard[2] = 'figure_b';
infoCard[3] = 'figure_p';
infoCard[4] = 'figure_k';
//звуки и полноэкранный режим
var fullStatus = false;
var soundStatus = true;
var waterfallCoin = false;
var jackpots = ['10','50','250','500'];

// Сброс сессии 
resetSession();
/* init-запрос */
// requestInit();