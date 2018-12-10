// JavaScript Document
// Author: André Tamane – Fiesp – andre.tamane@fiesp.com

$(document).ready(function(){
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	$( '#ohashi' ).animate( {right:'-40px'},'slow' );

//BISCOITO
	$( '.biscoito a' ).click(function(){
		var audioElement = document.createElement('audio');
		audioElement.setAttribute('src', 'resources/audio/cookie.mp3');
		audioElement.setAttribute('autoplay', 'autoplay');
		audioElement.play();
		
		$ ( this ).css( 'background-position' , 'bottom' );
		var autor = $(this);
		var nome = $( autor.attr( 'href' ) );
		$( '#aspas-wrap' ).fadeIn( 1500 );
		$( nome ).fadeIn( 'slow' );
		});

	$( '#bt_fechar_modal' ).click( function(){
		$( 'body' ).css( 'overflow' , 'auto' );
		$('#aspas-wrap').fadeOut('fast');
		$( 'div.aspas' ).fadeOut('fast');
		$( '.biscoito a' ).css( 'background-position' , 'top' );
		return false;
	});

});
