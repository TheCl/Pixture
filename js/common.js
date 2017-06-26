$(document).ready(function(){

	$(".side__menu").click(function(){
	    $(".side").css("width", "50%");
	});


	/* This is basic - uses default settings */
	
	$(".fancy").fancybox();
	
    $('.bxslider').bxSlider({
 		slideMargin: 20,
 		pager: false
  });

});