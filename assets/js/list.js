// JavaScript Document
$(function(){
  
    //侧边栏切换
    $("#sortlist h3").click( function(){$(this).parent().toggleClass("current");});
    
    
    //选项卡
    $("#voption").find(".suck_down").click(
      function(){
        var oData = $(".v-tabs");
        var $cont = oData.find(".tabcon div").length;
        var $arrtZi = $(".v-tabs .tabcon");
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
        var $arrtZi = $(".v-tabs .tabcon");
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
});