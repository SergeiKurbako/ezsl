<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{$gameName}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link type="text/css" rel="stylesheet" href="{{asset('games/'.$gameName.'/fonts/font.css')}}" />
    <link rel="stylesheet" href="{{asset('css/main.css')}}" />
    <link type="text/css" rel="stylesheet" href="{{asset('css/font-awesome.min.css')}}" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700" rel="stylesheet" />
    <script type="text/javascript" src="{{asset('js/jquery-3.1.1.js')}}"></script>
    <script src="{{asset('js/phaser.min.js')}}"></script>

    <script type="text/javascript" src="{{asset('js/jquery.maskedinput.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/main.js')}}"></script>

    <script type="text/javascript" src="{{asset('games/'.$gameName.'/detect.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/functions.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game1.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game2.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game3.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game4.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.end.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.begin.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.begin.js')}}"></script>
</head>
<body>
    <main>
        <section class="games-wrap content">
            <div class="emulat-games" id="game-area">
                <div id="displayLock"></div>
                <div id="preloader">
                    <div class="animation-wrap">
                        <div class="number-wrap">
                            <span id="percent-preload">0</span>
                            <span>%</span>
                        </div>
                        <img src="{{asset('games/'.$gameName.'//img/Animation.gif')}}">
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div class="fontLoader" style="font-family: 'Bauhaus 93'; position: absolute; left: -1000px;    visibility: hidden;">-</div>
</body>
</html>