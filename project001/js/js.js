  // 18:41~19:25
  // 21:00~22:53
$(document).ready(function () {
  let wd = $(window).width()
  // 중요! 메인슬라이드-높이 지정
  let siht = $('.slide .imgBox>a>img').height()
  $('.slide .imgBox').height(siht)

  // 전체 스크롤 동작
  $(window).scroll(function () {
    let sc = $(this).scrollTop()+$(window).height();
    let nsc = $('.news').offset().top;
    let bsc = $('.bg').offset().top;
    if (sc >= nsc+300) {
      $('.news').addClass('on');
    } else {
      $('.news').removeClass('on');
    };
    if (sc >= bsc+100) {
      $('.bg .active').addClass('on');
    } else {
      $('.bg .active').removeClass('on');
    };
    if (sc >= 200) {
      $('.topBtn').addClass('on')
    } else {
      $('.topBtn').removeClass('on');
    }
  })

  // 상단 버튼 동작
  $('.topBtn').click(function () {
    $('html,body').stop().animate({
      'scrollTop': 0
    }, 600);
  })

  // 메뉴 서브메뉴 슬라이드
  let gnbClick = 10; 
  if(wd > 1025) {
  $('.gnb>li').mouseenter(function(){
    $(this).children('ul').stop().slideDown()
      gnbClick = $(this).index();
  })
  $('.gnb>li').mouseleave(function(){
    $(this).children('ul').stop().slideUp()
    gnbClick = 10;
  })
}
let snbClick = 0;
$('.gnb>li').children('ul').click(function () {
  snbClick = 1;
})
$('.gnb>li').click(function(){
  if (gnbClick != $(this).index()) {
  $('.gnb>li').children('ul').stop().slideUp()
  $(this).children('ul').stop().slideDown()
  gnbClick = $(this).index();
  snbClick = 0;
  } else if (snbClick == 1) {
  } else {
    $(this).children('ul').stop().slideUp()
    gnbClick = 10;
  }
  snbClick = 0;
})

  // 메뉴 버튼 클릭
  $('.util li').eq(5).click(function(){
    if($('.header').hasClass('on')) {
      $('.header').removeClass('on')
    } else {
    $('.header').addClass('on')}
  })

  // 메뉴 공백 클릭
  let hwClick = true;
  $('.header').click(function(){
    $('.header .wrap').click(function(){
      hwClick = true;
    })
    if(hwClick != true) {
      $('.header').removeClass('on');
    }
    hwClick = false;
  })

  // 메인슬라이드-호버
  $('.slide .imgBox>i').mouseenter(function(){
    let i = $(this).index();
    $('.slide .imgBox>img').eq(i-7).addClass('on');
  })
  $('.slide .imgBox>i').mouseleave(function(){
    let i = $(this).index();
    $('.slide .imgBox>img').eq(i-7).removeClass('on');
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
    if(i == 7) {
      $('.slide .imgBox>a').eq(a-1).css({'left':'-100%'}).animate({'left':0});
      $('.slide .imgBox>a').eq(a).css({'left':0}).animate({'left':'100%'},
      function(){
        if(wd > 1024) {
        $('.slide .imgBox>a>img').css({'border-radius':'100px 300px 100px 300px'});}
        $('.slide .imgBox>a').css({'pointer-events':'unset'});
      });
      a--;
      if(a < 0) {a = 3;};
    }else if (i == 8) {
      a++;
      if(a > 3) {a = 0;};
      $('.slide .imgBox>a').eq(a-1).css({'left':0}).animate({'left':'-100%'});
      $('.slide .imgBox>a').eq(a).css({'left':'100%'}).animate({'left':0},
      function(){
        if(wd > 1024) {
        $('.slide .imgBox>a>img').css({'border-radius':'100px 300px 100px 300px'});}
        $('.slide .imgBox>a').css({'pointer-events':'unset'});
      });
    };
  });

  // 뉴스-태그목록-클릭
  let newsi = 0;
  $('.news .tag li').click(function(){
    if ($(this).index() >= 3) {
      alert('준비중입니다');
    } else{
      newsi = $(this).index();
      $('.news .tag li').removeClass('on').eq(newsi).addClass('on');
      $('.news .conBox article').removeClass('on').eq(newsi*8).addClass('on');
      $('.listBox .box ul').removeClass('on').eq(newsi).addClass('on');
      $('.listBox .box li').css({'order':0});
      b = 0;
  };
  })

  // 뉴스-뉴스콘텐츠-태그 클릭
  $('.news .conBox article span').click(function(){
    let i = $('.news .tag li').text().indexOf($(this).text());
    $('.news .tag li').eq(i/5).trigger('click');
  });

  // 뉴스-뉴스목록-뉴스 클릭
  $('.listBox .box li').click(function(){
    let i = $(this).index();
    $('.news .conBox article').removeClass('on').eq((newsi*8)+i).addClass('on');
  });

  // 뉴스-뉴스목록-아이콘 클릭
  let b = 0;
  $('.listBox .left i').click(function(){
    if(b <= 0) {
      b = 8;
      $('.listBox .box ul').eq(newsi).children('li').css({'order':0});
    };
    $('.listBox .box ul').eq(newsi).css({'left':'-250px'}).animate({'left':0},100,
    function(){
    }).children('li').eq(b-1).css({'order':-1});
    b--;
  });
  $('.listBox .right i').click(function(){
    b++;
    $('.listBox .box ul').eq(newsi).css({'left':0}).animate({'left':'-250px'},100,
    function(){
      $('.listBox .box ul').eq(newsi).css({'left':0}).children('li').eq(b-1).css({'order':1});
      $('.listBox .box ul').eq(newsi).children('li').eq(b-1).css({'order':1});
      $('.listBox .box ul').eq(newsi).css({'left':0});
      if(b >= 8) {
        b = 0;
        $('.listBox .box ul').eq(newsi).children('li').css({'order':0});
      };
    });
  });

  // 공지-시간

  // 인포-책-클릭

  // 인포-팝업-클릭

    // 미디어쿼리-메인 슬라이드-높이 변경
    $(window).resize(function(){
      siht = $('.slide .imgBox>a>img').height();
      $('.slide .imgBox').height(siht);
      wd = $(window).width()
      if(wd > 1024){
        $('.util li').eq(2).removeClass('on')
      } else {
        $('.slide .imgBox>a>img').css({'border-radius':0});
      }
    })
    
    $('.util li').eq(2).click(function(){
      if(wd <= 1024 && !$(this).hasClass('on')) {
        $(this).addClass('on')
      } else {
        $(this).removeClass('on')
      }
    })
});