//game - гланый объект игры, в который все добавляется
var gameNumber = 3;
//функция для рандома
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
$( "body" ).mousedown(function() {
	console.log('down');
});
$( "body" ).mouseup(function() {
	console.log('up');
});
// lineArray = [1,2,3,4, ...] - перечисляются линии которые нужно скрыть (1-9 - обычные линии, 11-19 прерывисные)
var credit, creditDol, betScore, betDol, winScore, winDol, creditPerLine, countLines, jackpotsText, jackpotsValue, justText, freespinText, miltiText;
var moneySound;
var btnSound ;
var btnHelpSound ;
var fihishSpinBarSound ;
var winSlot ;
var coins ;
var cock_slot ;
var cock_win ;
var jackpotSound ;
var drumrollSound ; 
var сhicken_song ; 
var doubleLose;
var doubleWin;

var winArr = [[
[0,0,2.00], 
[0,0,0.5,4.0],
[0,0,0.25,1.00,9.00],
[0,0,0,0.5,4.00,20.00],
[0,0,0,0.25,1.75,5.00,37.5],
[0,0,0,0.25,0.75,2.0,6.25,50],
[0,0,0,0,0.5,2.0,5.50,20,125],
[0,0,0,0,0.25,1.25,2.5,12.50,50,250],
[0,0,0,0,0.25,0.75,1.5,2.75,12.50,125,250]
],[
[0,0,2.00*2], 
[0,0,0.5*2,4.0*2],
[0,0,0.25*2,1.00*2,9.00*2],
[0,0,0,0.5*2,4.00*2,20.00*2],
[0,0,0,0.25*2,1.75*2,5.00*2,37.5*2],
[0,0,0,0.25*2,0.75*2,2.0*2,6.25*2,50*2],
[0,0,0,0,0.5*2,2.0*2,5.50*2,20*2,125*2],
[0,0,0,0,0.25*2,1.25*2,2.5*2,12.50*2,50*2,250*2],
[0,0,0,0,0.25*2,0.75*2,1.5*2,2.75*2,12.50*2,125*2,250*2]
],[
[0,0,2.00*3], 
[0,0,0.5*3,4.0*3],
[0,0,0.25*3,1.00*3,9.00*3],
[0,0,0,0.5*3,4.00*3,20.00*3],
[0,0,0,0.25*3,1.75*3,5.00*3,37.5*3],
[0,0,0,0.25*3,0.75*3,2.0*3,6.25*3,50*3],
[0,0,0,0,0.5*3,2.0*3,5.50*3,20*3,125*3],
[0,0,0,0,0.25*3,1.25*3,2.5*3,12.50*3,50*3,250*3],
[0,0,0,0,0.25*3,0.75*3,1.5*3,2.75*3,12.50*3,125*3,250*3]
],[
[0,0,2.00*4], 
[0,0,0.5*4,4.0*4],
[0,0,0.25*4,1.00*4,9.00*4],
[0,0,0,0.5*4,4.00*4,20.00*4],
[0,0,0,0.25*4,1.75*4,5.00*4,37.5*4],
[0,0,0,0.25*4,0.75*4,2.0*4,6.25*4,50*4],
[0,0,0,0,0.5*4,2.0*4,5.50*4,20*4,'JACKPOT'],
[0,0,0,0,0.25*4,1.25*4,2.5*4,12.50*4,50*4,'JACKPOT'],
[0,0,0,0,0.25*4,0.75*4,1.5*4,2.75*4,12.50*4,'JACKPOT','JACKPOT']
],[
[0,0,2.00*5], 
[0,0,0.5*5,4.0*5],
[0,0,0.25*5,1.00*5,9.00*5],
[0,0,0,0.5*5,4.00*5,20.00*5],
[0,0,0,0.25*5,1.75*5,5.00*5,37.5*5],
[0,0,0,0.25*5,0.75*5,2.0*5,6.25*5,50*5],
[0,0,0,0,0.5*5,2.0*5,5.50*5,20*5,'JACKPOT'],
[0,0,0,0,0.25*5,1.25*5,2.5*5,12.50*5,50*5,'JACKPOT'],
[0,0,0,0,0.25*5,0.75*5,1.5*5,2.75*5,12.50*5,'JACKPOT','JACKPOT']
]
,[
[0,0,2.00*6], 
[0,0,0.5*6,4.0*6],
[0,0,0.25*6,1.00*6,9.00*6],
[0,0,0,0.5*6,4.00*6,20.00*6],
[0,0,0,0.25*6,1.75*6,5.00*6,37.5*6],
[0,0,0,0.25*6,0.75*6,2.0*6,6.25*6,50*6],
[0,0,0,0,0.5*6,2.0*6,5.50*6,20*6,'JACKPOT'],
[0,0,0,0,0.25*6,1.25*6,2.5*6,12.50*6,50*6,'JACKPOT'],
[0,0,0,0,0.25*6,0.75*6,1.5*6,2.75*6,12.50*6,'JACKPOT','JACKPOT']
],[
[0,0,2.00*7], 
[0,0,0.5*7,4.0*7],
[0,0,0.25*7,1.00*7,9.00*7],
[0,0,0,0.5*7,4.00*7,20.00*7],
[0,0,0,0.25*7,1.75*7,5.00*7,37.5*7],
[0,0,0,0.25*7,0.75*7,2.0*7,6.25*7,50*7],
[0,0,0,0,0.5*7,2.0*7,5.50*7,20*7,'JACKPOT'],
[0,0,0,0,0.25*7,1.25*7,2.5*7,12.50*7,50*7,'JACKPOT'],
[0,0,0,0,0.25*7,0.75*7,1.5*7,2.75*7,12.50*7,'JACKPOT','JACKPOT']
],[
[0,0,2.00*8], 
[0,0,0.5*8,4.0*8],
[0,0,0.25*8,1.00*8,9.00*8],
[0,0,0,0.5*8,4.00*8,20.00*8],
[0,0,0,0.25*8,1.75*8,5.00*8,37.5*8],
[0,0,0,0.25*8,0.75*8,2.0*8,6.25*8,50*8],
[0,0,0,0,0.5*8,2.0*8,5.50*8,20*8,'JACKPOT'],
[0,0,0,0,0.25*8,1.25*8,2.5*8,12.50*8,50*8,'JACKPOT'],
[0,0,0,0,0.25*8,0.75*8,1.5*8,2.75*8,12.50*8,'JACKPOT','JACKPOT']
],[
[0,0,2.00*9], 
[0,0,0.5*9,4.0*9],
[0,0,0.25*9,1.00*9,9.00*9],
[0,0,0,0.5*9,4.00*9,20.00*9],
[0,0,0,0.25*9,1.75*9,5.00*9,37.5*9],
[0,0,0,0.25*9,0.75*9,2.0*9,6.25*9,50*9],
[0,0,0,0,0.5*9,2.0*9,5.50*9,20*9,'JACKPOT'],
[0,0,0,0,0.25*9,1.25*9,2.5*9,12.50*9,50*9,'JACKPOT'],
[0,0,0,0,0.25*9,0.75*9,1.5*9,2.75*9,12.50*9,'JACKPOT','JACKPOT']
],[
[0,0,2.00*10], 
[0,0,0.5*10,4.0*10],
[0,0,0.25*10,1.00*10,9.00*10],
[0,0,0,0.5*10,4.00*10,20.00*10],
[0,0,0,0.25*10,1.75*10,5.00*10,37.5*10],
[0,0,0,0.25*10,0.75*10,2.0*10,6.25*10,50*10],
[0,0,0,0,0.5*10,2.0*10,5.50*10,20*10,'JACKPOT'],
[0,0,0,0,0.25*10,1.25*10,2.5*10,12.50*10,50*10,'JACKPOT'],
[0,0,0,0,0.25*10,0.75*10,1.5*10,2.75*10,12.50*10,'JACKPOT','JACKPOT']
],[
[0,0,2.00*11], 
[0,0,0.5*11,4.0*11],
[0,0,0.25*11,1.00*11,9.00*11],
[0,0,0,0.5*11,4.00*11,20.00*11],
[0,0,0,0.25*11,1.75*11,5.00*11,37.5*11],
[0,0,0,0.25*11,0.75*11,2.0*11,6.25*11,50*11],
[0,0,0,0,0.5*11,2.0*11,5.50*11,20*11,'JACKPOT'],
[0,0,0,0,0.25*11,1.25*11,2.5*11,12.50*11,50*11,'JACKPOT'],
[0,0,0,0,0.25*11,0.75*11,1.5*11,2.75*11,12.50*11,'JACKPOT','JACKPOT']
],[
[0,0,2.00*12], 
[0,0,0.5*12,4.0*12],
[0,0,0.25*12,1.00*12,9.00*12],
[0,0,0,0.5*12,4.00*12,20.00*12],
[0,0,0,0.25*12,1.75*12,5.00*12,37.5*12],
[0,0,0,0.25*12,0.75*12,2.0*12,6.25*12,50*12],
[0,0,0,0,0.5*12,2.0*12,5.50*12,20*12,'JACKPOT'],
[0,0,0,0,0.25*12,1.25*12,2.5*12,12.50*12,50*12,'JACKPOT'],
[0,0,0,0,0.25*12,0.75*12,1.5*12,2.75*12,12.50*12,'JACKPOT','JACKPOT']
],[
[0,0,2.00*13], 
[0,0,0.5*13,4.0*13],
[0,0,0.25*13,1.00*13,9.00*13],
[0,0,0,0.5*13,4.00*13,20.00*13],
[0,0,0,0.25*13,1.75*13,5.00*13,37.5*13],
[0,0,0,0.25*13,0.75*13,2.0*13,6.25*13,50*13],
[0,0,0,0,0.5*13,2.0*13,5.50*13,20*13,'JACKPOT'],
[0,0,0,0,0.25*13,1.25*13,2.5*13,12.50*13,50*13,'JACKPOT'],
[0,0,0,0,0.25*13,0.75*13,1.5*13,2.75*13,12.50*13,'JACKPOT','JACKPOT']
],[
[0,0,2.00*14], 
[0,0,0.5*14,4.0*14],
[0,0,0.25*14,1.00*14,9.00*14],
[0,0,0,0.5*14,4.00*14,20.00*14],
[0,0,0,0.25*14,1.75*14,5.00*14,37.5*14],
[0,0,0,0.25*14,0.75*14,2.0*14,6.25*14,50*14],
[0,0,0,0,0.5*14,2.0*14,5.50*14,20*14,'JACKPOT'],
[0,0,0,0,0.25*14,1.25*14,2.5*14,12.50*14,50*14,'JACKPOT'],
[0,0,0,0,0.25*14,0.75*14,1.5*14,2.75*14,12.50*14,'JACKPOT','JACKPOT']
],[
[0,0,2.00*15], 
[0,0,0.5*15,4.0*15],
[0,0,0.25*15,1.00*15,9.00*15],
[0,0,0,0.5*15,4.00*15,20.00*15],
[0,0,0,0.25*15,1.75*15,5.00*15,37.5*15],
[0,0,0,0.25*15,0.75*15,2.0*15,6.25*15,50*15],
[0,0,0,0,0.5*15,2.0*15,5.50*15,20*15,'JACKPOT'],
[0,0,0,0,0.25*15,1.25*15,2.5*15,12.50*15,50*15,'JACKPOT'],
[0,0,0,0,0.25*15,0.75*15,1.5*15,2.75*15,12.50*15,'JACKPOT','JACKPOT']
],[
[0,0,2.00*16], 
[0,0,0.5*16,4.0*16],
[0,0,0.25*16,1.00*16,9.00*16],
[0,0,0,0.5*16,4.00*16,20.00*16],
[0,0,0,0.25*16,1.75*16,5.00*16,37.5*16],
[0,0,0,0.25*16,0.75*16,2.0*16,6.25*16,50*16],
[0,0,0,0,0.5*16,2.0*16,5.50*16,20*16,'JACKPOT'],
[0,0,0,0,0.25*16,1.25*16,2.5*16,12.50*16,50*16,'JACKPOT'],
[0,0,0,0,0.25*16,0.75*16,1.5*16,2.75*16,12.50*16,'JACKPOT','JACKPOT']
],[
[0,0,2.00*17], 
[0,0,0.5*17,4.0*17],
[0,0,0.25*17,1.00*17,9.00*17],
[0,0,0,0.5*17,4.00*17,20.00*17],
[0,0,0,0.25*17,1.75*17,5.00*17,37.5*17],
[0,0,0,0.25*17,0.75*17,2.0*17,6.25*17,50*17],
[0,0,0,0,0.5*17,2.0*17,5.50*17,20*17,'JACKPOT'],
[0,0,0,0,0.25*17,1.25*17,2.5*17,12.50*17,50*17,'JACKPOT'],
[0,0,0,0,0.25*17,0.75*17,1.5*17,2.75*17,12.50*17,'JACKPOT','JACKPOT']
],[
[0,0,2.00*18], 
[0,0,0.5*18,4.0*18],
[0,0,0.25*18,1.00*18,9.00*18],
[0,0,0,0.5*18,4.00*18,20.00*18],
[0,0,0,0.25*18,1.75*18,5.00*18,37.5*18],
[0,0,0,0.25*18,0.75*18,2.0*18,6.25*18,50*18],
[0,0,0,0,0.5*18,2.0*18,5.50*18,20*18,'JACKPOT'],
[0,0,0,0,0.25*18,1.25*18,2.5*18,12.50*18,50*18,'JACKPOT'],
[0,0,0,0,0.25*18,0.75*18,1.5*18,2.75*18,12.50*18,'JACKPOT','JACKPOT']
],[
[0,0,2.00*19], 
[0,0,0.5*19,4.0*19],
[0,0,0.25*19,1.00*19,9.00*19],
[0,0,0,0.5*19,4.00*19,20.00*19],
[0,0,0,0.25*19,1.75*19,5.00*19,37.5*19],
[0,0,0,0.25*19,0.75*19,2.0*19,6.25*19,50*19],
[0,0,0,0,0.5*19,2.0*19,5.50*19,20*19,'JACKPOT'],
[0,0,0,0,0.25*19,1.25*19,2.5*19,12.50*19,50*19,'JACKPOT'],
[0,0,0,0,0.25*19,0.75*19,1.5*19,2.75*19,12.50*19,'JACKPOT','JACKPOT']
],[
[0,0,2.00*20], 
[0,0,0.5*20,4.0*20],
[0,0,0.25*20,1.00*20,9.00*20],
[0,0,0,0.5*20,4.00*20,20.00*20],
[0,0,0,0.25*20,1.75*20,5.00*20,37.5*20],
[0,0,0,0.25*20,0.75*20,2.0*20,6.25*20,50*20],
[0,0,0,0,0.5*20,2.0*20,5.50*20,20*20,'JACKPOT'],
[0,0,0,0,0.25*20,1.25*20,2.5*20,12.50*20,50*20,'JACKPOT'],
[0,0,0,0,0.25*20,0.75*20,1.5*20,2.75*20,12.50*20,'JACKPOT','JACKPOT']
]
]


function addScore(game, scorePosions, balance) {
	credit = game.add.text(scorePosions[0][0], scorePosions[0][1], balance, {
		font: scorePosions[0][2]+'px "Arial"',
		fill: '#ffffff',
		stroke: '#000000',
		strokeThickness: 0,
	});
	credit.anchor.setTo(0.5, 0.5);
	creditDol = game.add.text(scorePosions[1][0], scorePosions[1][1], '$'+ (balance/100).toFixed(2), {
		font: scorePosions[1][2]+'px "Arial"',
		fill: '#adad3f',
		stroke: '#000000',
		strokeThickness: 0,
	});
	creditDol.anchor.setTo(0.5, 0.5);
	betScore = game.add.text(scorePosions[2][0], scorePosions[2][1], lines*betline, {
		font: scorePosions[2][2]+'px "Arial"',
		fill: '#ffffff',
		stroke: '#000000',
		strokeThickness: 0,
	});
	betScore.anchor.setTo(0.5, 0.5);
	betDol = game.add.text(scorePosions[3][0], scorePosions[3][1], '$'+ (lines*betline/100).toFixed(2), {
		font: scorePosions[3][2]+'px "Arial"',
		fill: '#adad3f',
		stroke: '#000000',
		strokeThickness: 0,
	});
	betDol.anchor.setTo(0.5, 0.5);
	winScore = game.add.text(scorePosions[4][0], scorePosions[4][1], allWinOld, {
		font: scorePosions[4][2]+'px "Arial"',
		fill: '#ffffff',
		stroke: '#000000',
		strokeThickness: 0,
	});
	winScore.anchor.setTo(0.5, 0.5);
	winDol = game.add.text(scorePosions[5][0], scorePosions[5][1], '$'+ (allWinOld/100).toFixed(2), {
		font: scorePosions[5][2]+'px "Arial"',
		fill: '#adad3f',
		stroke: '#000000',
		strokeThickness: 0,
	});
	winDol.anchor.setTo(0.5, 0.5);
	creditPerLine = game.add.text(scorePosions[6][0], scorePosions[6][1], betline+' Credit Bet Per Line', {
		font: scorePosions[6][2]+'px "Arial"',
		fill: '#e6d8d8',
		stroke: '#000000',
		strokeThickness: 0,
	});
	creditPerLine.anchor.setTo(0.5, 0.5);
	countLines = game.add.text(scorePosions[7][0], scorePosions[7][1], lines+' Lines', {
		font: scorePosions[7][2]+'px "Arial"',
		fill: '#e6d8d8',
		stroke: '#000000',
		strokeThickness: 0,
	});
	countLines.anchor.setTo(0.5, 0.5);
	jackpotsText = game.add.text(698, 50, 'MAXI', {
		font:'25px "Arial"',
		fill: '#dddd48',
		stroke: '#000000',
		strokeThickness: 0,
	});
	jackpotsText.anchor.setTo(0.5, 0.5);
	jackpotsValue = game.add.text(698, 77, '$500.00', {
		font: '29px "Arial"',
		fill: '#dddd48',
		stroke: '#000000',
		strokeThickness: 0,
	});
	jackpotsValue.anchor.setTo(0.5, 0.5);
	justText = game.add.text(431, 111, 'Good Luck', {
		font: '28px "Arial"',
		fill: '#b4b3b4',
		stroke: '#000000',
		strokeThickness: 0,
	});
	justText.anchor.setTo(0.5, 0.5);
	justText.visible = false;
	freespinText = game.add.text(512, 710, 'FREE SPIN 1 OF 25', {
		font: '84px "Arial"',
		fontWeight : '600',
		fill: '#ffe9bd',
		stroke: '#000000',
		strokeThickness: 0,
	});
	freespinText.anchor.setTo(0.5, 0.5);
	freespinText.visible = false;
	miltiText = game.add.text(512, 761, 'ALL WINS MULTIPLIED BY 3', {
		font: '31px "Arial"',
		fontWeight : '600',
		fill: '#ffffff',
		stroke: '#000000',
		strokeThickness: 0,
	});
	miltiText.anchor.setTo(0.5, 0.5);
	miltiText.visible = false;
	moneySound = game.add.audio('money');
	btnSound = game.add.audio('btn');
	btnHelpSound = game.add.audio('btn_help');
	fihishSpinBarSound = game.add.audio('fihish_spin_bar');
	winSlot = game.add.audio('winSlot');
	coins = game.add.audio('coins');
	cock_slot = game.add.audio('cock_slot');
	cock_win = game.add.audio('cock_win');
	jackpotSound = game.add.audio('jackpotSound');
	drumrollSound = game.add.audio('drumroll'); 
	doubleLose = game.add.audio('double_lose'); 
	doubleWin = game.add.audio('double_win');     
	
}

function getNeedUrlPath() {
	if (location.href.indexOf('/games/') !== -1 && location.href.indexOf('public') !== -1) {
		var number = location.pathname.indexOf('/games/');
		var needLocation = location.href.substring(0,location.href.indexOf('://')) + '://' + location.hostname + location.pathname.substring(0,number) + '/';

		return needLocation;
	} else if (location.href.indexOf('public') !== -1 && location.href.indexOf('/game/') !== -1) {
		var number = location.pathname.indexOf('/public/');
		var needLocation = location.href.substring(0,location.href.indexOf('public')) + 'public';

		return needLocation;
	} else if (location.href.indexOf('public') === -1) {
		needLocation = location.href.substring(0,location.href.indexOf('://')) + '://' + location.hostname;

		return needLocation;
	}
}

function requestInit() {
	$.ajax({
		type: "get",
		url: getNeedUrlPath() +'/init',
		dataType: 'html',
		success: function (data) {
			console.log(data)
			dataString = data;
			if(dataString) {
				sessionName = data;
				requestState();
			} else {
				alert('Ошибка 11');
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			var errorText = 'ошибка 10';
			console.log(errorText);
			setTimeout("requestInit();", 200);
		}
	});
}
function resetSession(){
	$.ajax({
		type: "get",
		url: getNeedUrlPath() +'/reset-session',
		dataType: 'html',
		success: function (data) {
			console.log(data)
			requestInit();
		},
		error: function (xhr, ajaxOptions, thrownError) {
			var errorText = 'ошибка 60';
			console.log(errorText);
			setTimeout("resetSession();", 200);
		}
	});
}

//state-запрос

function requestState() {
	$.ajax({
		type: "get",
		url: getNeedUrlPath()+'/state?sessionName='+sessionName,
		dataType: 'html',
		success: function (data) {
			dataArray = JSON.parse(data);
			console.log(data)
			game1();
			if(dataArray['state']) {
				firstRequest = true;
				if(preloaderStatus){
					document.getElementById('preloader').style.display = 'none';
					game.state.start('game1');
				}
				balance = dataArray['balance'];
			} else {
				alert('Ошбика 21');
			}
		},
		error: function (xhr, ajaxOptions, thrownError) {
			var errorText = 'ошибка 20';
			alert(errorText);
			setTimeout("requestState();", 200);
		}
	});
}
var copyInfo =[];
function lastMove1(index){
	yPos = 665-(Math.floor((index+1)/2)-1)*64  
	lastTimer = yPos+70;    
	if( index%2 ){
		game.add.tween(game1.balls[index]).to({y:yPos}, lastTimer*0.5, Phaser.Easing.LINEAR, true).onComplete.add(function(){
			if (arrBetBtn.indexOf(info[index-1]) != -1){
				bwinSound.play();
				redBtnVis(info[index-1]);
				game1.green_btns_numbers[info[index-1]].visible = false;
				game1.yellow_btns_numbers[info[index-1]].visible = false;
				game1.red_btns_numbers[info[index-1]].visible = true;
			} else {
				green_btns[info[index-1]].loadTexture('purple_btn');
			}
			ballsSound[Math.floor((index+1)/2)].play();
			game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.8}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
				game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
					game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.95}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
						game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
							if (index === 10){
								raiseKeepBet();
							}
						});
					});
				});
			});
		});
	} else {
		game.add.tween(game1.balls[index]).to({y:yPos}, lastTimer*0.5, Phaser.Easing.LINEAR, true).onComplete.add(function(){
			if (arrBetBtn.indexOf(info[index-1]) != -1){
				bwinSound.play();
				redBtnVis(info[index-1]);
				game1.green_btns_numbers[info[index-1]].visible = false;
				game1.yellow_btns_numbers[info[index-1]].visible = false;
				game1.red_btns_numbers[info[index-1]].visible = true;
			} else {
				green_btns[info[index-1]].loadTexture('purple_btn');
			}
			ballsSound[Math.floor((index+1)/2)].play();
			game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.8}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
				game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
					game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.95}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
						game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
							if (index === 10){
								raiseKeepBet();
							}
						});
					});
				});
			});
		});
	}
}   
function lastMove2(index){
	if (index === 20){
		yPos = 665-(Math.floor((index+1)/2)-1)*64  
		lastTimer = yPos+70;
		game.add.tween(game1.balls[index]).to({x:660,y:72}, 20, Phaser.Easing.LINEAR, true).onComplete.add(function(){
			game.add.tween(game1.balls[index]).to({x:660,y:89}, 20, Phaser.Easing.LINEAR, true).onComplete.add(function(){    
				ballsSound[Math.floor((index+1)/2)].play();             
				red_square_anim.alpha = 1;
				checkWin();
			})  
		})  
	} else {  
		yPos = 665-(Math.floor((index+1)/2)-1)*64  
		lastTimer = yPos-50;  
		if( index%2 ){
			game.add.tween(game1.balls[index]).to({y:yPos}, lastTimer*0.5, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				if (arrBetBtn.indexOf(info[index-1]) != -1){
					bwinSound.play();
					redBtnVis(info[index-1]);
					game1.green_btns_numbers[info[index-1]].visible = false;
					game1.yellow_btns_numbers[info[index-1]].visible = false;
					game1.red_btns_numbers[info[index-1]].visible = true;
				} else {
					green_btns[info[index-1]].loadTexture('purple_btn');
				}
				ballsSound[Math.floor((index+1)/2)].play();
				if(index < 17){
					game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.8}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*1.0, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
						game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*1.0, Phaser.Easing.Circular.In, true).onComplete.add(function(){
							game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.9}, (665-(Math.floor((index+1)/2)-1)*64)*0.15*1.0, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
								game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.15*1.0, Phaser.Easing.Circular.In, true).onComplete.add(function(){
								});
							});
						});
					});					
				} else {
					game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.8}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*2.0, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
						game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*2.0, Phaser.Easing.Circular.In, true).onComplete.add(function(){
							game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.9}, (665-(Math.floor((index+1)/2)-1)*64)*0.15*2.0, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
								game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.15*2.0, Phaser.Easing.Circular.In, true).onComplete.add(function(){
								});
							});
						});
					});		
				}
			});
		} else {
			game.add.tween(game1.balls[index]).to({y:yPos}, lastTimer*0.5, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				if (arrBetBtn.indexOf(info[index-1]) != -1){
					bwinSound.play();
					redBtnVis(info[index-1]);
					game1.green_btns_numbers[info[index-1]].visible = false;
					game1.yellow_btns_numbers[info[index-1]].visible = false;
					game1.red_btns_numbers[info[index-1]].visible = true;
				} else {
					green_btns[info[index-1]].loadTexture('purple_btn');
				}
				ballsSound[Math.floor((index+1)/2)].play();
				if(index < 17){
					game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.8}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*1.0, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
						game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*1.0, Phaser.Easing.Circular.In, true).onComplete.add(function(){
							game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.9}, (665-(Math.floor((index+1)/2)-1)*64)*0.15*1.0, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
								game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.15*1.0, Phaser.Easing.Circular.In, true).onComplete.add(function(){
								});
							});
						});
					});
				} else {
					game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.8}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*2.0, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
						game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*2.0, Phaser.Easing.Circular.In, true).onComplete.add(function(){
							game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.9}, (665-(Math.floor((index+1)/2)-1)*64)*0.15*2.0, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
								game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.15*2.0, Phaser.Easing.Circular.In, true).onComplete.add(function(){
								});
							});
						});
					});
				}
			});
		}
	}
}   
function raiseKeepBet(){
	goodLuck.visible = false;
	choose_double.visible = true;
	choose_double.visible = true;
	keep_bet.visible = true;
	raise_bet.visible = true;
	setTimeout(function() {
		half_sound.play();
	}, 300);
	left_btn_anim.alpha = 1;
	right_btn_anim.alpha = 1;
}
function raiseKeepPress(){
	goodLuck.visible = true;
	choose_double.visible = false;
	choose_double.visible = false;
	keep_bet.visible = false;
	raise_bet.visible = false;
	left_btn_anim.alpha = 0;
	right_btn_anim.alpha = 0;
	game1.balls.forEach(function (item, index) {
		setTimeout(function() {
			if (index > 10 & index < 20){
				lastMove2(index)
			} else if(index == 20){
				lastBallAnim(index);
			}
		}, (index-11)*200);
	})
}
function lastBallAnim(index){
	btnPosX = green_btns[info[index-1]].position.x;
	btnPosY = green_btns[info[index-1]].position.y;
	game1.balls[index].position.x = btnPosX;	
	lastTimer = btnPosY+70;
	game.add.tween(game1.balls[index]).to({y:btnPosY}, lastTimer*0.5, Phaser.Easing.LINEAR, true).onComplete.add(function(){
		lastBallGet(index);
		if (arrBetBtn.indexOf(info[index-1]) != -1){
			lastBallHit(index);
		} else {
			lastBallJump(index);
		}
	});
}
function lastBallJump(index){
	btnPosX = green_btns[info[index-1]].position.x;
	btnPosY = green_btns[info[index-1]].position.y;
	yDistance = (btnPosY-27);
	newYpos =  yDistance*1.3
	pointsFinish.x.push(btnPosX)
	pointsFinish.y.push(btnPosY)
	if (info[index-1] <= 40) {
		if (info[index-1] === 9 || info[index-1] === 10 || info[index-1] === 19 || info[index-1] === 20 || info[index-1] === 29 || info[index-1] === 30 || info[index-1] === 39 || info[index-1] === 40){
			dist2 = Math.pow(Math.pow(644-btnPosX, 2) + Math.pow(newYpos, 2), 0.5)*0.55;
			pointsFinish.x.push(644)
			pointsFinish.y.push(btnPosY-newYpos)
			dist3 = Math.pow(Math.pow(662-644, 2) + Math.pow(92-btnPosY+newYpos, 2), 0.5);
			pointsFinish.x.push(662)
			pointsFinish.y.push(92)
			statusFinishRow = 3;
		} else {
			dist2 = Math.pow(Math.pow(((552-btnPosX)*0.66), 2) + Math.pow(newYpos, 2), 0.5)*0.55;
			pointsFinish.x.push(((552-btnPosX)*0.66)+btnPosX)
			pointsFinish.y.push(btnPosY-newYpos)
			dist3 = Math.pow(Math.pow(552-(((552-btnPosX)*0.66)+btnPosX), 2) + Math.pow(42-btnPosY+newYpos, 2), 0.5);
			pointsFinish.x.push(552)
			pointsFinish.y.push(42)
			dist4 = Math.pow(Math.pow(607-552, 2) + Math.pow(20-42, 2), 0.5);
			pointsFinish.x.push(607)
			pointsFinish.y.push(20)
			dist5 = Math.pow(Math.pow(662-607, 2) + Math.pow(92-5, 2), 0.5);
			pointsFinish.x.push(662)
			pointsFinish.y.push(92)
			statusFinishRow = 5;
		}
	} else {
		dist2 = Math.pow(Math.pow(((662-btnPosX)*0.66), 2) + Math.pow(newYpos, 2), 0.5)*0.35;
		pointsFinish.x.push(((662-btnPosX)*0.66)+btnPosX)
		pointsFinish.y.push(btnPosY-newYpos)
		dist3 = Math.pow(Math.pow(662-(((662-btnPosX)*0.66)+btnPosX), 2) + Math.pow(92-btnPosY+newYpos, 2), 0.5);
		pointsFinish.x.push(662)
		pointsFinish.y.push(92)
		statusFinishRow = 3;
	}
	lastBallGetStatus = true;
	game1.timer[20] = game.time.create(true);
	game1.timer[20].loop(.01, game1.plot20, game1);
	game1.timer[20].start();
}
function checkWin(){
	if (winValue === 'win'){
		winStatus = true;
		goodLuck.visible = false;;
		superball_hit.visible = false;
		winValueText.setText(allWin.toFixed(2));
		winValueText.visible = true;
		big_red_border.alpha = 1;
		if (superballHitStatus){
			red_square_anim.alpha = 0;
			red_square_anim2.alpha = 1;
			big_dol.visible = true;
			superball_winner.alpha = 1;
		} else {
			win_center.visible = true;
		}
		bwinSound.play();
		flickWinText();
		setTimeout(function(){
			spinStatus = false;
			updateBalance();
		}, 700)
	} else {
		setTimeout(function(){
			endgameSound.play();
			setTimeout(function(){
				spinStatus = false;
				goodLuck.visible = false;
				superball_hit.visible = false;
				touch_anim_start.destroy();				
				touch_anim_start = game.add.sprite(70,654, 'touch_anim');
				slotLayer1Group.add(touch_anim_start);
				touch_anim_start.animations.add('anim', [0,1,2,3,4], 15, false).play().onComplete.add(function(){
					midAnim();
				});
				showButtons();
				if ((balance + allWin) === 0){
					playGame.loadTexture('AddCredit'); 
				}
			}, 500)
		}, 500)

	}
}
function midAnim(){
	setTimeout(function(){
		if  (!sorryStatus){
			if  (!winStatus){
				if (!spinStatus) {
					touch_anim_start.visible = false;
					touch_anim_start.destroy();
					// last_ball_start.visible = true;
					touch_anim_end.visible = true;
					touch_anim_end.animations.getAnimation('anim').play();
					last_ball_start = game.add.sprite(71,651, 'last_ball_start');
					slotLayer1Group.add(last_ball_start);
					last_ball_start.animations.add('anim', [0,1,2,3,4], 15, false).play().onComplete.add(function(){
						last_ball_start.visible = false;
						touch_anim_end.visible = false;
						last_ball.alpha = 1;
						last_ball_start.destroy();
					});
					setTimeout(function(){
						if  (!sorryStatus){
							if  (!winStatus){
								if (!spinStatus) {
									last_ball.alpha = 0;
									last_ball_end.visible = true;
									// touch_anim_start.visible = true;
									last_ball_end.animations.getAnimation('anim').play();
									touch_anim_start = game.add.sprite(70,654, 'touch_anim');
									slotLayer1Group.add(touch_anim_start);
									touch_anim_start.animations.add('anim', [0,1,2,3,4], 15, false).play().onComplete.add(function(){
										last_ball_end.visible = false;
										midAnim();
									});
								}
							}
						}
					}, 5000)
				}
			}
		}
	}, 5000)
}
function hideButtons(){
	green_btns.forEach(function (item, numb) {
		green_btns[numb].inputEnabled = false;
		green_btns[numb].input.useHandCursor = false;
	})
	exit.inputEnabled = false;
	exit.input.useHandCursor = false;
	exit.loadTexture('exit_p');
	quickPick.inputEnabled = false;
	quickPick.input.useHandCursor = false;
	quickPick.loadTexture('quickPick_p');
	wipeCard.inputEnabled = false;
	wipeCard.input.useHandCursor = false;
	wipeCard.loadTexture('wipeCard_p');
	bet_bottom.inputEnabled = false;
	bet_bottom.input.useHandCursor = false;
	bet_bottom.loadTexture('bet_bottom_p');
	bet_top.inputEnabled = false;
	bet_top.input.useHandCursor = false;
	bet_top.loadTexture('bet_top_p');
	playGame.inputEnabled = false;
	playGame.input.useHandCursor = false;
	playGame.loadTexture('playGame_p');
	btnStatus = false;
	$('.menu_wrap').css({
		display: 'none'
	});
}
function showButtons(){
	green_btns.forEach(function (item, numb) {
		green_btns[numb].inputEnabled = true;
		green_btns[numb].input.useHandCursor = true;
	})
	exit.inputEnabled = true;
	exit.input.useHandCursor = true;
	exit.loadTexture('exit');
	quickPick.inputEnabled = true;
	quickPick.input.useHandCursor = true;
	quickPick.loadTexture('quickPick');
	wipeCard.inputEnabled = true;
	wipeCard.input.useHandCursor = true;
	wipeCard.loadTexture('wipeCard');
	bet_bottom.inputEnabled = true;
	bet_bottom.input.useHandCursor = true;
	bet_bottom.loadTexture('bet_bottom');
	bet_top.inputEnabled = true;
	bet_top.input.useHandCursor = true;
	bet_top.loadTexture('bet_top');
	playGame.inputEnabled = true;
	playGame.input.useHandCursor = true;
	if ((balance + allWin) === 0){
		playGame.loadTexture('AddCredit');
	} else {	
		playGame.loadTexture('playGame');
	}
	btnStatus = true;
	$('.menu_wrap').css({
		display: 'block'
	});
}
function flickWinText(){
	stopFlickText = false;
	var curArr = betValue/0.25;
	winArr[curArr-1][pickValue-2].forEach(function (item, numb) {
		if (lastball === 'yes'){
			if (item === allWin/4){
				pickArrText[winArr[curArr-1][pickValue-2].length-numb-1].fill = "#ffffff";
				pickNumArrText[winArr[curArr-1][pickValue-2].length-numb-1].fill = "#ffffff";
				tweenTintText(pickArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
				tweenTintText(pickNumArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
			}
		} else {            
			if (item === allWin){
				pickArrText[winArr[curArr-1][pickValue-2].length-numb-1].fill = "#ffffff";
				pickNumArrText[winArr[curArr-1][pickValue-2].length-numb-1].fill = "#ffffff";
				tweenTintText(pickArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
				tweenTintText(pickNumArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
			}
		}
	})
}
function tweenTintHelp(obj) {
	obj.tint = 0x6a0088;  
	setTimeout(function(){                
		obj.tint = 0x8929a3;  
		setTimeout(function(){                    
			obj.tint = 0xad61c2;  
			setTimeout(function(){                      
				obj.tint = 0xd4a8e0;  
				setTimeout(function(){                   
					obj.tint = 0xffffff;  
					setTimeout(function(){                   
						obj.tint = 0xd4a8e0;  
						setTimeout(function(){                       
							obj.tint = 0xad61c2;  
							setTimeout(function(){                        
								obj.tint = 0x8929a3;  
								setTimeout(function(){
									if (obj === jackpotText)  {
										if (picks.visible){
											jackpotText.tint = 0xfcff1d;
											return false;
										}  
									}
									tweenTintHelp(obj)     
								}, 80) 
							}, 80)                                                      
						}, 80) 
					}, 80)
				}, 80) 
			}, 80) 
		}, 80)
	}, 80)
}
function tweenTintText(obj, startColor, endColor, time) {
	obj.tint = 0x6a0088;  
	setTimeout(function(){
		if (stopFlickText){
			showPickText();
			return false;
		} else {                        
			obj.tint = 0x8929a3;  
			setTimeout(function(){
				if (stopFlickText){
					showPickText();
					return false;
				} else {                        
					obj.tint = 0xad61c2;  
					setTimeout(function(){
						if (stopFlickText){
							showPickText();
							return false;
						} else {                        
							obj.tint = 0xd4a8e0;  
							setTimeout(function(){
								if (stopFlickText){
									showPickText();
									return false;
								} else {                        
									obj.tint = 0xffffff;  
									setTimeout(function(){
										if (stopFlickText){
											showPickText();
											return false;
										} else {                        
											obj.tint = 0xd4a8e0;  
											setTimeout(function(){
												if (stopFlickText){
													showPickText();
													return false;
												} else {                        
													obj.tint = 0xad61c2;  
													setTimeout(function(){
														if (stopFlickText){
															showPickText();
															return false;
														} else {                        
															obj.tint = 0x8929a3;  
															setTimeout(function(){
																if (stopFlickText){
																	showPickText();
																	return false;
																} else {                        
																	tweenTintText(obj)
																}       
															}, 80) 
														}       
													}, 80) 
												}       
											}, 80) 
										}       
									}, 80)
								}       
							}, 80) 
						}       
					}, 80) 
				}       
			}, 80)
		}       
	}, 80)
}
function stopUpdateBalance(){
	balanceUpdateStatus = false;
	firstAroundAnim = false;
	winSound.stop();
	allWinOld = allWinOld + allwinUpd;
	wins.setText(allwinUpd.toFixed(2));
	credit.setText((balance + allwinUpd).toFixed(2));
}
function updateBalance(){
	var x = 0;
	var interval;           
	balanceUpdateStatus = true;
	showButtons();
	allwinUpd = allWin;
	winSound.play();
	(function() {
		if (x < allwinUpd) {
			interval = 100;
			x += 0.25;
			if (balanceUpdateStatus === false){
				return;
			} else{
				wins.setText(x.toFixed(2));
				credit.setText( (balance + x).toFixed(2));
				setTimeout(arguments.callee, interval);
			}
		} else {
			balanceUpdateStatus = false;
			winSound.stop();
			allWinOld = allWinOld + allwinUpd;
			wins.setText(allwinUpd.toFixed(2));
			credit.setText((balance + allwinUpd).toFixed(2));
		}
	})();
}
function lastBallGet(index){
	superballmissSound.play();
	purple_border_anim[info[index-1]].visible = true;
	purple_border_anim[info[index-1]].animations.getAnimation('anim').play().onComplete.add(function(){
		purple_border_anim[info[index-1]].visible = false;
		green_btns[info[index-1]].loadTexture('purple_btn');  
		purple_block_anim[info[index-1]].visible = true;                
	});
}
function lastBallHit(index){
	game.add.tween(game1.balls[index]).to({y:-10}, (green_btns[info[index-1]].position.y+10)*0.4, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
		game.add.tween(game1.balls[index]).to({y:green_btns[info[index-1]].position.y}, (green_btns[info[index-1]].position.y+10)*0.4, Phaser.Easing.Circular.In, true).onComplete.add(function(){
			red_border_anim[info[index-1]].visible = true;
			red_border_anim[info[index-1]].animations.getAnimation('anim').play().onComplete.add(function(){
				red_border_anim[info[index-1]].visible = false;
				redBtnVis(info[index-1]);
				purple_block_anim[info[index-1]].visible = true;
			});
			game1.green_btns_numbers[info[index-1]].visible = false;
			game1.yellow_btns_numbers[info[index-1]].visible = false;
			game1.red_btns_numbers[info[index-1]].visible = true;
			goodLuck.visible = false;
			superball_hit.visible = true;
			superballHitStatus = true;
			if (winValue === 'win'){
				superballwinSound.play();
			} else {
				superballmissSound.play();
			}
			lastBallJump(index);
		})
	})
}
function redBtnVis(index){
	red_btn_anim[index].alpha = 1;
	green_btns[index].loadTexture('red_btn');
}
function addAudio(){
	numberSound = game.add.audio('number');
	autopickSound = game.add.audio('autopick');
	autopick_endSound = game.add.audio('autopick_end');
	betDownSound = game.add.audio('betDown');
	betUpSound = game.add.audio('betUp');
	betmaxSound = game.add.audio('betmax');
	bwinSound = game.add.audio('bwin');
	endgameSound = game.add.audio('endgame');
	exitSound = game.add.audio('exit');
	helpSound = game.add.audio('help');
	nummaxSound = game.add.audio('nummax');
	playgameSound = game.add.audio('playgame');
	spusksharovSound = game.add.audio('spusksharov');
	superballmissSound = game.add.audio('superballmiss');
	superballwinSound = game.add.audio('superballwin');
	vibraniysharSound = game.add.audio('vibraniyshar');
	wipecard_quickpickSound = game.add.audio('wipecard_quickpick');
	zvyksharovSound = game.add.audio('zvyksharov');
	coins = game.add.audio('coins');
	half_sound = game.add.audio('half_sound');
	winSound = game.add.audio('win');
	winSound.loop = true;
}
var curStep = 0;
function showPickText(){
	var step = 0;
	if (pickValue > 1){
		var curArr = betValue/0.25;
		var countZero = 0;
		winArr[curArr-1][pickValue-2].forEach(function (item, numb) {
			if (item === 0){
				countZero = countZero + 1;
			}
			if (item !== 0 && item !== 'JACKPOT'){
				pickNumArrText[pickValue-countZero-step].setText(numb)
				pickNumArrText[pickValue-countZero-step].visible = true;
				pickArrText[pickValue-countZero-step].setText(item/betValue+' X')
				pickArrText[pickValue-countZero-step].visible = true;
				pickArrText[pickValue-countZero-step].fill = "#fcff1d";
				pickArrText[pickValue-countZero-step].tint = "0xffffff";
				pickArrText_right[pickValue-countZero-step].setText(item/betValue+' X')
				pickArrText_right[pickValue-countZero-step].visible = true;
				pickArrText_right[pickValue-countZero-step].fill = "#fcff1d";
				pickArrText_right[pickValue-countZero-step].tint = "0xffffff";
				pickNumArrText[pickValue-countZero-step].tint = "0xffffff";
				pickNumArrText[pickValue-countZero-step].fill = "#f24363";
				step = step + 1;
			} else if( item == 'JACKPOT'){
				pickNumArrText[pickValue-countZero-step].setText(numb)
				pickNumArrText[pickValue-countZero-step].visible = true;
				pickArrText[pickValue-countZero-step].setText('JPOT')
				pickArrText[pickValue-countZero-step].visible = true;
				pickArrText[pickValue-countZero-step].fill = "#ffffff";
				pickArrText[pickValue-countZero-step].tint = "0xffffff";
				pickArrText_right[pickValue-countZero-step].setText('JPOT')
				pickArrText_right[pickValue-countZero-step].visible = true;
				pickArrText_right[pickValue-countZero-step].fill = "#ffffff";
				pickArrText_right[pickValue-countZero-step].tint = "0xffffff";
				pickNumArrText[pickValue-countZero-step].tint = "0xffffff";
				pickNumArrText[pickValue-countZero-step].fill = "#f24363";
				step = step + 1;
			}
		})
		curStep = step;
		for (var i = 1; i <= 7; ++i) {
			red_bg_left[i].visible = false;
			red_bg_right[i].visible = false;
		}
		console.log(step)
		red_bg_left[step].visible = true;
	} else{
		for (var i = 1; i <= 7; ++i) {
			red_bg_left[i].visible = false;
			red_bg_right[i].visible = false;
		}
	}
}
animCoinArray = [[0,1,2,3,4,5,6,7],[2,3,4,5,6,7,0,1],[3,4,5,6,7,0,1,2],[4,5,6,7,0,1,2,3],[6,7,0,1,2,3,4,5],[7,0,1,2,3,4,5,6]]

var coinArrayLeft = [];
var coinArrayRight = [];
function coinAnim(){
	coinArrayLeft = [];
	coinArrayRight = [];
	coins.play();
	hideButtons();
	help.inputEnabled = false;
	help.input.useHandCursor = false;
	help.loadTexture('help_p');
	for (var i = 0; i <= 5; ++i) {
		for (var j = 0; j <= 7; ++j) {
			coinArrayLeft[i] = game.add.sprite(-130+125*i-j*50, -130-j*80, 'coin_anim_2');
			coinArrayLeft[i].animations.add('coin_anim_2', animCoinArray[i], 16, true).play();  
			coinGoLeftToRight(coinArrayLeft[i]) 
		}
		for (var j = 0; j <= 7; ++j) {
			coinArrayRight[i] = game.add.sprite(1024-125*i+j*50, -130-j*80, 'coin_anim_2');
			coinArrayRight[i].animations.add('coin_anim_2', animCoinArray[i], 16, true).play();   
			coinGoRightToLeft(coinArrayRight[i]);
		}
	}
}
function coinGoRightToLeft(elem){
	game.add.tween(elem).to({x:elem.position.x-900,y:elem.position.y+1530}, 3500, Phaser.Easing.LINEAR, true)
}
function coinGoLeftToRight(elem){
	game.add.tween(elem).to({x:elem.position.x+900,y:elem.position.y+1530}, 3500, Phaser.Easing.LINEAR, true).onComplete.add(function(){
		location.href = '/';
	});	
}
function giveBalance(){
	var x = 0;
	var interval;
	allBalance = +balance + allWinOld;
	(function() {
		if (x < allBalance) {
			interval = 1000/10;
			if (allBalance > 5000){
				x += 500;
			} else if (allBalance > 2000){
				x += 250;
			} else if (allBalance > 1000){
				x += 150;
			} else if (allBalance > 500){
				x += 100;
			} else if (allBalance > 300){
				x += 50;
			} else if (allBalance > 200){
				x += 30;
			} else if (allBalance > 50){
				x += 20;
			} else {
				x += 10;
			}
			credit.setText((allBalance - x).toFixed(2));
			if (x > allBalance){
				credit.setText(0); 
			}
			setTimeout(arguments.callee, interval);
		} else {
			credit.setText(0);   
		}
	})();
}