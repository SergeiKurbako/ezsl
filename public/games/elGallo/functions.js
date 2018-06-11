//game - гланый объект игры, в который все добавляется
var gameNumber = 3;
var timeSpin = false;
var spaceStatus = true;
//функция для рандома
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//включение звука и полноэкранного режимов
function full_and_sound(){
    if (!fullStatus)
        full = game.add.sprite(738,27, 'game.non_full');
    else
        full = game.add.sprite(738,27, 'game.full');
    full.inputEnabled = true;
    full.input.useHandCursor = true;
    full.events.onInputUp.add(function(){
        if (game.scale.isFullScreen)
        {
            game.scale.stopFullScreen();
            full.loadTexture('game.non_full');
            fullStatus = false;
        }
        else
        {
            game.scale.startFullScreen(false);
            full.loadTexture('game.full');
            fullStatus = true;
        }
    });
    if (soundStatus)
        sound = game.add.sprite(738,53, 'sound_on');
    else
        sound = game.add.sprite(738,53, 'sound_off');
    sound.inputEnabled = true;
    sound.input.useHandCursor = true;
    sound.events.onInputUp.add(function(){
        if (soundStatus == true){
            sound.loadTexture('sound_off');
            soundStatus = false;
            game.sound.mute = true;
        } else {
            sound.loadTexture('sound_on');
            soundStatus = true;
            game.sound.mute = false;
        }
    });
}

//блокировка экрана
function lockDisplay() {
    document.getElementById('displayLock').style.display = 'block';
}
function unlockDisplay() {
    document.getElementById('displayLock').style.display = 'none';
}

//Функции связанные с линиями и их номерами

var line1; var linefull1; var number1;
var line2; var linefull2; var number2;
var line3; var linefull3; var number3;
var line4; var linefull4; var number4;
var line5; var linefull5; var number5;
var line6; var linefull6; var number6;
var line7; var linefull7; var number7;
var line8; var linefull8; var number8;
var line9; var linefull9; var number9;

//var linePosition = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]] - координаты расположения линий
//var numberPosition = [[0,0], ...] - координаты расположения цифр
function addLinesAndNumbers(game, linePosition, numberPosition) {

    var linefullNames = ['linefull1', 'linefull2', 'linefull3', 'linefull4', 'linefull5', 'linefull6', 'linefull7', 'linefull8', 'linefull9'];
    var lineNames = ['line1', 'line2', 'line3', 'line4', 'line5', 'line6', 'line7', 'line8', 'line9'];

    //загружаем изображения в игру

    linefull1 = game.add.sprite(linePosition[0][0], linePosition[0][1], linefullNames[0]);
    linefull2 = game.add.sprite(linePosition[1][0], linePosition[1][1], linefullNames[1]);
    linefull3 = game.add.sprite(linePosition[2][0], linePosition[2][1], linefullNames[2]);
    linefull4 = game.add.sprite(linePosition[3][0], linePosition[3][1], linefullNames[3]);
    linefull5 = game.add.sprite(linePosition[4][0], linePosition[4][1], linefullNames[4]);
    linefull6 = game.add.sprite(linePosition[5][0], linePosition[5][1], linefullNames[5]);
    linefull7 = game.add.sprite(linePosition[6][0], linePosition[6][1], linefullNames[6]);
    linefull8 = game.add.sprite(linePosition[7][0], linePosition[7][1], linefullNames[7]);
    linefull9 = game.add.sprite(linePosition[8][0], linePosition[8][1], linefullNames[8]);

    linefull1.visible = false;
    linefull2.visible = false;
    linefull3.visible = false;
    linefull4.visible = false;
    linefull5.visible = false;
    linefull6.visible = false;
    linefull7.visible = false;
    linefull8.visible = false;
    linefull9.visible = false;

    line1 = game.add.sprite(linePosition[0][0]+6, linePosition[0][1], lineNames[0]);
    line2 = game.add.sprite(linePosition[1][0]+6, linePosition[1][1], lineNames[1]);
    line3 = game.add.sprite(linePosition[2][0]+6, linePosition[2][1], lineNames[2]);
    line4 = game.add.sprite(linePosition[3][0]+6, linePosition[3][1], lineNames[3]);
    line5 = game.add.sprite(linePosition[4][0]+6, linePosition[4][1], lineNames[4]);
    line6 = game.add.sprite(linePosition[5][0]+6, linePosition[5][1], lineNames[5]);
    line7 = game.add.sprite(linePosition[6][0]+6, linePosition[6][1], lineNames[6]);
    line8 = game.add.sprite(linePosition[7][0]+6, linePosition[7][1]-7, lineNames[7]);
    line9 = game.add.sprite(linePosition[8][0]+6, linePosition[8][1], lineNames[8]);

    line1.visible = false;
    line2.visible = false;
    line3.visible = false;
    line4.visible = false;
    line5.visible = false;
    line6.visible = false;
    line7.visible = false;
    line8.visible = false;
    line9.visible = false;

    number1 = game.add.sprite(numberPosition[0][0], numberPosition[0][1], 'game.number1');
    number2 = game.add.sprite(numberPosition[1][0], numberPosition[1][1], 'game.number2');
    number3 = game.add.sprite(numberPosition[2][0], numberPosition[2][1], 'game.number3');
    number4 = game.add.sprite(numberPosition[3][0], numberPosition[3][1], 'game.number4');
    number5 = game.add.sprite(numberPosition[4][0], numberPosition[4][1], 'game.number5');
    number6 = game.add.sprite(numberPosition[5][0], numberPosition[5][1], 'game.number6');
    number7 = game.add.sprite(numberPosition[6][0], numberPosition[6][1], 'game.number7');
    number8 = game.add.sprite(numberPosition[7][0], numberPosition[7][1], 'game.number8');
    number9 = game.add.sprite(numberPosition[8][0], numberPosition[8][1], 'game.number9');

    number1.visible = false;
    number2.visible = false;
    number3.visible = false;
    number4.visible = false;
    number5.visible = false;
    number6.visible = false;
    number7.visible = false;
    number8.visible = false;
    number9.visible = false;

}
var jp_bg, playerName, hitJackpot
function addJackpot(game){
    playerName = game.add.text(697, 53, 'Player123', {
        font: '17px "Arial"',
        fill: '#e7ef05',
        stroke: '#000000',
        strokeThickness: 0,
    });
    playerName.anchor.setTo(0.5, 0.5);
    playerName.visible = false;
    hitJackpot = game.add.text(697, 78, 'HIT JACKPOT ', {
        font: '20px "Arial"',
        fontWeight: 'bold',
        fill: '#db082e',
        stroke: '#000000',
        strokeThickness: 0,
    });  
    hitJackpot.visible = false;
    hitJackpot.anchor.setTo(0.5, 0.5);
    jackpotAmount = game.add.text(697, 77, '$50, 000', {
        font: '24px "Arial"',
        fill: '#46b74f',
        stroke: '#000000',
        strokeThickness: 0,
    });  
    jackpotAmount.visible = false;
    jackpotAmount.anchor.setTo(0.5, 0.5);
}
function visJackpot(){
    jp_bg.visible = true;
    playerName.visible = true;
    hitJackpot.visible = true;
    setTimeout(function() { 
     hitJackpot.visible = false; 
     jackpotAmount.visible = true;
     setTimeout(function() { 
         hitJackpot.visible = true; 
         jackpotAmount.visible = false;
         setTimeout(function() { 
             hitJackpot.visible = false; 
             jackpotAmount.visible = true;
             setTimeout(function() { 
                 jp_bg.visible = false;
                 playerName.visible = false;
                 hitJackpot.visible = false;
                 jackpotAmount.visible = false;
                 emulJackpot();
             }, 1000);
         }, 1000);
     }, 1000);
 }, 1000);
}
function emulJackpot(){
    setTimeout(function() { 
        visJackpot();
    }, 180000);
}
// lineArray = [1,2,3,4, ...] - перечисляются линии которые нужно скрыть (1-9 - обычные линии, 11-19 прерывисные)
var credit, creditDol, betScore, betDol, winScore, winDol, creditPerLine, countLines, jackpotsText, jackpotsValue, justText, freespinText, miltiText;
var moneySound;
var btnSound ;
var btnHelpSound ;
var fihishSpinBarSound ;
var winSlot ;
var coins ;
var cock_slot ;
var cock_win ;
var jackpotSound ;
var drumrollSound ; 
var сhicken_song ; 
var doubleLose;
var doubleWin;
function addScore(game, scorePosions, balance) {
    credit = game.add.text(scorePosions[0][0], scorePosions[0][1], balance, {
        font: scorePosions[0][2]+'px "Arial"',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 0,
    });
    credit.anchor.setTo(0.5, 0.5);
    creditDol = game.add.text(scorePosions[1][0], scorePosions[1][1], '$'+ (balance/100).toFixed(2), {
        font: scorePosions[1][2]+'px "Arial"',
        fill: '#adad3f',
        stroke: '#000000',
        strokeThickness: 0,
    });
    creditDol.anchor.setTo(0.5, 0.5);
    betScore = game.add.text(scorePosions[2][0], scorePosions[2][1], lines*betline, {
        font: scorePosions[2][2]+'px "Arial"',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 0,
    });
    betScore.anchor.setTo(0.5, 0.5);
    betDol = game.add.text(scorePosions[3][0], scorePosions[3][1], '$'+ (lines*betline/100).toFixed(2), {
        font: scorePosions[3][2]+'px "Arial"',
        fill: '#adad3f',
        stroke: '#000000',
        strokeThickness: 0,
    });
    betDol.anchor.setTo(0.5, 0.5);
    winScore = game.add.text(scorePosions[4][0], scorePosions[4][1], allWinOld, {
        font: scorePosions[4][2]+'px "Arial"',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 0,
    });
    winScore.anchor.setTo(0.5, 0.5);
    winDol = game.add.text(scorePosions[5][0], scorePosions[5][1], '$'+ (allWinOld/100).toFixed(2), {
        font: scorePosions[5][2]+'px "Arial"',
        fill: '#adad3f',
        stroke: '#000000',
        strokeThickness: 0,
    });
    winDol.anchor.setTo(0.5, 0.5);
    creditPerLine = game.add.text(scorePosions[6][0], scorePosions[6][1], betline+' Credit Bet Per Line', {
        font: scorePosions[6][2]+'px "Arial"',
        fill: '#e6d8d8',
        stroke: '#000000',
        strokeThickness: 0,
    });
    creditPerLine.anchor.setTo(0.5, 0.5);
    countLines = game.add.text(scorePosions[7][0], scorePosions[7][1], lines+' Lines selected', {
        font: scorePosions[7][2]+'px "Arial"',
        fill: '#e6d8d8',
        stroke: '#000000',
        strokeThickness: 0,
    });
    countLines.anchor.setTo(0.5, 0.5);
    jackpotsText = game.add.text(698, 50, 'MAXI', {
        font:'25px "Arial"',
        fill: '#dddd48',
        stroke: '#000000',
        strokeThickness: 0,
    });
    jackpotsText.anchor.setTo(0.5, 0.5);
    jackpotsValue = game.add.text(698, 77, '$500.00', {
        font: '29px "Arial"',
        fill: '#dddd48',
        stroke: '#000000',
        strokeThickness: 0,
    });
    jackpotsValue.anchor.setTo(0.5, 0.5);
    justText = game.add.text(431, 111, 'Good Luck', {
        font: '28px "Arial"',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 0,
    });
    justText.anchor.setTo(0.5, 0.5);
    justText.visible = false;
    freespinText = game.add.text(512, 710, 'FREE SPIN 1 OF 25', {
        font: '84px "Arial"',
        fontWeight : '600',
        fill: '#ffe9bd',
        stroke: '#000000',
        strokeThickness: 0,
    });
    freespinText.anchor.setTo(0.5, 0.5);
    freespinText.visible = false;
    miltiText = game.add.text(512, 761, 'ALL WINS MULTIPLIED BY 3', {
        font: '31px "Arial"',
        fontWeight : '600',
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 0,
    });
    miltiText.anchor.setTo(0.5, 0.5);
    miltiText.visible = false;
    moneySound = game.add.audio('money');
    btnSound = game.add.audio('btn');
    btnHelpSound = game.add.audio('btn_help');
    fihishSpinBarSound = game.add.audio('fihish_spin_bar');
    fihishSpinBarFsgSound = game.add.audio('fihish_spin_bar_fsg');
    winSlot = game.add.audio('winSlot');
    coins = game.add.audio('coins');
    cock_slot = game.add.audio('cock_slot');
    cock_win = game.add.audio('cock_win');
    jackpotSound = game.add.audio('jackpotSound');
    drumrollSound = game.add.audio('drumroll'); 
    drumrollSound.loop = true;
    doubleLose = game.add.audio('double_lose'); 
    doubleWin = game.add.audio('double_win');     
    
}
function playChickenSong(){
    сhicken_song = game.add.audio('сhicken_song');
    сhicken_song.loop = true;
    сhicken_song.play();
}
var randomPrizeValue;
var randomPrize;
var repeatGame = false;
function requestGame4(gamename, btn, game4) {
    $.ajax({
        type: "get",
        url: getNeedUrlPath()+'/choice/'+gamename+'?choice='+btn,
        dataType: 'html',
        success: function (data) {
            console.log(data);
            dataSpinRequest = JSON.parse(data);
            dataArray = dataSpinRequest;
            randomPrizeValue = dataSpinRequest;
            randomPrize.visible = true;         
            if (btn === "random"){
                allWinOld = randomPrizeValue;
                randomPrize.setText(randomPrizeValue)
            } else {
                var randomNum = randomNumber(1, 20000);
                randomPrize.setText(+randomNum)
            }
            if (btn === "repeat"){
                ropeValues = dataArray;
                mulFreespin = ropeValues['mul'];
                setTimeout(function() { 
                    repeatGame = true;
                    game.state.start('game1');
                }, 1500);
            } else {
                setTimeout(function() { 
                    repeatGame = false;
                    game.state.start('game1');
                }, 1500);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if (btn === "random"){
                btn = "random";
            } else if (btn === "repeat"){
                btn = "repeat";

            } else if (btn === 'get'){            
                btn = "get";
            }
            var errorText = '//ошибка 50';
            console.log(errorText);
            setTimeout(function() {
                requestGame4(gamename, btn, game4);
            }, 100);
        }
    });
}
function hideButtons(buttonsArray) {
    if(buttonsArray === undefined) {
        buttonBet1.inputEnabled = false;
        buttonBet1.input.useHandCursor = false;
        buttonBet2.inputEnabled = false;
        buttonBet2.input.useHandCursor = false;
        buttonBet3.inputEnabled = false;
        buttonBet3.input.useHandCursor = false;
        buttonBet5.inputEnabled = false;
        buttonBet5.input.useHandCursor = false;
        buttonBet10.inputEnabled = false;
        buttonBet10.input.useHandCursor = false;
        buttonBet20.inputEnabled = false;
        buttonBet20.input.useHandCursor = false;
        buttonBet25.inputEnabled = false;
        buttonBet25.input.useHandCursor = false;
        buttonLine1.inputEnabled = false;
        buttonLine1.input.useHandCursor = false;
        buttonLine3.inputEnabled = false;
        buttonLine3.input.useHandCursor = false;
        buttonLine5.inputEnabled = false;
        buttonLine5.input.useHandCursor = false;
        buttonLine10.inputEnabled = false;
        buttonLine10.input.useHandCursor = false;
        buttonLine15.inputEnabled = false;
        buttonLine15.input.useHandCursor = false;
        buttonLine20.inputEnabled = false;
        buttonLine20.input.useHandCursor = false;
        buttonLine25.inputEnabled = false;
        buttonLine25.input.useHandCursor = false;
        startButton.inputEnabled = false;
        startButton.input.useHandCursor = false;
        paytable.inputEnabled = false;
        paytable.input.useHandCursor = false;
        // collect.inputEnabled = false;
        // collect.input.useHandCursor = false;
        help.inputEnabled = false;
        help.input.useHandCursor = false;
        double.inputEnabled = false;
        double.input.useHandCursor = false;
        auto_play.inputEnabled = false;
        auto_play.input.useHandCursor = false;
        exit.inputEnabled = false;
        exit.input.useHandCursor = false;
        spaceStatus = false;
        $('.menu_wrap').css({
            display: 'none'
        });
        if (isMobile) {
         $('#spin').css({
            display: 'none'
        });
     }
 } else {
    buttonsArray.forEach(function (item) {
        item[0].inputEnabled = false;
        item[0].input.useHandCursor = false;
    })
}
}
function hideMobileBtn(){
    if (isMobile) {
     $('#spin').css({
        display: 'none'
    });
 }
}
function showMobileBtn(){
    if (isMobile) {
     $('#spin').css({
        display: 'block'
    });
 }
}
function hideVisibleButtons(buttonsArray) {
    if(buttonsArray === undefined) {
        buttonBet1.visible = false;
        buttonBet2.visible = false;
        buttonBet3.visible = false;
        buttonBet5.visible = false;
        buttonBet10.visible = false;
        buttonBet20.visible = false;
        buttonBet25.visible = false;
        buttonLine1.visible = false;
        buttonLine3.visible = false;
        buttonLine5.visible = false;
        buttonLine10.visible = false;
        buttonLine15.visible = false;
        buttonLine20.visible = false;
        buttonLine25.visible = false;
        startButton.visible = false;
        double.visible = false;
        auto_play.visible = false;
        if (isMobile) {
         $('#spin').css({
            display: 'none'
        });
     }
 } else {
    buttonsArray.forEach(function (item) {
        item[0].visible = false;
    })
}
}
function showButtons(buttonsArray) {
    if(buttonsArray === undefined) {
        buttonBet1.inputEnabled = true;
        buttonBet1.input.useHandCursor = true;
        buttonBet2.inputEnabled = true;
        buttonBet2.input.useHandCursor = true;
        buttonBet3.inputEnabled = true;
        buttonBet3.input.useHandCursor = true;
        buttonBet5.inputEnabled = true;
        buttonBet5.input.useHandCursor = true;
        buttonBet10.inputEnabled = true;
        buttonBet10.input.useHandCursor = true;
        buttonBet20.inputEnabled = true;
        buttonBet20.input.useHandCursor = true;
        buttonBet25.inputEnabled = true;
        buttonBet25.input.useHandCursor = true;
        buttonLine1.inputEnabled = true;
        buttonLine1.input.useHandCursor = true;
        buttonLine3.inputEnabled = true;
        buttonLine3.input.useHandCursor = true;
        buttonLine5.inputEnabled = true;
        buttonLine5.input.useHandCursor = true;
        buttonLine10.inputEnabled = true;
        buttonLine10.input.useHandCursor = true;
        buttonLine15.inputEnabled = true;
        buttonLine15.input.useHandCursor = true;
        buttonLine20.inputEnabled = true;
        buttonLine20.input.useHandCursor = true;
        buttonLine25.inputEnabled = true;
        buttonLine25.input.useHandCursor = true;
        startButton.inputEnabled = true;
        startButton.input.useHandCursor = true;
        paytable.inputEnabled = true;
        paytable.input.useHandCursor = true;
        // collect.inputEnabled = true;
        // collect.input.useHandCursor = true;
        help.inputEnabled = true;
        help.input.useHandCursor = true;
        double.inputEnabled = true;
        double.input.useHandCursor = true;
        auto_play.inputEnabled = true;
        auto_play.input.useHandCursor = true;
        exit.inputEnabled = true;
        exit.input.useHandCursor = true;
        spaceStatus = true;
        $('.menu_wrap').css({
            display: 'block'
        });
        if (isMobile) {
           $('#spin').css({
            display: 'block'
        });
       }
   } else {
    buttonsArray.forEach(function (item) {
        item[0].inputEnabled = true;
        item[0].input.useHandCursor = true;
    })
}
}
function hideButtonsDouble(game5, buttonsArray) {
    if(buttonsArray === undefined)  {
        game5.btn_c.inputEnabled = false;
        game5.btn_c.input.useHandCursor = false;
        game5.btn_b.inputEnabled = false;
        game5.btn_b.input.useHandCursor = false;
        game5.btn_k.inputEnabled = false;
        game5.btn_k.input.useHandCursor = false;
        game5.btn_p.inputEnabled = false;
        game5.btn_p.input.useHandCursor = false;
        game5.red_btn.inputEnabled = false;
        game5.red_btn.input.useHandCursor = false;
        game5.black_btn.inputEnabled = false;
        game5.black_btn.input.useHandCursor = false;
        game5.take_win.inputEnabled = false;
        game5.take_win.input.useHandCursor = false;
    } else {
        buttonsArray.forEach(function (item) {
            item[0].inputEnabled = false;
            item[0].input.useHandCursor = false;
        })
    }
}
function showButtonsDouble(game5, buttonsArray) {
    if(buttonsArray === undefined){
        game5.btn_c.inputEnabled = true;
        game5.btn_c.input.useHandCursor = true;
        game5.btn_b.inputEnabled = true;
        game5.btn_b.input.useHandCursor = true;
        game5.btn_k.inputEnabled = true;
        game5.btn_k.input.useHandCursor = true;
        game5.btn_p.inputEnabled = true;
        game5.btn_p.input.useHandCursor = true;
        game5.red_btn.inputEnabled = true;
        game5.red_btn.input.useHandCursor = true;
        game5.black_btn.inputEnabled = true;
        game5.black_btn.input.useHandCursor = true;
        game5.take_win.inputEnabled = true;
        game5.take_win.input.useHandCursor = true;
    } else {
        buttonsArray.forEach(function (item) {
            item[0].inputEnabled = true;
            item[0].input.useHandCursor = true;
        })
    }
}
var linesArray = [];
function addLines(game, linePosition) {
    linesArray = [];
    for (var i = 0; i < 25; i++) {
        var line = game.add.sprite(linePosition[i][0],linePosition[i][1], 'line_' + (i + 1));
        linesArray.push(line);
    }
}

function hideLines() {
    linesArray.forEach(function (line) {
        line.visible = false;
    });
}

function showLine(lineNumber) {
    linesArray[lineNumber - 1].visible = true;
}



// Функции связанные с кнопками
var selectGame;
var payTable;
var betone;
var betmax;
var automaricstart;
var startButton;
var buttonLine1;
var buttonLine3;
var buttonLine5;
var buttonLine7;
var buttonLine9;

//кнопки для слотов

var pagePaytables =[];
var settingsMode = false;
var currentPage = null;

function addPaytable(pageCount, pageCoord, btnCoord){
    pageSound = game.add.audio('page');
    for (var i = 1; i <= pageCount; ++i) {
        pagePaytable = game.add.sprite(pageCoord[i-1][0], pageCoord[i-1][1], 'pagePaytable_' + i);
        pagePaytable.visible = false;
        pagePaytables[i] = pagePaytable;
    }

    prev_page = game.add.sprite(btnCoord[0][0], btnCoord[0][1], 'prev_page');
    prev_page.visible = false;
    prev_page.inputEnabled = true;
    prev_page.input.useHandCursor = true;
    prev_page.events.onInputUp.add(function(){
        if (settingsMode)  {
            pageSound.play();
            if (currentPage == 1)
                currentPage = pageCount;
            else{
                pagePaytables[currentPage].visible = false;
                currentPage -=1;
            }
        }
        pagePaytables[currentPage].visible = true;
    });
    exit_btn = game.add.sprite(btnCoord[1][0], btnCoord[1][1], 'exit_btn');
    exit_btn.visible = false;
    exit_btn.inputEnabled = true;
    exit_btn.input.useHandCursor = true;
    exit_btn.events.onInputUp.add(function(){
        pageSound.play();
        for (var i = 1; i <= pageCount; ++i) {
            pagePaytables[i].visible = false;
        }
        prev_page.visible = false;
        exit_btn.visible = false;
        next_page.visible = false;
        light_settings.visible = false;
        settingsMode = false;
        betline1Score.visible = true;
        betline2Score.visible = true;
        betScore.visible = true;
        linesScore.visible = true;
        balanceScore.visible = true;
        showButtons([[betmax, 'betmax'], [betone, 'betone'], [automaricstart, 'automaricstart'], [selectGame, 'selectGame'], [payTable, 'payTable'], [buttonLine3, "buttonLine3"], [buttonLine5, "buttonLine5"], [buttonLine7, "buttonLine7"]]);
    });
    next_page = game.add.sprite(btnCoord[2][0], btnCoord[2][1], 'next_page');
    next_page.visible = false;
    next_page.inputEnabled = true;
    next_page.input.useHandCursor = true;
    next_page.events.onInputUp.add(function(){
        if (settingsMode)  {
            pageSound.play();
            if (currentPage == pageCount){
                pagePaytables[currentPage].visible = false;
                currentPage = 1;
            } else if (currentPage == 1){
                currentPage +=1;
            } else {
                pagePaytables[currentPage].visible = false;
                currentPage +=1;
            }
        }
        pagePaytables[currentPage].visible = true;
    });
};

//кнопки для карт
function addButtonsGame2(game) {

    var soundForBattons = [];

    // кнопки
    selectGame = game.add.sprite(70,510, 'selectGame_d');
    selectGame.scale.setTo(0.7, 0.7);
    selectGame.inputEnabled = false;

    payTable = game.add.sprite(150,510, 'payTable_d');
    payTable.scale.setTo(0.7, 0.7);
    payTable.inputEnabled = false;

    betone = game.add.sprite(490,510, 'betone_d');
    betone.scale.setTo(0.7, 0.7);
    betone.inputEnabled = false;


    betmax = game.add.sprite(535,510, 'betmax_d');
    betmax.scale.setTo(0.7, 0.7);
    betmax.inputEnabled = false;

    automaricstart = game.add.sprite(685,510, 'automaricstart_d');
    automaricstart.scale.setTo(0.7, 0.7);
    automaricstart.inputEnabled = false;

    startButton = game.add.sprite(597, 510, 'startButton');
    startButton.scale.setTo(0.7,0.7);
    startButton.inputEnabled = true;
    startButton.input.useHandCursor = true;
    startButton.events.onInputOver.add(function(){
        startButton.loadTexture('startButton_p');
    });
    startButton.events.onInputOut.add(function(){
        startButton.loadTexture('startButton');
    });
    startButton.events.onInputDown.add(function(){
        hideDoubleToAndTakeOrRiskTexts();
        game.state.start('game1');
    });

    buttonLine1 = game.add.sprite(260, 510, 'buttonLine1_d');
    buttonLine1.scale.setTo(0.7,0.7);
    buttonLine1.inputEnabled = false;

    buttonLine3 = game.add.sprite(300, 510, 'buttonLine3');
    buttonLine3.scale.setTo(0.7,0.7);
    buttonLine3.inputEnabled = true;
    buttonLine3.input.useHandCursor = true;
    buttonLine3.events.onInputOver.add(function(){
        buttonLine3.loadTexture('buttonLine3_p');
    });
    buttonLine3.events.onInputOut.add(function(){
        buttonLine3.loadTexture('buttonLine3');
    });
    buttonLine3.events.onInputDown.add(function(){
        requestDouble(gamename, 1, lines, bet, sid);
    });

    buttonLine5 = game.add.sprite(340, 510, 'buttonLine5');
    buttonLine5.scale.setTo(0.7,0.7);
    buttonLine5.inputEnabled = true;
    buttonLine5.input.useHandCursor = true;
    buttonLine5.events.onInputOver.add(function(){
        buttonLine5.loadTexture('buttonLine5_p');
    });
    buttonLine5.events.onInputOut.add(function(){
        buttonLine5.loadTexture('buttonLine5');
    });
    buttonLine5.events.onInputDown.add(function(){
        requestDouble(gamename, 2, lines, bet, sid);
    });

    buttonLine7 = game.add.sprite(380, 510, 'buttonLine7');
    buttonLine7.scale.setTo(0.7,0.7);
    buttonLine7.inputEnabled = true;
    buttonLine7.input.useHandCursor = true;
    buttonLine7.events.onInputOver.add(function(){
        buttonLine7.loadTexture('buttonLine7_p');
    });
    buttonLine7.events.onInputOut.add(function(){
        buttonLine7.loadTexture('buttonLine7');
    });
    buttonLine7.events.onInputDown.add(function(){
        requestDouble(gamename, 3, lines, bet, sid);
    });

    buttonLine9 = game.add.sprite(420, 510, 'buttonLine9');
    buttonLine9.scale.setTo(0.7,0.7);
    buttonLine9.inputEnabled = true;
    buttonLine9.input.useHandCursor = true;
    buttonLine9.events.onInputOver.add(function(){
        buttonLine9.loadTexture('buttonLine9_p');
    });
    buttonLine9.events.onInputOut.add(function(){
        buttonLine9.loadTexture('buttonLine9');
    });
    buttonLine9.events.onInputDown.add(function(){
        requestDouble(gamename, 4, lines, bet, sid);
    });

}

//TODO: действия при нажатии некоторых кнопок нужно задать в самой игре
//кнопки для игры с последовательным выбором
function addButtonsGame3(game) {

    // кнопки
    selectGame = game.add.sprite(70,510, 'selectGame_d');
    selectGame.scale.setTo(0.7, 0.7);
    selectGame.inputEnabled = false;

    payTable = game.add.sprite(150,510, 'payTable_d');
    payTable.scale.setTo(0.7, 0.7);
    payTable.inputEnabled = false;

    betone = game.add.sprite(490,510, 'betone_d');
    betone.scale.setTo(0.7, 0.7);
    betone.inputEnabled = false;


    betmax = game.add.sprite(535,510, 'betmax_d');
    betmax.scale.setTo(0.7, 0.7);
    betmax.inputEnabled = false;

    automaricstart = game.add.sprite(685,510, 'automaricstart_d');
    automaricstart.scale.setTo(0.7, 0.7);
    automaricstart.inputEnabled = false;

    startButton = game.add.sprite(597, 510, 'startButton_d');
    startButton.scale.setTo(0.7,0.7);
    startButton.inputEnabled = false;

    buttonLine1 = game.add.sprite(260, 510, 'buttonLine1');
    buttonLine1.scale.setTo(0.7,0.7);
    buttonLine1.inputEnabled = true;
    buttonLine1.input.useHandCursor = true;
    buttonLine1.events.onInputOver.add(function(){
        buttonLine1.loadTexture('buttonLine1_p');
    });
    buttonLine1.events.onInputOut.add(function(){
        buttonLine1.loadTexture('buttonLine1');
    });
    /*buttonLine1.events.onInputDown.add(function(){

    });*/

    buttonLine3 = game.add.sprite(300, 510, 'buttonLine3');
    buttonLine3.scale.setTo(0.7,0.7);
    buttonLine3.inputEnabled = true;
    buttonLine3.input.useHandCursor = true;
    buttonLine3.events.onInputOver.add(function(){
        buttonLine3.loadTexture('buttonLine3_p');
    });
    buttonLine3.events.onInputOut.add(function(){
        buttonLine3.loadTexture('buttonLine3');
    });
    /*buttonLine3.events.onInputDown.add(function(){

    });*/

    buttonLine5 = game.add.sprite(340, 510, 'buttonLine5');
    buttonLine5.scale.setTo(0.7,0.7);
    buttonLine5.inputEnabled = true;
    buttonLine5.input.useHandCursor = true;
    buttonLine5.events.onInputOver.add(function(){
        buttonLine5.loadTexture('buttonLine5_p');
    });
    buttonLine5.events.onInputOut.add(function(){
        buttonLine5.loadTexture('buttonLine5');
    });
    /*buttonLine5.events.onInputDown.add(function(){

    });*/

    buttonLine7 = game.add.sprite(380, 510, 'buttonLine7');
    buttonLine7.scale.setTo(0.7,0.7);
    buttonLine7.inputEnabled = true;
    buttonLine7.input.useHandCursor = true;
    buttonLine7.events.onInputOver.add(function(){
        buttonLine7.loadTexture('buttonLine7_p');
    });
    buttonLine7.events.onInputOut.add(function(){
        buttonLine7.loadTexture('buttonLine7');
    });
    /*buttonLine7.events.onInputDown.add(function(){

    });*/

    buttonLine9 = game.add.sprite(420, 510, 'buttonLine9');
    buttonLine9.scale.setTo(0.7,0.7);
    buttonLine9.inputEnabled = true;
    buttonLine9.input.useHandCursor = true;
    buttonLine9.events.onInputOver.add(function(){
        buttonLine9.loadTexture('buttonLine9_p');
    });
    buttonLine9.events.onInputOut.add(function(){
        buttonLine9.loadTexture('buttonLine9');
    });
    /*buttonLine9.events.onInputDown.add(function(){

    });*/

}

//слоты и их вращение

//переменные содержащие все объекты слотов
var slot1; var slot2; var slot3;  var slot4; var slot5; var slot6; var slot7; var slot8; var slot9; var slot10; var slot11; var slot12; var slot13; var slot14; var slot15;
var slot1Anim; var slot2Anim; var slot3Anim;  var slot4Anim; var slot5Anim; var slot6Anim; var slot7Anim; var slot8Anim; var slot9Anim; var slot10Anim; var slot11Anim; var slot12Anim; var slot13Anim; var slot14Anim; var slot15Anim;

function addSlots(game, slotPosition) {
    //slotValueNames - названия изображений слотов; slotCellAnimName - название спрайта анимации кручения
    var slotValueNames = ['cell0', 'cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8', 'cell9', 'cell10', 'cell11'];
    var slotCellAnimName = 'cellAnim';

    slot1 = game.add.sprite(slotPosition[0][0],slotPosition[0][1], slotValueNames[0]);
    slot2 = game.add.sprite(slotPosition[1][0],slotPosition[1][1], slotValueNames[1]);
    slot3 = game.add.sprite(slotPosition[2][0],slotPosition[2][1], slotValueNames[3]);
    slot4 = game.add.sprite(slotPosition[3][0],slotPosition[3][1], slotValueNames[4]);
    slot5 = game.add.sprite(slotPosition[4][0],slotPosition[4][1], slotValueNames[7]);
    slot6 = game.add.sprite(slotPosition[5][0],slotPosition[5][1], slotValueNames[2]);
    slot7 = game.add.sprite(slotPosition[6][0],slotPosition[6][1], slotValueNames[4]);
    slot8 = game.add.sprite(slotPosition[7][0],slotPosition[7][1], slotValueNames[3]);
    slot9 = game.add.sprite(slotPosition[8][0],slotPosition[8][1], slotValueNames[8]);
    slot10 = game.add.sprite(slotPosition[9][0],slotPosition[0][1], slotValueNames[9]);
    slot11 = game.add.sprite(slotPosition[10][0],slotPosition[10][1], slotValueNames[10]);
    slot12 = game.add.sprite(slotPosition[11][0],slotPosition[11][1], slotValueNames[11]);
    slot13 = game.add.sprite(slotPosition[12][0],slotPosition[12][1], slotValueNames[5]);
    slot14 = game.add.sprite(slotPosition[13][0],slotPosition[13][1], slotValueNames[3]);
    slot15 = game.add.sprite(slotPosition[14][0],slotPosition[14][1], slotValueNames[5]);

    slot1Anim = game.add.sprite(slotPosition[0][0],slotPosition[0][1], slotCellAnimName);
    slot2Anim = game.add.sprite(slotPosition[1][0],slotPosition[1][1], slotCellAnimName);
    slot3Anim = game.add.sprite(slotPosition[2][0],slotPosition[2][1], slotCellAnimName);
    slot4Anim = game.add.sprite(slotPosition[3][0],slotPosition[3][1], slotCellAnimName);
    slot5Anim = game.add.sprite(slotPosition[4][0],slotPosition[4][1], slotCellAnimName);
    slot6Anim = game.add.sprite(slotPosition[5][0],slotPosition[5][1], slotCellAnimName);
    slot7Anim = game.add.sprite(slotPosition[6][0],slotPosition[6][1], slotCellAnimName);
    slot8Anim = game.add.sprite(slotPosition[7][0],slotPosition[7][1], slotCellAnimName);
    slot9Anim = game.add.sprite(slotPosition[8][0],slotPosition[8][1], slotCellAnimName);
    slot10Anim = game.add.sprite(slotPosition[9][0],slotPosition[0][1], slotCellAnimName);
    slot11Anim = game.add.sprite(slotPosition[10][0],slotPosition[10][1], slotCellAnimName);
    slot12Anim = game.add.sprite(slotPosition[11][0],slotPosition[11][1], slotCellAnimName);
    slot13Anim = game.add.sprite(slotPosition[12][0],slotPosition[12][1], slotCellAnimName);
    slot14Anim = game.add.sprite(slotPosition[13][0],slotPosition[13][1], slotCellAnimName);
    slot15Anim = game.add.sprite(slotPosition[14][0],slotPosition[14][1], slotCellAnimName);

    slot1Anim.animations.add('slot1Anim', [0,1,2,3,4,5,6,7,8], 20, true);
    slot2Anim.animations.add('slot2Anim', [1,2,3,4,5,6,7,8,0], 20, true);
    slot3Anim.animations.add('slot3Anim', [2,3,4,5,6,7,8,0,1], 20, true);
    slot4Anim.animations.add('slot4Anim', [3,4,5,6,7,8,0,1,2], 20, true);
    slot5Anim.animations.add('slot5Anim', [4,5,6,7,8,0,1,2,3], 20, true);
    slot6Anim.animations.add('slot6Anim', [5,6,7,8,0,1,2,3,4], 20, true);
    slot7Anim.animations.add('slot7Anim', [6,7,8,0,1,2,3,4,5], 20, true);
    slot8Anim.animations.add('slot8Anim', [7,8,0,1,2,3,4,5,6], 20, true);
    slot9Anim.animations.add('slot9Anim', [8,0,1,2,3,4,5,6,7], 20, true);
    slot10Anim.animations.add('slot10Anim', [0,1,2,3,4,5,6,7,8], 20, true);
    slot11Anim.animations.add('slot11Anim', [1,2,3,4,5,6,7,8,0], 20, true);
    slot12Anim.animations.add('slot12Anim', [2,3,4,5,6,7,8,0,1], 20, true);
    slot13Anim.animations.add('slot13Anim', [3,4,5,6,7,8,0,1,2], 20, true);
    slot14Anim.animations.add('slot14Anim', [4,5,6,7,8,0,1,2,3], 20, true);
    slot15Anim.animations.add('slot15Anim', [7,8,0,1,2,3,4,5,6], 20, true);

    slot1Anim.animations.getAnimation('slot1Anim').play();
    slot2Anim.animations.getAnimation('slot2Anim').play();
    slot3Anim.animations.getAnimation('slot3Anim').play();
    slot4Anim.animations.getAnimation('slot4Anim').play();
    slot5Anim.animations.getAnimation('slot5Anim').play();
    slot6Anim.animations.getAnimation('slot6Anim').play();
    slot7Anim.animations.getAnimation('slot7Anim').play();
    slot8Anim.animations.getAnimation('slot8Anim').play();
    slot9Anim.animations.getAnimation('slot9Anim').play();
    slot10Anim.animations.getAnimation('slot10Anim').play();
    slot11Anim.animations.getAnimation('slot11Anim').play();
    slot12Anim.animations.getAnimation('slot12Anim').play();
    slot13Anim.animations.getAnimation('slot13Anim').play();
    slot14Anim.animations.getAnimation('slot14Anim').play();
    slot15Anim.animations.getAnimation('slot15Anim').play();

    slot1Anim.visible = false;
    slot2Anim.visible = false;
    slot3Anim.visible = false;
    slot4Anim.visible = false;
    slot5Anim.visible = false;
    slot6Anim.visible = false;
    slot7Anim.visible = false;
    slot8Anim.visible = false;
    slot9Anim.visible = false;
    slot10Anim.visible = false;
    slot11Anim.visible = false;
    slot12Anim.visible = false;
    slot13Anim.visible = false;
    slot14Anim.visible = false;
    slot15Anim.visible = false;
}

var finalValues; var wlValues; var balanceR; var totalWin; var totalWinR; var dcard; var linesR; var betlineR; //totalWin - общая сумма выигрыша посчитанная из разноности балансов до и полсе запроса. totalWinR - полученный из ответа (аналогично linesR и betlineR)
var checkRopeGame = 0; var checkRopeGameAnim = 0; var ropeValues; var ropeStep = 0;
var monkeyCell = []; // массив содержащий номера ячеек, в которых выпали обезьяны
var autostart = false; var checkAutoStart = false;
var mulFreespin;
var timer;

//запрос для слотов
var balanceOld;
var dataSpinRequest; // данные полученны из запроса

//анимации связаные с выпадением бонусной игры с последовательным выбором
var manyCellAnim = [];
var slotPosition;
function addSelectionOfTheManyCellAnim(game, slotPosition) {
    for (var i = 0; i < 15; i++){
        manyCellAnim[i] = game.add.sprite(slotPosition[i][0],slotPosition[i][1], 'selectionOfTheManyCellAnim');
        manyCellAnim[i].animations.add('selectionOfTheManyCellAnim', [0,1,2], 8, true);
    }
}

function showSelectionOfTheManyCellAnim(game, slotPosition, monkeyCell) {
    monkeyCell.forEach(function (item) {
        manyCellAnim[item] = game.add.sprite(slotPosition[item][0],slotPosition[item][1], 'selectionOfTheManyCellAnim');
        manyCellAnim[item].animations.add('selectionOfTheManyCellAnim', [0,1,2], 8, true);
        manyCellAnim[item].animations.getAnimation('selectionOfTheManyCellAnim').play();
    });
}

function hideSelectionOfTheManyCellAnim(monkeyCell) {
    monkeyCell.forEach(function (item) {
        manyCellAnim[item].visible = false;
    });
}

var checkRotaion = false;

//вывод информации в табло
var tableTitle; // название изображения заданное в прелодере
function addTableTitle(game, loadTexture, x,y) {
    tableTitle = game.add.sprite(x,y, loadTexture);
}

function changeTableTitle(loadTexture) {
    tableTitle.visible = true;
    tableTitle.loadTexture(loadTexture);
}

function hideTableTitle() {
    tableTitle.visible = false;
}

var winLineText;
function showNumberWinLine(game, winLine, x,y) {
    if(typeof(winLineText) != "undefined") {
        winLineText.visible = false;
    }

    winLineText = game.add.text(x, y, 'win line: '+winLine, {
        font: '24px "TeX Gyre Schola Bold"',
        fill: '#fff567',
        stroke: '#000000',
        strokeThickness: 3,
    });
}

function hideNumberWinLine() {
    winLineText.visible = false;
}


// ajax-запросы

//init-запрос
// function requestInit() {
//     $.ajax({
//         type: "GET",
//         // url: 'http://api.gmloto.ru/index.php?action=init',
//         url: 'http://gnome/test.php',
//         dataType: 'html',
//         success: function (data) {

//     	// data = "result=ok&state=0&SID=aeea5r0ai19oht0rvj3c5dd2p2&user=1271|user1271|1000.00";
//     	dataString = data;

//     	initDataArray = dataString.split('&');

//     	initDataArray.forEach(function (item) {
//     		if(item.indexOf('SID=') + 1) {
//     			sid = item.replace('SID=','');
//     		}
//     		if(item.indexOf('user=') + 1) {
//     			user = item.replace('user=','');
//     		}
//     	});

//     	if (data.length != 0 && (find(initDataArray, 'result=ok')) != -1 && (find(initDataArray, 'state=0')) != -1) {
//     		requestState();
//     	} else {
//     		var errorText = '//ошибка error|Ошибка! Ваш баланс ($user_balance) недостаточен для игры. Пополните счёт. | index.php?GE=enter';
//     		alert(errorText);
//     	}

//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//             var errorText = '//ошибка error|Ошибка! Ваш баланс ($user_balance) недостаточен для игры. Пополните счёт. | index.php?GE=enter';
//             alert(errorText);
//         }
//     });
//   }
var sessionName;


function getNeedUrlPath() {
    if (location.href.indexOf('/games/') !== -1 && location.href.indexOf('public') !== -1) {
        var number = location.pathname.indexOf('/games/');
        var needLocation = location.href.substring(0,location.href.indexOf('://')) + '://' + location.hostname + location.pathname.substring(0,number) + '/';

        return needLocation;
    } else if (location.href.indexOf('public') !== -1 && location.href.indexOf('/game/') !== -1) {
        var number = location.pathname.indexOf('/public/');
        var needLocation = location.href.substring(0,location.href.indexOf('public')) + 'public';

        return needLocation;
    } else if (location.href.indexOf('public') === -1) {
        needLocation = location.href.substring(0,location.href.indexOf('://')) + '://' + location.hostname;

        return needLocation;
    }
}

function requestInit() {
    $.ajax({
        type: "get",
        url: getNeedUrlPath() +'/init',
        dataType: 'html',
        success: function (data) {
            // data = "result=ok&state=0&SID=aeea5r0ai19oht0rvj3c5dd2p2&user=1271|user1271|1000.00";
            console.log(data)
            dataString = data;
            if(dataString) {
                sessionName = data;
                requestState();
            } else {
                alert('Ошибка 11');
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            var errorText = 'ошибка 10';
            console.log(errorText);
            setTimeout("requestInit();", 200);
        }
    });
}
function resetSession(){
    $.ajax({
        type: "get",
        url: getNeedUrlPath() +'/reset-session',
        dataType: 'html',
        success: function (data) {
            console.log(data)
            requestInit();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            var errorText = 'ошибка 60';
            console.log(errorText);
            setTimeout("resetSession();", 200);
        }
    });
}

//state-запрос
var jackpots;
var firstRequest = false;
var preloaderStatus = false;
function requestState() {
    $.ajax({
        type: "get",
        url: getNeedUrlPath()+'/state?sessionName='+sessionName,
        dataType: 'html',
        success: function (data) {
            // data = "result=ok&state=0&min=1&id=user1271&balance=1000.00&extralife=45&jackpots=10|50|250|500"
            dataArray = JSON.parse(data);
            console.log(data)
            game1();
            game2();
            game3();
            game4();
            game5();	
            if(dataArray['state']) {
                firstRequest = true;
                if(preloaderStatus){
                    document.getElementById('preloader').style.display = 'none';
                    game.state.start('game1');
                }
                balance = dataArray['balance'];
                realBalance = dataArray['balance'];;
                // info = dataArray['info'];
                // game.state.start('gamePreload'); //начало игры с локации загрузчика
            } else {
                alert('Ошбика 21');
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            var errorText = 'ошибка 20';
            alert(errorText);
            setTimeout("requestState();", 200);
        }
    });
}
var flashLineNumber1, flashLineNumber2, dcardOld;
var jackpot;
var nextJAckpot;
var jackpotArr;
var winBonusSymbolsData;

//функции отображения цифр

var betScore;
var linesScore;
var balanceScore;
var betline1Score;
var betline2Score;
var riskStep;

var checkGame = 0; // индикатор текущего экрана (текущей игры). Нужен для корректной обработки и вывода некоторых данных

//var scorePosions = [[x,y, px], [x,y, px] ...]; - массив, в котором в порядке определенном выше идут координаты цифр
// для игры с картами betline содержит номер попытки
var scorePosions;


var takeWin;
var textCounter;
var topBarImage;
var ActionsAfterUpdatingBalance; //задаем таймер, который останавливаем в случае если игрок решил не дожидаться окончания анимации

var totalWinRCounter;
function updateTotalWinR(game, scorePosions, totalWinR) {

    //обновление totalWin в cлотах при забирании выигрыша
    if(totalWinR > 100){
        var interval = 5;
    } else {
        var interval = 50;
    }

    var difference = parseInt(totalWinR);

    //значение totalWinR уменьшается
    var timeInterval = parseInt(interval*difference);
    var mark = -1;

    var currentDifference = 0;

    totalWinRCounter = setInterval(function () {

        currentDifference += 1*mark;

        linesScore.visible = false;
        linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], parseInt(totalWinR) + parseInt(currentDifference), {
            font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
            fill: '#fff567',
            stroke: '#000000',
            strokeThickness: 3,
        });
    }, interval);

    setTimeout(function() {
        hideStepTotalWinR(game, scorePosions, lines);
        clearInterval(totalWinRCounter);
    }, timeInterval);
}

var stepTotalWinR = 0;
function showStepTotalWinR(game, scorePosions, stepTotalWinR) {
    linesScore.visible = false;
    linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], stepTotalWinR, {
        font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
        fill: '#fff567',
        stroke: '#000000',
        strokeThickness: 3,
    });
}

function hideStepTotalWinR(game, scorePosions, lines) {
    linesScore.visible = false;
    linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], lines, {
        font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
        fill: '#fff567',
        stroke: '#000000',
        strokeThickness: 3,
    });
}

function updateBetinfo(game, scorePosions, lines, betline) {
    betScore.visible = false;
    linesScore.visible = false;
    betline1Score.visible = false;
    betline2Score.visible = false;

    bet = lines*betline;
    betScore = game.add.text(scorePosions[0][0], scorePosions[0][1], bet, {
        font: scorePosions[0][2]+'px "TeX Gyre Schola Bold"',
        fill: '#fff567',
        stroke: '#000000',
        strokeThickness: 3,
    });

    linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], lines, {
        font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
        fill: '#fff567',
        stroke: '#000000',
        strokeThickness: 3,
    });

    betline1Score = game.add.text(scorePosions[3][0], scorePosions[3][1], betline, {
        font: scorePosions[3][2]+'px "TeX Gyre Schola Bold"',
        fill: '#fff567',
        stroke: '#000000',
        strokeThickness: 3,
    });

    betline2Score = game.add.text(scorePosions[4][0], scorePosions[4][1], betline, {
        font: scorePosions[4][2]+'px "TeX Gyre Schola Bold"',
        fill: '#fff567',
        stroke: '#000000',
        strokeThickness: 3,
    });
}



// функции пересчета цифр

//пересчет ставки на линию
var betlineOptions = [1, 2, 3, 4, 5, 10, 15, 20, 25];
var betlineCounter = 0;
function upBetline() {
    if(betlineCounter < (betlineOptions.length-1)) {
        betlineCounter += 1;
        betline = betlineOptions[betlineCounter];
    } else {
        betlineCounter = 0;
        betline = betlineOptions[betlineCounter];
    }
}

function maxBetline() {
    betlineCounter = betlineOptions.length - 1;
    betline = betlineOptions[betlineOptions.length - 1];
}



//функции для игры с картами

var dataDoubleRequest; var selectedCard;
function requestDouble(gamename, selectedCard, game5) {
    // disableInputCards();
    // lockDisplay();
    hideButtonsDouble(game5);
    $.ajax({
        type: "GET",
        url: getNeedUrlPath()+'/double/'+gamename+'?sessionName='+sessionName+'&selectedCard='+selectedCard,
        dataType: 'html',
        success: function (data) {
            console.log(data)
            dataDoubleRequest = JSON.parse(data);
            parseDoubleAnswer(dataDoubleRequest, selectedCard, game5);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            var errorText = 'ошибка 4';
            console.log(errorText);
            setTimeout("requestDouble(gamename, selectedCard, game5)", 1000);
        }
    });
}

var dwin; var dwinS; var dcard2; var selectedCardR; var dwinOld = -841284; var winValue;
function parseDoubleAnswer(dataDoubleRequest, selectedCard, game5) {
    if(dataDoubleRequest['win'] != 0) {
        dwinS = dataDoubleRequest['win'];
    }

    dwin = dataDoubleRequest['dwin'];

    dcard2 = dataDoubleRequest['dcard'];
    dcard = dcard2;
    winValue = dcard;
    allWin = dataDoubleRequest['allWin'];
    checkWinDouble(selectedCard, game5, winValue);

    // showDoubleResult(dwin, selectedCardR, valuesOfAllCards);
}
var step = 0;
function checkWinDouble(value, game5, winValue){ 
    game5.card_anim.animations.add('anim_card_1', [0,1,2,3,4], 50, false).play().onComplete.add(function(){
        game5.card_anim.visible = false;
        switch (winValue) {
            case 'p':
            game5.anim_card_p.visible = true;
            game5.anim_card_p.animations.add('anim_card_p', [0,1,2,3,4], 50, false).play().onComplete.add(function(){
                game5.card_anim.visible = false;
                nextPrev(winValue, game5);
                if(value === 'black'){
                    game5.win.visible = true;
                    doubleWin.play();
                    allWinOld = allWinOld*2
                    updateScore(allWinOld, game5);
                    setTimeout(function() {
                        game5.win.visible = false;
                        game5.anim_card_p.visible = false;
                        game5.card_anim = game.add.sprite(332,138, 'anim_card_1');
                        step = step +1;
                        showButtonsDouble(game5);
                        if (step >= 5){
                            step = 0;
                            game.state.start('game1');
                        }
                    }, 1000);
                } else if(winValue == value){
                    game5.win.visible = true;
                    doubleWin.play();
                    allWinOld = allWinOld*4
                    updateScore(allWinOld, game5);
                    setTimeout(function() {
                        game5.win.visible = false;
                        game5.anim_card_p.visible = false;
                        game5.card_anim = game.add.sprite(332,138, 'anim_card_1');
                        step = step +1;
                        showButtonsDouble(game5);
                        if (step >= 5){
                            step = 0;
                            game.state.start('game1');
                        }
                    }, 1000);
                }	else{
                    doubleLose.play();
                    setTimeout(function() {
                        allWinOld = 0;
                        step = 0;
                        game.state.start('game1');
                    }, 1000);
                }
            });
            break;
            case 'k':
            game5.anim_card_k.visible = true;
            game5.anim_card_k.animations.add('anim_card_k', [0,1,2,3,4], 50, false).play().onComplete.add(function(){
                game5.card_anim.visible = false;
                nextPrev(winValue, game5);
                if(value === 'black'){
                    game5.win.visible = true;
                    doubleWin.play();
                    allWinOld = allWinOld*2;
                    updateScore(allWinOld, game5);
                    setTimeout(function() {
                        game5.win.visible = false;
                        game5.anim_card_k.visible = false;
                        game5.card_anim = game.add.sprite(332,138, 'anim_card_1');
                        step = step +1;
                        showButtonsDouble(game5);
                        if (step >= 5){
                            step = 0;
                            game.state.start('game1');
                        }
                    }, 1000);
                } else if(winValue == value){
                    game5.win.visible = true;
                    doubleWin.play();
                    allWinOld = allWinOld*4;
                    updateScore(allWinOld, game5);
                    setTimeout(function() {
                        game5.win.visible = false;
                        game5.anim_card_k.visible = false;
                        game5.card_anim = game.add.sprite(332,138, 'anim_card_1');
                        step = step +1;
                        showButtonsDouble(game5);
                        if (step >= 5){
                            step = 0;
                            game.state.start('game1');
                        }
                    }, 1000);
                } else {
                    doubleLose.play();
                    setTimeout(function() {
                        allWinOld = 0;
                        step = 0;
                        game.state.start('game1');
                    }, 1000);
                }
            });
            break;
            case 'c':
            game5.anim_card_c.visible = true;
            game5.anim_card_c.animations.add('anim_card_c', [0,1,2,3,4], 50, false).play().onComplete.add(function(){
                game5.card_anim.visible = false;
                nextPrev(winValue, game5);
                if(value === 'red'){
                    game5.win.visible = true;
                    doubleWin.play();
                    allWinOld = allWinOld*2;
                    updateScore(allWinOld, game5);
                    setTimeout(function() {
                        game5.win.visible = false;
                        game5.anim_card_c.visible = false;
                        game5.card_anim = game.add.sprite(332,138, 'anim_card_1');
                        step = step +1;
                        showButtonsDouble(game5);
                        if (step >= 5){
                            step = 0;
                            game.state.start('game1');
                        }
                    }, 1000);
                } else if(winValue == value){
                    game5.win.visible = true;
                    doubleWin.play();
                    allWinOld = allWinOld*4;
                    updateScore(allWinOld, game5);
                    setTimeout(function() {
                        game5.win.visible = false;
                        game5.anim_card_c.visible = false;
                        game5.card_anim = game.add.sprite(332,138, 'anim_card_1');
                        step = step +1;
                        showButtonsDouble(game5);
                        if (step >= 5){
                            step = 0;
                            game.state.start('game1');
                        }
                    }, 1000);
                }  else {
                    doubleLose.play();
                    setTimeout(function() {
                        allWinOld = 0;
                        step = 0;
                        game.state.start('game1');
                    }, 1000);
                }
            });
            break;
            case 'b':
            game5.anim_card_b.visible = true;
            game5.anim_card_b.animations.add('anim_card_b', [0,1,2,3,4], 50, false).play().onComplete.add(function(){
                game5.card_anim.visible = false;
                nextPrev(winValue, game5);
                if(value === 'red'){
                    game5.win.visible = true;
                    doubleWin.play();
                    allWinOld = allWinOld*2;
                    updateScore(allWinOld, game5);
                    setTimeout(function() {
                        game5.win.visible = false;
                        game5.anim_card_b.visible = false;
                        game5.card_anim = game.add.sprite(332,138, 'anim_card_1');
                        step = step +1;
                        showButtonsDouble(game5);
                        if (step >= 5){
                            step = 0;
                            step = 0;
                            game.state.start('game1');
                        }
                    }, 1000);
                } else if(winValue == value){
                    game5.win.visible = true;
                    doubleWin.play();
                    allWinOld = allWinOld*4;
                    updateScore(allWinOld, game5);
                    setTimeout(function() {
                        game5.win.visible = false;
                        game5.anim_card_b.visible = false;
                        game5.card_anim = game.add.sprite(332,138, 'anim_card_1');
                        step = step +1;
                        showButtonsDouble(game5);
                        if (step >= 5){
                            step = 0;
                            game.state.start('game1');
                        }
                    }, 1000);
                }   else {
                    doubleLose.play();
                    setTimeout(function() {
                        allWinOld = 0;
                        step = 0;
                        game.state.start('game1');
                    }, 1000);
                }
            });
            break;
        }
    });
}
function nextPrev(value, game5){
    game5.previosArr[4].loadTexture(game5.previosArr[3].key);
    game5.previosArr[3].loadTexture(game5.previosArr[2].key);
    game5.previosArr[2].loadTexture(game5.previosArr[1].key);
    game5.previosArr[1].loadTexture(game5.previosArr[0].key);
    infoCard[4] = infoCard[3];
    infoCard[3] = infoCard[2];
    infoCard[2] = infoCard[1];
    infoCard[1] = infoCard[0];
    infoCard[0] = 'figure_' +value;
    switch (value) {
        case 'p':
        game5.previosArr[0].loadTexture('figure_p');
        break;
        case 'k':
        game5.previosArr[0].loadTexture('figure_k');
        break;
        case 'c':
        game5.previosArr[0].loadTexture('figure_c');
        break;
        case 'b':
        game5.previosArr[0].loadTexture('figure_b');
        break;
    }
}
function updateScore(value, game5){
    game5.risk.setText(value);
    game5.riskDol.setText('$'+ (value/100).toFixed(2));
    game5.colorWin.setText(value*2);
    game5.colorWinDol.setText('$'+ (value*2/100).toFixed(2));
    game5.suitWin.setText(value*4);
    game5.suitWinDol.setText('$'+ (value*4/100).toFixed(2));
}

var doubleToText; //создаем переменные в которых содержится текст для табло
var takeOrRiskText;
var timerTitleAmin; // объект таймера для переклучения текстов
var xSave; //сохраняем для последующего использования координаты
var ySave;
function showDoubleToAndTakeOrRiskTexts(game, totalWin, x,y) {
    xSave = x;
    ySave = y;

    var i = 1;
    timerTitleAmin = setInterval(function() {
        if(i == 0) {
            if(typeof(doubleToText) != "undefined") {
                doubleToText.visible = false;
            }
            if(typeof(takeOrRiskText) != "undefined") {
                takeOrRiskText.visible = false;
            }

            doubleToText = game.add.text(x-5, y, 'DOUBLE TO '+totalWin*2+' ?', {
                font: '24px "Arial"',
                fill: '#fff567',
                stroke: '#000000',
                strokeThickness: 3,
            });

            i = 1;
        } else {
            if(typeof(doubleToText) != "undefined") {
                doubleToText.visible = false;
            }
            if(typeof(takeOrRiskText) != "undefined") {
                takeOrRiskText.visible = false;
            }

            takeOrRiskText = game.add.text(x, y, 'TAKE OR RISK', {
                font: '24px "Arial"',
                fill: '#ffffff',
                stroke: '#000000',
                strokeThickness: 3,
            });

            i = 0;
        }

    }, 500);
}

function hideDoubleToAndTakeOrRiskTexts() {
    doubleToText.visible = false;
    takeOrRiskText.visible = false;
    clearInterval(timerTitleAmin);
}

function updateTotalWin(game, dwin, step){
    //обновление totalWin в игре с картами

    linesScore.visible = false;
    riskStep.visible = false;

    linesScore = game.add.text(scorePosions[1][0], scorePosions[1][1], dwin, {
        font: scorePosions[1][2]+'px "TeX Gyre Schola Bold"',
        fill: '#fff567',
        stroke: '#000000',
        strokeThickness: 3,
    });

    riskStep = game.add.text(scorePosions[3][0], scorePosions[3][1], step, {
        font: scorePosions[3][2]+'px "TeX Gyre Schola Bold"',
        fill: '#fff567',
        stroke: '#000000',
        strokeThickness: 3,
    });
}

//переменные содержащие объекты карт
var card1; var card2; var card3; var card4; var card5; //card1 - карта диллера
var cardArray = [card1, card2, card3, card4, card5];

//var cardPosition = [[x,y], [x,y], [x,y], [x,y], [x,y]]  - нулевой элемент массива карта диллера
var openCard; //звуки
var winCard;
function addCards(game, cardPosition) {
    if(!isMobile) {
        openCard = game.add.audio("openCard");
        winCard = game.add.audio("winCard");

        card1 = game.add.sprite(cardPosition[0][0],cardPosition[0][1], 'card_bg');
        card2 = game.add.sprite(cardPosition[1][0],cardPosition[1][1], 'card_bg');
        card3 = game.add.sprite(cardPosition[2][0],cardPosition[2][1], 'card_bg');
        card4 = game.add.sprite(cardPosition[3][0],cardPosition[3][1], 'card_bg');
        card5 = game.add.sprite(cardPosition[4][0],cardPosition[4][1], 'card_bg');

        cardArray[0] = card1;
        cardArray[1] = card2;
        cardArray[2] = card3;
        cardArray[3] = card4;
        cardArray[4] = card5;
    } else {
        openCard = game.add.audio("openCard");
        winCard = game.add.audio("winCard");

        card1 = game.add.sprite(cardPosition[0][0],cardPosition[0][1], 'card_bg');
        card2 = game.add.sprite(cardPosition[1][0],cardPosition[1][1], 'card_bg');
        card3 = game.add.sprite(cardPosition[2][0],cardPosition[2][1], 'card_bg');
        card4 = game.add.sprite(cardPosition[3][0],cardPosition[3][1], 'card_bg');
        card5 = game.add.sprite(cardPosition[4][0],cardPosition[4][1], 'card_bg');

        card2.inputEnabled = true;
        card2.events.onInputDown.add(function(){
            requestDouble(gamename, 1, lines, bet, sid);
        });
        card3.inputEnabled = true;
        card3.events.onInputDown.add(function(){
            requestDouble(gamename, 2, lines, bet, sid);
        });
        card4.inputEnabled = true;
        card4.events.onInputDown.add(function(){
            requestDouble(gamename, 3, lines, bet, sid);
        });
        card5.inputEnabled = true;
        card5.events.onInputDown.add(function(){
            requestDouble(gamename, 4, lines, bet, sid);
        });

        cardArray[0] = card1;
        cardArray[1] = card2;
        cardArray[2] = card3;
        cardArray[3] = card4;
        cardArray[4] = card5;
    }
}

function openDCard(dcard) {
    lockDisplay();
    setTimeout("card1.loadTexture('card_'+dcard); openCard.play(); unlockDisplay();", 1000);
}

var selectedCardValue; //значение карты выбранной игроком
function openSelectedCard(selectedCardR, valuesOfAllCards) {
    openCard.play();
    cardArray[selectedCardR].loadTexture("card_"+valuesOfAllCards[selectedCardR]);
}

var valuesOfAllCards; // значения остальных карт [,,,,]
function openAllCards(valuesOfAllCards) {
    openCard.play();
    cardArray.forEach(function (item, i) {
        item.loadTexture('card_'+valuesOfAllCards[i]);
    });
}

function hideAllCards(cardArray) {
    cardArray.forEach(function (item, i) {
        item.loadTexture('card_bg');
    });
}


function disableInputCards() {
    card2.inputEnabled = false;
    card3.inputEnabled = false;
    card4.inputEnabled = false;
    card5.inputEnabled = false;
}

function enableInputCards() {
    card2.inputEnabled = true;
    card3.inputEnabled = true;
    card4.inputEnabled = true;
    card5.inputEnabled = true;
}


//функции для игры с последовательным выбором (веревки, ящики, бочки и т.д.)

// отображает результат выбора веревки (подлетает цифра и пересчитвается значение totalWin)





//функции для игры с выбором из двух вариантов



//функции для мобильной версии

var startButton; var double; var bet1; var dollar; var gear; var home;

//выбор множителя в меню bet
var denomination = 1;
function selectDenomination(el) {
    denomination = el.innerText;

    document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;

    var selectedElement = document.getElementsByClassName('denomSize selected');
    selectedElement[0].className = 'denomSize';

    el.className = 'denomSize selected';
}

//выставление максимального значения ставки на линию
function maxBetlineForBetMenu() {
    maxBetline();
    document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
    document.getElementsByClassName('checkCssTopBetLineRange')[0].style.top = '34.5%';
    document.querySelectorAll('.checkCssTopBetLineRange')[0].querySelectorAll('.selected')[0].classList.remove('selected');
    document.getElementById('cellBetLine25').classList.add('selected');
}
var cursorAnimSprite = null;
function animCursor() {
    if (cursorAnimSprite !== null){
        cursorAnimSprite.visible = false;
    }
    cursorAnimSprite = game.add.sprite(game.input.x, game.input.y, 'cursor_anim');
    cursorAnimSprite.anchor.setTo(0.5, 0.5);
    cursorAnimSprite.animations.add('cursor_anim', [0,1,2,3,4], 15, false).play().onComplete.add(function(){
        cursorAnimSprite.visible = false;
    });
}
function spinMob(){

}

function stopWinAnimFun() {
    stopWinAnim = true;
    hideLines();
    hideFlashNunbers();
}
function hideFlashNunbers(){
    game1.flashLineNumber.forEach(function (lineNumber) {
        lineNumber.visible = false;
    });
}
function hideScattersAnim(){
    for (var i = 1; i <= 15; ++i) {
        game1.scattersCell[i].visible = false;
    }
}
var scattersCount = 0;
var spinTime3 = 600;
var spinTime4 = 800;
var spinTime5 = 1000;
var g1s = false;
var g1e = false;
var g2s = false;
var g2e = false;
var g3s = false;
var g3e = false;
function startspin(number){
    game.add.tween(game1.cell[1+number*3]).to({y:game1.cell[1+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
        game1.cell[1+number*3].visible = false;
    });
    game.add.tween(game1.cell[2+number*3]).to({y:game1.cell[2+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
        game1.cell[2+number*3].visible = false;
    });
    game.add.tween(game1.cell[3+number*3]).to({y:game1.cell[3+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
        game1.cell[3+number*3].visible = false;
        game1.bars[number].visible = true;
        if (number == 0){
            game1.spinStatus1 = true;
        }
        if (number == 1){
            game1.spinStatus2 = true;
        }
        if (number == 2){
            game1.spinStatus3 = true;
        }
        if (number == 3){
            game1.spinStatus4 = true;
        }
        if (number == 4){            
            game1.spinStatus5 = true;
            timeSpin = true;
            if (g2e === true & g1e === false){                      
                g1e = true;
                g2s = true;
                g2e = true;
            } else if (g1e === false & g2e === false){
                g1s = true;
                g1e = true;
            } else if (g1e === true){
                g2s = true;
                g2e = true;
            }
        }
    });

};
function middlespin(number){
    if (number == 0){
        if (info[0] === 2 || info[1] === 2 || info[2] === 2){
            scattersCount = scattersCount + 1;
        }                   
        setTimeout(function() {
            if (timeSpin){
                if ((g1e === true & g1s === true) ||(g1s === false & g2e === true & g2s === true)){
                    game1.spinStatus1 = false;
                    game1.bars[0].visible = false;
                    game1.cell[1+3*0].visible = true;
                    game1.cell[2+3*0].visible = true;
                    game1.cell[3+3*0].visible = true;

                    game1.cell[1].loadTexture('cell'+info[0]);
                    game1.cell[2].loadTexture('cell'+info[1]);
                    game1.cell[3].loadTexture('cell'+info[2]);

                    if (info[0] == 2 || info[1] == 2 || info[2] == 2){
                        cock_slot.play();
                    } else{            
                        if (freespinStatus) {
                            fihishSpinBarFsgSound.play();
                        }    else {                
                            fihishSpinBarSound.play();
                        }                 
                    }
                    endspin(number);
                }
            }
        }, 200);
    }
    if (number == 1){
        if (info[3] === 2 || info[4] === 2 || info[5] === 2){
            scattersCount = scattersCount + 1;
            if(scattersCount === 2){
                scattersTime(2);
            }
        }
        setTimeout(function() {
         if (timeSpin){
            if ((g1e === true & g1s === true) ||(g1e === false & g2e === true & g2s === true)){
                game1.spinStatus2 = false;
                game1.bars[0].visible = false;
                game1.bars[1].visible = false;
                game1.cell[1+3*0].visible = true;
                game1.cell[2+3*0].visible = true;
                game1.cell[3+3*0].visible = true;

                game1.cell[1].loadTexture('cell'+info[0]);
                game1.cell[2].loadTexture('cell'+info[1]);
                game1.cell[3].loadTexture('cell'+info[2]);
                game1.cell[1+3*1].visible = true;
                game1.cell[2+3*1].visible = true;
                game1.cell[3+3*1].visible = true;

                game1.cell[4].loadTexture('cell'+info[3]);
                game1.cell[5].loadTexture('cell'+info[4]);
                game1.cell[6].loadTexture('cell'+info[5]);
                if (info[3] === 2 || info[4] === 2 || info[5] === 2){
                    cock_slot.play();
                } else{                                 
                 if (freespinStatus) {
                    fihishSpinBarFsgSound.play();
                }    else {                
                    fihishSpinBarSound.play();
                } 
            }
            endspin(number);
        }
    }
}, 400);
    }
    if (number == 2){
        if (info[6] === 2 || info[7] === 2 || info[8] === 2){
            scattersCount = scattersCount +1;
            if(scattersCount === 2){
                scattersTime(3);
            }
        }
        setTimeout(function() {
         if (timeSpin){
            if ((g1e === true & g1s === true) ||(g1e === false & g2e === true & g2s === true)){
                game1.spinStatus3 = false;
                game1.bars[0].visible = false;
                game1.bars[1].visible = false;
                game1.bars[2].visible = false;
                game1.cell[1+3*0].visible = true;
                game1.cell[2+3*0].visible = true;
                game1.cell[3+3*0].visible = true;

                game1.cell[1].loadTexture('cell'+info[0]);
                game1.cell[2].loadTexture('cell'+info[1]);
                game1.cell[3].loadTexture('cell'+info[2]);
                game1.cell[1+3*1].visible = true;
                game1.cell[2+3*1].visible = true;
                game1.cell[3+3*1].visible = true;

                game1.cell[4].loadTexture('cell'+info[3]);
                game1.cell[5].loadTexture('cell'+info[4]);
                game1.cell[6].loadTexture('cell'+info[5]);
                game1.cell[1+3*2].visible = true;
                game1.cell[2+3*2].visible = true;
                game1.cell[3+3*2].visible = true;

                game1.cell[7].loadTexture('cell'+info[6]);
                game1.cell[8].loadTexture('cell'+info[7]);
                game1.cell[9].loadTexture('cell'+info[8]);
                if (info[6] === 2 || info[7] === 2 || info[8] === 2){
                    cock_slot.play();
                } else{                                 
                  if (freespinStatus) {
                    fihishSpinBarFsgSound.play();
                }    else {                
                    fihishSpinBarSound.play();
                } 
            }
            endspin(number);
        }
    }
}, spinTime3);
    }
    if (number == 3){
        if (info[9] === 2 || info[10] === 2 || info[11] === 2){
            scattersCount = scattersCount +1;
            if(scattersCount === 2){
                scattersTime(4);
            }
        }
        setTimeout(function() {
            if (timeSpin){
                if ((g1e === true & g1s === true) ||(g1e === false & g2e === true & g2s === true)){
                    game1.spinStatus4 = false;
                    game1.bars[0].visible = false;
                    game1.bars[1].visible = false;
                    game1.bars[2].visible = false;
                    game1.bars[3].visible = false;
                    game1.cell[1+3*0].visible = true;
                    game1.cell[2+3*0].visible = true;
                    game1.cell[3+3*0].visible = true;

                    game1.cell[1].loadTexture('cell'+info[0]);
                    game1.cell[2].loadTexture('cell'+info[1]);
                    game1.cell[3].loadTexture('cell'+info[2]);
                    game1.cell[1+3*1].visible = true;
                    game1.cell[2+3*1].visible = true;
                    game1.cell[3+3*1].visible = true;

                    game1.cell[4].loadTexture('cell'+info[3]);
                    game1.cell[5].loadTexture('cell'+info[4]);
                    game1.cell[6].loadTexture('cell'+info[5]);
                    game1.cell[1+3*2].visible = true;
                    game1.cell[2+3*2].visible = true;
                    game1.cell[3+3*2].visible = true;

                    game1.cell[7].loadTexture('cell'+info[6]);
                    game1.cell[8].loadTexture('cell'+info[7]);
                    game1.cell[9].loadTexture('cell'+info[8]);
                    game1.cell[1+3*3].visible = true;
                    game1.cell[2+3*3].visible = true;
                    game1.cell[3+3*3].visible = true;

                    game1.cell[10].loadTexture('cell'+info[9]);
                    game1.cell[11].loadTexture('cell'+info[10]);
                    game1.cell[12].loadTexture('cell'+info[11]);
                    if (info[9] == 2 || info[10] == 2 || info[11] == 2){                        
                        cock_slot.play();
                    } else{                                 
                        if (freespinStatus) {
                            fihishSpinBarFsgSound.play();
                        }    else {                
                            fihishSpinBarSound.play();
                        } 
                    }
                    endspin(number);
                }
            }
        }, spinTime4);
    }
    if (number == 4){
        setTimeout(function() {
           if (timeSpin){
            if ((g1e === true & g1s === true) ||(g1e === false & g2e === true & g2s === true)){
                if (g1e === true){
                    g1s = false;
                } else {
                    g2s = false;
                }
                game1.spinStatus5 = false;
                game1.bars[0].visible = false;
                game1.bars[1].visible = false;
                game1.bars[2].visible = false;
                game1.bars[3].visible = false;
                game1.bars[4].visible = false;
                game1.cell[1+3*4].visible = true;
                game1.cell[2+3*4].visible = true;
                game1.cell[3+3*4].visible = true;

                game1.cell[13].loadTexture('cell'+info[12]);
                game1.cell[14].loadTexture('cell'+info[13]);
                game1.cell[15].loadTexture('cell'+info[14]);
                if (info[12] == 2 || info[13] == 2 || info[14] == 2){                       
                    cock_slot.play();
                } else{                                 
                    if (freespinStatus) {
                        fihishSpinBarFsgSound.play();
                    }    else {                
                        fihishSpinBarSound.play();
                    } 
                }
                endspin(number);
            }
        }
        if (g1e === true){
            g1e = false;
        } else {
            g2e = false;
        }
    }, spinTime5);
    }
}
function endspin(number){
    game1.cell[1+number*3].position.y = 210+30;
    game1.cell[2+number*3].position.y = 380+30;
    game1.cell[3+number*3].position.y = 550+30;
    if (number == 4){
        timeSpin = false;
        drumrollSound.stop();
    }
    game.add.tween(game1.cell[1+number*3]).to({y:game1.cell[1+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
    });
    game.add.tween(game1.cell[2+number*3]).to({y:game1.cell[2+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
    });
    game.add.tween(game1.cell[3+number*3]).to({y:game1.cell[3+number*3].position.y-30}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){

        if (number == 4){            
            spinTime3 = 600;
            spinTime4 = 800;
            spinTime5 = 1000;
            for (var i = 1; i <= 15; ++i) {
                game1.cell[i].visible = true;
                game1.cell[i].loadTexture('cell'+info[i-1]);
            }
            game1.bars[0].visible = false;
            game1.bars[1].visible = false;
            game1.bars[2].visible = false;
            game1.bars[3].visible = false;
            game1.bars[4].visible = false;
            if (!freespinStatus){                       
                justText.visible = false;
                justText.setText('Good Luck');
            }
            if (jackpot !== 0 & jackpot !== false){ 
                hideButtons();                
                justText.visible = true;
                justText.setText('YOU WON THE RANDOM JACKPOT FEATURE');
                jackpotSound.play();
                jackpot_label.visible = true;                       
                game.add.tween(jackpot_label.scale).to({x: 1, y: 1}, 500, Phaser.Easing.LINEAR, true);
                hideVisibleButtons();
                setTimeout(function() {
                    autostart = false;
                    $("#spin").removeClass('auto');
                    game1.spinStatus = false;
                    game.state.start('game2');
                }, 3500);
            } else if (ropeValues !== null & ropeValues !== false){
                game1.spinStatus = false;
                hideButtons();
                justText.visible = true;
                justText.setText('A Pleasing Result');
                freespin_label.visible = true;
                game.add.tween(freespin_label.scale).to({x: 1, y: 1}, 500, Phaser.Easing.LINEAR, true);
                hideVisibleButtons();
                winCock();
            } else {
                game1.spinStatus = false;
                checkWin();
            }
        }
    });
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
            var errorText = '//ошибка 30';
            console.log(errorText);

            setTimeout("reconnectSpin(gamename, sessionName, betline, lines)", 100);
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
            setTimeout("reconnectSpin()", 100);
        }
    });
}

var copyInfo =[];
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
        jackpot = dataArray['jackpot'];
        jackpots = dataArray['jackpotData'];
        jackpots = [jackpots["MINI"]/100,jackpots["MINOR"]/100,jackpots["MAJOR"]/100,jackpots["BIG DADDY"]/100];
        allWin = dataArray['allWin'];        
        if (ropeValues !== null & ropeValues !== false){
            allWin = ropeValues['allWin']
            mulFreespin = ropeValues['mul'];
            copyInfo = dataArray['info'];
        }
        if (jackpot !== null & jackpot !== false){
            nextJAckpot = jackpot['nextData'];
            jackpot = jackpot['result']
            jackpotArr = dataArray['jackpot'];
        }
        dcard = dataArray['dcard'];
        dcardOld = dataArray['dcard'];
        if (realSpinStatus){
            credit.setText(balance);
            creditDol.setText('$'+ (balance/100).toFixed(2));
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

var allwinUpd = 0;
var allWin = 0;
var maxFreespin;
var freespinTriggered = false;
function scattersTime(secondScatters){
    if (freespinStatus){
        spinTime3 = 600;
        spinTime4 = 800;
        spinTime5 = 1000;
    } else{
        switch (secondScatters) {
            case 2:
            spinTime3 = 2700;
            spinTime4 = 3700;
            spinTime5 = 4700;
            setTimeout(function() {
                if (g1s){                    
                    drumrollSound.play();
                }
            }, 800);
            break;
            case 3:
            spinTime3 = 600;
            spinTime4 = 2900;
            spinTime5 = 3900;
            setTimeout(function() {
                if (g1s){                    
                    drumrollSound.play();
                }
            }, 1000);
            break;
            case 4:
            spinTime3 = 600;
            spinTime4 = 800;
            spinTime5 = 3100;
            setTimeout(function() {
                if (g1s){                    
                    drumrollSound.play();
                }
            }, 1200);
            break;
        } 
    }
}
function freeSpinStart(){
    if (stopWinAnim === false){
        stopWinAnimFun();
    }
    stepFlesh = 0;
    lineflash = 0;
    game1.winStatus = false;
    game1.flickStatus = false;
    hideScattersAnim();
    for (var i = 1; i <= 15; ++i) {
        game1.cell[i].scale.x = 1;
        game1.cell[i].scale.y = 1;
        game1.cell[i].visible = true;
        game1.copyCell[i].visible = false;
    }
    freeSpinCount = freeSpinCount + 1;

    justText.setText('FREEGAME '+ freeSpinCount +' OF '+ maxFreespin);
    freespinText.setText('FREE SPIN '+ freeSpinCount +' OF '+ maxFreespin);
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
}

var wlWinValuesArray = [];
var wcvWinValuesArray = [];
function checkWin(){
    wlWinValuesArray = [];
    wcvWinValuesArray = []; 
    for (var i = 1; i <= 15; ++i) {
        game1.copyCell[i].loadTexture('cell'+info[i-1]);
    }

    for (key in wlValues) {
        if(wlValues[key] > 0) {
            wlWinValuesArray.push(+(key));
        }
    }
    for (key in winCellInfo) {
        if(winCellInfo[key] !== false) {
            wcvWinValuesArray.push(+(key));
            game1.copyCell[+(key)+1].visible = true;
            game1.cell[+(key)+1].visible = false;
            animWinSlot(+(key)+1)
        }
    }
    if (wlWinValuesArray.length > 0){
        game1.winStatus = true;
        stopWinAnim = false;
        showWin(wlWinValuesArray, wcvWinValuesArray);       
        if (winBonusSymbolsData[0] > 0){
            showWinScatters();
        }
        if (!freespinStatus){
            if(autostart == false){
                showButtons();
            } else{
                showButtons([[double, 'double']]);
            }
            if ((balance + allWin) < betline*lines){
                autostart = false;
                $("#spin").removeClass('auto');
                showButtons();
                hideButtons([[startButton, 'startButton']]);
                hideButtons([[auto_play, 'auto_play']]);
                auto_play.loadTexture('auto_play'); 
                if ((balance + allWin) === 0){
                    showButtons([[auto_play, 'auto_play']]);
                    auto_play.loadTexture('Addcredit'); 
                }
                hideMobileBtn();
            } else {
                if(autostart == false){
                    showButtons([[startButton, 'startButton']]);
                    showButtons([[auto_play, 'auto_play']]);
                    showMobileBtn()
                }
            }
            justText.visible = true;
            var randomText = randomNumber(0,2)
            switch (randomText) {
                case 0:
                justText.setText('Nice Win');   
                break;
                case 1:
                justText.setText('A Good Result');  
                break;
                case 2:
                justText.setText('Congratulations!');   
                break;
            }

        }   
        updateBalance();
    } else if (winBonusSymbolsData[0] > 0){
        game1.winStatus = true;
        showWinScatters();
        if (!freespinStatus){
            if(autostart == false){
                showButtons();
            } else{
                showButtons([[double, 'double']]);
            }
            if ((balance + allWin) < betline*lines){
                autostart = false;
                $("#spin").removeClass('auto');
                showButtons();
                hideButtons([[startButton, 'startButton']]);
                hideButtons([[auto_play, 'auto_play']]);
                auto_play.loadTexture('auto_play'); 
                if ((balance + allWin) === 0){
                    showButtons([[auto_play, 'auto_play']]);
                    auto_play.loadTexture('Addcredit'); 
                }
                hideMobileBtn();
            } else {
                if(autostart == false){
                    showButtons([[startButton, 'startButton']]);
                    showButtons([[auto_play, 'auto_play']]);
                    showMobileBtn()
                }
            }
            justText.visible = true;
            var randomText = randomNumber(0,2)
            switch (randomText) {
                case 0:
                justText.setText('Nice Win');   
                break;
                case 1:
                justText.setText('A Good Result');  
                break;
                case 2:
                justText.setText('Congratulations!');   
                break;
            }
        }
        updateBalance();
    } else if ((freespinStatus) & (freeSpinCount < maxFreespin)){
        setTimeout(function() {
            freeSpinStart();
        }, 500);
    } else if (freeSpinCount == maxFreespin){
        freeSpinCount = 0;
        justText.visible = true;
        justText.setText('Feature Complete');
        сhicken_song.destroy();
        setTimeout(function() {
            freespinStatus = false;
            game1.flickStatus = false
            game.state.start('game4');
        }, 1000);
    } else{
        justText.visible = true;
        var randomText = randomNumber(0,1);
        switch (randomText) {
            case 0:
            justText.setText('');   
            break;
            case 1:
            justText.setText('Better Luck Next Time');  
            break;
        }
        if(autostart == false){
            showButtons();
        }
        if ((balance + allWin) < betline*lines){
            autostart = false;
            $("#spin").removeClass('auto');
            showButtons();
            hideButtons([[startButton, 'startButton']]);
            hideButtons([[auto_play, 'auto_play']]);
            auto_play.loadTexture('auto_play'); 
            if ((balance + allWin) === 0){
                showButtons([[auto_play, 'auto_play']]);
                auto_play.loadTexture('Addcredit'); 
            }
            hideMobileBtn();
        } else {
            if(autostart == false){
                showButtons([[startButton, 'startButton']]);
                showButtons([[auto_play, 'auto_play']]);
                showMobileBtn()
            }
        }
        if(autostart == true){
         setTimeout(function() {
            if(autostart == true & game1.spinStatus === false){
                startAuto();
            }
        }, 1000);
     }
 }
} 
var autostart = false; var checkAutoStart = false;
function startAuto(){
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
    if(autostart === true){
        showButtons([[auto_play, 'auto_play']]);
        showMobileBtn();
    }
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
}

function showWinScatters(){
    for (key in info) {
        if(info[key] == 2) {
            game1.scattersCell[+(key)+1].visible = true;
        }
    }
}
function showWin(wlWinValuesArray, wcvWinValuesArray){
    recursiveWinLine();
}
var lineflash = 0;
var stepFlesh = 0;
function recursiveWinLine() {
    if (stopWinAnim == true){
        return;
    }
    game1.flickStatus = true;
    showLine(wlWinValuesArray[lineflash]);
    flickLineNumber(wlWinValuesArray[lineflash])

}


var winScatters = [];        
function winCock(){
    freespinTriggered = true;
    game1.winStatus = true;
    for (key in info) {
        if(info[key] == 2) {
            winScatters.push(+(key));
            animWinCock(+(key)+1)
        }
    }
    if(!repeatGame){
        updateBalance();
    }
    justText.visible = true;
    justText.setText('A pleasing Result');
    cock_win.play();
    setTimeout(function() {
        game1.spinStatus = false;
        game1.flickStatus = false;
        repeatGame = false;
        autostart = false;
        $("#spin").removeClass('auto');
        game.state.start('game3');
    }, 5000);
}
function hideCockAnim(){
    for (var i = 1; i <= 15; ++i) {
        game1.cockAnimArray[i].visible = false;
    }
}
var stepBalance = 0;
var arrBalance = [];
var numberSearch = 0;
var arrAllWinOld  = [0,0,0,0,0,0,0,0];
function updateBalance(){       
    var x = 0;
    var y = 1;
    var z = 1;
    var interval;
    allwinUpd = allWin;
    moneySound.play();
    stepBalance = LengthOfNum(allwinUpd);
    arrBalance = DigitsOfNum(allwinUpd);
    (function() {
        if (x < allwinUpd) {
            if (z <= stepBalance) {
                if (arrBalance[z] === 0){
                    numberSearch = arrBalance[z-1]-1;
                    if (numberSearch < 0){
                        numberSearch = numberSearch + 10;
                    }
                } else if (arrBalance[z] + arrAllWinOld[8-stepBalance+z] > 9){
                    numberSearch = arrBalance[z-1];
                } else {
                    numberSearch = arrBalance[z-1];
                    if (arrBalance[z-1] + arrAllWinOld[8-stepBalance+z-1] === 10){
                        numberSearch = 10;
                    }
                    if (numberSearch <= 0){
                        numberSearch = numberSearch + 10;
                    }
                }
                if (numberSearch > 0){      
                    if (y <= numberSearch) {
                        x = x + 1*Math.pow(10, stepBalance-z);
                        if (game1.winStatus === false){
                            return;
                        }
                        winScore.setText(allWinOld + x);
                        winDol.setText('$'+((allWinOld + x)/100).toFixed(2));
                        y++;
                        if (curGame !== 5){                            
                            setTimeout(arguments.callee, 100);
                        }
                    } else {
                        y = 1;
                        z++;
                        if (curGame !== 5){  
                            setTimeout(arguments.callee, 1);
                        }
                    }
                } else if(numberSearch === 0){
                    y = 1;
                    z++;
                    if (curGame !== 5){  
                        setTimeout(arguments.callee, 1);
                    }
                }
            }

        } else {
            if (game1.winStatus === false){
                return;
            }
            winScore.setText(allWinOld+allwinUpd);
            winDol.setText('$'+((allWinOld+allwinUpd)/100).toFixed(2));                 
            allWinOld = allWinOld + allwinUpd;
            arrAllWinOld = DigitsOfNumAllWin(allWinOld);
            if (freespinStatus){
                if (freeSpinCount < maxFreespin){
                    setTimeout(function() {
                        freeSpinStart();
                    }, 500);
                } else if (freeSpinCount == maxFreespin){
                    freeSpinCount = 0;
                    justText.visible = true;
                    justText.setText('Feature Complete');
                    сhicken_song.destroy();
                    setTimeout(function() {
                        freespinStatus = false;
                        game1.flickStatus = false;
                        game.state.start('game4');
                    }, 1000);
                } 
            } else{
                if (!freespinTriggered){
                    if(autostart == false){
                        showButtons();
                    }
                    if ((balance + allWin) < betline*lines){
                        autostart = false;
                        $("#spin").removeClass('auto');
                        showButtons();
                        hideButtons([[startButton, 'startButton']]);
                        hideButtons([[auto_play, 'auto_play']]);
                        auto_play.loadTexture('auto_play'); 
                        if ((balance + allWin) === 0){
                            showButtons([[auto_play, 'auto_play']]);
                            auto_play.loadTexture('Addcredit'); 
                        }
                        hideMobileBtn();
                    } else {
                        if(autostart == false){
                            showButtons([[startButton, 'startButton']]);
                            showButtons([[auto_play, 'auto_play']]);
                            showMobileBtn()
                        }
                    }
                    if(autostart == true){
                     setTimeout(function() {
                        if(autostart == true & game1.spinStatus === false){
                            startAuto();
                        }
                    }, 1000);
                 }
             } else {
                allWinBeforeFreespin = allwinUpd;
                freespinTriggered = false;
            }
        }
    }
})();
}
function giveBalance(){
    var x = 0;
    var interval;
    credit.setText((balance + allWinOld));
    creditDol.setText('$'+((balance + allWinOld)/100).toFixed(2));
    winScore.setText(0);
    winDol.setText('$'+(0).toFixed(2)); 
    allBalance = balance + allWinOld;
    (function() {
        if (x < allBalance) {
            interval = 1000/10;
            if (allBalance > 5000){
                x += 500;
            } else if (allBalance > 2000){
                x += 250;
            } else if (allBalance > 1000){
                x += 150;
            } else if (allBalance > 500){
                x += 100;
            } else if (allBalance > 300){
                x += 50;
            } else if (allBalance > 200){
                x += 30;
            } else if (allBalance > 50){
                x += 20;
            } else {
                x += 10;
            }
            credit.setText(allBalance - x);
            creditDol.setText('$'+((allBalance - x)/100).toFixed(2));
            if (x > allBalance){
             credit.setText(0);
             creditDol.setText('$'+(0).toFixed(2));  
         }
         setTimeout(arguments.callee, interval);
     } else {
        credit.setText(0);
        creditDol.setText('$'+(0).toFixed(2));      
        // setTimeout(function() {
        //     location.href = '/';
        // }, 1000);          
    }
})();
}
function LengthOfNum(n){                                 
    var count=0;

    do {n /= 10; count++} while (n >= 1);   

    return count;
}

function DigitsOfNum(n){                                 
    var A = [], k = 0;

    while (n >= 1){ A[k++] = (n-n%1)%10; n /= 10; }

    for (var i = 0; i < k/2; i++)                  
        { var t = A[i]; A[i] = A[k-1-i]; A[k-1-i] = t; }

    return A;
}
function DigitsOfNumAllWin(n){
    var A = [], k = 0;
    for (var i = 7; i >= 0; i--) {
        A[i] = (n-n%1)%10;
        n /= 10;
    }
    return A;
}
function animWinCock(value){
    if (game1.spinStatus === true){
        return;
    }
    game1.cockAnimArray[value].visible = true;
}
function animWinSlot(value){

    if (game1.spinStatus === true){
        return;
    }
    game.add.tween(game1.copyCell[value].scale).to({x: 0.5, y: 0.5}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
        if (game1.spinStatus === true){
            for (var i = 1; i <= 15; ++i) {
                game1.copyCell[i].scale.x = 1;
                game1.copyCell[i].scale.y = 1;
            }
            return;
        }
        game.add.tween(game1.copyCell[value].scale).to({x: 1, y: 1}, 200, Phaser.Easing.LINEAR, true).onComplete.add(function(){
            if (game1.spinStatus === true){
                return;
            }
            animWinSlot(value);
        });
    });
}
function flickLineNumber(lineNumber){
    game1.flashLineNumber[lineNumber].visible = true;
    if (lineNumber === 1){
        game1.flashLineNumber[111].visible = true;
    }
    setTimeout(function() {
        if (game1.flickStatus === false){
            return;
        }
        game1.flashLineNumber[lineNumber].visible = false;
        if (lineNumber === 1){
            game1.flashLineNumber[111].visible = false;
        }
        setTimeout(function() {
            if (game1.flickStatus === false){
                return;
            }
            game1.flashLineNumber[lineNumber].visible = true;
            if (lineNumber === 1){
                game1.flashLineNumber[111].visible = true;
            }
            setTimeout(function() {
                if (game1.flickStatus === false){
                    return;
                }
                game1.flashLineNumber[lineNumber].visible = false;
                if (lineNumber === 1){
                    game1.flashLineNumber[111].visible = false;
                }
                setTimeout(function() {
                    if (game1.flickStatus === false){
                        return;
                    }
                    game1.flashLineNumber[lineNumber].visible = true;
                    if (lineNumber === 1){
                        game1.flashLineNumber[111].visible = true;
                    }
                    setTimeout(function() {
                        if (game1.flickStatus === false){
                            return;
                        }
                        game1.flashLineNumber[lineNumber].visible = false;
                        if (lineNumber === 1){
                            game1.flashLineNumber[111].visible = false;
                        }
                        setTimeout(function() {
                            if (game1.flickStatus === false){
                                return;
                            }
                            if ((stepFlesh === 0) || (stepFlesh === 2)){
                                hideLines();
                                stepFlesh = stepFlesh +1;
                                flickLineNumber(lineNumber)
                            } else if (stepFlesh === 1){
                                showLine(lineNumber);
                                stepFlesh = stepFlesh +1;
                                flickLineNumber(lineNumber)
                            } else  if (stepFlesh === 3){
                                stepFlesh = 0;
                                if (lineflash === wlWinValuesArray.length - 1){
                                    lineflash = 0;
                                } else {                        
                                    lineflash = lineflash + 1;
                                }
                                recursiveWinLine();
                            }
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 100);
};
addEventListener("keyup", function(event) {
    if (curGame === 1){
        if(spaceStatus){
            if (game1.spinStatus === false){
                if(autostart === false){
                    if (!freespinStatus){
                       if ((balance + allWinOld) >= betline*lines){
                        if (event.keyCode == 32){
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
                            if(autostart === true){
                                showButtons([[auto_play, 'auto_play']]);
                                showMobileBtn();
                            }
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
                        }
                    }
                }
            }
        }
    } else {
        if(autostart === false){
            if (!freespinStatus){
                if (timeSpin){
                    if (g1s === true){
                        g1s = false;
                    } else {
                        g2s = false;
                    }
                    timeSpin = false;
                    game1.bars[0].visible = false;
                    game1.cell[1+3*0].visible = true;
                    game1.cell[2+3*0].visible = true;
                    game1.cell[3+3*0].visible = true;
                    game1.bars[1].visible = false;
                    game1.cell[1+3*1].visible = true;
                    game1.cell[2+3*1].visible = true;
                    game1.cell[3+3*1].visible = true;
                    game1.bars[2].visible = false;
                    game1.cell[1+3*2].visible = true;
                    game1.cell[2+3*2].visible = true;
                    game1.cell[3+3*2].visible = true;

                    game1.bars[3].visible = false;
                    game1.cell[1+3*3].visible = true;
                    game1.cell[2+3*3].visible = true;
                    game1.cell[3+3*3].visible = true;

                    game1.bars[4].visible = false;
                    game1.cell[1+3*4].visible = true;
                    game1.cell[2+3*4].visible = true;
                    game1.cell[3+3*4].visible = true;

                    game1.cell[1].loadTexture('cell'+info[0]);
                    game1.cell[2].loadTexture('cell'+info[1]);
                    game1.cell[3].loadTexture('cell'+info[2]);
                    game1.cell[4].loadTexture('cell'+info[3]);
                    game1.cell[5].loadTexture('cell'+info[4]);
                    game1.cell[6].loadTexture('cell'+info[5]);
                    game1.cell[7].loadTexture('cell'+info[6]);
                    game1.cell[8].loadTexture('cell'+info[7]);
                    game1.cell[9].loadTexture('cell'+info[8]);
                    game1.cell[10].loadTexture('cell'+info[9]);
                    game1.cell[11].loadTexture('cell'+info[10]);
                    game1.cell[12].loadTexture('cell'+info[11]);
                    game1.cell[13].loadTexture('cell'+info[12]);
                    game1.cell[14].loadTexture('cell'+info[13]);
                    game1.cell[15].loadTexture('cell'+info[14]);
                    console.log(game1.spinStatus1)
                    console.log(game1.spinStatus2)
                    console.log(game1.spinStatus3)
                    console.log(game1.spinStatus4)
                    console.log(game1.spinStatus5)
                    if (game1.spinStatus1 === true){
                        game1.spinStatus1 = false;
                        endspin(0);
                    }
                    if (game1.spinStatus2 === true){
                        game1.spinStatus2 = false;
                        endspin(1);
                    }
                    if (game1.spinStatus3 === true){
                        game1.spinStatus3 = false;
                        endspin(2);
                    }
                    if (game1.spinStatus4 === true){
                        game1.spinStatus4 = false;
                        endspin(3);
                    }
                    if (game1.spinStatus5 === true){
                        game1.spinStatus5 = false;
                        endspin(4);
                    }
                    drumrollSound.stop();
                    fihishSpinBarSound.play();
                }
            }
        }
    }
}
});
function checkScore(){
    if ((balance + allWinOld) < betline*lines){
        hideButtons([[startButton, 'startButton']]);
        hideButtons([[auto_play, 'auto_play']]);
        if ((balance + allWin) === 0){
            showButtons([[auto_play, 'auto_play']]);
            auto_play.loadTexture('Addcredit'); 
        }
        hideMobileBtn()
    } else {
        showButtons([[startButton, 'startButton']]);
        showButtons([[auto_play, 'auto_play']]);
        showMobileBtn()
    }
}
function coinAnim(){
    coinArrayLeft = [];
    coinArrayRight = [];
    coins.play();
    hideButtons();
    for (var i = 0; i <= 5; ++i) {
        for (var j = 0; j <= 7; ++j) {
            coinArrayLeft[i] = game.add.sprite(-130+125*i-j*50, -130-j*80, 'coin');
            coinArrayLeft[i].animations.add('coin', animCoinArray[i], 16, true).play();  
            coinGoLeftToRight(coinArrayLeft[i]) 
        }
        for (var j = 0; j <= 7; ++j) {
            coinArrayRight[i] = game.add.sprite(1024-125*i+j*50, -130-j*80, 'coin');
            coinArrayRight[i].animations.add('coin', animCoinArray[i], 16, true).play();   
            coinGoRightToLeft(coinArrayRight[i]);
        }
    }
}
function coinGoRightToLeft(elem){
    game.add.tween(elem).to({x:elem.position.x-900,y:elem.position.y+1530}, 3500, Phaser.Easing.LINEAR, true)
}
function coinGoLeftToRight(elem){
    game.add.tween(elem).to({x:elem.position.x+900,y:elem.position.y+1530}, 3500, Phaser.Easing.LINEAR, true).onComplete.add(function(){
        location.href = '/';
    }); 
}