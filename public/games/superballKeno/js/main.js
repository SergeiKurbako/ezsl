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
});

