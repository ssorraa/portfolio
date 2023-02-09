$(document).ready(function () {
      let wd = $(window).width()
      let ht = $(window).height()
      let wdset = function () {
        wd = $(window).width();
        ht = $(window).height();
        $('article').css({
          'height': ht
        });
        $('#product .ani').css({
          'height': wd * 2
        }).css({
          'top': parseInt($('#product .ani').css('left'))
        });
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
        }, 50)
        $('#list div').css({
          'height': ht / 3
        }).css({
          'width': wd / 5
        })
      }
      wdset();
      $(window).resize(function () {
        wdset();
      })
      $(window).scroll(function () {
        let sc = $(this).scrollTop();
        if ( sc > $('#info article').offset().top) {
        }

      })
      })