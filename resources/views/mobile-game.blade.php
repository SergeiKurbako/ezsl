<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{$gameName}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link type="text/css" rel="stylesheet" href="{{asset('games/'.$gameName.'/fonts/font.css')}}" />
    <link rel="stylesheet" href="{{asset('css/mobile.css')}}" />
    <link rel="stylesheet" href="{{asset('games/'.$gameName.'/preloader/main.css')}}" />
    <link type="text/css" rel="stylesheet" href="{{asset('css/font-awesome.min.css')}}" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700" rel="stylesheet" />
    <script type="text/javascript" src="{{asset('js/jquery-3.1.1.js')}}"></script>
    <script src="{{asset('js/phaser.min.js')}}"></script>

    <script type="text/javascript" src="{{asset('js/jquery.maskedinput.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/main.js')}}"></script>

    <script type="text/javascript" src="{{asset('games/'.$gameName.'/detect.js')}}"></script>
<!--     <script type="text/javascript" src="{{asset('games/'.$gameName.'/functions.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game1.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game2.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game3.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game4.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.end.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.begin.js')}}"></script> -->
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/mobile.game.js')}}"></script>



</head>
<body>
    <div id="displayLock" style="display: none; width: 100%; height: 100%; z-index: 9999; position: fixed;" ></div>
    <script>lines = 9; bet = 1;</script>



    <div class="vertScreenWrapper" id="vertScreenWrapper">
        <div class="vertScreen realHeight" id="realHeight">
            <div class="imgWrapper realWidth">
                <div class="vertScreenImg"></div>
            </div>
        </div>
    </div>
    <div class="preloader" id="preloader">
        <div class="correctWidth" style="display: none;">
            <div class="preloaderPopup">
                <div class="barWrapper">
                    <div class="preloaderBar" id="preloaderBar" style="width: 0"></div>
                    <div class="barImg"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="mainWindow betMode soundPopup">
        <div class="correctWidth" style="width: 478px;">
            <div class="smallPopup">
                <div class="popupTitle">Звук в игре</div>
                <div class="popupText">Включить звуки?</div>
                <div class="gray_btn leftPopBtn">Да</div>
                <div class="gray_btn rightPopBtn">Нет</div>
            </div>
        </div>
    </div>
    <div class="mainWindow betMode" style="display: none;" id="betMode">
        <div class="top_panel">
            <div class="correctWidth" style="width: 478px;">
                <div class="home_btn"></div>
                <div class="settings_btn gray_btn"><i></i></div>
                <div class="cash_btn gray_btn"><i></i></div>
            </div>
        </div>
        <div class="bottom_panel">
            <div class="correctWidth" style="width: 478px;">
                <div class="win_line win_panel">
                    <span class="win_center"> Win: <b id="wininfoResult">4</b></span>
                </div>
                <div class="win_line bet_panel" style="display: block;">
                    <span class="betLeft">Bet in coins: <b id="panelTotalBet"><?php echo '<script>lines</script>'; ?></b></span>
                    <span class="betRight">Bet in cash: <b id="panelRealBet"><?php echo '<script>bet</script>'; ?></b></span>
                </div>
                <div class="win_line low_balance" style="display: none;">
                    <span>ВАША СТАВКА СЛИШКОМ ВЫСОКА. ИЗМЕНИТЕ СТАВКУ</span>
                </div>
            </div>
        </div>
        <div class="betWindow" style="display: block;">
            <div class="correctWidth" style="width: 478px;">
                <br>
                <div class="titleBet">Bet size</div><br>
                <div class="betLineTitle">Bet/Line:</div><br>
                <div class="lineWrapper">
                    <div class="visibleZone">
                        <div class="linesRange" style="top: 34.5%;">
                            <div class="betCell selected" id="cellLine9">9</div>
                            <div class="betCell" id="cellLine7">7</div>
                            <div class="betCell" id="cellLine5">5</div>
                            <div class="betCell" id="cellLine3">3</div>
                            <div class="betCell" id="cellLine1">1</div>
                        </div>
                    </div>
                </div>
                <div class="linesBetTitle">Lines Bet:</div><br>
                <div class="betWrapper">
                    <div class="visibleZone">
                        <div class="betRange checkCssTopBetLineRange" style="top: 34.5%;">
                            <div class="betCell selected" id="cellBetLine25">25</div>
                            <div class="betCell" id="cellBetLine20">20</div>
                            <div class="betCell" id="cellBetLine15">15</div>
                            <div class="betCell" id="cellBetLine10">10</div>
                            <div class="betCell" id="cellBetLine5">5</div>
                            <div class="betCell" id="cellBetLine4">4</div>
                            <div class="betCell" id="cellBetLine3">3</div>
                            <div class="betCell" id="cellBetLine2">2</div>
                            <div class="betCell" id="cellBetLine1">1</div>
                            <div class="betCell"></div>
                            <div class="betCell"></div>
                            <div class="betCell"></div>
                            <div class="betCell"></div>
                            <div class="betCell"></div>
                            <div class="betCell"></div>
                        </div>
                    </div>
                </div>
            <!--<div class="betDenomTitle">Denomination:</div><br>
            <div class="denominationRange">
                <div class="denomSize" onclick="selectDenomination(this)">10</div>
                <div class="denomSize selected" onclick="selectDenomination(this);">1</div>
            </div>-->
        </div>
    </div>
    <div class="correctWidth" style="width: 478px;">
        <div class="spin_btn">
            <div class="spin_btn_flash" id="spin"></div>
        </div>
        <div class="double_btn"></div>
        <div class="bet_btn" id="betMaxButton" onclick="maxBetlineForBetMenu()"></div>
        
    </div>
</div>
<div class="tap" id="tap" style="display: none;">
    <div class="correctWidth" style="width: 478px;">
        <div class="hand"></div>
        <div class="handLine"></div>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function(){
        var realWidth = Math.max(
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
            );
        var realHeight = document.documentElement.clientHeight;
        window.visibleCanvas = false;
        //     var onfullscreenchange =  function(e){
        //       var fullscreenEnabled =
        //       document.fullscreenEnabled ||
        //       document.mozFullscreenEnabled ||
        //       document.webkitFullscreenEnabled;
        //       if (!fullscreenEnabled) {
        //         $('.tap').css('display', 'block');
        //         console.log('не полноэкранный режим')
        //     }
        //     console.log('фуллскрин'+ document.webkitFullscreenEnabled);
        // }

        // document.documentElement.addEventListener("webkitfullscreenchange", onfullscreenchange);
        // document.documentElement.addEventListener("mozfullscreenchange",    onfullscreenchange);
        // document.documentElement.addEventListener("fullscreenchange",       onfullscreenchange);



        // console.log(realWidth);
        // console.log(realHeight);
        if (realHeight*1.49375 < realWidth){

            // correctWidth = realHeight*1.2596
            correctWidth = realHeight*1.49375
            $('.correctWidth').css('width', correctWidth + 'px');
            $('.correctWidth').css('display', 'block');
        } else {
            $('.correctWidth').css('width', realWidth + 'px');
            $('.correctWidth').css('display', 'block');
        }
        $('.rightPopBtn, .leftPopBtn').click(function() {
            $('.soundPopup').css('display', 'none');
            if(document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if(document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if(document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen();
            }
            window.visibleCanvas = true;
        });
        $('.rightPopBtn').click(function() {
         game.sound.mute = true;
     });
        /*function BlockMove(event) {
             event.preventDefault() ;
         }*/
         window.addEventListener("touchend", touchUpdate);
         function touchUpdate() {
            if(document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if(document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if(document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen();
            }
        }

        function tapInvisible() {
            if(document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if(document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if(document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen();
            }
            document.getElementById('tap').style.display = 'none';
        }

        document.getElementById('tap').addEventListener("touchend", tapInvisible);
        document.body.addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);

        $('.spin_btn').click(function() {
            bet = lines*betline*denomination;
            updateBetinfo(game, scorePosions, lines, betline);
            document.getElementById('betMode').style.display = 'none';
            $('canvas').css('display', 'block');
        });

    });
</script>
<script>
    document.getElementsByClassName('betCell')[0].addEventListener('DOMAttrModified', function(e){
        alert(betCells[0].innerText);
        if (e.attr('class') == 'betCell selected') {
            alert(betCells[0].innerText);
        }
    }, false);
</script>
<script src="{{asset('js/jquery.event.move.js')}}"></script>
<script src="{{asset('js/jquery.event.swipe.js')}}"></script>
<script type="text/javascript">

    (function(jQuery, undefined) {
        jQuery(document).ready(function() {

            var tapBlock = $('.tap');
            // tapBlock.click(function() {
            //     tapBlock.css('display', 'none');
            //     if(document.documentElement.requestFullScreen) {
            //         document.documentElement.requestFullScreen();
            //     } else if(document.documentElement.mozRequestFullScreen) {
            //         document.documentElement.mozRequestFullScreen();
            //     } else if(document.documentElement.webkitRequestFullScreen) {
            //         document.documentElement.webkitRequestFullScreen();
            //     }
            // });
            // tapBlock
            // .on('swipeup', function(e) {
            //     tapBlock.css('display', 'none');
            //     if(document.documentElement.requestFullScreen) {
            //         document.documentElement.requestFullScreen();
            //     } else if(document.documentElement.mozRequestFullScreen) {
            //         document.documentElement.mozRequestFullScreen();
            //     } else if(document.documentElement.webkitRequestFullScreen) {
            //         document.documentElement.webkitRequestFullScreen();
            //     }
            //     console.log('полноэкранный режим');
            // })
            var betCell = $('.betRange');
            var topLast = 0;
            var selectValue = 34.5;
            var selectBlock = $('.betRange .selected');
            betCell
                    .on('movestart', function(e) {
                        if ((e.distY < e.distX && e.distY > -e.distX) ||
                                (e.distY > e.distX && e.distY < -e.distX)) {
                            e.preventDefault();
                            return;
                        }
                    })
                    .on('move', function(e) {
                        var top = 100 * e.distY /  betCell.parent().height();
                        differenceTop = top - topLast;
                        betCellTop = betCell.position().top;
                        heightVisibleZone = betCell.parent().height();
                        newBetCellTop = (betCellTop / heightVisibleZone * 100) + differenceTop;
                        if (newBetCellTop > 34.5){
                            newBetCellTop = 34.5;
                        }
                        if (newBetCellTop < -222.643){
                            newBetCellTop = -222.643;
                        }

                        betCell.css('top', newBetCellTop + '%');
                        topLast = top;
                        if ((newBetCellTop + (32.143/2)) < selectValue ){
                            selectBlock.removeClass('selected');
                            selectValue = selectValue - 32.143;
                            selectBlock.next().addClass('selected');
                            selectBlock = $('.betRange .selected');
                        }
                        if ((newBetCellTop - (32.143/2)) > selectValue ){
                            selectBlock.removeClass('selected');
                            selectValue = selectValue + 32.143;
                            selectBlock.prev().addClass('selected');
                            selectBlock = $('.betRange .selected');
                        }


                        //>определяем значение ставки на линию (betline)
                        //console.log(betline);
                        if(document.getElementById('cellBetLine25').classList.contains('selected')) {
                            betline = 25;
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
                        }
                        if(document.getElementById('cellBetLine20').classList.contains('selected')) {
                            betline = 20;
                            document.getElementById('panelRealBet').innerHTML = lines*betline;
                        }
                        if(document.getElementById('cellBetLine15').classList.contains('selected')) {
                            betline = 15;
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
                        }
                        if(document.getElementById('cellBetLine10').classList.contains('selected')) {
                            betline = 10;
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
                        }
                        if(document.getElementById('cellBetLine5').classList.contains('selected')) {
                            betline = 5;
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
                        }
                        if(document.getElementById('cellBetLine4').classList.contains('selected')) {
                            betline = 4;
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
                        }
                        if(document.getElementById('cellBetLine3').classList.contains('selected')) {
                            betline = 3;
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
                        }
                        if(document.getElementById('cellBetLine2').classList.contains('selected')) {
                            betline = 2;
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
                        }
                        if(document.getElementById('cellBetLine1').classList.contains('selected')) {
                            betline = 1;
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;
                        }
                        //<

                    })
                    .on('moveend', function(e) {
                        topLast = 0;
                        betCell.css('top', selectValue + '%');
                    });


            var lineCell = $('.linesRange');
            var topLastline = 0;
            var selectValueline = 34.5;
            var selectBlockline = $('.linesRange .selected');
            lineCell
                    .on('movestart', function(e) {
                        if ((e.distY < e.distX && e.distY > -e.distX) ||
                                (e.distY > e.distX && e.distY < -e.distX)) {
                            e.preventDefault();
                            return;
                        }
                    })
                    .on('move', function(e) {
                        var top = 100 * e.distY /  lineCell.parent().height();
                        differenceTopline = top - topLastline;
                        lineCellTop = lineCell.position().top;
                        heightVisibleZoneline = lineCell.parent().height();
                        newlineCellTop = (lineCellTop / heightVisibleZoneline * 100) + differenceTopline;
                        if (newlineCellTop > 34.5){
                            newlineCellTop = 34.5;
                        }
                        if (newlineCellTop < -94.0714){
                            newlineCellTop = -94.0714;
                        }

                        lineCell.css('top', newlineCellTop + '%');
                        topLastline = top;
                        if ((newlineCellTop + (32.143/2)) < selectValueline ){
                            selectBlockline.removeClass('selected');
                            selectValueline = selectValueline - 32.143;
                            selectBlockline.next().addClass('selected');
                            selectBlockline = $('.linesRange .selected');
                        }
                        if ((newlineCellTop - (32.143/2)) > selectValueline ){
                            selectBlockline.removeClass('selected');
                            selectValueline = selectValueline + 32.143;
                            selectBlockline.prev().addClass('selected');
                            selectBlockline = $('.linesRange .selected');
                        }

                        //>определяем выбранные линии (lines)
                        //console.log(lines);
                        if(document.getElementById('cellLine9').classList.contains('selected')) {
                            lines = 9;
                            document.getElementById('panelTotalBet').innerHTML = '9';
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;

                            hideLines([]);
                            hideNumbers([]);
                            var lineArray = [];
                            for (var i = 0; i <= lines; i++) {
                                if(i != 0) {
                                    lineArray.push(i);
                                }
                            }
                            showNumbers(lineArray);
                            showLines(lineArray);
                        }
                        if(document.getElementById('cellLine7').classList.contains('selected')) {
                            lines = 7;
                            document.getElementById('panelTotalBet').innerHTML = '7';
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;

                            hideLines([]);
                            hideNumbers([]);
                            var lineArray = [];
                            for (var i = 0; i <= lines; i++) {
                                if(i != 0) {
                                    lineArray.push(i);
                                }
                            }
                            showNumbers(lineArray);
                            showLines(lineArray);
                        }
                        if(document.getElementById('cellLine5').classList.contains('selected')) {
                            lines = 5;
                            document.getElementById('panelTotalBet').innerHTML = '5';
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;

                            hideLines([]);
                            hideNumbers([]);
                            var lineArray = [];
                            for (var i = 0; i <= lines; i++) {
                                if(i != 0) {
                                    lineArray.push(i);
                                }
                            }
                            showNumbers(lineArray);
                            showLines(lineArray);
                        }
                        if(document.getElementById('cellLine3').classList.contains('selected')) {
                            lines = 3;
                            document.getElementById('panelTotalBet').innerHTML = '3';
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;

                            hideLines([]);
                            hideNumbers([]);
                            var lineArray = [];
                            for (var i = 0; i <= lines; i++) {
                                if(i != 0) {
                                    lineArray.push(i);
                                }
                            }
                            showNumbers(lineArray);
                            showLines(lineArray);
                        }
                        if(document.getElementById('cellLine1').classList.contains('selected')) {
                            lines = 1;
                            document.getElementById('panelTotalBet').innerHTML = '1';
                            document.getElementById('panelRealBet').innerHTML = lines*betline*denomination;

                            hideLines([]);
                            hideNumbers([]);
                            var lineArray = [];
                            for (var i = 0; i <= lines; i++) {
                                if(i != 0) {
                                    lineArray.push(i);
                                }
                            }
                            showNumbers(lineArray);
                            showLines(lineArray);
                        }


                    })
                    .on('moveend', function(e) {
                        topLastline = 0;
                        lineCell.css('top', selectValueline + '%');
                    });
        });
    })(jQuery);

</script>
<script>
    $(document).ready(function(){
        var HeightNow = document.documentElement.clientHeight;
    document.getElementById('spin').addEventListener('click', function(){
        alert(1);
        document.getElementById('betMode').style.display = 'none';
    }, false);
    function checkWidth() {
        var realWidth = Math.max(
                document.body.offsetWidth, document.documentElement.offsetWidth,
                document.body.clientWidth, document.documentElement.clientWidth
        );
        var realHeight = document.documentElement.clientHeight;
        var realHeightElem = document.getElementById("realHeight");
        var preloadElem = document.getElementById("preloader");
        var imgHeight = Math.round(realWidth * 0.67);
        if ((realWidth > realHeight) && window.visibleCanvas) {
            if (HeightNow > realHeight){
                $('.tap').css('display', 'block');
            }
            HeightNow = realHeight;
        }
        realHeightElem.style.height  = imgHeight + 'px';
        if (realWidth < realHeight) {
            document.getElementById('vertScreenWrapper').style.display = 'block';
            document.getElementById('vertScreenWrapper').style.width = realWidth + 'px';

        } else {
            document.getElementById('vertScreenWrapper').style.display = 'none';
        }
        switch( true ){
            case realHeight < 84:
                document.body.style.fontSize = '1px';
                break;
            case realHeight > 83 && realHeight < 125:
                document.body.style.fontSize = '2px';
                break;
            case realHeight > 124 && realHeight < 168:
                document.body.style.fontSize = '3px';
                break;
            case realHeight > 167 && realHeight < 210:
                document.body.style.fontSize = '4px';
                break;
            case realHeight > 209 && realHeight < 252:
                document.body.style.fontSize = '5px';
                break;
            case realHeight > 251 && realHeight < 294:
                document.body.style.fontSize = '6px';
                break;
            case realHeight > 293 && realHeight < 323:
                document.body.style.fontSize = '7px';
                break;
            case realHeight > 322 && realHeight < 378:
                document.body.style.fontSize = '8px';
                break;
            case realHeight > 377 && realHeight < 451:
                document.body.style.fontSize = '9px';
                break;
            case realHeight > 450 && realHeight < 495:
                document.body.style.fontSize = '10px';
                break;
            case realHeight > 494 && realHeight < 540:
                document.body.style.fontSize = '11px';
                break;
            case realHeight > 539 && realHeight < 585:
                document.body.style.fontSize = '12px';
                break;
            case realHeight > 584 && realHeight < 630:
                document.body.style.fontSize = '13px';
                break;
            case realHeight > 629 && realHeight < 675:
                document.body.style.fontSize = '14px';
                break;
            case realHeight > 674 && realHeight < 720:
                document.body.style.fontSize = '15px';
                break;
            case realHeight > 719 && realHeight < 765:
                document.body.style.fontSize = '16px';
                break;
            case realHeight > 764 && realHeight < 810:
                document.body.style.fontSize = '17px';
                break;
            case realHeight > 809 && realHeight < 855:
                document.body.style.fontSize = '18px';
                break;
            case realHeight > 854 && realHeight < 899:
                document.body.style.fontSize = '19px';
                break;
            case realHeight > 900 && realHeight < 944:
                document.body.style.fontSize = '20px';
                break;
            case realHeight > 943 && realHeight < 990:
                document.body.style.fontSize = '21px';
                break;
            case realHeight > 989 && realHeight < 1034:
                document.body.style.fontSize = '22px';
                break;
            case realHeight > 1033 && realHeight < 1079:
                document.body.style.fontSize = '23px';
                break;
            case realHeight > 1078 :
                document.body.style.fontSize = '24px';
                break;
        };
    }
    $( window ).resize(function() {
        var realHeight = document.documentElement.clientHeight;
        // correctWidth = realHeight*1.2596

        correctWidth = realHeight*1.49375
        $('.correctWidth').css('width', correctWidth + 'px');
        widthVisibleZone = $('.betWrapper .visibleZone').height();
        $('.betCell').css('height', widthVisibleZone*0.32147 + 'px');
    });
    window.addEventListener('resize', checkWidth);
    window.addEventListener('orientationchange', checkWidth);
    checkWidth();
    });
</script>
<div class="fontLoader" style="font-family: 'Bauhaus 93'; position: absolute; left: -1000px;    visibility: hidden;">-</div>
</body>
</html>