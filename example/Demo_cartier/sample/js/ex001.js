$(document).ready(function(){

	//실행문

	//article 에 마우스를 올렸을때 

	$('article').mouseenter(function(){

		//동영상이 플레이된다.

		var vid= $(this).find('video').get(0);
		vid.play();	
		//동영상이 보인다 
		$(this).find('video').animate({'opacity':'0.9'},1200)


		//article의 크기가 커지고 h3이 나온다.
		$(this).stop().animate({'width':"35%"},1000,function(){
			$(this).find('h3').stop().animate({'right':"10px"},400)
			$(this).find('p').stop().animate({'right':'10px'},800)

			})
		})

	

	//마우스아웃시 
	$('article').mouseleave(function(){
		//동영상을 정지시켜라
		var vid= $(this).find('video').get(0);
		vid.pause();	


		//article의 크기,h3,p가 원래대로 돌아와라
		$(this).stop().animate({'width':"12%"},700);
		$(this).find('video').stop().animate({'opacity':"0"},2000);
		$(this).find('h3').stop().animate({'right':'-310px'},200);
		$(this).find('p').stop().animate({'right':'-310px'},500)

	})


})