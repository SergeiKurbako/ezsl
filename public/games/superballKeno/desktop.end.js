(function(){
    // window.PhaserGlobal = { 
    //     disableWebAudio: false,
    //     disableAudio: false,
    // };
    var preload = {};

    preload.preload = function() {

        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

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
        game.load.image('black_bg', needUrlPath + '/img/black_bg.png');

        game.load.image('bet_bottom', needUrlPath + '/img/btns/Bet_bottom.png');
        game.load.image('bet_top', needUrlPath + '/img/btns/Bet_top.png');
        game.load.image('exit', needUrlPath + '/img/btns/Exit.png');
        game.load.image('help', needUrlPath + '/img/btns/Help.png');
        game.load.image('playGame', needUrlPath + '/img/btns/Play Game.png');
        game.load.image('quickPick', needUrlPath + '/img/btns/Quik Pick.png');
        game.load.image('wipeCard', needUrlPath + '/img/btns/Wipe Card.png');
        game.load.image('bet_bottom_p', needUrlPath + '/img/btns/Bet_bottom_p.png');
        game.load.image('bet_top_p', needUrlPath + '/img/btns/Bet_top_p.png');
        game.load.image('exit_p', needUrlPath + '/img/btns/Exit_p.png');
        game.load.image('help_p', needUrlPath + '/img/btns/Help_p.png');
        game.load.image('playGame_p', needUrlPath + '/img/btns/Play Game_p.png');
        game.load.image('quickPick_p', needUrlPath + '/img/btns/Quik Pick_p.png');
        game.load.image('wipeCard_p', needUrlPath + '/img/btns/Wipe Card_p.png');
        game.load.image('AddCredit', needUrlPath + '/img/btns/Add_credit.png');
        game.load.image('AddCredit_p', needUrlPath + '/img/btns/Add_credit_p.png');

        game.load.image('block1', needUrlPath + '/img/block1.png');
        game.load.image('block2', needUrlPath + '/img/block2.png');

        game.load.image('help1', needUrlPath + '/img/help1.png');
        game.load.image('help2', needUrlPath + '/img/help2.png');
        game.load.image('ticker', needUrlPath + '/img/ticker.png');

        game.load.image('bet_down', needUrlPath + '/img/bet_down.png');
        game.load.image('bet_down_p', needUrlPath + '/img/bet_down_p.png');
        game.load.image('bet_up', needUrlPath + '/img/bet_up.png');
        game.load.image('bet_up_p', needUrlPath + '/img/bet_up_p.png');
        game.load.image('call', needUrlPath + '/img/call.png');
        game.load.image('call_p', needUrlPath + '/img/call_p.png');
        game.load.image('exit_help', needUrlPath + '/img/exit_help.png');
        game.load.image('exit_help_p', needUrlPath + '/img/exit_help_p.png');
        game.load.image('next', needUrlPath + '/img/next.png');
        game.load.image('next_p', needUrlPath + '/img/next_p.png');
        game.load.image('prev', needUrlPath + '/img/prev.png');
        game.load.image('prev_p', needUrlPath + '/img/prev_p.png');
        game.load.image('red_square', needUrlPath + '/img/red_square.png');
        game.load.image('purple_btn', needUrlPath + '/img/purple_btn.png');
        game.load.image('red_btn', needUrlPath + '/img/red_btn.png');

        game.load.image('dol', needUrlPath + '/img/dol.png');
        game.load.image('goodLuck', needUrlPath + '/img/goodLuck.png');
        game.load.image('win_center', needUrlPath + '/img/win_center.png');
        game.load.image('big_dol', needUrlPath + '/img/big_dol.png');
        game.load.image('superball_hit', needUrlPath + '/img/superball_hit.png');
        game.load.image('sorry', needUrlPath + '/img/sorry.png');
        game.load.image('picks', needUrlPath + '/img/picks.png');
        game.load.image('jackpot_amount', needUrlPath + '/img/jackpot_amount.png');
        game.load.image('right_panel', needUrlPath + '/img/right_panel.png');

        game.load.atlasJSONHash('big_red_border', needUrlPath + '/img/spritesheet.png', needUrlPath + '/img/sprites.json');

        game.load.image('yellow_btn', needUrlPath + '/img/yellow_btn/btn.png');
        game.load.image('green_btn', needUrlPath + '/img/green_btn/btn.png');
        for (var i = 1; i <= 80; ++i) {
            game.load.image('yellow_' + i, needUrlPath + '/img/yellow_btn/' + i + '.png');
            game.load.image('green_' + i, needUrlPath + '/img/green_btn/' + i + '.png');
            game.load.image('red_' + i, needUrlPath + '/img/red_btn/' + i + '.png');
        }
        for (var i = 1; i <= 80; ++i) {
            game.load.image('ball_' + i, needUrlPath + '/img/balls/' + i + '.png');
        }

        game.load.audio('number', needUrlPath + '/sounds/number.mp3');
        game.load.audio('autopick', needUrlPath + '/sounds/autopick.mp3');
        game.load.audio('autopick_end', needUrlPath + '/sounds/autopick_end.mp3');
        game.load.audio('betDown', needUrlPath + '/sounds/betDown.mp3');
        game.load.audio('betUp', needUrlPath + '/sounds/betUp.mp3');
        game.load.audio('betmax', needUrlPath + '/sounds/betmax.mp3');
        game.load.audio('bwin', needUrlPath + '/sounds/bwin.mp3');
        game.load.audio('endgame', needUrlPath + '/sounds/endgame.mp3');
        game.load.audio('exit', needUrlPath + '/sounds/exit.mp3');
        game.load.audio('help', needUrlPath + '/sounds/help.mp3');
        game.load.audio('nummax', needUrlPath + '/sounds/nummax.mp3');
        game.load.audio('playgame', needUrlPath + '/sounds/playgame.mp3');
        game.load.audio('spusksharov', needUrlPath + '/sounds/spusksharov.mp3');
        game.load.audio('superballmiss', needUrlPath + '/sounds/superballmiss.mp3');
        game.load.audio('superballwin', needUrlPath + '/sounds/superballwin.mp3');
        game.load.audio('vibraniyshar', needUrlPath + '/sounds/vibraniyshar.mp3');
        game.load.audio('wipecard_quickpick', needUrlPath + '/sounds/wipecard_quickpick.mp3');
        game.load.audio('zvyksharov', needUrlPath + '/sounds/zvyksharov.mp3');
        game.load.audio('win', needUrlPath + '/sounds/win.wav');
        game.load.audio('coins', needUrlPath + '/sounds/coins.mp3');
        for (var i = 1; i <= 10; ++i) {
            game.load.audio('ballSound'+ i, needUrlPath + '/sounds/ball' + i + '.mp3');
        }
        game.load.spritesheet('superball_winner', needUrlPath + '/img/superball_winner.png', 220, 59, 5);
        game.load.spritesheet('touch_anim', needUrlPath + '/img/touch_anim.png', 547, 70, 5);
        game.load.spritesheet('last_ball', needUrlPath + '/img/last_ball.png', 536, 70, 5);
        game.load.spritesheet('last_ball_start', needUrlPath + '/img/last_ball_start.png', 546, 76, 5);
        game.load.spritesheet('sorry_anim', needUrlPath + '/img/sorry_anim.png', 465, 69, 5);
        // game.load.spritesheet('big_red_border', needUrlPath + '/img/big_red_border.png', 646, 671, 6);
        game.load.spritesheet('purple_block_anim', needUrlPath + '/img/purple_block_anim.png', 61, 65, 5);
        game.load.spritesheet('purple_border_anim', needUrlPath + '/img/purple_border_anim.png', 150, 150, 10);
        game.load.spritesheet('red_border_anim', needUrlPath + '/img/red_border_anim.png', 148, 148, 11); 
        game.load.spritesheet('red_btn_anim', needUrlPath + '/img/red_btn_anim.png', 61, 65, 8);
        game.load.spritesheet('red_square_anim', needUrlPath + '/img/red_square_anim.png', 66, 63, 8);
        game.load.spritesheet('red_square_anim2', needUrlPath + '/img/red_square_anim2.png', 66, 63, 5);
        game.load.spritesheet('coin_anim_2', needUrlPath + '/img/coin_anim2.png', 135, 135, 8);
        game.load.spritesheet('Purple_stars', needUrlPath + '/img/Purple_stars.png', 232, 234, 6);
        game.load.spritesheet('Red_stars', needUrlPath + '/img/Red_stars.png', 290, 294, 6);
        game.load.spritesheet('Yellow_stars', needUrlPath + '/img/Yellow_stars.png', 202, 202, 6); 
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

