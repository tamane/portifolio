$(document).ready(function() {
	//CONTROLE – AVANÇA / RETORNA
	$('a').bind('click',function(event){
		var $anchor = $(this);
				
		$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
				
        event.preventDefault();
	});	


$(window).scroll(function(){
	switch($(this).scrollTop()){
		case 700:
			$('#graficoS1').fadeIn("slow");
			break;
		case 1400:
			$('#graficoS2').fadeIn("slow");
			break;
		case 2100:
			$('#graficoS3').fadeIn("slow");
			break;
		case 2800:
			//SLIDE 4
			$('#graficoS4-1tri').easyPieChart({
				barColor : '#6db52c',
				trackColor : '#607d92',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 210,
				animate : 3000
			});
			
			$('#graficoS4-2tri').easyPieChart({
				barColor : '#6db52c',
				trackColor : '#607d92',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 210,
				animate : 3000
			});
			
			$(".graficoS4-1tri-wrap .legenda, .graficoS4-2tri-wrap .legenda").fadeIn("slow");
			break;
		case 3500:
			//SLIDE 5
			$('#graficoS5-left').easyPieChart({
				barColor : '#6db52c',
				trackColor : '#607d92',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 210,
				animate : 3000
			});
			
			$('#graficoS5-right').easyPieChart({
				barColor : '#ffff00',
				trackColor : '#6db52c',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 169,
				animate : 3000
			});
			
			$(".graficoS5-left-wrap .legenda, .graficoS5-right-wrap .legenda").fadeIn("slow");
			break;
		case 4200:
			//SLIDE 6
			$('#graficoS6-left').easyPieChart({
				barColor : '#6db52c',
				trackColor : '#607d92',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 210,
				animate : 3000
			});
			
			$('#graficoS6-right').easyPieChart({
				barColor : '#ffff00',
				trackColor : '#6db52c',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 169,
				animate : 3000
			});
			
			$(".graficoS6-left-wrap .legenda, .graficoS6-right-wrap .legenda").fadeIn("slow");
			break;
		case 4900:
			//SLIDE 7
			$('#graficoS7-left').easyPieChart({
				barColor : '#6db52c',
				trackColor : '#607d92',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 210,
				animate : 3000
			});
			
			$('#graficoS7-right').easyPieChart({
				barColor : '#ffff00',
				trackColor : '#6db52c',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 169,
				animate : 3000
			});
			
			$(".graficoS7-left-wrap .legenda, .graficoS7-right-wrap .legenda").fadeIn("slow");
			break;
		case 5600:
			//SLIDE 8
			$('#graficoS8-left').easyPieChart({
				barColor : '#6db52c',
				trackColor : '#607d92',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 210,
				animate : 3000
			});
			
			$('#graficoS8-right').easyPieChart({
				barColor : '#ffff00',
				trackColor : '#6db52c',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 169,
				animate : 3000
			});
			
			$(".graficoS8-left-wrap .legenda, .graficoS8-right-wrap .legenda").fadeIn("slow");
			break;			
		case 7000:
			//SLIDE 10
			$('#graficoS10').easyPieChart({
				barColor : '#6db52c',
				trackColor : '#607d92',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 210,
				animate : 3000
			});
			break;
		
		case 7700:
			//SLIDE 11
			$('#graficoS11').easyPieChart({
				barColor : '#6db52c',
				trackColor : '#607d92',
				scaleColor : false,
				lineCap : 'square',
				lineWidth : 10,
				size : 210,
				animate : 3000
			});
			break;
	}
});
});