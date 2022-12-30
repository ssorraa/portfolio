$(document).ready(function () {
      // 브라우저의 높이값 찾기
      let ht = $(window).height();
      console.log(ht)
      // 연습용: gnb의 높이를 찾아라
      console.log($('#gnb').height())
      // 연습용: gnb의 가로값을 찾아라
      console.log($('#gnb').width())

      $('section').height(ht)
      // 브라우저가 리사이즈 될 때마다, 브라우저의 높이를 찾아서
      // 섹션의 높이값이 대입해라
      $(window).resize(function () {
        ht = $(window).height();
        $('section').height(ht);
      })
      // 마우스 움직임 찾아내기
      // section에서 마우스가 움직였을 때, 이미지의 위치값을 바꿔라
      $('section').mousemove(function (e) {
        let posx = e.pageX;
        let posy = e.pageY;
        // $('.box h2').eq(0).text(posx);
        // $('.box h2').eq(1).text(posy);

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
        $('.p21').css({
          'right': -180 - (posx / 20),
          'bottom': -280 - (posy / 20)
        })
        $('.p22').css({
          'right': -40 + (posx / 60),
          'bottom': -120 + (posy / 60)
        })
        $('.p31').css({
          'right': 180 - (posx / 30),
          'bottom': 30 - (posy / 30)
        })
        $('.p32').css({
          'right': 110 + (posx / 30),
          'bottom': -270 + (posy / 30)
        })
        $('.p33').css({
          'right': -70 - (posx / 30),
          'bottom': -130 - (posy / 30)
        })
        $('.p41').css({
          'right': 20 - (posx / 30),
          'bottom': -120 - (posy / 30)
        })
        $('.p42').css({
          'right': -(posx / 30),
          'bottom': -180 - (posy / 30)
        })
      })
      // 스크롤바의 위치값 찾아내기
      $(window).scroll(function () {
        let sc = $(this).scrollTop();
        // $('h1').text(sc)
        // 에니메이트작성법 .animate({속성명:속성값},지속시간);
        // if(sc+(ht/2)>=0 && sc+(ht/2)<ht) {
        //   $('#gnb li').removeClass('on')
        //   $('#gnb li').eq(0).addClass('on')
        // } else if(sc+(ht/2)>=ht && sc+(ht/2)<ht*2) {
        //   $('#gnb li').removeClass('on')
        //   $('#gnb li').eq(1).addClass('on')
        // }
        // else if(sc+(ht/2)>=ht*2 && sc+(ht/2)<ht*3) {
        //   $('#gnb li').removeClass('on')
        //   $('#gnb li').eq(2).addClass('on')
        // }else {
        //     $('#gnb li').removeClass('on')
        //     $('#gnb li').eq(3).addClass('on')
        // }
        // 반복문설정
        for (var n = 0; n < 4; n++) {
          if (sc+(ht / 2.5) >= ht*n && sc+(ht / 2.5) < ht*(n+1)) {
              $('#gnb li').removeClass('on')
              $('#gnb li').eq(n).addClass('on')
            }}
        // li를 클릭했을때, scrollTop을 해당 높이로 가게 만들어라
        $('#gnb li').click(function () {
          // 클릭했을 때 나의 순번 찾기
          let i = $(this).index()
          $('html,body').stop().animate({
            'scrollTop': ht * i
          }, 1000, 'easeOutQuart')
          // 클릭했을때 나에게 클래스 on값을 붙여라
          $('#gnb li').removeClass('on')
          $(this).addClass('on')
        })
        //연습용: h1에 마우스가 들어갔을때 나의 위치값을 찾아라
        // $('h1').mouseenter(function () {
        //   let htt = $(this).offset().top
        //   console.log(htt)
        // })
        // 마우스를 움직였을떄 화면이 움직여라
        $('section').mousewheel(function (event, delta) {
          if (delta > 0) {
            // 이전 섹션으로 이동
            let prev = $(this).prev().offset().top;
            $('html,body').stop().animate({
              'scrollTop': prev
            }, 1000)
          } else if (delta < 0) {
            // 다음 섹션으로 이동
            let next = $(this).next().offset().top;
            $('html,body').stop().animate({
              'scrollTop': next
            }, 1000)
          }
        })
      })
    })