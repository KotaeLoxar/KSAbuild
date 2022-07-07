window.onload = function() {

  // let topArrow = 50-(Number(arrow.clientHeight)+27)/100;
  // arrow.style.top = topArrow+'%';

   // Функция выезжающего блока в слайдере
  function openInfoBlock(e) {
      let arrow = e.querySelector('.projects__arrow'),
      info = e.querySelector('.projects__info');

      if (window.screen.width > 1296) {

        e.addEventListener('mouseover', function(){
          arrow.classList.remove('arrow-active');
          info.classList.add('projects__info_active');
        })

        e.addEventListener('mouseout', function() {
          arrow.classList.add('arrow-active');
          info.classList.remove('projects__info_active');
        })

      } else {

        e.addEventListener('mouseover', function(){
          if (arrow.classList.contains('arrow-active')) {
            arrow.classList.remove('arrow-active');
          }
          if (info.classList.contains('projects__info_active')) {
            info.classList.remove('projects__info_active');
          }
        })

        e.addEventListener('mouseout', function() {
          if (arrow.classList.contains('arrow-active')) {
            arrow.classList.remove('arrow-active');
          }
          if (info.classList.contains('projects__info_active')) {
            info.classList.remove('projects__info_active');
          }
        })

      }
  }

  // функция иницилизации свайперов
  function initSwiper(key) {
    let swiper = new Swiper(`.projects__swiper-${key}`, {
      direction: 'horizontal',
      effect: 'fade',
      loop: true,

      pagination: {
        el: `.projects__pagination-${key}`,
        clickable: true
      },

      navigation: {
        nextEl: `.projects__swiper-button-next-${key}`,
        prevEl: `.projects__swiper-button-prev-${key}`,
      },
    });
  }

  let projectsSwipers = document.querySelectorAll('.projects__swiper');

  if (projectsSwipers.length > 0) {
    for (let key in projectsSwipers) {

      // Инициализация всех слайдеров в разделе projects
      projectsSwipers[key].classList.add(`projects__swiper-${key}`);
      initSwiper(key);

      // Поведение выезжающего блока
      window.addEventListener('resize', openInfoBlock(projectsSwipers[key]));
    }

  }
};