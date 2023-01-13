$(document).ready(function(){

 $("article").mouseover(function(){

 	var vid = $(this).find("video").get(0);
 	vid.currentTime = 0; //재생은 0부터 시작해라.
 	vid.play();


 	$(this).stop().animate({"width":"35%"},1000,function(){
 		$(this).find("h3").stop().animate({"right":"10px"}); 
 	});
 	$(this).find("video").stop().animate({"opacity":"0.9"},1100);
 	
 });


  $("article").mouseleave(function(){

  	var vid = $(this).find("video").get(0);

 	vid.pause();

 	$(this).stop().animate({"width":"12%"},700);
 	$(this).find("video").stop().animate({"opacity":"0"},1100);
 	$(this).find("h3").stop().animate({"right":"-310px"},200); 
 })


})