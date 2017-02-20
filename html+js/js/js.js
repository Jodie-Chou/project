//广告倒计时
var adTop=document.getElementById('adTop');
var closebox=adTop.getElementsByTagName('em')[0];
var num=10;
var adHeight=0;
var btnClose=adTop.getElementsByTagName("i")[0];
//setInterval方法
/*function timeKeeper(num){
		if(num==10)
			closebox.innerHTML="十";
		else if(num==9)
			closebox.innerHTML="九";
		else if(num==8)
			closebox.innerHTML="八";
		else if(num==7)
			closebox.innerHTML="七";
		else if(num==6)
			closebox.innerHTML="六";
		else if(num==5)
			closebox.innerHTML="五";
		else if(num==4)
			closebox.innerHTML="四";
		else if(num==3)
			closebox.innerHTML="三";
		else if(num==2)
			closebox.innerHTML="二";
		else if(num==1)
			closebox.innerHTML="一";
	};
	timeKeeper(10);
	function close(adHeight){
	if (adHeight<=80){
		adTop.style.marginTop=-adHeight+"px";
		}
	};
	setInterval(function(){
		num--;
		timeKeeper(num);
		if (num<=0){
			setInterval(function(){
			close(adHeight);
			adHeight+=4;
			},20);
		}
	},1000);*/

	//用setTimeout方法
	function timeKeeper(num){
		if(num==10)
			closebox.innerHTML="十";
		else if(num==9)
			closebox.innerHTML="九";
		else if(num==8)
			closebox.innerHTML="八";
		else if(num==7)
			closebox.innerHTML="七";
		else if(num==6)
			closebox.innerHTML="六";
		else if(num==5)
			closebox.innerHTML="五";
		else if(num==4)
			closebox.innerHTML="四";
		else if(num==3)
			closebox.innerHTML="三";
		else if(num==2)
			closebox.innerHTML="二";
		else if(num==1)
			closebox.innerHTML="一";
		else if(num==0){
			closeAd(0);
			return;
		}
		num--;
		return setTimeout(function(){
				timeKeeper(num);
				var height1=document.getElementById("adTop");
			},1000);
		if(-(height1.offsetTop)>0){
			return;		
		}

	};	
	function closeAd(height){
		height+=4;
		if(height<=80){
			adTop.style.marginTop=-height+"px";
			return setTimeout(function(){
			closeAd(height);
			},20);
		}else{
			adTop.parentNode.removeChild(adTop);
		}
	};
	timeKeeper(10);
	//点击关闭图片关闭广告
	btnClose.onclick=function(){
				closeAd(0);
				return false;
				};
	
	
/*********导航菜单**********/
var tops=document.getElementById("top");
var navRight=tops.getElementsByTagName("ul")[0];
//document.write(navRight);
var navRightLi=navRight.getElementsByTagName('li')[3];
var webUl=navRightLi.getElementsByTagName('ul')[0];
navRightLi.onmouseover=function(){
	webUl.style.display="block";
};
navRightLi.onmouseout=function(){
	webUl.style.display="none";
};

/*********城市切换**********/
/***城市按拼音切换**/
cityBox=document.getElementById("areaCont");
allCity=cityBox.getElementsByTagName("ul");
allCityLis=allCity[0].getElementsByTagName("li");
cityCon=allCity[1].getElementsByTagName("li");
for(var i=0;i<allCityLis.length;i++){
	allCityLis[i].onclick=(function(j){
		return function(){
			if(this.className=="current"){
				return;
			}
			var currLi=j,other;
			for(var k=0;k<allCityLis.length;k++){
				if(allCityLis[k].className=="current"){
					other=k;
					break;
				}
			}
			allCityLis[currLi].className="current";
			allCityLis[other].className="";	
			cityCon[currLi].style.zIndex=3;
			cityCon[other].style.zIndex=2;
		};
	})(i);
}
/***隐藏城市切换**/
var hotCity=cityBox.getElementsByTagName('h4')[0];
var closeBtn=hotCity.getElementsByTagName('i')[0];
var cityCur=document.getElementById("cityCur");
var cityBox=document.getElementById("cityBox");
var areaCont=document.getElementById("areaCont");
closeBtn.onclick=function(){
	closeUp(0);
	};
function closeUp(num){
	num+=5;
	if (num<=50) {
		var fixed=document.getElementById("fixed");
			areaCont.style.top=-num+'%';
			fixed.style.display="none";
			cityBox.style.display="none";
		return setTimeout(function(){
			closeUp(num);
		},20);
	}
};

cityCur.onclick=function(){
	showDown(0);
};
function showDown(num){
	num+=5;
	if (num<=50) {
		var fixed=document.getElementById("fixed");
			areaCont.style.top=(num)+'%';
			cityBox.style.display="block";
			fixed.style.display="block";
		return setTimeout(function(){
			showDown(num);
		},20);
	}
};
//点击城市名称切换
(function(){
	var tops=document.getElementById("top");
	var citySpan=tops.getElementsByTagName("span")[2];
	var cityClick=areaCont.getElementsByTagName("a");
		for(var i=0;i<cityClick.length;i++){
			var cityLis=cityClick[i].parentNode;
			var cityUls=cityLis.parentNode;
			if(cityUls.tagName=="h4"||cityUls.className=="cityClass"){
				continue;
			}
			cityClick[i].onclick=function(){
				var text=this.innerText||this.textContent;
				citySpan.innerHTML=text;
				closeUp(0);
			}
		}
})();
//左边导航切换
var topLeftNav=document.getElementById("topLeftNav");
var leftNavLis=topLeftNav.getElementsByTagName('li');
var navCon=topLeftNav.getElementsByTagName('div')[0];
var navConDivs=navCon.getElementsByTagName('div');
for (var i=0;i<leftNavLis.length;i++){
	leftNavLis[i].onmouseover=(function(j){
		return function(){
			var idNum="nav"+j;
			var navDiv=document.getElementById(idNum);
			navCon.style.display="block";
			for(var k=0;k<navConDivs.length;k++){
				if(navConDivs[k].className=="navBox"){
					navConDivs[k].style.display="none";
				}
			}
			navDiv.style.display="block";
		}
	})(i);
}
	topLeftNav.onmouseout=function(){
		navCon.style.display="none";
	};
//中间幻灯片
	(function(){
		var imgTab=document.getElementById("imgTab");
		var ulImg=imgTab.getElementsByTagName('ul')[0];
		var imgLis=ulImg.getElementsByTagName('li');
		var ulBtn=imgTab.getElementsByTagName('ul')[1];
		var btnLis=ulBtn.getElementsByTagName('li');
		//改变透明度
		function imgOp(num,newNum,oldNum){
			if(num==0){
				imgLis[newNum].style.zIndex=3;
				imgLis[oldNum].style.zIndex=2;
				btnLis[newNum].className="curr";
				btnLis[oldNum].className="";
			}
			num+=10;
			if(num<=100){
				imgLis[newNum].style.opacity=num/100;
				imgLis[newNum].style.filter='alpha(opacity='+num+')';
				imgLis[oldNum].style.opacity=1-num/100;
				imgLis[oldNum].style.filter='alpha(opacity='+(100-num)+')';
			}
			return	setTimeout(function(){
					imgOp(num,newNum,oldNum);
				},20);
		};
		//绑定onmouseover事件
		for (var i=0;i<btnLis.length;i++){
			btnLis[i].onmouseover=(function(j){
				return function(){
					if(this.className=="curr"){
						return;
					}
					var newNum=j,oldNum;
					for(var k=0;k<btnLis.length;k++){
						if(btnLis[k].className=="curr"){
							oldNum=k;
						}
					}
					imgOp(0,newNum,oldNum);
				};
			})(i);
		}
		//自动切换图片
		function autoChange(){
			var newNum,oldNum;
			for(var i=0;i<btnLis.length;i++){
				if(btnLis[i].className=="curr"){
					oldNum=i;
					break
				}
			}
			if(oldNum!=(btnLis.length-1)){
				newNum=oldNum+1;
			}else{
				newNum=0;
			}
			imgOp(0,newNum,oldNum);
		};
		var adTime=setInterval(function(){
			autoChange();
		},3000);
		imgTab.onmouseover=function(){
			clearInterval(adTime);
		};
		imgTab.onmouseout=function(){
			adTime=setInterval(function(){
				autoChange();
			},3000);
		};
	})();
//右边公告切换
var rightBox=document.getElementById("rightBox");
var con_dt=rightBox.getElementsByTagName("dt")[0];
var con_dtLis=con_dt.getElementsByTagName('li');
var con_dd=rightBox.getElementsByTagName('dd')[0];
var con_ddDls=con_dd.getElementsByTagName('dl');
function addClassCu(index){
	if(con_dtLis[index].className=="current"){
		return;
	}
	con_dtLis[index].className="hover";
};
function removeClassCu(index){
	if(con_dtLis[index].className=="current"){
		return;
	}
	con_dtLis[index].className="";
};
function addCurr(index){
	if(con_dtLis[index].className=="current"){
		return;
	}
	var curr=index,oldCur;
	for(var k=0;k<con_dtLis.length;k++){
		if(con_dtLis[k].className=="current"){
				oldCur=k;
				break;
		};
	}
	var firsClass1=con_ddDls[curr].className;
	var firsClass2=con_ddDls[oldCur].className;
	var arrClass=new Array();
	arrClass=firsClass2.split(" ");
	con_dtLis[index].className="current";
	con_dtLis[oldCur].className="";
	con_ddDls[index].className=firsClass1+" curr";
	con_ddDls[oldCur].className=arrClass[0];
	console.log(firsClass1);
};
for(var i=0;i<con_dtLis.length;i++){
	con_dtLis[i].onmouseover=(function(j){
		return function(){
			addClassCu(j);
		};
	})(i);
	con_dtLis[i].onclick=(function(j){
		return function(){
			addCurr(j);
		};
	})(i);
	con_dtLis[i].onmouseout=(function(j){
		return function(){
			removeClassCu(j);
		};
	})(i);

}
function trim(str){ //删除左右两端的空格
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
//主要内容
//搜索框
var search=document.getElementById("search");
var searchText=search.getElementsByTagName('input')[0];
//固定搜索框
var searchForm=document.getElementById("searchForm");
var searchTextFixed=searchForm.getElementsByTagName('input')[0];
function searchFocus(searchs){
	searchs.style.color="#000";
	if(trim(searchs.value)=="请输入您的品牌和机型,看看您的宝贝还值多少钱？")
	{
		searchs.value="";
	}else{
		if(trim(searchs.value)==""){
			searchs.value="请输入您的品牌和机型,看看您的宝贝还值多少钱？";
			searchs.style.color="#8c8c8c";
		};
	}
};
searchText.onfocus=function(){
		var searchs=this;
		searchFocus(searchs);
	};
searchText.onblur=function(){
		var searchs=this;
		searchFocus(searchs);
};
searchTextFixed.onfocus=function(){
		var searchs=this;
		searchFocus(searchs);
	};
searchTextFixed.onblur=function(){
		var searchs=this;
		searchFocus(searchs);
};
//滚动到搜索框时固定显示
var searchHeight=search.clientHeight;
var searchTop=search.offsetTop;
var searchFixed=document.getElementById("searchFixed");
window.onscroll=function(){
	var scrollTop=document.documentElement.scrollTop+document.body.scrollTop;//documentElement.scrollTop支持ff及ie;body.scrollTop支持chrome及opera等；
	if (scrollTop>=(searchHeight+searchTop)){
		searchFixed.style.display="block";
	}else{
		searchFixed.style.display="none";
	}
};

//回收信息切换
(function(){
	function reChange(ddId){
		var reNodes=document.getElementById(ddId);
		var ddNodes=reNodes.getElementsByTagName('dd');
		for(var i=0;i<ddNodes.length;i++){
			if(ddNodes[i].getAttribute("ul")=="none"){
					ddNodes[i].onmouseover=function(){
						this.className="curr";
					};
					ddNodes[i].onmouseout=function(){
						this.className="";
					};
					return;
				}
			ddNodes[i].onmouseover=(function(j){
				return function(){
					if(this.className=="curr"){
						return;
					}
					for(var k=0;k<ddNodes.length;k++){
						if(ddNodes[k].className=="curr"){
							var oldNum=k;
							break;
						}
					}
					var oldClassName=ddNodes[oldNum].getAttribute("class")||ddNodes[oldNum].getAttribute("className");//前者支持ie7以上，后者支持ie7以下
					var oldNumNew=oldClassName.replace("curr","");
					this.className="curr";
					ddNodes[oldNum].className=oldClassName.replace("curr","");
				};
			})(i);
		}
	};
	var recover=document.getElementById("recover");
	recoverDivs=recover.getElementsByTagName('div');
	for(var a=0;a<recoverDivs.length;a++){
		if(recoverDivs[a].className=="recover"){
			var reId=recoverDivs[a].getAttribute("id");
			reChange(reId);
		}
	}
})();

//最新成交上下滚动
var dealCon=document.getElementById("dealCon");
var dealConlis=dealCon.getElementsByTagName('li');
var num=0;
var times="";
if(dealConlis.length>5){
	(function(){
	function moveUp(num){
		dealCon=document.getElementById("dealCon");
		num+=2;
		if(num<=72){
			dealConlis[0].style.marginTop=-num+"px";
		}else{
			dealCon.appendChild(dealConlis[0]);
			dealConlis[dealConlis.length-1].style.marginTop=0+"px";
			dealConlis=dealCon.getElementsByTagName('li');
			num=0;
		}
		times= setTimeout(function(){moveUp(num);},22);
		return times;
		};
		moveUp(0);
	dealCon.onmouseover=function(){
		var num=dealConlis[0].style.marginTop;
		clearInterval(times);
	};
	dealCon.onmouseout=function(){
		var num=dealConlis[0].style.marginTop;
		moveUp(0);
	};
})();
}