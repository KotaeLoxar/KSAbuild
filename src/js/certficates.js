// Slider init
const benefitsSwiper = new Swiper('.certificates__swiper', {
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