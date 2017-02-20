$(function(){
	//当浏览器宽度小于1000时；
	function ini(){
		var clientWidths=$(window).width();
		if(clientWidths<1000){
			$("body").css({"width":1010+"px"});
		}else{
			$("body").css({"width":100+"%"});
		}
	};
	ini();
	$(window).on("resize",ini);
	//下拉菜单
	//一级菜单
	$("#top .nav li").hover(function(){
		var clientLeft=$(this).position().left;
		var widths=$(".navList").outerWidth();
		var boxWidth=$("#top .nav").width();
		if(boxWidth-clientLeft<widths){
			$(this).find(".navList").css({"width":$(this).outerWidth()});
			$(this).find(".navList").find("a").css({"width":"85px"});
			$(this).find(".navList").find(".navSecList").css("left","143px");
		}
		$(this).find(".navList").css("display","block");
	},function(){
		$(this).find(".navList").css("display","none");
	});
	//二级菜单
	$("#top .navList li").hover(function(){
		$(this).find(".navSecList").slideDown("fast");
	},function(){
		$(this).find(".navSecList").slideUp("fast");
	});

	//淡入淡出
	$("#flash").hover(function(){
		$("#flash .flashLeft,#flash .flashRight").fadeIn("200");
		window.clearInterval(flashAuto);
	},function(){
		$("#flash .flashLeft,#flash .flashRight").fadeOut("200");
		flashAuto=setInterval(function(){$("#flash .flashRight").click();},3000)
	});
	function flashChange(oldIndex,currIndex){
		var lis=$("#flash .tabChange li");
		lis.eq(oldIndex).fadeOut(500);
		lis.eq(currIndex).fadeIn(500);
		$("#flash .flashBtn a").eq(currIndex).addClass("btnCurr").siblings().removeClass("btnCurr");
	};
	$("#flash .flashBtn a").mouseenter(function(){
		var oldIndex=$("#flash .btnCurr").index();
		var currIndex=$(this).index();
		if(oldIndex==currIndex){
			return false;
		}
		flashChange(oldIndex,currIndex);
	});
	$("#flash .flashLeft").click(function(){
		var oldIndex=$("#flash .btnCurr").index();
		var currIndex;
		if(oldIndex!=0){
			currIndex=oldIndex-1;
		}else{
			currIndex=$("#flash .tabChange li:last").index();
		}
		flashChange(oldIndex,currIndex);
	});
	$("#flash .flashRight").click(function(){
		var oldIndex=$("#flash .btnCurr").index();
		var lastIndex=$("#flash .tabChange li:last").index();
		var currIndex;
		if(oldIndex==lastIndex){
			currIndex=0;
		}else{
			currIndex=oldIndex+1;
		}
		flashChange(oldIndex,currIndex);
	});
	var flashAuto=setInterval(function(){
		$("#flash .flashRight").click();
	},3000);


//企业信息介绍
	var currWidth=$("#introduce .intCurr dd").width();
	$("#introduce dl").mouseenter(function(){
		var currIndex=$("#introduce .intCurr").index();
		if($(this).index()==currIndex){
			return false;
		}
		$("#introduce dl dd").stop();
		$(this).addClass('intCurr').siblings().removeClass("intCurr");
		$(this).siblings().find("dd").animate({"width":0+"px"},300);
		$(this).find("dd").animate({"width":currWidth+"px"},300);
	});

//关于我们
	var imgWidth=$("#about .aboutL img").width();
	$("#about .aboutL").hover(function(){
		$(this).find(".aboutCon").stop();
		$(this).find(".aboutCon").animate({"bottom":0+"px"},700);
		$(this).find("img").stop();
		imgNewWidth=imgWidth/2+imgWidth
		$(this).find("img").animate({"width":imgNewWidth+"px","marginLeft":-(imgWidth/2)+"px"},700);
	},function(){
		$(this).find(".aboutCon").stop();
		$(this).find(".aboutCon").animate({"bottom":-113+"px"},700);
		$(this).find("img").stop();
		$(this).find("img").animate({"width":imgWidth+"px","marginLeft":0+"px"},700);
	});
	$("#about .btnLeft").click(function(){
		var aboutCurr=$("#about .aboutR li:not(:hidden)").index();
		if(aboutCurr!=0){
			$("#about .aboutR li").eq(aboutCurr).hide().prev().show();
		}else{
			$("#about .aboutR li").eq(aboutCurr).hide();
			$("#about .aboutR li:last").show();
		}
	});
	$("#about .btnRight").click(function(){
		var aboutCurr=$("#about .aboutR li:not(:hidden)").index();
		var lastIndex=$("#about .aboutR li:last").index();
		if(aboutCurr!=lastIndex){
			$("#about .aboutR li").eq(aboutCurr).hide().next().show();
		}else{
			$("#about .aboutR li").eq(aboutCurr).hide();
			$("#about .aboutR li:first").show();
		}
	});

	//合作伙伴
	var clientWidth=$("#client li").outerWidth(true);
	$("#client .btnRight").click(function(){
		$("#client ul li:first").animate({"marginLeft":-clientWidth+"px"},500,function(){
			$(this).appendTo('#client ul').css({"marginLeft":0+"px"})
		});
	});
	$("#client .btnLeft").click(function(){
		$("#client ul li:last").prependTo('#client ul')
		.css({"marginLeft":-clientWidth+"px"}).animate({"marginLeft":0+"px"});
	});

	//回到顶部
	$("#toTop").hide();
	$(window).scroll(function(){
		var clientHeight=$(window).height();//获取浏览器可视高度；
		var scrollTops=$("body").scrollTop()+$("html").scrollTop();//获取滚动条顶部距文档顶部的距离；body支持chrome、opera、safari;html支持ie、firefox;
		if(scrollTops>=clientHeight){
			$("#toTop").fadeIn(500);
		}else{
			$("#toTop").fadeOut(500);
		}
	});
	$("#toTop a,#kefu .toTop").click(function(){
		$("body,html").animate({"scrollTop":0+"px"},500);
	});
});