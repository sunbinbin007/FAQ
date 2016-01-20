//监控所有图片的加载情况
var allImgSrcArr = ["assets/page3Content.png",
					"assets/backBtn_yellow.png",
					"assets/pg_border.png",
					"assets/pg1.png",
					"assets/pg2.png",
					"assets/pg3.png",
					"assets/pg_num0.png",
					"assets/pg_num1.png",
					"assets/pg_num2.png",
					"assets/pg_num3.png",
					"assets/music_on.png",
					"assets/music_off.png",
					"assets/role1Font.png",
					"assets/role2Font.png",
					"assets/role3Font.png",
					"assets/role4Font.png",
					"assets/font.png",
					"assets/frame1-1.png",
					"assets/frame1-2.png",
					"assets/frame1-3.png",
					"assets/frame1-4.png",
					"assets/frame2-1.png",
					"assets/frame2-2.png",
					"assets/frame2-3.png",
					"assets/frame2-4.png",
					"assets/search1.png",
					"assets/search2.png",
					"assets/basket.png",
					"assets/line1.png",
					"assets/button1.png",
					"assets/button2.png",
					"assets/button3.png",
					"assets/button4.png",
					"assets/button5.png",
					"assets/button6.png",
					"assets/button7.png",
					"assets/button8.png",
					"assets/line2.png",
					"assets/fense1.png",
					"assets/fense-line1.png",
					"assets/fense2.png",
					"assets/fense-line2.png",
					"assets/fense3.png",
					"assets/line3.png",
					"assets/2016.png",
					"assets/bottom.png",
					"assets/page2Btn1.png",
					"assets/page2Btn2.png",
					"assets/backBtn_yellow.png",
					"assets/page3-02.png",
					"assets/page3-03.png",
					"assets/page3-04.png",
					"assets/page3-05.png",
					"assets/page3-10.png",
					"assets/page3Button.png",
					"assets/finger.png",
					"assets/dashedLine.png",
					"assets/careerTitle.png",
					"assets/card1.png",
					"assets/card2.png",
					"assets/card3.png",
					"assets/card4.png",
					"assets/card5.png",
					"assets/card6.png",
					"assets/card7.png",
					"assets/line.png",
					"assets/prevBtn.png",
					"assets/nextBtn.png",
					"assets/card1Reverse.png",
					"assets/card2Reverse.png",
					"assets/card3Reverse.png",
					"assets/card4Reverse.png",
					"assets/card5Reverse.png",
					"assets/card6Reverse.png",
					"assets/card7Reverse.png",
					"assets/deliverBtn.png",
					"assets/Q&ACircle.png",
					"assets/Q&A1.png",
					"assets/Q&A2.png",
					"assets/Q&A3.png",
					"assets/Q&A4.png",
					"assets/Q&A5.png",
					"assets/Q&A6.png",
					"assets/Q&A7.png",
					"assets/page6Bg.png",
					"assets/page6DeliverBtn.png",
					"assets/role1.png",
					"assets/role2.png",
					"assets/role3.png",
					"assets/role4.png",
					"assets/circle.png",
					"assets/erase.png",
					"assets/bgMusic.mp3"];

var loadedImgCount = 0;
var IMG_COUNT = 92;
var imgLoad = function (url) {
	var img = new Image();
	img.src = url;
	if (img.complete) {
		loadedImgCount++;
		// console.log(img.src+"已缓存加载完成");
		getProgress(loadedImgCount);
	} else {
		img.onload = function () {
			loadedImgCount++;
			// console.log(img.src+"加载完成");
			img.onload = null;
			// console.log(loadedImgCount);
			getProgress(loadedImgCount);
		};
	};
};

for (var i=0;i<allImgSrcArr.length;i++) {
	imgLoad(allImgSrcArr[i]);
}

function getProgress(num){
	if (num>=23&&num<46) {
		$("#pgNum").attr("src","assets/pg_num1.png");
		$("#pg>img:eq(1)").css({"display":"block"});
	}else if (num>=46&&num<69) {
		$("#pgNum").attr("src","assets/pg_num2.png");
		$("#pg>img:eq(1)").css({"display":"block"});
		$("#pg>img:eq(2)").css({"display":"block"});
	}else if (num>=69) {
		$("#pgNum").attr("src","assets/pg_num3.png");
		$("#pg>img:eq(1)").css({"display":"block"});
		$("#pg>img:eq(2)").css({"display":"block"});
		$("#pg>img:eq(3)").css({"display":"block"});
	}
}

$(window).on("touchstart", function(){
    $("#myAudio").trigger("load");
    $(this).off("touchstart");
});