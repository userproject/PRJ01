// JavaScript Document
var window_height = 0;
var window_width = 0;

function setScreen() {
	if($(window).width() != window_width || window_width == 0) {
		window_height = $(window).height();
		window_width = $(window).width();
	}
}

function setheader() {
	var head_h = $('#header').height();
	var head_menu_h = $('.menu').height();
	$('.h_menu').css({'top': head_h+'px'});
	$('.s_menu').css({'top': head_h+'px', 'display':'none'});
	
	var btnsrc = $('.h_btn').find('img').attr('src');
	if($(window).width() > 790) {
		$('.h_menu').show();
		menuFlag = false;
		
		if(btnsrc.indexOf('../') >= 0) {
			$('.h_btn').find('img').attr('src', '../images/share/img/h-menu-btn.png');
		} else {
			$('.h_btn').find('img').attr('src', 'images/share/img/h-menu-btn.png');
		}
	} else {
		$('.h_menu').hide();
		menuFlag = false
		
		if(btnsrc.indexOf('../') >= 0) {
			$('.h_btn').find('img').attr('src', '../images/share/img/h-menu-btn.png');
		} else {
			$('.h_btn').find('img').attr('src', 'images/share/img/h-menu-btn.png');
		}
	} 	
	
	var catcount = $('.sh_sub').length;
	for(var i = 0; i < catcount; i++) {
		var offset_L = $('.sh_sub').eq(i).offset().left;
		$('.sh_sub').eq(i).find('.s_con').css({'margin-left':offset_L+'px'});
	}
}

var menuFlag = false;
function headmenu() {
	var btnsrc = $('.h_btn').find('img').attr('src');
	
	if(menuFlag) {
		if(btnsrc.indexOf('../') >= 0) {
			$('.h_btn').find('img').attr('src', '../images/share/img/h-menu-btn.png');
		} else {
			$('.h_btn').find('img').attr('src', 'images/share/img/h-menu-btn.png');
		}
		
		$('.h_menu').slideUp(500);
		menuFlag = false;
	} else {
		if(btnsrc.indexOf('../') >= 0) {
			$('.h_btn').find('img').attr('src', '../images/share/img/h-x-btn.png');
		} else {
			$('.h_btn').find('img').attr('src', 'images/share/img/h-x-btn.png');
		}
		
		$('.h_menu').slideDown(500);
		menuFlag = true;
	}
}

function submenu(num) {
	var subFlg = $('.s_menu').eq(num).css('display');
	
	if(subFlg == 'block') {
		$('.s_menu').eq(num).stop().slideUp(250);
	} else if(subFlg == 'none') {
		$('.s_menu').eq(num).stop().slideDown(250);
	}
}
// -------------------------------------------------------//

$(window).load(function(e) {
    setScreen();
	setheader();
	
	$('.sh_sub').hover(
		function() { 
			if($(window).width() > 790) {
				$(this).find('.s_menu').stop().slideDown(250);
			}
		}, function() { 
			if($(window).width() > 790) {
				$(this).find('.s_menu').stop().slideUp(250);
			}
		}
	);
	
	
	
});

$(window).resize(function(e) {
	setScreen();
	setheader();
});