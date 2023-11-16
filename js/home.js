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
// function fifth_ani2() {
// 	fifthAni2Time=setTimeout(() => {
// 		home_fifth.classList.add("show2");
// 		fifth_video.play();
// 		fifth_video_m.play();
// 	}, 7000);
// }
// function changePage(boo) {
// 	clearInterval(scaleTime);
// 	mouseNoShow=document.querySelector("#"+pageArr[pageNum]);
// 	mouseShow.classList.add("zoomOut");
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


var home_y=0
var home_move=0
var home_speed=window.innerWidth<=1024? 10:20;
var scroll_path=0
var nowS=0, oldS=0;
var t1=document.querySelector("#home_third_txt1");
var t1_delay=0.8
var t1_s=-600, t1_e=0, t1_move=t1_s, t1_op=0;
var t2=document.querySelector("#home_third_txt2");
var t2_delay=0.7
var t2_s=-430, t2_e=0, t2_move=t2_s, t2_op=0;

var forthBg=document.querySelector("#forthBg");
var forthBg_s=-350, forthBg_e=0, forthBg_move=forthBg_s, forthBg_op=0, forthBg_over=0;
var forthBg_delay=0.6

var forthTxt=document.querySelector("#forthTxt");
var forthTxt_s=-400, forthTxt_e=0, forthTxt_move=forthTxt_s, forthTxt_op=0, forthTxt_over=0, forthTxt_scale=1;
var forthTxt_delay=0.5

var forthCat=document.querySelector("#forth_cat");
var forthCat_s=100, forthCat_e=0, forthCat_move=forthCat_s, forthCat_over=0, forthCat_out=0
var forthCat_delay=0.6

var forthBox=document.querySelector("#forthBox");
var forthBox_s=1, forthBox_e=0.05, forthBox_move=forthBox_s;
var forthBox_delay=0.6

var home_fifth=document.querySelector("#home_fifth");
var home_fifth_s=-100, home_fifth_e=0, home_fifth_op=0;
var home_fifth_delay=0.6

var fiftxt=document.querySelector("#fifth_txt");
var fiftxt_s=2, fiftxt_op=0;
var fiftxt_delay=0.6

var fifth_pcG1=document.querySelector("#fifth_pc_g1");
var fifth_pcG2=document.querySelector("#fifth_pc_g2");
var fifth_phG1=document.querySelector("#fifth_ph_g1");
var fifth_phG2=document.querySelector("#fifth_ph_g2");
var fifthG_delay=0.6
var fifthG1_s=-100, fifthG1_e=0, fifthG1_move=fifthG1_s;
var fifthG2_s=100, fifthG2_e=0, fifthG2_move=fifthG2_s;


var default_h=window.innerWidth<=1024? 54:98;// header高度
var h=window.innerHeight-default_h

var ani1Range_s=h/2, ani1Range_e=h, ani1Range_s2=h*(5/4);//第二張圖進場到一半 txt1 txt2開始顯示
var ani2Range=h*(6/4)
var ani3Range=h*(7/4)
var ani4Range=h*(8/4)
var ani5Range=h*(8/4)+350
var ani6Range=ani5Range+750
var ani7Range=ani6Range+540
// 2200
// 1600
// var ani3Range = (window.innerHeight) + window.innerHeight * (1 / 3);//第二張圖完全進場 txt1 在更慢

function MouseWheel(e) {
	if (device=='ph') {
		console.log('tt');
		if (touchMove>0) {
			// 向下滚动
			home_y-=1;
			scroll_path=-1
			// home_scroll_num -= 1
		} else if (touchMove<0) {
			// 向上滚动
			home_y+=1;
			scroll_path=1
			// home_scroll_num += 1
		}
	} else {
		if (e.deltaY>0) {
			// 向下滚动
			home_y-=1;
			scroll_path=-1
			// home_scroll_num -= 1
		} else if (e.deltaY<0) {
			// 向上滚动
			home_y+=1;
			scroll_path=1
			// home_scroll_num += 1
		}
	}
	if (home_y>0) {
		home_y=0
		// home_scroll_num = 0
	}
	// 计算滚动位置的百分比
	// if (t1_move > t1_e) {
	// 	t1_move = t1_e
	// }
	// const scrollPercent = (Math.abs(home_y) / window.innerHeight) * 100;
	const scrollPercent=Math.abs(home_y)*home_speed;
	home_move=Math.abs(home_y)*home_speed

	if (scrollPercent-ani4Range<0) {
		home_scroll.style.transform=`translateY(-${ home_move }px)`;
	} else if (scrollPercent-ani4Range>0) {
		home_scroll.style.transform=`translateY(-${ ani4Range }px)`;
	}

	console.log('scrollPercent', scrollPercent);
	ani_txt1(scrollPercent);
	ani_txt2(scrollPercent);
	ani_forthBg(scrollPercent);
	ani_forthTxt(scrollPercent);
	ani_forthCat(scrollPercent);
	ani_forthBox(scrollPercent);
	ani_fifth(scrollPercent);
	ani_fiftxt(scrollPercent)
	oldS=home_y;

}

function ani_txt1(s) {
	t1_op=check_op(Math.min((s-ani1Range_s)/home_speed*0.06, 1));
	if (s-ani2Range>0) {
		t1_op=0
	} else if (s-ani1Range_s2>0) {
		if (scroll_path<0) {
			t1_move+=home_speed*0.8
		} else if (scroll_path>0) {
			t1_move-=home_speed*0.8
		}
		if (t1_move<t1_s) {
			t1_move=t1_s
		} else if (t1_move>t1_e+250) {
			t1_move=t1_e+250
		}
		t1_op=1-check_op(Math.min((s-ani1Range_s2)/home_speed*0.05, 1));
	} else if (s-ani1Range_s>ani1Range_e-ani1Range_s) {
		if (scroll_path<0) {
			t1_move+=home_speed*0.5
		} else if (scroll_path>0) {
			t1_move-=home_speed*0.5
		}
		if (t1_move<t1_s) {
			t1_move=t1_s
		} else if (t1_move>t1_e+250) {
			t1_move=t1_e+250
		}
	} else if (s-ani1Range_s>0) {
		if (scroll_path<0) {
			t1_move+=home_speed*1.5
		} else if (scroll_path>0) {
			t1_move-=home_speed*1.5
		}
		if (t1_move<t1_s) {
			t1_move=t1_s
		} else if (t1_move>t1_e) {
			t1_move=t1_e
		}
	}
	t1.style.opacity=t1_op;
	t1.style.transform=`translateY(${ t1_move }px)`;
}

function ani_txt2(s) {
	t2_op=check_op(Math.min((s-ani1Range_s)/home_speed*0.05, 1));

	if (s-ani2Range>0) {
		t2_op=0
	} else if (s-ani1Range_s2>0) {
		if (scroll_path<0) {
			t2_move+=home_speed*1.3
		} else if (scroll_path>0) {
			t2_move-=home_speed*1.3
		}
		if (t2_move<t2_s) {
			t2_move=t2_s
		}
		t2_op=1-check_op(Math.min((s-ani1Range_s2)/home_speed*0.05, 1));
	} else if (s-ani1Range_s>ani1Range_e-ani1Range_s) {
		if (scroll_path<0) {
			t2_move+=home_speed*1.3
		} else if (scroll_path>0) {
			t2_move-=home_speed*1.3
		}
		if (t2_move<t2_s) {
			t2_move=t2_s
		}
	} else if (s-ani1Range_s>0) {
		if (scroll_path<0) {
			t2_move+=home_speed*1.1
		} else if (scroll_path>0) {
			t2_move-=home_speed*1.1
		}
		if (t2_move<t2_s) {
			t2_move=t2_s
		}
	}
	t2.style.opacity=t2_op;
	t2.style.transform=`translateY(${ t2_move }px)`;
}

function ani_forthBg(s) {
	if (s-ani2Range>0) {
		forthBg_op=check_op(Math.min((s-ani1Range_s2)/home_speed*0.025, 1));
		if (scroll_path<0) {
			forthBg_move+=home_speed*1.2
		} else if (scroll_path>0) {
			// 上滑
			if (forthBg_over>0) {
				forthBg_over-=home_speed*1.2
			} else {
				forthBg_move-=home_speed*1.2
			}
			if (forthBg_over<0) {
				forthBg_over=0
			}
		}
	} else if (s-ani1Range_s2>0) {
		forthBg_op=check_op(Math.min((s-ani1Range_s2)/home_speed*0.02, 1));
		if (scroll_path<0) {
			forthBg_move+=home_speed*0.1
		} else if (scroll_path>0) {
			forthBg_move-=home_speed*0.1
			if (forthBg_op==0) {
				forthBg_move=forthBg_s
			}
		}
	} else if (s-ani1Range_s>ani1Range_e-ani1Range_s) {
		if (scroll_path>0) {
			forthBg_op=check_op(Math.min((s-ani1Range_s2)/home_speed*0.02, 1));
			forthBg_move-=home_speed*0.1
			if (forthBg_op==0) {
				forthBg_move=forthBg_s
			}
		}
	}
	if (forthBg_move>forthBg_e) {
		forthBg_over+=home_speed*1.2
		forthBg_move=forthBg_e
	}
	if (forthBg_move<forthBg_s) {
		forthBg_move=forthBg_s
	}
	forthBg.style.opacity=forthBg_op;
	forthBg.style.transform=`translateY(${ forthBg_move }px)`;
}

function ani_forthTxt(s) {
	var textTime=0.8
	if (s-ani3Range>0) {
		if (scroll_path<0) {
			forthTxt_move+=home_speed*textTime
			forthTxt_op=check_op(Math.min((s-ani3Range)/home_speed*0.025, 1));
		} else if (scroll_path>0) {
			// 上滑
			if (forthTxt_over>0) {
				forthTxt_over-=home_speed*textTime
			} else {
				forthTxt_move-=home_speed*textTime
				forthTxt_op=check_op(Math.min((s-ani3Range)/home_speed*0.025, 1));
			}
			if (forthTxt_over<0) {
				forthTxt_over=0
			}
		}
	}
	// forthTxt_over
	if (forthTxt_move>forthTxt_e) {
		forthTxt_over+=home_speed*textTime
		forthTxt_move=forthTxt_e
	}
	if (forthTxt_move<forthTxt_s) {
		forthTxt_move=forthTxt_s
	}

	forthTxt.style.opacity=forthTxt_op;
	forthTxt.style.transform=`translateY(${ forthTxt_move }px)`;
}

function ani_forthCat(s) {
	if (s-ani6Range>0) {

	} else if (s-ani5Range>0) {
		if (scroll_path<0) {
			forthCat_over+=home_speed*0.2
			forthCat_move+=home_speed*0.11
		} else if (scroll_path>0) {
			// 上滑
			if (forthCat_over>0) {
				forthCat_over-=home_speed*0.2
			}
			if (forthCat_over<0) {
				forthCat_over=0
			}
			forthCat_move-=home_speed*0.11
		}
		if (forthCat_move>forthCat_s) {
			forthCat_move=forthCat_s
		}
	} else if (s-ani3Range>0) {
		if (scroll_path<0) {
			forthCat_move-=home_speed*0.2
		} else if (scroll_path>0) {
			// 上滑
			if (forthCat_over>0) {
				forthCat_over-=home_speed*0.2
			} else {
				forthCat_move+=home_speed*0.2
			}
			if (forthTxt_over<0) {
				forthTxt_over=0
			}
		}
		if (forthCat_move<forthCat_e) {
			forthCat_over+=home_speed*0.2
			forthCat_move=forthCat_e
		}
	}

	forthCat.style=`--cat_delay:${ forthCat_delay }s;--cat:${ forthCat_move }%`;
}

function ani_forthBox(s) {
	if (s-ani6Range>0) {

	} else if (s-ani5Range>0) {
		if (scroll_path<0) {
			forthBox_move-=home_speed*0.0011

		} else if (scroll_path>0) {
			forthBox_move+=home_speed*0.0011
		}
	}
	if (forthBox_move<forthBox_e) {
		forthBox_move=forthBox_e
	} else if (forthBox_move>forthBox_s) {
		forthBox_move=forthBox_s
	}
	forthBox.style.transform=`scale(${ forthBox_move })`;
}
function ani_fifth(s) {
	if (s-ani7Range>0) {

	} else if (s-ani6Range>0) {
		console.log('ani_fifth');
		home_fifth_op=check_op(Math.min((s-ani6Range)/home_speed*0.02, 1));
		console.log('home_fifth_op', home_fifth_op);
	}
	home_fifth.style.opacity=home_fifth_op;
}
function ani_fiftxt(s) {
	if (s-ani7Range>0) {
		if (scroll_path<0) {
			fifthG1_move+=home_speed*0.2
			fifthG2_move-=home_speed*0.2
		} else if (scroll_path>0) {
			fifthG1_move-=home_speed*0.2
			fifthG2_move+=home_speed*0.2
		}
	}

	if (fifthG1_move>0) {
		fifthG1_move=0
	}
	if (fifthG2_move<0) {
		fifthG2_move=0
	}
	fifth_pcG1.style.transform=`translateY(${ fifthG1_move }%)`;
	fifth_pcG2.style.transform=`translateY(${ fifthG2_move }%)`;

	if (device=='pc') {
		fifth_pcG1.style.transform=`translateY(${ fifthG1_move }%)`;
		fifth_pcG2.style.transform=`translateY(${ fifthG2_move }%)`;
	} else if (device=='ph') {
		fifth_phG1.style.transform=`translateY(${ fifthG1_move }%)`;
		fifth_phG2.style.transform=`translateY(${ fifthG2_move }%)`;
	}
}

function check_op(num) {
	if (num>1) {
		return 1
	} else if (num<0) {
		return 0
	} else {
		return num
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
	// if (!MouseWheelSwitch) return;
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




var home_scroll=document.querySelector("#home_scroll");
var home_move=0
var home_scroll_dely=0.6


function homeInit() {
	home_scroll.style=`transform: translateY(${ home_move }px);  transition: transform ${ home_scroll_dely }s ease;;`;
	t1.style=`transform:translateY(${ t1_s }px); transition: all ${ t1_delay }s ease;opacity: ${ t1_op };`;
	t2.style=`transform:translateY(${ t2_s }px); transition: all ${ t2_delay }s ease;opacity: ${ t2_op };`;
	forthBg.style=`transform:translateY(${ forthBg_s }px); transition: all ${ forthBg_delay }s ease;opacity: ${ forthBg_op };`;
	forthTxt.style=`transform:translateY(${ forthTxt_s }px); transition: all ${ forthTxt_delay }s ease;opacity: ${ forthTxt_op };`;
	forthCat.style=`--cat_delay:${ forthCat_delay }s;--cat:${ forthCat_move }%`;
	forthBox.style=`transform:scale(${ forthBox_s }); transition: all ${ forthBox_delay }s;`;
	home_fifth.style=`transform:translateY(${ home_fifth_s }%);opacity: ${ home_fifth_op };transition: all ${ home_fifth_delay }s`;
	fiftxt.style=`transform:scale(${ fiftxt_s });opacity: ${ fiftxt_op };transition: all ${ fiftxt_delay }s;`;

	fifth_pcG1.style=`transform:translateY(${ fifthG1_s }%); transition: all ${ fifthG_delay }s;;`
	fifth_pcG2.style=`transform:translateY(${ fifthG2_s }%); transition: all ${ fifthG_delay }s;;`

	fifth_phG1.style=`transform:translateY(${ fifthG1_s }%); transition: all ${ fifthG_delay }s;;`
	fifth_phG2.style=`transform:translateY(${ fifthG2_s }%); transition: all ${ fifthG_delay }s;;`
}
document.addEventListener("DOMContentLoaded", () => {
	homeInit();
});