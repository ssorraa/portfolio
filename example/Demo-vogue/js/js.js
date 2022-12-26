$(document).ready(function () {

  // 제이쿼리선택자는 $(CSS표기방법)으로 선택함
  // addEventLisner의 경우 이벤트와 함수의 조합으로 표현
  $(document).ready(function () {
    // 제이쿼리선택자는 $(CSS표기방법)으로 선택함
    // addEventLisner의 경우 이벤트와 함수의 조합으로 표현
    // $('#gnb li:nth-child(3)').click(function () {
    //   // 모든 section의 div의 클래스명의 on 값을 지워라.
    //   $('section>div').removeClass('on');
    //   // section의 div 중 3번째 아이에게 클래스명에 on 값을 더해주어라.
    //   $('section>div:nth-child(3)').addClass('on');
    //   $('nav').removeClass('on');
    //   $('section').removeClass('on');
    // })
    // $('#gnb li:nth-child(1)').click(function () {
    //   // 모든 section의 div의 클래스명의 on 값을 지워라.
    //   $('section>div').removeClass('on');
    //   // section의 div 중 1번째 아이에게 클래스명에 on 값을 더해주어라.
    //   $('section>div:nth-child(1)').addClass('on');
    //   $('nav').removeClass('on');
    //   $('section').removeClass('on');
    // })
    // $('#gnb li:nth-child(2)').click(function () {
    //   // 모든 section의 div의 클래스명의 on 값을 지워라.
    //   $('section>div').removeClass('on');
    //   // section의 div 중 2번째 아이에게 클래스명에 on 값을 더해주어라.
    //   $('section>div:nth-child(2)').addClass('on');
    //   $('nav').removeClass('on');
    //   $('section').removeClass('on');
    // })

    //위의 함수를 축약하기 
    $('#gnb li').click(function (){
      let i = $(this).index();
      $('section>div').removeClass('on');
      $('section>div').eq(i).addClass('on');
      $('nav').removeClass('on');
      $('section').removeClass('on');
      $('.btnMenu').fadeIn();
    })

    // // btn 을 클릭했을때 nav 가 왼쪽 기준으로 오른쪽이 열리고
    // // section은 오른쪽을 기준으로 왼쪽이 열린다.
    // $('.btnMenu').click(function () {
    //   // $('nav').css({'transform':'rotateY(15deg)'});
    //   // $('section').css({'transform':'rotateY(-10deg)'});
    //   $('nav').addClass('on');
    //   $('section').addClass('on')
    // })
  })
  // $('#gnb li:nth-child(3)').click(function () {
  //   // 모든 section의 div의 클래스명의 on 값을 지워라.
  //   $('section>div').removeClass('on');
  //   // section의 div 중 3번째 아이에게 클래스명에 on 값을 더해주어라.
  //   $('section>div:nth-child(3)').addClass('on');
  //   $('.btnMenu').fadeIn();
  // })
  // $('#gnb li:nth-child(1)').click(function () {
  //   // 모든 section의 div의 클래스명의 on 값을 지워라.
  //   $('section>div').removeClass('on');
  //   // section의 div 중 1번째 아이에게 클래스명에 on 값을 더해주어라.
  //   $('section>div:nth-child(1)').addClass('on');
  //   $('.btnMenu').fadeIn();
  // })
  // $('#gnb li:nth-child(2)').click(function () {
  //   // 모든 section의 div의 클래스명의 on 값을 지워라.
  //   $('section>div').removeClass('on');
  //   // section의 div 중 2번째 아이에게 클래스명에 on 값을 더해주어라.
  //   $('section>div:nth-child(2)').addClass('on');
  //   $('.btnMenu').fadeIn();
  // })


  // btn 을 클릭했을때 nav 가 왼쪽 기준으로 오른쪽이 열리고
  // section은 오른쪽을 기준으로 왼쪽이 열린다.
  $('.btnMenu').click(function () {
    // $('nav').css({'transform':'rotateY(15deg)'});
    // $('section').css({'transform':'rotateY(-10deg)'});
    $('nav').addClass('on');
    $('section').addClass('on');
    $(this).fadeOut();
  })



})