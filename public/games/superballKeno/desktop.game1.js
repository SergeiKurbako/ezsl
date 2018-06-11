var game = new Phaser.Game(1024, 816, Phaser.AUTO, 'game-area', 'ld29', null, false, false);
var green_btns = [];
var game1;
var winArrText = [];
var pickArrText = [];
var pickNumArrText = [];
var dolArrText = [];
var balanceUpdateStatus = false;
var winStatus = false;
var spinStatus = false;
var purple_block_anim = [];
var purple_border_anim = [];
var red_border_anim = [];
var red_btn_anim = [];
var superballHitStatus = false;
var stopFlickText = false;
var sorryStatus = false;
var mouseDownStatus = false;
var info;
var consta1 = 2; 
var consta2 = consta1*1.25; 
var consta3 = 4; 
var btnStatus = true;
var helpTextStatus = false;
var helpValue = 1;
var stopFlickHelp = false;
var sorry_anim_end;
var jackpotStatus = false;
var starsArr = [];
var helpTextArr =[
[0,0,2.75],
[0,0,0.5,6.5],
[0,0,0.25,1.25,15.00],
[0,0,0.25,0.5,2.75,18.75],
[0,0,0,0.5,1.75,7.5,31.25],
[0,0,0,0.25,1.0,3.0,18.75,50],
[0,0,0,0.25,0.5,1.5,4.25,30,125],
[0,0,0,0,0.5,1.25,3.5,13.75,50,250],
[0,0,0,0,0.25,1.0,2.0,6.0,25,125,250]
]
var points = {
	'x': [-67,35, 185, 315, 390, 465, 653, 727],
	'y': [-65,22, 0,   27,  13,  27,  27,  91]
}; 
var points2 = {
	'x': [-67,35, 185, 315, 390, 465, 653],
	'y': [-65,22, 0,   27,  13,  27,  27]
}; 
var pointsFinish = {
	'x': [-67,35],
	'y': [-65,22]
}; 
var lastBallGetStatus = false;
var statusFinishRow = 3;
var copyInfo =[];
var allwin;
var winValue;
var lastball;
var pickValue = 0;
var qickPickStatus = false;
var dist1, dist2, dist3, dist4, dist5, dist6;
var ballsSound = [];
var arrBetBtn = [];
function game1() {

	game1 = {
		lineArr: [],
		// green_btns: [],
		yellow_btns: [],
		green_btns_numbers: [],
		yellow_btns_numbers: [],
		red_btns_numbers: [],
		balls: [],
		increment: [],
		t: [],
		ticker: null,
		timer: []
	};

	game1.preload = function () {};

	game1.create = function () {
		var stopFlickSquare = false;
		addAudio();
		for (var i = 1; i <= 20; ++i) {
			game1.increment[i] = 10 / game.width;  
			game1.t[i] = 0;  
			game1.timer[i] = null; 
		}
		for (var i = 1; i <= 10; ++i) {
			ballsSound[i] = game.add.audio('ballSound'+i);
		}

		game.add.sprite(0,0, 'game.background');
		red_square_anim = game.add.sprite(663, 91, 'red_square_anim');
		red_square_anim.animations.add('anim', [0,1,2,3,4,5,6,7], 15, true).play();
		red_square_anim.alpha = 0;
		red_square_anim2 = game.add.sprite(663, 91, 'red_square_anim2');
		red_square_anim2.animations.add('anim', [0,1,2,3,4,3,2,1], 15, true).play();
		red_square_anim2.alpha = 0;
		win_center = game.add.sprite(58,388, 'win_center');
		win_center.visible = false;
		goodLuck = game.add.sprite(58,388, 'goodLuck');
		goodLuck.visible = false;		
		big_dol = game.add.sprite(363,404, 'big_dol');
		big_dol.visible = false;		
		superball_hit = game.add.sprite(179,414, 'superball_hit');
		superball_hit.visible = false;	
		sorry = game.add.sprite(121,396, 'sorry');
		sorry.visible = false;			
		superball_winner = game.add.sprite(78,400, 'superball_winner');
		superball_winner.animations.add('anim', [0,1,2,3,4,3,2,1], 15, true).play()
		superball_winner.alpha = 0;
		touch_anim_start = game.add.sprite(70,392, 'touch_anim');
		touch_anim_start.animations.add('anim', [0,1,2,3,4], 15, false);
		touch_anim_end = game.add.sprite(70,392, 'touch_anim');
		touch_anim_end.animations.add('anim', [4,3,2,1,0], 15, false);
		touch_anim_end.visible = false;
		touch_anim_start.animations.add('anim2', [4], 3, false).play();
		// touch_anim_start.visible = false;
		sorry_anim_start = game.add.sprite(120,391, 'sorry_anim');
		sorry_anim_start.animations.add('anim', [0,1,2,3,4], 15, false);
		sorry_anim_start.visible = false;	
		sorry_anim_end = game.add.sprite(120,391, 'sorry_anim');
		// sorry_anim_end.animations.add('anim', [4,3,2,1,0], 15, false);
		sorry_anim_end.visible = false;	
		last_ball_start = game.add.sprite(71,389, 'last_ball_start');
		last_ball_start.animations.add('anim', [0,1,2,3,4], 15, false)
		last_ball_start.visible = false;
		last_ball_end = game.add.sprite(71,389, 'last_ball_start');
		last_ball_end.animations.add('anim', [4,3,2,1,0], 15, false);
		last_ball_end.visible = false;
		last_ball = game.add.sprite(72,392, 'last_ball');
		last_ball.animations.add('anim', [0,1,2,3,4,3,2,1], 15, true).play()
		last_ball.alpha = 0;
		big_red_border = game.add.sprite(17, 91, 'big_red_border');
		big_red_border.animations.add('anim',[7,6,5,4,3,2,1,0], 15, true).play();
		big_red_border.alpha = 0; 
		midAnim();

		for (var i = 0; i <= 7; ++i) {
			for (var j = 1; j <= 10; ++j) {
				var number = i*10+j;
				if (i < 4){
					green_btns[number] = game.add.sprite(33+(j-1)*61, 107+i*65, 'green_btn');
				} else {
					green_btns[number] = game.add.sprite(33+(j-1)*61, 486+(i-4)*65, 'green_btn');			
				}
				green_btns[number].inputEnabled = true;
				green_btns[number].input.useHandCursor = true;
			}
		}
		for (var i = 0; i <= 7; ++i) {
			for (var j = 1; j <= 10; ++j) {
				var number = i*10+j;
				if (i < 4){
					red_btn_anim[number] = game.add.sprite(33+(j-1)*61, 107+i*65, 'red_btn_anim');
					red_btn_anim[number].animations.add('anim', [4,5,6,7,0,1,2,3], 15, true).play();
					red_btn_anim[number].alpha = 0;
					purple_block_anim[number] = game.add.sprite(32+(j-1)*61, 107+i*65, 'purple_block_anim');
					purple_block_anim[number].animations.add('anim', [0,1,2,3,4,3,2,1], 15, true).play();
					purple_block_anim[number].visible = false;
				} else {		
					red_btn_anim[number] = game.add.sprite(33+(j-1)*61, 486+(i-4)*65, 'red_btn_anim');
					red_btn_anim[number].animations.add('anim', [4,5,6,7,0,1,2,3], 15, true).play();
					red_btn_anim[number].alpha = 0;
					purple_block_anim[number] = game.add.sprite(32+(j-1)*61, 486+(i-4)*65, 'purple_block_anim');
					purple_block_anim[number].animations.add('anim', [0,1,2,3,4,3,2,1], 15, true).play();
					purple_block_anim[number].visible = false;			
				}
			}
		}
		for (var i = 0; i <= 7; ++i) {
			for (var j = 1; j <= 10; ++j) {
				var number = i*10+j;
				if (i < 4){
					game1.green_btns_numbers[number] = game.add.sprite(63+(j-1)*61, 141+i*65, 'green_'+ (number));
					game1.green_btns_numbers[number].anchor.setTo(0.5, 0.5);
					game1.yellow_btns_numbers[number] = game.add.sprite(63+(j-1)*61, 141+i*65, 'yellow_'+ (number));
					game1.yellow_btns_numbers[number].anchor.setTo(0.5, 0.5);
					game1.red_btns_numbers[number] = game.add.sprite(63+(j-1)*61, 141+i*65, 'red_'+ (number));
					game1.red_btns_numbers[number].anchor.setTo(0.5, 0.5);
				} else {				
					game1.green_btns_numbers[number] = game.add.sprite(63+(j-1)*61, 520+(i-4)*65, 'green_'+ (number));	
					game1.green_btns_numbers[number].anchor.setTo(0.5, 0.5);				
					game1.yellow_btns_numbers[number] = game.add.sprite(63+(j-1)*61, 520+(i-4)*65, 'yellow_'+ (number));	
					game1.yellow_btns_numbers[number].anchor.setTo(0.5, 0.5);					
					game1.red_btns_numbers[number] = game.add.sprite(63+(j-1)*61, 520+(i-4)*65, 'red_'+ (number));	
					game1.red_btns_numbers[number].anchor.setTo(0.5, 0.5);			
				}
				game1.yellow_btns_numbers[number].visible = false;	
				game1.red_btns_numbers[number].visible = false;	
			}
		}
		green_btns.forEach(function (item, numb) {
			green_btns[numb].events.onInputDown.add(function(){
				if(balanceUpdateStatus){
					stopUpdateBalance();
				} else{
					updateTable();
					pressButton(numb);
				}
			})
			green_btns[numb].events.onInputOver.add(function(){
				if (mouseDownStatus){
					updateTable();
					pressButton(numb);
				}
			})

		})
		for (var i = 1; i <= 10; ++i) {
			for (var j = 1; j <= 2; ++j) {
				game1.balls[i+i-1+j-1] = game.add.sprite(661+(j-1)*64, 665-(i-1)*64, 'ball_'+(+i+i-1+j-1+60));
			}
		}
		block1 = game.add.sprite(663,730, 'block1');
		block2 = game.add.sprite(623,761, 'block2');
		block2.visible = false;
		game.add.sprite(793, 18, 'right_panel');
		picksImg = game.add.sprite(801, 325, 'picks');
		jackpot_amount = game.add.sprite(801, 325, 'jackpot_amount');
		jackpot_amount.visible = false;		
		for (var i = 0; i <= 7; ++i) {
			for (var j = 1; j <= 10; ++j) {
				var number = i*10+j;
				if (i < 4){
					purple_border_anim[number] = game.add.sprite(63+(j-1)*61, 141+i*65, 'purple_border_anim');
					purple_border_anim[number].anchor.setTo(0.5, 0.5);
					purple_border_anim[number].animations.add('anim', [0,1,2,3,4,5,6,7,8,9], 20, false);
					purple_border_anim[number].visible = false;
					red_border_anim[number] = game.add.sprite(64+(j-1)*61, 141+i*65, 'red_border_anim');
					red_border_anim[number].anchor.setTo(0.5, 0.5);
					red_border_anim[number].animations.add('anim', [0,1,2,3,4,5,6,7,8,9,10], 20, false);
					red_border_anim[number].visible = false;
				} else {		
					purple_border_anim[number] = game.add.sprite(63+(j-1)*61, 520+(i-4)*65, 'purple_border_anim');
					purple_border_anim[number].anchor.setTo(0.5, 0.5);
					purple_border_anim[number].animations.add('anim', [0,1,2,3,4,5,6,7,8,9], 15, false);
					purple_border_anim[number].visible = false;
					red_border_anim[number] = game.add.sprite(64+(j-1)*61, 520+(i-4)*65, 'red_border_anim');
					red_border_anim[number].anchor.setTo(0.5, 0.5);
					red_border_anim[number].animations.add('anim', [0,1,2,3,4,5,6,7,8,9,10], 15, false);
					red_border_anim[number].visible = false;				
				}
			}
		}
		exit = game.add.sprite(900, 24, 'exit');
		exit.inputEnabled = true;
		exit.input.useHandCursor = true;
		exit.events.onInputOver.add(function(){ 
		})
		exit.events.onInputOut.add(function(){
		});
		exit.events.onInputDown.add(function(){
			exit.loadTexture('exit_p');
		});
		exit.events.onInputUp.add(function(){
			exitSound.play();
			exit.loadTexture('exit');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				if ((+balance + allWinOld) > 0){
					$('.popup_exit,.overlay').show();
				} else {
					setTimeout(function() {
						location.href = '/';
					}, 1000);  
				}
			}
		});
		help = game.add.sprite(800, 24, 'help');
		help.inputEnabled = true;
		help.input.useHandCursor = true;
		help.events.onInputOver.add(function(){ 
		})
		help.events.onInputOut.add(function(){
		});
		help.events.onInputDown.add(function(){
			help.loadTexture('help_p');
		});
		help.events.onInputUp.add(function(){
			helpSound.play();
			help.loadTexture('help');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				if (!spinStatus){
					updateTable();					
				} 
				hideButtons();
				help.inputEnabled = false;
				help.input.useHandCursor = false;
				help.loadTexture('help_p');
				help1Vis();
			}
		});
		quickPick = game.add.sprite(800, 254, 'quickPick');
		quickPick.inputEnabled = true;
		quickPick.input.useHandCursor = true;
		quickPick.events.onInputOver.add(function(){ 
		})
		quickPick.events.onInputOut.add(function(){
		});
		quickPick.events.onInputDown.add(function(){
			quickPick.loadTexture('quickPick_p');
		});
		quickPick.events.onInputUp.add(function(){
			if (!qickPickStatus){
				quickPick.loadTexture('quickPick');
				if(balanceUpdateStatus){
					stopUpdateBalance();
				} else{
					updateTable();
					qickPickStatus = true;
					wipecard_quickpickSound.play();
					wipe();
					hideButtons();
					setTimeout(function(){
						quick();
					}, 400)
				}			
			}			
		});
		wipeCard = game.add.sprite(800, 189, 'wipeCard');
		wipeCard.inputEnabled = true;
		wipeCard.input.useHandCursor = true;
		wipeCard.events.onInputOver.add(function(){ 
		})
		wipeCard.events.onInputOut.add(function(){
			visJackpot();
		});
		wipeCard.events.onInputDown.add(function(){
			wipeCard.loadTexture('wipeCard_p');
		});
		wipeCard.events.onInputUp.add(function(){	
			wipecard_quickpickSound.play()
			wipeCard.loadTexture('wipeCard');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{		
				updateTable();
				wipe();
			}
		});

		bet_bottom = game.add.sprite(900, 254, 'bet_bottom');
		bet_bottom.inputEnabled = true;
		bet_bottom.input.useHandCursor = true;
		bet_bottom.events.onInputOver.add(function(){ 
		})
		bet_bottom.events.onInputOut.add(function(){
		});
		bet_bottom.events.onInputDown.add(function(){
			bet_bottom.loadTexture('bet_bottom_p');
		});
		bet_bottom.events.onInputUp.add(function(){
			bet_bottom.loadTexture('bet_bottom');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				updateTable();
				betDown();
			}
		});
		bet_top = game.add.sprite(900, 189, 'bet_top');
		bet_top.inputEnabled = true;
		bet_top.input.useHandCursor = true;
		bet_top.events.onInputOver.add(function(){ 
		})
		bet_top.events.onInputOut.add(function(){
		});
		bet_top.events.onInputDown.add(function(){
			bet_top.loadTexture('bet_top_p');
		});
		bet_top.events.onInputUp.add(function(){
			bet_top.loadTexture('bet_top');
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else {
				updateTable();
				betUp();
			}
		});
		allWin = 0;
		playGame = game.add.sprite(800, 679, 'playGame');
		playGame.inputEnabled = true;
		playGame.input.useHandCursor = true;
		playGame.events.onInputOver.add(function(){ 
		})
		playGame.events.onInputOut.add(function(){
		});
		playGame.events.onInputDown.add(function(){
			if ((balance + allWin) === 0){
				playGame.loadTexture('AddCredit_p');  
			} else {	
				playGame.loadTexture('playGame_p');
			}
		});
		playGame.events.onInputUp.add(function(){
			if ((balance + allWin) === 0){
				playGame.loadTexture('AddCredit');
				$('.add_credits,.overlay').show();
			} else {	
				playGame.loadTexture('playGame');
				if(balanceUpdateStatus){
					stopUpdateBalance();
				} else{
					startSpin();
				}
			}
		});
		addscore()
		starsArr[0] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[1] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[2] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[3] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[4] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[5] = game.add.sprite(183, 293, 'Red_stars');		
		starsArr[6] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[7] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[8] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[9] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[10] = game.add.sprite(183, 293, 'Red_stars');
		starsArr[0].visible = false;
		starsArr[1].visible = false;
		starsArr[2].visible = false;
		starsArr[3].visible = false;
		starsArr[4].visible = false;
		starsArr[5].visible = false;
		starsArr[6].visible = false;
		starsArr[7].visible = false;
		starsArr[8].visible = false;
		starsArr[9].visible = false;
		starsArr[10].visible = false;
		help1 = game.add.sprite(0, 0, 'help1');
		help2 = game.add.sprite(0, 0, 'help2');
		exit_help1 = game.add.sprite(819, 645, 'exit_help');
		exit_help1.inputEnabled = true;
		exit_help1.input.useHandCursor = true;
		exit_help1.events.onInputDown.add(function(){
			exit_help1.loadTexture('exit_help_p');
		});
		exit_help1.events.onInputUp.add(function(){
			exitSound.play();
			exit_help1.loadTexture('exit_help');
			closeHelp();
		});
		next = game.add.sprite(649, 645, 'next');
		next.inputEnabled = true;
		next.input.useHandCursor = true;
		next.events.onInputDown.add(function(){
			next.loadTexture('next_p');
		});
		next.events.onInputUp.add(function(){
			helpSound.play();
			next.loadTexture('next');
			help2Vis();
		});
		prev = game.add.sprite(514, 645, 'prev');
		prev.inputEnabled = true;
		prev.input.useHandCursor = true;
		prev.events.onInputDown.add(function(){
			prev.loadTexture('prev_p');
		});
		prev.events.onInputUp.add(function(){
			helpSound.play();
			prev.loadTexture('prev');
			help1Vis();
		});
		exit_help2 = game.add.sprite(819, 645, 'exit_help');
		exit_help2.inputEnabled = true;
		exit_help2.input.useHandCursor = true;
		exit_help2.events.onInputDown.add(function(){
			exit_help2.loadTexture('exit_help_p');
		});
		exit_help2.events.onInputUp.add(function(){
			exitSound.play();
			exit_help2.loadTexture('exit_help');
			closeHelp();
		});
		bet_down = game.add.sprite(859, 497, 'bet_down');
		bet_down.inputEnabled = true;
		bet_down.input.useHandCursor = true;
		bet_down.events.onInputDown.add(function(){
			bet_down.loadTexture('bet_down_p');
		});
		bet_down.events.onInputUp.add(function(){
			bet_down.loadTexture('bet_down');
			betDownSound.play();
			if (helpValue > 0.25){
				helpValue -= 0.25;
				helpTextValue.setText('$ ' + helpValue.toFixed(2));
				helpTextVis(helpValue/0.25-1)
			}
		});

		bet_up = game.add.sprite(737, 497, 'bet_up');
		bet_up.inputEnabled = true;
		bet_up.input.useHandCursor = true;
		bet_up.events.onInputDown.add(function(){
			bet_up.loadTexture('bet_up_p');
		});
		bet_up.events.onInputUp.add(function(){
			bet_up.loadTexture('bet_up');
			betUpSound.play();
			if (helpValue < 5){
				helpValue += 0.25;
				helpTextVis(helpValue/0.25-1)
				helpTextValue.setText('$ ' + helpValue.toFixed(2));
			}
		});

		help1.visible = false;
		help2.visible = false;
		exit_help1.visible = false;
		next.visible = false;
		prev.visible = false;
		exit_help2.visible = false;
		bet_down.visible = false;
		bet_up.visible = false;

		helpTextValue = game.add.text(749, 102, '$ ' + helpValue.toFixed(2), {
			font: '31px "DeterminationMonoRUSBYLYAJK"',
			fill: '#ffffff'
		});
		helpTextValue.anchor.setTo(1, 0.5);
		helpTextValue.setShadow(-3, 3, 'rgba(0, 0, 0, 1)', 1);
		helpTextValue.visible = false;
		tweenTintHelp(helpTextValue);

		function helpTextVis(number){
			winArr[0].forEach(function (item, numb) {
				item.forEach(function (item2, numb2) {
					helpTextArr[numb][numb2].visible = false;
				})
			})
			winArr[number].forEach(function (item, numb) {
				item.forEach(function (item2, numb2) {
					if (item[numb2] === 0){
						helpTextArr[numb][numb2] = game.add.text(174+numb*94, 188+numb2*25.8, item[numb2].toFixed(2), {
							font: '24px "DeterminationMonoRUSBYLYAJK"',
							fill: '#fcff1d'
						});
					} else if(item[numb2] === 'JACKPOT'){
						helpTextArr[numb][numb2] = game.add.text(174+numb*94, 188+numb2*25.8, item[numb2], {
							font: '24px "DeterminationMonoRUSBYLYAJK"',
							fill: '#ffffff'
						});
					} else {
						helpTextArr[numb][numb2] = game.add.text(174+numb*94, 188+numb2*25.8, item[numb2].toFixed(2), {
							font: '24px "DeterminationMonoRUSBYLYAJK"',
							fill: '#07de1d'
						});
					}
					helpTextArr[numb][numb2].scale.x = 0.95;
					helpTextArr[numb][numb2].anchor.setTo(1, 0.5);
					helpTextArr[numb][numb2].setShadow(-2, 2, 'rgba(0, 0, 0, 1)', 1);
				})
			})
		}
		function helpTextHide(){
			helpTextValue.visible = false;
			winArr[0].forEach(function (item, numb) {
				item.forEach(function (item2, numb2) {
					helpTextArr[numb][numb2].visible = false;
				})
			})
		}
		function help1Vis(){
			helpTextHide()
			helpTextStatus = false;
			help1.visible = true;
			exit_help1.visible = true;
			next.visible = true;
			help2.visible = false;
			prev.visible = false;
			exit_help2.visible = false;
			bet_down.visible = false;
			bet_up.visible = false;
		}
		function help2Vis(){
			helpTextStatus = true;
			helpTextValue.visible = true;
			helpValue = betValue;
			helpTextValue.setText('$ ' + helpValue.toFixed(2));
			helpTextVis(helpValue/0.25-1);
			help2.visible = true;
			prev.visible = true;
			exit_help2.visible = true;
			bet_down.visible = true;
			bet_up.visible = true;
			help1.visible = false;
			exit_help1.visible = false;
			next.visible = false;
		}
		function closeHelp(){
			helpTextHide()
			helpTextStatus = false;
			help1.visible = false;
			help2.visible = false;
			exit_help1.visible = false;
			next.visible = false;
			prev.visible = false;
			exit_help2.visible = false;
			bet_down.visible = false;
			bet_up.visible = false;
			if (!spinStatus){
				showButtons();
			}
			help.inputEnabled = true;
			help.input.useHandCursor = true;
			help.loadTexture('help');
		}

		function pressButton(number){
			if (arrBetBtn.indexOf(number) != -1){
				vibraniysharSound.play();
				arrBetBtn.splice(arrBetBtn.indexOf(number), 1);
				green_btns[number].loadTexture('green_btn');
				game1.green_btns_numbers[number].visible = true;
				game1.yellow_btns_numbers[number].visible = false;
				game1.red_btns_numbers[number].visible = false;
				pickValue = arrBetBtn.length;
				picks.setText(pickValue)
				pickArrText.forEach(function (item, numb) {
					pickArrText[numb].visible = false;
					pickNumArrText[numb].visible = false;
					dolArrText[numb].visible = false;
				})
				showPickText();
				return false;
			} else if(arrBetBtn.length === 10){
				nummaxSound.play();
				if (!jackpotStatus){
					if (!sorryStatus){
						sorry_anim_start.visible = true;
						sorry_anim_start.animations.getAnimation('anim').play();
						sorryStatus = true;
						last_ball_start.visible = false;
						touch_anim_end.visible = false;
						touch_anim_start.visible = false;
						last_ball_end.visible = false;
						last_ball.alpha = 0;
						setTimeout(function(){
							sorryStatus = false;
							if 	(!jackpotStatus){
								if 	(!winStatus){
									if (!spinStatus) {
										sorry_anim_start.visible = false;
										touch_anim_start.destroy();				
										touch_anim_start = game.add.sprite(70,392, 'touch_anim');
										slotLayer1Group.add(touch_anim_start);
										touch_anim_start.animations.add('anim', [0,1,2,3,4], 15, false).play();
										sorry_anim_end = game.add.sprite(120,391, 'sorry_anim');
										slotLayer1Group.add(sorry_anim_end);
										sorry_anim_end.animations.add('anim', [4,3,2,1,0], 15, false).play().onComplete.add(function(){
											sorry_anim_end.visible = false;
											midAnim();
											sorry_anim_end.destroy();
										});
									}
								}
							}
						}, 6000)
					}
				}
			} else {
				if (!qickPickStatus) {
					numberSound.play();
				}
				green_btns[number].loadTexture('yellow_btn');
				game1.green_btns_numbers[number].visible = false;
				game1.yellow_btns_numbers[number].visible = true;
				game1.red_btns_numbers[number].visible = false;
			}
			if (arrBetBtn.length === 10){
				// green_btns[arrBetBtn[0]].loadTexture('green_btn');
				// game1.green_btns_numbers[arrBetBtn[0]].visible = true;
				// game1.yellow_btns_numbers[arrBetBtn[0]].visible = false;
				// arrBetBtn.splice(0, 1);
				// arrBetBtn.push(number);
			} else {
				arrBetBtn.push(number);
			}
			pickValue = arrBetBtn.length;
			picks.setText(pickValue)
			showPickText();
		}
		// var balance = 1000;
		flickJackpot();

		slotLayer1Group = game.add.group();
		slotLayer1Group.add(touch_anim_start);
		slotLayer1Group.add(touch_anim_end);
		slotLayer1Group.add(sorry_anim_start);
		slotLayer1Group.add(sorry_anim_end);
		slotLayer2Group = game.add.group();
		slotLayer2Group.add(help1);
		slotLayer2Group.add(help2);
		slotLayer2Group.add(exit_help1);
		slotLayer2Group.add(next);
		slotLayer2Group.add(prev);
		slotLayer2Group.add(exit_help2);
		slotLayer2Group.add(bet_down);
		slotLayer2Group.add(bet_up);

		function flickJackpot(){
			setTimeout(function(){  
				jackpot_amount.visible = true;  
				picksImg.visible = false;  
				picks.visible = false;  
				setTimeout(function(){  
					game.add.tween(jackpot_amount).to( { alpha: 0 }, 100, "Linear", true).onComplete.add(function(){
						jackpot_amount.visible = false; 
					});
					jackpotText.alpha = 0;
					jackpotText.visible = true;
					game.add.tween(jackpotText).to( { alpha: 1 }, 100, "Linear", true);
					setTimeout(function(){  
						game.add.tween(jackpotText).to( { alpha: 0 }, 100, "Linear", true).onComplete.add(function(){
							jackpotText.visible = false; 
						});
						jackpot_amount.alpha = 0;
						jackpot_amount.visible = true;
						game.add.tween(jackpot_amount).to( { alpha: 1 }, 100, "Linear", true);
						setTimeout(function(){  
							game.add.tween(jackpot_amount).to( { alpha: 0 }, 100, "Linear", true).onComplete.add(function(){
								jackpot_amount.visible = false; 
							});
							jackpotText.alpha = 1;
							jackpotText.visible = true;
							game.add.tween(jackpotText).to( { alpha: 1 }, 100, "Linear", true);
							setTimeout(function(){  
								game.add.tween(jackpotText).to( { alpha: 0 }, 100, "Linear", true).onComplete.add(function(){
									jackpotText.visible = false; 
								});
								jackpot_amount.alpha = 0;
								jackpot_amount.visible = true;
								game.add.tween(jackpot_amount).to( { alpha: 1 }, 100, "Linear", true);
								setTimeout(function(){  
									game.add.tween(jackpot_amount).to( { alpha: 0 }, 100, "Linear", true).onComplete.add(function(){
										jackpot_amount.visible = false; 
										jackpot_amount.alpha = 1; 
									});
									jackpotText.alpha = 1;
									jackpotText.visible = true;
									game.add.tween(jackpotText).to( { alpha: 1 }, 100, "Linear", true);								
									tweenTintHelp(jackpotText)  
									setTimeout(function(){ 
										jackpotText.visible = false;  
										picksImg.visible = true;  
										picks.visible = true;  
										flickJackpot();
									}, 5000) 
								}, 1000) 
							}, 1000) 
						}, 1000) 
					}, 1000) 
				}, 1000)    
			}, 120000) 
		}
		function addscore(){
			credit = game.add.text(994, 110, (+balance).toFixed(2), {
				font: '32px "JoystixMonospace-Regular"',
				fill: '#fcff1d'
			});
			credit.setShadow(0, 5, 'rgba(0, 0, 0, 0.004)', 5);
			credit.anchor.setTo(1, 0.5);
			credit.scale.x = 0.6;
			bet = game.add.text(994, 142, '1.00', {
				font: '32px "JoystixMonospace-Regular"',
				fill: '#fcff1d'
			});
			bet.setShadow(0, 5, 'rgba(0, 0, 0, 0.004)', 5);
			bet.anchor.setTo(1, 0.5);
			bet.scale.x = 0.6;
			wins = game.add.text(994, 172, '0.00', {
				font: '32px "JoystixMonospace-Regular"',
				fill: '#fcff1d'
			});
			wins.anchor.setTo(1, 0.5);
			wins.setShadow(0, 5, 'rgba(0, 0, 0, 0.004)', 5);
			wins.scale.x = 0.6;
			picks = game.add.text(994, 342, 0, {
				font: '32px "JoystixMonospace-Regular"',
				fill: '#fcff1d'
			});
			picks.anchor.setTo(1, 0.5);
			picks.setShadow(0, 5, 'rgba(0, 0, 0, 0.004)', 5);
			picks.scale.x = 0.6;
			winValueText = game.add.text(601, 427, '1800.00', {
				font: '44px "Xenia"',
				fill: '#eeff51'
			}); 
			winValueText.setShadow(-5, 5, 'rgba(0,0,0,1)', 0);
			winValueText.anchor.setTo(1, 0.5);
			winValueText.visible = false;
			hitJack = game.add.text(463, 425, ' HIT JACKPOT !', {
				font: '52px "TR Motor"',
				fill: '#b93122'
			});
			hitJack.anchor.setTo(0.5, 0.5);
			hitJack.setShadow(-4, 4, 'rgba(0, 0, 0, 1)', 2);
			hitJack.visible = false;
			jackpotValueText = game.add.text(343, 425, ' 100 000 !', {
				font: '52px "TR Motor"',
				fill: '#b93122'
			});
			jackpotValueText.anchor.setTo(0.5, 0.5);
			jackpotValueText.setShadow(-4, 4, 'rgba(0, 0, 0, 1)', 2);
			jackpotValueText.visible = false;
			playerName = game.add.text(200, 434, ' playername', {
				font: '42px "Mister Pixel 16 pt - Regular"',
				fill: '#ffffff'
			});
			playerName.anchor.setTo(0.5, 0.5);
			playerName.setShadow(-4, 4, 'rgba(0, 0, 0, 1)', 2);
			playerName.visible = false;
			for(var i = 1; i <= 7; i++) {
				pickArrText[i-1] = game.add.text(994, 419+(28*(i-1)), '312.50', {
					font: '32px "JoystixMonospace-Regular"',
					fill: '#fcff1d'
				});
				pickArrText[i-1].anchor.setTo(1, 0.5);
				pickArrText[i-1].scale.x = 0.6;
				pickArrText[i-1].setShadow(-3, 3, 'rgba(0, 0, 0, 1)', 10);
				pickNumArrText[i-1] = game.add.text(835, 419+(28*(i-1)), '10', {
					font: '32px "TR Motor"',
					fill: '#f54747'
				});
				pickNumArrText[i-1].anchor.setTo(1, 0.5);
				pickNumArrText[i-1].setShadow(-3, 3, 'rgba(0, 0, 0, 1)', 10);
				// pickNumArrText[i-1].scale.x = 0.6;
				dolArrText[i-1] = game.add.sprite(862, 421+(28*(i-1)), 'dol');
				dolArrText[i-1].anchor.setTo(1, 0.5);
				dolArrText[i-1].tint = '0x17dc23';
			}
			pickArrText.forEach(function (item, numb) {
				pickArrText[numb].visible = false;
				pickNumArrText[numb].visible = false;
				dolArrText[numb].visible = false;
			})
			
			jackpotText = game.add.text(902, 342, (5225).toFixed(2), {
				font: '32px "JoystixMonospace-Regular"',
				fill: '#ffffff'
			});
			jackpotText.anchor.setTo(0.5, 0.5);
			// picks.setShadow(0, 5, 'rgba(0, 0, 0, 0.004)', 5);
			jackpotText.scale.x = 0.6;
			jackpotText.tint = 0xfcff1d
			jackpotText.visible = false;
		}
		function betUp(){
			if (betValue === 5){
				betmaxSound.play();
			}
			if (betValue < 5){
				betUpSound.play();
				betValue = betValue + 0.25;
				bet.setText(betValue.toFixed(2))
			}
			if (betValue === 5){
				bet_top.loadTexture('bet_top_p');
			}
			if (betValue > 0.25){
				bet_bottom.inputEnabled = true;
				bet_bottom.input.useHandCursor = true;
				bet_bottom.loadTexture('bet_bottom');
			}
			showPickText();
		}
		function betDown(){
			if (betValue === 0.25){	
				betmaxSound.play();		
			}
			if (betValue > 0.25){
				betDownSound.play();
				betValue = betValue - 0.25;
				bet.setText(betValue.toFixed(2))
			}
			if (betValue === 0.25){	
				bet_bottom.loadTexture('bet_bottom_p');
			}
			if (betValue < 5){
				bet_top.inputEnabled = true;
				bet_top.input.useHandCursor = true;
				bet_top.loadTexture('bet_top');
			}
			showPickText();
		}
		function wipe(){
			green_btns.forEach(function (item, numb) {
				green_btns[numb].loadTexture('green_btn');
				game1.green_btns_numbers[numb].visible = true;
				game1.yellow_btns_numbers[numb].visible = false;
				game1.red_btns_numbers[numb].visible = false;
			})	
			pickArrText.forEach(function (item, numb) {
				pickArrText[numb].visible = false;
				pickNumArrText[numb].visible = false;
				dolArrText[numb].visible = false;
			})
			arrBetBtn = [];
			pickValue = arrBetBtn.length;
			picks.setText(pickValue)
		}
		function quick(){
			for(var i = 1; i <= 10; i++) {
				setTimeout(function(){
					do {
						var randNum = randomNumber(1,80)
					} while( arrBetBtn.indexOf(randNum) !== -1);
					autopickSound.play();
					pressButton(randNum)
				}, 125*i)
			}
			setTimeout(function(){
				autopick_endSound.play();
				qickPickStatus = false;
				showButtons();
			}, 1200)
		}

		var haveAnswer = false;
		var ballsAnimReady = false;		
		game1.ticker = game.add.tileSprite(0, 785, 1154, 31, 'ticker');
		function startSpin(){
			playgameSound.play();
			if (arrBetBtn.length > 1){
				hideButtons();
				spinStatus = true;
				setTimeout(function() {
					superballHitStatus = false;
					goodLuck.visible = true;
					last_ball_start.visible = false;
					last_ball_end.visible = false;
					touch_anim_start.visible = false;
					touch_anim_end.visible = false;
					sorry_anim_start.visible = false;
					sorry_anim_end.visible = false;
					last_ball.alpha = 0;
					sorry.visible = false;
					starsArr[0].visible = false;
					starsArr[1].visible = false;
					starsArr[2].visible = false;
					starsArr[3].visible = false;
					starsArr[4].visible = false;
					starsArr[5].visible = false;
					starsArr[6].visible = false;
					starsArr[7].visible = false;
					starsArr[8].visible = false;
					starsArr[9].visible = false;
					starsArr[10].visible = false;
					hitJack.visible = false;
					playerName.visible = false;
					jackpotValueText.visible = false;
					pointsFinish = {
						'x': [-67,35],
						'y': [-65,22]
					}; 
					for (var i = 1; i <= 20; ++i) {
						game1.increment[i] = 10 / game.width;  
						game1.t[i] = 0;  
						game1.timer[i] = null; 
					}
					updateTable();
					credit.setText((balance-betValue).toFixed(2))		
					wins.setText('0.00');
					winStatus = false;
					red_square_anim.alpha = 0;
					red_square_anim2.alpha = 0;
					stopFlickSquare = false;
					haveAnswer = false;
					ballsAnimReady = false;
					block1.visible = false;
					block2.visible = true;
					for (var i = 1; i <= 10; ++i) {
						for (var j = 1; j <= 2; ++j) {
							if (i+i-1+j-1 === 20){
								spusksharovSound.play();
								game.add.tween(game1.balls[i+i-1+j-1]).to({y:game1.balls[i+i-1+j-1].position.y+800}, 400, Phaser.Easing.LINEAR, true).onComplete.add(function(){
									block1.visible = true;
									block2.visible = false;
									if(haveAnswer){
										showWinBalls();
									} else {
										ballsAnimReady = true;
									}
								});
							} else {
								game.add.tween(game1.balls[i+i-1+j-1]).to({y:game1.balls[i+i-1+j-1].position.y+800}, 400, Phaser.Easing.LINEAR, true);							
							}
						}
					}

					requestSpin(gamename, sessionName, arrBetBtn, betValue);
				}, 500);
			} else {
				setTimeout(function() {
					nummaxSound.play();
				}, 200);				
			}
		}
		function showWinBalls(){
			for (var i = 1; i <= 10; ++i) {
				for (var j = 1; j <= 2; ++j) {
					game1.balls[i+i-1+j-1].loadTexture('ball_'+info[+i+i-1+j-1-1]);	
					game1.balls[i+i-1+j-1].position.y = -65;			
					game1.balls[i+i-1+j-1].position.x = -67;					
				}
			}
			startMoveBalls();
		}
		var xDistance;
		var yDistance;
		function startMoveBalls(){
			setTimeout(function() {
				zvyksharovSound.play()
			}, 300);
			game1.balls.forEach(function (item, index) {
				setTimeout(function() {
					switch (index) {
						case 1:
						game1.timer[1] = game.time.create(true);
						game1.timer[1].loop(.01, game1.plot1, game1);
						game1.timer[1].start();
						break;
						case 2:
						game1.timer[2] = game.time.create(true);
						game1.timer[2].loop(.01, game1.plot2, game1);
						game1.timer[2].start();
						break;
						case 3:
						game1.timer[3] = game.time.create(true);
						game1.timer[3].loop(.01, game1.plot3, game1);
						game1.timer[3].start();
						break;
						case 4:
						game1.timer[4] = game.time.create(true);
						game1.timer[4].loop(.01, game1.plot4, game1);
						game1.timer[4].start();
						break;
						case 5:
						game1.timer[5] = game.time.create(true);
						game1.timer[5].loop(.01, game1.plot5, game1);
						game1.timer[5].start();
						break;
						case 6:
						game1.timer[6] = game.time.create(true);
						game1.timer[6].loop(.01, game1.plot6, game1);
						game1.timer[6].start();
						break;
						case 7:
						game1.timer[7] = game.time.create(true);
						game1.timer[7].loop(.01, game1.plot7, game1);
						game1.timer[7].start();
						break;
						case 8:
						game1.timer[8] = game.time.create(true);
						game1.timer[8].loop(.01, game1.plot8, game1);
						game1.timer[8].start();
						break;
						case 9:
						game1.timer[9] = game.time.create(true);
						game1.timer[9].loop(.01, game1.plot9, game1);
						game1.timer[9].start();
						break;
						case 10:
						game1.timer[10] = game.time.create(true);
						game1.timer[10].loop(.01, game1.plot10, game1);
						game1.timer[10].start();
						break;
						case 11:
						game1.timer[11] = game.time.create(true);
						game1.timer[11].loop(.01, game1.plot11, game1);
						game1.timer[11].start();
						break;
						case 12:
						game1.timer[12] = game.time.create(true);
						game1.timer[12].loop(.01, game1.plot12, game1);
						game1.timer[12].start();
						break;
						case 13:
						game1.timer[13] = game.time.create(true);
						game1.timer[13].loop(.01, game1.plot13, game1);
						game1.timer[13].start();
						break;
						case 14:
						game1.timer[14] = game.time.create(true);
						game1.timer[14].loop(.01, game1.plot14, game1);
						game1.timer[14].start();
						break;
						case 15:
						game1.timer[15] = game.time.create(true);
						game1.timer[15].loop(.01, game1.plot15, game1);
						game1.timer[15].start();
						break;
						case 16:
						game1.timer[16] = game.time.create(true);
						game1.timer[16].loop(.01, game1.plot16, game1);
						game1.timer[16].start();
						break;
						case 17:
						game1.timer[17] = game.time.create(true);
						game1.timer[17].loop(.01, game1.plot17, game1);
						game1.timer[17].start();
						break;
						case 18:
						game1.timer[18] = game.time.create(true);
						game1.timer[18].loop(.01, game1.plot18, game1);
						game1.timer[18].start();
						break;
						case 19:
						game1.timer[19] = game.time.create(true);
						game1.timer[19].loop(.01, game1.plot19, game1);
						game1.timer[19].start();
						break;	
						case 20:
						btnPosX = green_btns[info[index-1]].position.x;
						if (info[index-1] === 1){
							btnPosX = 60;
						}
						btnPosY = green_btns[info[index-1]].position.y;
						xDistance = (btnPosX-35);
						yDistance = (btnPosY-27);
						newYpos =  yDistance*1.3
						if(xDistance*1.625 < yDistance ){
							pointsFinish.x.push(btnPosX)
							pointsFinish.y.push(btnPosY)
							if (info[index-1] <= 40) {
								dist1 =  Math.pow(Math.pow(xDistance, 2) + Math.pow(yDistance, 2), 0.5)*0.55;
								if (info[index-1] === 9 || info[index-1] === 10 || info[index-1] === 19 || info[index-1] === 20 || info[index-1] === 29 || info[index-1] === 30 || info[index-1] === 39 || info[index-1] === 40){
									dist2 = Math.pow(Math.pow(644-btnPosX, 2) + Math.pow(newYpos, 2), 0.5)*0.55;
									pointsFinish.x.push(644)
									pointsFinish.y.push(btnPosY-newYpos)
									dist3 = Math.pow(Math.pow(662-644, 2) + Math.pow(91-btnPosY+newYpos, 2), 0.5);
									pointsFinish.x.push(662)
									pointsFinish.y.push(91)
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
									dist5 = Math.pow(Math.pow(662-607, 2) + Math.pow(91-5, 2), 0.5);
									pointsFinish.x.push(662)
									pointsFinish.y.push(91)
									statusFinishRow = 5;
								}
							} else {
								dist1 =  Math.pow(Math.pow(xDistance, 2) + Math.pow(yDistance, 2), 0.5)*0.4;
								dist2 = Math.pow(Math.pow(((662-btnPosX)*0.66), 2) + Math.pow(newYpos, 2), 0.5)*0.35;
								pointsFinish.x.push(((662-btnPosX)*0.66)+btnPosX)
								pointsFinish.y.push(btnPosY-newYpos)
								dist3 = Math.pow(Math.pow(662-(((662-btnPosX)*0.66)+btnPosX), 2) + Math.pow(91-btnPosY+newYpos, 2), 0.5);
								pointsFinish.x.push(662)
								pointsFinish.y.push(91)
								statusFinishRow = 3;
							}
						} else {
							toPointX = xDistance-yDistance/1.625;       
							xDistance = yDistance/1.625;  
							pointsFinish.x.push(toPointX+35)
							pointsFinish.y.push(27)
							dist1 = toPointX;
							pointsFinish.x.push(btnPosX)
							pointsFinish.y.push(btnPosY)
							if (info[index-1] <= 40) {
								dist2 =  Math.pow(Math.pow(xDistance, 2) + Math.pow(yDistance, 2), 0.5)*0.55;
								if (info[index-1] === 9 || info[index-1] === 10 || info[index-1] === 19 || info[index-1] === 20 || info[index-1] === 29 || info[index-1] === 30 || info[index-1] === 39 || info[index-1] === 40){
									dist3 = Math.pow(Math.pow(644-btnPosX, 2) + Math.pow(newYpos, 2), 0.5)*0.55;
									pointsFinish.x.push(644)
									pointsFinish.y.push(btnPosY-newYpos)
									dist4 = Math.pow(Math.pow(662-644, 2) + Math.pow(91-btnPosY+newYpos, 2), 0.5);
									pointsFinish.x.push(662)
									pointsFinish.y.push(91)
									statusFinishRow = 4;
								} else {
									dist3 = Math.pow(Math.pow(((552-btnPosX)*0.66), 2) + Math.pow(newYpos, 2), 0.5)*0.55;
									pointsFinish.x.push(((552-btnPosX)*0.66)+btnPosX)
									pointsFinish.y.push(btnPosY-newYpos)
									dist4 = Math.pow(Math.pow(552-(((552-btnPosX)*0.66)+btnPosX), 2) + Math.pow(42-btnPosY+newYpos, 2), 0.5);
									pointsFinish.x.push(552)
									pointsFinish.y.push(42)
									dist5 = Math.pow(Math.pow(607-552, 2) + Math.pow(20-42, 2), 0.5);
									pointsFinish.x.push(607)
									pointsFinish.y.push(20)
									dist6 = Math.pow(Math.pow(662-607, 2) + Math.pow(91-5, 2), 0.5);
									pointsFinish.x.push(662)
									pointsFinish.y.push(91)
									statusFinishRow = 6;
								}
							} else {
								dist2 =  Math.pow(Math.pow(xDistance, 2) + Math.pow(yDistance, 2), 0.5)*0.4;
								dist3 = Math.pow(Math.pow(((662-btnPosX)*0.66), 2) + Math.pow(newYpos, 2), 0.5)*0.35;
								pointsFinish.x.push(((662-btnPosX)*0.66)+btnPosX)
								pointsFinish.y.push(btnPosY-newYpos)
								dist4 = Math.pow(Math.pow(662-(((662-btnPosX)*0.66)+btnPosX), 2) + Math.pow(91-btnPosY+newYpos, 2), 0.5);
								pointsFinish.x.push(662)
								pointsFinish.y.push(91)
								statusFinishRow = 4;
							}
						}
						lastBallGetStatus = true;
						game1.timer[20] = game.time.create(true);
						game1.timer[20].loop(.01, game1.plot20, game1);
						game1.timer[20].start();
						break;
					}
				}, (index-1)*200);
})
}

function updateTable(){
	green_btns.forEach(function (item, numb) {
		green_btns[numb].loadTexture('green_btn');
		game1.green_btns_numbers[numb].visible = true;
		game1.yellow_btns_numbers[numb].visible = false;
		game1.red_btns_numbers[numb].visible = false;
		purple_block_anim[numb].visible = false;
		// red_btn_anim[numb].visible = false;
		red_btn_anim[numb].alpha = 0;
	})		
	arrBetBtn.forEach(function (item, numb) {
		green_btns[item].loadTexture('yellow_btn');
		game1.green_btns_numbers[item].visible = false;
		game1.yellow_btns_numbers[item].visible = true;
		game1.red_btns_numbers[item].visible = false;
	})	
	stopFlickText = true;
	winStatus = false;
	winValueText.visible = false;
	big_dol.visible = false;
	superball_winner.alpha = 0;
	win_center.visible = false;
	big_red_border.alpha = 0;
	if (!spinStatus){
		if (!sorryStatus){
			if (winStatus){
				touch_anim.animations.getAnimation('anim').play();
				touch_anim.visible = true;
				console.log('запуск мид после updateTable')
				midAnim();
			}
		}
	}
}

function requestSpin(gamename, sessionName, balls_selected, betValue) {
	$.ajax({
		type: "get",
				// url: getNeedUrlPath()+'/spin/'+gamename+'?sessionName='+sessionName+'&balls_selected='+balls_selected+'&betValue='+betValue,
				// url: getNeedUrlPath()+'/spin/'+gamename+'?sessionName='+sessionName+'&betLine='+1+'&linesInGame='+1,
				url: 'http://www.webmax.studio/test/keno.php',
				data: 'balls_selected=' + balls_selected + '&betValue=' + betValue,
				dataType: 'html',
				success: function (data) {
					console.log(data) 
					dataSpinRequest = JSON.parse(data);
					// dataSpinRequest = {"balance":3954.75,"result":10,"status":"lose","balls":[35,58,54,3,39,3,32,24,53,76,77,30,36,15,44,74,10,2,56,77],"balls_selected":[49,50],"got_balls":0,"win_balls":[],"lastbal":"yes","picked":2};
					// dataSpinRequest = {"balance":0,"result":0,"status":"lose","balls":[41,42,43,44,45,46,47,48,49,53,71,74,17,1,36,31,26,65,22,56],"balls_selected":[50,49,48,47,46,45,44,43,42,41],"got_balls":2,"win_balls":{"0":44,"3":48},"lastbal":"No","picked":10,"mesage":"succes"};
					console.log(dataSpinRequest) 
					parseSpinAnswer(dataSpinRequest);
				},
				error: function (data) {
					var errorText = '//ошибка 30';
					console.log(errorText);
					reconnectSpin(gamename, sessionName, balls_selected, betValue)
				}
			});
}

function reconnectSpin(gamename, sessionName, balls_selected, betValue) {
	$.ajax({
		type: "get",
		url: getNeedUrlPath()+ '/reconnect',
		dataType: 'html',
		success: function (data) {
			console.log('reconect : true');
			requestSpin(gamename, sessionName, balls_selected, betValue);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			var errorText = '//ошибка переподкючения';
			console.log(errorText);
			reconnectSpin(gamename, sessionName, balls_selected, betValue);
		}
	});
}
function parseSpinAnswer(dataSpinRequest) {
	dataArray = dataSpinRequest;

	balance = dataArray['balance']; 

	allWin = dataArray['result']; 

	info = dataArray['balls'];

	winValue = dataArray['status'];
	lastball = dataArray['lastbal'];
	if(ballsAnimReady){
		showWinBalls();
	} else {
		haveAnswer = true;
	}
}
addEventListener("keyup", function(event) {
	if (event.keyCode == 32){
		if (btnStatus){
			if(balanceUpdateStatus){
				stopUpdateBalance();
			} else{
				startSpin();
			}
		}
	}
});
};
game1.update = function () {
	game1.ticker.tilePosition.x += 0.5;
};
game1.plot1 = function() {
	var index = 1;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot2 = function() {
	var index = 2;
	var posx = game.math.catmullRomInterpolation(points2.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points2.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.16666666){
		game1.increment[index] = consta2/151;   
	}
	if (  game1.t[index] >= 0.16666666*2){
		game1.increment[index] = consta2/133; 
	}
	if (  game1.t[index] >= 0.16666666*3){
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*4){ 
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*5){ 
		game1.increment[index] = consta2/188; 
	}
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot3 = function() {
	var index = 3;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot4 = function() {
	var index = 4;
	var posx = game.math.catmullRomInterpolation(points2.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points2.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.16666666){
		game1.increment[index] = consta2/151;   
	}
	if (  game1.t[index] >= 0.16666666*2){
		game1.increment[index] = consta2/133; 
	}
	if (  game1.t[index] >= 0.16666666*3){
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*4){ 
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*5){ 
		game1.increment[index] = consta2/188; 
	}
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot5 = function() {
	var index = 5;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot6 = function() {
	var index = 6;
	var posx = game.math.catmullRomInterpolation(points2.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points2.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.16666666){
		game1.increment[index] = consta2/151;   
	}
	if (  game1.t[index] >= 0.16666666*2){
		game1.increment[index] = consta2/133; 
	}
	if (  game1.t[index] >= 0.16666666*3){
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*4){ 
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*5){ 
		game1.increment[index] = consta2/188; 
	}
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot7 = function() {
	var index = 7;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot8 = function() {
	var index = 8;
	var posx = game.math.catmullRomInterpolation(points2.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points2.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.16666666){
		game1.increment[index] = consta2/151;   
	}
	if (  game1.t[index] >= 0.16666666*2){
		game1.increment[index] = consta2/133; 
	}
	if (  game1.t[index] >= 0.16666666*3){
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*4){ 
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*5){ 
		game1.increment[index] = consta2/188; 
	}
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot9 = function() {
	var index = 9;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot10 = function() {
	var index = 10;
	var posx = game.math.catmullRomInterpolation(points2.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points2.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.16666666){
		game1.increment[index] = consta2/151;   
	}
	if (  game1.t[index] >= 0.16666666*2){
		game1.increment[index] = consta2/133; 
	}
	if (  game1.t[index] >= 0.16666666*3){
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*4){ 
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*5){ 
		game1.increment[index] = consta2/188; 
	}
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot11 = function() {
	var index = 11;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot12 = function() {
	var index = 12;
	var posx = game.math.catmullRomInterpolation(points2.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points2.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.16666666){
		game1.increment[index] = consta2/151;   
	}
	if (  game1.t[index] >= 0.16666666*2){
		game1.increment[index] = consta2/133; 
	}
	if (  game1.t[index] >= 0.16666666*3){
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*4){ 
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*5){ 
		game1.increment[index] = consta2/188; 
	}
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot13 = function() {
	var index = 13;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot14 = function() {
	var index = 14;
	var posx = game.math.catmullRomInterpolation(points2.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points2.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.16666666){
		game1.increment[index] = consta2/151;   
	}
	if (  game1.t[index] >= 0.16666666*2){
		game1.increment[index] = consta2/133; 
	}
	if (  game1.t[index] >= 0.16666666*3){
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*4){ 
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*5){ 
		game1.increment[index] = consta2/188; 
	}
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot15 = function() {
	var index = 15;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot16 = function() {
	var index = 16;
	var posx = game.math.catmullRomInterpolation(points2.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points2.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.16666666){
		game1.increment[index] = consta2/151;   
	}
	if (  game1.t[index] >= 0.16666666*2){
		game1.increment[index] = consta2/133; 
	}
	if (  game1.t[index] >= 0.16666666*3){
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*4){ 
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*5){ 
		game1.increment[index] = consta2/188; 
	}
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot17 = function() {
	var index = 17;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot18 = function() {
	var index = 18;
	var posx = game.math.catmullRomInterpolation(points2.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points2.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.16666666){
		game1.increment[index] = consta2/151;   
	}
	if (  game1.t[index] >= 0.16666666*2){
		game1.increment[index] = consta2/133; 
	}
	if (  game1.t[index] >= 0.16666666*3){
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*4){ 
		game1.increment[index] = consta2/76; 
	}
	if (  game1.t[index] >= 0.16666666*5){ 
		game1.increment[index] = consta2/188; 
	}
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot19 = function() {
	var index = 19;
	var posx = game.math.catmullRomInterpolation(points.x, game1.t[index]);
	var posy = game.math.catmullRomInterpolation(points.y, game1.t[index]);
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	if (  game1.t[index] >= 0){
		game1.increment[index] =  consta1/134;    
	}
	if (  game1.t[index] >= 0.14285714285){
		game1.increment[index] = consta1/151;   
	}
	if (  game1.t[index] >= 0.14285714285*2){
		game1.increment[index] = consta1/133; 
	}
	if (  game1.t[index] >= 0.14285714285*3){
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*4){ 
		game1.increment[index] = consta1/76; 
	}
	if (  game1.t[index] >= 0.14285714285*5){ 
		game1.increment[index] = consta1/188; 
	}
	if (  game1.t[index] >= 0.14285714285*6){
		game1.increment[index] = consta1/50; 
	}	
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game1.plot20 = function() {
	var index = 20;
	if (statusFinishRow === 3){
		consta3 = 3
		if (  game1.t[index] >= 0){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] =  consta3/134;    
		}
		if (  game1.t[index] >= 0.25){
			var posx = game.math.linearInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.linearInterpolation(pointsFinish.y, game1.t[index]);
			game1.increment[index] = consta3/dist1;   
		}
		if (  game1.t[index] >= 0.25*2){
			var posx = game.math.linearInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.linearInterpolation(pointsFinish.y, game1.t[index]);
			if (lastBallGetStatus){
				lastBallGetStatus = false;
				lastBallGet(index)
				if (arrBetBtn.indexOf(info[index-1]) != -1){
					game1.timer[index].stop(false);
					lastBallHit(index)
				}
			}
			game1.increment[index] = consta3/dist2; 
		}
		if (  game1.t[index] >= 0.25*3){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist3; 
		}
	} else if (statusFinishRow === 4){
		consta3 = 2.5
		if (  game1.t[index] >= 0){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] =  consta3/134;    
		}
		if (  game1.t[index] >= 0.2){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist1;   
		}
		if (  game1.t[index] >= 0.2*2){
			var posx = game.math.linearInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.linearInterpolation(pointsFinish.y, game1.t[index]);
			game1.increment[index] = consta3/dist2; 
		}
		if (  game1.t[index] >= 0.2*3){
			var posx = game.math.linearInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.linearInterpolation(pointsFinish.y, game1.t[index]);
			if (lastBallGetStatus){
				lastBallGetStatus = false;
				lastBallGet(index)
				if (arrBetBtn.indexOf(info[index-1]) != -1){
					game1.timer[index].stop(false);
					lastBallHit(index)
				}
			}
			game1.increment[index] = consta3/dist3; 
		}
		if (  game1.t[index] >= 0.2*4){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist4; 
		}
	} else if (statusFinishRow === 5){
		consta3 = 2.2
		if (  game1.t[index] >= 0){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] =  consta3/134;    
		}
		if (  game1.t[index] >= 0.166666){
			var posx = game.math.linearInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.linearInterpolation(pointsFinish.y, game1.t[index]);
			game1.increment[index] = consta3/dist1;   
		}
		if (  game1.t[index] >= 0.166666*2){
			var posx = game.math.linearInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.linearInterpolation(pointsFinish.y, game1.t[index]);
			if (lastBallGetStatus){
				lastBallGetStatus = false;
				lastBallGet(index)
				if (arrBetBtn.indexOf(info[index-1]) != -1){
					game1.timer[index].stop(false);
					lastBallHit(index)
				}
			}
			game1.increment[index] = consta3/dist2; 
		}
		if (  game1.t[index] >= 0.166666*3){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist3; 
		}
		if (  game1.t[index] >= 0.166666*4){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist4; 
		}
		if (  game1.t[index] >= 0.166666*5){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist5; 
		}
	} else if (statusFinishRow === 6){
		consta3 = 1.6;
		if (  game1.t[index] >= 0){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			game1.increment[index] =  consta3/134;    
		}
		if (  game1.t[index] >= 0.14285714285){
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist1;   
		}
		if (  game1.t[index] >= 0.14285714285*2){
			var posx = game.math.linearInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.linearInterpolation(pointsFinish.y, game1.t[index]);
			game1.increment[index] = consta3/dist2; 
		}
		if (  game1.t[index] >= 0.14285714285*3){
			var posx = game.math.linearInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.linearInterpolation(pointsFinish.y, game1.t[index]);
			if (lastBallGetStatus){
				lastBallGetStatus = false;
				lastBallGet(index)
				if (arrBetBtn.indexOf(info[index-1]) != -1){
					game1.timer[index].stop(false);
					lastBallHit(index)
				}
			}
			game1.increment[index] = consta3/dist3; 
		}
		if (  game1.t[index] >= 0.14285714285*4){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist4; 
		}
		if (  game1.t[index] >= 0.14285714285*5){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist5; 
		}
		if (  game1.t[index] >= 0.14285714285*6){
			var posx = game.math.catmullRomInterpolation(pointsFinish.x, game1.t[index]);
			var posy = game.math.catmullRomInterpolation(pointsFinish.y, game1.t[index]);	
			game1.increment[index] = consta3/dist6; 
		}
	}
	game1.balls[index].x = posx;
	game1.balls[index].y = posy;
	game1.t[index] += game1.increment[index];
	if (game1.t[index] > 1) {
		game1.timer[index].stop();
		game1.timer[index].destroy();
		lastMove(index);
	}
}
game.state.add('game1', game1);
};
