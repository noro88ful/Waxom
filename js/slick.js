$('.slick1').slick({
	arrows: false,
	dots: true,
	adaptiveHeight: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	initialSlide: 1,
})

$('.back__slider__arrow-left').click(function () {
	$('.back').slick('slickPrev')
})

$('.back__slider__arrow-right').click(function () {
	$('.back').slick('slickNext')
})

$('.slick2').slick({
	arrows: false,
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,
	// infinite: true,
	// centerMode: true,
	// responsive:[
	// 	{
	// 		breakpoint: 320,
	// 		settings: {
	// 			adaptiveHeight: false,
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			adaptiveHeight: true,
	// 		}
	// 	}
	// ],
})
