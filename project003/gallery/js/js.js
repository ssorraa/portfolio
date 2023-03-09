$(document).ready(function(){
  let ht = $(window).height();
  let wd = $(window).width();
  $('.list li').click(function(){
    $('body').removeClass()
    if($(this).index() == 0) {
      $('body').addClass('one')
    } else if($(this).index() == 1) {
      $('body').addClass('two')
    } else {
      $('body').addClass('three')
    }
  })
  // 이미지 클릭시 팝업창 생성
  $('.photo img').click(function(){
    let imgSave = $(this).attr('src');
    $('.popup').addClass('on').find('img').attr('src', imgSave)
    let imgWd = $('.popup img').width()
    let imgHt = $('.popup img').height()
    $('.popup img').css({'margin-left': -(imgWd/2),'margin-top': -(imgHt/2)})
  })
  // 팝업창 배경 클릭시 팝업 닫기
  $('.popup').click(function() {
    $('.popup img').click(function () {
    return false;
    })
    $('.popup').removeClass('on')
  })
  })