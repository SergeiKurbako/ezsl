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

    {{--include game--}}
    
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/detect.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/functions.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game1.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game2.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game3.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game4.js')}}"></script>  
	<script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.game5.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.end.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/'.$gameName.'/desktop.begin.js')}}"></script>
</head>
<body>
    <header>
        <div class="content">
            <a class="logo"  href="/" >
                <b>fraer</b>casino
            </a>
            <div class="right-block">
                <div class="account-btn">
                    <a href="" class="btn btn-login">Login</a>
                    <a href="/register" class="btn btn-reg">Register Now</a>
                </div>
                <div class="language_wrap">
                    <a href="" class="modal_lang">
                        <div class="flag_wrap">
                            <i class="flag flag_en"></i>
                            <span class="language_value">EN</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="btn_menu">
                <a href=""></a>
            </div>
        </div>
    </header>
    <nav class="main-nav">
        <div class="main-nav-wrap">
            <ul class="content">
                <li>
                    <a href="" class="active"><span class="icon fa fa-star"></span>Favourites</a>
                </li>
                <li>
                    <a href=""><span class="icon fa fa-star"></span>Slots</a>
                </li>
                <li>
                    <a href=""><span class="icon fa fa-star"></span>Jackpots</a>
                </li>
                <li>
                    <a href=""><span class="icon fa fa-star"></span>Video poker</a>
                </li>
                <li>
                    <a href=""><span class="icon fa fa-star"></span>Table games</a>
                </li>
                <li>
                    <a href=""><span class="icon fa fa-star"></span>Live casino</a>
                </li>
                <li>
                    <a href=""><span class="icon fa fa-star"></span>A-Z</a>
                </li>
                <li>
                    <a href=""><span class="icon fa fa-star"></span>Propotions</a>
                </li>
                <li class="visible-desktop">
                    <a href=""><span class="icon fa fa-star"></span>Search</a>
                </li>
            </ul>
        </div>
    </nav>
    <main>
        @if($gameName == "crazyMonkey2")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "fruitСocktail")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button> -->
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "fruitСocktail2")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button> -->
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "chukcha")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "garage")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "gnome")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "haunter")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "island")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;" disabled style="cursor: default;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "island2")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "pirate")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;" disabled style="cursor: default;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;" disabled style="cursor: default;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "pirate2")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;" disabled style="cursor: default;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "resident")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "rockclimber")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "sweetlife")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif
        @if($gameName == "sweetlife2")
        <div class="btn_games content" style="text-align: center; margin-top: 20px;">
            <button class="btn" OnClick="gameNumber = 3;">1-ая локация</button>
            <button class="btn" OnClick="gameNumber = 4;">2-ая локация и 3-ая локация</button>
            <!-- <button class="btn" OnClick="gameNumber = 5;">3-ая локация</button> -->
        </div>
        @endif

        <section class="games-wrap content">
            <div class="emulat-games" id="game-area">   
                <div id="displayLock"></div>    
                <div id="preloader">
                    @if($gameName == "alaskanFishing")
                    <div id="preloaderBackground" class="preloaderBackground" >
                        <div class="meter-wrap">
                            <div class="meter-wrap-bg-container">
                                <div class="meter-wrap-bg-left"></div>
                                <div class="meter-wrap-bg-bar"></div>
                                <div class="meter-wrap-bg-right"></div>
                            </div>
                            <div class="meter-value" id="preLoaderProgress">
                                <div class="meter-bg-container">
                                    <div class="meter-bg-left"></div>
                                    <div class="meter-bg-bar"></div>
                                    <div class="meter-bg-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>     
                    @endif
                    @if($gameName !== "alaskanFishing")
                    <div class="animation-wrap">
                        <div class="number-wrap">
                            <span id="percent-preload">0</span>
                            <span>%</span>
                        </div>
                        <img src="{{asset('games/'.$gameName.'//img/Animation.gif')}}">
                    </div>
                    @endif
                </div>      
            </div>
        </section>
    </main>
    <footer>
        <div class="footer-payments">
            <div class="content">
                <div class="payment-logo-wrap">
                    <img src="https://bps-cdn-level3.bpsgameserver.com/bgr/CasinoEuro/Common/neutral/image/2016/03/d1250265eaed402abe7599c40ba42f0c.png">
                </div>
                <div class="payment-logo-wrap">
                    <img src="https://bps-cdn-level3.bpsgameserver.com/bgr/CasinoEuro/Common/neutral/image/2016/03/3e80a5d7a9d54088a0b8f5d4a028ad7a.png">
                </div>
                <div class="payment-logo-wrap">
                    <img src="https://bps-cdn-level3.bpsgameserver.com/bgr/CasinoEuro/Common/neutral/image/2016/03/8feb0d01b5f446549561b8499d89857c.png">
                </div>
                <div class="payment-logo-wrap">
                    <img src="https://bps-cdn-level3.bpsgameserver.com/bgr/CasinoEuro/Common/neutral/image/2016/03/52381be1b462416a8bd61903a8277f95.png">
                </div>
            </div>
        </div>
        <div class="footer-games-logo">
            <div class="content">
                <div class="games-logo-wrap">
                    <img src="http://img0.liveinternet.ru/images/attach/c/10/127/538/127538124_igrosoft9b398abc99.png">
                </div>
                <div class="games-logo-wrap">
                    <img src="https://bps-cdn-level3.bpsgameserver.com/bgr/CasinoEuro/Common/neutral/image/2016/03/d03a6e868c3f46a0b3f088c3b564a41e.png">
                </div>
                <div class="games-logo-wrap">
                    <img src="http://www.slotspill.com/wp-content/uploads/default/novomatic-casino.png">
                </div>
                <div class="games-logo-wrap">
                    <img src="https://bps-cdn-level3.bpsgameserver.com/bgr/CasinoEuro/Common/neutral/image/2016/03/b1a3d83a49124751a022cb32c0596120.png">
                </div>
            </div>
        </div>
    </footer>
    <div class="modal_wrap language_selector">
        <div class="modal">
            <div class="header">
                <h2 class="modal-title-headline">Select your language</h2>
                <div class="close fa fa-times"></div>
            </div>
            <div class="modal_body clearfix">
                <ul>
                    <li>
                        <a href="">
                            <span>
                                <i class="flags-lg flags-lg-en"></i>
                                <p class="flag-title">English</p>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>
                                <i class="flags-lg flags-lg-de"></i>
                                <p class="flag-title">Deutsch</p>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="overlay"></div>
    </div>
    <div class="modal_wrap login">
        <div class="modal">
            <div class="header">
                <h2 class="modal-title-headline">Secure login</h2>
                <div class="close fa fa-times"></div>
                <div class="icons">
                    <img alt="" src="https://bps-cdn-level3.bpsgameserver.com/bgr/EuroCasino/Common/neutral/image/2016/03/5d83f57d1f86446bb4b0fe6927202f90.png">
                </div>
            </div>
            <div class="modal_body clearfix">
                <form action="">
                    <div class="field">
                        <div class="input">
                            <input type="text">
                            <label>Username/Email</label>
                        </div>
                        <div class="invalid_label">Enter your Username/Email.</div>
                    </div>
                    <div class="field">
                        <div class="input">
                            <input type="text">
                            <label>Password</label>
                        </div>
                        <div class="invalid_label">Enter your password.</div>
                    </div>
                    <div class="btn btn-success">Login</div>
                    <div class="forgot_password">
                        <a href="">Forgot Username/Password</a>
                    </div>
                </form>
            </div>
        </div>
        <div class="overlay"></div>
    </div>
    <div class="modal_wrap menu">
        <div class="menu_wrap">
            <div class="menu_content">
                <ul>
                    <li><a href="">Login</a></li>
                    <li><a href="">Register</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Mobile Apps</a></li>
                    <li><a href="">Welcome Bonus</a></li>
                    <li><a href="">Promotions</a></li>
                    <li><a href="">Chanhe Language</a></li>
                    <li><a href="">Support</a></li>
                </ul>
            </div>
        </div>
        <div class="overlay"></div>
    </div>
    <div class="fontLoader" style="font-family: 'Bauhaus 93'; position: absolute; left: -1000px;    visibility: hidden;">-</div>
</body>
</html>