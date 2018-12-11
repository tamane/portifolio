// JavaScript Document
// Autor: Departamento de Marketing Fiesp

$(document).ready(function(){
	
	//NAVEGAÇÃO PELAS SETAS
	$('a.vai,a.volta').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
    });	
	
	$('div.cidade').mouseover(function(){
		var $anchor = $(this);
		var $qualcidade = $anchor.attr('id');
		$('div#tela3bgmap').removeClass().not($qualcidade);
		$('div#tela3bgmap').addClass($qualcidade);
		});
	
	
	//MODAL
	$( 'a.openModal').click(function(){
		var $anchor = $(this);
		var janela = $($anchor.attr('href'));
		
		$( 'body' ).css( 'overflow' , 'hidden' );
		$( '#modal' ).fadeIn( function(){
			$( janela ).fadeIn('fast');			
			});
		return false;
	});
	
	$( '#bt_fechar_modal' ).click( function(){
		$( 'body' ).css( 'overflow' , 'auto' );
		$('#youtube_saopaulo, #youtube_jundiai').hide();
		$( '#modal' ).fadeOut();
		return false;
	});
	
	//SETORES
	$( 'li.setorLi').mouseover(function(){
			$(this).addClass('setor-bg-hover');
			var $tag = $(this).find('a').attr( 'href' );
			$($tag).slideDown('slow');
		});
	$( 'li.setorLi').mouseleave(function(){
			$(this).removeClass('setor-bg-hover');
			var $tag = $(this).find('a').attr( 'href' );
			$($tag).slideUp('fast');
		});
	
	//ASPAS
	$('a.balao-btn').bind('click',function(event){
		var $anchor = $(this);
		var aspas = $($anchor.attr('href'));
		$(aspas).show(500,'easeInOutQuint');
		$('div.foto-depoimento-wrap').not(aspas).hide(500,'easeInOutQuint');
    });	
	
	
	
	
	
	//EXPANDIR/OCULTAR ANOS ANTERIORES
	$( 'a.expandir, a.ocultar').click(function(){
		var $hash = $(this);
		var ano = $($hash.attr('href'));
		
		$(ano).fadeToggle('slow');
		$('div.edicao').not(ano).hide('fast');
				
		if($(this).hasClass('expandir') == true){
			$(this).removeClass('expandir');
			$(this).addClass('ocultar');
			$('a.ocultar').not(this).addClass('expandir');
			$('a.ocultar').not(this).removeClass('ocultar');
			}
		else{
			$(this).removeClass('ocultar');
			$(this).addClass('expandir');
			}
			
		});
});