var game = new Phaser.Game(1024, 816, Phaser.AUTO, 'game-area', 'ld29', null, false, false);
// var game = new Phaser.Game(550, 550, Phaser.AUTO, 'game-area', 'ld29', null, false, false);

var gamename = 'elGallo';
var stopWinAnim = false;
var game1;
function game1() {

	game1 = {
		lineArr: [],
		flashLineNumber: [],
		cell : [],
		copyCell : [],
		scattersCell : [],
		coinArrayLeft : [],
		coinArrayRight : [],
		spinStatus : false,
		bars : [],
		spinStatus1 : false,
		spinStatus2 : false,
		spinStatus3 : false,
		spinStatus4 : false,
		spinStatus5 : false,
		flickStatus : false,
		betPanel : false,
		pickBet : 2,
		ticker : null,
		bet : [],
		betAnim : false,
		winStatus : false,
		sw : null,
		cursorAnimSprite : null,
		cockAnimArray : [],
		jackpotsArray: [[['MINI'],['#0000ff']],[['MINOR'],['#ff0000']],[['MAJOR'],['#00ff00']],[['MAXI'],['#ffff00']]]
	};

	game1.preload = function () {};

	game1.create = function () {
		curGame = 1;
		if(!repeatGame){
			if (freespinStatus){
				maxFreespin = ropeValues['count'];			
				playChickenSong();
			}
		}
		music = game.add.audio('drumroll');
		music.loop = true;
		// music.play();
		game.sound.touchLocked = false;
		game1.winStatus = false;
		game.add.sprite(0,0, 'game.background_overlay');

		var cellPosition = [
		[156,210],
		[156,380],
		[156,550],
		[333,210],
		[333,380],
		[333,550],
		[511,210],
		[511,380],
		[511,550],
		[689,210],
		[689,380],
		[689,550],
		[867,210],
		[867,380],
		[867,550]
		];

		for (var i = 1; i <= 15; ++i) {
			game1.cell[i] = game.add.sprite(cellPosition[i-1][0], cellPosition[i-1][1], 'cell'+info[i-1]);
			game1.cell[i].anchor.setTo(0.5, 0.5);
			game1.copyCell[i] = game.add.sprite(cellPosition[i-1][0], cellPosition[i-1][1], 'cell'+info[i-1]);
			game1.copyCell[i].anchor.setTo(0.5, 0.5);
			game1.copyCell[i].visible = false;
			game1.scattersCell[i] = game.add.sprite(cellPosition[i-1][0], cellPosition[i-1][1], 'scatters_anim');
			game1.scattersCell[i].animations.add('scatters_anim', [0,1], 10, true).play();
			game1.scattersCell[i].anchor.setTo(0.5, 0.5);
			game1.scattersCell[i].visible = false;			
		}

		game1.bars[0] = game.add.tileSprite(75, 125, 161, 508, 'bar');
		game1.bars[0].tilePosition.y =  randomNumber(0,11)*170 ;
		game1.bars[1] = game.add.tileSprite(252, 125, 161, 508, 'bar');
		game1.bars[1].tilePosition.y =  randomNumber(0,11)*170;
		game1.bars[2] = game.add.tileSprite(430 , 125, 161, 508, 'bar');
		game1.bars[2].tilePosition.y =  randomNumber(0,11)*170;
		game1.bars[3] = game.add.tileSprite(608, 125, 161, 508, 'bar');
		game1.bars[3].tilePosition.y =  randomNumber(0,11)*170;
		game1.bars[4] = game.add.tileSprite(786, 125, 161, 508, 'bar');
		game1.bars[4].tilePosition.y =  randomNumber(0,11)*170;
		game1.bars[0].visible = false;
		game1.bars[1].visible = false;
		game1.bars[2].visible = false;
		game1.bars[3].visible = false;
		game1.bars[4].visible = false;

		game.add.sprite(0,0, 'game.background');
		paytable = game.add.sprite(788, 4, 'paytable');
		paytable.inputEnabled = true;
		paytable.input.useHandCursor = true;
		paytable.events.onInputOver.add(function(){ 
		})
		paytable.events.onInputOut.add(function(){
		});
		paytable.events.onInputDown.add(function(){
			btnHelpSound.play();
		});
		paytable.events.onInputUp.add(function(){
			paytable_page.visible = true;
			return_to_game.visible = true;
			hideButtons();
		});
		// collect = game.add.sprite(905, 6, 'collect');
		// collect.inputEnabled = true;
		// collect.input.useHandCursor = true;
		// collect.events.onInputOver.add(function(){ 
		// })
		// collect.events.onInputOut.add(function(){
		// });
		// collect.events.onInputUp.add(function(){
		// 	if ((balance + allWinOld) > 0){
		// 		coinAnim();
		// 		giveBalance();
		// 	} else {
		// 		setTimeout(function() {
		// 			location.href = '/';
		// 		}, 1000);  
		// 	}
		// });
		help = game.add.sprite(788, 64, 'help');
		help.inputEnabled = true;
		help.input.useHandCursor = true;
		help.events.onInputDown.add(function(){
			btnHelpSound.play();
		});
		help.events.onInputOver.add(function(){ 
		})
		help.events.onInputOut.add(function(){
		});	
		help.events.onInputUp.add(function(){
			help_1.visible = true;
			exit_help.visible = true;
			next_page.visible = true;
			hideButtons();
		});
		exit = game.add.sprite(905, 6, 'exit');
		exit.inputEnabled = true;
		exit.input.useHandCursor = true;
		exit.events.onInputOver.add(function(){ 
		})
		exit.events.onInputOut.add(function(){
		});
		exit.events.onInputUp.add(function(){
			if ((balance + allWinOld) > 0){
				// coinAnim();
				// giveBalance();
				$('.popup_exit,.overlay').show();
			} else {
				setTimeout(function() {
					location.href = '/';
				}, 1000);  
			}
		});
		
		game.add.sprite(13,19, 'cent');
		game1.lineArr[4] = game.add.sprite(3, 109, 'lineNumber_4');
		game1.lineArr[12] = game.add.sprite(3, 150, 'lineNumber_12');
		game1.lineArr[2] = game.add.sprite(3, 191, 'lineNumber_2');
		game1.lineArr[10] = game.add.sprite(3, 232, 'lineNumber_10');
		game1.lineArr[7] = game.add.sprite(3, 273, 'lineNumber_7');
		game1.lineArr[9] = game.add.sprite(3, 314, 'lineNumber_9');
		game1.lineArr[1] = game.add.sprite(3, 355, 'lineNumber_1');
		game1.lineArr[8] = game.add.sprite(3, 396, 'lineNumber_8');
		game1.lineArr[6] = game.add.sprite(3, 437, 'lineNumber_6');
		game1.lineArr[11] = game.add.sprite(3, 478, 'lineNumber_11');
		game1.lineArr[3] = game.add.sprite(3, 519, 'lineNumber_3');
		game1.lineArr[13] = game.add.sprite(3, 560, 'lineNumber_13');
		game1.lineArr[5] = game.add.sprite(3, 601, 'lineNumber_5');
		game1.lineArr[23] = game.add.sprite(958, 109, 'lineNumber_23');
		game1.lineArr[25] = game.add.sprite(958, 150, 'lineNumber_25');
		game1.lineArr[19] = game.add.sprite(958, 191, 'lineNumber_19');
		game1.lineArr[14] = game.add.sprite(958, 232, 'lineNumber_14');
		game1.lineArr[16] = game.add.sprite(958, 273, 'lineNumber_16');
		game1.lineArr[21] = game.add.sprite(958, 314, 'lineNumber_21');
		game1.lineArr[111] = game.add.sprite(958, 355, 'lineNumber_1');
		game1.lineArr[20] = game.add.sprite(958, 396, 'lineNumber_20');
		game1.lineArr[17] = game.add.sprite(958, 437, 'lineNumber_17');
		game1.lineArr[15] = game.add.sprite(958, 478, 'lineNumber_15');
		game1.lineArr[24] = game.add.sprite(958, 519, 'lineNumber_24');
		game1.lineArr[18] = game.add.sprite(958, 560, 'lineNumber_18');
		game1.lineArr[22] = game.add.sprite(958, 601, 'lineNumber_22');

		hideLineNumber();
		for (var i = 1; i <= lines; ++i) {
			showLineNumber(i);
		}


		game1.flashLineNumber[4] = game.add.sprite(2, 108, 'flashLineNumber');
		game1.flashLineNumber[12] = game.add.sprite(2, 149, 'flashLineNumber');
		game1.flashLineNumber[2] = game.add.sprite(2, 190, 'flashLineNumber');
		game1.flashLineNumber[10] = game.add.sprite(2, 231, 'flashLineNumber');
		game1.flashLineNumber[7] = game.add.sprite(2, 272, 'flashLineNumber');
		game1.flashLineNumber[9] = game.add.sprite(2, 313, 'flashLineNumber');
		game1.flashLineNumber[1] = game.add.sprite(2, 354, 'flashLineNumber');
		game1.flashLineNumber[8] = game.add.sprite(2, 395, 'flashLineNumber');
		game1.flashLineNumber[6] = game.add.sprite(2, 436, 'flashLineNumber');
		game1.flashLineNumber[11] = game.add.sprite(2, 477, 'flashLineNumber');
		game1.flashLineNumber[3] = game.add.sprite(2, 518, 'flashLineNumber');
		game1.flashLineNumber[13] = game.add.sprite(2, 559, 'flashLineNumber');
		game1.flashLineNumber[5] = game.add.sprite(2, 600, 'flashLineNumber');
		game1.flashLineNumber[23] = game.add.sprite(957, 108, 'flashLineNumber');
		game1.flashLineNumber[25] = game.add.sprite(957, 149, 'flashLineNumber');
		game1.flashLineNumber[19] = game.add.sprite(957, 190, 'flashLineNumber');
		game1.flashLineNumber[14] = game.add.sprite(957, 231, 'flashLineNumber');
		game1.flashLineNumber[16] = game.add.sprite(957, 272, 'flashLineNumber');
		game1.flashLineNumber[21] = game.add.sprite(957, 313, 'flashLineNumber');
		game1.flashLineNumber[111] = game.add.sprite(957, 354, 'flashLineNumber');
		game1.flashLineNumber[20] = game.add.sprite(957, 395, 'flashLineNumber');
		game1.flashLineNumber[17] = game.add.sprite(957, 436, 'flashLineNumber');
		game1.flashLineNumber[15] = game.add.sprite(957, 477, 'flashLineNumber');
		game1.flashLineNumber[24] = game.add.sprite(957, 518, 'flashLineNumber');
		game1.flashLineNumber[18] = game.add.sprite(957, 559, 'flashLineNumber');
		game1.flashLineNumber[22] = game.add.sprite(957, 600, 'flashLineNumber');

		hideFlashNunbers();

		buttonBet1 = game.add.sprite(23, 671, 'buttonBet1');
		buttonBet1.inputEnabled = true;
		buttonBet1.input.useHandCursor = true;
		buttonBet1.events.onInputOver.add(function(){ 
			buttonBet1.loadTexture('buttonBet1_h');
		})
		buttonBet1.events.onInputOut.add(function(){
			buttonBet1.loadTexture('buttonBet1');
		});
		buttonBet1.events.onInputDown.add(function(){
			buttonBet1.loadTexture('buttonBet1_p');
			btnSound.play();
			animCursor();
		});
		buttonBet1.events.onInputUp.add(function(){
			buttonBet1.loadTexture('buttonBet1');
			betline = 1;
			checkScore()
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			creditPerLine.setText(betline +' Credit Bet Per Line');   
		})
		buttonBet2 = game.add.sprite(132, 669, 'buttonBet2');
		buttonBet2.inputEnabled = true;
		buttonBet2.input.useHandCursor = true;
		buttonBet2.events.onInputOver.add(function(){ 
			buttonBet2.loadTexture('buttonBet2_h');
		})
		buttonBet2.events.onInputOut.add(function(){
			buttonBet2.loadTexture('buttonBet2');
		});
		buttonBet2.events.onInputDown.add(function(){
			buttonBet2.loadTexture('buttonBet2_p');
			btnSound.play();
			animCursor();
		});
		buttonBet2.events.onInputUp.add(function(){
			buttonBet2.loadTexture('buttonBet2');
			betline = 2;
			checkScore()
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			creditPerLine.setText(betline +' Credit Bet Per Line');   
		})
		buttonBet3 = game.add.sprite(243, 670, 'buttonBet3');
		buttonBet3.inputEnabled = true;
		buttonBet3.input.useHandCursor = true;
		buttonBet3.events.onInputOver.add(function(){ 
			buttonBet3.loadTexture('buttonBet3_h');
		})
		buttonBet3.events.onInputOut.add(function(){
			buttonBet3.loadTexture('buttonBet3');
		});
		buttonBet3.events.onInputDown.add(function(){
			buttonBet3.loadTexture('buttonBet3_p');
			btnSound.play();
			animCursor();
		});
		buttonBet3.events.onInputUp.add(function(){
			buttonBet3.loadTexture('buttonBet3');
			betline = 3;
			checkScore()
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			creditPerLine.setText(betline +' Credit Bet Per Line');   
		})
		buttonBet5 = game.add.sprite(355, 670, 'buttonBet5');
		buttonBet5.inputEnabled = true;
		buttonBet5.input.useHandCursor = true;
		buttonBet5.events.onInputOver.add(function(){ 
			buttonBet5.loadTexture('buttonBet5_h');
		})
		buttonBet5.events.onInputOut.add(function(){
			buttonBet5.loadTexture('buttonBet5');
		});
		buttonBet5.events.onInputDown.add(function(){
			buttonBet5.loadTexture('buttonBet5_p');
			btnSound.play();
			animCursor();
		});
		buttonBet5.events.onInputUp.add(function(){
			buttonBet5.loadTexture('buttonBet5');
			betline = 5;
			checkScore()
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			creditPerLine.setText(betline +' Credit Bet Per Line');   
		})
		buttonBet10 = game.add.sprite(468, 670, 'buttonBet10');
		buttonBet10.inputEnabled = true;
		buttonBet10.input.useHandCursor = true;
		buttonBet10.events.onInputOver.add(function(){ 
			buttonBet10.loadTexture('buttonBet10_h');
		})
		buttonBet10.events.onInputOut.add(function(){
			buttonBet10.loadTexture('buttonBet10');
		});
		buttonBet10.events.onInputDown.add(function(){
			buttonBet10.loadTexture('buttonBet10_p');
			btnSound.play();
			animCursor();
		});
		buttonBet10.events.onInputUp.add(function(){
			buttonBet10.loadTexture('buttonBet10');
			betline = 10;
			checkScore()
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			creditPerLine.setText(betline +' Credit Bet Per Line');   
		})
		buttonBet20 = game.add.sprite(581, 670, 'buttonBet20');
		buttonBet20.inputEnabled = true;
		buttonBet20.input.useHandCursor = true;
		buttonBet20.events.onInputOver.add(function(){ 
			buttonBet20.loadTexture('buttonBet20_h');
		})
		buttonBet20.events.onInputOut.add(function(){
			buttonBet20.loadTexture('buttonBet20');
		});
		buttonBet20.events.onInputDown.add(function(){
			buttonBet20.loadTexture('buttonBet20_p');
			btnSound.play();
			animCursor();
		});
		buttonBet20.events.onInputUp.add(function(){
			buttonBet20.loadTexture('buttonBet20');
			betline = 20;
			checkScore()
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			creditPerLine.setText(betline +' Credit Bet Per Line');   
		})
		buttonBet25 = game.add.sprite(693, 670, 'buttonBet25');
		buttonBet25.inputEnabled = true;
		buttonBet25.input.useHandCursor = true;
		buttonBet25.events.onInputOver.add(function(){ 
			buttonBet25.loadTexture('buttonBet25_h');
		})
		buttonBet25.events.onInputOut.add(function(){
			buttonBet25.loadTexture('buttonBet25');
		});
		buttonBet25.events.onInputDown.add(function(){
			buttonBet25.loadTexture('buttonBet25_p');
			btnSound.play();
			animCursor();
		});
		buttonBet25.events.onInputUp.add(function(){
			buttonBet25.loadTexture('buttonBet25');
			betline = 25;
			checkScore()
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			creditPerLine.setText(betline +' Credit Bet Per Line');   
		})

		buttonLine1 = game.add.sprite(12, 723, 'buttonLine1');
		buttonLine1.inputEnabled = true;
		buttonLine1.input.useHandCursor = true;
		buttonLine1.events.onInputOver.add(function(){ 
			buttonLine1.loadTexture('buttonLine1_h');
		})
		buttonLine1.events.onInputOut.add(function(){
			buttonLine1.loadTexture('buttonLine1');
		});
		buttonLine1.events.onInputDown.add(function(){
			buttonLine1.loadTexture('buttonLine1_p');
			btnSound.play();
			animCursor();
		});
		buttonLine1.events.onInputUp.add(function(){
			buttonLine1.loadTexture('buttonLine1');
			lines = 1;
			checkScore()
			pickLines(lines);
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			countLines.setText(lines +' Lines selected');   
		})
		buttonLine3 = game.add.sprite(124, 723, 'buttonLine3');
		buttonLine3.inputEnabled = true;
		buttonLine3.input.useHandCursor = true;
		buttonLine3.events.onInputOver.add(function(){ 
			buttonLine3.loadTexture('buttonLine3_h');
		})
		buttonLine3.events.onInputOut.add(function(){
			buttonLine3.loadTexture('buttonLine3');
		});
		buttonLine3.events.onInputDown.add(function(){
			buttonLine3.loadTexture('buttonLine3_p');
			btnSound.play();
			animCursor();
		});
		buttonLine3.events.onInputUp.add(function(){
			buttonLine3.loadTexture('buttonLine3');
			lines = 3;
			checkScore()
			pickLines(lines)
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			countLines.setText(lines +' Lines selected');   
		})
		buttonLine5 = game.add.sprite(239, 723, 'buttonLine5');
		buttonLine5.inputEnabled = true;
		buttonLine5.input.useHandCursor = true;
		buttonLine5.events.onInputOver.add(function(){ 
			buttonLine5.loadTexture('buttonLine5_h');
		})
		buttonLine5.events.onInputOut.add(function(){
			buttonLine5.loadTexture('buttonLine5');
		});
		buttonLine5.events.onInputDown.add(function(){
			buttonLine5.loadTexture('buttonLine5_p');
			btnSound.play();
			animCursor();
		});
		buttonLine5.events.onInputUp.add(function(){
			buttonLine5.loadTexture('buttonLine5');
			lines = 5;
			checkScore()
			pickLines(lines)
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			countLines.setText(lines +' Lines selected');   
		})
		buttonLine10 = game.add.sprite(353, 723, 'buttonLine10');
		buttonLine10.inputEnabled = true;
		buttonLine10.input.useHandCursor = true;
		buttonLine10.events.onInputOver.add(function(){ 
			buttonLine10.loadTexture('buttonLine10_h');
		})
		buttonLine10.events.onInputOut.add(function(){
			buttonLine10.loadTexture('buttonLine10');
		});
		buttonLine10.events.onInputDown.add(function(){
			buttonLine10.loadTexture('buttonLine10_p');
			btnSound.play();
			animCursor();
		});
		buttonLine10.events.onInputUp.add(function(){
			buttonLine10.loadTexture('buttonLine10');
			lines = 10;
			checkScore()
			pickLines(lines)
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			countLines.setText(lines +' Lines selected');   
		})
		buttonLine15 = game.add.sprite(468, 724, 'buttonLine15');
		buttonLine15.inputEnabled = true;
		buttonLine15.input.useHandCursor = true;
		buttonLine15.events.onInputOver.add(function(){ 
			buttonLine15.loadTexture('buttonLine15_h');
		})
		buttonLine15.events.onInputOut.add(function(){
			buttonLine15.loadTexture('buttonLine15');
		});
		buttonLine15.events.onInputDown.add(function(){
			buttonLine15.loadTexture('buttonLine15_p');
			btnSound.play();
			animCursor();
		});
		buttonLine15.events.onInputUp.add(function(){
			buttonLine15.loadTexture('buttonLine15');
			lines = 15;
			checkScore()
			pickLines(lines)
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			countLines.setText(lines +' Lines selected');   
		})
		buttonLine20 = game.add.sprite(583, 723, 'buttonLine20');
		buttonLine20.inputEnabled = true;
		buttonLine20.input.useHandCursor = true;
		buttonLine20.events.onInputOver.add(function(){ 
			buttonLine20.loadTexture('buttonLine20_h');
		})
		buttonLine20.events.onInputOut.add(function(){
			buttonLine20.loadTexture('buttonLine20');
		});
		buttonLine20.events.onInputDown.add(function(){
			buttonLine20.loadTexture('buttonLine20_p');
			btnSound.play();
			animCursor();
		});
		buttonLine20.events.onInputUp.add(function(){
			buttonLine20.loadTexture('buttonLine20');
			lines = 20;
			checkScore()
			pickLines(lines)
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			countLines.setText(lines +' Lines selected');   
		})
		buttonLine25 = game.add.sprite(697, 723, 'buttonLine25');
		buttonLine25.inputEnabled = true;
		buttonLine25.input.useHandCursor = true;
		buttonLine25.events.onInputOver.add(function(){ 
			buttonLine25.loadTexture('buttonLine25_h');
		})
		buttonLine25.events.onInputOut.add(function(){
			buttonLine25.loadTexture('buttonLine25');
		});
		buttonLine25.events.onInputDown.add(function(){
			buttonLine25.loadTexture('buttonLine25_p');
			btnSound.play();
			animCursor();
		});
		buttonLine25.events.onInputUp.add(function(){
			buttonLine25.loadTexture('buttonLine25');
			lines = 25;
			checkScore()
			pickLines(lines)
			betScore.setText(betline*lines);        
			betDol.setText('$'+(betline*lines/100).toFixed(2));        
			countLines.setText(lines +' Lines selected');   
		})
		double = game.add.sprite(806, 669, 'double');
		double.inputEnabled = true;
		double.input.useHandCursor = true;
		double.events.onInputOver.add(function(){ 
			double.loadTexture('double_h');
		})
		double.events.onInputOut.add(function(){
			double.loadTexture('double');
		});
		double.events.onInputDown.add(function(){
			double.loadTexture('double_p');
			btnSound.play();
			animCursor();
		});
		double.events.onInputUp.add(function(){
			double.loadTexture('double');
			if (game1.winStatus === true){
				game1.winStatus = false;
				game1.flickStatus = false;
				autostart = false;
				auto_play.loadTexture('auto_play'); 
				$("#spin").removeClass('auto');
				moneySound.stop();
				hideMobileBtn();
				allWinOld = allWin;
				game.state.start('game5');
			}  
		})
		auto_play = game.add.sprite(923, 670, 'auto_play');
		auto_play.inputEnabled = true;
		auto_play.input.useHandCursor = true;
		auto_play.events.onInputOver.add(function(){ 
			if ((balance + allWin) === 0){
				auto_play.loadTexture('Addcredit_h'); 
			} else {				
				if(autostart === false){
					auto_play.loadTexture('auto_play_h'); 
				} else {
					auto_play.loadTexture('auto_stop_h'); 
				}
			}
		})
		auto_play.events.onInputOut.add(function(){
			if ((balance + allWin) === 0){
				auto_play.loadTexture('Addcredit'); 
			} else {	
				if(autostart === false){
					auto_play.loadTexture('auto_play'); 
				} else {
					auto_play.loadTexture('auto_stop'); 
				}
			}
		});
		auto_play.events.onInputDown.add(function(){
			if ((balance + allWin) === 0){
				auto_play.loadTexture('Addcredit_p'); 
			} else {	
				if(autostart === false){
					auto_play.loadTexture('auto_play_p'); 
				} else {
					auto_play.loadTexture('auto_stop_p'); 
				}
			}
			btnSound.play();
			animCursor();
		});
		auto_play.events.onInputUp.add(function(){		
			if ((balance + allWin) === 0){
				auto_play.loadTexture('Addcredit'); 
				$('.popup,.overlay').show();
			} else {		
				if(autostart === false){
					$("#spin").addClass('auto');
					auto_play.loadTexture('auto_stop'); 
					autostart = true;
					startAuto();
				} else {
					auto_play.loadTexture('auto_play'); 
					$("#spin").removeClass('auto');
					autostart = false;
					showButtons();
					if (game1.spinStatus === true){
						hideButtons();
						hideMobileBtn();
					}
				}
			}
		})
		startButton = game.add.sprite(814, 724, 'startButton');
		startButton.inputEnabled = true;
		startButton.input.useHandCursor = true;
		startButton.events.onInputOver.add(function(){ 
			startButton.loadTexture('startButton_h');
		})
		startButton.events.onInputOut.add(function(){
			startButton.loadTexture('startButton');
		});
		startButton.events.onInputDown.add(function(){
			startButton.loadTexture('startButton_p');
			// btnSound.play();
		});
		startButton.events.onInputUp.add(function(){
			startButton.loadTexture('startButton');
			if (stopWinAnim === false){
				stopWinAnimFun();
			}
			realSpinStatus = true;
			stepFlesh = 0;
			lineflash = 0;
			scattersCount = 0;			
			spinTime3 = 600;
			spinTime4 = 800;
			spinTime5 = 1000;
			balance = balance - betline*lines;
			game1.winStatus = false;
			game1.flickStatus = false;
			moneySound.stop();
			for (var i = 1; i <= 15; ++i) {
				game1.cell[i].scale.x = 1;
				game1.cell[i].scale.y = 1;
				game1.cell[i].visible = true;
				game1.copyCell[i].visible = false;
			}
			allWinOld = 0;
			arrAllWinOld  = [0,0,0,0,0,0,0,0,0];
			winScore.setText('0');
			winDol.setText('$0.00');
			hideButtons();
			hideScattersAnim();
			requestSpin(gamename, sessionName, betline, lines);
			slotRotation();
			function slotRotation() {	
				game1.spinStatus = true;
				hideLines();
				hideFlashNunbers();
				startspin(0);
				startspin(1);
				startspin(2);
				startspin(3);
				startspin(4);
			}
			justText.visible = true;
			justText.setText('Good Luck');
			// credit.setText(balance+allwinUpd);
			// creditDol.setText('$' + (balance+allwinUpd).toFixed(2))
		})
		jackpot_label = game.add.sprite(512, 719, 'jackpot_label');
		jackpot_label.anchor.setTo(0.5, 0.5);
		jackpot_label.scale.setTo(0.2, 0.2);		
		jackpot_label.visible = false;
		freespin_label = game.add.sprite(512, 719, 'freespin_label');
		freespin_label.anchor.setTo(0.5, 0.5);
		freespin_label.scale.setTo(0.2, 0.2);				
		freespin_label.visible = false;
		scorePosions = [[160, 57, 36], [160, 81, 18], [342, 57, 36], [342, 81, 18], [526, 57, 36], [526, 81, 18], [187, 648, 17], [828, 648, 17]];
		balance = +balance;
		addScore(game, scorePosions, balance);
		jp_bg = game.add.sprite(614, 22, 'jp_bg');
		jp_bg.visible = false;
		addJackpot(game);
		emulJackpot()
		game1.ticker = game.add.tileSprite(0, 785, 1154, 31, 'ticker');

		function pickLines(value){
			if (stopWinAnim === false){
				stopWinAnimFun();
			}
			game1.flickStatus = false;
			for (var i = 1; i <= 15; ++i) {
				game1.cell[i].scale.x = 1;
				game1.cell[i].scale.y = 1;
				game1.cell[i].visible = true;
				game1.copyCell[i].visible = false;
			}
			hideScattersAnim();
			hideLines();
			hideFlashNunbers();
			hideLineNumber();
			for (var i = 1; i <= value; ++i) {
				showLineNumber(i);
			}
		}
		function hideLineNumber(){
			game1.lineArr.forEach(function (lineNumber) {
				lineNumber.visible = false;
			});
		}
		function showLineNumber(lineNumber){
			game1.lineArr[111].visible = true;
			game1.lineArr[lineNumber].visible = true;
		}
		if(!repeatGame){
			if (freespinStatus){
				allWinOld = allWinBeforeFreespin;
				arrAllWinOld = DigitsOfNumAllWin(allWinOld);
				winScore.setText(allWinOld);
				winDol.setText('$'+((allWinOld)/100).toFixed(2));
				justText.visible = true;
				justText.setText('FREEGAME '+ freeSpinCount +' OF '+ maxFreespin);
				freespinText.setText('FREE SPIN '+ freeSpinCount +' OF '+ maxFreespin);
				freespinText.visible = true;
				miltiText.setText('ALL WINS MULTIPLIED BY '+ mulFreespin);
				miltiText.visible = true;
				hideButtons();
				$('.menu_wrap').css({
					display: 'block'
				});
				hideMobileBtn();
				freeSpinStart();
			}
		}
		if (firstStartGame){
			changeJackpot(0);
		}

		game1.cockAnimArray[1] = game.add.sprite(156,210, 'slot_anim');
		game1.cockAnimArray[2] = game.add.sprite(156,380, 'slot_anim');
		game1.cockAnimArray[3] = game.add.sprite(156,550, 'slot_anim');
		game1.cockAnimArray[4] = game.add.sprite(333,210, 'slot_anim');
		game1.cockAnimArray[5] = game.add.sprite(333,380, 'slot_anim');
		game1.cockAnimArray[6] = game.add.sprite(333,550, 'slot_anim');
		game1.cockAnimArray[7] = game.add.sprite(511,210, 'slot_anim');
		game1.cockAnimArray[8] = game.add.sprite(511,380, 'slot_anim');
		game1.cockAnimArray[9] = game.add.sprite(511,550, 'slot_anim');
		game1.cockAnimArray[10] = game.add.sprite(689,210, 'slot_anim');
		game1.cockAnimArray[11] = game.add.sprite(689,380, 'slot_anim');
		game1.cockAnimArray[12] = game.add.sprite(689,550, 'slot_anim');
		game1.cockAnimArray[13] = game.add.sprite(867,210, 'slot_anim');
		game1.cockAnimArray[14] = game.add.sprite(867,380, 'slot_anim');
		game1.cockAnimArray[15] = game.add.sprite(867,550, 'slot_anim');
		for (var i = 1; i <= 15; ++i) {
			game1.cockAnimArray[i].anchor.setTo(0.5, 0.5);
			game1.cockAnimArray[i].animations.add('cock_anim', [0,1,2], 12, true).play();
			game1.cockAnimArray[i].visible = false;
		}

		function changeJackpot(value){
			console.log(game1.jackpotsArray[value][1])
			jackpotsText.setText(game1.jackpotsArray[value][0]);
			jackpotsValue.setText('$'+ (+jackpots[value]).toFixed(2));
			jackpotsText.addColor(game1.jackpotsArray[value][1], 0);
			jackpotsValue.addColor(game1.jackpotsArray[value][1], 0);
			setTimeout(function() {
				value = value + 1;
				if (value == 4){
					value = 0;
				}
				jackpotsText.visible = false;
				jackpotsValue.visible = false;
				setTimeout(function() {
					jackpotsText.visible = true;
					jackpotsValue.visible = true;
					changeJackpot(value)
				}, 200);
			}, 2800);
		}
		var linePosition = [
		[73,374],
		[73,207],
		[73,541],
		[73,207],
		[73,207],
		[73,374],
		[73,207],
		[73,374],
		[73,207],
		[73,207],
		[73,374],
		[73,207],
		[73,374],
		[73,207],
		[73,374],
		[73,207],
		[73,374],
		[73,207],
		[73,207],
		[73,207],
		[73,207],
		[73,207],
		[73,207],
		[73,207],
		[73,207]
		];
		addLines(game, linePosition);
		if (freespinStatus){
			hideVisibleButtons();
		}
		help_1 = game.add.sprite(0, 0, 'help_1');
		help_1.visible = false;
		exit_help = game.add.sprite(20, 740, 'exit_help');
		exit_help.inputEnabled = true;
		exit_help.input.useHandCursor = true;
		exit_help.events.onInputDown.add(function(){
			btnHelpSound.play();
		});
		exit_help.events.onInputUp.add(function(){
			help_1.visible = false;
			exit_help.visible = false;
			next_page.visible = false;
			showButtons();
		})
		exit_help.visible = false;
		next_page = game.add.sprite(821, 740, 'next_page');
		next_page.inputEnabled = true;
		next_page.input.useHandCursor = true;
		next_page.events.onInputDown.add(function(){
			btnHelpSound.play();
		});
		next_page.events.onInputUp.add(function(){
			help_1.visible = false;
			exit_help.visible = false;
			next_page.visible = false;
			help_2.visible = true;
			prev_page.visible = true;
		})
		next_page.visible = false;
		help_2 = game.add.sprite(0, 0, 'help_2');
		help_2.visible = false;
		prev_page = game.add.sprite(27, 740, 'prev_page');
		prev_page.inputEnabled = true;
		prev_page.input.useHandCursor = true;
		prev_page.events.onInputDown.add(function(){
			btnHelpSound.play();
		});
		prev_page.events.onInputUp.add(function(){
			help_1.visible = true;
			exit_help.visible = true;
			next_page.visible = true;
			help_2.visible = false;
			prev_page.visible = false;
		})
		prev_page.visible = false;
		paytable_page = game.add.sprite(0, 0, 'paytable_page');
		paytable_page.visible = false;
		return_to_game = game.add.sprite(299, 718, 'return_to_game');
		return_to_game.inputEnabled = true;
		return_to_game.input.useHandCursor = true;
		return_to_game.events.onInputDown.add(function(){
			btnHelpSound.play();
		});
		return_to_game.events.onInputUp.add(function(){
			paytable_page.visible = false;
			return_to_game.visible = false;
			showButtons();
		})
		return_to_game.visible = false;		


		hideLines();
		var coinArrayLeft = [];
		var coinArrayRight = [];
		if (waterfallCoin === true){
			waterfallCoin = false;			
			jackpots = nextJAckpot;
			jackpots = [jackpots["MINI"]/100,jackpots["MINOR"]/100,jackpots["MAJOR"]/100,jackpots["BIG DADDY"]/100];
			justText.visible = true;
			justText.setText('Feature Complete');	
			coinAnim();
			setTimeout(function() {
				checkScore();
			}, 3000);
		}
		// function coinAnim(){
		// 	coinArrayLeft = [];
		// 	coinArrayRight = [];
		// 	coins.play();
		// 	hideButtons();
		// 	for (var i = 0; i <= 5; ++i) {
		// 		for (var j = 0; j <= 7; ++j) {
		// 			coinArrayLeft[i] = game.add.sprite(-130+125*i-j*50, -130-j*80, 'coin');
		// 			coinArrayLeft[i].animations.add('coin', animCoinArray[i], 16, true).play();  
		// 			coinGoLeftToRight(coinArrayLeft[i]) 
		// 		}
		// 		for (var j = 0; j <= 7; ++j) {
		// 			coinArrayRight[i] = game.add.sprite(1024-125*i+j*50, -130-j*80, 'coin');
		// 			coinArrayRight[i].animations.add('coin', animCoinArray[i], 16, true).play();   
		// 			coinGoRightToLeft(coinArrayRight[i]);
		// 		}
		// 	}
		// }
		if(firstStartGame){		
			hideMobileBtn();
			firstStartGame = false;
			if (isMobile) {
				black_bg = game.add.sprite(0,0, 'black_bg');
				black_bg.inputEnabled = true;
				btn_yes = game.add.sprite(238,476, 'btn_yes');
				btn_yes.inputEnabled = true;
				btn_yes.input.useHandCursor = true;
				btn_yes.events.onInputUp.add(function(){
					btnSound.play();
					game.sound.mute = false;
					black_bg.visible = false;
					btn_yes.visible = false;
					btn_no.visible = false;
					checkScore()
				});
				btn_no = game.add.sprite(544,475, 'btn_no');
				btn_no.inputEnabled = true;
				btn_no.input.useHandCursor = true;
				btn_no.events.onInputUp.add(function(){
					btnSound.play();
					game.sound.mute = true;
					black_bg.visible= false;
					btn_yes.visible= false;
					btn_no.visible= false;
					checkScore()
				});
			} else{
				showMobileBtn();
			}
		} else{
			if(!repeatGame){
				if (!freespinStatus){
					checkScore();
				}
			}
		}
		if(repeatGame){
			for (var i = 1; i <= 15; ++i) {
				game1.cell[i].loadTexture('cell'+copyInfo[i-1]);
				game1.copyCell[i].loadTexture('cell'+copyInfo[i-1]);
			}
			info = copyInfo;
			game1.spinStatus = false;
			hideVisibleButtons();
			justText.visible = true;
			justText.setText('A Pleasing Result');
			freespin_label.visible = true;
			freespin_label.scale.x = 1;
			freespin_label.scale.y = 1;
			winCock();
		}
	};



	game1.update = function () {
		if (cursorAnimSprite !== null){
			cursorAnimSprite.position.x = game.input.x;
			cursorAnimSprite.position.y = game.input.y;
		}
		if (game1.spinStatus1){
			game1.bars[0].tilePosition.y += 50;
		}
		if (game1.spinStatus2){
			game1.bars[1].tilePosition.y += 50;
		}
		if (game1.spinStatus3){
			game1.bars[2].tilePosition.y += 50;
		}
		if (game1.spinStatus4){
			game1.bars[3].tilePosition.y += 50;
		}
		if (game1.spinStatus5){
			game1.bars[4].tilePosition.y += 50;
		};
		game1.ticker.tilePosition.x += 0.5;
	};
	// game1.render = function () {
	// 	var rect = new Phaser.Rectangle( 20, 20, 400, 200 ) ;
	// 	game.debug.geom( rect, 'rgba(0,0,0,1)' ) ;
	// 	game.debug.soundInfo(music, 20, 32 );
	// }
	game.state.add('game1', game1);
};
