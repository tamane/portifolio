// JavaScript Document

$(function() {
    $('a').bind('click',function(event){
        var $anchor = $(this);
		$('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500,'easeInOutExpo');
        event.preventDefault();
    });	
});

$(window).scroll(function(){
	switch($(this).scrollLeft()){
		case 1280:
			$(".grafico1 .anterior").animate({width:'show'},1000);
			$(".grafico1 .atual").animate({width:'show'},2000);
			break;
		case 1920:
			$(".grafico2 .anterior").animate({height:'show'},1000);
			$(".grafico2 .atual").animate({height:'show'},2000);
			break;
		case 2560:
			$(".grafico3 .anterior").animate({height:'show'},1000);
			$(".grafico3 .atual").animate({height:'show'},2000);
			break;
		case 3200:
			$(".grafico4 .anterior").animate({height:'show'},1000);
			$(".grafico4 .atual").animate({height:'show'},2000);
			break;
	}
});