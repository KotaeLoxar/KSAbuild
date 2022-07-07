// import { createBenefitsSliderFocus } from './components/benefits-focusing.mjs';

// let benefitsSlider = createBenefitsSliderFocus();

//hidden-open header
let header = $('.header'),
	scrollPrev = 0;

// //hidden-open header
// let header = $('.header'),
// 	scrollPrev = 0;

// $(window).scroll(function() {
// 	let scrolled = $(window).scrollTop();

// 	if ( scrolled > 100 && scrolled > scrollPrev ) {
// 		header.addClass('out');
// 	} else {
// 		header.removeClass('out');
// 	}
// 	scrollPrev = scrolled;

// });

// });


//Certificates slider init
const certificatesSlider = new Swiper('.certificates__swiper', {
  // Optional parameters
  loop: true,
  direction: 'horizontal',
  slidesPerView: "auto",

  breakpoints: {
    480: {
      spaceBetween: 30
    },

    100: {
      spaceBetween: 10
    }
  }
});
