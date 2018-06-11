function game2() {

	var game2 = {
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
		briBgArr : [],
		textArr : [],
		squareArr : [],
		colorLine : ['#009800','#fffc00','#0004ff','#ff0000','#ff00d1','#00fa6d','#89ff00','#ff7f00','#9400ff','#0004ff','#009300','#ff3900','#ff3900','#9400ff','#89ff00']
	};

	game2.preload = function () {};

	game2.create = function () {    
		curGame = 2;    
		var mulFreespin = 2;
		var freeSpinCount = 10;

		var balanceSongAudio = game.add.audio('balanceSong');
		balanceSongAudio.loop = true;
		var briSoundAudio = game.add.audio('briSound');
		game.add.sprite(0,0, 'game.background_overlay');
		var cellPos =[
		[90,125],
		[90,274],
		[90,423],
		[263,125],
		[263,274],
		[263,423],
		[435,125],
		[435,274],
		[435,423],
		[609,125],
		[609,274],
		[609,423],
		[782,125],
		[782,274],
		[782,423]
		];
		for (var i = 1; i <= 15; ++i) {
			game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'emptyCell');
		}
		info = [5,1,2,3,4,5,6,7,1,9,6,4,2,3,1];
		for (var i = 1; i <= 15; ++i) {
			game2.cell[i] = game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'cell'+info[i-1]+'_f');
		}
		console.log(info)
		game2.bars[0] = game.add.tileSprite(90, 125, 149, 447, 'bar2');
		game2.bars[0].tilePosition.y =  randomNumber(0,9)*149 ;
		game2.bars[1] = game.add.tileSprite(263, 125, 149, 447, 'bar2');
		game2.bars[1].tilePosition.y =  randomNumber(0,9)*149;
		game2.bars[2] = game.add.tileSprite(435 , 125, 149, 447, 'bar2');
		game2.bars[2].tilePosition.y =  randomNumber(0,9)*149;
		game2.bars[3] = game.add.tileSprite(609, 125, 149, 447, 'bar2');
		game2.bars[3].tilePosition.y =  randomNumber(0,9)*149;
		game2.bars[4] = game.add.tileSprite(782, 125, 149, 447, 'bar2');
		game2.bars[4].tilePosition.y =  randomNumber(0,9)*149;
		game2.bars[0].visible = false;
		game2.bars[1].visible = false;
		game2.bars[2].visible = false;
		game2.bars[3].visible = false;
		game2.bars[4].visible = false;

		game.add.sprite(0,0, 'game.background2');
		topLabel2 = game.add.sprite(330,20, 'top_label_2');
		topBottomLabel = game.add.sprite(57,42, 'top_bottom_label_2');
		topBottomLabel.visible = false;
		for (var i = 1; i <= 27; ++i) {
			game2.briBgArr[i] = game.add.sprite(155+(i-1)*35, 671, 'bg_bri');
			game2.briBgArr[i].anchor.setTo(0.5, 0.5);
			game2.briBgArr[i].visible = false;
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
		addLines(circlePos, linePos, textPos, cellPos, squareArr, squareArrImg)
		hideLines();
		hideLinesCircle();
		hideLinesCircleText();
		for (var i = 1; i <= lines; ++i) {
			showLineCircle(i);
			showLineCircleText(i);
		}
		function addLines(circlePos, linePos, textPos, cellPos, squareArr, squareArrImg){
			for (var i = 1; i <= 15; ++i) {
				game2.circleArr[i] = game.add.sprite(circlePos[i-1][0], circlePos[i-1][1], 'circleLine_' + i);
				game2.lineArr[i] = game.add.sprite(linePos[i-1][0], linePos[i-1][1], 'line_' + i);
				game2.textArr[i] = game.add.text(textPos[i-1][0], textPos[i-1][1], betline, {
					font: '25px "swis721_hv_btheavy"',
					fill: '#000000'
				});							
				game2.textArr[i].anchor.setTo(0.5, 0.5);
			}
			for (var i = 1; i <= 15; ++i) {
				game2.copyCell[i] = game.add.sprite(cellPos[i-1][0], cellPos[i-1][1], 'cell0');
				game2.copyCell[i].visible = false;
			}
			for (var i = 1; i <= 15; ++i) {
				for (var j = 1; j <= 5; ++j) {
					squareArrImg[i-1][j-1] = game.add.sprite(cellPos[squareArr[i-1][j-1]-1][0]-1, cellPos[squareArr[i-1][j-1]-1][1]-1, 'square_' + i);
					squareArrImg[i-1][j-1].visible = false;
				}
			}
		}

		function showLine(lineNumber) {
			game2.lineArr[lineNumber].visible = true;
		}
		function showLineCircle(lineNumber) {
			game2.circleArr[lineNumber].visible = true;
		}
		function showLineCircleText(lineNumber) {
			game2.textArr[lineNumber].visible = true;
		}
		function showSquare(lineNumber, squareNumber){
			squareArrImg[lineNumber-1][squareNumber-1].visible = true;
		}
		function hideLines() {
			game2.lineArr.forEach(function (line) {
				line.visible = false;
				line.tint = 0xffffff;
			});
		};
		function hideLinesCircle() {
			game2.circleArr.forEach(function (line) {
				line.visible = false;
			});
		};
		function hideLinesCircleText() {
			game2.textArr.forEach(function (line) {
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
		scorePosions = [[160, 57, 38], [160, 81, 18], [342, 57, 38], [342, 81, 18], [526, 57, 38], [526, 81, 18], [187, 648, 17], [828, 648, 17]];
		balance = +balance;
		addScore();
		addPaytable();
		blackBg = game.add.sprite(0, 0, 'black_bg'); 
		blackBg.alpha = 1;
		blackBg.visible = true;
		setTimeout(function() {
			game.add.tween(blackBg).to( { alpha: 0 }, 750, "Linear", true).onComplete.add(function(){				
				setTimeout(function() {
					$('.menu_wrap').css({
						display: 'block'
					});
					freeSpinStart()
				}, 1000);
			});
		}, 1000);
		function freeSpinStart(){
			stopWinAnim = true;
			lineflash = 0;
			realSpinStatus = true;
			game2.spinStatus = true;
			winText.visible = false;
			topBottomLabel.visible = false;
			for (var i = 1; i <= 15; ++i) {
				game2.copyCell[i].visible = false;
			}
			// gameStatusText.visible = false;
			topText.visible = true;
			freeSpinCount = freeSpinCount -1;
			spinsLeft.setText(freeSpinCount)
			paid.setText('0');
			topText.setText("Free Spin " + (10 - freeSpinCount) + " - All Wins X " +mulFreespin);
			hideLines();
			// hideButtons();
			hideSquare();
			startspin(0);
			startspin(1);
			startspin(2);
			startspin(3);
			startspin(4);
			requestSpin(gamename, sessionName, betline, lines);
		}
		function requestSpin(gamename, sessionName, betline, lines) {
			$.ajax({
				type: "get",
				url: getNeedUrlPath()+'/spin/'+gamename+'?sessionName='+sessionName+'&betLine='+betline+'&linesInGame='+lines,
				dataType: 'html',
				success: function (data) {
					console.log(data);
					dataSpinRequest = JSON.parse(data);
					
					if(dataSpinRequest['state']) {
						parseSpinAnswer(dataSpinRequest);
					}
				},
				error: function (xhr, ajaxOptions, thrownError) {
					if (freeSpinCount !== 10) {
						var errorText = '//ошибка 30';
						console.log(errorText);
						reconnectSpin(gamename, sessionName, betline, lines);
						// setTimeout("requestSpin(gamename, sessionName, betline, lines)", 100);
					} else {
						requestSpin(gamename, sessionName, betline, lines);
					}
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
		function parseSpinAnswer(dataSpinRequest) {
			dataArray = dataSpinRequest;
			dataArrValue = dataArray.length;
			if (dataArray['state']) {
				ropeValues = dataArray['rope'];

				winCellInfo = dataArray['winCellInfo'];
				wlValues = dataArray['wl'];

				balanceOld = balance; 
				balanceR = dataArray['balance'];
				balance = dataArray['balance']; 

				linesR = dataArray['linesInGame'];
				betlineR = dataArray['betLine'];
				winBonusSymbolsData = dataArray['winBonusSymbolsData'];
				allWin = dataArray['allWin'];        
				if (ropeValues !== null & ropeValues !== false){
					allWin = ropeValues['allWin']
					mulFreespin = ropeValues['mul'];
				}
				dcard = dataArray['dcard'];
				dcardOld = dataArray['dcard'];
				if (realSpinStatus){
					// credit.setText(balance);
					realSpinStatus = false;
				}

				info = dataArray['info'];
				setTimeout(function() {
					middlespin(0);
					middlespin(1);
					middlespin(2);
					middlespin(3);
					middlespin(4);
				}, 200);

			}  
		}
		function startspin(number){
			game.add.tween(game2.cell[1+number*3]).to({y:game2.cell[1+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				game2.cell[1+number*3].visible = false;
			});
			game.add.tween(game2.cell[2+number*3]).to({y:game2.cell[2+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				game2.cell[2+number*3].visible = false;
			});
			game.add.tween(game2.cell[3+number*3]).to({y:game2.cell[3+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
				game2.cell[3+number*3].visible = false;
				game2.bars[number].visible = true;
				if (number == 0){
					game2.spinStatus1 = true;
				}
				if (number == 1){
					game2.spinStatus2 = true;
				}
				if (number == 2){
					game2.spinStatus3 = true;
				}
				if (number == 3){
					game2.spinStatus4 = true;
				}
				if (number == 4){
					game2.spinStatus5 = true;
				}
			});

		};
		function middlespin(number){
			if (number == 0){		
				setTimeout(function() {
					game2.spinStatus1 = false;
					game2.bars[0].visible = false;
					game2.cell[1+3*0].visible = true;
					game2.cell[2+3*0].visible = true;
					game2.cell[3+3*0].visible = true;

					game2.cell[1].loadTexture('cell'+info[0]+'_f');
					game2.cell[2].loadTexture('cell'+info[1]+'_f');
					game2.cell[3].loadTexture('cell'+info[2]+'_f');

					endspin(number);
				}, 1400);
			}
			if (number == 1){
				setTimeout(function() {
					game2.spinStatus2 = false;
					game2.bars[0].visible = false;
					game2.cell[1+3*0].visible = true;
					game2.cell[2+3*0].visible = true;
					game2.cell[3+3*0].visible = true;

					game2.cell[1].loadTexture('cell'+info[0]+'_f');
					game2.cell[2].loadTexture('cell'+info[1]+'_f');
					game2.cell[3].loadTexture('cell'+info[2]+'_f');
					game2.bars[1].visible = false;
					game2.cell[1+3*1].visible = true;
					game2.cell[2+3*1].visible = true;
					game2.cell[3+3*1].visible = true;

					game2.cell[4].loadTexture('cell'+info[3]+'_f');
					game2.cell[5].loadTexture('cell'+info[4]+'_f');
					game2.cell[6].loadTexture('cell'+info[5]+'_f');
					endspin(number);
				}, 1800);
			}
			if (number == 2){
				setTimeout(function() {
					game2.spinStatus3 = false;
					game2.bars[0].visible = false;
					game2.cell[1+3*0].visible = true;
					game2.cell[2+3*0].visible = true;
					game2.cell[3+3*0].visible = true;

					game2.cell[1].loadTexture('cell'+info[0]+'_f');
					game2.cell[2].loadTexture('cell'+info[1]+'_f');
					game2.cell[3].loadTexture('cell'+info[2]+'_f');
					game2.bars[1].visible = false;
					game2.cell[1+3*1].visible = true;
					game2.cell[2+3*1].visible = true;
					game2.cell[3+3*1].visible = true;

					game2.cell[4].loadTexture('cell'+info[3]+'_f');
					game2.cell[5].loadTexture('cell'+info[4]+'_f');
					game2.cell[6].loadTexture('cell'+info[5]+'_f');
					game2.bars[2].visible = false;
					game2.cell[1+3*2].visible = true;
					game2.cell[2+3*2].visible = true;
					game2.cell[3+3*2].visible = true;

					game2.cell[7].loadTexture('cell'+info[6]+'_f');
					game2.cell[8].loadTexture('cell'+info[7]+'_f');
					game2.cell[9].loadTexture('cell'+info[8]+'_f');
					endspin(number);
				}, 2200);
			}
			if (number == 3){
				setTimeout(function() {
					game2.spinStatus4 = false;
					game2.bars[0].visible = false;
					game2.cell[1+3*0].visible = true;
					game2.cell[2+3*0].visible = true;
					game2.cell[3+3*0].visible = true;

					game2.cell[1].loadTexture('cell'+info[0]+'_f');
					game2.cell[2].loadTexture('cell'+info[1]+'_f');
					game2.cell[3].loadTexture('cell'+info[2]+'_f');
					game2.bars[1].visible = false;
					game2.cell[1+3*1].visible = true;
					game2.cell[2+3*1].visible = true;
					game2.cell[3+3*1].visible = true;

					game2.cell[4].loadTexture('cell'+info[3]+'_f');
					game2.cell[5].loadTexture('cell'+info[4]+'_f');
					game2.cell[6].loadTexture('cell'+info[5]+'_f');
					game2.bars[2].visible = false;
					game2.cell[1+3*2].visible = true;
					game2.cell[2+3*2].visible = true;
					game2.cell[3+3*2].visible = true;

					game2.cell[7].loadTexture('cell'+info[6]+'_f');
					game2.cell[8].loadTexture('cell'+info[7]+'_f');
					game2.cell[9].loadTexture('cell'+info[8]+'_f');
					game2.bars[3].visible = false;
					game2.cell[1+3*3].visible = true;
					game2.cell[2+3*3].visible = true;
					game2.cell[3+3*3].visible = true;

					game2.cell[10].loadTexture('cell'+info[9]+'_f');
					game2.cell[11].loadTexture('cell'+info[10]+'_f');
					game2.cell[12].loadTexture('cell'+info[11]+'_f');
					endspin(number);
				}, 2600);
			}
			if (number == 4){
				setTimeout(function() {
					game2.spinStatus5 = false;
					game2.bars[0].visible = false;
					game2.cell[1+3*0].visible = true;
					game2.cell[2+3*0].visible = true;
					game2.cell[3+3*0].visible = true;

					game2.cell[1].loadTexture('cell'+info[0]+'_f');
					game2.cell[2].loadTexture('cell'+info[1]+'_f');
					game2.cell[3].loadTexture('cell'+info[2]+'_f');
					game2.bars[1].visible = false;
					game2.cell[1+3*1].visible = true;
					game2.cell[2+3*1].visible = true;
					game2.cell[3+3*1].visible = true;

					game2.cell[4].loadTexture('cell'+info[3]+'_f');
					game2.cell[5].loadTexture('cell'+info[4]+'_f');
					game2.cell[6].loadTexture('cell'+info[5]+'_f');
					game2.bars[2].visible = false;
					game2.cell[1+3*2].visible = true;
					game2.cell[2+3*2].visible = true;
					game2.cell[3+3*2].visible = true;

					game2.cell[7].loadTexture('cell'+info[6]+'_f');
					game2.cell[8].loadTexture('cell'+info[7]+'_f');
					game2.cell[9].loadTexture('cell'+info[8]+'_f');
					game2.bars[3].visible = false;
					game2.cell[1+3*3].visible = true;
					game2.cell[2+3*3].visible = true;
					game2.cell[3+3*3].visible = true;

					game2.cell[10].loadTexture('cell'+info[9]+'_f');
					game2.cell[11].loadTexture('cell'+info[10]+'_f');
					game2.cell[12].loadTexture('cell'+info[11]+'_f');
					game2.bars[4].visible = false;
					game2.cell[1+3*4].visible = true;
					game2.cell[2+3*4].visible = true;
					game2.cell[3+3*4].visible = true;

					game2.cell[13].loadTexture('cell'+info[12]+'_f');
					game2.cell[14].loadTexture('cell'+info[13]+'_f');
					game2.cell[15].loadTexture('cell'+info[14]+'_f');
					endspin(number);
				}, 3000);
			}
		}
		function endspin(number){
			game2.cell[1+number*3].position.y = 125+30;
			game2.cell[2+number*3].position.y = 274+30;
			game2.cell[3+number*3].position.y = 423+30;
			game.add.tween(game2.cell[1+number*3]).to({y:game2.cell[1+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
			});
			game.add.tween(game2.cell[2+number*3]).to({y:game2.cell[2+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
			});
			game.add.tween(game2.cell[3+number*3]).to({y:game2.cell[3+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){

				if (number == 4){
					game2.spinStatus = false;
					for (var i = 1; i <= 15; ++i) {
						game2.cell[i].visible = true;
						game2.cell[i].loadTexture('cell'+info[i-1]+'_f');
					}
					game2.bars[0].visible = false;
					game2.bars[1].visible = false;
					game2.bars[2].visible = false;
					game2.bars[3].visible = false;
					game2.bars[4].visible = false;
					checkWin();
				}			
			});
		}
		var briArr = [];
		var briStatus = false;
		var curBri = 0;
		function checkWin(){
			curBri = 0;
			wlWinValuesArray = [];
			wcvWinValuesArray = []; 
			briArr = [];
			briStatus = false;
			for (var i = 1; i <= 15; ++i) {
				game2.copyCell[i].loadTexture('cell'+info[i-1]+'_f');
			}
			for (key in wlValues) {
				if(wlValues[key] > 0) {
					wlWinValuesArray.push(+(key));
				}
			}
			for (key in winCellInfo) {
				if(winCellInfo[key] !== false) {
					wcvWinValuesArray.push(+(key));
				}
			}
			for (key in info) {
				if(info[key] === 0) {
					briStatus = true;
					briArr.push(+(key));
				}
			}
			if (wlWinValuesArray.length > 0){
				flickTopLabel(randomNumber(2,5));
				stopWinAnim = false;
				showWin(wlWinValuesArray, winCellInfo);
				topText.setText(allWin/mulFreespin + " x "+ mulFreespin + " = "+ allWin +" Credits Won");
				flickTopText();		
			} else{
				flickTopLabel(randomNumber(1,3));
				lose_freespinsSound.play();
				if(freeSpinCount > 0){
					if (briStatus){
						briAnim(briArr);
					} else {		
						setTimeout(function() {						
							freeSpinStart();
						}, 2500);
					}
				} else{
					setTimeout(function() {
						blackBg.visible = true;
						freeSpinBgSong.stop();
						briFinishSound.play();
						game.add.tween(blackBg).to( { alpha: 1 }, 1000, "Linear", true).onComplete.add(function(){
							setTimeout(function() {
								stopWinAnim = true;
								afterFreespinStatus = true;
								game.state.start('game1');
							}, 1000);
						})					
					}, 2500);
				}
			} 
		} 
		function briAnim(briArr){
			setTimeout(function(){				
				briSoundAudio.play();
				switch (briArr[curBri]) {
					case 3:
					firstBri = game.add.sprite(337,194, 'first_bri');
					firstBri.anchor.setTo(0.5, 0.5);
					game.add.tween(firstBri).to({x:firstBri.position.x+94, y:firstBri.position.y+204}, 220, Phaser.Easing.LINEAR, true).onComplete.add(function(){
						game.add.tween(firstBri).to({x:firstBri.position.x+45, y:firstBri.position.y+32}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
							game.add.tween(firstBri).to({x:firstBri.position.x+48, y:firstBri.position.y-26}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								firstBri.visible = false;
								animCentrBri();
							});
						});
					});
					break;
					case 4:
					firstBri = game.add.sprite(337,194+150, 'first_bri');
					firstBri.anchor.setTo(0.5, 0.5);
					game.add.tween(firstBri).to({x:firstBri.position.x+131, y:firstBri.position.y+82}, 150, Phaser.Easing.LINEAR, true).onComplete.add(function(){
						game.add.tween(firstBri).to({x:firstBri.position.x+100, y:firstBri.position.y+0}, 100, Phaser.Easing.LINEAR, true).onComplete.add(function(){
							game.add.tween(firstBri).to({x:firstBri.position.x-46, y:firstBri.position.y-27}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								firstBri.visible = false;
								animCentrBri();
							});
						});
					});
					break;
					case 5:
					firstBri = game.add.sprite(337,194+150+150 , 'first_bri');
					firstBri.anchor.setTo(0.5, 0.5);
					game.add.tween(firstBri).to({x:firstBri.position.x+225, y:firstBri.position.y-61}, 230, Phaser.Easing.LINEAR, true).onComplete.add(function(){
						game.add.tween(firstBri).to({x:firstBri.position.x+8, y:firstBri.position.y-25}, 20, Phaser.Easing.LINEAR, true).onComplete.add(function(){
							game.add.tween(firstBri).to({x:firstBri.position.x-50, y:firstBri.position.y-25}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								firstBri.visible = false;
								animCentrBri();
							});
						});
					});
					break;
					case 6:
					firstBri = game.add.sprite(337+173,194, 'first_bri');
					firstBri.anchor.setTo(0.5, 0.5);
					game.add.tween(firstBri).to({x:firstBri.position.x+81, y:firstBri.position.y+187}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
						game.add.tween(firstBri).to({x:firstBri.position.x-52, y:firstBri.position.y+33}, 60, Phaser.Easing.LINEAR, true).onComplete.add(function(){
							game.add.tween(firstBri).to({x:firstBri.position.x-31, y:firstBri.position.y-26}, 40, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								firstBri.visible = false;
								animCentrBri();
							});
						});
					});
					break;
					case 7:
					firstBri = game.add.sprite(337+173,194+150, 'first_bri');
					firstBri.anchor.setTo(0.5, 0.5);
					game.add.tween(firstBri).to({x:firstBri.position.x-33, y:firstBri.position.y+26}, 40, Phaser.Easing.LINEAR, true).onComplete.add(function(){
						game.add.tween(firstBri).to({x:firstBri.position.x+0, y:firstBri.position.y-50}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
							game.add.tween(firstBri).to({x:firstBri.position.x+60, y:firstBri.position.y+0}, 60, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								game.add.tween(firstBri).to({x:firstBri.position.x+31, y:firstBri.position.y+75}, 80, Phaser.Easing.LINEAR, true).onComplete.add(function(){
									game.add.tween(firstBri).to({x:firstBri.position.x+-16, y:firstBri.position.y+17}, 20, Phaser.Easing.LINEAR, true).onComplete.add(function(){
										game.add.tween(firstBri).to({x:firstBri.position.x-44, y:firstBri.position.y-28}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
											firstBri.visible = false;
											animCentrBri();
										});
									});
								});					
							});
						});
					});
					break;
					case 8:
					firstBri = game.add.sprite(337+173,194+150+150 , 'first_bri');
					firstBri.anchor.setTo(0.5, 0.5);
					game.add.tween(firstBri).to({x:firstBri.position.x-76, y:firstBri.position.y-130}, 150, Phaser.Easing.LINEAR, true).onComplete.add(function(){
						game.add.tween(firstBri).to({x:firstBri.position.x+73, y:firstBri.position.y-31}, 80, Phaser.Easing.LINEAR, true).onComplete.add(function(){
							game.add.tween(firstBri).to({x:firstBri.position.x+25, y:firstBri.position.y-25}, 35, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								game.add.tween(firstBri).to({x:firstBri.position.x-25, y:firstBri.position.y-25}, 35, Phaser.Easing.LINEAR, true).onComplete.add(function(){
									firstBri.visible = false;
									animCentrBri();
								});
							});
						});
					});
					break;
					case 9:
					firstBri = game.add.sprite(337+346,194, 'first_bri');
					firstBri.anchor.setTo(0.5, 0.5);
					game.add.tween(firstBri).to({x:firstBri.position.x-94, y:firstBri.position.y+204}, 220, Phaser.Easing.LINEAR, true).onComplete.add(function(){
						game.add.tween(firstBri).to({x:firstBri.position.x-45, y:firstBri.position.y+32}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
							game.add.tween(firstBri).to({x:firstBri.position.x-48, y:firstBri.position.y-26}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								firstBri.visible = false;
								animCentrBri();
							});
						});
					});
					break;
					case 10:
					firstBri = game.add.sprite(337+346,194+150, 'first_bri');
					firstBri.anchor.setTo(0.5, 0.5);
					game.add.tween(firstBri).to({x:firstBri.position.x-131, y:firstBri.position.y+82}, 150, Phaser.Easing.LINEAR, true).onComplete.add(function(){
						game.add.tween(firstBri).to({x:firstBri.position.x-100, y:firstBri.position.y+0}, 100, Phaser.Easing.LINEAR, true).onComplete.add(function(){
							game.add.tween(firstBri).to({x:firstBri.position.x+46, y:firstBri.position.y-27}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								firstBri.visible = false;
								animCentrBri();
							});
						});
					});
					break;
					case 11:
					firstBri = game.add.sprite(337+346,194+150+150 , 'first_bri');
					firstBri.anchor.setTo(0.5, 0.5);
					game.add.tween(firstBri).to({x:firstBri.position.x-225, y:firstBri.position.y-61}, 230, Phaser.Easing.LINEAR, true).onComplete.add(function(){
						game.add.tween(firstBri).to({x:firstBri.position.x-8, y:firstBri.position.y-25}, 20, Phaser.Easing.LINEAR, true).onComplete.add(function(){
							game.add.tween(firstBri).to({x:firstBri.position.x+50, y:firstBri.position.y-25}, 50, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								firstBri.visible = false;
								animCentrBri();
							});
						});
					});
					break;
				} 
				function animCentrBri(){
					briBigAnim = game.add.sprite(512,340, 'bri_anim_1');
					briBigAnim.anchor.setTo(0.5, 0.5);
					briBigAnim.animations.add('bri_anim', [0,1,2,3,4], 10, false).play().onComplete.add(function(){
						briBigAnim.visible = false;	
						briBigAnim2 = game.add.sprite(512,340, 'bri_anim_2');
						briBigAnim2.anchor.setTo(0.5, 0.5);
						briBigAnim2.animations.add('bri_anim', [0,1,2,3], 10, false).play().onComplete.add(function(){
							briBigAnim2.visible = false;
							mediumBri = game.add.sprite(512,340, 'medium_bri');	
							mediumBri.anchor.setTo(0.5, 0.5);
							var longX = (350 - (mulFreespin-2)*35 - 40) / 2;
							var longWay = Math.sqrt(longX*longX + 90*90);
							game.add.tween(mediumBri).to({x:mediumBri.position.x-longX, y:mediumBri.position.y-90}, longWay, Phaser.Easing.LINEAR, true).onComplete.add(function(){
								game.add.tween(mediumBri).to({x:mediumBri.position.x-longX, y:mediumBri.position.y+90}, longWay, Phaser.Easing.LINEAR, true).onComplete.add(function(){
									littleBri = game.add.sprite(mediumBri.position.x,mediumBri.position.y, 'little_bri');	
									littleBri.anchor.setTo(0.5, 0.5);
									mediumBri.visible = false;
									game.add.tween(littleBri).to({x:155+(mulFreespin-2)*35, y:671}, 325, Phaser.Easing.LINEAR, true).onComplete.add(function(){
										littleBri.visible = false;
										mulFreespin = mulFreespin + 1;
										game2.briBgArr[mulFreespin-2].visible = true;
										multiplierText.setText(mulFreespin);
										multiplierText.visible = false;
										setTimeout(function() {
											multiplierText.visible = true;
											setTimeout(function() {
												multiplierText.visible = false;
												setTimeout(function() {
													multiplierText.visible = true;
													setTimeout(function() {
														multiplierText.visible = false;
														setTimeout(function() {
															multiplierText.visible = true;
															setTimeout(function() {
																multiplierText.visible = false;
																setTimeout(function() {
																	multiplierText.visible = true;
																	if (briArr.length === curBri+1){
																		setTimeout(function() {
																			if(freeSpinCount > 0){
																				freeSpinStart();
																			} else{
																				blackBg.visible = true;
																				freeSpinBgSong.stop();
																				briFinishSound.play();
																				game.add.tween(blackBg).to( { alpha: 1 }, 1000, "Linear", true).onComplete.add(function(){
																					setTimeout(function() {
																						stopWinAnim = true;
																						afterFreespinStatus = true;
																						game.state.start('game1');
																					}, 1000);
																				})
																			}
																		}, 2500);
																	} else {
																		curBri = curBri + 1;
																		briAnim(briArr)
																	}
																}, 250);
															}, 250);
														}, 250);
													}, 250);
												}, 250);
											}, 250);
										}, 250);

									});
								});
							});
						});				
					});		
				}
			}, 1500)
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
function flickTopLabel(tickCount){
	if (topLabelValue === 1){
		topLabelValue = 2;
		topLabel2.loadTexture('top_label_'+ topLabelValue);
	} else {
		topLabelValue = 1;
		topLabel2.loadTexture('top_label_'+ topLabelValue);
	}
	topLabel2.visible = false;
	setTimeout(function() {
		topLabel2.visible = true;
		if (tickCount > 1){
			setTimeout(function() {
				topLabel2.visible = false;
				setTimeout(function() {
					if (topLabelValue === 1){
						topLabelValue = 2;
						topLabel2.loadTexture('top_label_'+ topLabelValue);
					} else {
						topLabelValue = 1;
						topLabel2.loadTexture('top_label_'+ topLabelValue);
					}
					topLabel2.visible = true;
					if (tickCount > 2){
						setTimeout(function() {
							topLabel2.visible = false;
							setTimeout(function() {
								if (topLabelValue === 1){
									topLabelValue = 2;
									topLabel2.loadTexture('top_label_'+ topLabelValue);
								} else {
									topLabelValue = 1;
									topLabel2.loadTexture('top_label_'+ topLabelValue);
								}
								topLabel2.visible = true;
								if (tickCount > 3){
									setTimeout(function() {
										topLabel2.visible = false;
										setTimeout(function() {
											if (topLabelValue === 1){
												topLabelValue = 2;
												topLabel2.loadTexture('top_label_'+ topLabelValue);
											} else {
												topLabelValue = 1;
												topLabel2.loadTexture('top_label_'+ topLabelValue);
											}
											topLabel2.visible = true;
											if (tickCount > 4){
												setTimeout(function() {
													topLabel2.visible = false;
													setTimeout(function() {
														if (topLabelValue === 1){
															topLabelValue = 2;
															topLabel2.loadTexture('top_label_'+ topLabelValue);
														} else {
															topLabelValue = 1;
															topLabel2.loadTexture('top_label_'+ topLabelValue);
														}
														topLabel2.visible = true;
													}, 400);
												}, 400);
											}
										}, 400);
									}, 400);
								}
							}, 400);
						}, 400);
					}
				}, 400);
			}, 400);
		}
	}, 400);
}
var sizeLine = 0;
function showWin(wlWinValuesArray, winCellInfo) {
	if (stopWinAnim == true){
		return;
	}
	winText.visible = true;
	winText.setText(wlValues[wlWinValuesArray[lineflash]]/mulFreespin + " CREDIT LINE PAY");
	winText.fill = game2.colorLine[wlWinValuesArray[lineflash]-1];
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
	if (info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][2]-1] === trigerLine){
		if (info[squareArr[wlWinValuesArray[lineflash]-1][3]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][3]-1] === trigerLine){
			if (info[squareArr[wlWinValuesArray[lineflash]-1][4]-1] === 0 || info[squareArr[wlWinValuesArray[lineflash]-1][4]-1] === trigerLine){
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
	flickLine(sizeLine, wlWinValuesArray[lineflash]);
}
function flickLine(sizeLine, lineNumber){
	if (stopWinAnim == true){
		return;
	}
	showLine(lineNumber);
	for (var i = 1; i <= sizeLine; ++i) {
		squareArrImg[lineNumber-1][i-1].visible = true;
		game2.copyCell[squareArr[lineNumber-1][i-1]].visible = true;				
	}
	setTimeout(function() {
		if (stopWinAnim == true){
			return;
		}
		winText.visible = false;
		game2.lineArr[lineNumber].tint = 0x000000;
		for (var i = 1; i <= sizeLine; ++i) {
			squareArrImg[lineNumber-1][i-1].tint = 0x000000;
		}
		setTimeout(function() {
			if (stopWinAnim == true){
				return;
			}
			game2.lineArr[lineNumber].tint = 0xffffff;
			for (var i = 1; i <= sizeLine; ++i) {
				squareArrImg[lineNumber-1][i-1].tint = 0xffffff;
			}
			winText.visible = true;
			setTimeout(function() {
				if (stopWinAnim == true){
					return;
				}
				winText.visible = false;
				game2.lineArr[lineNumber].tint = 0x000000;
				for (var i = 1; i <= sizeLine; ++i) {
					squareArrImg[lineNumber-1][i-1].tint = 0x000000;
				}
				setTimeout(function() {
					if (stopWinAnim == true){
						return;
					}
					game2.lineArr[lineNumber].tint = 0xffffff;
					for (var i = 1; i <= sizeLine; ++i) {
						squareArrImg[lineNumber-1][i-1].tint = 0xffffff;
					}
					winText.visible = true;
					setTimeout(function() {
						if (stopWinAnim == true){
							return;
						}
						hideLines();
						hideSquare();
						for (var i = 1; i <= sizeLine; ++i) {
							game2.copyCell[squareArr[lineNumber-1][i-1]].visible = false;	
						}
						if (lineflash === wlWinValuesArray.length - 1){
							winText.visible = false;
							game2.lineArr[lineNumber].tint = 0xffffff;
							game2.lineArr[lineNumber].visible = false;
							updateBalance();
							for (var i = 1; i <= sizeLine; ++i) {
								squareArrImg[lineNumber-1][i-1].tint = 0xffffff;
								squareArrImg[lineNumber-1][i-1].visible = false;
							}
						} else {                        
							lineflash = lineflash + 1;
							showWin(wlWinValuesArray, winCellInfo);
						}							
					}, 500);
				}, 200);
			}, 500);
		}, 200);
	}, 500);
};
function upLines(){
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
	linesText.setText(lines)
	totalBet.setText(bet)
}
function upLinesBet(){
	betline = betline+1;
	if(betline > 10){
		betline = 1
	}
	for (var i = 1; i <= 15; ++i) {
		game2.textArr[i].setText(betline);
	}
	bet = lines * betline;
	lineBetText.setText(betline)
	totalBet.setText(bet)
}
function addScore() {
	credit = game.add.text(186, 755, balance, {
		font: '45px "Digital-7 Mono"',
		fill: '#01e033'
	});
	credit.anchor.setTo(1, 0.5);
	linesText = game.add.text(483, 755, lines, {
		font: '45px "Digital-7 Mono"',
		fill: '#01e033'
	});
	linesText.anchor.setTo(1, 0.5);
	lineBetText = game.add.text(627, 755, betline, {
		font: '45px "Digital-7 Mono"',
		fill: '#01e033'
	});
	lineBetText.anchor.setTo(1, 0.5);
	totalBet = game.add.text(768, 755, bet, {
		font: '47px "Digital-7 Mono"',
		fill: '#01e033'
	});
	totalBet.anchor.setTo(1, 0.5);
	paid = game.add.text(953, 755, '0', {
		font: '47px "Digital-7 Mono"',
		fill: '#01e033'
	});
	paid.anchor.setTo(1, 0.5);
	winText = game.add.text(123, 602, '2x30 TOTALS CREDITS', {
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
	topText = game.add.text(512, 93, '', {
		font: '35px "Koblenz-Serial"',
		fill: '#fdff41'
	});
	var grd = topText.context.createLinearGradient(0, 0, 0, topText.height);

	grd.addColorStop(0, '#fdff41');
	grd.addColorStop(1, '#fdff41');

	topText.fill = grd;
	topText.anchor.setTo(0.5, 0.5);
	spinsLeft = game.add.text(144, 36, '10', {
		font: '45px "Digital-7 Mono"',
		fill: '#01e033'
	});
	spinsLeft.anchor.setTo(0.5, 0.5);
	bonusText = game.add.text(879, 36, '0', {
		font: '45px "Digital-7 Mono"',
		fill: '#01e033'
	});
	bonusText.anchor.setTo(0.5, 0.5);
	multiplierText = game.add.text(866, 669, '2', {
		font: '45px "Digital-7 Mono"',
		fill: '#01e033'
	});
	multiplierText.anchor.setTo(0.5, 0.5);
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
		return_to_game.loadTexture('return');
		help_page.visible = false;
		paytable_page.visible = false;
		help_next.visible = false;
		paytable_next.visible = false;
		return_to_game.visible = false;
		showButtons();
	})
	return_to_game.visible = false;	
	help_next = game.add.sprite(883, 85, 'moreHelp');
	help_next.inputEnabled = true;
	help_next.input.useHandCursor = true;
	help_next.events.onInputDown.add(function(){
		help_next.loadTexture('moreHelp_p');
	});
	help_next.events.onInputUp.add(function(){
		help_next.loadTexture('moreHelp');
		nextHelp(helpPageCurent);
	})
	help_next.visible = false;
	paytable_next = game.add.sprite(883, 85, 'moreHelp');
	paytable_next.inputEnabled = true;
	paytable_next.input.useHandCursor = true;
	paytable_next.events.onInputDown.add(function(){
		paytable_next.loadTexture('moreHelp_p');
	});
	paytable_next.events.onInputUp.add(function(){
		paytable_next.loadTexture('moreHelp');
		nextPaytable(paytablePageCurent);
	})
	paytable_next.visible = false;
}
function nextHelp(value){
	helpPageCurent = helpPageCurent +1;
	if(helpPageCurent > 3){
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
function hideButtons(buttonsArray = []) {
	if(buttonsArray.length == 0) {
		paytable.inputEnabled = false;
		paytable.input.useHandCursor = false;
		paytable.visible = false;
		collect.inputEnabled = false;
		collect.input.useHandCursor = false;
		collect.visible = false;
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
	} else {
		buttonsArray.forEach(function (item) {
			item[0].inputEnabled = false;
			item[0].input.useHandCursor = false;
		})
	}
}
function showButtons(buttonsArray = []) {
	if(buttonsArray.length == 0) {
		paytable.inputEnabled = true;
		paytable.input.useHandCursor = true;
		paytable.visible = true;
		collect.inputEnabled = true;
		collect.input.useHandCursor = true;
		collect.visible = true;
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

	} else {
		buttonsArray.forEach(function (item) {
			item[0].inputEnabled = true;
			item[0].input.useHandCursor = true;
		})
	}
}
var allwinUpd = 0;
game2.ticker = game.add.tileSprite(0, 799, 1154, 31, 'ticker');
function updateBalance(){			
	var x = 0;
	var interval;
	allwinUpd = allWin;
	balanceSongAudio.play();
	(function() {
		if (x < allwinUpd) {
			interval = 1000/8; 
			if (x > 399){
				x = x + Math.round((allwinUpd-400)/3);
			} else {
				x += 5;						
			}
			bonusText.setText(allWinOld + x);
			setTimeout(arguments.callee, interval);
		} else {
			balanceSongAudio.stop();
			updateFinishSound.play();
			allWinOld = allWinOld + allwinUpd;
			bonusText.setText(allWinOld);
			setTimeout(function() {
				if(freeSpinCount > 0){
					if (briStatus){
						briAnim(briArr);
					} else {								
						freeSpinStart();
					}
				} else{
					blackBg.visible = true;
					freeSpinBgSong.stop();
					briFinishSound.play();							
					game.add.tween(blackBg).to( { alpha: 1 }, 1000, "Linear", true).onComplete.add(function(){
						setTimeout(function() {
							stopWinAnim = true;
							afterFreespinStatus = true;
							game.state.start('game1');
						}, 1000);
					})
				}
			}, 2000);
		}
	})();
}
};


game2.update = function () {
	if (cursorAnimSprite !== null){
		cursorAnimSprite.position.x = game.input.x;
		cursorAnimSprite.position.y = game.input.y;
	}
	if (game2.spinStatus1){
		game2.bars[0].tilePosition.y += 40;
	}
	if (game2.spinStatus2){
		game2.bars[1].tilePosition.y += 40;
	}
	if (game2.spinStatus3){
		game2.bars[2].tilePosition.y += 40;
	}
	if (game2.spinStatus4){
		game2.bars[3].tilePosition.y += 40;
	}
	if (game2.spinStatus5){
		game2.bars[4].tilePosition.y += 40;
	};
	game2.ticker.tilePosition.x += 0.5;
};

game.state.add('game2', game2);

};
