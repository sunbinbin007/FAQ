window.onload=function(){
	// 适配area标签中的coords值
	var $iRadio = $("#cardReverse>img:first").width()/280;
	// alert($iRadio);
	var $aAreaCoords = [];
	for(var i=0;i<$("area").length;i++){
		$aAreaCoords = $("area:eq("+i+")").attr("coords").split(",");
		var a = [];
		var s = [];
		for(var j=0;j<$aAreaCoords.length;j++){
			a.push(Math.round(($aAreaCoords[j]*$iRadio)));
		}
		if(a.length == 3){
			s = [a[0],a[1],a[2]];
			$("area:eq("+i+")").attr({"coords":s})
		}else if(a.length == 4){
			s = [a[0],a[1],a[2],a[3]];
			$("area:eq("+i+")").attr({"coords":s})
		}else if(a.length == 6){
			s = [a[0],a[1],a[2],a[3],a[4],a[5]];
			$("area:eq("+i+")").attr({"coords":s})
		}
		// console.log(s);
		// alert(s);
	}

	// iscroll初始化配置
	var aIscrollBox = document.getElementsByClassName("iscrollBox");
	var myScroll0 = new IScroll(aIscrollBox[0],{
		click: true,
	});
	var myScroll1 = new IScroll(aIscrollBox[1],{
		click: true,
	});
	var myScroll2 = new IScroll(aIscrollBox[2],{
		click: true,
	});

	// audio自动播放
	var audio = document.getElementsByTagName("audio")[0];
	audio.play();
	$(window).on("click",function(){
		audio.play();
		$(window).off("click");
	})
	var audioPlay = setTimeout(function(){
		audio.play();
	},200);
	// audio标签交互
	$("#music_box").on("touchstart",function(){
		var audio = document.getElementsByTagName("audio")[0];
		var $musicImg = $("#music_box>img");
		if($musicImg.attr("src") == "assets/music_on.png"){
			$musicImg.attr("src","assets/music_off.png");
			audio.pause();
		}else{
			$musicImg.attr("src","assets/music_on.png");
			audio.play();
		}
	})
	
	$("#pg>img").css({"display":"block"});
	$("#progress").css({display:"none"});

	// swiper初始化
	var mySwiper = new Swiper ('.swiper-container', {
	direction: 'horizontal',//水平滑动
	loop: false,//不循环
	hashnav:true,//使用散列导航
	roundLengths: true,//将slide的宽和高取整(四舍五入)以防止某些分辨率的屏幕上文字模糊。
	preloadImages: true,//强制加载所有图片
	updateOnImagesReady : true,//加载完成后刷新swiper
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
		}, 
	onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
	})

	// swiper跳转逻辑
	$("#pag1 img:last").on("click",function(){
		mySwiper.slideNext();
	})
	$("#page2btn1").on("click",function(){
		mySwiper.slideNext();
	})
	$("#page2btn2").on("click",function(){
		mySwiper.slideNext();
		mySwiper.slideNext();
	})
	$(".backbtn").on("click",function(){
		mySwiper.slidePrev();
	})
	$("#page3btn").on("click",function(){
		mySwiper.slideNext();
	})
	$(".nextBtn").on("click",function(){
		mySwiper.slideNext();
	})
	$(".prevBtn").on("click",function(){
		mySwiper.slidePrev();
	})

	// QA交互
	$("#CircleMap>area").on("click",function(){
		$("#music_box").css({"display":"none"});
		var index = $(this).index();
		$("#QAreverse").css({"display":"block"});
		$("#QAreverse>img:eq("+index+")").css({"display":"block"});
		$("#closeMap").on("click",function(){
			$("#QAreverse").css({"display":"none"});
			$("#QAreverse>img").css({"display":"none"});
			$("#music_box").css({"display":"block"});
		})
		$("#closeMap1").on("click",function(){
			$("#QAreverse").css({"display":"none"});
			$("#QAreverse>img").css({"display":"none"});
			$("#music_box").css({"display":"block"});
		})
	})

	// card交互
	$("#cardBox>img").on("click",function(){
		$("#music_box").css({"display":"none"});
		$("#cardReverse").css({"display":"block"});
		$("#cardReverse>img:eq("+$(this).index()+")").css({"display":"block"})
		$("#closeCard").on("click",function(){
			$("#cardReverse").css({"display":"none"});
			$("#cardReverse>img").css({"display":"none"});
			$("#cardReverse>img:last").css({"display":"block"});
			$("#music_box").css({"display":"block"});
		})
	})

	// finger交互隐藏
	$("#pag3Content").on("touchend",function(){
		$("#fingerBox").css({"display":"none"});
	})
}