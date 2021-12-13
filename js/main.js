(function($) {
	'use strict';
	// your code here

$('.menu-icom i').on('click', function() {
	$('.menu').animate({
		'left' : '0'
	});
});
$('.menu .close i').on('click', function() {
	$('.menu ').animate({
		'left' : '-255'
	});
});

//owl carousel
$(.'filter-button-group').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filterValue });
});

var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition:true,
	masonry: {
		columnwidth: 'grid-item'
	}
})

//javascrip




$('.menu-icom').on('click', function(){
	$('.menu ul ').slideToggle();
} ); 


$(window).scroll(function(){
	var scrl = $(window).scrollTop();
	if (scrl > 300) {
		$('.top').css({'opacity' : '1'});
	}
	else{
		$('.top').css({'opacity' : '0'});
	}
});

$('.top').on('click', function(){
	$('html').animate({'scrollTop' : '0'}, 2000);
} ); 

}) (jQuery);
