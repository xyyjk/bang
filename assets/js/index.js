// JavaScript Document
$(function(){
  
  //首页 N格 修复宽度bug
  $(".g_lazy .focus").slide({ mainCell:".bd ul",titCell:".hd ul",effect:"fold",autoPlay:true,delayTime:200,autoPage:"<li>$</li>" });
  
	//首页 N格 修复宽度bug
  $(".lattice .items:last-child").css('marginLeft','2px');
  $(".lattice .items:first-child").css('marginRight','22px');
  
	//首页 家装服务 下焦点图
  $(".foucs_pic_box").slide({ mainCell:".pic",titCell:".hd",effect:"fold", autoPlay:false, delayTime:600, trigger:"click",autoPage:"<li></li>"});
});