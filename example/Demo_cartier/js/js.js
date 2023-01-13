$(document).ready(function(){
  $('article').mouseenter(function(){
    let vid = $(this).find('video').get(0)
    $(this).stop().animate({'width':'35%'},1000)
    $(this).find('video').stop().animate({'opacity':1},1200)
    vid.currentTime=0
    vid.play()
    $(this).find('h3').stop().animate({'right':'50px'},800)
    $(this).find('p').stop().animate({'right':'50px'},1000)
  })
  $('article').mouseleave(function(){
    let vid = $(this).find('video').get(0)
    $('article').stop().animate({'width':'20%'},1000)
    $(this).find('video').stop().animate({'opacity':0},1200)
    vid.pause()
    $(this).find('h3').stop().animate({'right':'-300px'},800)
    $(this).find('p').stop().animate({'right':'-300px'},500)
  })

})