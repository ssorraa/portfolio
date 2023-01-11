$(document).ready(function(){
// 화면의 크기가 바뀔 때마다
$(window).resize(function(){
// body 높이값과 section의 가로값 통일시키기
// section가로값 = article의 갯수x가로값
// 갯수: size
let a = $('article').size()
let aWd = $('article').width()
$('section').width(a*(aWd+20))
$('body').height(a*(aWd+20))
})

// 화면에서 스크롤바가 움질일때 상단의 위치값을 찾아라
$(window).scroll(function(){
  let sc = $(this).scrollTop()
  $('section').stop().animate({'left':-sc},600)
})
$('section article').click(function(){
  $('section').stop().animate({'width':4400},600)
  $(this).stop().animate({'width':400},600)
})
$('section article').mouseleave(function(){
  $('section').stop().animate({'width':4000},600)
  $(this).stop().animate({'width':180},600)
})
$('.gnb li').click(function(){
  let i = $(this).index()
$('html,body').scrollTop(i*1000)
})
})