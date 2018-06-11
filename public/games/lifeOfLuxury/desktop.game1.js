var game = new Phaser.Game(1024, 830, Phaser.AUTO, '', 'ld29', null, false, false);
var game1;
var startFunc;
var stopUB;
var balanceUpdateStatus = false;
var showButMob;
var hideButMob;
var spinStatus = false;
var firstAroundAnim = true;
var topBottomLabelValue = 2;
var topLabelValue = 1;
function game1() {
	var game1 = {
		cell : [],
		copyCell : [],
		spinStatus : false,
		bars : [],
		ticker : null,
		spinStatus1 : false,
		spinStatus2 : false,
		spinStatus3 : false,
		spinStatus4 : false,
		spinStatus5 : false,
		bet : [],
		circleArr : [],
		lineArr : [],
		textArr : [],
		squareArr : [],
		colorLine : ['#009800','#fffc00','#0004ff','#ff0000','#ff00d1','#00fa6d','#89ff00','#ff7f00','#9400ff','#0004ff','#009300','#ff3900','#ff3900','#9400ff','#89ff00']
	};

	game1.preload = function () {};

	game1.create = function () {
		curGame = 1;
		var lineflash = 0;
		var allwinUpd = 0;
		var allWin;
		var flickStatusTextValue = true;
		var spaceStatus = true;
		var timeSpin = false;
		game.add.sprite(0,0, 'game.background_overlay');
		spinSound1 = game.add.audio('spin1');
		spinSound2 = game.add.audio('spin2');
		spinSound3 = game.add.audio('spin3');
		coinSound1 = game.add.audio('coin1');
		coinSound2 = game.add.audio('coin2');
		coinSound3 = game.add.audio('coin3');
		coinSound4 = game.add.audio('coin4');
		coinSound5 = game.add.audio('coin5');
		winsSound1 = game.add.audio('wins1');
		winsSound2 = game.add.audio('wins2');
		winsSound3 = game.add.audio('wins3');
		coins = game.add.audio('coins');
		finishSpinSound = game.add.audio('finishSpin');
		startspinSound = game.add.audio('startspin');
		addSounds();
		var cellPos =[
		[90,126],
		[90,275],
		[90,424],
		[263,126],
		[263,275],
		[263,424],
		[435,126],
		[435,275],
		[435,424],
		[609,126],
		[609,275],
		[609,424],
		[782,126],
		[782,275],
		[782,424]
		];
		info = [7,1,2,3,4,5,6,7,0,9,10,1,2,3,1];
		animCoinArray = [[0,1,2,3,4,5,6,7],[2,3,4,5,6,7,0,1],[3,4,5,6,7,0,1,2],[4,5,6,7,0,1,2,3],[6,7,0,1,2,3,4,5],[7,0,1,2,3,4,5,6]]

		for (var i = 1; i <= 15; ++i) {
			game1.cell[i] = game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'cell'+info[i-1]);
		}

		game1.bars[0] = game.add.tileSprite(90, 126, 149, 447, 'bar');
		game1.bars[0].tilePosition.y =  randomNumber(0,10)*149 ;
		game1.bars[1] = game.add.tileSprite(263, 126, 149, 447, 'bar');
		game1.bars[1].tilePosition.y =  randomNumber(0,10)*149;
		game1.bars[2] = game.add.tileSprite(435 , 126, 149, 447, 'bar');
		game1.bars[2].tilePosition.y =  randomNumber(0,10)*149;
		game1.bars[3] = game.add.tileSprite(609, 126, 149, 447, 'bar');
		game1.bars[3].tilePosition.y =  randomNumber(0,10)*149;
		game1.bars[4] = game.add.tileSprite(782, 126, 149, 447, 'bar');
		game1.bars[4].tilePosition.y =  randomNumber(0,10)*149;
		game1.bars[0].visible = false;
		game1.bars[1].visible = false;
		game1.bars[2].visible = false;
		game1.bars[3].visible = false;
		game1.bars[4].visible = false;

		game.add.sprite(0,0, 'game.background');
		topLabel = game.add.sprite(330,20, 'top_label_2');
		topBottomLabel = game.add.sprite(57,42, 'top_bottom_label_2');
		topBottomLabel.visible = false;
		topLabelChange2()
		var changeTextValue = randomNumber(3,30);
		var changeTextCur = 0;
		function topLabelChange2(){
			setTimeout(function(){
				if (spinStatus){
					return false;
				} else {
					setTimeout(function(){
						if (spinStatus){
							return false;
						} else {
							setTimeout(function(){
								if (spinStatus){
									return false;
								} else {
									topLabel.loadTexture('top_label_' + topLabelValue);
									if (topLabelValue === 2){
										topLabelValue = 1;
									} else {
										topLabelValue = 2;
									}
									topLabelChange2()
								}
							}, 2000)
						}
					}, 3000)
				}
			}, 3000)
		}
		var circlePos = [
		[18,324], 
		[18,191], 
		[18,462], 
		[18,85], 
		[18,552], 
		[18,362], 
		[18,274], 
		[18,137], 
		[18,512], 
		[942,161], 
		[942,497], 
		[942,348], 
		[942,308], 
		[942,207], 
		[942,450]  
		];
		var linePos = [
		[77,341], 
		[76,210], 
		[77,480], 
		[74,128], 
		[74,228], 
		[74,179], 
		[74,186], 
		[76,148], 
		[77,184], 
		[97,176], 
		[103,347],  
		[104,166],  
		[97,343], 
		[97,223], 
		[102,311]   
		];
		var textPos = [
		[38,347],
		[38,214],
		[38,485],
		[38,108],
		[38,587],
		[38,398],
		[38,297],
		[38,160],
		[38,535],
		[976,184],
		[976,520],
		[976,379],
		[976,331],
		[976,230],
		[976,473]
		];
		var squareArr = [
		[2,5,8,11,14],
		[1,4,7,10,13],
		[3,6,9,12,15],
		[1,5,9,11,13],
		[3,5,7,11,15],
		[2,4,8,12,14],
		[2,6,8,10,14],
		[1,4,8,12,15],
		[3,6,8,10,13],
		[1,5,7,11,13],
		[3,5,9,11,15],
		[2,4,7,10,14],
		[2,6,9,12,14],
		[1,5,8,11,13],
		[3,5,8,11,15]
		];
		var squareArrImg = [
		[2,5,8,11,14],
		[1,4,7,10,13],
		[3,6,9,12,15],
		[1,5,9,11,13],
		[3,5,7,11,15],
		[2,4,8,12,14],
		[2,6,8,10,14],
		[1,4,8,12,15],
		[3,6,8,10,13],
		[1,5,7,11,13],
		[3,5,9,11,15],
		[2,4,7,10,14],
		[2,6,9,12,14],
		[1,5,8,11,13],
		[3,5,8,11,15]
		];
		var squareArrFreespin = [];
		var coinAnimArr = [];
		var briAnimArr = [];
		var carAnimArr = [];
		var planeAnimArr = [];
		var katerAnimArr = [];
		addLines(circlePos, linePos, textPos, cellPos, squareArr, squareArrImg)
		hideLines();
		hideLinesCircle();
		hideLinesCircleText();
		for (var i = 1; i <= lines; i++) {
			showLineCircle(i);
			showLineCircleText(i);
			game1.textArr[i].setText(betline);
		}
		blue_field = game.add.sprite(93, 301, 'blue_field');
		blue_field.visible = false;
		function addLines(circlePos, linePos, textPos, cellPos, squareArr, squareArrImg){
			for (var i = 1; i <= 15; ++i) {
				if (i !== 12){					
					game1.lineArr[i] = game.add.sprite(linePos[i-1][0], linePos[i-1][1], 'line_' + i);
				}
				game1.circleArr[i] = game.add.sprite(circlePos[i-1][0], circlePos[i-1][1], 'circleLine_' + i);
				game1.textArr[i] = game.add.text(textPos[i-1][0], textPos[i-1][1], '1', {
					font: '25px "swis721_hv_btheavy"',
					fill: '#000000'
				});
				game1.textArr[i].anchor.setTo(0.5, 0.5);
			}
			game1.lineArr[12] = game.add.sprite(linePos[12-1][0], linePos[12-1][1], 'line_' + 12);
			for (var i = 1; i <= 15; ++i) {
				game1.copyCell[i] = game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'cell0');
				game1.copyCell[i].visible = false;
				briAnimArr[i] = game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'bri_anim');
				briAnimArr[i].visible = false;
				coinAnimArr[i] = game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'coin_anim');
				coinAnimArr[i].visible = false;
				carAnimArr[i] = game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'car_anim');
				carAnimArr[i].visible = false;
				planeAnimArr[i] = game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'plane_anim');
				planeAnimArr[i].visible = false;
				katerAnimArr[i] = game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'kater_anim');
				katerAnimArr[i].visible = false;
				squareArrFreespin[i] = game.add.sprite(cellPos[i-1][0]-1, cellPos[i-1][1]-1, 'square_5');
				squareArrFreespin[i].visible = false;
			}
			for (var i = 1; i <= 15; ++i) {
				for (var j = 1; j <= 5; ++j) {
					squareArrImg[i-1][j-1] = game.add.sprite(cellPos[squareArr[i-1][j-1]-1][0]-1, cellPos[squareArr[i-1][j-1]-1][1]-1, 'square_' + i);
					squareArrImg[i-1][j-1].visible = false;
				}
			}
		}
		freesponStartBG = game.add.sprite(77, 112, 'freesponStartBG');
		freesponStartBG.visible = false;
		function showLine(lineNumber) {
			game1.lineArr[lineNumber].visible = true;
		}
		function showLineCircle(lineNumber) {
			game1.circleArr[lineNumber].visible = true;
		}
		function showLineCircleText(lineNumber) {
			game1.textArr[lineNumber].visible = true;
		}
		function showSquare(lineNumber, squareNumber){
			squareArrImg[lineNumber-1][squareNumber-1].visible = true;
		}
		function hideLines() {
			game1.lineArr.forEach(function (line) {
				line.visible = false;
				line.tint = 0xffffff;
			});
		};
		function hideLinesCircle() {
			game1.circleArr.forEach(function (line) {
				line.visible = false;
			});
		};
		function hideLinesCircleText() {
			game1.textArr.forEach(function (line) {
				line.visible = false;
			});
		};
		function hideSquare(){
			for (var i = 1; i <= 15; ++i) {
				for (var j = 1; j <= 5; ++j) {
					squareArrImg[i-1][j-1].visible = false;
					squareArrImg[i-1][j-1].tint = 0xffffff;
				}
			}
		}
		exit = game.add.sprite(44, 702, 'exit');
		exit.inputEnabled = true;
		exit.input.useHandCursor = true;
		exit.events.onInputDown.add(function(){
			exit.loadTexture('exit_p');
		});
		exit.events.onInputUp.add(function(){
			exit.loadTexture('exit');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				if ((balance + allWinOld) > 0){
					// coinAnim();
					// giveBalance();
					// var allBalance = balance + allWinOld;
					// blue_field.visible = true;
					// collect_text.setText('HAND PAY ' +allBalance+' CREDITS')
					// flickcollect_text();
					// credit.setText(0); 
					// paid.setText(allBalance); 
					// setTimeout(function() {
					// 	location.href = '/';
					// }, 4000);  
					$('.popup_exit,.overlay').show();
				} else {
					setTimeout(function() {
						location.href = '/';
					}, 1000);  
				}
			}
		});
		paytable = game.add.sprite(253, 702, 'paytable');
		paytable.inputEnabled = true;
		paytable.input.useHandCursor = true;
		paytable.events.onInputDown.add(function(){
			paytable.loadTexture('paytable_p');
		});
		paytable.events.onInputUp.add(function(){
			paytable.loadTexture('paytable');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				pay_tableSound.play();
				paytableStatus = true;
				helpPageCurent = 1;
				paytablePageCurent = 1;
				paytable_page.visible = true;
				paytable_page.loadTexture('paytable_page_1');
				return_to_game.visible = true;
				paytable_next.visible = true;
				hideButtons();
			}
		});
		help = game.add.sprite(147, 701, 'help');
		help.inputEnabled = true;
		help.input.useHandCursor = true;
		help.events.onInputDown.add(function(){
			help.loadTexture('help_p');
		});
		help.events.onInputUp.add(function(){
			help.loadTexture('help');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				pay_tableSound.play();
				paytableStatus = true;
				helpPageCurent = 1;
				paytablePageCurent = 1;
				help_page.visible = true;
				help_page.loadTexture('help_page_1');
				return_to_game.visible = true;
				help_next.visible = true;
				hideButtons();
			}
		});

		selectLines = game.add.sprite(359, 702, 'selectLines');
		selectLines.inputEnabled = true;
		selectLines.input.useHandCursor = true;
		selectLines.events.onInputDown.add(function(){
			selectLines.loadTexture('selectLines_p');
		});
		selectLines.events.onInputUp.add(function(){
			selectLines.loadTexture('selectLines');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				select_lineSound.play();
				upLines()
			}
		})
		betPerLine = game.add.sprite(491, 702, 'betPerLine');
		betPerLine.inputEnabled = true;
		betPerLine.input.useHandCursor = true;
		betPerLine.events.onInputDown.add(function(){
			betPerLine.loadTexture('betPerLine_p');
		});
		betPerLine.events.onInputUp.add(function(){
			betPerLine.loadTexture('betPerLine');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				select_lineSound.play();
				upLinesBet()
			}
		})
		allWin = 0;
		autoPlay = game.add.sprite(878, 702, 'autoPlay');
		autoPlay.inputEnabled = true;
		autoPlay.input.useHandCursor = true;
		autoPlay.events.onInputDown.add(function(){
			if ((balance + allWin) === 0){
				autoPlay.loadTexture('addCredit_p'); 
			} else {	
				if(autostart === false){
					autoPlay.loadTexture('autoPlay_p');
				} else {
					autoPlay.loadTexture('autoStop_p');
				}
			}
		});
		autoPlay.events.onInputUp.add(function(){
			if ((balance + allWin) === 0){
				autoPlay.loadTexture('addCredit'); 
				$('.add_credits,.overlay').show();
			} else {	
				if(autostart === false){
					if(balanceUpdateStatus){
						stopUpdateBalance();
						autoPlay.loadTexture('autoPlay');
					} else{
						$("#spin").addClass('auto');
						autoPlay.loadTexture('autoStop');
						autostart = true;
						startspinSound.play();
						startFunc();
					}
				} else {
					autoPlay.loadTexture('autoPlay');
					$("#spin").removeClass('auto');
					autostart = false;
					showButtons();
					if (spinStatus === true){
						hideButtons();
					}
				}
			}
		})
		startButton = game.add.sprite(621, 702, 'startButton');
		startButton.inputEnabled = true;
		startButton.input.useHandCursor = true;
		startButton.events.onInputDown.add(function(){
			startButton.loadTexture('startButton_p');
			// btnSound.play();
		});
		startButton.events.onInputUp.add(function(){
			startButton.loadTexture('startButton');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				allWinOld = 0;
				stopWinAnim = true;
				lineflash = 0;
				realSpinStatus = true;
				spinStatus = true;
				firstAnim = true;
				winText.visible = false;
				bonusWinText.visible = false;
				topBottomLabel.visible = false;
				afterFreespinStatus = false;
				for (var i = 1; i <= 15; ++i) {
					game1.copyCell[i].visible = false;
					squareArrFreespin[i].visible = false;
					squareArrFreespin[i].tint = 0xffffff;
					briAnimArr[i].visible = false;
					coinAnimArr[i].visible = false;
					planeAnimArr[i].visible = false;
					katerAnimArr[i].visible = false;
				}
				gameStatusText.visible = false;
				topText.visible = true;
				paid.setText('0');
				topText.setText("GOOD LUCK");
				hideLines();
				hideButtons();
				hideSquare();
				startspinSound.play();
				setTimeout(function() {
					setTimeout(function() {
						startspin(0);
						setTimeout(function() {
							startspin(1);
							setTimeout(function() {
								startspin(2);
								setTimeout(function() {
									startspin(3);
									setTimeout(function() {
										startspin(4);
										var randomText = randomNumber(0,2)
										switch (randomText) {
											case 0:
											spinSound1.play();
											break;
											case 1:
											spinSound2.play();
											break;
											case 2:
											spinSound3.play();
											break;
										}
									}, 50);
								}, 50);
							}, 50);
						}, 50);
					}, 50);
				}, 500);
				requestSpin(gamename, sessionName, betline, lines);
			}
		})
		maxBetSpin = game.add.sprite(749, 702, 'maxBetSpin');
		maxBetSpin.inputEnabled = true;
		maxBetSpin.input.useHandCursor = true;
		maxBetSpin.events.onInputDown.add(function(){
			maxBetSpin.loadTexture('maxBetSpin_p');
		});
		maxBetSpin.events.onInputUp.add(function(){
			maxBetSpin.loadTexture('maxBetSpin');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				if ((balance + allWinOld) > 149){
					lines = 15;
					betline = 10;
				} else {
					pickMaxSpin();
				}
				for (var i = 1; i <= lines; i++) {
					showLineCircle(i);
					showLineCircleText(i);
					game1.textArr[i].setText(betline);
				}
				linesText.setText(lines)
				lineBetText.setText(betline)
				bet = lines * betline;
				totalBet.setText(bet)
				allWinOld = 0;
				stopWinAnim = true;
				lineflash = 0;
				realSpinStatus = true;
				spinStatus = true;
				firstAnim = true;
				winText.visible = false;
				bonusWinText.visible = false;
				topBottomLabel.visible = false;
				afterFreespinStatus = false;
				for (var i = 1; i <= 15; ++i) {
					game1.copyCell[i].visible = false;
					squareArrFreespin[i].visible = false;
					squareArrFreespin[i].tint = 0xffffff;
					briAnimArr[i].visible = false;
					coinAnimArr[i].visible = false;
					planeAnimArr[i].visible = false;
					katerAnimArr[i].visible = false;
				}
				gameStatusText.visible = false;
				topText.visible = true;
				paid.setText('0');
				topText.setText("GOOD LUCK");
				hideLines();
				hideButtons();
				hideSquare();

				startspinSound.play();
				setTimeout(function() {
					setTimeout(function() {
						startspin(0);
						setTimeout(function() {
							startspin(1);
							setTimeout(function() {
								startspin(2);
								setTimeout(function() {
									startspin(3);
									setTimeout(function() {
										startspin(4);
										var randomText = randomNumber(0,2)
										switch (randomText) {
											case 0:
											spinSound1.play();
											break;
											case 1:
											spinSound2.play();
											break;
											case 2:
											spinSound3.play();
											break;
										}
									}, 50);
								}, 50);
							}, 50);
						}, 50);
					}, 50);
				}, 500);
				requestSpin(gamename, sessionName, betline, lines);
			}
		})
		scorePosions = [[160, 57, 38], [160, 81, 18], [342, 57, 38], [342, 81, 18], [526, 57, 38], [526, 81, 18], [187, 648, 17], [828, 648, 17]];
		balance = +balance;
		addScore();
		addPaytable();
		blackBg = game.add.sprite(0, 0, 'black_bg');
		blackBg.alpha = 0;
		blackBg.visible = false;
		if (afterFreespinStatus){
			wlValues = wlValuesOld;
			blackBg.alpha = 1;
			blackBg.visible = true;
			stopWinAnim = false;
			hideButtons();
			allWin = allWinOld + winOldTrigerFreeSpin;
			bonusWinText.visible = true;
			bonusWinText.setText('BONUS WON ' +allWinOld);
			info = infoOld;
			balance = balanceOld;
			for (var i = 1; i <= 15; ++i) {
				game1.cell[i].loadTexture('cell'+infoOld[i-1]);
				game1.copyCell[i].loadTexture('cell'+infoOld[i-1]);
			}
			setTimeout(function() {
				game.add.tween(blackBg).to( { alpha: 0 }, 1000, "Linear", true).onComplete.add(function(){
					blackBg.visible = false;
					topText.setText(allWin + " CREDITS WON");
					flickTopText();
					showWinFreeSpin(wcvWinValuesArrayOld);
					updateBalance();
				});
			}, 1000);
		}

		var coinCount = 0;
		game1.ticker = game.add.tileSprite(0, 799, 1154, 31, 'ticker');
		function parseSpinAnswer(dataSpinRequest) {
			dataArray = dataSpinRequest;
			dataArrValue = dataArray.length;
			if (dataArray['state']) {
				ropeValues = dataArray['rope'];

				winCellInfo = dataArray['winCellInfo'];
				wlValues = dataArray['wl'];

				balanceR = dataArray['balance'];
				balance = dataArray['balance'];

				linesR = dataArray['linesInGame'];
				betlineR = dataArray['betLine'];
				winBonusSymbolsData = dataArray['winBonusSymbolsData'];
				allWin = dataArray['allWin'];
				if (ropeValues !== null & ropeValues !== false){
					allWin = ropeValues['allWin'];
					winOldTrigerFreeSpin = ropeValues['allWin'];
					infoOld = dataArray['info'];
					mulFreespin = ropeValues['mul'];
					wlValuesOld = dataArray['wl'];
					balanceOld = balance;
				}
				dcard = dataArray['dcard'];
				dcardOld = dataArray['dcard'];
				if (realSpinStatus){
					credit.setText(balance);
					realSpinStatus = false;
				}
				coinCount = 0;
				info = dataArray['info'];
				setTimeout(function() {
					middlespin(0);
					middlespin(1);
					middlespin(2);
					middlespin(3);
					middlespin(4);
				}, 250);
			}
		}
		startFunc = function startAuto(){
			allWinOld = 0;
			stopWinAnim = true;
			lineflash = 0;
			realSpinStatus = true;
			spinStatus = true;
			firstAnim = true;
			winText.visible = false;
			bonusWinText.visible = false;
			topBottomLabel.visible = false;
			afterFreespinStatus = false;
			for (var i = 1; i <= 15; ++i) {
				game1.copyCell[i].visible = false;
				squareArrFreespin[i].visible = false;
				squareArrFreespin[i].tint = 0xffffff;
				briAnimArr[i].visible = false;
				coinAnimArr[i].visible = false;
				planeAnimArr[i].visible = false;
				katerAnimArr[i].visible = false;
			}
			gameStatusText.visible = false;
			topText.visible = true;
			paid.setText('0');
			topText.setText("GOOD LUCK");
			hideLines();
			hideButtons();
			hideSquare();
			if(autostart === true){
				showButtons([[autoPlay, 'autoPlay']]);
				showMobileBtn();
			}
			setTimeout(function() {
				setTimeout(function() {
					startspin(0);
					setTimeout(function() {
						startspin(1);
						setTimeout(function() {
							startspin(2);
							setTimeout(function() {
								startspin(3);
								setTimeout(function() {
									var randomText = randomNumber(0,2)
									switch (randomText) {
										case 0:
										spinSound1.play();
										break;
										case 1:
										spinSound2.play();
										break;
										case 2:
										spinSound3.play();
										break;
									}
									startspin(4);
								}, 50);
							}, 50);
						}, 50);
					}, 50);
				}, 50);
			}, 500);
			requestSpin(gamename, sessionName, betline, lines);
		}
		var g1s = false;
		var g1e = false;
		var g2s = false;
		var g2e = false;
		var g3s = false;
		var g3e = false;
		function startspin(number){
			game.add.tween(game1.cell[1+number*3]).to({y:game1.cell[1+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				game1.cell[1+number*3].visible = false;
			});
			game.add.tween(game1.cell[2+number*3]).to({y:game1.cell[2+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				game1.cell[2+number*3].visible = false;
			});
			game.add.tween(game1.cell[3+number*3]).to({y:game1.cell[3+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				game1.cell[3+number*3].visible = false;
				game1.bars[number].visible = true;
				if (number == 0){
					game1.spinStatus1 = true;
				}
				if (number == 1){
					game1.spinStatus2 = true;
				}
				if (number == 2){
					game1.spinStatus3 = true;
				}
				if (number == 3){
					game1.spinStatus4 = true;
				}
				if (number == 4){
					game1.spinStatus5 = true;
					timeSpin = true;
					if (g2e === true & g1e === false){						
						g1e = true;
						g2s = true;
						g2e = true;
					} else if (g1e === false & g2e === false){
						g1s = true;
						g1e = true;
					} else if (g1e === true){
						g2s = true;
						g2e = true;
					}
					changeTextCur = changeTextCur + 1;
					if (changeTextCur === changeTextValue){
						topLabel.loadTexture('top_label_' + topLabelValue);
						if (topLabelValue === 2){
							topLabelValue = 1;
						} else {
							topLabelValue = 2;
						}
						changeTextCur = 0;
						changeTextValue = randomNumber(3,30);
					}
				}
			});

		};
		function middlespin(number){
			if (number == 0){
				setTimeout(function() {
					if (timeSpin){
						if ((g1e === true & g1s === true) ||(g1s === false & g2e === true & g2s === true)){
							game1.spinStatus1 = false;
							game1.bars[0].visible = false;
							game1.cell[1+3*0].visible = true;
							game1.cell[2+3*0].visible = true;
							game1.cell[3+3*0].visible = true;
							game1.cell[1].loadTexture('cell'+info[0]);
							game1.cell[2].loadTexture('cell'+info[1]);
							game1.cell[3].loadTexture('cell'+info[2]);
							if (info[0] == 10 || info[1] == 10 || info[2] == 10){
								coinCount = coinCount + 1;
								coinSound1.play();
							} else{
								finishSpinSound.play();
							}
							endspin(number);
						}
					}
				}, 1400);
			}
			if (number == 1){
				setTimeout(function() {
					if (timeSpin){
						if ((g1e === true & g1s === true) ||(g1e === false & g2e === true & g2s === true)){
							game1.spinStatus2 = false;
							game1.bars[0].visible = false;
							game1.cell[1+3*0].visible = true;
							game1.cell[2+3*0].visible = true;
							game1.cell[3+3*0].visible = true;
							game1.bars[1].visible = false;
							game1.cell[1+3*1].visible = true;
							game1.cell[2+3*1].visible = true;
							game1.cell[3+3*1].visible = true;
							game1.cell[1].loadTexture('cell'+info[0]);
							game1.cell[2].loadTexture('cell'+info[1]);
							game1.cell[3].loadTexture('cell'+info[2]);
							game1.cell[4].loadTexture('cell'+info[3]);
							game1.cell[5].loadTexture('cell'+info[4]);
							game1.cell[6].loadTexture('cell'+info[5]);

							if (info[3] == 10 || info[4] == 10 || info[5] == 10 || info[3] == 0 || info[4] == 0 || info[5] == 0){
								coinCount = coinCount + 1;
								if (coinCount === 1){
									coinSound1.play();
								} else {
									coinSound2.play();
								}
							} else{
								finishSpinSound.play();
							}

							endspin(number);
						}
					}
				}, 1800);
			}
			if (number == 2){
				setTimeout(function() {
					if (timeSpin){
						if ((g1e === true & g1s === true) ||(g1e === false & g2e === true & g2s === true)){
							game1.spinStatus3 = false;
							game1.bars[0].visible = false;
							game1.cell[1+3*0].visible = true;
							game1.cell[2+3*0].visible = true;
							game1.cell[3+3*0].visible = true;
							game1.bars[1].visible = false;
							game1.cell[1+3*1].visible = true;
							game1.cell[2+3*1].visible = true;
							game1.cell[3+3*1].visible = true;
							game1.bars[2].visible = false;
							game1.cell[1+3*2].visible = true;
							game1.cell[2+3*2].visible = true;
							game1.cell[3+3*2].visible = true;

							game1.cell[1].loadTexture('cell'+info[0]);
							game1.cell[2].loadTexture('cell'+info[1]);
							game1.cell[3].loadTexture('cell'+info[2]);
							game1.cell[4].loadTexture('cell'+info[3]);
							game1.cell[5].loadTexture('cell'+info[4]);
							game1.cell[6].loadTexture('cell'+info[5]);
							game1.cell[7].loadTexture('cell'+info[6]);
							game1.cell[8].loadTexture('cell'+info[7]);
							game1.cell[9].loadTexture('cell'+info[8]);
							if (info[6] == 10 || info[7] == 10 || info[8] == 10 || info[6] == 0 || info[7] == 0 || info[8] == 0){
								coinCount = coinCount + 1;
								if (coinCount === 1){
									coinSound1.play();
								} else if (coinCount === 2){
									coinSound2.play();
								} else {
									coinSound3.play();
								}
							} else{
								finishSpinSound.play();
							}
							endspin(number);
						}
					}
				}, 2200);
			}
			if (number == 3){
				setTimeout(function() {
					if (timeSpin){
						if ((g1e === true & g1s === true) ||(g1e === false & g2e === true & g2s === true)){
							game1.spinStatus4 = false;
							game1.bars[0].visible = false;
							game1.cell[1+3*0].visible = true;
							game1.cell[2+3*0].visible = true;
							game1.cell[3+3*0].visible = true;
							game1.bars[1].visible = false;
							game1.cell[1+3*1].visible = true;
							game1.cell[2+3*1].visible = true;
							game1.cell[3+3*1].visible = true;
							game1.bars[2].visible = false;
							game1.cell[1+3*2].visible = true;
							game1.cell[2+3*2].visible = true;
							game1.cell[3+3*2].visible = true;

							game1.bars[3].visible = false;
							game1.cell[1+3*3].visible = true;
							game1.cell[2+3*3].visible = true;
							game1.cell[3+3*3].visible = true;

							game1.cell[1].loadTexture('cell'+info[0]);
							game1.cell[2].loadTexture('cell'+info[1]);
							game1.cell[3].loadTexture('cell'+info[2]);
							game1.cell[4].loadTexture('cell'+info[3]);
							game1.cell[5].loadTexture('cell'+info[4]);
							game1.cell[6].loadTexture('cell'+info[5]);
							game1.cell[7].loadTexture('cell'+info[6]);
							game1.cell[8].loadTexture('cell'+info[7]);
							game1.cell[9].loadTexture('cell'+info[8]);
							game1.cell[10].loadTexture('cell'+info[9]);
							game1.cell[11].loadTexture('cell'+info[10]);
							game1.cell[12].loadTexture('cell'+info[11]);
							if (info[9] == 10 || info[10] == 10 || info[11] == 10 || info[9] == 0 || info[10] == 0 || info[11] == 0){
								coinCount = coinCount + 1;
								if (coinCount === 1){
									coinSound1.play();
								} else if (coinCount === 2){
									coinSound2.play();
								} else if (coinCount === 3){
									coinSound3.play();
								} else {
									coinSound4.play();
								}
							} else{
								finishSpinSound.play();
							}
							endspin(number);
						}
					}
				}, 2600);
			}
			if (number == 4){
				setTimeout(function() {
					if (timeSpin){						
						if ((g1e === true & g1s === true) ||(g1e === false & g2e === true & g2s === true)){
							if (g1e === true){
								g1s = false;
							} else {
								g2s = false;
							}
							game1.spinStatus5 = false;
							game1.bars[0].visible = false;
							game1.cell[1+3*0].visible = true;
							game1.cell[2+3*0].visible = true;
							game1.cell[3+3*0].visible = true;
							game1.bars[1].visible = false;
							game1.cell[1+3*1].visible = true;
							game1.cell[2+3*1].visible = true;
							game1.cell[3+3*1].visible = true;
							game1.bars[2].visible = false;
							game1.cell[1+3*2].visible = true;
							game1.cell[2+3*2].visible = true;
							game1.cell[3+3*2].visible = true;

							game1.bars[3].visible = false;
							game1.cell[1+3*3].visible = true;
							game1.cell[2+3*3].visible = true;
							game1.cell[3+3*3].visible = true;

							game1.bars[4].visible = false;
							game1.cell[1+3*4].visible = true;
							game1.cell[2+3*4].visible = true;
							game1.cell[3+3*4].visible = true;

							game1.cell[1].loadTexture('cell'+info[0]);
							game1.cell[2].loadTexture('cell'+info[1]);
							game1.cell[3].loadTexture('cell'+info[2]);
							game1.cell[4].loadTexture('cell'+info[3]);
							game1.cell[5].loadTexture('cell'+info[4]);
							game1.cell[6].loadTexture('cell'+info[5]);
							game1.cell[7].loadTexture('cell'+info[6]);
							game1.cell[8].loadTexture('cell'+info[7]);
							game1.cell[9].loadTexture('cell'+info[8]);
							game1.cell[10].loadTexture('cell'+info[9]);
							game1.cell[11].loadTexture('cell'+info[10]);
							game1.cell[12].loadTexture('cell'+info[11]);
							game1.cell[13].loadTexture('cell'+info[12]);
							game1.cell[14].loadTexture('cell'+info[13]);
							game1.cell[15].loadTexture('cell'+info[14]);
							if (info[12] == 10 || info[13] == 10 || info[14] == 10){
								coinCount = coinCount + 1;
								if (coinCount === 1){
									coinSound1.play();
								} else if (coinCount === 2){
									coinSound2.play();
								} else if (coinCount === 3){
									coinSound3.play();
								} else if (coinCount === 4){
									coinSound4.play();
								} else {
									coinSound5.play();
								}
							} else{
								finishSpinSound.play();
							}
							endspin(number);
						}
					}
					if (g1e === true){
						g1e = false;
					} else {
						g2e = false;
					}
				}, 3000);
			}
		}
		function endspin(number){
			if (number == 4){
				timeSpin = false;
			}
			game1.cell[1+number*3].position.y = 126+30;
			game1.cell[2+number*3].position.y = 275+30;
			game1.cell[3+number*3].position.y = 424+30;
			game.add.tween(game1.cell[1+number*3]).to({y:game1.cell[1+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
			});
			game.add.tween(game1.cell[2+number*3]).to({y:game1.cell[2+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
			});
			game.add.tween(game1.cell[3+number*3]).to({y:game1.cell[3+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				if (number == 4){
					checkWin();
					for (var i = 1; i <= 15; ++i) {
						game1.cell[i].visible = true;
						game1.cell[i].loadTexture('cell'+info[i-1]);
					}
					game1.bars[0].visible = false;
					game1.bars[1].visible = false;
					game1.bars[2].visible = false;
					game1.bars[3].visible = false;
					game1.bars[4].visible = false;
				}
			});
		}
		var wlWinValuesArray = [];
		var wcvWinValuesArray = [];
		var briSound = false;
		function checkWin(){
			briSound = false;
			wlWinValuesArray = [];
			wcvWinValuesArray = [];
			winWithoutCoin = 0;
			for (var i = 1; i <= 15; ++i) {
				game1.copyCell[i].loadTexture('cell'+info[i-1]);
			}
			for (key in wlValues) {
				if(wlValues[key] > 0) {
					winWithoutCoin = winWithoutCoin + wlValues[key];
					wlWinValuesArray.push(+(key));
				}
			}
			for (key in winCellInfo) {
				if(winCellInfo[key] !== false) {
					wcvWinValuesArray.push(+(key));
				}
				if(winCellInfo[key] === 0) {
					briSound = true;
				}
			}
			if (winBonusSymbolsData[0] > 0){
				hideButtons();
				briWinSound.play();
				winBonusValue = winOldTrigerFreeSpin - winWithoutCoin;
				stopWinAnim = false;
				wcvWinValuesArray = [];
				topText.setText(allWin + " CREDITS WON");
				flickTopText();
				for (key in info) {
					if(info[key] === 10 || info[key] === 0) {
						wcvWinValuesArray.push(+(key));
					}
				}
				wcvWinValuesArrayOld = wcvWinValuesArray;
				wlWinValuesArrayOld = wlWinValuesArray;
				winCellInfoOld = winCellInfo;
				showWinFreeSpin(wcvWinValuesArray);
			} else if (wlWinValuesArray.length > 0){
				stopWinAnim = false;
				firstAroundAnim = true;

				showWin(wlWinValuesArray, winCellInfo);
				topText.setText(allWin + " CREDITS WON");
				flickTopText();
				flickStatusTextValue = false;
				flickStatusText();
			} else{
				spinStatus = false;
				gameStatusText.visible = true;
				gameStatusText.fill = '#fdff41';
				gameStatusText.setText('GAME OVER');
				topText.visible = false;				
				topBottomLabel.visible = true;
				topBottomLabel.loadTexture('top_bottom_label_' + topBottomLabelValue);
				if (topBottomLabelValue === 2){
					topBottomLabelValue = 1;
				} else {
					topBottomLabelValue = 2;
				}
				if(autostart == false){
					showButtons();
				}
				if ((balance + allWin) < betline*lines){
					autostart = false;
					$("#spin").removeClass('auto');
					showButtons();
					hideButtons([[startButton, 'startButton']]);
					hideButtons([[autoPlay, 'autoPlay']]);
					if((balance + allWin) < 1){
						hideButtons([[maxBetSpin, 'maxBetSpin']]);
					}
					console.log(111)
					console.log(balance + allWin)
					hideMobileBtn();
					autoPlay.loadTexture('autoPlay');
					if ((balance + allWin) === 0){
						showButtons([[autoPlay, 'autoPlay']]);
						autoPlay.loadTexture('addCredit'); 
					}
				} else {
					if(autostart == false){
						showButtons([[startButton, 'startButton']]);
						showButtons([[autoPlay, 'autoPlay']]);
						showButtons([[maxBetSpin, 'maxBetSpin']]);
						showMobileBtn();
					}
				}
				if(autostart == true){
					setTimeout(function() {
						if(autostart === true & spinStatus === false){
							startFunc();
						}
					}, 1000);
				}
			}
		}
		function showWinFreeSpin(wcvWinValuesArray){
			wcvWinValuesArray.forEach(function (cell, i) {
				squareArrFreespin[cell+1].visible = true;
				if (!afterFreespinStatus){
					if (info[cell] === 10){
						coinAnimArr[cell+1].visible = true;
						coinAnimArr[cell+1].animations.add('scatters_anim', [0,1,2,3,4,0,1,2,3,4], 10, false).play().onComplete.add(function(){
							coinAnimArr[cell+1].visible = false;
						});
					}
					if (info[cell] === 0){
						briAnimArr[cell+1].visible = true;
						briAnimArr[cell+1].animations.add('scatters_anim', [0,1,2,3,4,0,1,2,3,4], 10, false).play().onComplete.add(function(){
							briAnimArr[cell+1].visible = false;
						});
					}
				}
			});
			winText.visible = true;
			if(afterFreespinStatus){
				bonusWinText.visible = true;
			}
			winText.setText(winBonusValue + " CREDIT SCATTER PAY");
			winText.fill = '#c53db1';
			if (!afterFreespinStatus){
				setTimeout(function() {
					flickWin(wcvWinValuesArray);
					flickTopText();
				}, 1000);
			} else{
				flickWin(wcvWinValuesArray);
			}
			if (!afterFreespinStatus){
				setTimeout(function() {
					freesponStartBG.visible = true;
					freeSpinBgSong.play();
					setTimeout(function() {
						blackBg.visible = true;
						game.add.tween(blackBg).to( { alpha: 1 }, 750, "Linear", true).onComplete.add(function(){
							setTimeout(function() {
								stopWinAnim = true;
								autostart = false;
								spinStatus = false;
								$("#spin").removeClass('auto');
								game.state.start('game2');
							}, 1000);
						})
					}, 2500);
				}, 4000);
			}
		}
		function flickTopText(){
			if (stopWinAnim == true){
				return;
			}
			topText.visible = false;
			setTimeout(function() {
				if (stopWinAnim == true){
					return;
				}
				topText.visible = true;
				setTimeout(function() {
					if (stopWinAnim == true){
						return;
					}
					flickTopText();
				}, 150);
			}, 150);
		}
		function flickStatusText(){
			if (flickStatusTextValue == true){
				return;
			}
			gameStatusText.visible = true;
			gameStatusText.setText('WINNER');
			gameStatusText.fill = '#fdff41';
			setTimeout(function() {
				if (flickStatusTextValue == true){
					return;
				}
				gameStatusText.visible = false;
				setTimeout(function() {
					if (flickStatusTextValue == true){
						return;
					}
					gameStatusText.visible = true;
					gameStatusText.setText(allWin + ' CREDITS');
					gameStatusText.fill = '#ffffff';
					setTimeout(function() {
						if (flickStatusTextValue == true){
							return;
						}
						gameStatusText.visible = false;
						setTimeout(function() {
							if (flickStatusTextValue == true){
								return;
							}
							flickStatusText();
						}, 300);
					}, 2000);
				}, 300);
			}, 2000);
		}

		function requestSpin(gamename, sessionName, betline, lines) {
			$.ajax({
				type: "get",
				url: getNeedUrlPath()+'/spin/'+gamename+'?sessionName='+sessionName+'&betLine='+betline+'&linesInGame='+lines,
				dataType: 'html',
				success: function (data) {
					console.log(data);
					dataSpinRequest = JSON.parse(data);
					//dataSpinRequest = {"info":[7,1,4,10,9,4,10,2,4,5,9,10,3,7,2],"allWin":500,"betLine":"10","linesInGame":"15","winCellInfo":[false,false,3,10,false,4,10,false,4,false,false,10,false,false,false],"wl":{"1":0,"2":0,"3":200,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"state":true,"balance":700,"rope":{"count":10,"mul":2,"allWin":500},"winBonusSymbolsData":[3,5],"freeSpinData":{"count":10,"mul":2,"allWin":500},"check0FreeSpin":null}
					if(dataSpinRequest['state']) {
						parseSpinAnswer(dataSpinRequest);
					}
				},
				error: function (xhr, ajaxOptions, thrownError) {
					var errorText = '//ошибка 30';
					console.log(errorText);
					reconnectSpin(gamename, sessionName, betline, lines);
					// setTimeout("reconnectSpin(gamename, sessionName, betline, lines)", 100);
				}
			});
		}

		function reconnectSpin(gamename, sessionName, betline, lines) {
			$.ajax({
				type: "get",
				url: getNeedUrlPath()+ '/reconnect',
				dataType: 'html',
				success: function (data) {
					console.log('reconect : true');
					requestSpin(gamename, sessionName, betline, lines);
				},
				error: function (xhr, ajaxOptions, thrownError) {
					var errorText = '//ошибка переподкючения';
					console.log(errorText);
					reconnectSpin(gamename, sessionName, betline, lines);
					// setTimeout("reconnectSpin()", 100);
				}
			});
		}

		function flickWin(wcvWinValuesArray){
			if (stopWinAnim == true){
				return;
			}
			wcvWinValuesArray.forEach(function (cell, i) {
				squareArrFreespin[cell+1].tint = 0x000000;
			});
			winText.visible = false;
			if(afterFreespinStatus){
				bonusWinText.visible = false;
			}
			setTimeout(function() {
				if (stopWinAnim == true){
					wcvWinValuesArray.forEach(function (cell, i) {
						squareArrFreespin[cell+1].tint = 0xffffff;
					});
					winText.visible = false;
					return;
				}
				wcvWinValuesArray.forEach(function (cell, i) {
					squareArrFreespin[cell+1].tint = 0xffffff;
				});
				winText.visible = true;
				if(afterFreespinStatus){
					bonusWinText.visible = true;
				}
				setTimeout(function() {
					if (stopWinAnim == true){
						return;
					}
					wcvWinValuesArray.forEach(function (cell, i) {
						squareArrFreespin[cell+1].tint = 0x000000;
					});
					winText.visible = false;
					if(afterFreespinStatus){
						bonusWinText.visible = false;
					}
					setTimeout(function() {
						if (stopWinAnim == true){
							wcvWinValuesArray.forEach(function (cell, i) {
								squareArrFreespin[cell+1].tint = 0xffffff;
							});
							winText.visible = false;
							return;
						}
						wcvWinValuesArray.forEach(function (cell, i) {
							squareArrFreespin[cell+1].tint = 0xffffff;
						});
						winText.visible = true;
						if(afterFreespinStatus){
							bonusWinText.visible = true;
						}
						setTimeout(function() {
							if (stopWinAnim == true){
								return;
							}
							if (afterFreespinStatus){
								if (winWithoutCoin > 0){
									wcvWinValuesArray.forEach(function (cell, i) {
										squareArrFreespin[cell+1].visible = false;
									});
									showWin(wlWinValuesArrayOld, winCellInfoOld);
								} else {
									flickWin(wcvWinValuesArray);
								}
							} else {
								flickWin(wcvWinValuesArray);
							}
						}, 400);
					}, 150);
				}, 400);
			}, 150);
		}
		var sizeLine = 0;
		var multiStatus = false;
		var otherSound = false;
		var firstAnim = true;
		function showWin(wlWinValuesArray, winCellInfo) {
			otherSound = false;
			multiStatus = false;
			if (stopWinAnim == true){
				return;
			}
			winText.visible = true;
			if(afterFreespinStatus){
				bonusWinText.visible = true;
			}
			winText.setText(wlValues[wlWinValuesArray[lineflash]] + " CREDIT LINE PAY");
			winText.fill = game1.colorLine[wlWinValuesArray[lineflash]-1];
			if (info[squareArr[wlWinValuesArray[lineflash]-1][0]-1] !== 0){
				trigerLine = info[squareArr[wlWinValuesArray[lineflash]-1][0]-1];
			} else if(info[squareArr[wlWinValuesArray[lineflash]-1][1]-1] !== 0){
				trigerLine = info[squareArr[wlWinValuesArray[lineflash]-1][1]-1];
			} else if(info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] !== 0){
				trigerLine = info[squareArr[wlWinValuesArray[lineflash]-1][2]-1];
			} else if(info[squareArr[wlWinValuesArray[lineflash]-1][3]-1] !== 0){
				trigerLine = info[squareArr[wlWinValuesArray[lineflash]-1][3]-1];
			} else{
				trigerLine = info[squareArr[wlWinValuesArray[lineflash]-1][4]-1];
			}
			if (info[squareArr[wlWinValuesArray[lineflash]-1][0]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][1]-1] === 0){
				multiStatus = true;
			}
			if (info[squareArr[wlWinValuesArray[lineflash]-1][0]-1] === 9 & (info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === 9)){
				if (firstAroundAnim) {
					if (!afterFreespinStatus) {						
						katerSong.play();
					}
					otherSound = true;
				}
			}
			if (info[squareArr[wlWinValuesArray[lineflash]-1][0]-1] === 1 & (info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === 1)){
				if (firstAroundAnim) {
					if (!afterFreespinStatus) {		
						planeSong.play();
					}
					otherSound = true;
				}
			}
			if (info[squareArr[wlWinValuesArray[lineflash]-1][0]-1] === 4 & (info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === 4)){
				if (firstAroundAnim) {
					if (!afterFreespinStatus) {		
						carSong.play();
					}
					otherSound = true;
				}
			}
			if (info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === trigerLine){
				if (info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === 0){
					multiStatus = true;
				}
				if (info[squareArr[wlWinValuesArray[lineflash]-1][3]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][3]-1] === trigerLine){
					if (info[squareArr[wlWinValuesArray[lineflash]-1][3]-1] === 0){
						multiStatus = true;
					}
					if (info[squareArr[wlWinValuesArray[lineflash]-1][4]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][4]-1] === trigerLine){
						if (info[squareArr[wlWinValuesArray[lineflash]-1][4]-1] === 0){
							multiStatus = true;
						}
						sizeLine = 5;
					} else {
						sizeLine = 4;
					}
				} else {
					sizeLine = 3;
				}
			} else {
				sizeLine = 2;
			}
			if (!afterFreespinStatus){
				if(firstAnim ){
					if (!otherSound){				
						updateBalance();
					} else {
						setTimeout(function() {
							updateBalance();
						}, 2000);
					}			
					firstAnim = false;	
				}				
			}

			if (multiStatus){
				winText.setText("2 x " + wlValues[wlWinValuesArray[lineflash]]/2 + " TOTALS " +wlValues[wlWinValuesArray[lineflash]]+ " CREDITS");
				if(firstAroundAnim){
					if (!otherSound){		
						if (!afterFreespinStatus) {		
							briLineWinSound.play();
						}
					}
					for (var i = 1; i <= sizeLine; ++i) {
						if (info[squareArr[wlWinValuesArray[lineflash]-1][i-1]-1] === 0){
							briAnimArr[squareArr[wlWinValuesArray[lineflash]-1][i-1]].visible = true;
							briAnimArr[squareArr[wlWinValuesArray[lineflash]-1][i-1]].animations.add('scatters_anim', [0,1,2,3,4,0,1,2,3,4], 10, false).play().onComplete.add(function(){
								for (var i = 1; i <= 15; ++i) {
									briAnimArr[i].visible = false;
								}
							});
						}
					}
				}
			}
			if(firstAroundAnim){
				for (var i = 1; i <= sizeLine; ++i) {
					if (sizeLine >= 3){
						if (info[squareArr[wlWinValuesArray[lineflash]-1][i-1]-1] === 4){
							carAnimArr[squareArr[wlWinValuesArray[lineflash]-1][i-1]].visible = true;
							carAnimArr[squareArr[wlWinValuesArray[lineflash]-1][i-1]].animations.add('scatters_anim', [4,3,2,1,0], 7, false).play().onComplete.add(function(){
								for (var i = 1; i <= 15; ++i) {
									carAnimArr[i].visible = false;
								}
							});
						}
						if (info[squareArr[wlWinValuesArray[lineflash]-1][i-1]-1] === 1){
							planeAnimArr[squareArr[wlWinValuesArray[lineflash]-1][i-1]].visible = true;
							planeAnimArr[squareArr[wlWinValuesArray[lineflash]-1][i-1]].animations.add('scatters_anim', [6,5,4,3,2,1,0], 7, false).play().onComplete.add(function(){
								for (var i = 1; i <= 15; ++i) {
									planeAnimArr[i].visible = false;
								}
							});
						}
						if (info[squareArr[wlWinValuesArray[lineflash]-1][i-1]-1] === 9){
							katerAnimArr[squareArr[wlWinValuesArray[lineflash]-1][i-1]].visible = true;
							katerAnimArr[squareArr[wlWinValuesArray[lineflash]-1][i-1]].animations.add('scatters_anim', [4,3,2,1,0], 7, false).play().onComplete.add(function(){
								for (var i = 1; i <= 15; ++i) {
									katerAnimArr[i].visible = false;
								}
							});
						}
					}
				}
			}
			flickLine(sizeLine, wlWinValuesArray[lineflash], wlWinValuesArray);
		}
		function flickLine(sizeLine, lineNumber, wlWinValuesArray){
			if (stopWinAnim == true){
				return;
			}
			showLine(lineNumber);
			for (var i = 1; i <= sizeLine; ++i) {
				squareArrImg[lineNumber-1][i-1].visible = true;
				game1.copyCell[squareArr[lineNumber-1][i-1]].visible = true;
			}
			setTimeout(function() {
				if (stopWinAnim == true){
					return;
				}
				winText.visible = false;
				if(afterFreespinStatus){
					bonusWinText.visible = false;
				}
				game1.lineArr[lineNumber].tint = 0x000000;
				for (var i = 1; i <= sizeLine; ++i) {
					squareArrImg[lineNumber-1][i-1].tint = 0x000000;
				}
				setTimeout(function() {
					if (stopWinAnim == true){
						return;
					}
					game1.lineArr[lineNumber].tint = 0xffffff;
					for (var i = 1; i <= sizeLine; ++i) {
						squareArrImg[lineNumber-1][i-1].tint = 0xffffff;
					}
					winText.visible = true;
					if(afterFreespinStatus){
						bonusWinText.visible = true;
					}
					setTimeout(function() {
						if (stopWinAnim == true){
							return;
						}
						winText.visible = false;
						if(afterFreespinStatus){
							bonusWinText.visible = false;
						}
						game1.lineArr[lineNumber].tint = 0x000000;
						for (var i = 1; i <= sizeLine; ++i) {
							squareArrImg[lineNumber-1][i-1].tint = 0x000000;
						}
						setTimeout(function() {
							if (stopWinAnim == true){
								return;
							}
							game1.lineArr[lineNumber].tint = 0xffffff;
							for (var i = 1; i <= sizeLine; ++i) {
								squareArrImg[lineNumber-1][i-1].tint = 0xffffff;
							}
							winText.visible = true;
							if(afterFreespinStatus){
								bonusWinText.visible = true;
							}
							setTimeout(function() {
								if (stopWinAnim == true){
									return;
								}
								if (lineflash === wlWinValuesArray.length - 1){
									firstAroundAnim = false;
									lineflash = 0;
								} else {
									lineflash = lineflash + 1;
								}
								if (wlWinValuesArray.length === 1){
									winText.visible = false;
									if(afterFreespinStatus){
										bonusWinText.visible = false;
									}
									game1.lineArr[lineNumber].tint = 0x000000;
									for (var i = 1; i <= sizeLine; ++i) {
										squareArrImg[lineNumber-1][i-1].tint = 0x000000;
									}
									setTimeout(function() {
										if (stopWinAnim == true){
											return;
										}
										game1.lineArr[lineNumber].tint = 0xffffff;
										for (var i = 1; i <= sizeLine; ++i) {
											squareArrImg[lineNumber-1][i-1].tint = 0xffffff;
										}
										if(afterFreespinStatus){
											hideLines();
											hideSquare();
											if(lineflash === 0){
												showWinFreeSpin(wcvWinValuesArrayOld);
											} else {
												showWin(wlWinValuesArrayOld, winCellInfoOld)
											}
										} else {
											showWin(wlWinValuesArray, winCellInfo)
										}
									}, 150);
								} else{
									hideLines();
									hideSquare();
									for (var i = 1; i <= sizeLine; ++i) {
										game1.copyCell[squareArr[lineNumber-1][i-1]].visible = false;
									}
									if(afterFreespinStatus){
										if(lineflash === 0){
											showWinFreeSpin(wcvWinValuesArrayOld);
										} else {
											showWin(wlWinValuesArrayOld, winCellInfoOld)
										}
									} else {
										showWin(wlWinValuesArray, winCellInfo)
									}
								}
							}, 500);
						}, 200);
					}, 500);
				}, 200);
			}, 500);
		};

		function upLines(){
			stopWinAnim = true;
			for (var i = 1; i <= 15; ++i) {
				game1.copyCell[i].visible = false;
			}
			hideLines();
			hideSquare();
			lines = lines +1;
			if(lines > 15){
				lines = 1
				hideLinesCircle();
				hideLinesCircleText();
			}
			hideLines();
			showLine(lines);
			showLineCircle(lines);
			showLineCircleText(lines);
			bet = lines * betline;
			checkScore();
			linesText.setText(lines)
			totalBet.setText(bet)
		}
		function upLinesBet(){
			stopWinAnim = true;
			for (var i = 1; i <= 15; ++i) {
				game1.copyCell[i].visible = false;
			}
			hideLines();
			hideSquare();
			betline = betline+1;
			if(betline > 10){
				betline = 1
			}
			for (var i = 1; i <= 15; ++i) {
				game1.textArr[i].setText(betline);
			}
			bet = lines * betline;
			checkScore();
			lineBetText.setText(betline)
			totalBet.setText(bet)
		}
		function addScore() {
			credit = game.add.text(186, 659, balance, {
				font: '45px "Digital-7 Mono"',
				fill: '#01e033'
			});
			credit.anchor.setTo(1, 0.5);
			linesText = game.add.text(483, 659, lines, {
				font: '45px "Digital-7 Mono"',
				fill: '#01e033'
			});
			linesText.anchor.setTo(1, 0.5);
			lineBetText = game.add.text(627, 659, betline, {
				font: '45px "Digital-7 Mono"',
				fill: '#01e033'
			});
			lineBetText.anchor.setTo(1, 0.5);
			totalBet = game.add.text(768, 659, bet, {
				font: '47px "Digital-7 Mono"',
				fill: '#01e033'
			});
			totalBet.anchor.setTo(1, 0.5);
			paid = game.add.text(953, 659, '0', {
				font: '47px "Digital-7 Mono"',
				fill: '#01e033'
			});
			paid.anchor.setTo(1, 0.5);
			winText = game.add.text(90, 602, '2x30 TOTALS CREDITS', {
				font: '25px "Fixedsys Excelsior 3.01"',
				fill: '#fdff41'
			});
			winText.anchor.setTo(0, 0.5);
			winText.visible = false;
			bonusWinText = game.add.text(512, 602, 'BONUS WON 240', {
				font: '25px "Fixedsys Excelsior 3.01"',
				fill: '#ff4921'
			});
			bonusWinText.anchor.setTo(0.5, 0.5);
			bonusWinText.visible = false;
			gameStatusText = game.add.text(771, 602, 'WINNER', {
				font: '25px "Fixedsys Excelsior 3.01"',
				fill: '#fdff41'
			});
			gameStatusText.anchor.setTo(0, 0.5);
			gameStatusText.visible = false;
			topText = game.add.text(512, 93, 'GOOD LUCK', {
				font: '35px "Koblenz-Serial"',
				fill: '#fdff41'
			});
			var grd = topText.context.createLinearGradient(0, 0, 0, topText.height);

			grd.addColorStop(0, '#fdff41');
			grd.addColorStop(1, '#fdff41');

			topText.fill = grd;
			topText.anchor.setTo(0.5, 0.5);

			collect_text = game.add.text(510, 341, 'HAND PAY 25585 CREDITS', {
				font: '35px "PF Agora Slab Pro"',
				fill: '#fffc15'
			});
			collect_text.anchor.setTo(0.5, 0.5);
			collect_text.visible = false;
		}
		function flickcollect_text(){
			collect_text.visible = true;
			setTimeout(function() {
				collect_text.visible = false;
				setTimeout(function() {
					flickcollect_text();
				}, 500);
			}, 500);
		}
		var helpPageCurent = 1;
		var paytablePageCurent = 1;
		function addPaytable(){
			help_page = game.add.sprite(0, 0, 'help_page_1');
			help_page.visible = false;
			paytable_page = game.add.sprite(0, 0, 'paytable_page_1');
			paytable_page.visible = false;
			return_to_game = game.add.sprite(883, 506, 'return');
			return_to_game.inputEnabled = true;
			return_to_game.input.useHandCursor = true;
			return_to_game.events.onInputDown.add(function(){
				return_to_game.loadTexture('return_p');
			});
			return_to_game.events.onInputUp.add(function(){
				return_to_gameSong.play();
				paytableStatus = false;
				return_to_game.loadTexture('return');
				help_page.visible = false;
				paytable_page.visible = false;
				help_next.visible = false;
				paytable_next.visible = false;
				return_to_game.visible = false;
				showButtons();
				checkScore();
			})
			return_to_game.visible = false;
			help_next = game.add.sprite(883, 85, 'moreHelp');
			help_next.inputEnabled = true;
			help_next.input.useHandCursor = true;
			help_next.events.onInputDown.add(function(){
				help_next.loadTexture('moreHelp_p');
			});
			help_next.events.onInputUp.add(function(){
				more_paysSound.play();
				help_next.loadTexture('moreHelp');
				nextHelp(helpPageCurent);
			})
			help_next.visible = false;
			paytable_next = game.add.sprite(883, 85, 'morePays');
			paytable_next.inputEnabled = true;
			paytable_next.input.useHandCursor = true;
			paytable_next.events.onInputDown.add(function(){
				paytable_next.loadTexture('morePays_p');
			});
			paytable_next.events.onInputUp.add(function(){
				more_paysSound.play();
				paytable_next.loadTexture('morePays');
				nextPaytable(paytablePageCurent);
			})
			paytable_next.visible = false;
			paytable_next
		}
		function nextHelp(value){
			helpPageCurent = helpPageCurent +1;
			if(helpPageCurent > 4){
				helpPageCurent = 1;
			}
			help_page.loadTexture('help_page_' + helpPageCurent);
		}
		function nextPaytable(value){
			paytablePageCurent = paytablePageCurent +1;
			if(paytablePageCurent > 5){
				paytablePageCurent = 1;
			}
			paytable_page.loadTexture('paytable_page_' + paytablePageCurent);
		}
		function showButtons(buttonsArray = []) {
			if(buttonsArray.length == 0) {
				paytable.inputEnabled = true;
				paytable.input.useHandCursor = true;
				paytable.visible = true;
				help.inputEnabled = true;
				help.input.useHandCursor = true;
				help.visible = true;
				selectLines.inputEnabled = true;
				selectLines.input.useHandCursor = true;
				selectLines.visible = true;
				betPerLine.inputEnabled = true;
				betPerLine.input.useHandCursor = true;
				betPerLine.visible = true;
				startButton.inputEnabled = true;
				startButton.input.useHandCursor = true;
				startButton.visible = true;
				maxBetSpin.inputEnabled = true;
				maxBetSpin.input.useHandCursor = true;
				maxBetSpin.visible = true;
				exit.inputEnabled = true;
				exit.input.useHandCursor = true;
				exit.visible = true;
				autoPlay.inputEnabled = true;
				autoPlay.input.useHandCursor = true;
				autoPlay.visible = true;
				spaceStatus = true;
				$('.menu_wrap').css({
					display: 'block'
				});
				if (isMobile) {
					$('#spin').css({
						display: 'block'
					});
				}
			} else {
				buttonsArray.forEach(function (item) {
					item[0].inputEnabled = true;
					item[0].input.useHandCursor = true;
					item[0].visible = true;
				})
			}
		}
		showButMob = function showB(){
			showButtons();
		}
		hideButMob = function hideB(){
			hideButtons();
		}
		function stopUpdateBalance(){
			balanceUpdateStatus = false;
			if ((balance + allWin) < betline*lines){
				autostart = false;
				$("#spin").removeClass('auto');
				showButtons();
				hideButtons([[startButton, 'startButton']]);
				hideButtons([[autoPlay, 'autoPlay']]);
				if((balance + allWin) < 1){
					hideButtons([[maxBetSpin, 'maxBetSpin']]);
				}
				hideMobileBtn();
				autoPlay.loadTexture('autoPlay');
				if ((balance + allWin) === 0){
					showButtons([[autoPlay, 'autoPlay']]);
					autoPlay.loadTexture('addCredit'); 
				}
			} else {
				if(autostart == false){
					showButtons([[startButton, 'startButton']]);
					showButtons([[autoPlay, 'autoPlay']]);
					showButtons([[maxBetSpin, 'maxBetSpin']]);
					showMobileBtn();
				}
			}
			firstAroundAnim = false;
			katerSong.stop();
			planeSong.stop();
			carSong.stop();
			briLineWinSound.stop();
			winSound.stop();
			updateFinishSound.play();
			flickStatusTextValue	= true;
			gameStatusText.visible = true;
			gameStatusText.fill = '#fdff41';
			gameStatusText.setText('GAME OVER');
			allWinOld = allWinOld + allwinUpd;
			paid.setText(allwinUpd);
			credit.setText(balance + allwinUpd);
		}
		stopUB =	function stopUpdateBalance2(){
			balanceUpdateStatus = false;
			if ((balance + allWin) < betline*lines){
				autostart = false;
				$("#spin").removeClass('auto');
				showButtons();
				hideButtons([[startButton, 'startButton']]);
				hideButtons([[autoPlay, 'autoPlay']]);
				if((balance + allWin) < 1){
					hideButtons([[maxBetSpin, 'maxBetSpin']]);
				}
				hideMobileBtn();
				autoPlay.loadTexture('autoPlay');
				if ((balance + allWin) === 0){
					showButtons([[autoPlay, 'autoPlay']]);
					autoPlay.loadTexture('addCredit'); 
				}
			} else {
				if(autostart == false){
					showButtons([[startButton, 'startButton']]);
					showButtons([[autoPlay, 'autoPlay']]);
					showButtons([[maxBetSpin, 'maxBetSpin']]);
					showMobileBtn();
				}
			}
			winSound.stop();
			updateFinishSound.play();
			flickStatusTextValue	= true;
			gameStatusText.visible = true;
			gameStatusText.fill = '#fdff41';
			gameStatusText.setText('GAME OVER');
			allWinOld = allWinOld + allwinUpd;
			paid.setText(allwinUpd);
			credit.setText(balance + allwinUpd);
		}
		function updateBalance(){
			var x = 0;
			var interval;
			if(autostart == false){
				showButtons();
			};
			if ((balance + allWin) < betline*lines){
				autostart = false;
				$("#spin").removeClass('auto');
				showButtons();
				hideButtons([[startButton, 'startButton']]);
				hideButtons([[autoPlay, 'autoPlay']]);
				if((balance + allWin) < 1){
					hideButtons([[maxBetSpin, 'maxBetSpin']]);
				}
				hideMobileBtn();
				autoPlay.loadTexture('autoPlay');
				if ((balance + allWin) === 0){
					showButtons([[autoPlay, 'autoPlay']]);
					autoPlay.loadTexture('addCredit'); 
				}
			} else {
				if(autostart == false){
					showButtons([[startButton, 'startButton']]);
					showButtons([[autoPlay, 'autoPlay']]);
					showButtons([[maxBetSpin, 'maxBetSpin']]);
					showMobileBtn();
				}
			}
			if (briSound){
				var randomText = randomNumber(1,8);
				switch (randomText) {
					case 1:
					winSound = game.add.audio('high1');
					break;
					case 2:
					winSound = game.add.audio('high2');
					break;
					case 3:
					winSound = game.add.audio('medium1');
					break;
					case 4:
					winSound = game.add.audio('medium2');
					break;
					case 5:
					winSound = game.add.audio('medium3');
					break;
					case 6:
					winSound = game.add.audio('medium4');
					break;
					case 7:
					winSound = game.add.audio('medium5');
					break;
					case 8:
					winSound = game.add.audio('medium6');
					break;
				}
			} else if(afterFreespinStatus || allWin > 1500){
				var randomText = randomNumber(1,2);
				switch (randomText) {
					case 1:
					winSound = game.add.audio('high1');
					break;
					case 2:
					winSound = game.add.audio('high2');
					break;
				}
			} else if (allWin > 60){
				var randomText = randomNumber(1,4);
				switch (randomText) {
					case 1:
					winSound = game.add.audio('medium1');
					break;
					case 2:
					winSound = game.add.audio('medium2');
					break;
					case 3:
					winSound = game.add.audio('medium3');
					break;
					case 4:
					winSound = game.add.audio('medium4');
					break;
					case 5:
					winSound = game.add.audio('medium5');
					break;
					case 6:
					winSound = game.add.audio('medium6');
					break;
				}
			} else if (allWin > 10){
				var randomText = randomNumber(1,6);
				switch (randomText) {
					case 1:
					winSound = game.add.audio('low1');
					break;
					case 2:
					winSound = game.add.audio('low2');
					break;
					case 3:
					winSound = game.add.audio('low3');
					break;
					case 4:
					winSound = game.add.audio('low4');
					break;
				}
			} else {
				winSound = game.add.audio('lowest1');
			}
			winSound.loop = true;
			if (allWin <= bet*0.25){
				winSound.loop = false;
			}
			winSound.play();
			allwinUpd = allWin;
			spinStatus = false;
			balanceUpdateStatus = true;
			(function() {
				if (x < allwinUpd) {
					interval = 1000/10;
					if (allWin > 5000){
						x += 30;
					} else if (allWin > 2000){
						x += 25;
					} else if (allWin > 1000){
						x += 15;
					} else if (allWin > 500){
						x += 10;
					} else if (allWin > 300){
						x += 5;
					} else if (allWin > 200){
						x += 3;
					} else if (allWin > 50){
						x += 2;
					} else {
						x += 1;
					}
					if (balanceUpdateStatus === false){
						return;
					} else{
						paid.setText(x);
						credit.setText(balance + x);
						setTimeout(arguments.callee, interval);
					}
				} else {
					balanceUpdateStatus = false;
					if(autostart == false){
						showButtons();
					}
					if ((balance + allWin) < betline*lines){
						autostart = false;
						$("#spin").removeClass('auto');
						showButtons();
						hideButtons([[startButton, 'startButton']]);
						hideButtons([[autoPlay, 'autoPlay']]);
						if((balance + allWin) < 1){
							hideButtons([[maxBetSpin, 'maxBetSpin']]);
						}
						hideMobileBtn();
						autoPlay.loadTexture('autoPlay');
						if ((balance + allWin) === 0){
							showButtons([[autoPlay, 'autoPlay']]);
							autoPlay.loadTexture('addCredit'); 
						}
					} else {
						if(autostart == false){
							showButtons([[startButton, 'startButton']]);
							showButtons([[autoPlay, 'autoPlay']]);
							showButtons([[maxBetSpin, 'maxBetSpin']]);
							showMobileBtn();
						}
					}
					flickStatusTextValue	= true;
					gameStatusText.visible = true;
					gameStatusText.fill = '#fdff41';
					gameStatusText.setText('GAME OVER');
					allWinOld = allWinOld + allwinUpd;
					paid.setText(allwinUpd);
					credit.setText(balance + allwinUpd);
					winSound.stop();
					updateFinishSound.play();
					if(autostart == true){
						setTimeout(function() {
							if(autostart == true & spinStatus === false){
								startFunc();
							}
						}, 1000);
					}
				}
			})();
		}
		var coinArrayLeft = [];
		var coinArrayRight = [];
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
		addEventListener("keyup", function(event) {
			if (event.keyCode == 32){
				if (curGame === 1){
					if (spaceStatus){
						if (spinStatus === false){
							if (paytableStatus === false){
								if(autostart === false){
									if ((balance + allWinOld) >= betline*lines){
										if(balanceUpdateStatus){
											stopUpdateBalance();
										} else{
											allWinOld = 0;
											stopWinAnim = true;
											lineflash = 0;
											realSpinStatus = true;
											spinStatus = true;
											firstAnim = true;
											winText.visible = false;
											bonusWinText.visible = false;
											topBottomLabel.visible = false;
											afterFreespinStatus = false;
											for (var i = 1; i <= 15; ++i) {
												game1.copyCell[i].visible = false;
												squareArrFreespin[i].visible = false;
												squareArrFreespin[i].tint = 0xffffff;
												briAnimArr[i].visible = false;
												coinAnimArr[i].visible = false;
												planeAnimArr[i].visible = false;
												katerAnimArr[i].visible = false;
											}
											gameStatusText.visible = false;
											topText.visible = true;
											paid.setText('0');
											topText.setText("GOOD LUCK");
											hideLines();
											hideButtons();
											hideSquare();
											startspinSound.play();
											setTimeout(function() {
												setTimeout(function() {
													startspin(0);
													setTimeout(function() {
														startspin(1);
														setTimeout(function() {
															startspin(2);
															setTimeout(function() {
																startspin(3);
																setTimeout(function() {
																	startspin(4);
																	var randomText = randomNumber(0,2)
																	switch (randomText) {
																		case 0:
																		spinSound1.play();
																		break;
																		case 1:
																		spinSound2.play();
																		break;
																		case 2:
																		spinSound3.play();
																		break;
																	}
																}, 50);
															}, 50);
														}, 50);
													}, 50);
												}, 50);
											}, 500);
											requestSpin(gamename, sessionName, betline, lines);
										}
									}
								}
							}
						}
					} else {
						if (paytableStatus === false){
							if(autostart === false){
								if (timeSpin){
									if (g1s === true){
										g1s = false;
									} else {
										g2s = false;
									}
									startspinSound.stop();
									spinSound1.stop();
									spinSound2.stop();
									spinSound3.stop();
									timeSpin = false;
									game1.bars[0].visible = false;
									game1.cell[1+3*0].visible = true;
									game1.cell[2+3*0].visible = true;
									game1.cell[3+3*0].visible = true;
									game1.bars[1].visible = false;
									game1.cell[1+3*1].visible = true;
									game1.cell[2+3*1].visible = true;
									game1.cell[3+3*1].visible = true;
									game1.bars[2].visible = false;
									game1.cell[1+3*2].visible = true;
									game1.cell[2+3*2].visible = true;
									game1.cell[3+3*2].visible = true;

									game1.bars[3].visible = false;
									game1.cell[1+3*3].visible = true;
									game1.cell[2+3*3].visible = true;
									game1.cell[3+3*3].visible = true;

									game1.bars[4].visible = false;
									game1.cell[1+3*4].visible = true;
									game1.cell[2+3*4].visible = true;
									game1.cell[3+3*4].visible = true;

									game1.cell[1].loadTexture('cell'+info[0]);
									game1.cell[2].loadTexture('cell'+info[1]);
									game1.cell[3].loadTexture('cell'+info[2]);
									game1.cell[4].loadTexture('cell'+info[3]);
									game1.cell[5].loadTexture('cell'+info[4]);
									game1.cell[6].loadTexture('cell'+info[5]);
									game1.cell[7].loadTexture('cell'+info[6]);
									game1.cell[8].loadTexture('cell'+info[7]);
									game1.cell[9].loadTexture('cell'+info[8]);
									game1.cell[10].loadTexture('cell'+info[9]);
									game1.cell[11].loadTexture('cell'+info[10]);
									game1.cell[12].loadTexture('cell'+info[11]);
									game1.cell[13].loadTexture('cell'+info[12]);
									game1.cell[14].loadTexture('cell'+info[13]);
									game1.cell[15].loadTexture('cell'+info[14]);
									if (game1.spinStatus1 === true){
										game1.spinStatus1 = false;
										endspin(0);
									}
									if (game1.spinStatus2 === true){
										game1.spinStatus2 = false;
										endspin(1);
									}
									if (game1.spinStatus3 === true){
										game1.spinStatus3 = false;
										endspin(2);
									}
									if (game1.spinStatus4 === true){
										game1.spinStatus4 = false;
										endspin(3);
									}
									if (game1.spinStatus5 === true){
										game1.spinStatus5 = false;
										endspin(4);
									}
									finishSpinSound.play();
								}
							}
						}
					}
				}
			}
		});
function checkScore(){
	if ((balance + allWinOld) < betline*lines){
		hideButtons([[startButton, 'startButton']]);
		autoPlay.loadTexture('autoPlay');
		hideButtons([[autoPlay, 'autoPlay']]);
		if((balance + allWinOld) < 1){
			hideButtons([[maxBetSpin, 'maxBetSpin']]);
		}
		if ((balance + allWin) === 0){
			showButtons([[autoPlay, 'autoPlay']]);
			autoPlay.loadTexture('addCredit'); 
		}
		hideMobileBtn();
	} else {
		showButtons([[startButton, 'startButton']]);
		showButtons([[autoPlay, 'autoPlay']]);
		showButtons([[maxBetSpin, 'maxBetSpin']]);
		showMobileBtn();
	}
}
function pickMaxSpin(){
	var currentBalance = balance + allWinOld;
	var curNumb = 1;
	var curLine = 1;
	var curBet = 1;
	for (var i = 1; i <= 15; ++i) {
		for (var j = 1; j <= 10; ++j) {
			if (i*j > curNumb  &i*j <= currentBalance){
				curNumb = i*j;
				curLine = i;
				curBet = j;
			} else if(i*j === curNumb){
				if (curBet < j){
					curLine = i;
					curBet = j;
				}
			}
		}
	}
	lines = curLine;
	betline = curBet;
}
if(firstStartGame){
	hideMobileBtn();
	firstStartGame = false;
	if (isMobile) {
		black_bg2 = game.add.sprite(0,0, 'black_bg2');
		black_bg2.inputEnabled = true;
		btn_yes = game.add.sprite(238,476, 'btn_yes');
		btn_yes.inputEnabled = true;
		btn_yes.input.useHandCursor = true;
		btn_yes.events.onInputUp.add(function(){
			game.sound.mute = false;
			black_bg2.visible = false;
			btn_yes.visible = false;
			btn_no.visible = false;
			checkScore()
		});
		btn_no = game.add.sprite(544,475, 'btn_no');
		btn_no.inputEnabled = true;
		btn_no.input.useHandCursor = true;
		btn_no.events.onInputUp.add(function(){
			game.sound.mute = true;
			black_bg2.visible= false;
			btn_yes.visible= false;
			btn_no.visible= false;
			checkScore()
		});
	} else{
		showMobileBtn();
	}
};
};

game1.update = function () {
	if (game1.spinStatus1){
		game1.bars[0].tilePosition.y += 40;
	}
	if (game1.spinStatus2){
		game1.bars[1].tilePosition.y += 40;
	}
	if (game1.spinStatus3){
		game1.bars[2].tilePosition.y += 40;
	}
	if (game1.spinStatus4){
		game1.bars[3].tilePosition.y += 40;
	}
	if (game1.spinStatus5){
		game1.bars[4].tilePosition.y += 40;
	};
	game1.ticker.tilePosition.x += 0.5;
};

game.state.add('game1', game1);

};
