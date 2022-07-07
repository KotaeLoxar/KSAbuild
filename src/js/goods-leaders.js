function goodsLeadersScript() {
  const goodSwiper = new Swiper('.good__swiper', {
    direction: 'horizontal',
    loop: true,
    // spaceBetween: 20,

    pagination: {
      el: '.good__pagination',
      clickable: true
    }
  })

  // document.querySelector(".good__btn").addEventListener('click', function () {
  //   document.querySelector('.good__btn').classList.add('hidden')
  //   document.querySelector('.good__form').classList.remove('hidden')
  // })

  let counters = document.getElementsByClassName("good__form");
  for (let i = 0, len = counters.length; i < len; i++) {
    let counter = counters[i],
        button = counter.getElementsByTagName("button"),
        input = counter.getElementsByTagName("input")[0];

    input.onchange = function () { input.value = +input.value || 0; };
    button[0].onclick = function () { input.value = Math.max(0, input.value - 1); };
    button[1].onclick = function () { input.value -= -1; };
  }
};

document.addEventListener('DOMContentLoaded', goodsLeadersScript);