// JavaScript Document
$(document).ready(function(){

	$(function() {
		$('a.nav-btn, a.nav-btn-ant, a.nav-btn-prox').bind('click',function(event){
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500,'easeInOutExpo');
			event.preventDefault();
		});	
	});

	$(function(){
		$('#cidades-menu a').bind('click',function(event){
			var $anchor = $(this);
			var $regiao = $anchor.attr('id');
						
			switch($regiao) {
				case 'capital' :
					$('div#capital-list').slideToggle();
					$('div#mapa-capital').slideToggle();
					$('div#grande-sp-list').hide();
					$('div#mapa-grande-sp').hide();
					$('div#interior-list').hide();
					$('div#mapa-interior').hide();
					break;
				case 'grande-sp' :
					$('div#capital-list').hide();
					$('div#mapa-capital').hide();
					$('div#grande-sp-list').slideToggle();
					$('div#mapa-grande-sp').slideToggle();
					$('div#interior-list').hide();
					$('div#mapa-interior').hide();
					break;
				case 'interior' :
					$('div#capital-list').hide();
					$('div#mapa-capital').hide();
					$('div#grande-sp-list').hide();
					$('div#mapa-grande-sp').hide();
					$('div#interior-list').slideToggle();
					$('div#mapa-interior').slideToggle();
					break;
				default:
					$('div.lista-cidades-wrap').fadeOut();
					$('div.mapa-wrap').fadeOut();					
					break;
			}
			event.preventDefault();
		});	
	});
	
	$(function(){
		$('.etapas-menu a').bind('click',function(event){
			var $anchor = $(this);
			var $regiao = $anchor.attr('id');
						
			switch($regiao) {
				case 'etapa1-link' :
					$('div#etapa1').slideToggle();
					$('div#etapa2,div#etapa3,div#etapa4').hide();
					break;
				case 'etapa2-link' :
					$('div#etapa2').slideToggle();
					$('div#etapa1,div#etapa3,div#etapa4').hide();
					break;
				case 'etapa3-link' :
					$('div#etapa3').slideToggle();
					$('div#etapa1,div#etapa2,div#etapa4').hide();
					break;
				case 'etapa4-link' :
					$('div#etapa4').slideToggle();
					$('div#etapa1,div#etapa2,div#etapa3').hide();
					break;
				default:
					$('div.etapas-conteudo-wrap').fadeOut();
					break;
			}
			event.preventDefault();
		});	
	});
});