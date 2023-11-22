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
if (device=="ph") {
	getScrollT.style=`overflow: hidden;`
}
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
}
home_btn.addEventListener("click", home_btnHandler)
home_btn.addEventListener("touchstart", home_btnHandler)

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
function touchHandler(e) {
	if (header.classList.contains("onHead")) return
	touchStart=e.touches[0].pageY;
	window.addEventListener("touchmove", touchmoveHandler);
	window.addEventListener("touchend", touchendHandler);
}
function touchmoveHandler(e) {
	e.preventDefault();
	if (header.classList.contains("onHead")) return
	if (pageNum==0) return;
	touchMove=touchStart-e.touches[0].pageY;
	if (touchMove==0) return;
	MouseWheel(touchMove)
	touchStart=e.touches[0].pageY
	console.log('touchMove', touchMove);
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
	// changePage(pagedown);
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
var old_scroll=0, now_scroll=0;
var home_y=0;
var home_scroll=0
var window_h=window.innerWidth<=1024? window.innerHeight-54:window.innerHeight-98;

var home_sec=document.querySelector("#home_second");
var home_third=document.querySelector("#home_third");
var third_box=document.querySelector("#home_txtBox");
var third_txt1=document.querySelector("#home_third_txt1");
var third_txt2=document.querySelector("#home_third_txt2");
var home_forth=document.querySelector("#home_forth");
var forthTxt1=document.querySelector("#forthTxt");


var sec_s=0, sec_e, sec_m=sec_s, sec_d=0.2, sec_speed=0.005, sec_op=1
var third_s=100, third_e=0, third_m=third_s, third_d=0.2, third_speed=0.01, third_speed2=0.009

var thirdT1_s=-75, thirdT1_e=0, thirdT1_m=thirdT1_s, thirdT1_d=0.2, thirdT1_speed=0.015, thirdT1_op=0;
var thirdT2_s=-60, thirdT2_e=0, thirdT2_m=thirdT2_s, thirdT2_d=0.2, thirdT2_speed=0.012, thirdT2_op=0;

var forth_s=100, forth_e=0, forth_m=forth_s, forth_d=0.2, forth_speed=0.01, forth_data=100
var forthT_s=-120, forthT_e=0, forthT_m=forthT_s, forthT_d=0.2, forthT_speed=0.041, forthT_op=0


var setFake_h=window_h+third_s/third_speed+forth_s/forth_speed
// 

var range1=0
var range2=third_s/third_speed
console.log('range2', range2);
var range3=forth_s/forth_speed+range2
range3=range3.toFixed(2);
console.log('range3', range3);
// var range3=third_s/third_speed
// var range4=range3+range3/2
// var range5;


document.addEventListener("scroll", function (e) {
	home_y=html.scrollTop
	html.scrollTop-old_scroll>0? home_scroll=1:home_scroll=-1

	secMove(home_y-old_scroll)
	thirdMove(home_y-old_scroll)
	// thirdTxt(home_y-old_scroll)
	forthMove(home_y-old_scroll)
	// forthTxt(home_y-old_scroll)
	old_scroll=html.scrollTop
});

function secMove(move) {
	if (home_y-range3>0) {
	} else if (home_y-range1>=0) {
		sec_m-=move*sec_speed
	}
	if (sec_m>sec_s) {
		sec_m=sec_s
	}
	home_sec.style.transform=`translateY(${ sec_m }%)`;
}
function thirdMove(move) {
	var t=(range2-home_y)/100
	if (t<0) {
		t=(range2-home_y)/100+0.5*Math.abs(t)
	} else {
		t=(range2-home_y)/100
	}
	// console.log('thirdMove', t);
	third_box.style.transform=`translateY(${ t }%)`;
	home_third.style.transform=`translateY(${ t }%)`;
	thirdTxt(t)

}
function thirdTxt(t) {
	if (t<-25) {
		if (thirdT2_op!==0) {
			thirdT2_op=0
		}
	} else if (t<0) {
		var m1=t*2*(Math.abs(thirdT1_s)/100)
		var m2=t*2*(Math.abs(thirdT2_s)/100)
		thirdT1_m=m1*-1
		thirdT2_m=m2*-1
		thirdT2_op=1+t*4/100
		thirdT2_op=Math.abs(thirdT2_op);
	} else if (t<50) {
		var m1=t*2*(Math.abs(thirdT1_s)/100)
		var m2=t*2*(Math.abs(thirdT2_s)/100)
		thirdT2_op=t*2/100-1
		thirdT2_op=Math.abs(thirdT2_op);
		thirdT1_m=m1*-1
		thirdT2_m=m2*-1
	} else if (t>50&&thirdT2_op!==0) {
		thirdT2_op=0
	}
	third_txt1.style.transform=`translateY(${ thirdT1_m }%)`;
	third_txt2.style.transform=`translateY(${ thirdT2_m }%)`;
	third_txt1.style.opacity=thirdT2_op;
	third_txt2.style.opacity=thirdT2_op;
}
function forthMove(move) {
	var t=(range3-home_y)/100
	console.log('forthMove', t);
	// console.log('forthMove', t);

	if (t<50) {
		var m=t*2*(Math.abs(forthT_s)/100)
		forthT_m=m*-1
		forthT_op=t*2/100-1
		forthT_op=Math.abs(forthT_op);
	}
	console.log('forthT_op', forthT_op);
	forthTxt1.style.opacity=forthT_op;

	forthTxt1.style.transform=`translateY(${ forthT_m }%)`;
	home_forth.style.transform=`translateY(${ t }%)`;
}
// function forthMove(move) {
// 	if (home_y-range3>0) {
// 		forth_m-=move*forth_speed
// 		forth_data-=move*forth_speed
// 	} else if (home_y-range2>=0) {
// 		if (home_scroll<0) {
// 			if (forth_m<forth_s) {
// 				forth_m-=move*forth_speed
// 				forth_data-=move*forth_speed
// 			}
// 		}
// 	}
// 	if (forth_m<forth_e) {
// 		forth_m=forth_e
// 	} else if (forth_m>forth_s) {
// 		forth_m=forth_s
// 		forth_data=forth_s
// 	}
// 	home_forth.setAttribute("data-m", forth_data)
// 	home_forth.style.transform=`translateY(${ forth_m }%)`;
// }
// function forthTxt(move) {
// 	var getD=home_forth.getAttribute("data-m")
// 	console.log('forth_m', forth_m);

// 	if (forth_m<50) {
// 		console.log('start');
// 		forthT_op+=move*0.0005
// 		forthT_m+=move*forthT_speed
// 	} else if (forth_m>50&&home_scroll<0) {
// 		forthT_op+=move*0.0005
// 	}
// 	if (forthT_m>0) {
// 		forthT_m=forthT_e
// 	} else if (forthT_m<forthT_s) {
// 		forthT_m=forthT_s
// 	}
// 	forthT_op=check_op(forthT_op);

// }

function homeInit() {
	fake_h.style.height=setFake_h+"px";
	html.scrollTop=0
	home_sec.style=`transform: translateY(${ sec_s }%);transition: transform ${ sec_d }s;opacity: ${ sec_op };`;
	home_third.style=`transform: translateY(${ third_s }%);transition: transform ${ third_d }s;`;
	third_box.style=`transform: translateY(${ third_s }%);transition: transform ${ third_d }s;`;
	third_txt1.style=`transform: translateY(${ thirdT1_s }%);transition: transform ${ thirdT1_d }s;opacity: ${ thirdT1_op };`;
	third_txt2.style=`transform: translateY(${ thirdT2_s }%);transition: transform ${ thirdT2_d }s;opacity: ${ thirdT1_op };`;
	home_forth.style=`transform: translateY(${ forth_s }%);transition: transform ${ forth_d }s;`;
	forthTxt1.style=`transform: translateY(${ forthT_s }%);transition: transform ${ forthT_d }s;opacity: ${ forthT_op };`;
	home_forth.setAttribute("data-m", forth_data)
}
document.addEventListener("DOMContentLoaded", () => {
	homeInit();
});