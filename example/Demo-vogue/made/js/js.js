$(document).ready(function() {
$('nav>ul li:nth-child(1)').click(function() {
  $('section>div').removeClass('on');
  $('section>div:nth-child(1)').addClass('on');
  $('#menubtn').show();
  $('nav').removeClass('on');
  $('section').removeClass('on');
})
$('nav>ul li:nth-child(2)').click(function() {
  $('section>div').removeClass('on');
  $('section>div:nth-child(2)').addClass('on');
  $('#menubtn').show();
  $('nav').removeClass('on');
  $('section').removeClass('on');
})
$('nav>ul li:nth-child(3)').click(function() {
  $('section>div').removeClass('on');
  $('section>div:nth-child(3)').addClass('on');
  $('#menubtn').show();
  $('nav').removeClass('on');
  $('section').removeClass('on');
})
$('#menubtn').click(function() {
  $(this).hide();
  $('nav').addClass('on');
  $('section').addClass('on');
})
})