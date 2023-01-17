$(document).ready(function () {
  let i = 0;
  let a = false;
  $('.left').click(function () {
    i++;
    $('.box').css({
      'transform': 'rotateY(' + (i*45) + 'deg)'
    })
    a = false;
    btn();
  })
  $('.right').click(function () {
    i--;
    $('.box').css({
      'transform': 'rotateY(' + (i*45) + 'deg)'
    });
    a = true;
    btn();
  })
  function right() {
    $('.right').trigger('click');
  };
  function left() {
    $('.left').trigger('click');
  };
  let slide = setInterval(left, 3000);
  // 마우스가 inner에 들어갔을 때 interval이 지워져라
  $('.inner').mouseenter(function () {
    clearInterval(slide);
  });
  // 마우스가 떠났을 때 setinterval이 다시 생겨라
  $('.inner').mouseleave(function () {
    btn();
  });
  function btn() {
    if (a == false) {
      clearInterval(slide);
      slide = setInterval(left, 3000);
    } else {
      clearInterval(slide);
      slide = setInterval(right, 3000);
    };
  };
})