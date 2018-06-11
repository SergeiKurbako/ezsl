$(document).ready(function() {	
	var soundStatus = true;
	var stretchStatus = true;
	$('.btn_1').click(function(event) {
		if (soundStatus){
			$(this).addClass('active')
			soundStatus = false;
			game.sound.mute = true;
		} else {
			$(this).removeClass('active')			
			soundStatus = true;
			game.sound.mute = false;
		}
		game.scale.refresh();
	});	
	$('.btn_2').click(function(event) {
		setTimeout(function(){
			game.scale.refresh();
		}, 50)
		if (stretchStatus){
			$(this).addClass('active')
			stretchStatus = false;					
			game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
			game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT ;
		} else {
			$(this).removeClass('active')		
			stretchStatus = true;
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL ;
		}
	});	
	$('.btn_3').click(function(event) {
		if (game.scale.isFullScreen){
			$(this).removeClass('active')		
					// game.scale.stopFullScreen();
					if(document.cancelFullScreen) {
						document.cancelFullScreen();
					} else if(document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					} else if(document.webkitCancelFullScreen) {
						document.webkitCancelFullScreen();
					}
				}	else{
					$(this).addClass('active')
					if(document.body.requestFullScreen) {
						document.body.requestFullScreen();
					} else if(document.body.mozRequestFullScreen) {
						document.body.mozRequestFullScreen();
					} else if(document.body.webkitRequestFullScreen) {
						document.body.webkitRequestFullScreen();
					// game.scale.startFullScreen(false);
				}
			}
		});		
	if (isMobile) {
		console.log(1)
		$('.menu_btn').click(function(event) {
			console.log(2)
			if ($('.menu_elements').hasClass('close')){
				console.log(3)
				$('.menu_elements').removeClass('close');		
			} else {
				console.log(4)
				$('.menu_elements').addClass('close');				
			}
		})
	} else {
		console.log(12345)
		$('.menu_btn').hover(function(event) {
			$('.menu_elements').removeClass('close');
		});
		$('.menu_wrap').mouseleave(function(event) {
			$('.menu_elements').addClass('close');
		});
	}
});