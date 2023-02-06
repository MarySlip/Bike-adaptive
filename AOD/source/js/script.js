$(document).ready(function () {
	//BURGER
	/*$('.header-menu__icon').click(function (event) {
		$('.header-menu__icon,.header-top-lang,.header-bottom-menu').toggleClass('active');
		$('body').toggleClass('lock')
	});*/



//CHECKBOX
	$.each($('.checkbox'), function(index, val){
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function(event){
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');


		return false;
	});

	//RADIO
	$.each($('.radiobuttons__item'), function(event){
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	})
	$(document).on('click', '.radiobuttons__item', function(event){
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	})


//IMAGES
	$.each($('.ibg'), function (index, val){
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	})
	ibg()
});

//Убирает или добавляет Class для BURGER
$('.icon-menu').click(function(event){
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

//SLIDER
if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHeight:true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}




















