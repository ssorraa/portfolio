$(document).ready(function () {
  $('nav>ul li:nth-child(1)').click(function () {
    $('section>div').removeClass('on');
    $('section>div:nth-child(1)').addClass('on');
    $('#menubtn').show();
    $('nav').removeClass('on');
    $('section').removeClass('on');
  })
  $('nav>ul li:nth-child(2)').click(function () {
    $('section>div').removeClass('on');
    $('section>div:nth-child(2)').addClass('on');
    $('#menubtn').show();
    $('nav').removeClass('on');
    $('section').removeClass('on');
  })
  $('nav>ul li:nth-child(3)').click(function () {
    $('section>div').removeClass('on');
    $('section>div:nth-child(3)').addClass('on');
    $('#menubtn').show();
    $('nav').removeClass('on');
    $('section').removeClass('on');
  })
  $('#menubtn').click(function () {
    $(this).hide();
    $('nav').addClass('on');
    $('section').addClass('on');
  })
  $('.logo').click(function () {
    $('#menubtn').show();
    $('nav').removeClass('on');
    $('section').removeClass('on');
  })
})



let rkor = document.getElementById('kor')
let ko;

function korset() {
  ko = Number(prompt('국어점수는?'));
  rkor.innerHTML = ko;
}
