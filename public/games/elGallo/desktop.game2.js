function game2() {

	var game2 = {
		cell : [],
		spinStatus : true,
		betPanel : false,
		pickBet : 2,
		bet : [],
		ticker : null,
		betAnim : false,
		spinjackpot : false
	};

	game2.preload = function () {};

	game2.create = function () {  
		curGame = 2;
		hideMobileBtn()
		game2.spinjackpot = true;
		game2.spinStatus = true;
		// game2.jackpotValue = 0; //major
		// game2.jackpotValue = 1; //big
		// game2.jackpotValue = 2; //minor
		// game2.jackpotValue = 3; //mini

		var game2_bg = game.add.audio('drumroll');
		var game2_win = game.add.audio('game2_win');
		game2_bg.loop = true;
		game2_bg.play();
		game.add.sprite(0,0, 'background_2');
		bg_bottom = game.add.sprite(0,685, 'bg_2_bottom');
		bg_bottom.visible = false;
		game2.bar_jackpot = game.add.tileSprite(572, 153, 166, 498, 'bar_jackpot');
		game2.bar_jackpot.tilePosition.y =  0 ;
		lattice1 = game.add.sprite(570 , 151, 'lattice');
		lattice2 = game.add.sprite(570 , 483, 'lattice');

		stop_reel = game.add.sprite(798 , 684, 'stop_reel');
		stop_reel.inputEnabled = true;
		stop_reel.input.useHandCursor = true;
		stop_reel.events.onInputOver.add(function(){ 
			stop_reel.loadTexture('stop_reel_h');
		})
		stop_reel.events.onInputOut.add(function(){
			stop_reel.loadTexture('stop_reel');
		});
		stop_reel.events.onInputUp.add(function(){
			game2_bg.stop();
			game2_win.play();
			stop_reel.visible = false;
			game2.spinStatus = false;
			creditOldDOl.visible = true;
			switch (jackpot) {
				case 'MAJOR':
				game2.jackpotValue = 0;
				creditOld.setText(jackpotArr["MAJOR"]);			
				creditOldDOl.setText('$'+ (jackpotArr["MAJOR"]/100).toFixed(2));
				balance = balance + jackpotArr["MAJOR"];
				break;
				case 'BIG DADDY':
				game2.jackpotValue = 1;
				creditOld.setText(jackpotArr["BIG DADDY"]);			
				creditOldDOl.setText('$'+ (jackpotArr["BIG DADDY"]/100).toFixed(2));
				balance = balance + jackpotArr["BIG DADDY"];
				break;
				case 'MINOR':
				game2.jackpotValue = 2;
				creditOld.setText(jackpotArr["MINOR"]);			
				creditOldDOl.setText('$'+ (jackpotArr["MINOR"]/100).toFixed(2));
				balance = balance + jackpotArr["MINOR"];
				break;
				case 'MINI':
				game2.jackpotValue = 3;
				creditOld.setText(jackpotArr["MINI"]);			
				creditOldDOl.setText('$'+ (jackpotArr["MINI"]/100).toFixed(2));
				balance = balance + jackpotArr["MINI"];
				break;
			} 
			bg_bottom.visible = true;
			flashWinPosition(game2.jackpotValue);
		});

		// addScore(game, scorePosions, balance);

		miniScore = game.add.text(370, 215, '$'+ (jackpotArr["MINI"]/100).toFixed(2), {
			font: '46px "Arial Black"',
			fill: '#000000',
			stroke: '#000000',
			strokeThickness: 0,
		});
		miniScore.anchor.setTo(0.5, 0.5);
		minorScore = game.add.text(370, 348, '$'+ (jackpotArr["MINOR"]/100).toFixed(2), {
			font: '46px "Arial Black"',
			fill: '#000000',
			stroke: '#000000',
			strokeThickness: 0,
		});
		minorScore.anchor.setTo(0.5, 0.5);
		majorScore = game.add.text(370, 479, '$'+ (jackpotArr["MAJOR"]/100).toFixed(2), {
			font: '46px "Arial Black"',
			fill: '#000000',
			stroke: '#000000',
			strokeThickness: 0,
		});
		majorScore.anchor.setTo(0.5, 0.5);
		bigDaddyScore = game.add.text(370, 606, '$'+ (jackpotArr["BIG DADDY"]/100).toFixed(2), {
			font: '46px "Arial Black"',
			fill: '#000000',
			stroke: '#000000',
			strokeThickness: 0,
		});
		bigDaddyScore.anchor.setTo(0.5, 0.5);
		winScoreGame2 = game.add.text(876, 251, balance, {
			font: '39px "Arial"',
			fill: '#f2f46e',
			stroke: '#000000',
			strokeThickness: 0,
		});
		winScoreGame2.anchor.setTo(0.5, 0.5);
		winDolGame2 = game.add.text(876, 296, '$'+ (balance/100).toFixed(2), {
			font: '29px "Arial"',
			fill: '#ffffff',
			stroke: '#000000',
			strokeThickness: 0,
		});
		winDolGame2.anchor.setTo(0.5, 0.5);
		creditOld = game.add.text(876, 582, '??????', {
			font: '39px "Arial"',
			fill: '#f2f46e',
			stroke: '#000000',
			strokeThickness: 0,
		});
		creditOld.anchor.setTo(0.5, 0.5);
		creditOldDOl = game.add.text(876, 627, '', {
			font: '29px "Arial"',
			fill: '#ffffff',
			stroke: '#000000',
			strokeThickness: 0,
		});
		creditOldDOl.anchor.setTo(0.5, 0.5);
		creditOldDOl.visible = false;
		game2.ticker = game.add.tileSprite(0, 785, 1154, 31, 'ticker');
		function flashWinPosition(value){
			var curText;
			switch (value) {
				case 0:
				curText = majorScore;
				break;
				case 1:
				curText = bigDaddyScore;
				break;
				case 2:
				curText = minorScore;
				break;
				case 3:
				curText = miniScore;
				break;
			} 
			setTimeout(function() {
				curText.visible = false;
				setTimeout(function() {
					curText.visible = true;
					setTimeout(function() {
						curText.visible = false;
						setTimeout(function() {
							curText.visible = true;
							setTimeout(function() {
								curText.visible = false;
								setTimeout(function() {
									curText.visible = true;
									setTimeout(function() {
										curText.visible = false;
										setTimeout(function() {
											curText.visible = true;
											game.state.start('game1');
											waterfallCoin = true;
										}, 500);
									}, 500);
								}, 500);
							}, 500);
						}, 500);
					}, 500);
				}, 500);
			}, 500);
		}
	};



	game2.update = function () {
		if (game2.spinjackpot){
			game2.bar_jackpot.tilePosition.y += 20;
			if (game2.spinStatus == false) {
				if(game2.bar_jackpot.tilePosition.y >= 30+166*game2.jackpotValue & game2.bar_jackpot.tilePosition.y <= 50+166*game2.jackpotValue){
					game2.spinjackpot = false;
					game.add.tween(game2.bar_jackpot.tilePosition).to({y: 0+166*game2.jackpotValue}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
					});					
				}
			}
		}
		game2.ticker.tilePosition.x += 0.5;
	};

	game.state.add('game2', game2);

};
