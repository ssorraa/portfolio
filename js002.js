$(document).ready(function () {
  let ht = $(window).height();
  $('article').height(ht)
  $(window).resize(function () {
    let ht = $(window).height();
    $('article').height(ht)
  });
  $(window).scroll(function () {
    let sc = $(this).scrollTop();
    $('.txt p').eq(0).find('span').text(sc);
    // scrolltop이 header높이값보다 커질때 
    // header에 Class on을 붙여라.
    if (sc > hdht) {
      $('header').addClass('on')
    } else {
      $('header').removeClass('on')
    }
  });
  let hdht = $('header').offset().top;
  let a1ht = $('article').eq(0).offset().top;
  let a2ht = $('article').eq(1).offset().top;
  let a3ht = $('article').eq(2).offset().top;
  let a4ht = $('article').eq(3).offset().top;
  $('.txt p').eq(1).find('span').text(a1ht);
  $('.txt p').eq(2).find('span').text(a2ht);
  $('.txt p').eq(3).find('span').text(a3ht);
  $('.txt p').eq(4).find('span').text(a4ht);
  $('.txt p').eq(5).find('span').text(hdht);
  $('nav li').click(function () {
    let i = $(this).index()
    let aht = $('article').eq(i).offset().top;
    $('html,body').animate({'scrollTop':aht},800)
  })
})