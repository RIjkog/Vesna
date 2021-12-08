
$(document).ready(function () {
	const iconMenu = document.querySelector('.icon-menu');
	if (iconMenu) {
		const menuBody = document.querySelector('.menu__body');
		iconMenu.addEventListener('click', function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		});
	};
	var $slider = $('.reviews__slider');
	if ($slider.length) {
		var currentSlide;
		var slidesCount;
		var sliderFirst = document.createElement('span');
		var sliderLast = document.createElement('span');
		sliderFirst.classList.add('first-index');
		sliderLast.classList.add('last-index');

		var updateSliderCounter = function (slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderFirst).text(('0' + currentSlide).slice(-2));
			$(sliderLast).text(('0' + slidesCount).slice(-2));
		};

		$slider.on('init', function (event, slick) {
			$(".slick-dots").prepend(sliderFirst);
			$(".slick-dots").append(sliderLast);
			updateSliderCounter(slick);
		});

		$slider.on('afterChange', function (event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

		$slider.slick({
			dots: true,
			infinite: false,
			arrows: true,
			speed: 1000,
			appendArrows: '.reviews__arrows',
			appendDots: '.reviews__dots',
			cssEase: 'ease-in-out',
			touchThreshold: 20,

		});
	}


	$('.gallery').slick({
		arrows: false,
		mobileFirst: true,
		arrows: false,
		infinite: true,
		variableWidth: true,
		centerMode: true,
		centerPadding: 10,
		responsive: [
			{
				breakpoint: 768,
				settings: 'unslick'
			}
		]
	});
	const phones = document.querySelectorAll('input[type="tel"]');
	$(phones).mask('+7(999) 999 99 99', { autoclear: false });

	$(function () {
		$('#consult-button, #consult-button-mobile').click(function () {
			$('#popup-consult').addClass('popup_active');
			$('body').addClass('_lock');
		});
		$('#callback-button').click(function () {
			$('#popup-callback').addClass('popup_active');
			$('body').addClass('_lock');
		});
		$('.popup__close').click(function () {
			$('.popup').removeClass('popup_active');
			$('body').removeClass('_lock');
		});
		$('.popup').mouseup(function (e) {
			let modalContent = $(".popup__container");
			if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
				$(this).removeClass('popup_active');
				$('body').removeClass('_lock');
			}
		});
	});
});


