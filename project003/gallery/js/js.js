$(document).ready(function(){
  let ht = $(window).height();
  let wd = $(window).width();
  $('.list li').click(function(){
    $('body').removeClass()
    if($(this).index() == 0) {
      $('body').addClass('one')
    } else if($(this).index() == 1) {
      $('body').addClass('two')
    } else {
      $('body').addClass('three')
    }
  })
  })