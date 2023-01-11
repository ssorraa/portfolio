$(document).ready(function(){


	//시작하자마자 스크롤은 제일 하단으로 내려놓아라.
	$('html,body').stop().animate({scrollTop:4000},800)

	// //스크롤값구하기

	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		$('h1').text(scroll);

		$('section').stop().animate({'left':-scroll},600)

	})

	// $('#navi li').eq(0).click(function(){
	// 	$('html,body').stop().animate({scrollTop:0},800)
	// });
	// $('#navi li').eq(1).click(function(){
	// 	$('html,body').stop().animate({scrollTop:1000},800)
	// })
	// $('#navi li').eq(2).click(function(){
	// 	$('html,body').stop().animate({scrollTop:2000},800)
	// })
	// $('#navi li').eq(3).click(function(){
	// 	$('html,body').stop().animate({scrollTop:3000},800)
	// })

	$('#navi li').click(function(){
		var i = $(this).index();

		$('html,body').stop().animate({scrollTop:1000*i},800)


	})












	$('article h2').click(function(){

		
		$('article').removeClass('on')
		$(this).parent().addClass('on');


	// article h2를 클릭했을때 형제인 p에 클릭한 
	// h2의 자손인 a의 속성값을 받아 p의 자손인 
	// img의 속성값에 넣겠다.	

	var src= $(this).children('a').attr('href')
	console.log(src);

	$('article p img').attr({'src':""})
	$(this).siblings('p').children('img').attr({'src':src})
			});





	$('span').click(function(){
		$('article').removeClass('on')
	})



})