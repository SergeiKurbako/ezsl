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
[0,0,2.75],
[0,0,0.5,6.5],
[0,0,0.25,1.25,15.00],
[0,0,0.25,0.5,2.75,18.75],
[0,0,0,0.5,1.75,7.5,31.25],
[0,0,0,0.25,1.0,3.0,18.75,50],
[0,0,0,0.25,0.5,1.5,4.25,30,125],
[0,0,0,0,0.5,1.25,3.5,13.75,50,250],
[0,0,0,0,0.25,1.0,2.0,6.0,25,125,250]
],[
[0,0,5.50],
[0,0,1.00,13.00],
[0,0,0.50,2.50,30.00],
[0,0,0.50,1.00,5.50,37.50],
[0,0,0,1.00,3.50,15.00,62.50],
[0,0,0,0.50,2.00,6.00,37.50,100],
[0,0,0,0.50,1.00,3.00,8.50,60,250],
[0,0,0,0,1.00,2.50,7.00,27.50,100,500],
[0,0,0,0,0.50,2.00,4.00,12.00,50,250,500]
],[
[0,0,8.25],
[0,0,1.50,19.50],
[0,0,0.75,3.75,45.00],
[0,0,0.75,1.50,8.25,56.25],
[0,0,0,1.50,5.25,22.50,93.75],
[0,0,0,0.75,3.00,9.00,56.25,150],
[0,0,0,0.75,1.50,4.50,12.75,90,375],
[0,0,0,0,1.50,3.75,10.50,41.25,150,750],
[0,0,0,0,0.75,3.00,6.00,18.00,75,375,750]
],[
[0,0,11.00],
[0,0,2.00,26.00],
[0,0,1.00,5.00,60.00],
[0,0,1.00,2.00,11.00,75.00],
[0,0,0,2.00,7.00,30.00,125.00],
[0,0,0,1.00,4.00,12.00,75.00,200],
[0,0,0,1.00,2.00,6.00,17.00,120,'JACKPOT'],
[0,0,0,0,2.00,5.00,14.00,55.00,200,'JACKPOT'],
[0,0,0,0,1.00,4.00,8.00,24.00,100,'JACKPOT','JACKPOT']
],[
[0,0,13.75],
[0,0,2.50,32.50],
[0,0,1.25,6.25,75.00],
[0,0,1.25,2.50,13.75,93.75],
[0,0,0,2.50,8.75,37.50,156.25],
[0,0,0,1.25,5.00,15.00,93.75,250],
[0,0,0,1.25,2.50,7.50,21.25,150,'JACKPOT'],
[0,0,0,0,2.50,6.25,17.50,68.75,250,'JACKPOT'],
[0,0,0,0,1.25,5.00,10.00,30.00,125,'JACKPOT','JACKPOT']
]
,[
[0,0,16.50],
[0,0,3.00,39.00],
[0,0,1.50,7.50,90.00],
[0,0,1.50,3.00,16.50,112.50],
[0,0,0,3.00,10.50,45.00,187.50],
[0,0,0,1.50,6.00,18.00,112.50,300],
[0,0,0,1.50,3.00,9.00,25.50,180,'JACKPOT'],
[0,0,0,0,3.00,7.50,21.00,82.50,300,'JACKPOT'],
[0,0,0,0,1.50,6.00,12.00,36.00,150,'JACKPOT','JACKPOT']
],[
[0,0,19.25],
[0,0,3.50,45.50],
[0,0,1.75,8.75,105.00],
[0,0,1.75,3.50,19.25,131.25],
[0,0,0,3.50,12.25,52.50,218.75],
[0,0,0,1.75,7.00,21.00,131.25,350],
[0,0,0,1.75,3.50,10.50,29.75,210,'JACKPOT'],
[0,0,0,0,3.50,8.75,24.50,96.25,350,'JACKPOT'],
[0,0,0,0,1.75,7.00,14.00,42.00,175,'JACKPOT','JACKPOT']
],[
[0,0,22.00],
[0,0,4.00,52.00],
[0,0,2.00,10.00,120.00],
[0,0,2.00,4.00,22.00,150.00],
[0,0,0,4.00,14.00,60.00,250.00],
[0,0,0,2.00,8.00,24.00,150.00,400],
[0,0,0,2.00,4.00,12.00,34.00,240,'JACKPOT'],
[0,0,0,0,4.00,10.00,28.00,110.00,400,'JACKPOT'],
[0,0,0,0,2.00,8.00,16.00,48.00,200,'JACKPOT','JACKPOT']
],[
[0,0,24.75],
[0,0,4.50,58.50],
[0,0,2.25,11.25,135.00],
[0,0,2.25,4.50,24.75,168.75],
[0,0,0,4.50,15.75,67.50,281.25],
[0,0,0,2.25,9.00,27.00,168.75,450],
[0,0,0,2.25,4.50,13.50,38.25,270,'JACKPOT'],
[0,0,0,0,4.50,11.25,31.50,123.75,450,'JACKPOT'],
[0,0,0,0,2.25,9.00,18.00,54.00,225,'JACKPOT','JACKPOT']
],[
[0,0,2.75*10],
[0,0,0.5*10,6.5*10],
[0,0,0.25*10,1.25*10,15.00*10],
[0,0,0.25*10,0.5*10,2.75*10,18.75*10],
[0,0,0,0.5*10,1.75*10,7.5*10,31.25*10],
[0,0,0,0.25*10,1.0*10,3.0*10,18.75*10,50*10],
[0,0,0,0.25*10,0.5*10,1.5*10,4.25*10,30*10,'JACKPOT'],
[0,0,0,0,0.5*10,1.25*10,3.5*10,13.75*10,50*10,'JACKPOT'],
[0,0,0,0,0.25*10,1.0*10,2.0*10,6.0*10,25*10,'JACKPOT','JACKPOT']
],[
[0,0,2.75*11],
[0,0,0.5*11,6.5*11],
[0,0,0.25*11,1.25*11,15.00*11],
[0,0,0.25*11,0.5*11,2.75*11,18.75*11],
[0,0,0,0.5*11,1.75*11,7.5*11,31.25*11],
[0,0,0,0.25*11,1.0*11,3.0*11,18.75*11,50*11],
[0,0,0,0.25*11,0.5*11,1.5*11,4.25*11,30*11,'JACKPOT'],
[0,0,0,0,0.5*11,1.25*11,3.5*11,13.75*11,50*11,'JACKPOT'],
[0,0,0,0,0.25*11,1.0*11,2.0*11,6.0*11,25*11,'JACKPOT','JACKPOT']
],[
[0,0,2.75*12],
[0,0,0.5*12,6.5*12],
[0,0,0.25*12,1.25*12,15.00*12],
[0,0,0.25*12,0.5*12,2.75*12,18.75*12],
[0,0,0,0.5*12,1.75*12,7.5*12,31.25*12],
[0,0,0,0.25*12,1.0*12,3.0*12,18.75*12,50*12],
[0,0,0,0.25*12,0.5*12,1.5*12,4.25*12,30*12,'JACKPOT'],
[0,0,0,0,0.5*12,1.25*12,3.5*12,13.75*12,50*12,'JACKPOT'],
[0,0,0,0,0.25*12,1.0*12,2.0*12,6.0*12,25*12,'JACKPOT','JACKPOT']
],[
[0,0,2.75*13],
[0,0,0.5*13,6.5*13],
[0,0,0.25*13,1.25*13,15.00*13],
[0,0,0.25*13,0.5*13,2.75*13,18.75*13],
[0,0,0,0.5*13,1.75*13,7.5*13,31.25*13],
[0,0,0,0.25*13,1.0*13,3.0*13,18.75*13,50*13],
[0,0,0,0.25*13,0.5*13,1.5*13,4.25*13,30*13,'JACKPOT'],
[0,0,0,0,0.5*13,1.25*13,3.5*13,13.75*13,50*13,'JACKPOT'],
[0,0,0,0,0.25*13,1.0*13,2.0*13,6.0*13,25*13,'JACKPOT','JACKPOT']
],[
[0,0,2.75*14],
[0,0,0.5*14,6.5*14],
[0,0,0.25*14,1.25*14,15.00*14],
[0,0,0.25*14,0.5*14,2.75*14,18.75*14],
[0,0,0,0.5*14,1.75*14,7.5*14,31.25*14],
[0,0,0,0.25*14,1.0*14,3.0*14,18.75*14,50*14],
[0,0,0,0.25*14,0.5*14,1.5*14,4.25*14,30*14,'JACKPOT'],
[0,0,0,0,0.5*14,1.25*14,3.5*14,13.75*14,50*14,'JACKPOT'],
[0,0,0,0,0.25*14,1.0*14,2.0*14,6.0*14,25*14,'JACKPOT','JACKPOT']
],[
[0,0,2.75*15],
[0,0,0.5*15,6.5*15],
[0,0,0.25*15,1.25*15,15.00*15],
[0,0,0.25*15,0.5*15,2.75*15,18.75*15],
[0,0,0,0.5*15,1.75*15,7.5*15,31.25*15],
[0,0,0,0.25*15,1.0*15,3.0*15,18.75*15,50*15],
[0,0,0,0.25*15,0.5*15,1.5*15,4.25*15,30*15,'JACKPOT'],
[0,0,0,0,0.5*15,1.25*15,3.5*15,13.75*15,50*15,'JACKPOT'],
[0,0,0,0,0.25*15,1.0*15,2.0*15,6.0*15,25*15,'JACKPOT','JACKPOT']
],[
[0,0,2.75*16],
[0,0,0.5*16,6.5*16],
[0,0,0.25*16,1.25*16,15.00*16],
[0,0,0.25*16,0.5*16,2.75*16,18.75*16],
[0,0,0,0.5*16,1.75*16,7.5*16,31.25*16],
[0,0,0,0.25*16,1.0*16,3.0*16,18.75*16,50*16],
[0,0,0,0.25*16,0.5*16,1.5*16,4.25*16,30*16,'JACKPOT'],
[0,0,0,0,0.5*16,1.25*16,3.5*16,13.75*16,50*16,'JACKPOT'],
[0,0,0,0,0.25*16,1.0*16,2.0*16,6.0*16,25*16,'JACKPOT','JACKPOT']
],[
[0,0,2.75*17],
[0,0,0.5*17,6.5*17],
[0,0,0.25*17,1.25*17,15.00*17],
[0,0,0.25*17,0.5*17,2.75*17,18.75*17],
[0,0,0,0.5*17,1.75*17,7.5*17,31.25*17],
[0,0,0,0.25*17,1.0*17,3.0*17,18.75*17,50*17],
[0,0,0,0.25*17,0.5*17,1.5*17,4.25*17,30*17,'JACKPOT'],
[0,0,0,0,0.5*17,1.25*17,3.5*17,13.75*17,50*17,'JACKPOT'],
[0,0,0,0,0.25*17,1.0*17,2.0*17,6.0*17,25*17,'JACKPOT','JACKPOT']
],[
[0,0,2.75*18],
[0,0,0.5*18,6.5*18],
[0,0,0.25*18,1.25*18,15.00*18],
[0,0,0.25*18,0.5*18,2.75*18,18.75*18],
[0,0,0,0.5*18,1.75*18,7.5*18,31.25*18],
[0,0,0,0.25*18,1.0*18,3.0*18,18.75*18,50*18],
[0,0,0,0.25*18,0.5*18,1.5*18,4.25*18,30*18,'JACKPOT'],
[0,0,0,0,0.5*18,1.25*18,3.5*18,13.75*18,50*18,'JACKPOT'],
[0,0,0,0,0.25*18,1.0*18,2.0*18,6.0*18,25*18,'JACKPOT','JACKPOT']
],[
[0,0,2.75*19],
[0,0,0.5*19,6.5*19],
[0,0,0.25*19,1.25*19,15.00*19],
[0,0,0.25*19,0.5*19,2.75*19,18.75*19],
[0,0,0,0.5*19,1.75*19,7.5*19,31.25*19],
[0,0,0,0.25*19,1.0*19,3.0*19,18.75*19,50*19],
[0,0,0,0.25*19,0.5*19,1.5*19,4.25*19,30*19,'JACKPOT'],
[0,0,0,0,0.5*19,1.25*19,3.5*19,13.75*19,50*19,'JACKPOT'],
[0,0,0,0,0.25*19,1.0*19,2.0*19,6.0*19,25*19,'JACKPOT','JACKPOT']
],[
[0,0,2.75*20],
[0,0,0.5*20,6.5*20],
[0,0,0.25*20,1.25*20,15.00*20],
[0,0,0.25*20,0.5*20,2.75*20,18.75*20],
[0,0,0,0.5*20,1.75*20,7.5*20,31.25*20],
[0,0,0,0.25*20,1.0*20,3.0*20,18.75*20,50*20],
[0,0,0,0.25*20,0.5*20,1.5*20,4.25*20,30*20,'JACKPOT'],
[0,0,0,0,0.5*20,1.25*20,3.5*20,13.75*20,50*20,'JACKPOT'],
[0,0,0,0,0.25*20,1.0*20,2.0*20,6.0*20,25*20,'JACKPOT','JACKPOT']
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
function lastMove(index){
	yPos = 665-(Math.floor((index+1)/2)-1)*64  
	lastTimer = yPos-50;
	if (index === 20){
		game.add.tween(game1.balls[index]).to({x:661,y:72}, 20, Phaser.Easing.LINEAR, true).onComplete.add(function(){
			game.add.tween(game1.balls[index]).to({x:661,y:89}, 20, Phaser.Easing.LINEAR, true).onComplete.add(function(){    
				ballsSound[Math.floor((index+1)/2)].play();             
				red_square_anim.alpha = 1;
				checkWin();
			})  
		})  
	} else {    
		if( index%2 ){
			game.add.tween(game1.balls[index]).to({x:725,y:89}, 10, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				game.add.tween(game1.balls[index]).to({y:yPos}, lastTimer*0.7, Phaser.Easing.LINEAR, true).onComplete.add(function(){
					if (arrBetBtn.indexOf(info[index-1]) != -1){
						bwinSound.play();
						// red_btn_anim[info[index-1]].visible = true;
						redBtnVis(info[index-1]);
						game1.green_btns_numbers[info[index-1]].visible = false;
						game1.yellow_btns_numbers[info[index-1]].visible = false;
						game1.red_btns_numbers[info[index-1]].visible = true;
					} else {
						green_btns[info[index-1]].loadTexture('purple_btn');
					}
					ballsSound[Math.floor((index+1)/2)].play();
					if (index < 13){
						game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.8}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
							game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
								game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.95}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
									game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
									});
								});
							});
						});
					} else {
						game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.95}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
							game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
							});
						});
					}
				});
			});
		} else {
			game.add.tween(game1.balls[index]).to({x:661,y:40}, 60*0.7, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				game.add.tween(game1.balls[index]).to({y:yPos}, lastTimer*0.7, Phaser.Easing.LINEAR, true).onComplete.add(function(){
					if (arrBetBtn.indexOf(info[index-1]) != -1){
						bwinSound.play();
						// red_btn_anim[info[index-1]].visible = true;
						redBtnVis(info[index-1]);
						game1.green_btns_numbers[info[index-1]].visible = false;
						game1.yellow_btns_numbers[info[index-1]].visible = false;
						game1.red_btns_numbers[info[index-1]].visible = true;
					} else {
						green_btns[info[index-1]].loadTexture('purple_btn');
					}
					ballsSound[Math.floor((index+1)/2)].play();
					if (index < 13){
						game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.8}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
							game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.2*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
								game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.95}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
									game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
									});
								});
							});
						});
					} else {
						game.add.tween(game1.balls[index]).to({y:game1.balls[index].position.y*0.95}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.Out, true).onComplete.add(function(){
							game.add.tween(game1.balls[index]).to({y:665-(Math.floor((index+1)/2)-1)*64}, (665-(Math.floor((index+1)/2)-1)*64)*0.1*0.7, Phaser.Easing.Circular.In, true).onComplete.add(function(){
							});
						});
					}
				});
			});
		}
	}
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
				touch_anim_start = game.add.sprite(70,392, 'touch_anim');
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
					if (!jackpotStatus) {
						touch_anim_start.visible = false;
						touch_anim_start.destroy();
					// last_ball_start.visible = true;
					touch_anim_end.visible = true;
					touch_anim_end.animations.getAnimation('anim').play();
					last_ball_start = game.add.sprite(71,389, 'last_ball_start');
					slotLayer1Group.add(last_ball_start);
					last_ball_start.animations.add('anim', [0,1,2,3,4], 15, false).play().onComplete.add(function(){
						console.log(2)
						last_ball_start.visible = false;
						touch_anim_end.visible = false;
						last_ball.alpha = 1;
						last_ball_start.destroy();
					});
					setTimeout(function(){
						if  (!sorryStatus){
							if  (!winStatus){
								if (!spinStatus) {
									if (!jackpotStatus) {
										last_ball.alpha = 0;
										last_ball_end.visible = true;
									// touch_anim_start.visible = true;
									last_ball_end.animations.getAnimation('anim').play();
									touch_anim_start = game.add.sprite(70,392, 'touch_anim');
									slotLayer1Group.add(touch_anim_start);
									touch_anim_start.animations.add('anim', [0,1,2,3,4], 15, false).play().onComplete.add(function(){
										last_ball_end.visible = false;
										midAnim();
									});
								}
							}
						}
					} else {
						return false;
					}
				}, 5000)
				}
			}
		}
	} else {
		return false;
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
function visJackpot(){
	if (!winStatus){		
		if (!jackpotStatus){		
			if (!spinStatus){		
				jackpotStatus = true;
				sorry_anim_start.visible = false;
				sorry_anim_end.visible = false;
				last_ball_start.visible = false;
				last_ball_end.visible = false;
				touch_anim_end.visible = false;
				touch_anim_start.visible = false;
				last_ball.alpha = 0;
				hitJack.visible = true;
				playerName.setText(' playername');
				playerName.visible = true;
				jackpotValueText.setText(' 100 000 !');
				starsArr[0] = game.add.sprite(159, 380, 'Red_stars');
				starsArr[0].anchor.setTo(0.5, 0.5);
				slotLayer1Group.add(starsArr[0]);
				starsArr[0].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
					starsArr[0].visible = false;
					starsArr[0].destroy();
				});
				setTimeout(function(){
					if (!spinStatus){
						starsArr[1] = game.add.sprite(556, 322, 'Purple_stars');
						starsArr[1].anchor.setTo(0.5, 0.5);
						slotLayer1Group.add(starsArr[1]);
						starsArr[1].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
							starsArr[1].visible = false;
							starsArr[1].destroy();
						});
						setTimeout(function(){
							if (!spinStatus){
								starsArr[2] = game.add.sprite(366, 514, 'Yellow_stars');
								starsArr[2].anchor.setTo(0.5, 0.5);
								slotLayer1Group.add(starsArr[2]);
								starsArr[2].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
									starsArr[2].visible = false;
									starsArr[2].destroy();
								});
								setTimeout(function(){	
									if (!spinStatus){			
										starsArr[3] = game.add.sprite(703, 473, 'Red_stars');
										starsArr[3].anchor.setTo(0.5, 0.5);
										slotLayer1Group.add(starsArr[3]);
										starsArr[3].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
											starsArr[3].visible = false;
											starsArr[3].destroy();
										});
										setTimeout(function(){
											if (!spinStatus){
												jackpotValueText.visible = true;
												hitJack.visible = false;
												playerName.visible = false;
												starsArr[4] = game.add.sprite(314, 325, 'Purple_stars');
												starsArr[4].anchor.setTo(0.5, 0.5);
												slotLayer1Group.add(starsArr[4]);
												starsArr[4].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
													starsArr[4].visible = false;
													starsArr[4].destroy();
												});
												setTimeout(function(){
													if (!spinStatus){
														starsArr[5] = game.add.sprite(612, 401, 'Yellow_stars');
														starsArr[5].anchor.setTo(0.5, 0.5);
														slotLayer1Group.add(starsArr[5]);
														starsArr[5].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
															starsArr[5].visible = false;
															starsArr[5].destroy();
														});
														setTimeout(function(){
															if (!spinStatus){
																starsArr[6] = game.add.sprite(368, 575, 'Red_stars');
																starsArr[6].anchor.setTo(0.5, 0.5);
																slotLayer1Group.add(starsArr[6]);
																starsArr[6].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
																	starsArr[6].visible = false;
																	starsArr[6].destroy();
																});
																setTimeout(function(){
																	if (!spinStatus){
																		starsArr[7] = game.add.sprite(176, 500, 'Purple_stars');
																		starsArr[7].anchor.setTo(0.5, 0.5);
																		slotLayer1Group.add(starsArr[7]);
																		starsArr[7].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
																			starsArr[7].visible = false;
																			starsArr[7].destroy();
																		});
																		setTimeout(function(){
																			if (!spinStatus){
																				starsArr[8] = game.add.sprite(186, 389, 'Yellow_stars');
																				starsArr[8].anchor.setTo(0.5, 0.5);
																				slotLayer1Group.add(starsArr[8]);
																				starsArr[8].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
																					starsArr[8].visible = false;
																					starsArr[8].destroy();
																				});
																				setTimeout(function(){
																					if (!spinStatus){
																						starsArr[9] = game.add.sprite(480, 327, 'Red_stars');
																						starsArr[9].anchor.setTo(0.5, 0.5);
																						slotLayer1Group.add(starsArr[9]);
																						starsArr[9].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
																							starsArr[9].visible = false;
																							starsArr[9].destroy();
																						});
																						setTimeout(function(){
																							if (!spinStatus){
																								starsArr[10] = game.add.sprite(548, 513, 'Purple_stars');
																								starsArr[10].anchor.setTo(0.5, 0.5);
																								slotLayer1Group.add(starsArr[10]);
																								starsArr[10].animations.add('anim', [0,1,2,3,4,5], 6, false).play().onComplete.add(function(){
																									starsArr[10].visible = false;
																									starsArr[10].destroy();
																									setTimeout(function(){
																										jackpotValueText.visible = false;
																										jackpotStatus = false;
																										if (!spinStatus){												
																										touch_anim_start.destroy();				
																										touch_anim_start = game.add.sprite(70,392, 'touch_anim');
																										slotLayer1Group.add(touch_anim_start);
																										touch_anim_start.animations.add('anim', [0,1,2,3,4], 15, false).play().onComplete.add(function(){
																										midAnim();
																										});
																									}
																								}, 2000)
																								});
																							}
																						}, 300)
																					}
																				}, 300)
																			}
																		}, 300)
																	}
																}, 300)
															}
														}, 300)
													}
												}, 300)
											}
										}, 300)
}
}, 300)
}
}, 300)
}
}, 300)
}
}
}
}
function flickWinText(){
	stopFlickText = false;
	var curArr = betValue/0.25;
	winArr[curArr-1][pickValue-2].forEach(function (item, numb) {
		if (lastball === 'yes'){
			if (item === allWin/4){
				pickArrText[winArr[curArr-1][pickValue-2].length-numb-1].fill = "#ffffff";
				pickNumArrText[winArr[curArr-1][pickValue-2].length-numb-1].fill = "#ffffff";
				dolArrText[winArr[curArr-1][pickValue-2].length-numb-1].tint = "0xffffff";
				tweenTintText(pickArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
				tweenTintText(pickNumArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
				tweenTintText(dolArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
			}
		} else {            
			if (item === allWin){
				pickArrText[winArr[curArr-1][pickValue-2].length-numb-1].fill = "#ffffff";
				pickNumArrText[winArr[curArr-1][pickValue-2].length-numb-1].fill = "#ffffff";
				dolArrText[winArr[curArr-1][pickValue-2].length-numb-1].tint = "0xffffff";
				tweenTintText(pickArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
				tweenTintText(pickNumArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
				tweenTintText(dolArrText[winArr[curArr-1][pickValue-2].length-numb-1],  0xffffff,  0x5e0000, 250);
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
  				// red_btn_anim[info[index-1]].visible = true;
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
			game1.timer[index].start(false);
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
	winSound = game.add.audio('win');
	winSound.loop = true;
}
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
				dolArrText[pickValue-countZero-step].visible = true;
				pickArrText[pickValue-countZero-step].setText(item.toFixed(2))
				pickArrText[pickValue-countZero-step].visible = true;
				pickArrText[pickValue-countZero-step].fill = "#fcff1d";
				pickArrText[pickValue-countZero-step].tint = "0xffffff";
				pickNumArrText[pickValue-countZero-step].tint = "0xffffff";
				pickNumArrText[pickValue-countZero-step].fill = "#f24363";
				dolArrText[pickValue-countZero-step].tint = "0x17dc23";
				step = step + 1;
			} else if( item == 'JACKPOT'){
				pickNumArrText[pickValue-countZero-step].setText(numb)
				pickNumArrText[pickValue-countZero-step].visible = true;
				dolArrText[pickValue-countZero-step].visible = true;
				pickArrText[pickValue-countZero-step].setText(item)
				pickArrText[pickValue-countZero-step].visible = true;
				pickArrText[pickValue-countZero-step].fill = "#ffffff";
				pickArrText[pickValue-countZero-step].tint = "0xffffff";
				pickNumArrText[pickValue-countZero-step].tint = "0xffffff";
				pickNumArrText[pickValue-countZero-step].fill = "#f24363";
				dolArrText[pickValue-countZero-step].tint = "0x17dc23";
				step = step + 1;
			}
		})
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