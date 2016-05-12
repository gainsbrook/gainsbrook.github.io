$(function(){
	$('#projects dt').hover(function(){
		$('#projects').children().removeClass('current');
		$(this).addClass('current').next().addClass('current');
	});
	$('#main_nav > li').hover(function(){
		$(this).toggleClass('jshover')
	})
});
