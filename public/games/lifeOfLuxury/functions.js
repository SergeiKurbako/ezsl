//game - гланый объект игры, в который все добавляется
var gameNumber = 3;
var autostart = false;
var curGame = 1;
var paytableStatus = false;
var winBonusValue = 0;
var winWithoutCoin = 0;
//функция для рандома
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//включение звука и полноэкранного режимов
function full_and_sound(){
	if (!fullStatus)
		full = game.add.sprite(738,27, 'game.non_full');
	else
		full = game.add.sprite(738,27, 'game.full');
	full.inputEnabled = true;
	full.input.useHandCursor = true;
	full.events.onInputUp.add(function(){
		if (game.scale.isFullScreen)
		{
			game.scale.stopFullScreen();
			full.loadTexture('game.non_full');
			fullStatus = false;
		}
		else
		{
			game.scale.startFullScreen(false);
			full.loadTexture('game.full');
			fullStatus = true;
		}
	});
	if (soundStatus)
		sound = game.add.sprite(738,53, 'sound_on');
	else
		sound = game.add.sprite(738,53, 'sound_off');
	sound.inputEnabled = true;
	sound.input.useHandCursor = true;
	sound.events.onInputUp.add(function(){
		if (soundStatus == true){
			sound.loadTexture('sound_off');
			soundStatus =false;
			game.sound.mute = true;
		} else {
			sound.loadTexture('sound_on');
			soundStatus = true;
			game.sound.mute = false;
		}
	});
}

//блокировка экрана
function lockDisplay() {
	document.getElementById('displayLock').style.display = 'block';
}
function unlockDisplay() {
	document.getElementById('displayLock').style.display = 'none';
}

//Функции связанные с линиями и их номерами

var line1; var linefull1; var number1;
var line2; var linefull2; var number2;
var line3; var linefull3; var number3;
var line4; var linefull4; var number4;
var line5; var linefull5; var number5;
var line6; var linefull6; var number6;
var line7; var linefull7; var number7;
var line8; var linefull8; var number8;
var line9; var linefull9; var number9;

//var linePosition = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]] - координаты расположения линий
//var numberPosition = [[0,0], ...] - координаты расположения цифр
function addLinesAndNumbers(game, linePosition, numberPosition) {

	var linefullNames = ['linefull1', 'linefull2', 'linefull3', 'linefull4', 'linefull5', 'linefull6', 'linefull7', 'linefull8', 'linefull9'];
	var lineNames = ['line1', 'line2', 'line3', 'line4', 'line5', 'line6', 'line7', 'line8', 'line9'];

    //загружаем изображения в игру

    linefull1 = game.add.sprite(linePosition[0][0], linePosition[0][1], linefullNames[0]);
    linefull2 = game.add.sprite(linePosition[1][0], linePosition[1][1], linefullNames[1]);
    linefull3 = game.add.sprite(linePosition[2][0], linePosition[2][1], linefullNames[2]);
    linefull4 = game.add.sprite(linePosition[3][0], linePosition[3][1], linefullNames[3]);
    linefull5 = game.add.sprite(linePosition[4][0], linePosition[4][1], linefullNames[4]);
    linefull6 = game.add.sprite(linePosition[5][0], linePosition[5][1], linefullNames[5]);
    linefull7 = game.add.sprite(linePosition[6][0], linePosition[6][1], linefullNames[6]);
    linefull8 = game.add.sprite(linePosition[7][0], linePosition[7][1], linefullNames[7]);
    linefull9 = game.add.sprite(linePosition[8][0], linePosition[8][1], linefullNames[8]);

    linefull1.visible = false;
    linefull2.visible = false;
    linefull3.visible = false;
    linefull4.visible = false;
    linefull5.visible = false;
    linefull6.visible = false;
    linefull7.visible = false;
    linefull8.visible = false;
    linefull9.visible = false;

    line1 = game.add.sprite(linePosition[0][0]+6, linePosition[0][1], lineNames[0]);
    line2 = game.add.sprite(linePosition[1][0]+6, linePosition[1][1], lineNames[1]);
    line3 = game.add.sprite(linePosition[2][0]+6, linePosition[2][1], lineNames[2]);
    line4 = game.add.sprite(linePosition[3][0]+6, linePosition[3][1], lineNames[3]);
    line5 = game.add.sprite(linePosition[4][0]+6, linePosition[4][1], lineNames[4]);
    line6 = game.add.sprite(linePosition[5][0]+6, linePosition[5][1], lineNames[5]);
    line7 = game.add.sprite(linePosition[6][0]+6, linePosition[6][1], lineNames[6]);
    line8 = game.add.sprite(linePosition[7][0]+6, linePosition[7][1]-7, lineNames[7]);
    line9 = game.add.sprite(linePosition[8][0]+6, linePosition[8][1], lineNames[8]);

    line1.visible = false;
    line2.visible = false;
    line3.visible = false;
    line4.visible = false;
    line5.visible = false;
    line6.visible = false;
    line7.visible = false;
    line8.visible = false;
    line9.visible = false;

    number1 = game.add.sprite(numberPosition[0][0], numberPosition[0][1], 'game.number1');
    number2 = game.add.sprite(numberPosition[1][0], numberPosition[1][1], 'game.number2');
    number3 = game.add.sprite(numberPosition[2][0], numberPosition[2][1], 'game.number3');
    number4 = game.add.sprite(numberPosition[3][0], numberPosition[3][1], 'game.number4');
    number5 = game.add.sprite(numberPosition[4][0], numberPosition[4][1], 'game.number5');
    number6 = game.add.sprite(numberPosition[5][0], numberPosition[5][1], 'game.number6');
    number7 = game.add.sprite(numberPosition[6][0], numberPosition[6][1], 'game.number7');
    number8 = game.add.sprite(numberPosition[7][0], numberPosition[7][1], 'game.number8');
    number9 = game.add.sprite(numberPosition[8][0], numberPosition[8][1], 'game.number9');

    number1.visible = false;
    number2.visible = false;
    number3.visible = false;
    number4.visible = false;
    number5.visible = false;
    number6.visible = false;
    number7.visible = false;
    number8.visible = false;
    number9.visible = false;

  }

// lineArray = [1,2,3,4, ...] - перечисляются линии которые нужно скрыть (1-9 - обычные линии, 11-19 прерывисные)
function hideLines(linesArray = []) {
	if(linesArray.length == 0) {
		linefull1.visible = false;
		linefull2.visible = false;
		linefull3.visible = false;
		linefull4.visible = false;
		linefull5.visible = false;
		linefull6.visible = false;
		linefull7.visible = false;
		linefull8.visible = false;
		linefull9.visible = false;
		line1.visible = false;
		line2.visible = false;
		line3.visible = false;
		line4.visible = false;
		line5.visible = false;
		line6.visible = false;
		line7.visible = false;
		line8.visible = false;
		line9.visible = false;
	} else {
		linesArray.forEach(function (item) {
			switch (item) {
				case 1:
				linefull1.visible = false;
				break;
				case 2:
				linefull2.visible = false;
				break;
				case 3:
				linefull3.visible = false;
				break;
				case 4:
				linefull4.visible = false;
				break;
				case 5:
				linefull5.visible = false;
				break;
				case 6:
				linefull6.visible = false;
				break;
				case 7:
				linefull7.visible = false;
				break;
				case 8:
				linefull8.visible = false;
				break;
				case 9:
				linefull9.visible = false;
				break;
				case 11:
				line1.visible = false;
				break;
				case 12:
				line2.visible = false;
				break;
				case 13:
				line3.visible = false;
				break;
				case 14:
				line4.visible = false;
				break;
				case 15:
				line5.visible = false;
				break;
				case 16:
				line6.visible = false;
				break;
				case 17:
				line7.visible = false;
				break;
				case 18:
				line8.visible = false;
				break;
				case 19:
				line9.visible = false;
				break;
			}
		});
	}
}

var linesArray = [];
function showLines(linesArray = []) {
	if(linesArray.length == 0) {
		linefull1.visible = true;
		linefull2.visible = true;
		linefull3.visible = true;
		linefull4.visible = true;
		linefull5.visible = true;
		linefull6.visible = true;
		linefull7.visible = true;
		linefull8.visible = true;
		linefull9.visible = true;
		line1.visible = true;
		line2.visible = true;
		line3.visible = true;
		line4.visible = true;
		line5.visible = true;
		line6.visible = true;
		line7.visible = true;
		line8.visible = true;
		line9.visible = true;
	} else {
		linesArray.forEach(function (item) {
			switch (item) {
				case 1:
				linefull1.visible = true;
				break;
				case 2:
				linefull2.visible = true;
				break;
				case 3:
				linefull3.visible = true;
				break;
				case 4:
				linefull4.visible = true;
				break;
				case 5:
				linefull5.visible = true;
				break;
				case 6:
				linefull6.visible = true;
				break;
				case 7:
				linefull7.visible = true;
				break;
				case 8:
				linefull8.visible = true;
				break;
				case 9:
				linefull9.visible = true;
				break;
				case 11:
				line1.visible = true;
				break;
				case 12:
				line2.visible = true;
				break;
				case 13:
				line3.visible = true;
				break;
				case 14:
				line4.visible = true;
				break;
				case 15:
				line5.visible = true;
				break;
				case 16:
				line6.visible = true;
				break;
				case 17:
				line7.visible = true;
				break;
				case 18:
				line8.visible = true;
				break;
				case 19:
				line9.visible = true;
				break;
			}
		});
	}
}

// numberArray = [1, 2, ...] - массив объектов с изображениями цифр
var numberArray = [];
function hideNumbers(numberArray = []) {
	if(numberArray.length == 0) {
		number1.visible = false;
		number2.visible = false;
		number3.visible = false;
		number4.visible = false;
		number5.visible = false;
		number6.visible = false;
		number7.visible = false;
		number8.visible = false;
		number9.visible = false;
	} else {
		numberArray.forEach(function (item) {
			switch (item) {
				case 1:
				number1.visible = false;
				break;
				case 2:
				number2.visible = false;
				break;
				case 3:
				number3.visible = false;
				break;
				case 4:
				number4.visible = false;
				break;
				case 5:
				number5.visible = false;
				break;
				case 6:
				number6.visible = false;
				break;
				case 7:
				number7.visible = false;
				break;
				case 8:
				number8.visible = false;
				break;
				case 9:
				number9.visible = false;
				break;
			}
		});
	}
}

function showNumbers(numberArray = []) {
	if(numberArray.length == 0) {
		number1.visible = true;
		number2.visible = true;
		number3.visible = true;
		number4.visible = true;
		number5.visible = true;
		number6.visible = true;
		number7.visible = true;
		number8.visible = true;
		number9.visible = true;
	} else {
		numberArray.forEach(function (item) {
			switch (item) {
				case 1:
				number1.visible = true;
				break;
				case 2:
				number2.visible = true;
				break;
				case 3:
				number3.visible = true;
				break;
				case 4:
				number4.visible = true;
				break;
				case 5:
				number5.visible = true;
				break;
				case 6:
				number6.visible = true;
				break;
				case 7:
				number7.visible = true;
				break;
				case 8:
				number8.visible = true;
				break;
				case 9:
				number9.visible = true;
				break;
			}
		});
	}
}

var timerNumbersAmin;
function showNumbersAmin(numberArray = []) {
	hideNumbers(numberArray);

	var i = 1;
	timerNumbersAmin = setInterval(function() {
		if(i == 0) {
			hideNumbers(numberArray);

			i = 1;
		} else {
			i = 0;

			showNumbers(numberArray);
		}

	}, 500);
}

function hideNumbersAmin() {
	clearInterval(timerNumbersAmin);
	showNumbers(numberArray);
}



// Функции связанные с кнопками
var selectGame;
var payTable;
var betone;
var betmax;
var automaricstart;
var startButton;
var buttonLine1;
var buttonLine3;
var buttonLine5;
var buttonLine7;
var buttonLine9;

//кнопки для слотов
function addButtonsGame1(game,pageCount) {

    //звуки для кнопок
    var line1Sound = game.add.audio('line1Sound');
    var line3Sound = game.add.audio('line3Sound');
    var line5Sound = game.add.audio('line5Sound');
    var line7Sound = game.add.audio('line7Sound');
    var line9Sound = game.add.audio('line9Sound');

    //var soundForBattons = []; - массив содержащий объекты звуков для кнопок
    var soundForBattons = [];
    soundForBattons.push(line1Sound, line3Sound, line5Sound, line7Sound, line9Sound);

    // кнопки
    selectGame = game.add.sprite(70,510, 'selectGame');
    selectGame.scale.setTo(0.7, 0.7);
    selectGame.inputEnabled = true;
    selectGame.input.useHandCursor = true;
    selectGame.events.onInputOver.add(function(){
    	selectGame.loadTexture('selectGame_p');
    });
    selectGame.events.onInputOut.add(function(){
    	selectGame.loadTexture('selectGame');
    });
    selectGame.events.onInputDown.add(function(){});

    payTable = game.add.sprite(150,510, 'payTable');
    payTable.scale.setTo(0.7, 0.7);
    payTable.inputEnabled = true;
    payTable.input.useHandCursor = true;
    payTable.events.onInputOver.add(function(){
    	payTable.loadTexture('payTable_p');
    });
    payTable.events.onInputOut.add(function(){
    	payTable.loadTexture('payTable');
    });
    payTable.events.onInputUp.add(function(){
    	hideButtons([[payTable, 'payTable'], [betmax, 'betmax'], [betone, 'betone'], [automaricstart, 'automaricstart'], [selectGame, 'selectGame'], [buttonLine3, "buttonLine3"], [buttonLine5, "buttonLine5"], [buttonLine7, "buttonLine7"]]);
    	pagePaytables[1].visible = true;
    	prev_page.visible = true;
    	exit_btn.visible = true;
    	next_page.visible = true;
    	settingsMode = true;
    	light_settings.visible = true;
    	currentPage = 1;
    	betline1Score.visible = false;
    	betline2Score.visible = false;
    	betScore.visible = false;
    	linesScore.visible = false;
    	balanceScore.visible = false;
    });

    betone = game.add.sprite(490,510, 'betone');
    betone.scale.setTo(0.7, 0.7);
    betone.inputEnabled = true;
    betone.input.useHandCursor = true;
    betone.events.onInputOver.add(function(){
    	betone.loadTexture('betone_p');
    });
    betone.events.onInputDown.add(function(){
    	if(checkWin == 1){
    		checkWin = 0;
    		hideNumbersAmin();
    		game.state.start('game2');
    	} else {
    		upBetline(betlineOptions);
    		updateBetinfo(game, scorePosions, lines, betline);
    	}
    });
    betone.events.onInputOut.add(function(){
    	betone.loadTexture('betone');
    });


    betmax = game.add.sprite(535,510, 'betmax');
    betmax.scale.setTo(0.7, 0.7);
    betmax.inputEnabled = true;
    betmax.input.useHandCursor = true;
    betmax.events.onInputOver.add(function(){
    	betmax.loadTexture('betmax_p');
    });
    betmax.events.onInputDown.add(function(){
    	if(checkWin == 1){
    		checkWin = 0;
    		hideNumbersAmin();
    		game.state.start('game2');
    	} else {
    		maxBetline();
    		updateBetinfo(game, scorePosions, lines, betline);
            //betMaxSound.play();
          }
        });
    betmax.events.onInputOut.add(function(){
    	betmax.loadTexture('betmax');
    });

    automaricstart = game.add.sprite(685,510, 'automaricstart');
    automaricstart.scale.setTo(0.7, 0.7);
    automaricstart.inputEnabled = true;
    automaricstart.input.useHandCursor = true;
    automaricstart.events.onInputOver.add(function(){
    	if(automaricstart.inputEnabled == true){
    		automaricstart.loadTexture('automaricstart_p');
    	}
    });
    automaricstart.events.onInputOut.add(function(){
    	if(automaricstart.inputEnabled == true){
    		automaricstart.loadTexture('automaricstart');
    	}
    });
    automaricstart.events.onInputDown.add(function(){
        //проверка есть ли выигрышь который нужно забрать и проверка включен ли авто-режим
        //главная проверка на то можно ли включить/выключить автостарт

        if(checkAutoStart == false) {

            checkAutoStart = true; // теперь автостарт нельзя отключить

            if(checkWin == 0) {
            	if(autostart == false){
            		autostart = true;
            		hideLines();
            		requestSpin(gamename, betline, lines, bet, sid);
            	} else {
            		autostart = false;
            	}
            } else {
            	autostart = true;
            	takePrize(game, scorePosions, balanceOld, balance);
            }
          } else {
            //если автостарт работает, то просто включем либо выключаем его как опцию без совершения каких либо других действий
            if(autostart == false){
            	autostart = true;
            } else {
            	autostart = false;
            }
          }
        });

    startButton = game.add.sprite(597, 510, 'startButton');
    startButton.scale.setTo(0.7,0.7);
    startButton.inputEnabled = true;
    startButton.input.useHandCursor = true;
    startButton.events.onInputOver.add(function(){
    	if(startButton.inputEnabled == true) {
    		startButton.loadTexture('startButton_p');
    	}
    });
    startButton.events.onInputOut.add(function(){
    	if(startButton.inputEnabled == true) {
    		startButton.loadTexture('startButton');
    	}
    });
    startButton.events.onInputDown.add(function(){
    	if (settingsMode)  {
    		pageSound.play();
    		for (var i = 1; i <= pageCount; ++i) {
    			pagePaytables[i].visible = false;
    		}            
    		prev_page.visible = false;
    		exit_btn.visible = false;
    		next_page.visible = false;
    		light_settings.visible = false;
    		settingsMode = false;
    		betline1Score.visible = true;
    		betline2Score.visible = true;
    		betScore.visible = true;
    		linesScore.visible = true;
    		balanceScore.visible = true;
    		showButtons([[betmax, 'betmax'], [betone, 'betone'], [automaricstart, 'automaricstart'], [selectGame, 'selectGame'], [payTable, 'payTable'], [buttonLine3, "buttonLine3"], [buttonLine5, "buttonLine5"], [buttonLine7, "buttonLine7"]]);
    	} else {
        if(checkUpdateBalance == false) { //проверка на то идет ли обновление баланса
        	if(checkWin == 0) {
        		hideLines();
        		requestSpin(gamename, betline, lines, bet, sid);
        	} else {
        		takePrize(game, scorePosions, balanceOld, balance);
        	}
        } else {

            //быстрое получение приза

            checkUpdateBalance = false;

            //сопутствующие действия
            showButtons();
            takeWin.stop();
            changeTableTitle('play1To');

            //останавливаем счетчики
            clearInterval(textCounter);
            clearInterval(totalWinRCounter);
            clearInterval(timer);

            //отображаем конечный результат
            balanceScore.visible = false;
            balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], parseInt(balance), {
            	font: scorePosions[2][2]+'px "TeX Gyre Schola Bold"',
            	fill: '#fff567',
            	stroke: '#000000',
            	strokeThickness: 3,
            });

            linesScore.visible = false;
            linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], lines, {
            	font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
            	fill: '#fff567',
            	stroke: '#000000',
            	strokeThickness: 3,
            });

          }
        }

      });

    buttonLine1 = game.add.sprite(260, 510, 'buttonLine1');
    buttonLine1.scale.setTo(0.7,0.7);
    buttonLine1.inputEnabled = true;
    buttonLine1.input.useHandCursor = true;
    buttonLine1.events.onInputOver.add(function(){
    	buttonLine1.loadTexture('buttonLine1_p');
    });
    buttonLine1.events.onInputOut.add(function(){
    	buttonLine1.loadTexture('buttonLine1');
    });
    buttonLine1.events.onInputUp.add(function(){
    	if (settingsMode)  {
    		pageSound.play();
    		if (currentPage == 1)
    			currentPage = pageCount;
    		else{
    			pagePaytables[currentPage].visible = false;
    			currentPage -=1;
    		}
    		pagePaytables[currentPage].visible = true;
    	} else {
    		hideLines();
    		showLines([1]);
    	}
    });
    buttonLine1.events.onInputDown.add(function(){
    	if (!settingsMode)  {
    		soundForBattons[0].play();
    		hideLines();
    		linesArray = [11];
    		showLines(linesArray);

    		hideNumbers();
    		numberArray = [1];
    		showNumbers(numberArray);

    		lines = 1;
    		updateBetinfo(game, scorePosions, lines, betline);
    	}
    });

    buttonLine3 = game.add.sprite(300, 510, 'buttonLine3');
    buttonLine3.scale.setTo(0.7,0.7);
    buttonLine3.inputEnabled = true;
    buttonLine3.input.useHandCursor = true;
    buttonLine3.events.onInputOver.add(function(){
    	buttonLine3.loadTexture('buttonLine3_p');
    });
    buttonLine3.events.onInputOut.add(function(){
    	buttonLine3.loadTexture('buttonLine3');
    });
    buttonLine3.events.onInputUp.add(function(){
    	hideLines();
    	showLines([1, 2, 3]);
    });
    buttonLine3.events.onInputDown.add(function(){
    	soundForBattons[1].play();

    	hideLines();
    	linesArray = [11, 12, 13];
    	showLines(linesArray);

    	hideNumbers();
    	numberArray = [1, 2, 3];
    	showNumbers(numberArray);

    	lines = 3;
    	updateBetinfo(game, scorePosions, lines, betline);
    });

    buttonLine5 = game.add.sprite(340, 510, 'buttonLine5');
    buttonLine5.scale.setTo(0.7,0.7);
    buttonLine5.inputEnabled = true;
    buttonLine5.input.useHandCursor = true;
    buttonLine5.events.onInputOver.add(function(){
    	buttonLine5.loadTexture('buttonLine5_p');
    });
    buttonLine5.events.onInputOut.add(function(){
    	buttonLine5.loadTexture('buttonLine5');
    });
    buttonLine5.events.onInputUp.add(function(){
    	hideLines();
    	showLines([1, 2, 3, 4, 5]);
    });
    buttonLine5.events.onInputDown.add(function(){
    	soundForBattons[2].play();

    	hideLines();
    	linesArray = [11, 12, 13, 14, 15];
    	showLines(linesArray);

    	hideNumbers();
    	numberArray = [1, 2, 3, 4, 5];
    	showNumbers(numberArray);

    	lines = 5;
    	updateBetinfo(game, scorePosions, lines, betline);
    });

    buttonLine7 = game.add.sprite(380, 510, 'buttonLine7');
    buttonLine7.scale.setTo(0.7,0.7);
    buttonLine7.inputEnabled = true;
    buttonLine7.input.useHandCursor = true;
    buttonLine7.events.onInputOver.add(function(){
    	buttonLine7.loadTexture('buttonLine7_p');
    });
    buttonLine7.events.onInputOut.add(function(){
    	buttonLine7.loadTexture('buttonLine7');
    });
    buttonLine7.events.onInputUp.add(function(){
    	hideLines();
    	showLines([1, 2, 3, 4, 5, 6, 7]);
    });
    buttonLine7.events.onInputDown.add(function(){
    	soundForBattons[3].play();

    	hideLines();
    	linesArray = [11, 12, 13, 14, 15, 16, 17];
    	showLines(linesArray);

    	hideNumbers();
    	numberArray = [1, 2, 3, 4, 5, 6, 7];
    	showNumbers(numberArray);

    	lines = 7;
    	updateBetinfo(game, scorePosions, lines, betline);
    });

    buttonLine9 = game.add.sprite(420, 510, 'buttonLine9');
    buttonLine9.scale.setTo(0.7,0.7);
    buttonLine9.inputEnabled = true;
    buttonLine9.input.useHandCursor = true;
    buttonLine9.events.onInputOver.add(function(){
    	buttonLine9.loadTexture('buttonLine9_p');
    });
    buttonLine9.events.onInputOut.add(function(){
    	buttonLine9.loadTexture('buttonLine9');
    });
    buttonLine9.events.onInputUp.add(function(){
    	if (settingsMode)  {
    		pageSound.play();
    		if (currentPage == pageCount){
    			pagePaytables[currentPage].visible = false;
    			currentPage = 1;
    		} else if (currentPage == 1){
    			currentPage +=1;
    		} else {                    
    			pagePaytables[currentPage].visible = false;
    			currentPage +=1;
    		}
    		pagePaytables[currentPage].visible = true;
    	} else {
    		hideLines();
    		showLines([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    	}
    });
    buttonLine9.events.onInputDown.add(function(){
    	if (!settingsMode)  {
    		soundForBattons[4].play();

    		hideLines();
    		linesArray = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    		showLines(linesArray);

    		hideNumbers();
    		numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    		showNumbers(numberArray);

    		lines = 9;
    		updateBetinfo(game, scorePosions, lines, betline);
    	}
    });

  }
  var pagePaytables =[];
  var settingsMode = false;
  var currentPage = null;

  function addPaytable(pageCount, pageCoord, btnCoord){
  	pageSound = game.add.audio('page');
  	for (var i = 1; i <= pageCount; ++i) {
  		pagePaytable = game.add.sprite(pageCoord[i-1][0], pageCoord[i-1][1], 'pagePaytable_' + i);
  		pagePaytable.visible = false;
  		pagePaytables[i] = pagePaytable;
  	}

  	prev_page = game.add.sprite(btnCoord[0][0], btnCoord[0][1], 'prev_page');
  	prev_page.visible = false;
  	prev_page.inputEnabled = true;
  	prev_page.input.useHandCursor = true;
  	prev_page.events.onInputUp.add(function(){
  		if (settingsMode)  {
  			pageSound.play();
  			if (currentPage == 1)
  				currentPage = pageCount;
  			else{
  				pagePaytables[currentPage].visible = false;
  				currentPage -=1;
  			}
  		}
  		pagePaytables[currentPage].visible = true;
  	});
  	exit_btn = game.add.sprite(btnCoord[1][0], btnCoord[1][1], 'exit_btn');
  	exit_btn.visible = false;
  	exit_btn.inputEnabled = true;
  	exit_btn.input.useHandCursor = true;
  	exit_btn.events.onInputUp.add(function(){
  		pageSound.play();
  		for (var i = 1; i <= pageCount; ++i) {
  			pagePaytables[i].visible = false;
  		}            
  		prev_page.visible = false;
  		exit_btn.visible = false;
  		next_page.visible = false;
  		light_settings.visible = false;
  		settingsMode = false;
  		betline1Score.visible = true;
  		betline2Score.visible = true;
  		betScore.visible = true;
  		linesScore.visible = true;
  		balanceScore.visible = true;
  		showButtons([[betmax, 'betmax'], [betone, 'betone'], [automaricstart, 'automaricstart'], [selectGame, 'selectGame'], [payTable, 'payTable'], [buttonLine3, "buttonLine3"], [buttonLine5, "buttonLine5"], [buttonLine7, "buttonLine7"]]);
  	});
  	next_page = game.add.sprite(btnCoord[2][0], btnCoord[2][1], 'next_page');
  	next_page.visible = false;
  	next_page.inputEnabled = true;
  	next_page.input.useHandCursor = true;
  	next_page.events.onInputUp.add(function(){
  		if (settingsMode)  {
  			pageSound.play();
  			if (currentPage == pageCount){
  				pagePaytables[currentPage].visible = false;
  				currentPage = 1;
  			} else if (currentPage == 1){
  				currentPage +=1;
  			} else {                    
  				pagePaytables[currentPage].visible = false;
  				currentPage +=1;
  			}
  		}
  		pagePaytables[currentPage].visible = true;
  	});
  };

//кнопки для карт
function addButtonsGame2(game) {

	var soundForBattons = [];

    // кнопки
    selectGame = game.add.sprite(70,510, 'selectGame_d');
    selectGame.scale.setTo(0.7, 0.7);
    selectGame.inputEnabled = false;

    payTable = game.add.sprite(150,510, 'payTable_d');
    payTable.scale.setTo(0.7, 0.7);
    payTable.inputEnabled = false;

    betone = game.add.sprite(490,510, 'betone_d');
    betone.scale.setTo(0.7, 0.7);
    betone.inputEnabled = false;


    betmax = game.add.sprite(535,510, 'betmax_d');
    betmax.scale.setTo(0.7, 0.7);
    betmax.inputEnabled = false;

    automaricstart = game.add.sprite(685,510, 'automaricstart_d');
    automaricstart.scale.setTo(0.7, 0.7);
    automaricstart.inputEnabled = false;

    startButton = game.add.sprite(597, 510, 'startButton');
    startButton.scale.setTo(0.7,0.7);
    startButton.inputEnabled = true;
    startButton.input.useHandCursor = true;
    startButton.events.onInputOver.add(function(){
    	startButton.loadTexture('startButton_p');
    });
    startButton.events.onInputOut.add(function(){
    	startButton.loadTexture('startButton');
    });
    startButton.events.onInputDown.add(function(){
    	hideDoubleToAndTakeOrRiskTexts();
    	game.state.start('game1');
    });

    buttonLine1 = game.add.sprite(260, 510, 'buttonLine1_d');
    buttonLine1.scale.setTo(0.7,0.7);
    buttonLine1.inputEnabled = false;

    buttonLine3 = game.add.sprite(300, 510, 'buttonLine3');
    buttonLine3.scale.setTo(0.7,0.7);
    buttonLine3.inputEnabled = true;
    buttonLine3.input.useHandCursor = true;
    buttonLine3.events.onInputOver.add(function(){
    	buttonLine3.loadTexture('buttonLine3_p');
    });
    buttonLine3.events.onInputOut.add(function(){
    	buttonLine3.loadTexture('buttonLine3');
    });
    buttonLine3.events.onInputDown.add(function(){
    	requestDouble(gamename, 1, lines, bet, sid);
    });

    buttonLine5 = game.add.sprite(340, 510, 'buttonLine5');
    buttonLine5.scale.setTo(0.7,0.7);
    buttonLine5.inputEnabled = true;
    buttonLine5.input.useHandCursor = true;
    buttonLine5.events.onInputOver.add(function(){
    	buttonLine5.loadTexture('buttonLine5_p');
    });
    buttonLine5.events.onInputOut.add(function(){
    	buttonLine5.loadTexture('buttonLine5');
    });
    buttonLine5.events.onInputDown.add(function(){
    	requestDouble(gamename, 2, lines, bet, sid);
    });

    buttonLine7 = game.add.sprite(380, 510, 'buttonLine7');
    buttonLine7.scale.setTo(0.7,0.7);
    buttonLine7.inputEnabled = true;
    buttonLine7.input.useHandCursor = true;
    buttonLine7.events.onInputOver.add(function(){
    	buttonLine7.loadTexture('buttonLine7_p');
    });
    buttonLine7.events.onInputOut.add(function(){
    	buttonLine7.loadTexture('buttonLine7');
    });
    buttonLine7.events.onInputDown.add(function(){
    	requestDouble(gamename, 3, lines, bet, sid);
    });

    buttonLine9 = game.add.sprite(420, 510, 'buttonLine9');
    buttonLine9.scale.setTo(0.7,0.7);
    buttonLine9.inputEnabled = true;
    buttonLine9.input.useHandCursor = true;
    buttonLine9.events.onInputOver.add(function(){
    	buttonLine9.loadTexture('buttonLine9_p');
    });
    buttonLine9.events.onInputOut.add(function(){
    	buttonLine9.loadTexture('buttonLine9');
    });
    buttonLine9.events.onInputDown.add(function(){
    	requestDouble(gamename, 4, lines, bet, sid);
    });

  }

//TODO: действия при нажатии некоторых кнопок нужно задать в самой игре
//кнопки для игры с последовательным выбором
function addButtonsGame3(game) {

    // кнопки
    selectGame = game.add.sprite(70,510, 'selectGame_d');
    selectGame.scale.setTo(0.7, 0.7);
    selectGame.inputEnabled = false;

    payTable = game.add.sprite(150,510, 'payTable_d');
    payTable.scale.setTo(0.7, 0.7);
    payTable.inputEnabled = false;

    betone = game.add.sprite(490,510, 'betone_d');
    betone.scale.setTo(0.7, 0.7);
    betone.inputEnabled = false;


    betmax = game.add.sprite(535,510, 'betmax_d');
    betmax.scale.setTo(0.7, 0.7);
    betmax.inputEnabled = false;

    automaricstart = game.add.sprite(685,510, 'automaricstart_d');
    automaricstart.scale.setTo(0.7, 0.7);
    automaricstart.inputEnabled = false;

    startButton = game.add.sprite(597, 510, 'startButton_d');
    startButton.scale.setTo(0.7,0.7);
    startButton.inputEnabled = false;

    buttonLine1 = game.add.sprite(260, 510, 'buttonLine1');
    buttonLine1.scale.setTo(0.7,0.7);
    buttonLine1.inputEnabled = true;
    buttonLine1.input.useHandCursor = true;
    buttonLine1.events.onInputOver.add(function(){
    	buttonLine1.loadTexture('buttonLine1_p');
    });
    buttonLine1.events.onInputOut.add(function(){
    	buttonLine1.loadTexture('buttonLine1');
    });
    /*buttonLine1.events.onInputDown.add(function(){

    });*/

    buttonLine3 = game.add.sprite(300, 510, 'buttonLine3');
    buttonLine3.scale.setTo(0.7,0.7);
    buttonLine3.inputEnabled = true;
    buttonLine3.input.useHandCursor = true;
    buttonLine3.events.onInputOver.add(function(){
    	buttonLine3.loadTexture('buttonLine3_p');
    });
    buttonLine3.events.onInputOut.add(function(){
    	buttonLine3.loadTexture('buttonLine3');
    });
    /*buttonLine3.events.onInputDown.add(function(){

    });*/

    buttonLine5 = game.add.sprite(340, 510, 'buttonLine5');
    buttonLine5.scale.setTo(0.7,0.7);
    buttonLine5.inputEnabled = true;
    buttonLine5.input.useHandCursor = true;
    buttonLine5.events.onInputOver.add(function(){
    	buttonLine5.loadTexture('buttonLine5_p');
    });
    buttonLine5.events.onInputOut.add(function(){
    	buttonLine5.loadTexture('buttonLine5');
    });
    /*buttonLine5.events.onInputDown.add(function(){

    });*/

    buttonLine7 = game.add.sprite(380, 510, 'buttonLine7');
    buttonLine7.scale.setTo(0.7,0.7);
    buttonLine7.inputEnabled = true;
    buttonLine7.input.useHandCursor = true;
    buttonLine7.events.onInputOver.add(function(){
    	buttonLine7.loadTexture('buttonLine7_p');
    });
    buttonLine7.events.onInputOut.add(function(){
    	buttonLine7.loadTexture('buttonLine7');
    });
    /*buttonLine7.events.onInputDown.add(function(){

    });*/

    buttonLine9 = game.add.sprite(420, 510, 'buttonLine9');
    buttonLine9.scale.setTo(0.7,0.7);
    buttonLine9.inputEnabled = true;
    buttonLine9.input.useHandCursor = true;
    buttonLine9.events.onInputOver.add(function(){
    	buttonLine9.loadTexture('buttonLine9_p');
    });
    buttonLine9.events.onInputOut.add(function(){
    	buttonLine9.loadTexture('buttonLine9');
    });
    /*buttonLine9.events.onInputDown.add(function(){

    });*/

  }

//var buttonsArray = [[selectGame,'selectGame'], [... , ...]]; - в массиве перечисляется название кнопок

//слоты и их вращение

//переменные содержащие все объекты слотов
var slot1; var slot2; var slot3;  var slot4; var slot5; var slot6; var slot7; var slot8; var slot9; var slot10; var slot11; var slot12; var slot13; var slot14; var slot15;
var slot1Anim; var slot2Anim; var slot3Anim;  var slot4Anim; var slot5Anim; var slot6Anim; var slot7Anim; var slot8Anim; var slot9Anim; var slot10Anim; var slot11Anim; var slot12Anim; var slot13Anim; var slot14Anim; var slot15Anim;

function addSlots(game, slotPosition) {
    //slotValueNames - названия изображений слотов; slotCellAnimName - название спрайта анимации кручения
    var slotValueNames = ['cell0', 'cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8', 'cell9', 'cell10', 'cell11'];
    var slotCellAnimName = 'cellAnim';

    slot1 = game.add.sprite(slotPosition[0][0],slotPosition[0][1], slotValueNames[0]);
    slot2 = game.add.sprite(slotPosition[1][0],slotPosition[1][1], slotValueNames[1]);
    slot3 = game.add.sprite(slotPosition[2][0],slotPosition[2][1], slotValueNames[3]);
    slot4 = game.add.sprite(slotPosition[3][0],slotPosition[3][1], slotValueNames[4]);
    slot5 = game.add.sprite(slotPosition[4][0],slotPosition[4][1], slotValueNames[7]);
    slot6 = game.add.sprite(slotPosition[5][0],slotPosition[5][1], slotValueNames[2]);
    slot7 = game.add.sprite(slotPosition[6][0],slotPosition[6][1], slotValueNames[4]);
    slot8 = game.add.sprite(slotPosition[7][0],slotPosition[7][1], slotValueNames[3]);
    slot9 = game.add.sprite(slotPosition[8][0],slotPosition[8][1], slotValueNames[8]);
    slot10 = game.add.sprite(slotPosition[9][0],slotPosition[0][1], slotValueNames[9]);
    slot11 = game.add.sprite(slotPosition[10][0],slotPosition[10][1], slotValueNames[10]);
    slot12 = game.add.sprite(slotPosition[11][0],slotPosition[11][1], slotValueNames[11]);
    slot13 = game.add.sprite(slotPosition[12][0],slotPosition[12][1], slotValueNames[5]);
    slot14 = game.add.sprite(slotPosition[13][0],slotPosition[13][1], slotValueNames[3]);
    slot15 = game.add.sprite(slotPosition[14][0],slotPosition[14][1], slotValueNames[5]);

    slot1Anim = game.add.sprite(slotPosition[0][0],slotPosition[0][1], slotCellAnimName);
    slot2Anim = game.add.sprite(slotPosition[1][0],slotPosition[1][1], slotCellAnimName);
    slot3Anim = game.add.sprite(slotPosition[2][0],slotPosition[2][1], slotCellAnimName);
    slot4Anim = game.add.sprite(slotPosition[3][0],slotPosition[3][1], slotCellAnimName);
    slot5Anim = game.add.sprite(slotPosition[4][0],slotPosition[4][1], slotCellAnimName);
    slot6Anim = game.add.sprite(slotPosition[5][0],slotPosition[5][1], slotCellAnimName);
    slot7Anim = game.add.sprite(slotPosition[6][0],slotPosition[6][1], slotCellAnimName);
    slot8Anim = game.add.sprite(slotPosition[7][0],slotPosition[7][1], slotCellAnimName);
    slot9Anim = game.add.sprite(slotPosition[8][0],slotPosition[8][1], slotCellAnimName);
    slot10Anim = game.add.sprite(slotPosition[9][0],slotPosition[0][1], slotCellAnimName);
    slot11Anim = game.add.sprite(slotPosition[10][0],slotPosition[10][1], slotCellAnimName);
    slot12Anim = game.add.sprite(slotPosition[11][0],slotPosition[11][1], slotCellAnimName);
    slot13Anim = game.add.sprite(slotPosition[12][0],slotPosition[12][1], slotCellAnimName);
    slot14Anim = game.add.sprite(slotPosition[13][0],slotPosition[13][1], slotCellAnimName);
    slot15Anim = game.add.sprite(slotPosition[14][0],slotPosition[14][1], slotCellAnimName);

    slot1Anim.animations.add('slot1Anim', [0,1,2,3,4,5,6,7,8], 20, true);
    slot2Anim.animations.add('slot2Anim', [1,2,3,4,5,6,7,8,0], 20, true);
    slot3Anim.animations.add('slot3Anim', [2,3,4,5,6,7,8,0,1], 20, true);
    slot4Anim.animations.add('slot4Anim', [3,4,5,6,7,8,0,1,2], 20, true);
    slot5Anim.animations.add('slot5Anim', [4,5,6,7,8,0,1,2,3], 20, true);
    slot6Anim.animations.add('slot6Anim', [5,6,7,8,0,1,2,3,4], 20, true);
    slot7Anim.animations.add('slot7Anim', [6,7,8,0,1,2,3,4,5], 20, true);
    slot8Anim.animations.add('slot8Anim', [7,8,0,1,2,3,4,5,6], 20, true);
    slot9Anim.animations.add('slot9Anim', [8,0,1,2,3,4,5,6,7], 20, true);
    slot10Anim.animations.add('slot10Anim', [0,1,2,3,4,5,6,7,8], 20, true);
    slot11Anim.animations.add('slot11Anim', [1,2,3,4,5,6,7,8,0], 20, true);
    slot12Anim.animations.add('slot12Anim', [2,3,4,5,6,7,8,0,1], 20, true);
    slot13Anim.animations.add('slot13Anim', [3,4,5,6,7,8,0,1,2], 20, true);
    slot14Anim.animations.add('slot14Anim', [4,5,6,7,8,0,1,2,3], 20, true);
    slot15Anim.animations.add('slot15Anim', [7,8,0,1,2,3,4,5,6], 20, true);

    slot1Anim.animations.getAnimation('slot1Anim').play();
    slot2Anim.animations.getAnimation('slot2Anim').play();
    slot3Anim.animations.getAnimation('slot3Anim').play();
    slot4Anim.animations.getAnimation('slot4Anim').play();
    slot5Anim.animations.getAnimation('slot5Anim').play();
    slot6Anim.animations.getAnimation('slot6Anim').play();
    slot7Anim.animations.getAnimation('slot7Anim').play();
    slot8Anim.animations.getAnimation('slot8Anim').play();
    slot9Anim.animations.getAnimation('slot9Anim').play();
    slot10Anim.animations.getAnimation('slot10Anim').play();
    slot11Anim.animations.getAnimation('slot11Anim').play();
    slot12Anim.animations.getAnimation('slot12Anim').play();
    slot13Anim.animations.getAnimation('slot13Anim').play();
    slot14Anim.animations.getAnimation('slot14Anim').play();
    slot15Anim.animations.getAnimation('slot15Anim').play();

    slot1Anim.visible = false;
    slot2Anim.visible = false;
    slot3Anim.visible = false;
    slot4Anim.visible = false;
    slot5Anim.visible = false;
    slot6Anim.visible = false;
    slot7Anim.visible = false;
    slot8Anim.visible = false;
    slot9Anim.visible = false;
    slot10Anim.visible = false;
    slot11Anim.visible = false;
    slot12Anim.visible = false;
    slot13Anim.visible = false;
    slot14Anim.visible = false;
    slot15Anim.visible = false;
  }

var finalValues; var wlValues; var balanceR; var totalWin; var totalWinR; var dcard; var linesR; var betlineR; //totalWin - общая сумма выигрыша посчитанная из разноности балансов до и полсе запроса. totalWinR - полученный из ответа (аналогично linesR и betlineR)
var checkRopeGame = 0; var checkRopeGameAnim = 0; var ropeValues; var ropeStep = 0;
var monkeyCell = []; // массив содержащий номера ячеек, в которых выпали обезьяны
var autostart = false; var checkAutoStart = false; var checkUpdateBalance = false;

var timer;
function showSpinResult(checkWin, checkRopeGame, wlValues) {
	if(checkRopeGame == 1) {

		hideButtons();

		checkRopeGameAnim = 1;

		var gnomeWin = game.add.audio('gnomeWin');
		gnomeWin.play();

		showSelectionOfTheManyCellAnim(game, slotPosition, monkeyCell);

		setTimeout("checkRopeGame = 0; checkRopeGameAnim = 0; game.state.start('game3');", 5500);
	} else if(checkWin == 1) {

        topBarImage.loadTexture('topScoreGame2'); //заменяем в topBar line play на win

        hideTableTitle();

        var soundWinLines = []; // массив для объектов звуков
        soundWinLines[0] = game.add.audio('soundWinLine1');
        soundWinLines[1] = game.add.audio('soundWinLine2');
        soundWinLines[2] = game.add.audio('soundWinLine3');
        soundWinLines[3] = game.add.audio('soundWinLine4');
        soundWinLines[4] = game.add.audio('soundWinLine5');
        soundWinLines[5] = game.add.audio('soundWinLine6');
        soundWinLines[6] = game.add.audio('soundWinLine7');
        soundWinLines[7] = game.add.audio('soundWinLine8');

        var soundWinLinesCounter = 0; // счетчик для звуков озвучивающих выигрышные линии

        var wlWinValuesArray = [];

        wlValues.forEach(function (line, i) {
        	if(line > 0) {
        		wlWinValuesArray.push(i+1);
        	}
        });

        stepTotalWinR = 0; // число в которое сумируются значения из wl (из выигрышных линий)
        var currentIndex = -1;

        timer = setInterval(function() {
        	if(++currentIndex > (wlWinValuesArray.length - 1)) {
        		if(!isMobile) {
        			showButtons([[startButton, 'startButton'], [betmax, 'betmax'], [betone, 'betone'], [payTable, 'payTable']]);
        		} else {
        			showButtons([[startButton], [home], [gear], [dollar], [double]]);
        		}

        		hideNumberWinLine();

        		showNumbersAmin(wlWinValuesArray);
        		changeTableTitle('takeOrRisk1');

        		clearInterval(timer);

        		if(autostart == true){
        			takePrize(game, scorePosions, balanceOld, balance);
        		} else {
        			checkAutoStart = false;
        		}
        	} else {
        		stepTotalWinR += parseInt(wlValues[wlWinValuesArray[currentIndex] - 1]);
        		showStepTotalWinR(game, scorePosions, parseInt(stepTotalWinR));
                //TODO: не получилось обстрагировать координаты для текста выводящего номера выигрышных линий
                if(isMobile) {
                	showNumberWinLine(game, wlWinValuesArray[currentIndex], 356-mobileX, 358-mobileY);
                } else {
                	showNumberWinLine(game, wlWinValuesArray[currentIndex], 356, 358);
                }
                soundWinLines[soundWinLinesCounter].play();
                soundWinLinesCounter += 1;
                showLines([wlWinValuesArray[currentIndex]]);
              }
            }, 500);

      } else {
      	if(autostart == true){
      		updateBalance(game, scorePosions, balanceOld, balance);
      		hideLines();
      		requestSpin(gamename, betline, lines, bet, sid);
      	} else {
      		changeTableTitle('play1To');
      		updateBalance(game, scorePosions, balanceOld, balance);
      		if(isMobile){
      			showButtons([[startButton], [home], [gear], [dollar], [bet1]]);
      		} else {
      			showButtons();
      		}
      		checkAutoStart = false;
      	}
      }

    }


//запрос для слотов
var balanceOld;
var dataSpinRequest; // данные полученны из запроса

//анимации связаные с выпадением бонусной игры с последовательным выбором
var manyCellAnim = [];
var slotPosition;
function addSelectionOfTheManyCellAnim(game, slotPosition) {
	for (var i = 0; i < 15; i++){
		manyCellAnim[i] = game.add.sprite(slotPosition[i][0],slotPosition[i][1], 'selectionOfTheManyCellAnim');
		manyCellAnim[i].animations.add('selectionOfTheManyCellAnim', [0,1,2], 8, true);
	}
}

function showSelectionOfTheManyCellAnim(game, slotPosition, monkeyCell) {
	monkeyCell.forEach(function (item) {
		manyCellAnim[item] = game.add.sprite(slotPosition[item][0],slotPosition[item][1], 'selectionOfTheManyCellAnim');
		manyCellAnim[item].animations.add('selectionOfTheManyCellAnim', [0,1,2], 8, true);
		manyCellAnim[item].animations.getAnimation('selectionOfTheManyCellAnim').play();
	});
}

function hideSelectionOfTheManyCellAnim(monkeyCell) {
	monkeyCell.forEach(function (item) {
		manyCellAnim[item].visible = false;
	});
}

var checkRotaion = false;
function slotRotation(game, finalValues) {
	checkRotaion = true;

	changeTableTitle('bonusGame');

	var rotateSound = game.add.audio('rotateSound');
	rotateSound.loop = true;
	var stopSound = game.add.audio('stopSound');


	gear2Animation.play();
	balanceScore.visible = false;
	balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], balanceR, {
		font: scorePosions[2][2]+'px "TeX Gyre Schola Bold"',
		fill: '#fff567',
		stroke: '#000000',
		strokeThickness: 3,
	});

	rotateSound.play();

	slot1Anim.visible = true;
	slot2Anim.visible = true;
	slot3Anim.visible = true;
	slot4Anim.visible = true;
	slot5Anim.visible = true;
	slot6Anim.visible = true;
	slot7Anim.visible = true;
	slot8Anim.visible = true;
	slot9Anim.visible = true;
	slot10Anim.visible = true;
	slot11Anim.visible = true;
	slot12Anim.visible = true;
	slot13Anim.visible = true;
	slot14Anim.visible = true;
	slot15Anim.visible = true;

	setTimeout(function() {
		stopSound.play();

		slot1Anim.visible = false;
		slot2Anim.visible = false;
		slot3Anim.visible = false;

		slot1.loadTexture('cell'+finalValues[0]);
		slot2.loadTexture('cell'+finalValues[1]);
		slot3.loadTexture('cell'+finalValues[2]);
	}, 1000);

	setTimeout(function() {
		stopSound.play();

		slot4Anim.visible = false;
		slot5Anim.visible = false;
		slot6Anim.visible = false;

		slot4.loadTexture('cell'+finalValues[3]);
		slot5.loadTexture('cell'+finalValues[4]);
		slot6.loadTexture('cell'+finalValues[5]);
	}, 1200);

	setTimeout(function() {
		stopSound.play();

		slot7Anim.visible = false;
		slot8Anim.visible = false;
		slot9Anim.visible = false;

		slot7.loadTexture('cell'+finalValues[6]);
		slot8.loadTexture('cell'+finalValues[7]);
		slot9.loadTexture('cell'+finalValues[8]);
	}, 1400);

	setTimeout(function() {
		stopSound.play();

		slot10Anim.visible = false;
		slot11Anim.visible = false;
		slot12Anim.visible = false;

		slot10.loadTexture('cell'+finalValues[9]);
		slot11.loadTexture('cell'+finalValues[10]);
		slot12.loadTexture('cell'+finalValues[11]);
	}, 1600);

	setTimeout(function() {
		stopSound.play();

		slot13Anim.visible = false;
		slot14Anim.visible = false;
		slot15Anim.visible = false;

		slot13.loadTexture('cell'+finalValues[12]);
		slot14.loadTexture('cell'+finalValues[13]);
		slot15.loadTexture('cell'+finalValues[14]);
	}, 1800);

    // итоговые действия
    setTimeout(function() {
    	rotateSound.stop();
    	checkRotaion = false;
    	gear2Animation.stop();
    	showSpinResult(checkWin, checkRopeGame, wlValues);
    }, 1800);
  }

  var checkWin = 0;
  function checkSpinResult(totalWinR) {
  	if (totalWinR > 0) {
  		checkWin = 1;
  	} else {
  		checkWin = 0;
  	}
  }

  function takePrize(game, scorePosions, balanceOld, balance) {
  	changeTableTitle('take');
  	hideButtons();

  	hideNumbersAmin();
  	hideLines();

  	updateBalance(game, scorePosions, balanceOld, balance);
  	updateTotalWinR(game, scorePosions, totalWinR);
  }

//вывод информации в табло
var tableTitle; // название изображения заданное в прелодере
function addTableTitle(game, loadTexture, x,y) {
	tableTitle = game.add.sprite(x,y, loadTexture);
}

function changeTableTitle(loadTexture) {
	tableTitle.visible = true;
	tableTitle.loadTexture(loadTexture);
}

function hideTableTitle() {
	tableTitle.visible = false;
}

var winLineText;
function showNumberWinLine(game, winLine, x,y) {
	if(typeof(winLineText) != "undefined") {
		winLineText.visible = false;
	}

	winLineText = game.add.text(x, y, 'win line: '+winLine, {
		font: '24px "TeX Gyre Schola Bold"',
		fill: '#fff567',
		stroke: '#000000',
		strokeThickness: 3,
	});
}

function hideNumberWinLine() {
	winLineText.visible = false;
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


// ajax-запросы

//init-запрос
var sessionName;
function requestInit() {
	$.ajax({
		type: "get",
		url: getNeedUrlPath() +'/init',
		dataType: 'html',
		success: function (data) {
        	// data = "result=ok&state=0&SID=aeea5r0ai19oht0rvj3c5dd2p2&user=1271|user1271|1000.00";
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
			console.log(data);
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
var jackpots;
var firstRequest = false;
var preloaderStatus = false;
function requestState() {
	$.ajax({
		type: "get",
		url: getNeedUrlPath() +'/state?sessionName='+sessionName,
		dataType: 'html',
		success: function (data) {
			// data = "result=ok&state=0&min=1&id=user1271&balance=1000.00&extralife=45&jackpots=10|50|250|500"
			dataArray = JSON.parse(data);
			console.log(data);
			game1();
			game2();
			if(dataArray['state']) {
				firstRequest = true;
				if(preloaderStatus){
					document.getElementById('preloader').style.display = 'none';
					game.state.start('game1');	
				}
				balance = dataArray['balance'];
				// info = dataArray['info'];
        // game.state.start('gamePreload'); //начало игры с локации загрузчика
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


//функции отображения цифр

var betScore;
var linesScore;
var balanceScore;
var betline1Score;
var betline2Score;
var riskStep;

var checkGame = 0; // индикатор текущего экрана (текущей игры). Нужен для корректной обработки и вывода некоторых данных

//var scorePosions = [[x,y, px], [x,y, px] ...]; - массив, в котором в порядке определенном выше идут координаты цифр
// для игры с картами betline содержит номер попытки
var scorePosions;
function addScore(game, scorePosions, bet, lines, balance, betline) {
	betScore = game.add.text(scorePosions[0][0], scorePosions[0][1], bet, {
		font: scorePosions[0][2]+'px "TeX Gyre Schola Bold"',
		fill: '#fff567',
		stroke: '#000000',
		strokeThickness: 3,
	});

	linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], lines, {
		font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
		fill: '#fff567',
		stroke: '#000000',
		strokeThickness: 3,
	});

	balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], balance, {
		font: scorePosions[2][2]+'px "TeX Gyre Schola Bold"',
		fill: '#fff567',
		stroke: '#000000',
		strokeThickness: 3,
	});

	if(checkGame == 1){
		betline1Score = game.add.text(scorePosions[3][0], scorePosions[3][1], betline, {
			font: scorePosions[3][2]+'px "Arial Black"',
			fill: '#ffff00',
			stroke: '#000000',
			strokeThickness: 3,
		});

		betline2Score = game.add.text(scorePosions[4][0], scorePosions[4][1], betline, {
			font: scorePosions[4][2]+'px "Arial Black"',
			fill: '#ffff00',
			stroke: '#000000',
			strokeThickness: 3,
		});
	}

	if(checkGame == 2){
		riskStep = game.add.text(scorePosions[3][0], scorePosions[3][1], betline, {
			font: scorePosions[3][2]+'px "TeX Gyre Schola Bold"',
			fill: '#fff567',
			stroke: '#000000',
			strokeThickness: 3,
		});
	}
}

var takeWin;
var textCounter;
var topBarImage;
var ActionsAfterUpdatingBalance; //задаем таймер, который останавливаем в случае если игрок решил не дожидаться окончания анимации
function updateBalance(game, scorePosions, balanceR, balance) {
	if(checkWin == 0){
		balanceScore.visible = false;
		balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], balance, {
			font: scorePosions[2][2]+'px "TeX Gyre Schola Bold"',
			fill: '#fff567',
			stroke: '#000000',
			strokeThickness: 3,
		});

	} else {

		if(autostart == false) {
			checkUpdateBalance = true;
			showButtons([[startButton, 'startButton']]);
		}

		balanceScore.visible = false;

		takeWin = game.add.audio('takeWin');
        //takeWin.addMarker('take', 0, 0.6);
        takeWin.loop = true;
        takeWin.play();

        if(totalWinR > 100){
        	var interval = 5;
        } else {
        	var interval = 50;
        }

        var timeInterval = parseInt(interval)*parseInt(totalWinR);

        var currentBalanceDifference = 0;

        textCounter = setInterval(function () {

        	currentBalanceDifference += 1;

        	balanceScore.visible = false;
        	balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], parseInt(+balanceR-betline*lines) + parseInt(currentBalanceDifference), {
        		font: scorePosions[2][2]+'px "TeX Gyre Schola Bold"',
        		fill: '#fff567',
        		stroke: '#000000',
        		strokeThickness: 3,
        	});
        }, interval);

        ActionsAfterUpdatingBalance = setTimeout(function() {
            if(checkRotaion == false) { //проверка крутятся ли слоты, чтобы не появялись в случае быстрых нажатий кнопки страт все кнопки в неположенное время
            	showButtons();
            	takeWin.stop();
            	changeTableTitle('play1To');
            	clearInterval(textCounter);

                topBarImage.loadTexture('topScoreGame1'); //убираем win из topBar

                if(autostart == true) {
                    //для исправления ошибки в единицу, которая появляется рандомно
                    balanceScore.visible = false;
                    balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], parseInt(balance), {
                    	font: scorePosions[2][2]+'px "TeX Gyre Schola Bold"',
                    	fill: '#fff567',
                    	stroke: '#000000',
                    	strokeThickness: 3,
                    });

                    hideLines();
                    setTimeout(requestSpin, 1000, gamename, betline, lines, bet, sid);
                  } else {
                  	checkUpdateBalance = false;

                    //для исправления ошибки в единицу, которая появляется рандомно
                    balanceScore.visible = false;
                    balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], parseInt(balance), {
                    	font: scorePosions[2][2]+'px "TeX Gyre Schola Bold"',
                    	fill: '#fff567',
                    	stroke: '#000000',
                    	strokeThickness: 3,
                    });

                    hideLines();
                    checkAutoStart = false;
                  }
                }

              }, timeInterval);

        checkWin = 0;
      }
    }

    var totalWinRCounter;
    function updateTotalWinR(game, scorePosions, totalWinR) {

    //обновление totalWin в cлотах при забирании выигрыша
    if(totalWinR > 100){
    	var interval = 5;
    } else {
    	var interval = 50;
    }

    var difference = parseInt(totalWinR);

    //значение totalWinR уменьшается
    var timeInterval = parseInt(interval*difference);
    var mark = -1;

    var currentDifference = 0;

    totalWinRCounter = setInterval(function () {

    	currentDifference += 1*mark;

    	linesScore.visible = false;
    	linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], parseInt(totalWinR) + parseInt(currentDifference), {
    		font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
    		fill: '#fff567',
    		stroke: '#000000',
    		strokeThickness: 3,
    	});
    }, interval);

    setTimeout(function() {
    	hideStepTotalWinR(game, scorePosions, lines);
    	clearInterval(totalWinRCounter);
    }, timeInterval);
  }

  var stepTotalWinR = 0;
  function showStepTotalWinR(game, scorePosions, stepTotalWinR) {
  	linesScore.visible = false;
  	linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], stepTotalWinR, {
  		font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
  		fill: '#fff567',
  		stroke: '#000000',
  		strokeThickness: 3,
  	});
  }

  function hideStepTotalWinR(game, scorePosions, lines) {
  	linesScore.visible = false;
  	linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], lines, {
  		font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
  		fill: '#fff567',
  		stroke: '#000000',
  		strokeThickness: 3,
  	});
  }

  function updateBetinfo(game, scorePosions, lines, betline) {
  	betScore.visible = false;
  	linesScore.visible = false;
  	betline1Score.visible = false;
  	betline2Score.visible = false;

  	bet = lines*betline;
  	betScore = game.add.text(scorePosions[0][0], scorePosions[0][1], bet, {
  		font: scorePosions[0][2]+'px "TeX Gyre Schola Bold"',
  		fill: '#fff567',
  		stroke: '#000000',
  		strokeThickness: 3,
  	});

  	linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], lines, {
  		font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
  		fill: '#fff567',
  		stroke: '#000000',
  		strokeThickness: 3,
  	});

  	betline1Score = game.add.text(scorePosions[3][0], scorePosions[3][1], betline, {
  		font: scorePosions[3][2]+'px "TeX Gyre Schola Bold"',
  		fill: '#fff567',
  		stroke: '#000000',
  		strokeThickness: 3,
  	});

  	betline2Score = game.add.text(scorePosions[4][0], scorePosions[4][1], betline, {
  		font: scorePosions[4][2]+'px "TeX Gyre Schola Bold"',
  		fill: '#fff567',
  		stroke: '#000000',
  		strokeThickness: 3,
  	});
  }



// функции пересчета цифр

//пересчет ставки на линию
var betlineOptions = [1, 2, 3, 4, 5, 10, 15, 20, 25];
var betlineCounter = 0;
function upBetline() {
	if(betlineCounter < (betlineOptions.length-1)) {
		betlineCounter += 1;
		betline = betlineOptions[betlineCounter];
	} else {
		betlineCounter = 0;
		betline = betlineOptions[betlineCounter];
	}
}

function maxBetline() {
	betlineCounter = betlineOptions.length - 1;
	betline = betlineOptions[betlineOptions.length - 1];
}



//функции для игры с картами

var dataDoubleRequest; var selectedCard;
function requestDouble(gamename, selectedCard, lines, bet, sid) {
	hideButtons([[startButton, 'startButton']]);
	disableInputCards();
	lockDisplay();
    // $.ajax({
    //     type: "POST",
    //     // url: 'http://api.gmloto.ru/index.php?action=double&min='+min+'&betline='+selectedCard+'&lines='+lines+'&bet='+bet+'&game='+gamename+'&SID='+sid,
    //     url: 'http://gnome/test.php',
    //     dataType: 'html',
    //     success: function (data) {
    	data = 'result=ok&info=|40|29|30|31|7&dwin=40&balance=100004.00&dcard2=1&select=3&jackpots=1826.60|4126.60|6126.60';

    	dataDoubleRequest = data.split('&');
    	parseDoubleAnswer(dataDoubleRequest);

    //     },
    //     error: function (xhr, ajaxOptions, thrownError) {
    //         var errorText = '//ошибка error|Ошибка! Ваш баланс ($user_balance) недостаточен для игры. Пополните счёт. | index.php?GE=enter';
    //         alert(errorText);
    //     }
    // });
  }

  var dwin; var dcard2; var selectedCardR;
  function parseDoubleAnswer(dataDoubleRequest) {
  	if (find(dataDoubleRequest, 'result=ok') != -1 && find(dataDoubleRequest, 'state=0') != -1) {

  		dataDoubleRequest.forEach(function (item) {
  			if (item.indexOf('dwin=') + 1) {
  				dwin = item.replace('dwin=', '');
                totalWin = dwin; // изменяем для последующего использования dwin из ответа для вывода dwin
              }
              if (item.indexOf('balance=') + 1) {
              	balance = item.replace('balance=', '').replace('.00','');
              }
              if (item.indexOf('dcard2=') + 1) {
              	dcard2 = item.replace('dcard2=', '');
              	dcard = dcard2;
              }
              if (item.indexOf('info=') + 1) {
              	var cellValuesString = item.replace('info=|', '');
              	valuesOfAllCards = cellValuesString.split('|');
              }
              if (item.indexOf('select=') + 1) {
              	selectedCardR = item.replace('select=', '');
              }
              if(item.indexOf('jackpots=') + 1) {
              	var jackpotsString = item.replace('jackpots=','');
              	jackpots =  jackpotsString.split('|');
              }
            });
  		console.log(selectedCardR);
  		console.log(valuesOfAllCards);
  		showDoubleResult(dwin, selectedCardR, valuesOfAllCards);

  	}
  }

  var step = 1;
  function showDoubleResult(dwin, selectedCardR, valuesOfAllCards) {
  	if (!isMobile) {
  		if(dwin > 0) {
  			hideDoubleToAndTakeOrRiskTexts();
  			tableTitle.visible = true;
  			changeTableTitle('winTitleGame2');
  			winCard.play();
  			hideButtons([[buttonLine3, 'buttonLine3'], [buttonLine5, 'buttonLine5'], [buttonLine7, 'buttonLine7'], [buttonLine9, 'buttonLine9'], [startButton, 'startButton']]);
  			openSelectedCard(selectedCardR, valuesOfAllCards);
  			setTimeout('openAllCards(valuesOfAllCards)', 1000);
  			setTimeout('hideAllCards(cardArray); tableTitle.visible = false; step += 1; updateTotalWin(game, dwin, step)', 2000);
  			setTimeout('openDCard(dcard); showButtons([[buttonLine3, "buttonLine3"], [buttonLine5, "buttonLine5"], [buttonLine7, "buttonLine7"], [buttonLine9, "buttonLine9"], [startButton, "startButton"]]); showDoubleToAndTakeOrRiskTexts(game, totalWin, xSave, ySave);', 3000);
  		} else {
  			tableTitle.visible = true;
  			changeTableTitle('loseTitleGame2');
  			hideButtons([[buttonLine3, 'buttonLine3'], [buttonLine5, 'buttonLine5'], [buttonLine7, 'buttonLine7'], [buttonLine9, 'buttonLine9'], [startButton, 'startButton']]);
  			hideDoubleToAndTakeOrRiskTexts();
  			openSelectedCard(selectedCardR, valuesOfAllCards);
  			setTimeout('openAllCards(valuesOfAllCards)', 1000);
  			setTimeout("tableTitle.visible = false; unlockDisplay(); game.state.start('game1');", 2000);
  		}
  	} else {
  		if(dwin > 0) {
  			hideDoubleToAndTakeOrRiskTexts();
  			tableTitle.visible = true;
  			changeTableTitle('winTitleGame2');
  			winCard.play();
  			openSelectedCard(selectedCardR, valuesOfAllCards);
  			lockDisplay();
  			disableInputCards();
  			setTimeout('openAllCards(valuesOfAllCards); lockDisplay(); disableInputCards();', 500);
  			setTimeout('hideAllCards(cardArray); openDCard(dcard); disableInputCards(); tableTitle.visible = false; step += 1; updateTotalWin(game, dwin, step);', 2000);
  			setTimeout('enableInputCards(); unlockDisplay(); showButtons([[startButton]]); showDoubleToAndTakeOrRiskTexts(game, totalWin, xSave, ySave);', 3000);
  		} else {
  			tableTitle.visible = true;
  			changeTableTitle('loseTitleGame2');
  			hideDoubleToAndTakeOrRiskTexts();
  			openSelectedCard(selectedCardR, valuesOfAllCards);
  			lockDisplay();
  			disableInputCards();
  			setTimeout('openAllCards(valuesOfAllCards); disableInputCards(); lockDisplay();', 1000);
  			setTimeout("tableTitle.visible = false; unlockDisplay(); game.state.start('game1');", 3000);
  		}
  	}
  }

var doubleToText; //создаем переменные в которых содержится текст для табло
var takeOrRiskText;
var timerTitleAmin; // объект таймера для переклучения текстов
var xSave; //сохраняем для последующего использования координаты
var ySave;
function showDoubleToAndTakeOrRiskTexts(game, totalWin, x,y) {
	xSave = x;
	ySave = y;

	var i = 1;
	timerTitleAmin = setInterval(function() {
		if(i == 0) {
			if(typeof(doubleToText) != "undefined") {
				doubleToText.visible = false;
			}
			if(typeof(takeOrRiskText) != "undefined") {
				takeOrRiskText.visible = false;
			}

			doubleToText = game.add.text(x-5, y, 'DOUBLE TO '+totalWin*2+' ?', {
				font: '24px "Arial"',
				fill: '#fff567',
				stroke: '#000000',
				strokeThickness: 3,
			});

			i = 1;
		} else {
			if(typeof(doubleToText) != "undefined") {
				doubleToText.visible = false;
			}
			if(typeof(takeOrRiskText) != "undefined") {
				takeOrRiskText.visible = false;
			}

			takeOrRiskText = game.add.text(x, y, 'TAKE OR RISK', {
				font: '24px "Arial"',
				fill: '#ffffff',
				stroke: '#000000',
				strokeThickness: 3,
			});

			i = 0;
		}

	}, 500);
}

function hideDoubleToAndTakeOrRiskTexts() {
	doubleToText.visible = false;
	takeOrRiskText.visible = false;
	clearInterval(timerTitleAmin);
}

function updateTotalWin(game, dwin, step){
    //обновление totalWin в игре с картами

    linesScore.visible = false;
    riskStep.visible = false;

    linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], dwin, {
    	font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
    	fill: '#fff567',
    	stroke: '#000000',
    	strokeThickness: 3,
    });

    riskStep = game.add.text(scorePosions[3][0], scorePosions[3][1], step, {
    	font: scorePosions[3][2]+'px "TeX Gyre Schola Bold"',
    	fill: '#fff567',
    	stroke: '#000000',
    	strokeThickness: 3,
    });
  }

//переменные содержащие объекты карт
var card1; var card2; var card3; var card4; var card5; //card1 - карта диллера
var cardArray = [card1, card2, card3, card4, card5];

//var cardPosition = [[x,y], [x,y], [x,y], [x,y], [x,y]]  - нулевой элемент массива карта диллера
var openCard; //звуки
var winCard;
function addCards(game, cardPosition) {
	if(!isMobile) {
		openCard = game.add.audio("openCard");
		winCard = game.add.audio("winCard");

		card1 = game.add.sprite(cardPosition[0][0],cardPosition[0][1], 'card_bg');
		card2 = game.add.sprite(cardPosition[1][0],cardPosition[1][1], 'card_bg');
		card3 = game.add.sprite(cardPosition[2][0],cardPosition[2][1], 'card_bg');
		card4 = game.add.sprite(cardPosition[3][0],cardPosition[3][1], 'card_bg');
		card5 = game.add.sprite(cardPosition[4][0],cardPosition[4][1], 'card_bg');

		cardArray[0] = card1;
		cardArray[1] = card2;
		cardArray[2] = card3;
		cardArray[3] = card4;
		cardArray[4] = card5;
	} else {
		openCard = game.add.audio("openCard");
		winCard = game.add.audio("winCard");

		card1 = game.add.sprite(cardPosition[0][0],cardPosition[0][1], 'card_bg');
		card2 = game.add.sprite(cardPosition[1][0],cardPosition[1][1], 'card_bg');
		card3 = game.add.sprite(cardPosition[2][0],cardPosition[2][1], 'card_bg');
		card4 = game.add.sprite(cardPosition[3][0],cardPosition[3][1], 'card_bg');
		card5 = game.add.sprite(cardPosition[4][0],cardPosition[4][1], 'card_bg');

		card2.inputEnabled = true;
		card2.events.onInputDown.add(function(){
			requestDouble(gamename, 1, lines, bet, sid);
		});
		card3.inputEnabled = true;
		card3.events.onInputDown.add(function(){
			requestDouble(gamename, 2, lines, bet, sid);
		});
		card4.inputEnabled = true;
		card4.events.onInputDown.add(function(){
			requestDouble(gamename, 3, lines, bet, sid);
		});
		card5.inputEnabled = true;
		card5.events.onInputDown.add(function(){
			requestDouble(gamename, 4, lines, bet, sid);
		});

		cardArray[0] = card1;
		cardArray[1] = card2;
		cardArray[2] = card3;
		cardArray[3] = card4;
		cardArray[4] = card5;
	}
}

function openDCard(dcard) {
	lockDisplay();
	setTimeout("card1.loadTexture('card_'+dcard); openCard.play(); unlockDisplay();", 1000);
}

var selectedCardValue; //значение карты выбранной игроком
function openSelectedCard(selectedCardR, valuesOfAllCards) {
	openCard.play();
	cardArray[selectedCardR].loadTexture("card_"+valuesOfAllCards[selectedCardR]);
}

var valuesOfAllCards; // значения остальных карт [,,,,]
function openAllCards(valuesOfAllCards) {
	openCard.play();
	cardArray.forEach(function (item, i) {
		item.loadTexture('card_'+valuesOfAllCards[i]);
	});
}

function hideAllCards(cardArray) {
	cardArray.forEach(function (item, i) {
		item.loadTexture('card_bg');
	});
}


function disableInputCards() {
	card2.inputEnabled = false;
	card3.inputEnabled = false;
	card4.inputEnabled = false;
	card5.inputEnabled = false;
}

function enableInputCards() {
	card2.inputEnabled = true;
	card3.inputEnabled = true;
	card4.inputEnabled = true;
	card5.inputEnabled = true;
}


//функции для игры с последовательным выбором (веревки, ящики, бочки и т.д.)

// отображает результат выбора веревки (подлетает цифра и пересчитвается значение totalWin)
var stepTotalWinR = 0;
function showWinGame3(x, y, win, stepTotalWinR) {
	var text = game.add.text(x,y+100, win, { font: '22px \"Press Start 2P\"', fill: '#fcfe6e', stroke: '#000000', strokeThickness: 3});

	var timeInterval = 450;
	var textCounter = setInterval(function () {
		text.position.y -= 3;
	}, 10);

	setTimeout(function() {
		clearInterval(textCounter);
	}, timeInterval);

	linesScore.visible = false;
	linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], stepTotalWinR, {
		font: scorePosions[1][2]+'px "Press Start 2P"',
		fill: '#fcfe6e',
		stroke: '#000000',
		strokeThickness: 3,
	});
}

function updateBalanceGame3(game, scorePosions, balanceR) {
	balanceScore.visible = false;

	var takeWin = game.add.audio('takeWin');
    //takeWin.addMarker('take', 0, 0.6);
    takeWin.loop = true;
    takeWin.play();

    var interval = 5;

    var ropeValuesResult = 0;
    ropeValues.forEach(function (item) {
    	ropeValuesResult += item*lines*betline;
    });

    var balanceDifference = parseInt(parseInt(balanceR)+parseInt(ropeValuesResult)) - parseInt(balanceR);

    if(balanceDifference < 0) {
        //балан уменьшился
        var timeInterval = parseInt((-1)*(interval*balanceDifference));
        var mark = -1;
      } else {
        //баланс увеличился
        var timeInterval = parseInt(interval*balanceDifference);
        var mark = 1;
      }

      var currentBalanceDifference = 0;

      var textCounter = setInterval(function () {

      	currentBalanceDifference += 1*mark;

      	balanceScore.visible = false;
      	balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], parseInt(balanceR) + parseInt(currentBalanceDifference), {
      		font: scorePosions[2][2]+'px "Press Start 2P"',
      		fill: '#fcfe6e',
      		stroke: '#000000',
      		strokeThickness: 3,
      	});

      	linesScore.visible = false;
      	linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], parseInt(ropeValuesResult) - currentBalanceDifference - 1, {
      		font: scorePosions[1][2]+'px "Press Start 2P"',
      		fill: '#fcfe6e',
      		stroke: '#000000',
      		strokeThickness: 3,
      	});
      }, interval);

      balance = parseInt(parseInt(balanceR)+parseInt(ropeValuesResult));

      setTimeout(function() {
      	takeWin.stop();
      	clearInterval(textCounter);
      	setTimeout("game.state.start('game1');unlockDisplay();", 1000);
      }, timeInterval);
    }





//функции для игры с выбором из двух вариантов

function updateBalanceGame4(game, scorePosions, balanceR) {
	balanceScore.visible = false;

	var takeWin = game.add.audio('takeWin');
	takeWin.loop = true;
	takeWin.play();

	var interval = 5;

	var ropeValuesResult = 0;
	ropeValues.forEach(function (item) {
		ropeValuesResult += item*lines*betline;
	});

	var balanceDifference = parseInt(parseInt(balanceR)+parseInt(ropeValuesResult)) - parseInt(balanceR);

	if(balanceDifference < 0) {
        //балан уменьшился
        var timeInterval = parseInt((-1)*(interval*balanceDifference));
        var mark = -1;
      } else {
        //баланс увеличился
        var timeInterval = parseInt(interval*balanceDifference);
        var mark = 1;
      }

      var currentBalanceDifference = 0;

      var textCounter = setInterval(function () {

      	currentBalanceDifference += 1*mark;

      	balanceScore.visible = false;
      	balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], parseInt(balanceR) + parseInt(currentBalanceDifference), {
      		font: scorePosions[2][2]+'px "Press Start 2P"',
      		fill: '#fcfe6e',
      		stroke: '#000000',
      		strokeThickness: 3,
      	});
      }, interval);

      balance = parseInt(parseInt(balanceR)+parseInt(ropeValuesResult));

      setTimeout(function() {
      	takeWin.stop();
      	clearInterval(textCounter);
      	unlockDisplay();
      	game.state.start('game1');
      }, timeInterval);
    }







//функции для мобильной версии

var startButton; var double; var bet1; var dollar; var gear; var home;
function addButtonsGame1Mobile(game) {

	startButton = game.add.sprite(588, 228, 'startButton');
	startButton.bringToTop();
	startButton.anchor.setTo(0.5, 0.5);
	startButton.inputEnabled = true;
	startButton.input.useHandCursor = true;
	startButton.events.onInputUp.add(function(){
		startButton.loadTexture('startButton');
	});
	startButton.events.onInputDown.add(function(){
        if(checkUpdateBalance == false) { //проверка на то идет ли обновление баланса
        	startButton.loadTexture('startButton_d');
        	if(checkWin == 0) {
        		hideLines();
        		requestSpin(gamename, betline, lines, bet, sid);
        	} else {
        		takePrize(game, scorePosions, balanceOld, balance);
        	}
        } else {

            //быстрое получение приза

            checkUpdateBalance = false;

            //сопутствующие действия
            showButtons([[startButton], [home], [gear], [dollar], [bet1]]);
            takeWin.stop();
            changeTableTitle('play1To');

            //останавливаем счетчики
            clearInterval(textCounter);
            clearInterval(totalWinRCounter);
            clearInterval(timer);
            clearTimeout(ActionsAfterUpdatingBalance);

            //отображаем конечный результат
            balanceScore.visible = false;
            balanceScore = game.add.text(scorePosions[2][0], scorePosions[2][1], parseInt(balance), {
            	font: scorePosions[2][2]+'px "Press Start 2P"',
            	fill: '#fcfe6e',
            	stroke: '#000000',
            	strokeThickness: 3,
            });

            linesScore.visible = false;
            linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], lines, {
            	font: scorePosions[1][2]+'px "Press Start 2P"',
            	fill: '#fcfe6e',
            	stroke: '#000000',
            	strokeThickness: 3,
            });

          }
        });

	double = game.add.sprite(549, 133, 'double');
	double.inputEnabled = true;
	double.input.useHandCursor = true;
	double.events.onInputDown.add(function(){
		checkWin = 0;
		hideNumbersAmin();
		game.state.start('game2');
	});
	double.events.onInputUp.add(function(){
		double.loadTexture('double');
	});
	double.visible = false;

	bet1 = game.add.sprite(546, 274, 'bet1');
	bet1.inputEnabled = true;
	bet1.input.useHandCursor = true;
	bet1.events.onInputDown.add(function(){
        // lines = 9;
        // betline = 25;

        bet1.loadTexture('bet1_p');
        document.getElementById('betMode').style.display = 'block';
        widthVisibleZone = $('.betWrapper .visibleZone').height();
        console.log(widthVisibleZone);
        $('.betCell').css('height', widthVisibleZone*0.32147 + 'px');
        $('canvas').css('display', 'none');
      });
	bet1.events.onInputUp.add(function(){
		bet1.loadTexture('bet1');
	});

	dollar = game.add.sprite(445, 30, 'dollar');
	dollar.scale.setTo(0.7,0.7);
	dollar.inputEnabled = true;
	dollar.input.useHandCursor = true;
	dollar.events.onInputDown.add(function(){
        //game.state.start('game4');
      });

	gear = game.add.sprite(519, 30, 'gear');
	gear.scale.setTo(0.7,0.7);
	gear.inputEnabled = true;
	gear.input.useHandCursor = true;
	gear.events.onInputDown.add(function(){
        //game.state.start('game3');
      });

	home = game.add.sprite(45, 30, 'home');
	home.scale.setTo(0.7,0.7);
	home.inputEnabled = true;
	home.input.useHandCursor = true;
	home.events.onInputDown.add(function(){
		home.loadTexture('home_d');
	});
	home.events.onInputUp.add(function(){
		home.loadTexture('home');
	});
}

function addButtonsGame2Mobile(game) {
	startButton = game.add.sprite(538, 300, 'collect');
	startButton.inputEnabled = true;
	startButton.input.useHandCursor = true;
	startButton.events.onInputUp.add(function(){
		startButton.loadTexture('collect');
	});
	startButton.events.onInputDown.add(function(){
		hideDoubleToAndTakeOrRiskTexts();
		game.state.start('game1');
	});
	startButton.scale.setTo(0.7,0.7);
}

//выбор множителя в меню bet
var denomination = 1;
function selectDenomination(el) {
	denomination = el.innerText;

	document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;

	var selectedElement = document.getElementsByClassName('denomSize selected');
	selectedElement[0].className = 'denomSize';

	el.className = 'denomSize selected';
}

//выставление максимального значения ставки на линию
function maxBetlineForBetMenu() {
	maxBetline();
	document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
	document.getElementsByClassName('checkCssTopBetLineRange')[0].style.top = '34.5%';
	document.querySelectorAll('.checkCssTopBetLineRange')[0].querySelectorAll('.selected')[0].classList.remove('selected');
	document.getElementById('cellBetLine25').classList.add('selected');
}
var cursorAnimSprite = null;
function animCursor() {
	if (cursorAnimSprite !== null){
		cursorAnimSprite.visible = false;
	}
	cursorAnimSprite = game.add.sprite(game.input.x, game.input.y, 'cursor_anim');
	cursorAnimSprite.anchor.setTo(0.5, 0.5);
	cursorAnimSprite.animations.add('cursor_anim', [0,1,2,3,4], 15, false).play().onComplete.add(function(){
		cursorAnimSprite.visible = false;
	});
}
var freeSpinBgSong;
var winSound;
function addSounds(){
	briFinishSound = game.add.audio('briFinish');
	briLineWinSound = game.add.audio('briLineWin');
	briFreespinSound = game.add.audio('briFreespin');
	briWinSound = game.add.audio('briWin');
	collectSound = game.add.audio('collect');
	more_paysSound = game.add.audio('more_pays');
	pay_tableSound = game.add.audio('pay_table');
	select_lineSound = game.add.audio('select_line');
	updateFinishSound = game.add.audio('updateFinish');
	lose_freespinsSound = game.add.audio('lose_freespins');
	katerSong = game.add.audio('kater');
	planeSong = game.add.audio('plane');
	carSong = game.add.audio('car');
	freeSpinBgSong = game.add.audio('freeSpinBg');
	return_to_gameSong = game.add.audio('return_to_game');
	freeSpinBgSong.loop = true;	
}
function hideMobileBtn(){
	if (isMobile) {
		$('#spin').css({
			display: 'none'
		});
	}
}
function showMobileBtn(){
	if (isMobile) {
		$('#spin').css({
			display: 'block'
		});
	}
}
var coinArrayLeft = [];
var coinArrayRight = [];
var	animCoinArray = [[0,1,2,3,4,5,6,7],[2,3,4,5,6,7,0,1],[3,4,5,6,7,0,1,2],[4,5,6,7,0,1,2,3],[6,7,0,1,2,3,4,5],[7,0,1,2,3,4,5,6]]

		function coinAnim(){
			coinArrayLeft = [];
			coinArrayRight = [];
			coins.play();
			hideButtons();
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
	allBalance = balance + allWinOld;
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
			credit.setText(allBalance - x);
			if (x > allBalance){
				credit.setText(0); 
			}
			setTimeout(arguments.callee, interval);
		} else {
			credit.setText(0);   
		}
	})();
}
function hideButtons(buttonsArray = []) {
	if(buttonsArray.length == 0) {
		paytable.inputEnabled = false;
		paytable.input.useHandCursor = false;
		paytable.visible = false;
		help.inputEnabled = false;
		help.input.useHandCursor = false;
		help.visible = false;
		selectLines.inputEnabled = false;
		selectLines.input.useHandCursor = false;
		selectLines.visible = false;
		betPerLine.inputEnabled = false;
		betPerLine.input.useHandCursor = false;
		betPerLine.visible = false;
		startButton.inputEnabled = false;
		startButton.input.useHandCursor = false;
		startButton.visible = false;
		maxBetSpin.inputEnabled = false;
		maxBetSpin.input.useHandCursor = false;
		maxBetSpin.visible = false;
		exit.inputEnabled = false;
		exit.input.useHandCursor = false;
		exit.visible = false;
		autoPlay.inputEnabled = false;
		autoPlay.input.useHandCursor = false;
		autoPlay.visible = false;
		spaceStatus = false;
		$('.menu_wrap').css({
			display: 'none'
		});
		if (isMobile) {
			$('#spin').css({
				display: 'none'
			});
		}
	} else {
		buttonsArray.forEach(function (item) {
			item[0].inputEnabled = false;
			item[0].input.useHandCursor = false;
			item[0].visible = false;
		})
	}
}
//функции для игры с последовательным выбором (веревки, ящики, бочки и т.д.)



