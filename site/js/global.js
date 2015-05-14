// JavaScript Document
var window_height = 0;
var window_width = 0;
var head_h = 0;
var head_menu_h = 0;

function setScreen() {
	if($(window).width() != window_width || window_width == 0) {
		window_height = $(window).height();
		window_width = $(window).width();
	}
}

function setheader() {
	head_h = $('#header').height();
	head_menu_h = $('.menu').height();
	
	$('#content').css({'padding-top': head_h+'px'});
	$('.head_bg').css({'height': head_h+'px'});
	$('.h_menu').css({'top': head_h+'px'});
	$('.s_menu').css({'top': head_h+'px'});
	
	var btnsrc = $('.h_btn').find('img').attr('src');
	
	if(!matchmb) {
		$('.h_menu').show();
		menuFlag = false;
		
		if(btnsrc.indexOf('../') >= 0) {
			$('.h_btn').find('img').attr('src', '../images/share/img/h-menu-btn.png');
		} else {
			$('.h_btn').find('img').attr('src', 'images/share/img/h-menu-btn.png');
		}
	} else {
		$('.h_menu').hide();
		$('#header').css({'height':'auto'});
		menuFlag = false
		
		if(btnsrc.indexOf('../') >= 0) {
			$('.h_btn').find('img').attr('src', '../images/share/img/h-menu-btn.png');
		} else {
			$('.h_btn').find('img').attr('src', 'images/share/img/h-menu-btn.png');
		}
	} 	
	
	if($('body').hasClass('stopScroll')) {$('body').removeClass('stopScroll');}	
	$('.s_menu').slideUp(250);
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
		
		$('body').removeClass('stopScroll');
		$('.h_menu').slideUp(500);
		menuFlag = false;
	} else {
		if(btnsrc.indexOf('../') >= 0) {
			$('.h_btn').find('img').attr('src', '../images/share/img/h-x-btn.png');
		} else {
			$('.h_btn').find('img').attr('src', 'images/share/img/h-x-btn.png');
		}
		
		$('body').addClass('stopScroll');
		$('.h_menu').slideDown(500);
		menuFlag = true;
	}
}

function submenu(num) {
	var subFlg = $('.s_menu').eq(num).css('display');
	
	if(matchmb) {
		if(subFlg == 'block') {
			$('.s_menu').eq(num).stop().slideUp(250);
		} else if(subFlg == 'none') {
			$('.s_menu').eq(num).stop().slideDown(250);
		}
	} 
}

var matchpc =false;
var matchmb = false;
function matchmedia(){
	try{
		if (window.matchMedia("(max-width:790px)").matches) {
			matchpc = false;
			matchmb = true;

		}else{
			matchpc = true;
			matchmb = false;
		}
	}catch (err) {
		 if (document.documentElement.clientWidth <= 790) {
			matchpc = false;
			matchmb = true;
		 }else{
			matchpc = true;
			matchmb = false;
		 }
		
	}
}
// -------------------------------------------------------//

$(document).ready(function(e) {
	
	matchmedia();
	
	setTimeout(function() {
		setScreen();
		setheader();
	}, 250);
    
	$('.sh_sub').hover(
		function() {
			if(matchpc) {
				$(this).find('.s_menu').stop().slideDown(300);
			}
		}, function() { 
			if(matchpc) {
				$(this).find('.s_menu').stop().slideUp(300);
			}
		}
	);	
	
	$('.logo').hover(function() {
			if(window.location.href.indexOf('index.html') < 0 && matchpc) {
				$(this).find('img').attr('src', $(this).find('img').attr('src').replace('.png', '-ovr.png'));
			}
		}, function() {
			if(window.location.href.indexOf('index.html') < 0 && matchpc) {
				$(this).find('img').attr('src', $(this).find('img').attr('src').replace('-ovr.png', '.png'));
			}
	});
	
});

$(window).resize(function(e) {
	matchmedia();
	setTimeout(function() {
		setScreen();
		setheader();
	}, 250);
});

