// Linha do tempo >> Exibe / Esconde Flickr e YouTube
$(document).ready(function(){
  $("#flickr_btn1").click(function(){
    $("#flickr_fr1").slideToggle("slow");
		$("#youtube_fr1").slideUp("slow");
  });
	  $("#flickr_btn2").click(function(){
    $("#flickr_fr2").slideToggle("slow");
		$("#youtube_fr2").slideUp("slow");
  });
  $("#flickr_btn3").click(function(){
    $("#flickr_fr3").slideToggle("slow");
  });
  $("#flickr_btn4").click(function(){
    $("#flickr_fr4").slideToggle("slow");
  });
  $("#flickr_btn5").click(function(){
    $("#flickr_fr5").slideToggle("slow");
  });
  $("#youtube_btn1").click(function(){
    $("#youtube_fr1").slideToggle("slow");
		$("#flickr_fr1").slideUp("slow");
  });
	  $("#youtube_btn2").click(function(){
    $("#youtube_fr2").slideToggle("slow");
		$("#flickr_fr2").slideUp("slow");
  });
});

// Galerias de Arte Digital no mundo >> Exibe / Esconde YouTube
$(document).ready(function(){
  $("#yt_gm_btn1").click(function(){
    $("#youtube_gm1, #fechar1").slideToggle("slow");
		$("#youtube_gm2, #youtube_gm3, #youtube_gm4, #youtube_gm5").slideUp("slow");
		$("#fechar2, #fechar3, #fechar4, #fechar5").hide();
  });
	$("#yt_gm_btn2").click(function(){
    $("#youtube_gm2, #fechar2").slideToggle("slow");
		$("#youtube_gm1, #youtube_gm3, #youtube_gm4, #youtube_gm5").slideUp("slow");
		$("#fechar1, #fechar3, #fechar4, #fechar5").hide();
  });
  $("#yt_gm_btn3").click(function(){
    $("#youtube_gm3, #fechar3").slideToggle("slow");
		$("#youtube_gm1, #youtube_gm2, #youtube_gm4, #youtube_gm5").slideUp("slow");
		$("#fechar1, #fechar2, #fechar4, #fechar5").hide();
  });
  $("#yt_gm_btn4").click(function(){
    $("#youtube_gm4, #fechar4").slideToggle("slow");
		$("#youtube_gm1, #youtube_gm2, #youtube_gm3, #youtube_gm5").slideUp("slow");
		$("#fechar1, #fechar2, #fechar3, #fechar5").hide();
  });
  $("#yt_gm_btn5").click(function(){
    $("#youtube_gm5, #fechar5").slideToggle("slow");
		$("#youtube_gm1, #youtube_gm2, #youtube_gm3, #youtube_gm4").slideUp("slow");
		$("#fechar1, #fechar2, #fechar3, #fechar4").hide();
  });
	$("#fechar1,#fechar2,#fechar3,#fechar4,#fechar5").click(function(){
		$(this).hide();
		$("#youtube_gm1, #youtube_gm2, #youtube_gm3, #youtube_gm4, #youtube_gm5").hide();
  });
});