function game4() {

	var game4 = {
		cell : [],
		spinStatus : true,
		betPanel : false,
		pickBet : 2,
		bet : [],
		ticker : null,
		banArray : [],
		betAnim : false,
		spinjackpot : false
	};

	game4.preload = function () {};

	game4.create = function () {      
		curGame = 4; 
		hideMobileBtn()
		game.add.sprite(0,0, 'background_4');

		game.load.image('random_prize', '../img/random_prize.png');
		game.load.image('take_win', '../img/take_win.png');
		game.load.image('replay_feature', '../img/replay_feature.png');
		game.load.image('ban', '../img/ban.png');

		game4.take_win = game.add.sprite(109,598, 'take_win');
		game4.take_win.inputEnabled = true;
		game4.take_win.input.useHandCursor = true;
		game4.take_win.events.onInputUp.add(function(){
			game4.banArray[1].visible = true;
			game4.banArray[2].visible = true;
			hideButtonGame4();
			animCursor();
			repaetFreespin = false;		
			requestGame4(gamename, 'get', game4);
		});
		game4.random_prize = game.add.sprite(404,646, 'random_prize');
		game4.random_prize.inputEnabled = true;
		game4.random_prize.input.useHandCursor = true;
		game4.random_prize.events.onInputUp.add(function(){
			game4.banArray[0].visible = true;
			game4.banArray[2].visible = true;
			hideButtonGame4();
			animCursor();
			repaetFreespin = false;			
			requestGame4(gamename, 'random', game4)
		});
		game4.replay_feature = game.add.sprite(721,598, 'replay_feature');
		if (!repaetFreespin){
			game4.replay_feature.inputEnabled = true;
			game4.replay_feature.input.useHandCursor = true;
			game4.replay_feature.events.onInputUp.add(function(){
				game4.banArray[0].visible = true;
				game4.banArray[1].visible = true;
				hideButtonGame4();
				animCursor();
				repaetFreespin = true;			
				freespinStatus = true;
				allWinOld = allWinBeforeFreespin;
				requestGame4(gamename, 'repeat', game4)
			});
		} 
		balance = +balance;
		credit = game.add.text(517, 190, allWinOld, {
			font: '42px "Arial"',
			fill: '#000000',
			fontWeight : '600',
			stroke: '#000000',
			strokeThickness: 0,
		});
		credit.anchor.setTo(0.5, 0.5);
		creditDol = game.add.text(517, 221, '$'+ (allWinOld/100).toFixed(2), {
			font: '20px "Arial"',
			fill: '#000000',
			fontWeight : '600',
			stroke: '#000000',
			strokeThickness: 0,
		});
		creditDol.anchor.setTo(0.5, 0.5);
		randomPrize = game.add.text(493, 738, randomNumber(1,4000), {
			font: '36px "Arial"',
			fill: '#b50000',
			fontWeight : '600',
			stroke: '#000000',
			strokeThickness: 0,
		});
		randomPrize.visible = false;
		randomPrize.anchor.setTo(0.5, 0.5);
		game4.banArray[0] = game.add.sprite(137,589, 'ban');
		game4.banArray[0].visible = false;
		game4.banArray[1] = game.add.sprite(436,638, 'ban');
		game4.banArray[1].visible = false;
		game4.banArray[2] = game.add.sprite(752,589, 'ban');
		game4.banArray[2].visible = false;
		if (repaetFreespin){
			game4.banArray[2].visible = true;
		}
		game4.ticker = game.add.tileSprite(0, 785, 1154, 31, 'ticker');
		function hideButtonGame4(){
			game4.take_win.inputEnabled = false;
			game4.take_win.input.useHandCursor = false;
			game4.random_prize.inputEnabled = false;
			game4.random_prize.input.useHandCursor = false;
			if (!repaetFreespin){
				game4.replay_feature.inputEnabled = false;
				game4.replay_feature.input.useHandCursor = false;
			}
		}
	};



	game4.update = function () {
		game4.ticker.tilePosition.x += 0.5;
	};

	game.state.add('game4', game4);

};
