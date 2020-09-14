$(function(){

	$(".profile__tab").click(function() {
	$(".profile__tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".profile__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.hesap-ac__item').click(function(){	
		$(this).toggleClass('active');	
		$('.hesap-ac__button').removeClass('disabled');

	});


// $('.item-gercec-col-wrapper-btn1').click(function(){	
// 		$(this).toggleClass('active');	
// 		$('.gercek-a').toggleClass('active');
// 		$('.gercek-b').toggleClass('active');
// 		$('.item-gercec-col-wrapper-btn2').removeClass('active');
		

// 	});

// $('.item-gercec-col-wrapper-btn2').click(function(){	
// 		$(this).toggleClass('active');	
// 		$('.gercek-a').toggleClass('active');
// 		$('.gercek-b').toggleClass('active');
// 		$('.item-gercec-col-wrapper-btn1').removeClass('active');
		

// 	});

$(".tab-gercile .item-gercec-col").click(function() {
	$(".tab-gercile .item-gercec-col").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-content-gercec").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(".tab-gercile .item-gercec-col2").click(function() {
	$(".tab-gercile .item-gercec-col2").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab-content-gercec2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.tab-gercile .item-gercec-col').click(function(){	
		$('.item-gercec-col-wrapper-btn1').removeClass('item-gercec-col-wrapper-btn--start');	
		

	});

$('.tab-gercile .item-gercec-col2').click(function(){	
		$('.item-gercec-col-wrapper-btn3').removeClass('item-gercec-col-wrapper-btn--start2');	
		

	});



$('.education-video').click(function(){	
		$('.popup').addClass('active');	
		

	});	


jQuery(function($){
  $(document).mouseup(function (e){ 
    var searchWrapper = $(".popup__content"); 
     var searchRow = $(".popup"); 
    if (!searchWrapper.is(e.target) 
        && searchWrapper.has(e.target).length === 0) { 
      searchRow.removeClass('active'); 
    }
  });
});


});