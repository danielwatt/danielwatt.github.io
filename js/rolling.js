$(function() {
	 
	$(window).scroll(function() {
		var fraction = $(window).scrollTop()/($("#aboutContainer").offset().top-200);
		var theta =  fraction*2*Math.PI;
		var opac = fraction*1.0;
		var length = Math.PI*150;
		var position = length - (fraction*length);
		if(fraction<1){
			$('.profilePicture').css({ 
				transform: 'rotate(' + theta + 'rad)',
				opacity: opac,
				right: position + 'px'
				});
	 	}
	 	else
	 	{
	 		$('.profilePicture').css({ 
	 			transform: 'rotate(' + 2*Math.PI + 'rad)',
	 			opacity: 1.0,
	 			right: 0 + 'px'
	 			});
	 	}
	});
});
