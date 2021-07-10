$(function(){
	$('.slider-wrap').slick({
		infinity: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1,
				 infinite: true,
				 dots: false
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1
			  }
			}
		 ]
	})
})