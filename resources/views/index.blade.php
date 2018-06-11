<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Slot Portal</title>
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"> -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<link type="text/css" rel="stylesheet" href="css/main.css">
	<link type="text/css" rel="stylesheet" href="css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700" rel="stylesheet">
	<script type="text/javascript" src="js/jquery-3.1.1.js"></script>
	<script type="text/javascript" src="js/jquery.maskedinput.js"></script>
	<script type="text/javascript" src="js/main.js"></script>

	{{--<script type="text/javascript" src="http://194.87.103.191/js/socket.io.js"></script>
	<script type="text/javascript" src="http://194.87.103.191/js/script.js"></script>
	<script type="text/javascript">newisorStart('I488ZFEBS2KR201Z')</script>--}}
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
				<a href="" class="login_icon_wrap"><i class="logo-user fa fa-user"></i></a>
			</div>
			<div class="btn_menu">
				<a href=""></a>
			</div>
		</div>
	</header>
	<div class="banner-wrap">
		<div class="content">
			<div class="knight"></div>
			<div class="after-knight"></div>
		</div>
	</div>
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
		<section class="games-section content">
			<ul class="games-list">
				<li class="game-item">
					<a href="{{$preURL}}/game/crazyMonkey">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/crazy_monkey.jpg">
						</div>
						<section>
							<h6 class="game-name">Crazy Monkey</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/crazyMonkey2">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/crazy_monkey_2.jpeg">
						</div>
						<section>
							<h6 class="game-name">Crazy Monkey 2</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/gnome">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/gnome.png">
						</div>
						<section>
							<h6 class="game-name">Gnome</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/fruitСocktail">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/fruit.png">
						</div>
						<section>
							<h6 class="game-name">Fruit Cocktail</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/fruitСocktail2">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/fruit_cocktail_2.jpg">
						</div>
						<section>
							<h6 class="game-name">Fruit Cocktail 2</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/resident">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/resident.png">
						</div>
						<section>
							<h6 class="game-name">Resident</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/garage">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/garage.png">
						</div>
						<section>
							<h6 class="game-name">Garage</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/island">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/island.jpeg">
						</div>
						<section>
							<h6 class="game-name">Island</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/island2">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/island2.jpeg">
						</div>
						<section>
							<h6 class="game-name">Island 2</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/keks">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/keks.png">
						</div>
						<section>
							<h6 class="game-name">Keks</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/haunter">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/haunter.png">
						</div>
						<section>
							<h6 class="game-name">Lucky Haunter</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/rockclimber">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/climber.png">
						</div>
						<section>
							<h6 class="game-name">Rock Climber</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/pirate">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/pirate.png">
						</div>
						<section>
							<h6 class="game-name">Pirate</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/pirate2">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/online-slot-pirate-2-play-for-free.jpg">
						</div>
						<section>
							<h6 class="game-name">Pirate 2</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/sweetlife">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/sweetlife.png">
						</div>
						<section>
							<h6 class="game-name">Sweet Life</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/sweetlife2">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/Sweet-Life-2-Igrosoft.png">
						</div>
						<section>
							<h6 class="game-name">Sweet Life 2</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/chukcha">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/online-slot-chukcha-play-for-free.jpg">
						</div>
						<section>
							<h6 class="game-name">Chukcha</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/gonzosQuest">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/game.GonzosQuest.jpg">
						</div>
						<section>
							<h6 class="game-name">Gonzo's Quest</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/bookOfRa">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/9b8fc82bb69d1575151ebdbad7e849208bb340ec-jpeg1473238324.jpeg">
						</div>
						<section>
							<h6 class="game-name">Book Of Ra</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/bookOfRaDeluxe">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/f8f84cd37f122aa9beec96953109a558f9ed9860-jpeg1479729391.jpeg">
						</div>
						<section>
							<h6 class="game-name">Book Of Ra Deluxe</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/columbus">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/4cca4c99177529abe48ad69bd6fa52ceeec27e45-jpeg1474382604.jpeg">
						</div>
						<section>
							<h6 class="game-name">Columbus</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/columbusDeluxe">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/columbus-deluxe.jpg">
						</div>
						<section>
							<h6 class="game-name">Columbus Deluxe</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/sizzlingHot">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/de1a34dfd190a19d5bac731dae30ebcea0b7541b-jpeg1469457229.jpeg">
						</div>
						<section>
							<h6 class="game-name">Sizzling Hot</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/sizzlingHotDeluxe">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/logo-sizzling-hot-deluxe-novomatic-slot-game.png">
						</div>
						<section>
							<h6 class="game-name">Sizzling Hot Deluxe</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/dolphins">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/dolphin-s-pearl-admiral777-jpeg1464012129.jpeg">
						</div>
						<section>
							<h6 class="game-name">Dolphins Pearl</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/dolphinsDeluxe">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/dolphin-pearls-deluxe-novomatic-slot-oyunu.png">
						</div>
						<section>
							<h6 class="game-name">Dolphins Pearl Deluxe</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/luckyLadysCharm">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/lucky-lady-s-charm-novomatic-jpeg1464012651.jpeg">
						</div>
						<section>
							<h6 class="game-name">Lucky Lady's Charm</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/luckyLadysCharmDeluxe">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/logo-lucky-ladys-charm-deluxe-novomatic-slot-game.png">
						</div>
						<section>
							<h6 class="game-name">Lucky Lady's Charm Deluxe</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/alaskanFishing">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/301.jpg">
						</div>
						<section>
							<h6 class="game-name">Alaskan Fishing</h6>
						</section>
					</a>
				</li>
				<li class="game-item">
					<a href="{{$preURL}}/game/starburst">
						<i class="fa fa-mobile"></i>
						<div class="game-img">
							<div class="hover"><i class="fa fa-play"></i></div>
							<img alt="" src="images/starburst.jpg">
						</div>
						<section>
							<h6 class="game-name">Starburst</h6>
						</section>
					</a>
				</li>				
			</ul>
			<div class="text-block">
				<h4>Лучшее казино в рунете для вас !</h4>
				<p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Что своего собрал деревни заглавных, вершину всеми повстречался там но реторический свое не ее, заманивший которой от всех использовало это путь свой страну большого меня переписали ручеек, алфавит заголовок даже! Букв текст, ему скатился безорфографичный. Но, буквоград переписали строчка продолжил свой пустился пояс, речью это диких маленькая продолжил большой домах текстов дороге ее вдали. Свой, переписывается. Собрал парадигматическая рекламных своего журчит свой за речью рукописи, дороге не ведущими. Его, маленькая своего языкового послушавшись использовало подзаголовок они на берегу, это, грустный свою назад! Что наш меня повстречался маленький над, заголовок имени свой своих имеет жаренные, там оксмокс ведущими назад, языкового своего. Осталось приставка за грамматики предложения дал о, текстов. Предложения если наш, страна сих пустился но, меня взобравшись обеспечивает маленький, пунктуация эта первую семь большого реторический. Правилами города но гор взобравшись большого он то использовало предупреждал вопроса подпоясал скатился снова текста взгляд журчит всеми буквоград своего алфавит имеет, жизни заглавных безорфографичный ему переулка образ! Что заманивший дорогу дал запятых не! Заманивший послушавшись но, подзаголовок от всех диких предупреждал назад маленький путь живет ipsum если вопроса продолжил страна там его залетают текста переписали взобравшись которой бросил своего пунктуация свое последний однажды. Его возвращайся не, обеспечивает!</p>
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
		@foreach($games as $game)
		<div><a href="/game/{{$game->gameName}}/">{{$game->gameName}}</a></div>
		@endforeach
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
</body>
</html>

