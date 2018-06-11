function game3() {

	var game3 = {
		cell : [],
		spinStatus : true,
		betPanel : false,
		pickBet : 2,
		bet : [],
		ticker : null,
		top_circle : [],
		bottom_circle : [],
		shadow_circle_top : [],
		shadow_circle_bottom : [],
		betAnim : false,
		spinjackpot : false
	};

	game3.preload = function () {};

	game3.create = function () {  
		curGame = 3;
		hideMobileBtn()
		topValue = [1,2,3,4,5];
		function compareRandom(a, b) {
			return Math.random() - 0.5;
		}
		bottomValue = [10,30,25,15,20];
		game.add.sprite(0,0, 'background_3');
		var btn_game3 = game.add.audio('btn_game3');
		var sound_after_pick = game.add.audio('sound_after_pick');
		var pick1btn = false;
		var pick2btn = false;
		var multi = ropeValues['mul']
		var countFree = ropeValues['count']
		for (var i = 1; i <= 5; ++i) {
			game3.top_circle[i] = game.add.sprite(29+199*(i-1),431, 'top_circle');
			game3.shadow_circle_top[i] = game.add.sprite(29+199*(i-1),431, 'shadow_circle');
			game3.shadow_circle_top[i].visible = false;
			game3.top_circle[i].inputEnabled = true;
			game3.top_circle[i].input.useHandCursor = true;
			game3.bottom_circle[i] = game.add.sprite(29+199*(i-1),185, 'bottom_circle');
			game3.shadow_circle_bottom[i] = game.add.sprite(29+199*(i-1),185, 'shadow_circle');
			game3.shadow_circle_bottom[i].visible = false;
			game3.bottom_circle[i].inputEnabled = true;
			game3.bottom_circle[i].input.useHandCursor = true;
		}
		game3.top_circle[1].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_top[j].visible = true;	
				game3.top_circle[j].inputEnabled = false;
				game3.top_circle[j].input.useHandCursor = false;
			}
			topValue.splice(topValue.indexOf(multi), 1);
			topValue.sort(compareRandom);
			game3.top_circle[1].loadTexture('all_wins_times_' + multi);
			game3.top_circle[2].loadTexture('all_wins_times_' + topValue[0]);
			game3.top_circle[3].loadTexture('all_wins_times_' + topValue[1]);
			game3.top_circle[4].loadTexture('all_wins_times_' + topValue[2]);
			game3.top_circle[5].loadTexture('all_wins_times_' + topValue[3]);

			btn_game3.play();
			game3.shadow_circle_top[1].visible = false;
			pickBtn1();
		});
		game3.top_circle[2].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_top[j].visible = true;
				game3.top_circle[j].inputEnabled = false;
				game3.top_circle[j].input.useHandCursor = false;
			}
			topValue.splice(topValue.indexOf(multi), 1);
			topValue.sort(compareRandom);
			game3.top_circle[2].loadTexture('all_wins_times_' + multi);
			game3.top_circle[1].loadTexture('all_wins_times_' + topValue[0]);
			game3.top_circle[3].loadTexture('all_wins_times_' + topValue[1]);
			game3.top_circle[4].loadTexture('all_wins_times_' + topValue[2]);
			game3.top_circle[5].loadTexture('all_wins_times_' + topValue[3]);

			btn_game3.play();
			game3.shadow_circle_top[2].visible = false;
			pickBtn1();
		});
		game3.top_circle[3].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_top[j].visible = true;
				game3.top_circle[j].inputEnabled = false;
				game3.top_circle[j].input.useHandCursor = false;
			}
			topValue.splice(topValue.indexOf(multi), 1);
			topValue.sort(compareRandom);
			game3.top_circle[3].loadTexture('all_wins_times_' + multi);
			game3.top_circle[1].loadTexture('all_wins_times_' + topValue[0]);
			game3.top_circle[2].loadTexture('all_wins_times_' + topValue[1]);
			game3.top_circle[4].loadTexture('all_wins_times_' + topValue[2]);
			game3.top_circle[5].loadTexture('all_wins_times_' + topValue[3]);

			btn_game3.play();
			game3.shadow_circle_top[3].visible = false;
			pickBtn1();
		});
		game3.top_circle[4].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_top[j].visible = true;
				game3.top_circle[j].inputEnabled = false;
				game3.top_circle[j].input.useHandCursor = false;
			}
			topValue.splice(topValue.indexOf(multi), 1);
			topValue.sort(compareRandom);
			game3.top_circle[4].loadTexture('all_wins_times_' + multi);
			game3.top_circle[1].loadTexture('all_wins_times_' + topValue[0]);
			game3.top_circle[2].loadTexture('all_wins_times_' + topValue[1]);
			game3.top_circle[3].loadTexture('all_wins_times_' + topValue[2]);
			game3.top_circle[5].loadTexture('all_wins_times_' + topValue[3]);

			btn_game3.play();
			game3.shadow_circle_top[4].visible = false;
			pickBtn1();
		});
		game3.top_circle[5].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_top[j].visible = true;
				game3.top_circle[j].inputEnabled = false;
				game3.top_circle[j].input.useHandCursor = false;
			}
			topValue.splice(topValue.indexOf(multi), 1);
			topValue.sort(compareRandom);
			game3.top_circle[5].loadTexture('all_wins_times_' + multi);
			game3.top_circle[1].loadTexture('all_wins_times_' + topValue[0]);
			game3.top_circle[2].loadTexture('all_wins_times_' + topValue[1]);
			game3.top_circle[3].loadTexture('all_wins_times_' + topValue[2]);
			game3.top_circle[4].loadTexture('all_wins_times_' + topValue[3]);

			btn_game3.play();
			game3.shadow_circle_top[5].visible = false;
			pickBtn1();
		});
		game3.bottom_circle[1].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_bottom[j].visible = true;	
				game3.bottom_circle[j].inputEnabled = false;
				game3.bottom_circle[j].input.useHandCursor = false;
			}
			bottomValue.splice(bottomValue.indexOf(countFree), 1);
			bottomValue.sort(compareRandom);
			game3.bottom_circle[1].loadTexture('freegames_' + countFree);
			game3.bottom_circle[2].loadTexture('freegames_' + bottomValue[0]);
			game3.bottom_circle[3].loadTexture('freegames_' + bottomValue[1]);
			game3.bottom_circle[4].loadTexture('freegames_' + bottomValue[2]);
			game3.bottom_circle[5].loadTexture('freegames_' + bottomValue[3]);
			btn_game3.play();
			game3.shadow_circle_bottom[1].visible = false;
			pickBtn2();
		});
		game3.bottom_circle[2].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_bottom[j].visible = true;
				game3.bottom_circle[j].inputEnabled = false;
				game3.bottom_circle[j].input.useHandCursor = false;
			}

			bottomValue.splice(bottomValue.indexOf(countFree), 1);
			bottomValue.sort(compareRandom);
			game3.bottom_circle[2].loadTexture('freegames_' + countFree);
			game3.bottom_circle[1].loadTexture('freegames_' + bottomValue[0]);
			game3.bottom_circle[3].loadTexture('freegames_' + bottomValue[1]);
			game3.bottom_circle[4].loadTexture('freegames_' + bottomValue[2]);
			game3.bottom_circle[5].loadTexture('freegames_' + bottomValue[3]);
			btn_game3.play();
			game3.shadow_circle_bottom[2].visible = false;
			pickBtn2();
		});
		game3.bottom_circle[3].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_bottom[j].visible = true;
				game3.bottom_circle[j].inputEnabled = false;
				game3.bottom_circle[j].input.useHandCursor = false;
			}

			bottomValue.splice(bottomValue.indexOf(countFree), 1);
			bottomValue.sort(compareRandom);
			game3.bottom_circle[3].loadTexture('freegames_' + countFree);
			game3.bottom_circle[1].loadTexture('freegames_' + bottomValue[0]);
			game3.bottom_circle[2].loadTexture('freegames_' + bottomValue[1]);
			game3.bottom_circle[4].loadTexture('freegames_' + bottomValue[2]);
			game3.bottom_circle[5].loadTexture('freegames_' + bottomValue[3]);
			btn_game3.play();
			game3.shadow_circle_bottom[3].visible = false;
			pickBtn2();
		});
		game3.bottom_circle[4].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_bottom[j].visible = true;
				game3.bottom_circle[j].inputEnabled = false;
				game3.bottom_circle[j].input.useHandCursor = false;
			}

			bottomValue.splice(bottomValue.indexOf(countFree), 1);
			bottomValue.sort(compareRandom);
			game3.bottom_circle[4].loadTexture('freegames_' + countFree);
			game3.bottom_circle[1].loadTexture('freegames_' + bottomValue[0]);
			game3.bottom_circle[2].loadTexture('freegames_' + bottomValue[1]);
			game3.bottom_circle[3].loadTexture('freegames_' + bottomValue[2]);
			game3.bottom_circle[5].loadTexture('freegames_' + bottomValue[3]);
			btn_game3.play();
			game3.shadow_circle_bottom[4].visible = false;
			pickBtn2();
		});
		game3.bottom_circle[5].events.onInputUp.add(function(){
			for (var j = 1; j <= 5; ++j){	
				game3.shadow_circle_bottom[j].visible = true;
				game3.bottom_circle[j].inputEnabled = false;
				game3.bottom_circle[j].input.useHandCursor = false;
			}

			bottomValue.splice(bottomValue.indexOf(countFree), 1);
			bottomValue.sort(compareRandom);
			game3.bottom_circle[5].loadTexture('freegames_' + countFree);
			game3.bottom_circle[1].loadTexture('freegames_' + bottomValue[0]);
			game3.bottom_circle[2].loadTexture('freegames_' + bottomValue[1]);
			game3.bottom_circle[3].loadTexture('freegames_' + bottomValue[2]);
			game3.bottom_circle[4].loadTexture('freegames_' + bottomValue[3]);
			btn_game3.play();
			game3.shadow_circle_bottom[5].visible = false;
			pickBtn2();
		});

		game3.ticker = game.add.tileSprite(0, 785, 1154, 31, 'ticker');

		function pickBtn1(){
			topValue = [1,2,3,4,5];
			pick1btn = true;
			if (pick2btn === true){
				sound_after_pick.play();								
				setTimeout(function() {
					freespinStatus = true;
					game.state.start('game1');
				}, 6500);
			}
			animCursor();
		}
		function pickBtn2(){
			bottomValue = [10,30,25,15,20];
			pick2btn = true;
			if (pick1btn === true){
				sound_after_pick.play();								
				setTimeout(function() {
					freespinStatus = true;
					game.state.start('game1');
				}, 6500);
				animCursor();
			}
		}
	};



	game3.update = function () {
		game3.ticker.tilePosition.x += 0.5;
	};

	game.state.add('game3', game3);

};
