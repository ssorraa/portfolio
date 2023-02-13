$(document).ready(function () {
  let wd = $(window).width()
  let ht = $(window).height()
  let wdset = function () {
    wd = $(window).width();
    ht = $(window).height();
    $('article').css({'height': ht});
    $('#product .ani').css({'height': wd * 2}).css({'top': parseInt($('#product .ani').css('left'))});
    console.log(parseInt($('#product .ani').css('left')));
    window.setTimeout(function () {
      let vidWd = $('#main .vid video').width();
      let vidHt = $('#main .vid video').height();
      if (vidWd < wd) {
        $('#main .vid video').addClass('on')
        vidWd = $('#main .vid video').width();
      } else if (vidHt < ht) {
        $('#main .vid video').removeClass('on')
      }
      $('#main .vid video').css({
        'margin-left': -((vidWd - wd) / 2)
      })
      // 추후 오프닝
    }, 500)
    $('#list div').css({'height': ht / 3}).css({'width': wd / 5})
    $('#info article iframe').css({'width':(ht/9)*16}).css({'margin-left':($('#info article iframe').width()-$('#info article .videoWrap').width())/-2})
    $('#info .cover').css({'height': ht*3});
  }
  wdset();
  $(window).resize(function () {
    wdset();
  })
  $(window).scroll(function () {
    let sc = $(this).scrollTop();
    if ( sc > $('#info article').eq(0).offset().top && sc < $('#info article').eq(0).offset().top+ht) {
      $('#info article').eq(0).find('.videoWrap').css({'top':sc-$('#info article').eq(0).offset().top})
    } else {
      $('#info article').eq(0).find('.videoWrap').css({'top':0})
    } if ( sc > $('#info article').eq(1).offset().top && sc < $('#info article').eq(1).offset().top+ht) {
      $('#info article').eq(1).find('.videoWrap').css({'top':sc-$('#info article').eq(1).offset().top})
    } else {
      $('#info article').eq(1).find('.videoWrap').css({'top':0})
    }if ( sc > $('#info article').eq(2).offset().top && sc < $('#info article').eq(2).offset().top+ht) {
      $('#info article').eq(2).find('.videoWrap').css({'top':sc-$('#info article').eq(2).offset().top})
    } else {
      $('#info article').eq(2).find('.videoWrap').css({'top':0})
    }
  })
})