$(document).ready(function(){
//실행문


//아티클에 마우스가 올라갔을때 아티클의 크기가 커져라.
$('article').mouseover(function(){

	var vid = $(this).find('video').get(0);
	vid.currentTime=0;//재생시작점 
	vid.play()



	$(this).stop().animate({'width':'35%'},1000,function(){
		$(this).find('h3').stop().animate({'right':'10px'},400);
		$(this).find('p').stop().animate({'right':'10px'},800)
	});
	$(this).find('video').stop().animate({'opacity':1},1200)
});

$('article').mouseout(function(){

	var vid = $(this).find('video').get(0);
	vid.pause()

	$(this).stop().animate({'width':'12%'},700)
	$(this).find('video').stop().animate({'opacity':0},1200);

	$(this).find('h3').stop().animate({'right':'-310px'},200);
	$(this).find('p').stop().animate({'right':'-310px'},400)

})




})