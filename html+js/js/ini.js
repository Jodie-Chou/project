//根据屏幕宽度选择顶部广告宽度
//最小宽度为1190;
$(function(){
	function ini(){
	if ($(window).width()<1190){
		$("body").attr({"class":"small"});
		}else{
		$("body").attr({"class":"large"});
		}
	};
	ini();
	$(window).on("resize",ini);

});