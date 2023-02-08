$(document).ready(function(){
  let wd = $(window).width()
  let ht = $(window).height()
  $('article').css({'height':ht})
  $(window).resize(function(){
    wd = $(window).width()
    ht = $(window).height()
    $('article').css({'height':ht})
  })
})