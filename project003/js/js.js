$(document).ready(function(){
let ht = $(window).height();
let wd = $(window).width();
let imgs = '';
for(var i = 0; i<301; i++){
  if(i < 9) {
    imgs+='<img src="image/mainBg00' + (i+1) + '.jpg">'
  } else if (i < 99) {
    imgs+='<img src="image/mainBg0' + (i+1) + '.jpg">'
  } else {
    imgs+='<img src="image/mainBg' + (i+1) + '.jpg">'
  }
  $('.bg').html(imgs)
  console.log(imgs)
}
$(window).mousemove(function(e){
  let x = e.pageX;
  let wd = $(window).width();
  // 움직인/최대거리*200
  // 연산식 만들기
  let num = Math.trunc((x/wd)*301)
  $('.bg img').hide()
  $('.bg img').eq(num).show()
  console.log(num)
})
// 인트로-h1 원래 애니메이션으로 바꾸기
setTimeout(function() {
$('header h1 .s').css({'animation' : 'logoS 60s infinite linear'})
$('header h1 .w').css({'animation' : 'logoW 60s infinite linear'})
$('header h1 .j').css({'animation' : 'logoJ 60s infinite linear'})
$('header h1 .a').css({'animation' : 'logoA 60s infinite linear'})
}, 4000);
})