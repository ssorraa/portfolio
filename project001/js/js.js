  // 18:41~19:25
  // 21:00~22:53
$(document).ready(function () {
  let wd = $(window).width()
  // 중요! 메인슬라이드-높이 지정
  if ($('.slide .imgBox>a').height() > 0) {
    let siht = $('.slide .imgBox>a').height();
    $('.slide .imgBox').height(siht);
  }
  let nsc = $('.news').offset().top;
  let bsc = $('.bg').offset().top;
  // 전체 스크롤 동작
  $(window).scroll(function () {
    let sc = $(this).scrollTop()+$(window).height();
    nsc = $('.news').offset().top;
    bsc = $('.bg').offset().top;
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
    $(this).children('ul').stop().slideDown(600)
      gnbClick = $(this).index();
  })
  $('.gnb>li').mouseleave(function(){
    $(this).children('ul').stop().slideUp(600)
    gnbClick = 10;
  })
}
let snbClick = 0;
$('.gnb>li').children('ul').click(function () {
  snbClick = 1;
})
$('.gnb>li').click(function(){
  if (gnbClick != $(this).index()) {
  $('.gnb>li').children('ul').stop().slideUp(600)
  $(this).children('ul').stop().slideDown(600)
  gnbClick = $(this).index();
  snbClick = 0;
  } else if (snbClick == 1) {
  } else {
    $(this).children('ul').stop().slideUp(600)
    gnbClick = 10;
  }
  snbClick = 0;
})

  // 메뉴 버튼 클릭
  $('.util li').eq(5).click(function(){
    if($('.header').hasClass('on')) {
      $('.header').removeClass('on')
      $('body').css({'overflow':'unset'})
    } else {
    $('.header').addClass('on')}
    $('body').css({'overflow':'hidden'})
  })

  // 메뉴 공백 클릭
  let hwClick = true;
  $('.header').click(function(){
    $('.header .wrap').click(function(){
      hwClick = true;
    })
    if(hwClick != true) {
      $('.header').removeClass('on');
      $('body').css({'overflow':'unset'})
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
  let mainTimer = function(){
    $('.slide .imgBox>i').eq(1).trigger('click');
  };
  let mainSlide = setInterval(mainTimer,5000);
  $('.slide .imgBox').mouseenter(function(){
    clearInterval(mainSlide)
  });
  $('.slide .imgBox').mouseleave(function(){
    mainSlide = setInterval(mainTimer,5000);
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
        if(wd > 1440) {
          $('.slide .imgBox>a>img').css({'border-radius':'100px 300px 100px 300px'});}
        if(wd > 1024 && wd<= 1440) {
          $('.slide .imgBox>a>img').css({'border-radius':'50px 150px 50px 150px'});}
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
        if(wd > 1440) {
        $('.slide .imgBox>a>img').css({'border-radius':'100px 300px 100px 300px'});}
        if(wd > 1024 && wd<= 1440) {
          $('.slide .imgBox>a>img').css({'border-radius':'50px 150px 50px 150px'});}
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
    if (i/5 != newsi) {
    $('.news .tag li').eq(i/5).trigger('click');
    }
  });

  // 뉴스-뉴스목록-뉴스 클릭
  $('.listBox .box li').click(function(){
    let i = $(this).index();
    $('.news .conBox article').removeClass('on').eq((newsi*8)+i).addClass('on');
    if(wd > 1024) {
      $('html,body').stop().animate({
        'scrollTop': ($('.news .conBox').offset().top) -30
      }, 600);
    } else {
      $('html,body').stop().animate({
        'scrollTop': ($('.news .conBox').offset().top) - ($('.header .wrap').height()) -30
      }, 600);
    }
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
      if(b >= 8) {
        b = 0;
        $('.listBox .box ul').eq(newsi).children('li').css({'order':0});
      };
    });
  });

  // 공지-시간
  let c = 0
  let noticeTimer = function(){
    c++;
    if (c > 4) {c = 0}
    $('.news .notice ul li').eq(c).css({'top':'100%'}).animate({'top':'20%'});
    $('.news .notice ul li').eq(c-1).css({'top':'20%'}).animate({'top':'-60%'})
    
  };
  let noticeSlide = setInterval(noticeTimer,5000);
  $('.news .notice ul').mouseenter(function(){
    clearInterval(noticeSlide)
  });
  $('.news .notice ul').mouseleave(function(){
    noticeSlide = setInterval(noticeTimer,5000);
  });
  
  // 인포-책-클릭
  $('.infoBook li img').click(function(){
    let i = $(this).parents().index()
    console.log(i)
    $('.bookPopup ul li').removeClass('on')
    $('.bookPopup ul li').eq(i).addClass('on')
    $('.bookPopup').addClass('on')
    $('body').css({'overflow':'hidden'})
  })
  // 인포-팝업-클릭
  $('.popupBg span').click(function(){
    $('.bookPopup').removeClass('on')
    $('body').css({'overflow':'unset'})
  })


  // 미디어쿼리-메인 슬라이드-높이 변경
  // 미디어쿼리-뉴스콘텐츠-줄바꿈
  // 미디어쿼리-뉴스리스트-순서 정상화
  let NewsBrBig = [];
  let NewsBrTiny = [];
    // 처음 화면 크기에도 적용
  let wdset = function(){
      if(wd > 1024){
        $('.util li').eq(2).removeClass('on')
        for (let i = 0; i < $('.news .conBox').children('article').length; i++ ) {
          $('.news .conBox article').eq(i).find('p').html(NewsBrBig[i])
          console.log($('.infoBook li').eq(5).find('iframe'))
          }
      } else {
        $('.slide .imgBox>a>img').css({'border-radius':0});
        for (let i = 0; i < $('.news .conBox').children('article').length; i++ ) {
          $('.news .conBox article').eq(i).find('p').html(NewsBrTiny[i])
          console.log($('.infoBook li').eq(5).find('iframe'))
        }
        $('.listBox .box li').css({'order':0});
      }
      if (wd <= 768) {
        $('.notice li').css({'order':0});
      }
    }
  for (let i = 0; i < $('.news .conBox').children('article').length; i++ ) {
    NewsBrTiny.push($('.news .conBox article div').children('p').eq(i).text().replace(/  /g, '').replace(/\n\n/g, '<br><br>'));
    NewsBrBig.push($('.news .conBox article div').children('p').eq(i).text().replace(/  /g, '').replace(/\n/g,'<br>'));
  }
  $(window).resize(function(){
    siht = $('.slide .imgBox>a').height();
    $('.slide .imgBox').height(siht);
    wd = $(window).width()
  wdset;
  })
    
    $('.util li').eq(2).click(function(){
      if(wd <= 1024 && !$(this).hasClass('on')) {
        $(this).addClass('on')
      } else {
        $(this).removeClass('on')
      }
    })
});