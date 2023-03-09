$(document).ready(function(){
  let imgs = '';
  for(var i = 0; i<200; i++){
    imgs+='<img src="img/pic' + i + '.jpg">'
    $('section').html(imgs)
    console.log(imgs)
  }
  $(window).mousemove(function(e){
    let x = e.pageX;
    let wd = $(window).width()
    // 움직인/최대거리*200
    // 연산식 만들기
    let num = Math.trunc((x/wd)*200)
    $('bg img').hide()
    $('bg img').eq(num).show()
  })


})