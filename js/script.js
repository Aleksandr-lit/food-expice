function testWebP(callback) {

	var webP = new Image();

	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};

	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
	
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
			document.querySelector('body').classList.add('no-webp');
		}
});

$(document).ready(function () {
	$('.header__burger, .header__menu-link').click (function(event) {
		$('.header__burger, .header__user, .header__menu, .header__span').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

new Swiper('.top__slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	loop: true,
	effect: 'fade',
	fadeEffect: {
	// Паралельная смена прозрачности
		crossFade: true,
	},
});




