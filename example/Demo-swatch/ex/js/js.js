$(document).ready(function () {

  let ht = $(window).height(), posx, posy;

  $('section').height(ht)
  $(window).resize(function () {
    ht = $(window).height();
    $('section').height(ht);
  })
  $('section').mousemove(function (e) {
    posx = e.pageX;
    posy = e.pageY;
    $('.box h2').eq(0).text(posx);
    $('.box h2').eq(1).text(posy);
  })
  $('section').eq(0).mousemove(function (e) {
    $('.p11').css({
      'right': 20 - (posx / 30),
      'bottom': 20 - (posy / 30)
    })
    $('.p12').css({
      'right': 130 + (posx / 30),
      'bottom': -40 + (posy / 30)
    })
    $('.p13').css({
      'right': 60 - (posx / 30),
      'top': 180 - (posy / 30)
    })
  })
  $('section').eq(1).mousemove(function (e) {
    $('.p21').css({
      'right': -180 - (posx / 20),
      'bottom': -280 - ((posy-ht) / 20)
    })
    $('.p22').css({
      'right': -40 + (posx / 60),
      'bottom': -120 + ((posy-ht) / 60)
    })
  })
  $('section').eq(2).mousemove(function (e) {
    $('.p31').css({
      'right': 180 - (posx / 30),
      'bottom': 30 - ((posy-(2*ht)) / 30)
    })
    $('.p32').css({
      'right': 110 + (posx / 30),
      'bottom': -270 + ((posy-(2*ht)) / 30)
    })
    $('.p33').css({
      'right': -70 - (posx / 30),
      'bottom': -130 - ((posy-(2*ht)) / 30)
    })
  })
  $('section').eq(3).mousemove(function (e) {
    $('.p41').css({
      'right': 20 - (posx / 30),
      'bottom': -120 - ((posy-(3*ht)) / 30)
    })
    $('.p42').css({
      'right': -(posx / 30),
      'bottom': -180 - ((posy-(3*ht)) / 30)
    })
  })




})