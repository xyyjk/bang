// JavaScript Document
$(function(){
  
    //侧边栏切换
    $("#sortlist h3").click( function(){$(this).parent().toggleClass("current");});
    
    
    //选项卡
    $("#voption").find(".suck_down").click(
      function(){
        var oData = $(".v-tabs");
        var $cont = oData.find(".tabcon div").length;
        var $arrtZi = oData.find(".tabcon");
        var $arrtDiv = $arrtZi.find("div");
        $(this).hide();
        $(this).next().show();  
        oData.find(".tab").show();
        oData.find(".tabcon").addClass("tabcon-multi");
        $arrtDiv.show();  //默认全部显示
        oData.find(".tab li").hover(
          function(){
            $(this).addClass("curr").siblings().removeClass("curr");  //当前位置 class操作
             var $arrtFu = $(this).attr("rel");    
             for(var i=0;i<$cont;i++){
               $arrtZi=$arrtDiv.eq(i).attr("rel")
               if($arrtFu==$arrtZi||$arrtFu=="0"){
                $arrtDiv.eq(i).show();
               }else{
                $arrtDiv.eq(i).hide();
               }
             } 
          }
        );
      }
    );
    //展开更多
    $("#voption").find(".suck_up").click(
      function(){
        var oData = $(".v-tabs");
        var $cont = oData.find(".tabcon div").length;
        var $arrtZi = oData.find(".tabcon");
        var $arrtDiv = $arrtZi.find("div");
        $(this).hide();
        $(this).prev().show();  
        oData.find(".tab").hide();
        oData.find(".tabcon").removeClass("tabcon-multi");
        for(var i=0;i<$cont;i++){
           $arrtZi=$arrtDiv.eq(i).attr("brand")
           if($arrtZi=="less"){
            $arrtDiv.eq(i).show();
           }else{
            $arrtDiv.eq(i).hide();
           }
         } 
      }
    );
    //计算隐藏分类标题
    function carAllitemmenu(){
      $("#select").find(".prop-attrs:lt(4)").show();  //显示前4个选项
      var oData = $(".v-tabs");
      var $cont = oData.find(".tabcon div").length;
      var $arrtZi = oData.find(".tabcon");
      var $arrtDiv = $arrtZi.find("div");
      
      for(var i=0;i<$cont;i++){
         $arrtZi=$arrtDiv.eq(i).attr("brand")
         if($arrtZi=="more"){
          $arrtDiv.eq(i).hide();
         }else{
          $arrtDiv.eq(i).show();
         }
       } 
    };
    carAllitemmenu();
    //点击显示更多
    $("#moreProp .attr-extra").click(function(){
        $("#select").find(".prop-attrs").show();
        $("#moreProp").hide();
        $("#lessProp").show();
    });
    $("#lessProp .attr-extra").click(function(){
        $("#select").find(".prop-attrs:gt(3)").hide();
        $("#lessProp").hide();
        $("#moreProp").show();
    });
	
	//items
	$(".goods-content").slide({ titCell:".goods-pic-scroll-show li", mainCell:".goods-pic dl",trigger:"mouseover",triggerTime:0,delayTime:0,switchLoad:"_src" });
	$("#listitem .item").hover(function (){
		$(this).find(".goods-info").stop().animate({top:180},"normal");
	},function(){
		$(this).find(".goods-info").stop().animate({top:230},"normal");
	});
	
		
    
});