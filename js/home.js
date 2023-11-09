var getScrollT=document.querySelector("html");
var wrap=document.querySelector("#wrap");
wrap.classList.add("full");
setTimeout(() => {
	wrap.classList.add("active");
}, 500);
function mobile() {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}

var device=mobile()? "ph":"pc";
var fifthAni2Time;
var home_btn=document.querySelector("#home_btn");
var home=document.querySelector("#home");

var home_second=document.querySelector("#home_second");

var pageArr=[
	"home",
	"home_second",
	"home_third",
	"home_forth",
	"home_fifth",
	"home_six",
	"home_seven"
];

var pageNum=0;
home_btn.onclick=function () {
	home.classList.add("zoomOut");
	clearTimeout(changePageTime);
	home_second.classList.remove("zoomOut");
	home_second.classList.remove("zoom");
	home_second.classList.add("show");
	wrap.classList.remove("full");
	pageNum=1;
	player.playVideo();
	setTimeout(() => {
		wrap.classList.remove("active");
	}, 100);
};

var scaleTime;
var scaleNum=0;
var scaleOp=0;
var mouseShow;
var mouseNoShow;
var changePageDelay=2500;
var MouseWheelSwitch=true;
var videoYT1=document.querySelector("#videoYT1");
var changePageTime;
function mousemove(event) {
	var mouseX=event.clientX;
	var mouseY=event.clientY;
	if (device=="ph") return;
	if (!home.classList.contains("zoomOut")) {
		if (mouseY-boxCenterH<0) {
			// 滑鼠在上方
			lionZ(mouseY-boxCenterH);
			strawZ(mouseY-boxCenterH);
		}
		if (mouseX-boxCenterW>0) {
			// 滑鼠在右方
			treeZ(mouseX-boxCenterW);
			flyrZ(mouseX-boxCenterW);
		}

		if (mouseX-boxCenterW<0) {
			// 滑鼠在左方
			plantZ(mouseX-boxCenterW);
			flyl(mouseX-boxCenterW);
		}
	}

	// strawZ
}

home_video1Handler1.onclick=function () {
	if (home_video1Handler1.classList.contains("_quiet")) {
		home_video1Handler1.classList.remove("_quiet");
		home_video1Handler1.classList.add("_voiced");
		player.setVolume(100);
	} else {
		home_video1Handler1.classList.remove("_voiced");
		home_video1Handler1.classList.add("_quiet");
		player.setVolume(0);
	}
};

var fifth_video=document.querySelector("#fifth_video");
var fifth_video_m=document.querySelector("#fifth_video_m");
fifth_video.pause();
fifth_video_m.pause();
function fifth_ani2() {
	fifthAni2Time=setTimeout(() => {
		home_fifth.classList.add("show2");
		fifth_video.play();
		fifth_video_m.play();
	}, 7000);
}
// function changePage(boo) {
// 	clearInterval(scaleTime);
// 	mouseNoShow=document.querySelector("#"+pageArr[pageNum]);
// 	mouseShow.classList.add("zoomOut");
// 	console.log("pageNum", pageNum);

// 	if (boo) {
// 		pageNum++;
// 	} else {
// 		pageNum--;
// 	}
// 	if (pageNum==0) {
// 		wrap.classList.add("active");
// 		wrap.classList.add("full");
// 	}
// 	if (pageNum==1) {
// 		player.playVideo();
// 	} else {
// 		player.pauseVideo();
// 	}
// 	mouseShow=document.querySelector("#"+pageArr[pageNum]);
// 	mouseShow.classList.remove("zoomOut");
// 	mouseShow.classList.remove("zoom");
// 	mouseShow.classList.add("show");
// 	changePageDelay=2500;
// 	if (pageNum==2||pageNum==3) {
// 		changePageDelay=3000;
// 	}
// 	clearTimeout(fifthAni2Time);
// 	if (pageNum==4) {
// 		fifth_ani2();
// 		changePageDelay=8500;
// 	}

// 	changePageTime=setTimeout(() => {
// 		mouseNoShow.classList.remove("show2");
// 		mouseNoShow.classList.remove("show");
// 		mouseNoShow.classList.remove("zoomOut");
// 		mouseNoShow.classList.add("zoom");
// 		mouseNoShow.style=``;
// 	}, 1500);
// 	// MouseWheelSwitch = true;
// 	setTimeout(() => {
// 		MouseWheelSwitch=true;
// 	}, 2000);
// }
function backHome() {
	wrap.classList.add("full");
	home.classList.remove("zoomOut");
	home_second.classList.remove("show");
	setTimeout(() => {
		wrap.classList.add("active");
	}, 200);
}
var pagedown=true;
var pageMove=0;
function MouseWheel(e) {
	e=e||window.event;
	// e.wheelDelta <= 0 || e.detail > 0
	if (!MouseWheelSwitch) return;
	if (getScrollT.scrollTop==0&e.wheelDelta>0) {
		// backHome();
	}
}


if ("onmousewheel" in window) {
	window.onmousewheel=MouseWheel;
} else if ("onmousewheel" in document) {
	document.onmousewheel=MouseWheel;
} else if ("addEventListener" in window) {
	window.addEventListener("mousewheel", MouseWheel, false);
	window.addEventListener("DOMMouseScroll", MouseWheel, false);
}

var touchStart=0;
var touchEnd;
var touchMove;
var header=document.querySelector("#header");
setTimeout(() => {
	header.style="display: ;"
}, 1000);
function touchHandler(e) {
	if (header.classList.contains("onHead")) return
	if (!MouseWheelSwitch) return;
	touchStart=e.touches[0].pageY;
	window.addEventListener("touchmove", touchmoveHandler);
	window.addEventListener("touchend", touchendHandler);
}
function touchmoveHandler(e) {
	if (header.classList.contains("onHead")) return
	if (pageNum==0) return;
	touchMove=touchStart-e.touches[0].pageY;
	if (touchMove>0) {
		touchEnd=true;
	} else {
		touchEnd=false;
	}
}
function touchendHandler() {
	if (header.classList.contains("onHead")) {
		window.removeEventListener("touchmove", touchmoveHandler);
		window.removeEventListener("touchend", touchendHandler);
		return
	}
	if (pageNum==0) return;
	if (touchMove>0&&touchMove<30) {
		return;
	} else if (touchMove<0&&touchMove>-30) {
		return;
	}
	mouseShow=document.querySelector("#"+pageArr[pageNum]);
	pagedown=touchEnd;
	if (pagedown&&pageArr.length-1==pageNum) return;
	changePage(pagedown);
	window.removeEventListener("touchmove", touchmoveHandler);
	window.removeEventListener("touchend", touchendHandler);
	MouseWheelSwitch=false;
}

window.addEventListener("mousemove", mousemove);
window.addEventListener("touchstart", touchHandler);

var nowW=window.innerWidth;
var nowH=window.innerHeight;
var boxCenterW=nowW/2;
var boxCenterH=nowH/2;
if (device=="pc") {
	var straw_scene=document.getElementById("straw_scene");
	var straw_parallax=new Parallax(straw_scene, {
		invertX: false,
		invertY: false,
		originY: 0.5
	});
	straw_parallax.friction(0.05, 0.05);

	var strawMax=160;
	var strawMaxR=15;

	var strawNow=0;
	var strawNowR=0;
	var strawMove=0;
	var strawMoveR=0;

	var strawTime;
	// var lionRange = 0.2;
	var strawRange=strawMax/boxCenterH;
	var strawRangeR=strawMaxR/boxCenterH;
	// 100 / 70
	function strawZ(y) {
		strawMove=y*strawRange;
		strawMoveR=y*strawRangeR;
		if (strawMove*-1>strawMax) {
			strawMove=strawMax*-1;
		} else if (strawMove*-1<0) {
			strawMove=0;
		}
		if (strawMoveR*-1>strawMaxR) {
			strawMoveR=strawMaxR*-1;
		} else if (strawMoveR*-1<0) {
			strawMoveR=0;
		}
		clearInterval(strawTime);

		strawTime=setInterval(() => {
			if (
				parseInt(strawMove)==parseInt(strawNow)&&
				parseInt(strawMoveR)==parseInt(strawNowR)
			) {
				clearInterval(strawTime);
			} else if (strawNow<strawMove) {
				strawNow=strawNow+(strawRange+0.01);
			} else if (strawNow>strawMove) {
				strawNow=strawNow-(strawRange+0.01);
			}

			if (strawNowR<strawMoveR) {
				strawNowR=strawNowR+(strawRangeR+0.01);
			} else if (strawNowR>strawMoveR) {
				strawNowR=strawNowR-(strawRangeR+0.01);
			}
			straw_scene.style=`transform: translate3d(0px, ${ strawNow*
				-1 }px, 0px) rotate(${ strawNowR }deg) scale(1);`;
		}, 0.5);
	}

	var grass_scene=document.getElementById("grass_scene");
	var grass_parallax=new Parallax(grass_scene, {
		invertX: false,
		invertY: false,
		originY: 0.5
	});
	grass_parallax.friction(0.1, 0.1);

	var plant_scene=document.getElementById("plant_scene");
	var plant_parallax=new Parallax(plant_scene, {
		invertX: false,
		invertY: false,
		originY: 0.5
	});
	plant_parallax.friction(0.1, 0.1);

	var plantMax=0.1;
	var plantNow=0;
	var plantMove=0;
	var plantRange=plantMax/boxCenterW;
	var plantTime;

	function setFloat(num, f) {
		return num.toFixed(f);
	}

	function plantZ(x) {
		plantMove=x*plantRange;
		if (plantMove*-1>plantMax) {
			plantMove=plantMax;
		} else if (plantMove*-1<0) {
			plantMove=0;
		}
		clearInterval(plantTime);
		plantTime=setInterval(() => {
			if (setFloat(plantMove, 3)==setFloat(plantNow, 3)) {
				clearInterval(plantTime);
			} else if (plantNow<plantMove) {
				plantNow=plantNow+plantRange+0.00018;
			} else if (plantNow>plantMove) {
				plantNow=plantNow-plantRange-0.00018;
			}
			plant_scene.style=`transform: translate3d(0px, 0px, 0px) scale(${ 1+
				plantNow*-1 });`;
		}, 0.5);
	}

	var flyl_scene=document.getElementById("flyl_scene");
	var flyl_parallax=new Parallax(flyl_scene, {
		invertX: false,
		invertY: false,
		originY: 0.5
	});
	flyl_parallax.friction(0.2, 0.2);

	var flylMax=30;
	var flylNow=0;
	var flylMove=0;

	var flylMaxX=100;
	var flylNowX=0;
	var flylMoveX=0;

	var flylRange=flylMax/boxCenterW;
	var flylRangeX=flylMax/boxCenterW;

	var flylTime;
	function flyl(x) {
		flylMove=x*flylRange;
		flylMoveX=x*flylRangeX;
		if (flylMove*-1>flylMax) {
			flylMove=flylMax;
		} else if (flylMove*-1<0) {
			flylMove=0;
		}
		if (flylMoveX*-1>flylMaxX) {
			flylMoveX=flylMaxX;
		} else if (flylMoveX*-1<0) {
			flylMoveX=0;
		}
		clearInterval(flylTime);
		flylTime=setInterval(() => {
			if (parseInt(flylMove)==parseInt(flylNow)) {
				clearInterval(flylTime);
			} else if (flylNow<flylMove) {
				flylNow=flylNow+flylRange+0.1;
			} else if (flylNow>flylMove) {
				flylNow=flylNow-flylRange-0.1;
			}
			flyl_scene.style=`transform: translate3d(${ flylNow }px, 0px, 0px) scale(${ 1+
				flylNow*-0.01 }) rotate(${ flylNow*-1 }deg);`;
		}, 0);
	}

	var flyr_scene=document.getElementById("flyr_scene");
	var flyr_parallax=new Parallax(flyr_scene, {
		invertX: false,
		invertY: false,
		originY: 0.5
	});
	flyr_parallax.friction(0.3, 0.3);

	var flyrMax=0.2;
	var flyrNow=0;
	var flyrMove=0;
	var flyrRange=flyrMax/boxCenterW;

	var flyrMaxX=80;
	var flyrNowX=0;
	var flyrMoveX=0;
	var flyrRangeX=flyrMaxX/boxCenterW;

	var flyrMaxY=80;
	var flyrNowY=0;
	var flyrMoveY=0;
	var flyrRangeY=flyrMaxY/boxCenterW;
	var flyrTime;

	function flyrZ(x) {
		flyrMove=x*flyrRange;
		flyrMoveX=x*flyrRangeX;
		flyrMoveY=x*flyrRangeY;
		if (flyrMove>flyrMax) {
			flyrMove=flyrMax;
		} else if (flyrMove<0) {
			flyrMove=0;
		}
		if (flyrMoveX>flyrMaxX) {
			flyrMoveX=flyrMaxX;
		} else if (flyrMoveX<0) {
			flyrMoveX=0;
		}
		if (flyrMoveY>flyrMaxY) {
			flyrMoveY=flyrMaxY;
		} else if (flyrMoveY<0) {
			flyrMoveY=0;
		}
		clearInterval(flyrTime);
		flyrTime=setInterval(() => {
			if (
				setFloat(flyrMove, 3)==setFloat(flyrNow, 3)&&
				parseInt(flyrMoveX)==parseInt(flyrNowX)&&
				parseInt(flyrMoveY)==parseInt(flyrNowY)
			) {
				clearInterval(flyrTime);
			} else if (flyrNow<flyrMove) {
				flyrNow=flyrNow+flyrRange+0.0002;
			} else if (flyrNow>flyrMove) {
				flyrNow=flyrNow-flyrRange-0.0002;
			}

			if (flyrNowX<flyrMoveX) {
				flyrNowX=flyrNowX+(flyrRangeX+0.09);
			} else if (flyrNowX>flyrMoveX) {
				flyrNowX=flyrNowX-(flyrRangeX+0.09);
			}
			if (flyrNowY<flyrMoveY) {
				flyrNowY=flyrNowY+(flyrRangeY+0.09);
			} else if (flyrNowY>flyrMoveY) {
				flyrNowY=flyrNowY-(flyrRangeY+0.09);
			}
			flyr_scene.style=`transform: translate3d(${ flyrNowX }px, ${ flyrNowY*
				-1 }px, 0px) scale(${ 1+flyrNow });`;
		}, 0);
	}

	var bird_scene=document.getElementById("bird_scene");
	var bird_parallax=new Parallax(bird_scene, {
		invertX: false,
		invertY: false,
		originY: 0.5
	});
	bird_parallax.friction(0.1, 0.1);

	var txt_scene=document.getElementById("txt_scene");
	var txt_parallax=new Parallax(txt_scene, {
		invertX: false,
		invertY: false,
		originY: 0.5
	});
	txt_parallax.friction(0.1, 0.1);

	var tree_scene=document.getElementById("tree_scene");

	var straw_img1=document.getElementById("straw_img1");
	var straw_img2=document.getElementById("straw_img2");

	var tree_parallax=new Parallax(tree_scene, {
		invertX: false,
		invertY: false,
		originY: 0.5
	});
	tree_parallax.friction(0.05, 0.05);

	var treeMax=20;
	var treeMaxB=30;
	var treeNow=0;
	var treeNowB=0;
	var treeMove=0;
	var treeMoveB=0;
	var treeTime;

	var treeRange=treeMax/boxCenterW;
	var treeRangeB=treeMaxB/boxCenterW;

	function treeZ(x) {
		treeMove=x*treeRange;
		treeMoveB=x*treeRangeB;
		if (treeMove>treeMax) {
			treeMove=treeMax;
		} else if (treeMove<0) {
			treeMove=0;
		}
		if (treeMoveB>treeMaxB) {
			treeMoveB=treeMaxB;
		} else if (treeMoveB<0) {
			treeMoveB=0;
		}
		clearInterval(treeTime);
		treeTime=setInterval(() => {
			if (
				parseInt(treeMove)==parseInt(treeNow)&&
				parseInt(treeMoveB)==parseInt(treeNowB)
			) {
				clearInterval(treeTime);
			} else if (treeNow<treeMove) {
				treeNow=treeNow+(treeRange+0.05);
			} else if (treeNow>treeMove) {
				treeNow=treeNow-(treeRange+0.05);
			}

			if (treeNowB<treeMoveB) {
				treeNowB=treeNowB+(treeRangeB+0.2);
			} else if (treeNowB>treeMoveB) {
				treeNowB=treeNowB-(treeRangeB+0.2);
			}
			tree_scene.style=`transform: translate3d(0px, ${ treeNowB }px, ${ treeNow }px) scale(1)`;
		}, 0.5);
	}

	var lion_scene=document.getElementById("lion_scene");
	var lion_parallax=new Parallax(lion_scene, {
		invertX: false,
		invertY: false,
		originY: 0.5
	});
	lion_parallax.friction(0.05, 0.05);

	var lionMax=20;
	var lionNow=0;
	var lionMove=0;
	var lionTime;
	var lionRange=lionMax/boxCenterH;
	function lionZ(y) {
		lionMove=y*lionRange;
		if (lionMove*-1>lionMax) {
			lionMove=lionMax*-1;
		} else if (lionMove*-1<0) {
			lionMove=0;
		}
		clearInterval(lionTime);

		lionTime=setInterval(() => {
			if (parseInt(lionMove)==parseInt(lionNow)) {
				clearInterval(lionTime);
			} else if (lionNow<lionMove) {
				lionNow=lionNow+(lionRange+0.01);
			} else if (lionNow>lionMove) {
				lionNow=lionNow-(lionRange+0.01);
			}
			lion_scene.style=`transform: translate3d(0px, 0%, ${ lionNow*
				-1 }px) scale(1)`;
		}, 0.5);
	}
}

var tag=document.createElement("script");
tag.src="https://www.youtube.com/iframe_api";
var firstScriptTag=document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
	player=new YT.Player("player", {
		width: "100%",
		height: "100%",
		videoId: "3xuF-cCZEWc",
		playerVars: {
			playlist: "3xuF-cCZEWc",
			autoplay: 0,
			loop: 1,
			controls: 0,
			playsinline: 1,
			rel: 0
		},
		events: {
			onReady: onPlayerReady
		}
	});
}
function onPlayerReady(event) {
	event.target.setVolume(0);
	event.target.setLoop(true);
}

var scroll_path=0
var allpage=document.querySelectorAll("[name='homepage']");
var fake_h=document.querySelector("#fake_h");
var home_scroll=document.querySelector("#home_scroll");
var setH=0;
var oldScroll=0;
var newScroll=0;
var nowScroll=0;
var moveLimet=0.5;
var scrollState;


var obj1H=0
var ani2T1=document.querySelector("#home_third_txt1");
var ani2T1_s=-600
var ani2T1_e=-440
var ani2T1_n=ani2T1_s
var ani2T1_op=0


var ani2T2=document.querySelector("#home_third_txt2");
var ani2T2_s=-500
var ani2T2_op=0
var ani2T2_n=ani2T2_s

var obj2H=0

var ani4Bg=document.querySelector("#forthBg");
var ani4Bg_op=0
var ani4Bg_s=-350
var ani4Bg_e=0
var ani4Bg_n=ani4Bg_s
var ani4T1=document.querySelector("#forthTxt");
var ani4T1_op=0
var ani4T1_s=-500
var ani4T1_e=0
var ani4T1_n=ani4T1_s

var aniCat=document.querySelector("#forth_cat");
var aniCat_s=100;
var aniCat_e=0;
var aniCat_n=aniCat_n

var transformNum=0

var ani7H=200
var setHdefault=ani7H
function setScroll(num) {
	transformNum=num*-1
	if (scrollState==8) {
		console.log('transformNum', transformNum*-1);
		console.log('obj2H', obj2H);
		if (transformNum*-1>obj2H) {
			transformNum=obj2H*-1
		}
	}
	home_scroll.style=`transform: translateY(${ transformNum }px);`;
}

var ani1Start
window.addEventListener("scroll", () => {
	console.log('!!!!'+getScrollT.scrollTop);
	newScroll=getScrollT.scrollTop
	nowScroll=nowScroll+(newScroll-oldScroll)

	if (newScroll>=0&&newScroll<obj1H*(1/3)) {
		ani1(nowScroll)
		scrollState=1
	}
	if (newScroll>obj1H*(1/3)&&newScroll<obj1H*(1/2)) {
		ani2(nowScroll)
		scrollState=2
	}
	if (newScroll>obj1H*(1/2)&&newScroll<obj1H) {
		ani3(nowScroll)
		scrollState=3
	}
	if (newScroll>obj1H&&newScroll<obj2H-obj1H*(1/2)) {
		ani4(nowScroll)
		scrollState=4
	}
	// 文字１、２淡出 
	if (newScroll>obj2H-obj1H*(1/2)&&newScroll<obj2H-obj1H*(1/3)) {
		ani5(nowScroll)
		scrollState=5
	}

	// forthBg淡入＆下滑
	if (newScroll>obj2H-obj1H*(1/2)&&newScroll<obj2H) {
		ani6(nowScroll)
		scrollState=6
	}

	// forthTXT淡入＆下滑
	if (newScroll>obj2H-obj1H*(1/3)&&newScroll<obj2H+ani7H) {
		ani7(nowScroll)
		scrollState=7
	}
	if (newScroll>obj2H-obj1H*(1/3)&&newScroll<obj2H+ani7H) {
		ani8(nowScroll)
		scrollState=8
	}

	if (newScroll-oldScroll<0) {
		scroll_path=-1
	} else {
		scroll_path=1
	}
	oldScroll=newScroll
	setScroll(nowScroll)
})

// 開始滑動
function ani1(s) {
	console.log('ani1');
	// setScroll(s)

	if (scroll_path<0) {
		ani2T1_op=check_op((s-(obj1H*1/3))*0.005);
	}

	ani2T1.style=`transform: translateY(${ ani2T1_s }px); opacity: ${ ani2T1_op };`;
}

//顯示 home_third 文字1
function ani2(s) {
	// setScroll(s)
	console.log('ani2');
	ani2T1_op=check_op((s-(obj1H*1/3))*0.005);
	ani2T1_n=ani2T1_n+(s-oldScroll)*0.3;
	if (ani2T1_n>ani2T1_e) {
		ani2T1_n=ani2T1_e
	} else if (ani2T1_n<ani2T1_s) {
		ani2T1_n=ani2T1_s
	}
	ani2T1.style=`transform: translateY(${ ani2T1_n }px); opacity: ${ ani2T1_op };`;

	ani2T2_op=check_op((s-(obj1H*1/2))*0.01);

	ani2T2_n=ani2T2_n+(s-oldScroll)*0.2;
	ani2T2.style=`transform: translateY(${ ani2T2_n }px); opacity: ${ ani2T2_op };`;
}

//顯示 home_third 文字2
function ani3(s) {
	console.log('ani3');
	// setScroll(s)
	ani2T1_op=check_op((s-(obj1H*1/3))*0.005);
	ani2T1_n=ani2T1_n+(s-oldScroll)*0.3;
	if (ani2T1_n>ani2T1_e) {
		ani2T1_n=ani2T1_e
	}
	ani2T1.style=`transform: translateY(${ ani2T1_n }px); opacity: ${ ani2T1_op };`

	ani2T2_op=check_op((s-(obj1H*1/2))*0.01);

	ani2T2_n=ani2T2_n+(s-oldScroll)*0.1;
	if (ani2T2_n>ani2T1_e) {
		ani2T2_n=ani2T1_e
	}
	ani2T2.style=`transform: translateY(${ ani2T2_n }px); opacity: ${ ani2T2_op };`;
}

// 文字１微微往上 －２繼續往下
function ani4(s) {
	console.log('ani4', s-oldScroll);
	// setScroll(s)

	ani2T1_op=check_op((s-(obj1H*1/3))*0.005);
	if (ani2T1_op>1) {
		ani2T1_op=1
	}

	ani2T1_n=ani2T1_n-(s-oldScroll)*0.5;
	if (ani2T1_n<ani2T1_s) {
		ani2T1_n=ani2T1_s
	}
	// setScroll(s)
	ani2T1.style=`transform: translateY(${ ani2T1_n }px); opacity: ${ ani2T1_op };`


	ani2T2_op=check_op((s-(obj1H*1/2))*0.01);

	ani2T2_n=ani2T2_n+(s-oldScroll)*0.1;
	ani2T2.style=`transform: translateY(${ ani2T2_n }px); opacity: ${ ani2T2_op };`;

	if (scroll_path<0) {
		ani4Bg_op=check_op(ani4Bg_op+(s-oldScroll)*0.01);
		ani4Bg_n=ani4Bg_n+(s-oldScroll);
		if (ani4Bg_n>ani4Bg_e) {
			ani4Bg_n=ani4Bg_e
		} else if (ani4Bg_n<ani4Bg_s) {
			ani4Bg_n=ani4Bg_s
		}
		ani4Bg.style=`transform: translateY(${ ani4Bg_n }px); opacity: ${ ani4Bg_op };`;
		ani2T2_op=check_op(ani2T2_op-(s-oldScroll)*0.01);
		ani2T2.style=`transform: translateY(${ ani2T2_n }px); opacity: ${ ani2T2_op };`
		ani4T1_op=check_op(ani4T1_op+(s-oldScroll)*0.01);
		ani4T1.style=`transform: translateY(${ ani4T1_n }px); opacity: ${ ani4T1_op };`;
	}
}

// 文字１、２淡出 
function ani5(s) {
	console.log('ani5', s-oldScroll);
	// setScroll(s)
	if (scroll_path<0) {
		ani2T1_op=check_op(ani2T1_op-(s-oldScroll)*0.005);
		ani2T2_op=check_op(ani2T2_op-(s-oldScroll)*0.005);
	} else {
		ani2T1_op=check_op(ani2T1_op-(s-oldScroll)*0.01);
		ani2T2_op=check_op(ani2T2_op-(s-oldScroll)*0.01);
	}
	ani2T1.style=`transform: translateY(${ ani2T1_n }px); opacity: ${ ani2T1_op };`
	ani2T2.style=`transform: translateY(${ ani2T2_n }px); opacity: ${ ani2T2_op };`
}


// forthBg淡入＆下滑
function ani6(s) {
	console.log('ani6');
	if (scroll_path>0) {
		ani4Bg_op=check_op(ani4Bg_op+(s-oldScroll)*0.005);
	} else {
		ani4Bg_op=check_op(ani4Bg_op+(s-oldScroll)*0.003);
	}
	ani4Bg_n=ani4Bg_n+(s-oldScroll);
	if (ani4Bg_n>ani4Bg_e) {
		ani4Bg_n=ani4Bg_e
	} else if (ani4Bg_n<ani4Bg_s) {
		ani4Bg_n=ani4Bg_s
	}
	ani4Bg.style=`transform: translateY(${ ani4Bg_n }px); opacity: ${ ani4Bg_op };`;

}


// forthTXT淡入＆下滑
function ani7(s) {
	console.log('ani7');
	if (scroll_path<0) {
		ani4T1_op=check_op(ani4T1_op+(s-oldScroll)*0.005);
	} else {
		ani4T1_op=check_op(ani4T1_op+(s-oldScroll)*0.01);
	}
	ani4T1_n=ani4T1_n+(s-oldScroll)*1.2;
	if (ani4T1_n>ani4T1_e) {
		ani4T1_n=ani4T1_e
	} else if (ani4T1_n<ani4T1_s) {
		ani4T1_n=ani4T1_s
	}
	ani4T1.style=`transform: translateY(${ ani4T1_n }px); opacity: ${ ani4T1_op };`;
}

function ani8(s) {
	console.log('ani8');
	// setScroll(s)
	console.log('scrollState', scrollState);
}



setTimeout(() => {
	for (let i=0; i<allpage.length; i++) {
		const element=allpage[i];
		setH+=element.offsetHeight;
		obj1H=allpage[i].offsetHeight
		obj2H=allpage[i].offsetHeight*2
		console.log(i+":"+element.offsetHeight);
		console.log("setH:"+setH);
	}
}, 20);

function check_op(num) {
	if (num>1) {
		return 1
	} else if (num<0) {
		return 0
	} else {
		return num
	}
}

function set_fake_h(h) {
	fake_h.style.height=h+setHdefault+"px";
}

function homeInit() {
	setTimeout(() => {
		set_fake_h(setH);
	}, 100);
	setScroll(0);
	ani2T1.style=`transform: translateY(${ ani2T1_s }px); opacity: ${ ani2T1_op };`;
	ani2T2.style=`transform: translateY(${ ani2T2_s }px); opacity: ${ ani2T2_op };`;
	ani4Bg.style=`transform: translateY(${ ani4Bg_s }px); opacity: ${ ani4Bg_op };`;
	ani4T1.style=`transform: translateY(${ ani4T1_s }px); opacity: ${ ani4T1_op };`;
	aniCat.style=`--cat:${ aniCat_s }%`;
}
// start
document.addEventListener("DOMContentLoaded", () => {
	homeInit();
});
