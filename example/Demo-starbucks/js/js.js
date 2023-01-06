$(document).ready(function(){
  // 순차적으로 opacity가 1로 바뀌어라
  $('.luck1').stop().animate({'opacity':1},1000,function(){
    $('.tea1').stop().animate({'opacity':1},600,function(){
      $('.tea2').stop().animate({'opacity':1},550,function(){
        $('.tea3').stop().animate({'opacity':1},500)
      })
    })
  })
  $('.search a').click(function(){
    $('.search').stop().animate({'width':'160px'},600,function(){
      $('.search').find('input').stop().animate({'opacity':1},500)
    })
  })
  // 메뉴를 호버했을때 sub_menu가 보여라
  $('.gnb li').mouseenter(function(){
    let i = $(this).index()
    $('.sub_menu>div').slideUp(0)
    $('.sub' + (i+1)).stop().slideDown()
  })
  $('header').mouseleave(function(){
    let i = $(this).index()
    $('.sub_menu>div').slideUp()
  })
  // 스크롤바가 일정거리만큼 이동했을때 promotion_img/txt가 움직여라
  $(window).scroll(function(){
  let sc = $(this).scrollTop()
  $('h1').text(sc)
  if(sc >= 300 && sc < 1600) {
    $('.promotion_img').stop().animate({'left':0}, 1200)
    $('.promotion_txt').stop().animate({'right':0}, 1200)
  } else {
    $('.promotion_img').stop().animate({'left':'-100%'}, 1200)
    $('.promotion_txt').stop().animate({'right':'-100%'}, 1200)
  }
})
  
})