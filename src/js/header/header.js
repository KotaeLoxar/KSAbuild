$(function(){

  let header = $('.header'),
	    scrollPrev = 0,
      heroPadding = parseInt($('.hero__container').css('padding-top')),
      heightHeader = parseInt(header.css('height')),
      scrolled = $(window).scrollTop();

  function HeaderEffect() {
    if ( scrolled > heroPadding-heightHeader && !header.hasClass('out') ) {
      header.addClass('header-up-effect');
    } else {
      header.removeClass('header-up-effect');
    }
  }

  $(window).unload(HeaderEffect())

  $(window).scroll(function() {

    let scrolled = $(window).scrollTop();
    console.log($('document').width);
    if ( scrolled > 100 && scrolled > scrollPrev ) {
      if ( !$('.header__nav').hasClass('active') ) {
        header.addClass('out');
      };
      if ( $('document').width > 1070 ) {
        header.addClass('out');
      };
    } else {
      header.removeClass('out');
    }
    scrollPrev = scrolled;

    if ( scrolled > heroPadding-heightHeader && !header.hasClass('out') ) {
      header.addClass('header-up-effect');
    } else {
      header.removeClass('header-up-effect');
    }

  });
});