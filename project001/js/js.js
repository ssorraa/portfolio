$(document).ready(function(){
  // 갤러리 이미지 움직임 설정
  // 왼쪽 버튼 클릭시 이미지가 왼쪽으로 이동
  let i = 0;
  $('.gallery .left').click(function(){
    i ++;
    if (i > 4){
    i = 0;
    $('.gallery li').animate({'opacity': 1}, 100);
  };
    let gwd = $('.gallery li').width();
$('.gallery ul').stop().animate({'left':-i*(gwd+5)},200);
$('.gallery li').removeClass('on');
$('.gallery li').eq(i).addClass('on');
$('.gallery li').eq(i-1).animate({'opacity': 0}, 100);
  });
  // 오른쪽 버튼 클릭시 이미지가 오른쪽으로 이동
  $('.gallery .right').click(function(){
    i --;
    if (i < 0){
    i = 4;
    $('.gallery li').animate({'opacity': 0}, 100);
    $('.gallery li').eq(i).animate({'opacity': 1}, 100);
    $('.gallery li').eq(i+1).animate({'opacity': 1}, 100);
    $('.gallery li').eq(i+2).animate({'opacity': 1}, 100);
  };
    let gwd = $('.gallery li').width()
$('.gallery ul').stop().animate({'left':-i*(gwd+5)},200);
$('.gallery li').removeClass('on');
$('.gallery li').eq(i).addClass('on');
$('.gallery li').eq(i).animate({'opacity': 1}, 100);
  });
  // 리뷰 움직임 설정
  // 왼쪽 버튼 클릭시 이미지가 왼쪽으로 이동
  let a = 0;
  $('.review .left').click(function(){
    a ++;
    if(a > 3) {
      a = 0;
    };
    let rwd = $('.review li').width();
    $('.review ul').animate({'left':a*(rwd+20)},200);
  });
  // 오른쪽 버튼 클릭시 이미지가 오른쪽으로 이동
  $('.review .right').click(function(){
    a --;
    if(a < 0) {
      a = 3;
    };
    let rwd = $('.review li').width();
    $('.review ul').animate({'left':a*(rwd+20)},200);
  });
})