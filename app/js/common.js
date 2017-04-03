$(function() {
	$('select').niceSelect();
	$(".owl-carousel").owlCarousel({
		nav: true,
		loop: true,
		navText: [],
		//autoplay: true,
		pagination: false,
		navSpeed: 600,
		items: 1,
		navContainer: '.owl-slide #info-container',
	});
});
