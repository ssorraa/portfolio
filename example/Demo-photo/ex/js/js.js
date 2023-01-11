$(document).ready(function(){

  $(window).resize(function(){
  let a = $('article').size()
  let aWd = $('article').width()
  $('section').width(a*(aWd+20))
  $('body').height(a*(aWd+20))
  })
  

  $(window).scroll(function(){
    let sc = $(this).scrollTop()
    $('section').stop().animate({'left':-sc},600)
    if(sc < 1000){
      $('.gnb li').removeClass()
      $('.gnb li').eq(0).addClass('on')
    } else if (sc < 2000) {
      $('.gnb li').removeClass()
      $('.gnb li').eq(1).addClass('on')
    } else if (sc < 3000) {
      $('.gnb li').removeClass()
      $('.gnb li').eq(2).addClass('on')
    }
    else {
      $('.gnb li').removeClass()
      $('.gnb li').eq(3).addClass('on')
    }
  })
  $('section article').click(function(){
    $('section').stop().animate({'width':4400},600)
    $(this).stop().animate({'width':400},600)
  })
  $('section article').mouseleave(function(){
    $('section').stop().animate({'width':4000},600)
    $(this).stop().animate({'width':180},600)
  })
  $('.gnb li').click(function(){
    let i = $(this).index()
  $('html,body').scrollTop(i*1000)
    // $('section').stop().animate({'left':-(i*1000)},600)
  })
  })