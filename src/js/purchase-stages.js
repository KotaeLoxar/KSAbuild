//Purchase stages slider init
const swiper = new Swiper(".purchase-stages__slider", {
  grabCursor: true,
  autoHeight: true,
  speed: 700,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },

  breakpoints: {
    2650: {
      slidesPerView: 2,
      spaceBetween: 90
    },

    2000: {
      slidesPerView: "auto",
      spaceBetween: 20
    },

    1165: {
      spaceBetween: 40,
      slidesPerView: "auto",
    },

    800: {
      spaceBetween: 40
    },

    600: {
      spaceBetween: 40
    },

    500: {
      spaceBetween: 40
    },

    380: {
      spaceBetween: 90
    },

    370: {
      spaceBetween: 100
    },

    361: {
      spaceBetween: 100
    },

    360: {
      spaceBetween: 20
    },

    340: {
      spaceBetween: 70
    },

    320: {
      spaceBetween: 60
    }
  },
});