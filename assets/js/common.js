// JavaScript Document

//加入收藏
function addFavorite(url, title) {
  try {
    window.external.addFavorite(url, title);
  } catch (e){
    try {
      window.sidebar.addPanel(title, url, '');
          } catch (e) {
      alert("请按 Ctrl+D 键添加到收藏夹", 'notice');
    }
  }
};

//倒计时
function takeCount() {
  setTimeout("takeCount()", 1000);
  $(".time-remain").each(function() {
    var obj = $(this);
    var tms = obj.attr("count_down");
    if (tms > 0) {
      tms = parseInt(tms) - 1;
      var days = Math.floor(tms / (1 * 60 * 60 * 24));
      var hours = Math.floor(tms / (1 * 60 * 60)) % 24;
      var minutes = Math.floor(tms / (1 * 60)) % 60;
      var seconds = Math.floor(tms / 1) % 60;
      if (days < 0) days = 0;
      if (hours < 0) hours = 0;
      if (minutes < 0) minutes = 0;
      if (seconds < 0) seconds = 0;
      obj.find("[time_id='d']").html(days);
      obj.find("[time_id='h']").html(hours);
      obj.find("[time_id='m']").html(minutes);
      obj.find("[time_id='s']").html(seconds);
      obj.attr("count_down", tms);
    }
  });
}

$(function(){
  //顶栏下拉菜单
  $(".quick-menu dl").hover(function() {
    $(this).addClass("hover");
  },
  function() {
    $(this).removeClass("hover");
  });
  
  //首页左侧分类菜单
	$(".category ul.menu").find("li").each(
		function() {
			$(this).hover(
				function() {
				  var cat_id = $(this).attr("cat_id");
					var menu = $(this).find("div[cat_menu_id='"+cat_id+"']");
					menu.show();
					$(this).addClass("hover");
					if(menu.attr("hover")>0) return;
					menu.masonry({itemSelector: 'dl'});
					var menu_height = menu.height();
					if (menu_height < 60) menu.height(80);
					menu_height = menu.height();
					var li_top = $(this).position().top;
					if ((li_top > 60) && (menu_height >= li_top)) $(menu).css("top",-li_top+50);
					if ((li_top > 150) && (menu_height >= li_top)) $(menu).css("top",-li_top+90);
					if ((li_top > 240) && (li_top > menu_height)) $(menu).css("top",menu_height-li_top+90);
					if (li_top > 300 && (li_top > menu_height)) $(menu).css("top",60-menu_height);
					if ((li_top > 40) && (menu_height <= 120)) $(menu).css("top",-5);
					menu.attr("hover",1);
				},
				function() {
					$(this).removeClass("hover");
				    var cat_id = $(this).attr("cat_id");
					$(this).find("div[cat_menu_id='"+cat_id+"']").hide();
				}
			);
		}
	);
	$(".head-user-menu dl").hover(function() {
		$(this).addClass("hover");
	},
	function() {
		$(this).removeClass("hover");
	});
	$('.head-user-menu .my-mall').mouseover(function(){// 最近浏览的商品
		//load_history_information();
		$(this).unbind('mouseover');
	});
	$('.head-user-menu .my-cart').mouseover(function(){// 运行加载购物车
		//load_cart_information();
		$(this).unbind('mouseover');
	});
	$('#button').click(function(){
	    if ($('#keyword').val() == '') {
		    return false;
	    }
	});
  


});