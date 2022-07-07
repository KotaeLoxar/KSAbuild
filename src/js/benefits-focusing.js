function sliderBenefits() {
  const swiper = new Swiper('.benefits__swiper', {
    direction: 'horizontal',
    spaceBetween: 20,
    loop: true,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
  let mediaQuery = window.matchMedia('(min-width: 700px)');
  if (mediaQuery.matches) {
      const benefits = document.querySelectorAll('.benefit');
      for (let benefit of benefits) {
          let link = benefit.querySelector('.benefit__link');
          link.addEventListener('focus', () => {
              benefit.classList.add('focusing');
          }, true);
          link.addEventListener('blur', () => {
              benefit.classList.remove('focusing');
          }, true);
      }
  }
};

document.addEventListener('DOMContentLoaded', sliderBenefits);

