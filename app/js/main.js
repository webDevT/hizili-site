$(function(){

	$(".profile__tab").click(function() {
	$(".profile__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".profile__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.hesap-ac__item').click(function(){	
		$(this).toggleClass('active');	
		$('.hesap-ac__button').removeClass('disabled');

	});




});