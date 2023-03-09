$(document).ready(function(){
  let ht = $(window).height();
  let wd = $(window).width();
  $(window).height(wd);
  $('.bg').mouseenter(function(){
    $('.profile').addClass('on')
    $('.timeline').addClass('on')
  })
  $('.bg').mouseleave(function(){
    $('.profile').removeClass('on')
    $('.timeline').removeClass('on')
  })
  // 반복문, i번째 li에 있는 i(아이콘)가 1개 초과면 1번째꺼 투명도 낮추기
  console.log($('.timeline .list li').length)
  for(var i = 0; i< $('.timeline .list li').length; i++) {
    $('.timeline .list li').eq(i).find('p').each(function() {
      if ($(this).find('i').length > 1)
      {
        $(this).find('i').eq(0).css({'opacity':0.3})
        }
    })

  }
  // next 누르면 옆으로 이동 
  $('.next').click(function(){
    $('html, body').animate({
      scrollLeft: wd-150
  }, 500);
  })
  // 가로 스크롤
  $(window).on('wheel', function(event) {
    // event.preventDefault();
    var delta = event.originalEvent.deltaY;
    $('html, body').scrollLeft($('html, body').scrollLeft() + delta);
});
  })