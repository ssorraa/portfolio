$(document).ready(function () {

  let ht = $(window).height(),
    posx, posy;

  $('section').height(ht)
  $(window).resize(function () {
    ht = $(window).height();
    $('section').height(ht);
  })
  // $('section').mousemove(function (e) {
  //   posx = e.pageX;
  //   posy = e.pageY;
  //   $('.box h2').eq(0).text(posx);
  //   $('.box h2').eq(1).text(posy);
  // })
  $('section').eq(0).mousemove(function (e) {
    $('.p11').css({
      'right': 20 - (posx / 30),
      'bottom': 20 - (posy / 30)
    })
    $('.p12').css({
      'right': 130 + (posx / 30),
      'bottom': -40 + (posy / 30)
    })
    $('.p13').css({
      'right': 60 - (posx / 30),
      'top': 180 - (posy / 30)
    })
  })
  $('section').eq(1).mousemove(function (e) {
    $('.p21').css({
      'right': -180 - (posx / 20),
      'bottom': -280 - ((posy - ht) / 20)
    })
    $('.p22').css({
      'right': -40 + (posx / 60),
      'bottom': -120 + ((posy - ht) / 60)
    })
  })
  $('section').eq(2).mousemove(function (e) {
    $('.p31').css({
      'right': 180 - (posx / 30),
      'bottom': 30 - ((posy - (2 * ht)) / 30)
    })
    $('.p32').css({
      'right': 110 + (posx / 30),
      'bottom': -270 + ((posy - (2 * ht)) / 30)
    })
    $('.p33').css({
      'right': -70 - (posx / 30),
      'bottom': -130 - ((posy - (2 * ht)) / 30)
    })
  })
  $('section').eq(3).mousemove(function (e) {
    $('.p41').css({
      'right': 20 - (posx / 30),
      'bottom': -120 - ((posy - (3 * ht)) / 30)
    })
    $('.p42').css({
      'right': -(posx / 30),
      'bottom': -180 - ((posy - (3 * ht)) / 30)
    })
  })
  $('#gnb li').click(function () {
    let i = $(this).index()
    $('html,body').stop().animate({
      'scrollTop': ht * i
    }, 700)
  })

  $('section').mousewheel(function (event, delta) {
    if (delta > 0 && $(this).index() != 0) {
      // prev(): 이전 요소, next(): 다음 요소
      let prev = $(this).prev().offset().top;
      $('html,body').stop().animate({
        'scrollTop': prev
      }, 1000)
      
    } else if (delta < 0 && $(this).index() != 3) {
      // 다음 섹션으로 이동
      let next = $(this).next().offset().top;
      $('html,body').stop().animate({
        'scrollTop': next
      }, 1000)
      
    }
  })
  // 처음 들어왔을 때 스크롤의 값이 변하지 않기때문에
  // html에 첫번째 li에 on값을 넣어야한다
  // 하지만 스크롤의 값이 0이 아니라면 바로 적용된다! 유레카!
  $(window).scroll(function () {
    let sc = $(this).scrollTop();
    for (var n = 0; n < 4; n++) {
      if (sc + (ht / 2.5) >= ht * n && sc + (ht / 2.5) < ht * (n + 1)) {
        $('#gnb li').removeClass('on')
        $('#gnb li').eq(n).addClass('on')
      }
    }
  })



})