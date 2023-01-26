$(document).ready(function () {
  // 메인슬라이드-높이 지정
  let ht = $('.slide .imgBox>a>img').height()
  console.log(ht)
  $('.slide .imgBox').height(ht)
  // 전체 스크롤 동작
  $(window).scroll(function () {
    let sc = $(this).scrollTop();
    if (sc >= 200 && sc < 1700) {
      $('.news .conBox').addClass('on');
    } else {
      $('.news .conBox').removeClass('on');
    };
    if (sc >= 1300 && sc < 2600) {
      $('.bg .active').addClass('on');
    } else {
      $('.bg .active').removeClass('on');
    };
    if (sc >= 200) {
      $('.topBtn').css({'display':'flex'});
      $('.topBtn').stop().animate({'opacity':1},400);
    } else {
      $('.topBtn').stop().animate({'opacity':0},400,
        function(){
          $('.topBtn').css({'display':'none'});
        });
    }
  })
  // 상단 버튼 동작
  $('.topBtn').click(function () {
    $('html,body').stop().animate({
      'scrollTop': 0
    }, 600)
  })
  // 메인슬라이드-호버
  $('.slide .imgBox>i').mouseenter(function(){
    let i = $(this).index()
    $('.slide .imgBox>img').eq(i-8).addClass('on')
  })
  $('.slide .imgBox>i').mouseleave(function(){
    let i = $(this).index()
    $('.slide .imgBox>img').eq(i-8).removeClass('on')
  })
  // 메인슬라이드-시간
  let a = 0;
  let timer = function(){
    $('.slide .imgBox>i').eq(1).trigger('click');
  };
  let mainSlide = setInterval(timer,5000);
  $('.slide .imgBox').mouseenter(function(){
    clearInterval(mainSlide)
  });
  $('.slide .imgBox').mouseleave(function(){
    mainSlide = setInterval(timer,5000);
  });
  // 메인슬라이드-아이콘 클릭
  $('.slide .imgBox>i').click(function(){
    $('.slide .imgBox>a>img').css({'border-radius':0});
    $('.slide .imgBox>a').css({'pointer-events':'none'});
    let i = $(this).index()
    if(i == 8) {
      $('.slide .imgBox>a').eq(a-1).css({'left':'-100%'}).animate({'left':0});
      $('.slide .imgBox>a').eq(a).css({'left':0}).animate({'left':'100%'},
      function(){
        $('.slide .imgBox>a>img').css({'border-radius':'100px 300px 100px 300px'});
        $('.slide .imgBox>a').css({'pointer-events':'unset'});
      });
      a--;
      if(a < 0) {a = 3;};
    }else if (i == 9) {
      a++;
      if(a > 3) {a = 0;};
      $('.slide .imgBox>a').eq(a-1).css({'left':0}).animate({'left':'-100%'});
      $('.slide .imgBox>a').eq(a).css({'left':'100%'}).animate({'left':0},
      function(){
        $('.slide .imgBox>a>img').css({'border-radius':'100px 300px 100px 300px'});
        $('.slide .imgBox>a').css({'pointer-events':'unset'});
      });
    };
  });
  // 메인 슬라이드-높이 변경
  $(window).resize(function(){
    ht = $('.slide .imgBox>a>img').height()
    console.log(ht)
    $('.slide .imgBox').height(ht)
  })
  // 뉴스-태그목록-클릭
  // 여기서부터
  let newsi = 0;
  $('.news .tag li').click(function(){
    if ($(this).index() >= 3) {
      alert('준비중입니다');
    } else{
      newsi = $(this).index();
      $('.news .tag li').removeClass('on');
      $('.news .tag li').eq(newsi).addClass('on');
      $('.listBox .box ul').removeClass('on');
      $('.listBox .box ul').eq(newsi).addClass('on');
      $('.news .conBox article').removeClass('on');
      $('.news .conBox article').eq(newsi*8).addClass('on');
      $('.listBox .box li').css({'order':0});
      b = 0;
  };
  })
  // 뉴스-뉴스목록-아이콘 클릭
  let b = 0;
  $('.listBox .left i').click(function(){
    if(b <= 0) {
      b = 8;
      $('.listBox .box ul').eq(newsi).children('li').css({'order':0});
    };
    $('.listBox .box ul').eq(newsi).children('li').eq(b-1).css({'order':-1});
    $('.listBox .box ul').eq(newsi).css({'left':'-250px'}).animate({'left':0},
    function(){
    });
    b--;
  });
  $('.listBox .right i').click(function(){
    $('.listBox .box ul').eq(newsi).css({'left':0}).animate({'left':'-250px'},
    function(){
      if(b >= 8) {
        b = 0;
        $('.listBox .box ul').eq(newsi).children('li').css({'order':0});
      };
      $('.listBox .box ul').eq(newsi).children('li').eq(b-1).css({'order':1});
      $('.listBox .box ul').eq(newsi).css({'left':0});
    });
    b++;
  });

});