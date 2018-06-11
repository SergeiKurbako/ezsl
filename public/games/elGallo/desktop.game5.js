function game5() {

	var game5 = {
		cell : [],
		spinStatus : true,
		betPanel : false,
		pickBet : 2,
		bet : [],
		ticker : null,
		banArray : [],
		betAnim : false,
		spinjackpot : false,
		previosArr : [],
		card_anim: null,
		risk: null,
		riskDol: null,
		colorWin: null,
		colorWinDol: null,
		suitWin: null,
		suitWinDol: null
	};

	game5.preload = function () {};

	game5.create = function () {  
		curGame = 5;   
		hideMobileBtn()
		game.add.sprite(0,0, 'background_5');
		
		game5.previosArr[0] = game.add.sprite(408+44*0,543, infoCard[0]);
		game5.previosArr[1] = game.add.sprite(408+44*1,543, infoCard[1]);
		game5.previosArr[2] = game.add.sprite(408+44*2,543, infoCard[2]);
		game5.previosArr[3] = game.add.sprite(408+44*3,543, infoCard[3]);
		game5.previosArr[4] = game.add.sprite(408+44*4,543, infoCard[4]);

		game5.btn_c = game.add.sprite(95,496, 'btn_c');
		game5.btn_c.inputEnabled = true;
		game5.btn_c.input.useHandCursor = true;
		game5.btn_c.events.onInputUp.add(function(){
			animCursor();
		// checkWin('c')
		requestDouble(gamename,'c', game5);
	});
		game5.btn_b = game.add.sprite(211,496, 'btn_b');
		game5.btn_b.inputEnabled = true;
		game5.btn_b.input.useHandCursor = true;
		game5.btn_b.events.onInputUp.add(function(){	
			animCursor();
		// checkWin('b')
		requestDouble(gamename,'b', game5);
	});
		game5.btn_k = game.add.sprite(722,496, 'btn_k');
		game5.btn_k.inputEnabled = true;
		game5.btn_k.input.useHandCursor = true;
		game5.btn_k.events.onInputUp.add(function(){
			animCursor();
		// checkWin('k')
		requestDouble(gamename,'k', game5);
	});
		game5.btn_p = game.add.sprite(838,496, 'btn_p');
		game5.btn_p.inputEnabled = true;
		game5.btn_p.input.useHandCursor = true;
		game5.btn_p.events.onInputUp.add(function(){
			animCursor();
		// checkWin('p')
		requestDouble(gamename,'p', game5);
	});
		game5.red_btn = game.add.sprite(95,608, 'red_btn');
		game5.red_btn.inputEnabled = true;
		game5.red_btn.input.useHandCursor = true;
		game5.red_btn.events.onInputUp.add(function(){
			animCursor();
		// checkWin('red')
		requestDouble(gamename,'red', game5);
	});
		game5.black_btn = game.add.sprite(725,608, 'black_btn');
		game5.black_btn.inputEnabled = true;
		game5.black_btn.input.useHandCursor = true;
		game5.black_btn.events.onInputUp.add(function(){
			animCursor();
		// checkWin('black')
		requestDouble(gamename,'black', game5);
	});	
		game5.take_win = game.add.sprite(395,653, 'take_win_game5');
		game5.take_win.inputEnabled = true;
		game5.take_win.input.useHandCursor = true;
		game5.take_win.events.onInputUp.add(function(){
			btnHelpSound.play();
			game.state.start('game1');
		});
		game5.take_win.inputEnabled = false;
		game5.take_win.input.useHandCursor = false;
		game5.card_anim = game.add.sprite(332,138, 'anim_card_1'); 
		game5.anim_card_p = game.add.sprite(332,138, 'anim_card_p'); 
		game5.anim_card_p.visible = false; 
		game5.anim_card_k = game.add.sprite(332,138, 'anim_card_k'); 
		game5.anim_card_k.visible = false; 
		game5.anim_card_c = game.add.sprite(332,138, 'anim_card_c'); 
		game5.anim_card_c.visible = false; 
		game5.anim_card_b = game.add.sprite(332,138, 'anim_card_b'); 
		game5.anim_card_b.visible = false; 

		game5.win = game.add.sprite(345,369, 'WIN'); 
		game5.win.visible = false;


		game5.risk = game.add.text(513, 106, allWinOld, {
			font: '35px "Arial"',
			fill: '#e5e5e5'
		});
		game5.risk.anchor.setTo(0.5, 0.5);
		game5.riskDol = game.add.text(513, 157, '$'+ (allWinOld/100).toFixed(2), {
			font: '18px "Arial"',
			fill: '#c5bf6e'
		});
		game5.riskDol.anchor.setTo(0.5, 0.5);
		game5.colorWin = game.add.text(813, 237, allWinOld*2, {
			font: '35px "Arial"',
			fill: '#e5e5e5'
		});
		game5.colorWin.anchor.setTo(0.5, 0.5);
		game5.colorWinDol = game.add.text(813, 287, '$'+ (allWinOld*2/100).toFixed(2), {
			font: '18px "Arial"',
			fill: '#c5bf6e'
		});
		game5.colorWinDol.anchor.setTo(0.5, 0.5);
		game5.suitWin = game.add.text(190, 237, allWinOld*4, {
			font: '35px "Arial"',
			fill: '#e5e5e5'
		});
		game5.suitWin.anchor.setTo(0.5, 0.5);
		game5.suitWinDol = game.add.text(190, 287, '$'+ (allWinOld*4/100).toFixed(2), {
			font: '18px "Arial"',
			fill: '#c5bf6e'
		});
		game5.ticker = game.add.tileSprite(0, 785, 1154, 31, 'ticker');
		game5.suitWinDol.anchor.setTo(0.5, 0.5);
	};



	game5.update = function () {
		game5.ticker.tilePosition.x += 0.5;
	};

	game.state.add('game5', game5);

};
