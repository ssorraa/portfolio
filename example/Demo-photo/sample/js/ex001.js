$(document).ready(function(){
	//실행문
	$('html,body').stop().animate({'scrollTop':4000},800)

	$(window).scroll(function(){

		var scroll = $(this).scrollTop()
			 $('h1').text(scroll);
			

		$('section').stop().animate({'left':-scroll},600)	
	});

	//article h2를 클릭했을때 변해라.

	$('article h2').click(function(e){
		e.preventDefault()
		$('article').removeClass()
		$(this).parent().addClass('on')

		var src =$(this).children('a').attr('href');
		$('article p img').attr({'src':src})


	});

	$('span').click(function(){
		$('article').removeClass()
	})

	//네비를 클릭할때 1000씩 스크롤이 움직여라.
$('#navi li').click(function(){

	var i =$(this).index();

	$('#navi li').removeClass('on');
	$(this).addClass('on')

	$('html,body').scrollTop(1000*i)
})





})