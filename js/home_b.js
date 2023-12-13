var getScrollT=document.querySelector("html");
var wrap=document.querySelector("#wrap");
var fake_h=document.querySelector("#fake_h");
var changePageTime;
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
var pageNum=0;
function home_btnHandler() {
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
	html.scrollTop=0

}
home_btn.addEventListener("click", home_btnHandler)
// home_btn.addEventListener("touchstart", home_btnHandler)

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
var fifth_videoPh=document.querySelector("#fifth_video_ph");


fifth_video.pause();
fifth_video_m.pause();

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

var body=document.querySelector("body");



function check_op(num) {
	if (num>1) {
		return 1
	} else if (num<0) {
		return 0
	} else {
		return num
	}
}
var touchStart=0;
var touchEnd;
var touchMove;
var header=document.querySelector("#header");
setTimeout(() => {
	header.style="display: ;"
}, 1000);

window.addEventListener("mousemove", mousemove);
// window.addEventListener("touchstart", touchHandler);

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
var old_scroll=0, now_scroll=0;
var home_y=0;
var home_scroll=0
var home_move=document.querySelector('#home_scroll')
var home_move_y=0
var window_h=window.innerWidth<=1024? window.innerHeight-54:window.innerHeight-98;
var dev=window.innerWidth<=1024? "ph":"pc"
var home_sec=document.querySelector("#home_second");
var home_third=document.querySelector("#home_third");
var third_box=document.querySelector("#home_txtBox");
var third_txt1=document.querySelector("#home_third_txt1");
var third_txt2=document.querySelector("#home_third_txt2");
var home_forth=document.querySelector("#home_forth");
var forthTxt1=document.querySelector("#forthTxt");
var forthBg=document.querySelector("#forthBg");
var forthCat=document.querySelector("#forth_cat");
var forthBox=document.querySelector("#forthBox");

var fifth_pc1=document.querySelector("#fifth_pc_g1");
var fifth_pc2=document.querySelector("#fifth_pc_g2");
var fifth_ph1=document.querySelector("#fifth_ph_g1");
var fifth_ph2=document.querySelector("#fifth_ph_g2");
var fifth_bg=document.querySelector("#home_fifth_box1");
var fifth_txt=document.querySelector("#fifth_txt");
// 5000
var moveSpeed=0.07
var rangeSpeen=1/moveSpeed
var sec_s=0, sec_e, sec_m=sec_s, sec_d=0.2, sec_speed=0.005, sec_op=1
var third_s=100, third_e=0, third_m=third_s, third_d=0.2, third_speed=0.01, third_op=1

var thirdT1_s=-75, thirdT1_e=0, thirdT1_m=thirdT1_s, thirdT1_d=0.2, thirdT1_op=0;
var thirdT2_s=-60, thirdT2_e=0, thirdT2_m=thirdT2_s, thirdT2_d=0.2, thirdT2_op=0;

var home_third_liner=document.querySelector("#home_third_liner")


var forth_s=100, forth_e=0, forth_m=forth_s, forth_d=0.2, forth_op=1
var forthT_s=-120, forthT_e=0, forthT_m=forthT_s, forthT_d=0.2, forthT_speed=0.041, forthT_op=0
var forthBg_s=-70, forthBg_e=0, forthBg_m=forthBg_s, forthBg_d=0.2, forthBg_op=0
var forthCat_s=100, forthCat_e=0, forthCat_m=forthCat_s, forthCat_d=0.2, forthCat_op=1
var forthOut_s=100, forthOut_e=0.1, forthOut_m=1, forthOut_d=0.2
var fif_s=100, fif_e=0, fif_m=fif_s, fif_d=0.2, fif_op=0
var fifPT_s=-100, fifPT_e=0, fifPT_m, fifPT_s, fifPT_d=0.2, fifPT_op=1, fifPT_sc=1.2
var fifPB_s=100, fifPB_e=0, fifPB_m=fifPB_s, fifPB_d=0.2, fifPB_op=1
var fifT_s=1.8, fifT_m=fifT_s, fifT_d=0.2, fifT_op=0, fifT_sc=0.7
var fif2_s=100, fif2_e=0, fif2_=fif2_s, fif2_d=0.2, fif2_op=0
var fifth_bird=document.querySelector("#fif_bird");
var fifBird_s=50, fifBird_d=0.2, fifBird_m=fifBird_s, fifBird_op=0
var fif_bee1=document.querySelector("#fif_bee1");
var fifBee1_s=200, fifBee1_d=0.2, fifBee1_m=fifBee1_s, fifBee1_op=0, fifBee1_sc=0.7
var fif_bee2=document.querySelector("#fif_bee2");
var fifBee2_s=100, fifBee2_d=0.2, fifBee2_m=fifBee2_s, fifBee2_op=0, fifBee2_sc=1
var fif_bee3=document.querySelector("#fif_bee3");
var fifBee3_s=150, fifBee3_d=0.2, fifBee3_m=fifBee3_s, fifBee3_op=0, fifBee3_sc=1

var fifth_bg2=document.querySelector("#home_fifth_box2");
var fifthBg2_op=0, fifthBg2_d=0.2

var fifbee4=document.querySelector('#fifbee4')
var fifBee4_s=150, fifBee4_e, fifBee4_d=0.2, fifBee4_m=fifBee4_s, fifBee4_op=0

var fifT2=document.querySelector('#fiftxt2')
var fifT2_s=100, fifT2_e, fifT2_d=0.2, fifT2_m=fifT2_s, fifT2_op=0

var fifBg3=document.querySelector('#fifBg3')
var fifBg3_s=0, fifBg3_e, fifBg3_d=0.2, fifBg3_sc=0.7, fifBg3_op=0, fifBg3_m=0

var home_six=document.querySelector('#home_six')
var six_s=100, six_e=0, six_m=-100, six_d=0.2, sixOut_op=1, sixIn_op=0

var six_txt=document.querySelector("#six_txt");
var sixT_s=100, sixT_e=0, sixT_d=0.2, sixT_m=sixT_s
var six_bg1=document.querySelector("#six_bg1");
var sixBg1_s=0, sixBg2_d=0.2

var six_bg2=document.querySelector("#six_bg2");
var sixBg2_s=-100, sixBg2_e=0, sixBg2_m=sixBg2_s, sixBg2_d=0.2
var six_lin=document.querySelector("#six_lin");

var sev_s=100

var sev_bg=document.querySelector("#sev_bg");
var sev_footer=document.querySelector("#sev_footer");
var sevBg_s=100, sevBg_m=sevBg_s, sevBg_d=0.2, sevBg_op=0

var sev_txt=document.querySelector("#sev_txt");
var sevT_op=0, sevT_m=100
var sev_lin=document.querySelector("#sev_lin");
var sevLin_op=0, sevLin_h=0

var range1=0
var range2=third_s/moveSpeed


var range3=forth_s/moveSpeed+range2
var range4=forthOut_s/moveSpeed+range3;
var range5=fif_s/moveSpeed+range4;
var range5_1=fif2_s/moveSpeed+range5
var range6=six_s/moveSpeed+range5_1
var range7=sev_s/moveSpeed+range6
// var range7_1=range7

var setFake_h=window_h+range2+forth_s/moveSpeed+forthOut_s/moveSpeed+fif_s/moveSpeed+fif2_s/moveSpeed+six_s/moveSpeed
setFake_h=setFake_h+sev_s/moveSpeed

var d1=false

var st_count=0, st_count2=0
var st

var wheelNew=0

window.addEventListener("wheel", function (e) {
	console.log('wheel', e.wheelDelta);
	if (e.wheelDelta<0) {
		wheelNew=1
	} else {
		wheelNew=-1
	}
})
function scrollTime() {
	st=setTimeout(() => {
		if (wheelNew<0) {
			st_count-=1
		} else {
			st_count+=1
		}
		st_count<0? st_count=0:st_count
	}, 100);
}

function scrollTime2() {
	st=setTimeout(() => {
		if (wheelNew<0) {
			st_count2-=1
		} else {
			st_count2+=1
		}
		st_count2<0? st_count2=0:st_count2
	}, 100);
}

document.addEventListener("scroll", function (e) {

	home_y=html.scrollTop
	html.scrollTop-old_scroll>0? home_scroll=1:home_scroll=-1

	var delay1=(range2-home_y)/rangeSpeen
	var delay2=(range3-home_y)/rangeSpeen
	console.log('delay1', st_count);
	console.log('delay2', st_count2);
	if (delay1<=0&&st_count<=2&&home_scroll>0) {
		if (html.scrollTop>=range2) {
			html.scrollTop=range2;
			home_y=range2;
		}
		clearTimeout(st)
		scrollTime()
	} else if (delay1>0&&st_count>0) {
		html.scrollTop=range2;
		home_y=range2;
		clearTimeout(st)
		scrollTime()
	}

	// else if (delay1>0&&st_count==3&&delay2>100) {
	// 	if (wheelNew<0) {
	// 		st_count=0
	// 	}
	// }

	// else if (delay1>0&&st_count>0) {
	// 	window.addEventListener("wheel", function (e) {
	// 		if (e.wheelDelta<0) {
	// 			wheelNew=1
	// 		} else {
	// 			wheelNew=-1
	// 		}
	// 		if (wheelNew<0) {
	// 			st_count=0
	// 		}
	// 	})

	// 	// html.scrollTop=range2;
	// 	// home_y=range2;
	// 	// clearTimeout(st)
	// 	// scrollTime()
	// }
	if (delay2<=0&&st_count2<=2&&home_scroll>0) {
		if (html.scrollTop>=range3) {
			html.scrollTop=range3;
			home_y=range3;
		}
		clearTimeout(st)
		scrollTime2()
	} else if (delay2>0&&st_count2>0) {
		html.scrollTop=range3;
		home_y=range3;
		clearTimeout(st)
		scrollTime2()
	}



	// else if (delay2>0&&st_count2==3) {
	// 	if (wheelNew<0) {
	// 		st_count2=0
	// 	}
	// 	// html.scrollTop=range3;
	// 	// home_y=range3;
	// 	// clearTimeout(st)
	// 	// scrollTime2()
	// }


	home_moveHandler()
	thirdMove()
	forthMove()
	forthOut()
	forthCatHandler();
	fifMove()
	fifMove2()
	sixMove()
	sevMove()
	sevMove1()
	old_scroll=html.scrollTop
});

function home_moveHandler() {
	var t=(range2-home_y)/rangeSpeen
	var t1=(range3-home_y)/rangeSpeen
	var t2=(range7-home_y)/rangeSpeen
	if (t2<100) {
		home_move_y=(100-t)*-1+400
	} else if (t1<0&&home_move_y<-200) {
		if (home_move_y<-200) {
			home_move_y=-200
		}
	} else {
		home_move_y=(100-t)*-1
		if (home_move_y<-200) {
			home_move_y=-200
		}
	}
	home_move.style=`transform: translateY(${ home_move_y }%);transition: all 0.2s;`;
}
function thirdMove() {
	var t=(range2-home_y)/rangeSpeen
	var thirdLin=0
	if (t<0) {
		thirdLin=t*-1/100
		if (thirdLin>0.7) {
			thirdLin=0.7
		}
	}
	thirdTxt(t)
	home_third_liner.style=`background: rgba(0, 0, 0, ${ thirdLin });`
}
function thirdTxt(t) {
	if (t<0) {
		var t1=t*2*(Math.abs(thirdT1_s)/100)
		var t2=t*2*(Math.abs(thirdT2_s)/100)
		thirdT1_m=t1*-1
		thirdT2_m=t2*-1
		thirdT2_op=(t/50)+1
	} else if (t<75) {
		var t1=t*2*(Math.abs(thirdT1_s)/90)
		var t2=t*2*(Math.abs(thirdT2_s)/110)
		thirdT2_op=1-(t/50)
		thirdT1_m=t1*-1
		thirdT2_m=t2*-1

	} else if (t>75&&home_scroll<0) {
		thirdT2_op=1-(t/50)
	}
	if (thirdT1_m<thirdT1_s) {
		thirdT1_m=thirdT1_s
	}
	if (thirdT2_m<thirdT2_s) {
		thirdT2_m=thirdT2_s
	}
	thirdT2_op=check_op(thirdT2_op);
	third_txt1.style.transform=`translateY(${ thirdT1_m }%)`;
	third_txt2.style.transform=`translateY(${ thirdT2_m }%)`;
	third_txt1.style.opacity=thirdT2_op;
	third_txt2.style.opacity=thirdT2_op;

}
function forthCatHandler() {
	var t=(range3-home_y)/rangeSpeen
	forthCat_m=t
	if (forthCat_m<0) {
		forthCat_m=0
		forthCat_m=(t*-1*0.8)

		home_third.style.opacity=1
		home_sec.style.opacity=1
	}
	forthCat.style.transform=`translateY(${ forthCat_m }%)`;
}
function forthMove() {
	var t=(range3-home_y)/rangeSpeen
	if (t<40) {
		var m=t*2*(Math.abs(forthT_s)/100)
		var m2=t*2*(Math.abs(forthBg_s)/100)
		forthT_m=m*-1
		forthBg_m=m2*-1
		forthBg_op=1-t/40
		forthT_op=1-(t/50)
	} else if (t>40&&forthBg_op!==0) {
		forthBg_op=0
	} else if (t<50) {
		var m=t*2*(Math.abs(forthT_s)/100)
		forthT_m=m*-1
		forthT_op=1-(t/50)
	} else if (t>50) {
		if (home_scroll<0&&forthT_op!==0) {
			forthT_op=1-(t/50)
		}
	}
	if (forthBg_m>=0) {
		forthBg_m=0
	}
	if (forthT_m>=0) {
		forthT_m=0
	}
	forth_m=t
	if (forth_m<=0) {
		forth_m=0
	}
	forthT_op=check_op(forthT_op);
	forthTxt1.style.opacity=forthT_op;
	forthTxt1.style.transform=`translateY(${ forthT_m }%)`;
	forthBg.style.opacity=forthBg_op;
	forthBg.style.transform=`translateY(${ forthBg_m }%)`;
}
function forthOut() {
	var t=(range4-home_y)/rangeSpeen
	if (t<60) {
		home_third.style.opacity=0
		home_sec.style.opacity=0
		forthOut_m=t/100
		fif_op=1-(t+40)/100
		forth_op=t/60
		if (forth_op<0) {
			forth_op=0
		}
		if (fif_op>1) {
			fif_op=1
		}
	} else if (t>60&&home_scroll<0&&forth_op<1) {
		forth_op=(t+40)/100*0.8
		fif_op=1-(t+40)/100
		forthOut_m=t/100
	}
	else if (t<100) {
		forthOut_m=t/100
	} else if (t>100&&home_scroll<0) {
		if (forthOut_m!==1) {
			forthOut_m=t/100
			home_third.style.opacity=1
			home_sec.style.opacity=1
		}
	}
	if (t>100&&home_scroll<0) {
		if (forthOut_m!==1) {
			forthOut_m=t/100
			home_third.style.opacity=1
			home_sec.style.opacity=1
		}
	}
	if (forthOut_m<forthOut_e) {
		forthOut_m=forthOut_e
	} else if (forthOut_m>1) {
		forthOut_m=1
	}
	home_forth.style.opacity=forth_op;
	forthCat.style.opacity=forth_op;
	forthBox.style=`transform: scale(${ forthOut_m });transition: transform ${ forthOut_d }s;`;
	fifth_bg.style=`--fifbg:1.1;;opacity: ${ fif_op };transition: transform ${ fif_d }s;`;
}
function fifMove() {
	var t=(range5-home_y)/rangeSpeen
	var fifbg_m=1.2
	var fifT_m=2
	var sc=t*(Math.abs(fifPT_s)/100)
	var top=t*(Math.abs(fifPT_s)/100)
	var bottom=t*(Math.abs(fifPB_s)/100)
	birdSc=0.7
	if (t<60) {
		var sct=t*(Math.abs(fifT_s)/60)
		var bee1=t*(Math.abs(fifBee1_s)/60)
		var bee2=t*(Math.abs(fifBee2_s)/60)
		var bee3=t*(Math.abs(fifBee3_s)/60)
		fifPT_m=top*-1
		fifPB_m=bottom
		fifPT_sc=1+sc/500
		fifbg_m=1+sc/500
		fifT_op=1-t/60
		fifBee1_op=1-t/60
		fifBee2_op=1-t/60
		fifBee3_op=1-t/60
		fifT_m=t/30
		var birdSc=1-(t/100/0.2)/10
		fifBee1_sc=1-(t/100/0.2)/10
		fifBird_m=t*(Math.abs(fifBird_s)/60)*2
		fifBee1_m=bee1
		fifBee2_m=bee2
		fifBee3_m=bee3
	} else if (t>60&&home_scroll<0) {
		fifT_op=1-t/60
		var birdSc=1-(t/100/0.2)/10
		fifBird_m=t*(Math.abs(fifBird_s)/60)*2
		fifPT_m=top*-1
		fifPB_m=bottom
		fifPT_sc=1+sc/500
		if (fifT_m<2) {
			fifT_m=t/30
		}
	} else if (t<100) {
		fifPT_m=top*-1
		fifPB_m=bottom
		fifPT_sc=1+sc/500
		fifbg_m=1+sc/500
	}
	fifPB_m<0? fifPB_m=0:fifPB_m
	fifbg_m<1? fifbg_m=1:fifbg_m

	if (birdSc>1) {
		birdSc=1
	}
	if (birdSc<0.7) {
		birdSc=0.7
	}
	if (fifBird_m>50) {
		fifBird_m=50
	}
	if (fifBird_m<0) {
		fifBird_m=0
	}
	if (fifPT_m>0) {
		fifPT_m=0
	}
	if (fifPT_sc<1) {
		fifPT_sc=1
	}
	if (fifT_m<1) {
		fifT_m=1
	}
	if (fifT_m>2) {
		fifT_m=2
	}
	if (fifBee2_m<0) {
		fifBee2_m=0
	}
	fifT_op=check_op(fifT_op);
	fifth_bg.style=`--fifbg:${ fifbg_m };opacity: ${ fif_op };transition: transform ${ fif_d }s;`;
	fifth_txt.style.opacity=fifT_op
	fifth_txt.style.transform=`scale(${ fifT_m })`;
	fifth_bird.style=` transform: scale(${ birdSc }) translate(${ fifBird_m }% , ${ fifBird_m }%);opacity:${ fifT_op };transition: all ${ fifT_d }s;`
	fif_bee1.style=`transform: scale(${ fifBee1_sc }) translate(-${ fifBee1_m }% , ${ fifBee1_m }%);transition: all ${ fifBee1_d }s;opacity: ${ fifBee1_op };`;
	fif_bee2.style=`transform: scale(${ fifBee2_sc }) translate(${ fifBee2_m }% , ${ fifBee2_m }%);transition: all ${ fifBee2_d }s;opacity: ${ fifBee2_op };`;
	fif_bee3.style=`transform: scale(${ fifBee3_sc }) translate(-${ fifBee3_m }% , ${ fifBee3_m }%);transition: all ${ fifBee3_d }s;opacity: ${ fifBee3_op };`;

	fifth_pc1.style.transform=`translateY(${ fifPT_m }%) scale(${ fifPT_sc })`;
	fifth_pc2.style.transform=`translateY(${ fifPB_m }%) scale(${ fifPT_sc })`;

	fifth_ph1.style.transform=`translateY(${ fifPT_m }%) scale(${ fifPT_sc })`;
	fifth_ph2.style.transform=`translateY(${ fifPB_m }%) scale(${ fifPT_sc })`;

}
function fifM(t) {
	fifPT_sc=1+(50-t*0.5)/100
	fifBird_m=t-100
	fifBee1_m=(t-100)*-1
	fifBee2_m=t-100
	fifBee3_m=(t-100)*-1
	fifBee1_sc=1+(0.8-(t/100)*0.8)
	fifT_op=1+(t-100)/100
	fif_op=1+(t-100)/100
	fifth_txt.style.opacity=fifT_op
	fifBee4_m=t
	fifbee4.style.transform=`translate(${ fifBee4_m }% , ${ fifBee4_m }%)`;
	fifBee4_op=1-(t/100)
	fifBee4_op=check_op(fifBee4_op)
	fifbee4.style.opacity=fifBee4_op

	fifT2_op=1-(t/100)
	fifT2_m=t
	if (fifT2_m<0) {
		fifT2_m=0
	}
	fifT2.style.opacity=fifT2_op
	fifT2.style.transform=`translateY(${ fifT2_m }%)`;

	fifBg3_sc=1-(t/100)*0.3
	if (fifBg3_sc>1) {
		fifBg3_sc=1
	} else if (fifBg3_sc<0.7) {
		fifBg3_sc=0.7
	}
	fifBg3.style=`transform: scale(${ fifBg3_sc }) translateY(${ fifBg3_s }%);transition: all ${ fifBg3_d }s;`;
}
function fifMove2() {
	var t=(range5_1-home_y)/rangeSpeen
	var fifbg_m=1
	if (t<70) {
		fifthBg2_op=(1-(t*0.2/10))*1.2
		fifthBg2_op=check_op(fifthBg2_op);
		fifth_bg2.style=`transition: all ${ fifthBg2_d }s;opacity: ${ fifthBg2_op };`;
	}
	if (t<50) {
		fifBee1_m=t-100
		fifbg_m=1+(30-t*0.3)/50
		fifM(t)
		if (fifbg_m<1) {
			fifbg_m=1
		}
		fifth_bg.style=`--fifbg:${ fifbg_m };opacity: ${ fif_op };transition: transform ${ fif_d }s;`;
		fifth_txt.style.transform=`scale(${ fifPT_sc })`;
		fif_bee1.style=`transform: scale(${ fifBee1_sc }) translate(${ fifBee1_m }% , -${ fifBee1_m }%);transition: all ${ fifBee1_d }s;opacity: ${ fifBee1_op };`;
		fif_bee2.style=`transform: scale(${ fifBee2_sc }) translate(${ fifBee2_m }% , ${ fifBee2_m }%);transition: all ${ fifBee2_d }s;opacity: ${ fifBee2_op };`;
		fif_bee3.style=`transform: scale(${ fifBee3_sc }) translate(${ fifBee3_m }% , -${ fifBee3_m }%);transition: all ${ fifBee3_d }s;opacity: ${ fifBee3_op };`;
		fifth_bird.style=` transform: scale(1) translate(${ fifBird_m }% , ${ fifBird_m }%);opacity:${ fifT_op };transition: all ${ fifT_d }s;`
		fifth_video.play();
		fifth_video_m.play();
	} else if (t<100) {
		fifbg_m=1+(30-t*0.3)/50
		if (fifbg_m<1) {
			fifbg_m=1
		}
		fifM(t)
		fifth_bg.style=`--fifbg:${ fifbg_m };opacity: ${ fif_op };transition: transform ${ fif_d }s;`;
		if (fifPT_sc>2) {
			fifPT_sc=2
		}
		fifth_txt.style.transform=`scale(${ fifPT_sc })`;
		fif_bee1.style=`transform: scale(${ fifBee1_sc }) translate(${ fifBee1_m }% , -${ fifBee1_m }%);transition: all ${ fifBee1_d }s;opacity: ${ fifBee1_op };`;
		fif_bee2.style=`transform: scale(${ fifBee2_sc }) translate(${ fifBee2_m }% , ${ fifBee2_m }%);transition: all ${ fifBee2_d }s;opacity: ${ fifBee2_op };`;
		fif_bee3.style=`transform: scale(${ fifBee3_sc }) translate(${ fifBee3_m }% , -${ fifBee3_m }%);transition: all ${ fifBee3_d }s;opacity: ${ fifBee3_op };`;
		fifth_bird.style=` transform: scale(1) translate(${ fifBird_m }% , ${ fifBird_m }%);opacity:${ fifT_op };transition: all ${ fifT_d }s;`
		fifth_video.pause();
		fifth_video.currentTime=0
		fifth_video_m.pause();
		fifth_video.currentTime=0
	}
	if (fifbg_m>1.3) {
		fifbg_m=1.3
	}
	if (t>70&&home_scroll<0) {
		if (fifthBg2_op!==0) {
			fifthBg2_op=(1-(t*0.2/10))*1.2
			fifthBg2_op=check_op(fifthBg2_op);
			fifth_bg2.style=`transition: all ${ fifthBg2_d }s;opacity: ${ fifthBg2_op };`;
		}
	}
	fifth_pc1.style.transform=`translateY(${ fifPT_m }%) scale(${ fifPT_sc })`;
	fifth_pc2.style.transform=`translateY(${ fifPB_m }%) scale(${ fifPT_sc })`;

	fifth_ph1.style.transform=`translateY(${ fifPT_m }%) scale(${ fifPT_sc })`;
	fifth_ph2.style.transform=`translateY(${ fifPB_m }%) scale(${ fifPT_sc })`;

}
function sixMove() {
	var t=(range6-home_y)/rangeSpeen
	if (t<100) {
		fifBg3_m=100-t+2
		sixOut_op=t/100-0.1
		sixOut_op=check_op(sixOut_op);
		fifT2_m=(100-t)*-1
		sixBg2_m=t*-1
		sixIn_op=1-(t/100)
		sixT_m=t*1.3
	}
	if (t<0) {
		sixBg2_m=t
	}
	if (sixBg2_m>0) {
		sixBg2_m=0
	} else if (sixBg2_m<-100) {
		sixBg2_m=-100
	}
	if (t>100&&home_scroll<0) {
		if (sixIn_op!==0) {
			sixIn_op=1-(t/100)
		}
		if (sixBg2_m!==-100) {
			sixBg2_m=t*-1
		}
	}
	six_bg1.style.opacity=sixIn_op
	six_txt.style.opacity=sixIn_op
	six_txt.style.transform=`translateY(${ sixT_m }%)`;
	six_lin.style.opacity=sixIn_op
	six_bg2.style.transform=`translateY(${ sixBg2_m }%)`;
	fifT2.style.transform=`translateY(${ fifT2_m }%)`;
	fifT2.style.opacity=sixOut_op
	fifbee4.style.opacity=sixOut_op
	fifth_video.style.opacity=sixOut_op
	fifth_videoPh.style.opacity=sixOut_op
	fifBg3.style=`transform: scale(${ fifBg3_sc }) translateY(${ fifBg3_m }%);transition: all ${ fifBg3_d }s;`;
}
function sevMove() {
	var t=(range7-home_y)/rangeSpeen

	if (t<50) {
		sevBg_m=t
		sevT_m=t
		sevBg_m=t
		sevBg_op=(1-t/100)
		sevT_op=(1-t/50)
	} else if (t<100) {
		sevBg_m=t
		sevBg_m=t
		sevBg_op=(1-t/100)
		if (home_scroll<0) {
			sevT_op=(1-t/50)
		}
	}
	if (t>50&&home_scroll<0) {
		sevT_op=(1-t/50)
	}
	sev_bg.style=`transform: translateY(${ sevBg_m }%);transition: all 0.2s;opacity:${ sevBg_op };`;
	sev_txt.style=`opacity: ${ sevT_op };transition: all 0.2s;transform: translateY(${ sevT_m }%)`;
	sev_footer.style=`transform: translateY(${ sevBg_m }%);transition: all 0.2s;`;

}
function sevMove1() {
	// var t=(range7_1-home_y)/rangeSpeen
	// if (t<50) {
	// 	sevT_op=(1-t*2/100)
	// 	sevT_m=t*2
	// }
	// if (t<100) {
	// 	sevBg_op=(1-t/100)
	// 	sevBg_m=t
	// }
	// if (t>100&&home_scroll<0) {
	// 	if (sevBg_op!==0) {
	// 		sevBg_op=(1-t/100)
	// 		sevBg_m=t
	// 	}
	// 	if (sevT_op!==0) {
	// 		sevT_op=(1-t*2/100)
	// 		sevT_m=t*2
	// 	}
	// }
	// sev_txt.style=`opacity: ${ sevT_op };transition: all 0.2s;`;
	// sev_footer.style=`transition: all 0.2s;`;
	// sev_bg.style=`transition: all 0.2s;opacity:${ sevBg_op };`;

	// sev_txt.style=`opacity: ${ sevT_op };transition: all 0.2s;transform: translateY(${ sevT_m }%)`;
	// sev_footer.style=`transform: translateY(${ sevBg_m }%);transition: all 0.2s;`;
	// sev_bg.style=`transform: translateY(${ sevBg_m }%);transition: all 0.2s;opacity:${ sevBg_op };`;
}

function homeInit() {
	fake_h.style.height=setFake_h+"px";
	home_move.style=`transform: translateY(${ home_move_y }%);transition: all 0.2s;`;
	home_sec.style=`transform: translateY(${ sec_s }%);transition: all ${ sec_d }s;opacity: ${ sec_op };`;
	home_third.style=`transform: translateY(${ third_s }%);transition: all ${ third_d }s;opacity: ${ third_op };`;
	third_box.style=`transform: translateY(${ third_s }%);transition: all ${ third_d }s;`;
	third_txt1.style=`transform: translateY(${ thirdT1_s }%);transition: all ${ thirdT1_d }s;opacity: ${ thirdT1_op };`;
	third_txt2.style=`transform: translateY(${ thirdT2_s }%);transition: all ${ thirdT2_d }s;opacity: ${ thirdT1_op };`;
	home_forth.style=`transform: translateY(${ forth_s }%);transition: all ${ forth_d }s;opacity: ${ forth_op };`;
	forthTxt1.style=`transform: translateY(${ forthT_s }%);transition: all ${ forthT_d }s;opacity: ${ forthT_op };`;
	forthBg.style=`transform: translateY(${ forthBg_s }%);transition: all ${ forthBg_d }s;opacity: ${ forthBg_op };`;
	forthCat.style=`transform: translateY(${ forthCat_s }%);transition: all ${ forthCat_d }s;`;
	forthBox.style=`transform: scale(${ forthOut_m });transition: all ${ forthOut_d }s;`;
	fifth_pc1.style=`transform: translateY(${ fifPT_s }%)  scale(${ fifPT_sc });transition: all ${ fifPB_d }s;`;
	fifth_pc2.style=`transform: translateY(${ fifPB_s }%)  scale(${ fifPT_sc });transition: all ${ fifPB_d }s;`;
	fifth_ph1.style=`transform: translateY(${ fifPT_s }%)  scale(${ fifPT_sc });transition: all ${ fifPB_d }s;`;
	fifth_ph2.style=`transform: translateY(${ fifPB_s }%)  scale(${ fifPT_sc });transition: all ${ fifPB_d }s;`;
	fifth_bg.style=`--fifbg:1.1;;opacity: ${ fif_op };transition: transform ${ fif_d }s;`;
	fifth_txt.style=`transform: scale(${ fifT_m });transition: all ${ fifT_d }s;opacity: ${ fifT_op };`;
	fifth_bird.style=`transform: scale(${ fifT_sc }) translate(${ fifBird_s }% , ${ fifBird_s }%);transition: all ${ fifBird_d }s;opacity: ${ fifT_op };`;
	fif_bee1.style=`transform: scale(${ fifBee1_sc }) translate(-${ fifBee1_s }% , ${ fifBee1_s }%);transition: all ${ fifBee1_d }s;opacity: ${ fifBee1_op };`;
	fif_bee2.style=`transform: scale(${ fifBee2_sc }) translate(${ fifBee2_s }% , ${ fifBee2_s }%);transition: all ${ fifBee2_d }s;opacity: ${ fifBee2_op };`;
	fif_bee3.style=`transform: scale(${ fifBee3_sc }) translate(-${ fifBee3_s }% , ${ fifBee3_s }%);transition: all ${ fifBee3_d }s;opacity: ${ fifBee3_op };`;
	fifth_bg2.style=`transition: all ${ fifthBg2_d }s;opacity: ${ fifthBg2_op };`;
	fifbee4.style=`transform: translate(${ fifBee4_s }% , ${ fifBee4_s }%);transition: all ${ fifBee4_d }s;opacity: ${ fifBee4_op };`;
	fifT2.style=`transform: translateY(${ fifT2_s }%);transition: all ${ fifT2_d }s;opacity: ${ fifT2_op };`;
	fifBg3.style=`transform: scale(${ fifBg3_sc }) translateY(${ fifBg3_s }%);transition: all ${ fifBg3_d }s;`;
	home_six.style=`transform: translateY(${ six_m }%);transition: all ${ six_d }s;`;
	fifth_video.style=`opacity: ${ sixOut_op };transition: all 0.2s;`;
	fifth_videoPh.style=`opacity: ${ sixOut_op };transition: all 0.2s;`;
	six_txt.style=`transform: translateY(${ sixT_m }%);opacity: ${ sixIn_op };transition: all 0.2s;`;
	six_bg1.style=`opacity: ${ sixIn_op };transition: all 0.2s;`;
	six_bg2.style=`transform: translateY(${ sixBg2_s }%);transition: all 0.2s;`;
	six_lin.style.opacity=sixIn_op
	sev_bg.style=`transform: translateY(${ sevBg_s }%);;transition: all 0.2s;opacity:${ sevBg_op };`;
	sev_footer.style=`transform: translateY(${ sevBg_s }%);;transition: all 0.2s;`;
	sev_txt.style=`opacity: ${ sevT_op };transition: all 0.2s;`;
	sev_lin.style=`opacity:1;height:100%;transition: all 0.2s;`
}

document.addEventListener("DOMContentLoaded", () => {
	homeInit();
});