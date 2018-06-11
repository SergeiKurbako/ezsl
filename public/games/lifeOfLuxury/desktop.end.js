(function () {
    var preload = {};

    preload.preload = function () {

        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = 2;
        game.scale.pageAlignHorizontally = true;
        game.stage.disableVisibilityChange = true;

        var needUrlPath = '';
        if (location.href.indexOf('/games/') !== -1 && location.href.indexOf('public') !== -1) {
            needUrlPath = location.href.substring(0, location.href.indexOf('://')) + '://' + location.hostname + location.pathname;
        } else if (location.href.indexOf('/game/') !== -1) {
            var gamename = location.href.substring(location.href.indexOf('/game/') + 6);
            needUrlPath = location.href.substring(0, location.href.indexOf('/game/')) + '/games/' + gamename;
        } else if (location.href.indexOf('public') === -1 && location.href.indexOf('/games/') !== -1) {
            var gamename = location.href.substring(location.href.indexOf('/games/') + 7);
            needUrlPath = location.href.substring(0, location.href.indexOf('://')) + '://' + location.hostname + '/games/' + gamename
        }

        path = needUrlPath;

        game.load.image('game.background', '' + path + '/img/bg.png');
        game.load.image('game.background2', '' + path + '/img/bg2.png');
        game.load.image('game.background_overlay', '' + path + '/img/bg_overlay.png');
        game.load.image('black_bg', path + '/img/black_bg.png');
        game.load.image('black_bg2', path + '/img/black_bg2.png');
        game.load.image('btn_yes', path + '/img/btn_yes.png');
        game.load.image('btn_no', path + '/img/btn_no.png');
        game.load.image('cell0', '' + path + '/img/0.png');
        game.load.image('cell0_f', '' + path + '/img/0_f.png');
        game.load.image('cell1', '' + path + '/img/1.png');
        game.load.image('cell1_f', '' + path + '/img/1_f.png');
        game.load.image('cell2', '' + path + '/img/2.png');
        game.load.image('cell2_f', '' + path + '/img/2_f.png');
        game.load.image('cell3', '' + path + '/img/3.png');
        game.load.image('cell3_f', '' + path + '/img/3_f.png');
        game.load.image('cell4', '' + path + '/img/4.png');
        game.load.image('cell4_f', '' + path + '/img/4_f.png');
        game.load.image('cell5', '' + path + '/img/5.png');
        game.load.image('cell5_f', '' + path + '/img/5_f.png');
        game.load.image('cell6', '' + path + '/img/6.png');
        game.load.image('cell6_f', '' + path + '/img/6_f.png');
        game.load.image('cell7', '' + path + '/img/7.png');
        game.load.image('cell7_f', '' + path + '/img/7_f.png');
        game.load.image('cell8', '' + path + '/img/8.png');
        game.load.image('cell8_f', '' + path + '/img/8_f.png');
        game.load.image('cell9', '' + path + '/img/9.png');
        game.load.image('cell9_f', '' + path + '/img/9_f.png');
        game.load.image('cell10', '' + path + '/img/10.png');
        game.load.image('cell10_f', '' + path + '/img/10_f.png');
        game.load.image('emptyCell', '' + path + '/img/100.png');

        game.load.image('freesponStartBG', '' + path + '/img/freesponStartBG.png');
        game.load.image('top_bottom_label_1', '' + path + '/img/top_bottom_label_1.png');
        game.load.image('top_bottom_label_2', '' + path + '/img/top_bottom_label_2.png');
        game.load.image('top_label_1', '' + path + '/img/top_label_1.png');
        game.load.image('top_label_2', '' + path + '/img/top_label_2.png');

        game.load.image('collect', '' + path + '/img/btns/Collect.png');
        game.load.image('collect_p', '' + path + '/img/btns/Collect_p.png');
        game.load.image('help', '' + path + '/img/btns/Help.png');
        game.load.image('help_p', '' + path + '/img/btns/Help_p.png');
        game.load.image('paytable', '' + path + '/img/btns/Pay Table.png');
        game.load.image('paytable_p', '' + path + '/img/btns/Pay Table_p.png');

        game.load.image('bar', '' + path + '/img/bar.png');
        game.load.image('bar2', '' + path + '/img/bar2.png');
        game.load.image('ticker', needUrlPath + '/img/ticker.png');

        game.load.image('startButton', '' + path + '/img/btns/Spin Reels.png');
        game.load.image('startButton_p', '' + path + '/img/btns/Spin Reels_p.png');
        game.load.image('betPerLine', '' + path + '/img/btns/Bet Per Line.png');
        game.load.image('betPerLine_p', '' + path + '/img/btns/Bet Per Line_p.png');
        game.load.image('maxBetSpin', '' + path + '/img/btns/Max Bet Spin.png');
        game.load.image('maxBetSpin_p', '' + path + '/img/btns/Max Bet Spin_p.png');
        game.load.image('selectLines', '' + path + '/img/btns/Select Lines.png');
        game.load.image('selectLines_p', '' + path + '/img/btns/Select Lines_p.png');
        game.load.image('moreHelp', '' + path + '/img/btns/More Help.png');
        game.load.image('moreHelp_p', '' + path + '/img/btns/More Help_p.png');
        game.load.image('morePays', '' + path + '/img/btns/More Pays.png');
        game.load.image('morePays_p', '' + path + '/img/btns/More Pays_p.png');
        game.load.image('return', '' + path + '/img/btns/Return.png');
        game.load.image('return_p', '' + path + '/img/btns/Return_p.png');    
        game.load.image('exit', '' + path + '/img/btns/Exit.png');
        game.load.image('exit_p', '' + path + '/img/btns/Exit_p.png');  
        game.load.image('addCredit', '' + path + '/img/btns/addCredit.png');
        game.load.image('addCredit_p', '' + path + '/img/btns/addCredit_p.png');  
        game.load.image('autoPlay', '' + path + '/img/btns/Auto Play.png');
        game.load.image('autoPlay_p', '' + path + '/img/btns/Auto Play_p.png');  
        game.load.image('autoStop', '' + path + '/img/btns/Auto Stop.png');
        game.load.image('autoStop_p', '' + path + '/img/btns/Auto Stop_p.png');
        for (var i = 1; i <= 15; ++i) {
            game.load.image('circleLine_' + i, '' + path + '/img/lines/circle/' + i + '.png');
            game.load.image('line_' + i, '' + path + '/img/lines/lines/' + i + '.png');
            game.load.image('square_' + i, '' + path + '/img/lines/square/square_' + i + '.png');
        }
        game.load.image('help_page_1', '' + path + '/img/help_page_1.png');
        game.load.image('help_page_2', '' + path + '/img/help_page_2.png');
        game.load.image('help_page_3', '' + path + '/img/help_page_3.png');
        game.load.image('help_page_4', '' + path + '/img/help_page_4.png');
        game.load.image('paytable_page_1', '' + path + '/img/paytable_page_1.png');
        game.load.image('paytable_page_2', '' + path + '/img/paytable_page_2.png');
        game.load.image('paytable_page_3', '' + path + '/img/paytable_page_3.png');
        game.load.image('paytable_page_4', '' + path + '/img/paytable_page_4.png');
        game.load.image('paytable_page_5', '' + path + '/img/paytable_page_5.png');

        game.load.image('bg_bri', '' + path + '/img/bg_bri.png');
        game.load.image('little_bri', '' + path + '/img/little_bri.png');
        game.load.image('medium_bri', '' + path + '/img/medium_bri.png');
        game.load.image('first_bri', '' + path + '/img/first_bri.png');
        game.load.image('blue_field', '' + path + '/img/blue_field.png');

        game.load.audio('spin1', needUrlPath + '/sounds/spinreels/Igr+mel+1.mp3');
        game.load.audio('spin2', needUrlPath + '/sounds/spinreels/Igr+mel+2.mp3');
        game.load.audio('spin3', needUrlPath + '/sounds/spinreels/Igr+mel+3.mp3');
        game.load.audio('coin1', needUrlPath + '/sounds/coins/coin1.mp3');
        game.load.audio('coin2', needUrlPath + '/sounds/coins/coin2.mp3');
        game.load.audio('coin3', needUrlPath + '/sounds/coins/coin3.mp3');
        game.load.audio('coin4', needUrlPath + '/sounds/coins/coin4.mp3');
        game.load.audio('coin5', needUrlPath + '/sounds/coins/coin5.mp3');
        game.load.audio('wins1', needUrlPath + '/sounds/wins/wins1.mp3');
        game.load.audio('wins2', needUrlPath + '/sounds/wins/wins2.mp3');
        game.load.audio('wins3', needUrlPath + '/sounds/wins/wins3.mp3');
        game.load.audio('finishSpin', needUrlPath + '/sounds/finishSpin.mp3');
        game.load.audio('startspin', needUrlPath + '/sounds/startspin.mp3');
        game.load.audio('startspin', needUrlPath + '/sounds/startspin.mp3');
        game.load.audio('freeSpinBg', needUrlPath + '/sounds/freeSpinBg.mp3');
        game.load.audio('balanceSong', needUrlPath + '/sounds/balance.mp3');
        game.load.audio('briSound', needUrlPath + '/sounds/briSound.mp3');
        
        game.load.audio('briFinish', needUrlPath + '/sounds/briFinish.mp3');
        game.load.audio('briFreespin', needUrlPath + '/sounds/briFreespin.mp3');
        game.load.audio('briWin', needUrlPath + '/sounds/briWin.mp3');
        game.load.audio('collect', needUrlPath + '/sounds/collect.mp3');
        game.load.audio('more_pays', needUrlPath + '/sounds/more_pays.mp3');
        game.load.audio('pay_table', needUrlPath + '/sounds/pay_table.mp3');
        game.load.audio('select_line', needUrlPath + '/sounds/select_line.mp3');
        game.load.audio('updateFinish', needUrlPath + '/sounds/updateFinish.mp3');
        game.load.audio('kater', needUrlPath + '/sounds/kater.mp3');
        game.load.audio('plane', needUrlPath + '/sounds/plane.mp3');
        game.load.audio('car', needUrlPath + '/sounds/car.mp3');
        game.load.audio('return_to_game', needUrlPath + '/sounds/return_to_game.mp3');
        game.load.audio('lose_freespins', needUrlPath + '/sounds/lose_freespins.mp3');
        game.load.audio('briLineWin', needUrlPath + '/sounds/briLineWin.mp3');

        game.load.audio('lowest1', needUrlPath + '/sounds/wins/lowestwins/1.wav');
        game.load.audio('low1', needUrlPath + '/sounds/wins/lowwins/1.wav');
        game.load.audio('low2', needUrlPath + '/sounds/wins/lowwins/2.wav');
        game.load.audio('low3', needUrlPath + '/sounds/wins/lowwins/3.wav');
        game.load.audio('low4', needUrlPath + '/sounds/wins/lowwins/4.wav');
        game.load.audio('medium1', needUrlPath + '/sounds/wins/mediumwins/1.wav');
        game.load.audio('medium2', needUrlPath + '/sounds/wins/mediumwins/2.mp3');
        game.load.audio('medium3', needUrlPath + '/sounds/wins/mediumwins/3.mp3');
        game.load.audio('medium4', needUrlPath + '/sounds/wins/mediumwins/4.wav');
        game.load.audio('medium5', needUrlPath + '/sounds/wins/mediumwins/5.wav');
        game.load.audio('medium6', needUrlPath + '/sounds/wins/mediumwins/6.wav');
        game.load.audio('high1', needUrlPath + '/sounds/wins/highwins/1.mp3');
        game.load.audio('high2', needUrlPath + '/sounds/wins/highwins/2.wav');
        game.load.audio('coins', needUrlPath + '/sounds/coins.mp3');

        game.load.spritesheet('coin_anim', '' + path + '/img/coin_anim.png', 149, 150, 5);
        game.load.spritesheet('bri_anim', '' + path + '/img/bri_anim.png', 149, 150, 5);
        game.load.spritesheet('car_anim', '' + path + '/img/car_anim.png', 149, 150, 5);
        game.load.spritesheet('kater_anim', '' + path + '/img/kater_anim.png', 149, 150, 5);
        game.load.spritesheet('plane_anim', '' + path + '/img/plane_anim.png', 149, 150, 7);
        game.load.spritesheet('bri_anim_1', '' + path + '/img/bri_anim_1_x5.png', 564, 373, 5);
        game.load.spritesheet('bri_anim_2', '' + path + '/img/bri_anim_2_x4.png', 564, 373, 4);
        game.load.spritesheet('coin_anim_2', needUrlPath + '/img/coin_anim2.png', 135, 135, 8);
    };

    preload.create = function () {
        if (firstRequest) {
            document.getElementById('preloader').style.display = 'none';
            game.state.start('game1');
        } else {
            preloaderStatus = true;
        }
    };

    game.state.add('preload', preload);

})();

game.state.start('preload');

