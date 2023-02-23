$(document).ready(function(){
  let ht = $(window).height();
  let wd = $(window).width();
  $('.bg').mouseenter(function(){
    $('.profile').addClass('on')
    $('.timeline').addClass('on')
  })
  $('.bg').mouseleave(function(){
    $('.profile').removeClass('on')
    $('.timeline').removeClass('on')
  })
  // 반복문, i번째 li에 있는 i(아이콘)가 1개 초과면 1번째꺼 투명도 낮추기
  // for($('.timeline .list li').eq(i).length > 1) {
  //   $('.timeline .list i').eq(0).css({'opacity':0.3})
  //   console.log()
  // }
  })