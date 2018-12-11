$("a.fiesp").click(function(){
   $('html, body').animate({scrollTop:0},'slow')	 
});

$("a.sesi").click(function(){
   $('html, body').animate({scrollTop:615},'slow')	 
});

$("a.senai").click(function(){
   $('html, body').animate({scrollTop:1635},'slow')	 
});

$("a.rodape").click(function(){
   $('html, body').animate({scrollTop:1863},'slow')	 
});

/* Show/hide dot lav labels on hover */
$('#nav a').hover(
		function () { $(this).prev('h1').show(); },
		function () {	$(this).prev('h1').hide(); }
	);