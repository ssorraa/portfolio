$(document).ready(function(){
  let ht,wd,timeWd;
  function wdset() {
    ht = $(window).height();
    wd = $(window).width();
    timeWd = $('.time').width();
    $('iframe').height(ht).width(wd);
  }
  wdset();
  $(window).resize(function () {
    wdset();
  })
  // 리스트 위치 조절
  let middle = $('.content .list li.middle').index()
  function listset() {
    $('.content .list li').css({'top':'320px', 'z-index':0, 'opacity': 0}).find('img').css({'margin':0})
    $('.content .list li').eq(middle-2).css({'top':'0px', 'z-index':1, 'opacity': 1}).find('.rotate').css({'transform':'rotateX(70deg)'}).find('img').css({'margin':'-30px 0'})
    $('.content .list li').eq(middle-1).css({'top':'50px', 'z-index':2, 'opacity': 1}).find('.rotate').css({'transform':'rotateX(70deg)'}).find('img').css({'margin':'-30px 0'})
    $('.content .list li').eq(middle).css({'top':'100px', 'z-index':3, 'opacity': 1}).find('.rotate').css({'transform':'rotateX(0deg)'}).find('img').css({'margin':'10px 0'})
    $('.content .list li').eq(middle+1).css({'top':'220px', 'z-index':4, 'opacity': 1}).find('.rotate').css({'transform':'rotateX(-70deg)'}).find('img').css({'margin':'-15px 0'})
    $('.content .list li').eq(middle+2).css({'top':'270px', 'z-index':5, 'opacity': 1}).find('.rotate').css({'transform':'rotateX(-70deg)'}).find('img').css({'margin':'-15px 0'})
    if (middle == 0) {
      $('.content .list li').eq(7).css({'top':'0px', 'z-index':1, 'opacity': 1}).find('.rotate').css({'transform':'rotateX(70deg)'}).find('img').css({'margin':'-30px 0'})
    }
    if (middle == 7) {
      $('.content .list li').eq(0).css({'top':'270px', 'z-index':5, 'opacity': 1}).find('.rotate').css({'transform':'rotateX(-70deg)'}).find('img').css({'margin':'-15px 0'})
    }
    if (middle == 8) {
      $('.content .list li').eq(0).css({'top':'220px', 'z-index':4, 'opacity': 1}).find('.rotate').css({'transform':'rotateX(-70deg)'}).find('img').css({'margin':'-15px 0'})
      $('.content .list li').eq(1).css({'top':'270px', 'z-index':5, 'opacity': 1}).find('.rotate').css({'transform':'rotateX(-70deg)'}).find('img').css({'margin':'-15px 0'})
    }
  }
  listset()
  // 다른 곡 재생

  // 뮤직비디오+재생
  let videoID, player, current;
  window.YT.ready(function(){
    $('.content .list li').click(function(){
      clearInterval(current);
      middle = $(this).index()
      $('.content .list li').removeClass('middle')
      videoID = $(this).attr('class')
      player.destroy();
    // 새로운 player 생성
    intervalID = setInterval(function() {
      if (typeof onYouTubeIframeAPIReady === "function") {
        clearInterval(intervalID);
        onYouTubeIframeAPIReady();
      }
    }, 100);
      $('.content .list li').eq(middle).addClass('middle')
      $('.content .lpBg img').removeClass('on').eq(middle).addClass('on')
      listset()
    })
    videoID = 'VUFbNAv9-DY',
    intervalID = setInterval(function() {
    if (typeof onYouTubeIframeAPIReady === "function") {
      clearInterval(intervalID);
      onYouTubeIframeAPIReady();
    }
  }, 100);
    
    function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
    height: ht,
    width: wd,
    videoId: videoID,
    playerVars: {
      'autoplay': 1,
      'controls': 1,
      'origin': 'https://www.youtube.com',
      'rel':0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
    });
    let duration;
        // 플레이어가 준비되면 실행
    function onPlayerReady() {
    setTimeout(function() {
    duration = player.getDuration();
      if (Math.ceil(duration) < 10)
      {
      $("span.end").text('0:0' + Math.ceil(duration))
      }else if (Math.ceil(duration) < 60)
      {
      $("span.end").text('0:' + Math.ceil(duration))
      } else (Math.ceil(duration) < 60)
      {
        let durationMin = Math.floor(Math.ceil(duration) / 60),
        durarionSec = Math.ceil(duration) % 60;
        if(durarionSec < 10) {durarionSec = '0'+durarionSec}
      $("span.end").text(durationMin+':'+durarionSec)
      }
      }, 1000);
      
  }
  // 플레이어 상태가 바뀌면 실행
  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      $('.content .lpBg img.on').css({'animation-play-state': 'running'})
      $('.fa-play').css({'color':'#777'})
      $('.fa-pause').css({'color':'#fff'})
      current = setInterval(function() {
        let currentVolume = player.getVolume();
        $('#volume').val(currentVolume);
        if (currentVolume > 50) {
          $('.fa-volume-low').removeClass('fa-volume-low').addClass('fa-volume-high')
          $('.fa-volume-xmark').removeClass('fa-volume-xmark').addClass('fa-volume-high')
        } else if (currentVolume <= 0) {
          $('.fa-volume-high').removeClass('fa-volume-high').addClass('fa-volume-xmark')
          $('.fa-volume-low').removeClass('fa-volume-low').addClass('fa-volume-xmark')
        } else {
          $('.fa-volume-high').removeClass('fa-volume-high').addClass('fa-volume-low')
          $('.fa-volume-xmark').removeClass('fa-volume-xmark').addClass('fa-volume-low')
        }
          let currentTime = player.getCurrentTime();
          let currentWd = Math.trunc((currentTime/duration)*timeWd);
          $('.current').width(currentWd+3)
          let lpPlyer = (currentTime/duration)*7;
          $('.lpPlayer').css({'transform':'rotateZ('+(91-lpPlyer)+'deg)'})
          if (Math.ceil(currentTime) < 10)
          {
          $("span.start").text('0:0' + Math.ceil(currentTime))
          }else if (Math.ceil(currentTime) < 60)
          {
          $("span.start").text('0:' + Math.ceil(currentTime))
          } else (Math.ceil(currentTime) < 60)
          {
            let currentTimeMin = Math.floor(Math.ceil(currentTime) / 60),
            durarionSec = Math.ceil(currentTime) % 60;
            if(durarionSec < 10) {durarionSec = '0'+durarionSec}
          $("span.start").text(currentTimeMin+':'+durarionSec)
          }
          if (duration <= Math.ceil(currentTime)) {
            player.seekTo(0);
            clearInterval(current);
          }
        }, 200);
    } else {
      clearInterval(current);
      $('.fa-play').css({'color':'#fff'})
      $('.fa-pause').css({'color':'#777'})
      $('.content .lpBg img.on').css({'animation-play-state': 'paused'})
    }
  }
  }
  // 재생클릭
$('.fa-play').click(function(){
  player.playVideo();
})
// 일시정지클릭
$('.fa-pause').click(function(){
  player.pauseVideo();
})
// 볼륨버튼클릭 
$('.fa-volume-high').click(function(){
  $('#volume').toggleClass('on')
})
// 볼륨조절
function setVolume() {
  const vol = $('#volume').val();
  player.setVolume(vol);
}
$('#volume').on('input', setVolume);
// 뮤비보기
$('.mvBtn').click(function(){
  $('.content').toggleClass('on')
})
  })
  })
