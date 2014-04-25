// JavaScript Document
$(function(){
	//修正 nav_menu 边框
	$(".nav_menu dd:last-child").addClass("nober");
	
	function showNavTop() {
		td = $(document).scrollTop();
		if(td > 190){
			$(".nav_menu").addClass("nav_fixed");
		}else{
			$(".nav_menu").removeClass("nav_fixed");
		}
	}
	$(window).bind("scroll",function(){showNavTop()});
});