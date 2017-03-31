$(function() {
	$(".owl-carousel").owlCarousel({
		nav: true,
		lazyLoad: true,
		loop: true,
		navText: [],
		//autoplay: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		pagination: false,
		rewindSpeed: 500,
		items: 1
	});
	$('select').niceSelect();
});
