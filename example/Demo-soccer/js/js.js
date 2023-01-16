$(document).ready(function(){
  $(window).scroll(function (){
    let sc = $(this).scrollTop()
    console.log(sc)
    // $('section>article').eq(0).css({'transform':'translateZ(' + sc + 'px)'})
    // $('section>article').eq(1).css({'transform':'translateZ(' + (sc - 5000) + 'px)'})
    // $('section>article').eq(2).css({'transform':'translateZ(' + (sc - 10000) + 'px)'})
    // $('section>article').eq(3).css({'transform':'translateZ(' + (sc - 15000) + 'px)'})
    // $('section>article').eq(4).css({'transform':'translateZ(' + (sc - 20000) + 'px)'})
    // 반복문을 통한 축약 방식
    for(var a = 0; a < 5; a++){
      $('section>article').eq(a).css({'transform':'translateZ(' + (sc - (5000*a)) + 'px)'})
      if(sc>=(a*5000) && sc<((a+1)*5000)){
      $('.menu li').removeClass('on')
      $('.menu li').eq(a).addClass('on')
      $('section>article').removeClass('on')
      $('section>article').eq(a).addClass('on')
    }
    }
    // if(sc>=0 && sc<5000){
    //   $('.menu li').removeClass('on')
    //   $('.menu li').eq(0).addClass('on')
    //   $('section>article').removeClass('on')
    //   $('section>article').eq(0).addClass('on')
    // }
    // if(sc>=5000 && sc<10000){
    //   $('.menu li').removeClass('on')
    //   $('.menu li').eq(1).addClass('on')
    //   $('section>article').removeClass('on')
    //   $('section>article').eq(1).addClass('on')
    // }
    // if(sc>=10000 && sc<15000){
    //   $('.menu li').removeClass('on')
    //   $('.menu li').eq(2).addClass('on')
    //   $('section>article').removeClass('on')
    //   $('section>article').eq(2).addClass('on')
    // }
    // if(sc>=15000 && sc<20000){
    //   $('.menu li').removeClass('on')
    //   $('.menu li').eq(3).addClass('on')
    //   $('section>article').removeClass('on')
    //   $('section>article').eq(3).addClass('on')
    // }
    // if(sc>=20000){
    //   $('.menu li').removeClass('on')
    //   $('.menu li').eq(4).addClass('on')
    //   $('section>article').removeClass('on')
    //   $('section>article').eq(4).addClass('on')
    // }
  })
  $('.menu li').click(function (){
    let i = $(this).index()
    $('body,html').stop().animate({'scrollTop':5000*i},600)
  });
  $('body').mousemove(function(e){
    let X = e.pageX;
    let Y = e.pageY;
    $('.mouse').css({'left': X,'top': Y})
    
$('.obj11').css({'left':(20+(X/200))+'%', 'top':(Y/200)+'%'})
$('.obj12').css({'left':(-10+(X/200))+'%', 'top':(-10+(Y/200))+'%'})
$('.obj13').css({'right':(-45-(X/200))+'%', 'top':(-35+(Y/200))+'%'})
$('.obj21').css({'right':(10+(X/300))+'%', 'top':(20+((Y-5000)/500))+'%'})
$('.obj22').css({'right':(-36+(X/200))+'%', 'top':(-23+((Y-5000)/500))+'%'})
$('.obj31').css({'left':(10-(X/200))+'%', 'top':(7+((Y-10000)/200))+'%'})
$('.obj32').css({'left':(15-(X/200))+'%', 'top':((Y-10000)/200)+'%'})
$('.obj41').css({'left':(30+(X/200))+'%', 'top':(-20+((Y-15000)/200))+'%'})
$('.obj42').css({'left':(X/200)+'%', 'top':((Y-15000)/200)+'%'})
$('.obj43').css({'left':(X/200)+'%', 'top':(-50+((Y-15000)/200))+'%'})
$('.obj51').css({'left':(-X/200)+'%', 'top':((Y-20000)/200)+'%'})
$('.obj52').css({'left':(17-(X/200))+'%', 'top':(-45+((Y-20000)/200))+'%'})
$('.obj53').css({'right':(20+(X/200))+'%', 'top':(5+((Y-20000)/200))+'%'})
  })
})