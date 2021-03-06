$(function(){
	var swiper = new Swiper('.ourabout .swiper-container', {
	    pagination: '.ourabout .swiper-pagination',
	    paginationClickable: true,
	    slidesPerView: 5,
	    spaceBetween: 50,
	    prevButton:'.ourabout .swiper-button-prev',
	    nextButton:'.ourabout .swiper-button-next',
	    breakpoints: {
	        1024: {
	            slidesPerView: 4,
	            spaceBetween: 40
	        },
	        768: {
	            slidesPerView: 3,
	            spaceBetween: 30
	        },
	        640: {
	            slidesPerView: 2,
	            spaceBetween: 20
	        },
	        320: {
	            slidesPerView: 1,
	            spaceBetween: 10
	        }
	    }
	});

})