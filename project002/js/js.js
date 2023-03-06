$(document).ready(function () {
  let wd = $(window).width()
  let ht = $(window).height()-100;
  console.log(ht)
  // 윈도우에 맞게 크기 조절
  let wdset = function () {
    wd = $(window).width();
    ht = $(window).height()-100;
    $('article').height(ht).eq(0).height(ht+100);
    $('#product .ani').css({'height': wd * 2}).css({'top': parseInt($('#product .ani').css('left'))});
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
    $('#list div').css({'height': ht / 3}).css({'width': wd / 5})
    $('#info article iframe').css({'width':(ht/9)*16}).css({'margin-left':($('#info article iframe').width()-$('#info article .videoWrap').width())/-2})
    $('#info .cover').css({'height': ht*3});
    $('#end .store .text').css({'height':2*ht}).css({'width':wd})
    $('#end .store .cover').css({'height':2*ht}).css({'width':wd})
  }
  window.setTimeout(function () {
  wdset();
}, 500)
  // 윈도우 사이즈 변경시 크기 조절
  $(window).resize(function () {
    wdset();
  })
  $(window).scroll(function () {
    let sc = $(this).scrollTop();
    // 스크롤 헤더 설정
    if (sc == 0) {
      $('#header').css({'background-color': 'unset'})
    } else {
      $('#header').css({'background-color': '#FFD02C'})
    }
    // 스크롤 설정
$('section').mousewheel(function(event,delta){
  let i = $(this).index();
  let throttle;
  event.preventDefault();
  event.stopPropagation();
    throttle = setTimeout(() => {
      throttle = null;
      if (i < 3 && delta > 0) {
        $('html,body').stop().animate({'scrollTop':ht*(i-1)}, 300, function(){$('section').unbind()})
      }
      if (i < 3 && delta < 0) {
        $('html,body').stop().animate({'scrollTop':ht*(i+1)}, 300, function(){$('section').unbind()})
        if (i == 2) {
        }
      }
      if (i == 3 && delta > 0 && sc < ht*(i-1)) {
          $('html,body').stop().animate({'scrollTop':ht*(i-1)})
      }
      if (i == 3 && delta < 0 && sc > ht*(i+2)) {
          $('html,body').stop().animate({'scrollTop':ht*(i+3)})
      }
      if (i > 3 && delta > 0 && $('#map').mouseenter() != true) {
        $('html,body').stop().animate({'scrollTop':ht*(i+1)})
        if(i == 4) {
          console.log(2)
        }
      }
      if (i > 3 && delta < 0) {
        $('html,body').stop().animate({'scrollTop':ht*(i+4)})
      }
    }, 300);
})
    // 동영상 flex
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
  // 지도 생성
// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
      center: new kakao.maps.LatLng(36.38266, 129.28915), // 지도의 중심좌표
      level: 12, // 지도의 확대 레벨
      mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색합니다
ps.keywordSearch('레고 스토어', placesSearchCB); 

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        // map.setBounds(bounds);
    } 
}
// 마커 위치 확인
// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });
    marker.setOpacity(0.6);
    		// 마커에 mouseover 이벤트를 등록한다
		kakao.maps.event.addListener(marker, 'mouseover', function() {
      marker.setOpacity(1);
  });
  // 마커에 mouseout 이벤트 등록
  kakao.maps.event.addListener(marker, 'mouseout', function() {
    marker.setOpacity(0.6);
  });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:10px;font-size:16px;white-space: nowrap;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
} 
// 메뉴 클릭하면 on/off
  $('#gnb li').eq(0).click(function(){
    if ($('#gnb').hasClass('on') != true) {
    $('#gnb').addClass('on')
    } else {
      $('#gnb').removeClass('on')
    }
  })
  // 제품목록 호버시 크기조절
  $('#list div').mouseenter(function(){
    if ($(this).index() != 7 ) {
    $(this).stop().animate({'height': (ht/3)*1.15, 'width': (wd/5)*1.15, 'margin-left': -(((wd/5)*1.15)-(wd/5))/2, 'margin-top': -(((ht/3)*1.15)-(ht/3))/2}, 300).css({'z-index':5})
    $(this).find('p').eq(0).stop().animate({'margin-left': ((wd/5*1.15)-(wd/5))/2, 'margin-top': ((ht/3*1.15)-(ht/3))/2}, 300)
    $(this).find('p').eq(1).stop().animate({'margin-right': ((wd/5*1.15)-(wd/5))/2, 'margin-bottom': ((ht/3*1.15)-(ht/3))/2}, 300)
    $(this).find('.fa-heart, .fa-shopping-cart').stop().animate({'margin-left': ((wd/5*1.15)-(wd/5))/2, 'margin-bottom': ((ht/3*1.15)-(ht/3))/2}, 300)
    
    }
  })
  $('#list div').mouseleave(function(){
    if ($(this).index() != 7 ) {
    $(this).css({'z-index':4}).stop().animate({'height': ht / 3, 'width': wd / 5, 'margin-left': 0, 'margin-top': 0}, 200, function(){
      $(this).css({'z-index':3})
    })
    $(this).find('p').eq(0).stop().animate({'margin-left': 0, 'margin-top': 0}, 200)
    $(this).find('p').eq(1).stop().animate({'margin-right': 0, 'margin-bottom': 0}, 200)
    $(this).find('.fa-heart, .fa-shopping-cart').stop().animate({'margin-left': 0, 'margin-bottom': 0}, 200)
  }
  // sns아이콘 클릭시 클래스 변경
  })
  $('#sns .snsIcon i').click(function(){
    let i = $(this).index()
    $('#sns .snsIcon i').removeClass('on')
    $('#sns .snsImg ul').removeClass('on')
    $(this).addClass('on')
    $('#sns .snsImg ul').eq(i).addClass('on')
  })
  $('#sns .snsImg ul a').click(function(event){
    event.preventDefault();
    console.log('해당 사이트는 포트폴리오 사이트이기 때문에 링크로 넘어가는것을 방지합니다')
  })
})
