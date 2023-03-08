$(document).ready(function(){
  // 전체 설정
  // h2 클릭했을 때 섹션 실행
  $('h2').click(function () {
    if($(this).parents('section').is($('#profile')) == true) {
      $('section').removeClass('on')
      $('#popup').addClass('on')
      $('.profilePopup0').addClass('on')
    } else if ($(this).parents('section').is($('#main')) == true) {
      $('section').removeClass('on')
    } else {
      $('section').removeClass('on')
    $(this).parents('section').addClass('on')
    }
  })
  // #main 설정
  // mainBg 효과-css변수 생성 및 랜덤값 생성
  const COUNT = 10
let random = (min, max) => Math.random() * (max - min) + min
let mainBg = document.querySelector('.mainBg')

Array(COUNT).fill('').forEach((x, i) => {
  let span = document.createElement('span')
  span.style.setProperty('--x', random(1, 99))
  span.style.setProperty('--y', random(1, 99))
  span.style.setProperty('--n', i)
  span.style.setProperty('--dark-color', `hsl(${70 + i * 0.1}, 20%, 70%)`)
  span.style.setProperty('--bright-color', `hsl(${80 + i * 0.1}, 30%, 80%)`)
  mainBg.appendChild(span)
})
// mainCon 효과-10초 후에 20초마다 타이핑
setTimeout(function time() {
    TypeHangul.type('.typing', {
    intervalType: 80,
    humanize: 0.4,
})
  setInterval(time, 20000);
}, 5000);
let a = 0;
// article에 있는 동그라미 버튼 클릭하면 이동-왜안되지
// $('.count li').click(function() {
//   let b = $(this).index()
//   console.log(b)
//   console.log(a)
//   if ((b == 2 && a == 0) || (b == 1 && a == 2) || (b == 0 && a == 1)) {
//     $('.leftBtn').trigger('click');
//   }
//   else if ((b == 1 && a == 0) || (b == 2 && a == 1) || (b == 0 && a == 2)) {
//     $('.rightBtn').trigger('click');
//   }
// })
// article에 있는 좌우버튼 클릭하면 이동
$('.leftBtn').click(function() {
  // 왜안되지
  // $('.ex li').eq(a-1).css({'left':'150%'}).animate({'left':'50%'});
  // $('.ex li').eq(a).css({'left':'50%'}).animate({'left':'-150%'})
  $('#design .ex li').eq(a-1).css({'left':'-150%'}).animate({'left':'50%'});
  $('#design .ex li').eq(a).css({'left':'50%'}).animate({'left':'150%'})
  $('#publishing .ex li').eq(a-1).css({'left':'-150%'}).animate({'left':'50%'});
  $('#publishing .ex li').eq(a).css({'left':'50%'}).animate({'left':'150%'})
  let i = 0;
  let iconEdit = function(){
    $('#design .count li').eq(a).find('img').attr('src','image/i_circle' + i + '.png')
    $('#publishing .count li').eq(a).find('img').attr('src','image/i_circle' + i + '.png')
    if(a == 2) {
      $('#design .count li').eq(0).find('img').attr('src','image/i_circle' + (10-i) + '.png')
      $('#publishing .count li').eq(0).find('img').attr('src','image/i_circle' + (10-i) + '.png')
    } else {
    $('#design .count li').eq(a+1).find('img').attr('src','image/i_circle' + (10-i) + '.png')
    $('#publishing .count li').eq(a+1).find('img').attr('src','image/i_circle' + (10-i) + '.png')
  }
    i++;
    if(i > 10) {
      clearInterval(iconTimer)
    }
  }
  let iconTimer = setInterval(iconEdit,10);
  a--;
  if(a < 0) {a = 2;};
  $('.con').attr('class','con list' + a);
})
$('.rightBtn').click(function() {
  a++;
  if(a > 2) {a = 0;};
  $('.con').attr('class','con list' + a);
  // $('.ex li').eq(a-1).css({'left':'50%'}).animate({'left':'150%'});
  // $('.ex li').eq(a).css({'left':'-150%'}).animate({'left':'50%'})
  $('#design .ex li').eq(a-1).css({'left':'50%'}).animate({'left':'-150%'});
  $('#design .ex li').eq(a).css({'left':'150%'}).animate({'left':'50%'})
  $('#publishing .ex li').eq(a-1).css({'left':'50%'}).animate({'left':'-150%'});
  $('#publishing .ex li').eq(a).css({'left':'150%'}).animate({'left':'50%'})
  let i = 0;
  let iconEdit = function(){
    $('#design .count li').eq(a).find('img').attr('src','image/i_circle' + i + '.png')
    $('#design .count li').eq(a-1).find('img').attr('src','image/i_circle' + (10-i) + '.png')
    $('#publishing .count li').eq(a).find('img').attr('src','image/i_circle' + i + '.png')
    $('#publishing .count li').eq(a-1).find('img').attr('src','image/i_circle' + (10-i) + '.png')
    i++;
    if(i > 10) {
      clearInterval(iconTimer)
    }
  }
  let iconTimer = setInterval(iconEdit,10);
})
// design에 자세히 보기 누르면 팝업 열림
$('#design .ex .btn').click(function(){
  let i = $(this).parents('li').index()
  console.log(i)
  $('#popup').addClass('on')
  $('.designPopup'+ i).addClass('on')
})

  // popup -배경 클릭하면 꺼짐
  $('#popup').click(function() {
    $('.popupBox').click(function () {
    return false;
    })
    $('#popup').removeClass('on').find('.on').removeClass('on')
  })
})