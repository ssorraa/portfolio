$(document).ready(function(){
$('nav li').click(function(){
  let i = $(this).index()
  $('article').removeClass('on')
  $('article').eq(i).addClass('on')
  if(i == 0){
    $('header').removeClass('on')
  }else {
    $('header').addClass('on')
  }
})
})