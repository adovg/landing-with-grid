
$(document).ready(function () {
	console.log('document ready');
	
	$('.works__btn button, .works__btn a').on('focus', function() {
		 $(this).parents('.works__element').addClass('works__element--active');
	});

	$('.works__btn button, .works__btn a').on('blur', function(e) {
		$(this).parents('.works__element').removeClass('works__element--active');
	});

});