$(document).ready(function () {
  // 스크롤 동작
  $(window).scroll(function () {
    let sc = $(this).scrollTop();
    console.log(sc)
    if (sc >= 200 && sc < 1700) {
      $('.news .conBox').addClass('on')
    } else {
      $('.news .conBox').removeClass('on')
    }
    if (sc >= 1300 && sc < 2600) {
      $('.bg .active').addClass('on')
    } else {
      $('.bg .active').removeClass('on')
    }
    if (sc >= 200) {
      $('.topBtn').css({'display':'flex'})
      $('.topBtn').stop().animate({'opacity':1},400)
    } else {
      $('.topBtn').stop().animate({'opacity':0},400)
      $('.topBtn').css({'display':'none'})
    }
  })
  // 상단 버튼 동작
  $('.topBtn').click(function () {
    $('html,body').stop().animate({
      'scrollTop': 0
    }, 600)
  })
  // 호버 동작
  $('.slide .imgBox>i').mouseenter(function(){
    let i = $(this).index()
    console.log(i)
    $('.slide .imgBox>img').eq(i-8).addClass('on')
  })
  $('.slide .imgBox>i').mouseleave(function(){
    let i = $(this).index()
    $('.slide .imgBox>img').eq(i-8).removeClass('on')
  })
  // 슬라이드 동작-메인슬라이드
  let a = 0;
  let timer = function(){
    $('.slide .imgBox>i').eq(1).trigger('click')
  };
  let mainSlide = setInterval(timer,2000)
  $('.slide .imgBox>i').click(function(){
    let i = $(this).index()
    if(i == 8) {
      a--;
      if(a < 0) {a = 4;};
    }else if (i == 9) {
      a++;
      if(a > 3) {a = 0;};
    }
    console.log(a)
    $('.slide .imgBox a').eq(a-1).css({'left':0}).animate({'left':'-100%'})
    $('.slide .imgBox a').eq(a).css({'left':'100%'}).animate({'left':0})
  })
})