$(function() {
	$.easing.def = "easeOutQuart";


	$('select').niceSelect();
	$(".owl-carousel").owlCarousel({
		//animateOut: 'fadeOut',
		//fallbackEasing: "easeOutQuad",
		animateOut: 'slideOut',
    	animateIn: 'slideIn',
		nav: true,
		loop: true,
		navText: [],
		//autoplay: true,
		pagination: false,
		navSpeed: 5000,
		items: 1,
		navContainer: '.owl-slide #info-container',
	});
});
