(function(){
    // window.PhaserGlobal = { 
    //     disableWebAudio: false,
    //     disableAudio: false,
    // };
    var preload = {};

    preload.preload = function() {

        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL ;

        // game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = 2;
        game.scale.pageAlignHorizontally = true;
        game.stage.disableVisibilityChange = true;
        var needUrlPath = '';
        if (location.href.indexOf('/games/') !== -1 && location.href.indexOf('public') !== -1) {
            needUrlPath = location.href.substring(0,location.href.indexOf('://')) + '://' + location.hostname + location.pathname;
        } else if (location.href.indexOf('/game/') !== -1) {
            var gamename = location.href.substring(location.href.indexOf('/game/') + 6);
            needUrlPath = location.href.substring(0,location.href.indexOf('/game/')) + '/games/' + gamename;
        } else if (location.href.indexOf('public') === -1 && location.href.indexOf('/games/') !== -1 ) {
            var gamename = location.href.substring(location.href.indexOf('/games/') + 7);
            needUrlPath = location.href.substring(0,location.href.indexOf('://')) + '://' + location.hostname + '/games/' + gamename
        }

        game.load.image('game.background', needUrlPath + '/img/bg.png');
        game.load.image('game.background_overlay', needUrlPath + '/img/bg_overlay.png');
        game.load.image('black_bg', needUrlPath + '/img/black_bg.png');
        game.load.image('btn_yes', needUrlPath + '/img/btn_yes.png');
        game.load.image('btn_no', needUrlPath + '/img/btn_no.png');
        game.load.image('cell0', needUrlPath + '/img/0.png');
        game.load.image('cell1', needUrlPath + '/img/1.png');
        game.load.image('cell2', needUrlPath + '/img/2.png');
        game.load.image('cell3', needUrlPath + '/img/3.png');
        game.load.image('cell4', needUrlPath + '/img/4.png');
        game.load.image('cell5', needUrlPath + '/img/5.png');
        game.load.image('cell6', needUrlPath + '/img/6.png');
        game.load.image('cell7', needUrlPath + '/img/7.png');
        game.load.image('cell8', needUrlPath + '/img/8.png');
        game.load.image('cell9', needUrlPath + '/img/9.png');
        game.load.image('cell10', needUrlPath + '/img/10.png');
        game.load.image('cell11', needUrlPath + '/img/11.png');

        game.load.image('flashLineNumber', needUrlPath + '/img/flashLineNumber.png');

        game.load.image('startButton', needUrlPath + '/img/btns/START.png');
        game.load.image('startButton_p', needUrlPath + '/img/btns_press/START.png');
        game.load.image('startButton_h', needUrlPath + '/img/btns_hover/START.png');
        game.load.image('double', needUrlPath + '/img/btns/double.png');
        game.load.image('double_p', needUrlPath + '/img/btns_press/double.png');
        game.load.image('double_h', needUrlPath + '/img/btns_hover/double.png');
        game.load.image('autoBtn', needUrlPath + '/img/btns/autoBtn.png');
        game.load.image('autoBtn_p', needUrlPath + '/img/btns_press/autoBtn.png');
        game.load.image('autoBtn_h', needUrlPath + '/img/btns_hover/autoBtn.png');   
        game.load.image('Addcredit', needUrlPath + '/img/btns/Add credit.png');
        game.load.image('Addcredit_p', needUrlPath + '/img/btns_press/Add credit.png');
        game.load.image('Addcredit_h', needUrlPath + '/img/btns_hover/Add credit.png');   
        game.load.image('auto_play', needUrlPath + '/img/btns/auto_play.png');
        game.load.image('auto_play_p', needUrlPath + '/img/btns_press/auto_play.png');
        game.load.image('auto_play_h', needUrlPath + '/img/btns_hover/auto_play.png');
        game.load.image('auto_stop', needUrlPath + '/img/btns/auto_stop.png');
        game.load.image('auto_stop_p', needUrlPath + '/img/btns_press/auto_stop.png');
        game.load.image('auto_stop_h', needUrlPath + '/img/btns_hover/auto_stop.png');
        game.load.image('exit', needUrlPath + '/img/exit.png');
        game.load.image('collect', needUrlPath + '/img/collect.png');
        game.load.image('collect_h', needUrlPath + '/img/collect_hover.png');
        game.load.image('help', needUrlPath + '/img/help.png');
        game.load.image('help_h', needUrlPath + '/img/help_hover.png');
        game.load.image('paytable', needUrlPath + '/img/paytable.png');
        game.load.image('paytable_h', needUrlPath + '/img/paytable_hover.png');

        game.load.image('prev_page', needUrlPath + '/img/prev_page.png');
        game.load.image('return_to_game', needUrlPath + '/img/return_to_game.png');
        game.load.image('next_page', needUrlPath + '/img/next_page.png');
        game.load.image('exit_help', needUrlPath + '/img/exit_help.png');

        game.load.image('help_1', needUrlPath + '/img/help_1.png');
        game.load.image('help_2', needUrlPath + '/img/help_2.png');
        game.load.image('paytable_page', needUrlPath + '/img/paytable_page.png');

        game.load.image('bar', needUrlPath + '/img/bar.png');
        game.load.image('ticker', needUrlPath + '/img/ticker.png');
        game.load.image('jackpot_label', needUrlPath + '/img/jackpot_label.png');
        game.load.image('freespin_label', needUrlPath + '/img/freespin_label.png');

        game.load.image('startButton', needUrlPath + '/img/btns/start.png');
        game.load.image('buttonLine1', needUrlPath + '/img/btns/1_line.png');
        game.load.image('buttonLine3', needUrlPath + '/img/btns/3_line.png');
        game.load.image('buttonLine5', needUrlPath + '/img/btns/5_line.png');
        game.load.image('buttonLine10', needUrlPath + '/img/btns/10_line.png');
        game.load.image('buttonLine15', needUrlPath + '/img/btns/15_line.png');
        game.load.image('buttonLine20', needUrlPath + '/img/btns/20_line.png');
        game.load.image('buttonLine25', needUrlPath + '/img/btns/25_line.png');
        game.load.image('buttonBet1', needUrlPath + '/img/btns/bet_1.png');
        game.load.image('buttonBet2', needUrlPath + '/img/btns/bet_2.png');
        game.load.image('buttonBet3', needUrlPath + '/img/btns/bet_3.png');
        game.load.image('buttonBet5', needUrlPath + '/img/btns/bet_5.png');
        game.load.image('buttonBet10', needUrlPath + '/img/btns/bet_10.png');
        game.load.image('buttonBet20', needUrlPath + '/img/btns/bet_20.png');
        game.load.image('buttonBet25', needUrlPath + '/img/btns/bet_25.png');

        game.load.image('startButton_p', needUrlPath + '/img/btns_press/start.png');
        game.load.image('buttonLine1_p', needUrlPath + '/img/btns_press/1_line.png');
        game.load.image('buttonLine3_p', needUrlPath + '/img/btns_press/3_line.png');
        game.load.image('buttonLine5_p', needUrlPath + '/img/btns_press/5_line.png');
        game.load.image('buttonLine10_p', needUrlPath + '/img/btns_press/10_line.png');
        game.load.image('buttonLine15_p', needUrlPath + '/img/btns_press/15_line.png');
        game.load.image('buttonLine20_p', needUrlPath + '/img/btns_press/20_line.png');
        game.load.image('buttonLine25_p', needUrlPath + '/img/btns_press/25_line.png');
        game.load.image('buttonBet1_p', needUrlPath + '/img/btns_press/bet_1.png');
        game.load.image('buttonBet2_p', needUrlPath + '/img/btns_press/bet_2.png');
        game.load.image('buttonBet3_p', needUrlPath + '/img/btns_press/bet_3.png');
        game.load.image('buttonBet5_p', needUrlPath + '/img/btns_press/bet_5.png');
        game.load.image('buttonBet10_p', needUrlPath + '/img/btns_press/bet_10.png');
        game.load.image('buttonBet20_p', needUrlPath + '/img/btns_press/bet_20.png');
        game.load.image('buttonBet25_p', needUrlPath + '/img/btns_press/bet_25.png');

        game.load.image('startButton_h', needUrlPath + '/img/btns_hover/start.png');
        game.load.image('buttonLine1_h', needUrlPath + '/img/btns_hover/1_line.png');
        game.load.image('buttonLine3_h', needUrlPath + '/img/btns_hover/3_line.png');
        game.load.image('buttonLine5_h', needUrlPath + '/img/btns_hover/5_line.png');
        game.load.image('buttonLine10_h', needUrlPath + '/img/btns_hover/10_line.png');
        game.load.image('buttonLine15_h', needUrlPath + '/img/btns_hover/15_line.png');
        game.load.image('buttonLine20_h', needUrlPath + '/img/btns_hover/20_line.png');
        game.load.image('buttonLine25_h', needUrlPath + '/img/btns_hover/25_line.png');
        game.load.image('buttonBet1_h', needUrlPath + '/img/btns_hover/bet_1.png');
        game.load.image('buttonBet2_h', needUrlPath + '/img/btns_hover/bet_2.png');
        game.load.image('buttonBet3_h', needUrlPath + '/img/btns_hover/bet_3.png');
        game.load.image('buttonBet5_h', needUrlPath + '/img/btns_hover/bet_5.png');
        game.load.image('buttonBet10_h', needUrlPath + '/img/btns_hover/bet_10.png');
        game.load.image('buttonBet20_h', needUrlPath + '/img/btns_hover/bet_20.png');
        game.load.image('buttonBet25_h', needUrlPath + '/img/btns_hover/bet_25.png');

        game.load.image('background_2', needUrlPath + '/img/bg_2.png');
        game.load.image('bg_2_bottom', needUrlPath + '/img/bg_2_bottom.png');
        game.load.image('bar_jackpot', needUrlPath + '/img/bar_jackpot.png');
        game.load.image('big_daddy', needUrlPath + '/img/big_daddy.png');
        game.load.image('lattice', needUrlPath + '/img/lattice.png');
        game.load.image('major', needUrlPath + '/img/major.png');
        game.load.image('mini', needUrlPath + '/img/mini.png');
        game.load.image('minor', needUrlPath + '/img/minor.png');
        game.load.image('stop_reel', needUrlPath + '/img/stop_reel.png');
        game.load.image('stop_reel_h', needUrlPath + '/img/stop_reel_hover.png');

        game.load.image('all_wins_times_1', needUrlPath + '/img/all_wins_times_1.png');
        game.load.image('all_wins_times_2', needUrlPath + '/img/all_wins_times_2.png');
        game.load.image('all_wins_times_3', needUrlPath + '/img/all_wins_times_3.png');
        game.load.image('all_wins_times_4', needUrlPath + '/img/all_wins_times_4.png');
        game.load.image('all_wins_times_5', needUrlPath + '/img/all_wins_times_5.png');
        game.load.image('freegames_10', needUrlPath + '/img/freegames_10.png');
        game.load.image('freegames_15', needUrlPath + '/img/freegames_15.png');
        game.load.image('freegames_20', needUrlPath + '/img/freegames_20.png');
        game.load.image('freegames_25', needUrlPath + '/img/freegames_25.png');
        game.load.image('freegames_30', needUrlPath + '/img/freegames_30.png');
        game.load.image('background_3', needUrlPath + '/img/bg_3.png');
        game.load.image('bottom_circle', needUrlPath + '/img/top_circle.png');
        game.load.image('top_circle', needUrlPath + '/img/bottom_circle.png');
        game.load.image('shadow_circle', needUrlPath + '/img/shadow_circle.png');

        game.load.image('background_4', needUrlPath + '/img/bg_4.png');
        game.load.image('random_prize', needUrlPath + '/img/random_prize.png');
        game.load.image('take_win', needUrlPath + '/img/take_win.png');
        game.load.image('replay_feature', needUrlPath + '/img/replay_feature.png');
        game.load.image('ban', needUrlPath + '/img/ban.png');
        game.load.image('cent', needUrlPath + '/img/cent.png');

        game.load.image('background_5', needUrlPath + '/img/bg_5.png');
        game.load.image('black_btn', needUrlPath + '/img/black_btn.png');
        game.load.image('red_btn', needUrlPath + '/img/red_btn.png');
        game.load.image('btn_b', needUrlPath + '/img/btn_b.png');
        game.load.image('btn_c', needUrlPath + '/img/btn_c.png');
        game.load.image('btn_p', needUrlPath + '/img/btn_p.png');
        game.load.image('btn_k', needUrlPath + '/img/btn_k.png');
        game.load.image('figure_b', needUrlPath + '/img/figure_b.png');
        game.load.image('figure_c', needUrlPath + '/img/figure_c.png');
        game.load.image('figure_p', needUrlPath + '/img/figure_p.png');
        game.load.image('figure_k', needUrlPath + '/img/figure_k.png');
        game.load.image('take_win_game5', needUrlPath + '/img/take_win_game5.png');
        game.load.image('WIN', needUrlPath + '/img/WIN.png');
        game.load.image('jp_bg', needUrlPath + '/img/jp_bg.png');
        game.load.spritesheet('anim_card_1', needUrlPath + '/img/anim_card_1.png', 377, 432, 5);
        game.load.spritesheet('anim_card_p', needUrlPath + '/img/anim_card_p.png', 377, 432, 5);
        game.load.spritesheet('anim_card_c', needUrlPath + '/img/anim_card_c.png', 377, 432, 5);
        game.load.spritesheet('anim_card_b', needUrlPath + '/img/anim_card_b.png', 377, 432, 5);
        game.load.spritesheet('anim_card_k', needUrlPath + '/img/anim_card_k.png', 377, 432, 5);

        game.load.audio('btn', needUrlPath + '/sounds/btn.mp3');
        game.load.audio('btn_game3', needUrlPath + '/sounds/btn_game3.mp3');
        game.load.audio('btn_help', needUrlPath + '/sounds/btn_help.mp3');
        game.load.audio('fihish_spin_bar',  needUrlPath + '/sounds/fihish_spin_bar.mp3');
        game.load.audio('game2_bg', needUrlPath + '/sounds/game2_bg.mp3');
        game.load.audio('game2_win', needUrlPath + '/sounds/game2_win.mp3');
        game.load.audio('sound_after_pick', needUrlPath + '/sounds/sound_after_pick.mp3');
        game.load.audio('winSlot', needUrlPath + '/sounds/winSlot.mp3');
        game.load.audio('coins', needUrlPath + '/sounds/coins.mp3');
        game.load.audio('cock_slot', needUrlPath + '/sounds/cock_slot.mp3');
        game.load.audio('cock_win', needUrlPath + '/sounds/cock_win.mp3');
        game.load.audio('jackpotSound', needUrlPath + '/sounds/jackpot.mp3');
        game.load.audio('drumroll2', needUrlPath + '/sounds/drumroll.mp3');
        game.load.audio('drumroll', needUrlPath + '/sounds/drumroll2.wav');
        game.load.audio('money', needUrlPath + '/sounds/money.mp3');
        game.load.audio('сhicken_song', needUrlPath + '/sounds/fs_sound.mp3');
        game.load.audio('double_lose', needUrlPath + '/sounds/double_lose.mp3');
        game.load.audio('double_win', needUrlPath + '/sounds/double_win.mp3');
        game.load.audio('fihish_spin_bar_fsg', needUrlPath + '/sounds/fihish_spin_bar_fsg.mp3');

        for (var i = 1; i <= 25; ++i) {
            game.load.image('lineNumber_' + i, needUrlPath + '/img/line_' + i + '.png');
            game.load.image('line_' + i, needUrlPath + '/img/lines/' + i + '.png');
        }

        game.load.spritesheet('coin', needUrlPath + '/img/coin_anim.png', 135, 135, 8);
        game.load.spritesheet('cursor_anim', needUrlPath + '/img/cursor_anim_112x112.png', 112, 112, 5);
        game.load.spritesheet('slot_anim', needUrlPath + '/img/slot_anim.png', 223, 218, 3);
        game.load.spritesheet('scatters_anim', needUrlPath + '/img/scatters_anim.png', 161, 170, 2);
    };

    preload.create = function() {
        game.sound.mute = false;
        if(firstRequest){
            document.getElementById('preloader').style.display = 'none';
            game.state.start('game1');
        } else {
            preloaderStatus = true;
        }
    };

    game.state.add('preload', preload);

})();

game.state.start('preload');

