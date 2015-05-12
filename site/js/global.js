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
	
	if(matchmb) {
		if(subFlg == 'block') {
			$('.s_menu').eq(num).stop().slideUp(250);
		} else if(subFlg == 'none') {
			$('.s_menu').eq(num).stop().slideDown(250);
		}
	} else {
		if(num == 0) {
			window.location="product.html";
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
	}, 100);
    
	var s_menu_H = 0;
	var headH = 0;
	$('.sh_sub').hover(
		function() { 
			s_menu_H = $(this).find('.s_menu').height() + 23;
			
			if($(window).width() > 790) {
				$('#header').stop().animate({'height':head_h + s_menu_H + 'px'}, 250);
				$(this).find('.s_menu').stop().slideDown(300);
			}
		}, function() { 
			if($(window).width() > 790) {
				$('#header').stop().animate({'height':head_h+'px'}, 250);
				$(this).find('.s_menu').stop().slideUp(300);
			}
		}
	);	
	
	
});

$(window).resize(function(e) {
	matchmedia();
	setScreen();
	setheader();
});

