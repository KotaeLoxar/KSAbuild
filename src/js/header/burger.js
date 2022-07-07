
function burger() {
  let header = document.querySelector('.header'),
      nav = document.querySelector('.header__nav'),
      burger = document.querySelector('.header__burger'),
      burgerSvg = document.querySelector('.burger__svg');

  burger.addEventListener('click', () => {
    let heightHeader = header.clientHeight;
    burgerSvg.classList.toggle('burger-svg-active');
    heightHeader += 'px';
    nav.classList.toggle('active');
    nav.style.top = heightHeader;

    })
};

document.addEventListener('DOMContentLoaded', burger);