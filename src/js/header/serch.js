//serch
let search = $('.header__search');
let form = $('.header__search-form');
search.on('click', function(){
  search.addClass('hidden');
  form.removeClass('hidden').addClass('active');
})

//select
$(document).ready(function() {
  $('.js-example-basic-single').select2({
    placeholder: 'Выберите категорию',
    closeOnSelect: true,
    width: '30%',
  });
});