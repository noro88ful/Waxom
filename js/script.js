$('.wrapper').addClass('loaded')

// Burger menu animation

$('.icon-menu').click(function (e) {
	$(this).toggleClass('_active')
	$('.header-menu').toggleClass('_active')
	if ($(this).hasClass('_active')) {
		$('body').data('scroll', $(window).scrollTop())
	}
	$('body').toggleClass('lock')
	if (!$(this).hasClass('_active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	}
})

//2 PARTS IMAGE + TEXT

function ibg() {
	$.each($('._ibg'), function () {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
		}
	})
}
ibg()


$('.element__realization').click(function () {
	if ($('.element__realization').hasClass('_active')) {
		$('.element__realization').not($(this)).removeClass('_active')
	}
	$(this).addClass('_active')
})

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 0) {
		$(".header").addClass("scrolled");
	} else {
		$(".header").removeClass("scrolled");
	}
});

$('.filter__item').click(function () {
	var x = $(this).data('filter')
	if (x == 1) {
		$('.column__project').show()
	}
	else {
		$('.column__project').hide()
		$('.column__project.f_' + x).show()
	}
	$('.filter__item').removeClass('active')
	$(this).addClass('active')
	return false
})

$(document).ready(function () {
	$.each($('.element__realization_content'), function () {
		if ($(this).hasClass('_active')) {
			$('.element__realization_content').not($(this)).hide()
		}
	})
})

$('.element__realization').click(function () {
	var x = $(this).data('filter')
	$('.element__realization_content').hide()
	$('.element__realization_content.f_' + x).show()
	$('.element__realization').removeClass('active')
	$(this).addClass('active')
	return false
})