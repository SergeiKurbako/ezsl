$(document).ready(function(){
	function posPopup(papkof){
		var $ = jQuery;
		var hf = parseInt($(papkof).css('height'));
		var wf = parseInt($(papkof).css('width'));
		$(papkof).css('margin-top',-1*hf/2);
		$(papkof).css('margin-left',-1*wf/2);
	}
	$(window).resize(function(){
		var heightImg = parseInt($('.game-img').css('height'));
		$('.game-img img').css('height',heightImg);
	});
	var heightImg = parseInt($('.game-img').css('height'));
	$('.game-img img').css('height',heightImg);

	$('#preloader').css("display","block");
	var heightWindow = document.documentElement.clientHeight ;
	$('#game-area').css("max-height", heightWindow);
	//на весь экран
	// realHeight = document.documentElement.clientHeight;
	// winWidth = document.documentElement.clientWidth;
	// realWidth = Math.round(1024/748*realHeight);
	// $('#preloaderBackground').css("width", realWidth);
	// $('#preloaderBackground').css("height", realHeight);
	// $('#preloader').css("margin-left", (winWidth-realWidth)/2);
	// $(window).resize(function() {
	// 	realHeight = document.documentElement.clientHeight;
	// 	realWidth = Math.round(1024/748*realHeight);
	// 	winWidth = document.documentElement.clientWidth;
	// 	$('#preloaderBackground').css("width", realWidth);
	// 	$('#preloaderBackground').css("height", realHeight);
	// 	$('#preloader').css("margin-left", (winWidth-realWidth)/2);
	// });
  	// в области на сайте
  	realHeight = $('#preloader').parent().css( "height");
  	realWidth = $('#preloader').parent().css( "width");
  	$('#preloaderBackground').css("width", realWidth);
  	$('#preloaderBackground').css("height", realHeight);
  	$(window).resize(function() {
  		$('#game-area').css("max-height", heightWindow);
  		realHeight = $('#preloader').parent().css( "height");
  		realWidth = $('#preloader').parent().css( "width");
  		$('#preloaderBackground').css("width", realWidth);
  		$('#preloaderBackground').css("height", realHeight);
  	});
  	$('.modal_lang').click(function(event) {
  		event.preventDefault();
  		$('body').css('overflow', 'hidden');
  		$('.language_selector').css('display', 'block');
  	});
  	$('.btn_menu a').click(function(event) {
  		event.preventDefault();
  		$('body').css('overflow', 'hidden');
  		$('.modal_wrap.menu').css('display', 'block');
  		setTimeout(function(){ $('.menu_wrap').addClass('open'); }, 1);      
  	});

  	$('.btn-login, .login_icon_wrap').click(function(event) {
  		event.preventDefault();
  		$('body').css('overflow', 'hidden');
  		$('.login').css('display', 'block');

  	});
  	$('.close, .overlay').click(function(event) {
  		event.preventDefault();
  		$('body').css('overflow', 'visible');
  		$('.modal_wrap').css('display', 'none');
  		// $('.overlay').css('display', 'none');
  		$('.menu_wrap').removeClass('open');
  	});
  	$('.login .input input').keyup(function(e){
  		var input_text = $(this).val();
  		var rv_name = /\S/;
  		if(input_text != '' &&  rv_name.test(input_text)){
  			$(this).addClass('no-empty');
  		} else{
  			$(this).removeClass('no-empty');
  		}
  	});
  });
