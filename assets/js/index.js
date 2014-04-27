// JavaScript Document
$(function(){
  //首页焦点banner
  $(".banner_box").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime:4000,delayTime:600,autoPage:true,titCell:".hd ul",trigger:"click"});
  
  //焦点下多图滚动加载
  $(".picScroll").hover(function(){$(this).find(".prev,.next").stop(true,true).fadeTo("show",0.3)},function(){$(this).find(".prev,.next").fadeOut()});
  $(".picScroll").slide({ mainCell:"ul", effect:"leftLoop", vis:3, scroll:2, autoPage:true, switchLoad:"_src" });
  
  //焦点右侧公告
  /* 详简切换通过添加on类名和css控制 */
	$(".proclamation li").hover(function(){ $(this).addClass("on").siblings().removeClass("on")},function(){ });
	/* Tab切换 */
	$(".proclamation").slide({ titCell:"dt h3", mainCell:"dd",autoPlay:false,effect:"left",delayTime:300 });
  
  //热卖商品
  $(".home-sale-layout .left-layout").slide({titCell:".tabs-nav li", mainCell:".bd", delayTime:0 });
  
  //限时折扣
  $(".sale-discount").slide({mainCell:"ul",effect:"leftLoop",trigger:"click"});
  //倒计时
  setTimeout("takeCount()", 1000);
  
  //首页 N格 修复宽度bug
  $(".g_lazy .focus").slide({ mainCell:".bd ul",titCell:".hd ul",effect:"fold",autoPlay:true,delayTime:200,autoPage:"<li>$</li>" });
  
	//首页 N格 修复宽度bug
  $(".lattice .items:last-child").css('marginLeft','2px');
  $(".lattice .items:first-child").css('marginRight','22px');
  
	//首页 家装服务 下焦点图
  $(".foucs_pic_box").slide({ mainCell:".pic",titCell:".hd",effect:"fold", autoPlay:false, delayTime:600, trigger:"click",autoPage:"<li></li>"});
});