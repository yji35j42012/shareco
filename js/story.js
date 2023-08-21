var footerH = document.querySelector("#footer").offsetHeight;
var story_box1 = document.querySelector("#story_box1");
var story_box2 = document.querySelector("#story_box2");
var story_emptyBox = document.querySelector("#story_emptyBox");
var story = document.querySelector("#story");

var story_title1 = document.querySelector("#story_title1");
var story_txt1 = document.querySelector("#story_txt1");
var story_pic1 = document.querySelector("#story_pic1");

var story_txt2 = document.querySelector("#story_txt2");
var story_pic2 = document.querySelector("#story_pic2");
story_emptyBox.style.height =
	story_box1.offsetHeight + story_box2.offsetHeight + "px";

var box1Default = 200; //scroll滑200點結束
var ani2Start = 250;
var box1Default2 = 150; //scroll滑200點結束
var ani3Start = 350;
var ani4Start = 400;
var ani4Default = 200; //scroll滑200點結束
var ani5Start = 450;
var ani5Default = 250; //scroll滑200點結束

// Y從-150 ~ -45   105
// X從 0 ~ -55

var startY_1 = -45;
var startZ_1 = 0;
var unitY_1 = 105 / box1Default;
var unitZ_1 = 55 / box1Default;
var txtop_1 = 1 / box1Default;
var title_op = 1;
var moveY_title = 0;
var moveZ_title = 0;

var box1op = 1;
var box2op = 0;

// transform: translate3d(0, -800px, -400px);
var startTxtY_4 = -800;
var startTxtZ_4 = -400;
var endTxtY_4 = 0;
var endTxtZ_4 = -30;
var op4 = 0;

var unitY_4 = (startTxtY_4 - endTxtY_4) / ani4Default;
var unitZ_4 = (startTxtZ_4 - endTxtZ_4) / ani4Default;

// transform: translate3d(0, 0px, -30px);
var startPicY_5 = -600;
var startPicZ_5 = -400;

var endPicY_5 = 0;
var endPicZ_5 = -50;
var unitY_5 = (startPicY_5 - endPicY_5) / ani5Default;
var unitZ_5 = (startPicZ_5 - endPicZ_5) / ani5Default;
var op5 = 0;

function setDefault() {
	story_txt1.style = ` transform: translate3d(0, 0px, 0px); opacity: 0;`;
	story_pic1.style = ` transform: translate3d(0, -150px, 0px)`;
	story_txt2.style = ` transform: translate3d(0, ${startTxtY_4}px, ${startTxtZ_4}px); opacity: 0;`;
	story_pic2.style = ` transform: translate3d(0, ${startPicY_5}px, ${startPicZ_5}px); opacity: 0;`;
}

// 0~200
function ani1(num) {
	var showop = txtop_1 * num;
	var moveY_1 = unitY_1 * num - 150;
	var moveZ_1 = unitZ_1 * num * -1;
	if (moveY_1 >= -45) {
		moveY_1 = -45;
	}
	if (showop >= 1) {
		showop = 1;
	}
	if (moveZ_1 <= -55) {
		moveZ_1 = -55;
	}
	if (title_op < 1 && title_op > 0) {
		title_op = 1 - (num - ani2Start) * (1 / box1Default2);
		moveY_title = (num - ani2Start) * 1.7;
		moveZ_title = num - ani2Start;
		if (moveY_title <= 0) {
			moveY_title = 0;
		}
		if (moveZ_title <= 0) {
			moveZ_title = 0;
		}
		story_title1.style = ` transform: translate3d(0, ${moveY_title}px, ${moveZ_title}px);opacity: ${title_op};`;
	}
	story_txt1.style = `transform: translate3d(0, -45px, ${moveZ_1}px);opacity: ${showop};${title_op};`;
	story_pic1.style = `transform: translate3d(0, ${moveY_1}px, ${moveZ_1}px);${title_op};`;
}
// 250~450
function ani2(num) {
	moveY_title = (num - ani2Start) * 1.7;
	moveZ_title = num - ani2Start;

	var moveY_txt = (num - ani2Start) * 1.7 - 45;
	var moveZ_txt = num - ani2Start - 55;

	title_op = 1 - (num - ani2Start) * (1 / box1Default2);
	if (title_op <= 0) {
		title_op = 0;
	}
	// console.log("moveY", moveY);
	story_title1.style = ` transform: translate3d(0, ${moveY_title}px, ${moveZ_title}px);opacity: ${title_op};`;
	story_txt1.style = ` transform: translate3d(0, ${moveY_txt}px, ${moveZ_txt}px); opacity: ${title_op};`;
	story_pic1.style = ` transform: translate3d(0, ${moveY_txt}px, ${moveZ_txt}px); opacity: ${title_op};`;

	if (box1op <= 1) {
		box1op = 1 - (num - ani3Start) * 0.01;
		story_box1.style = `--bgop1:${box1op}`;
	}
	if (box2op > 0) {
		box2op = (num - ani3Start) * 0.01;
		story_box2.style = `--bgop2:${box2op}`;
	}
}

//350~450 第二張背景圖淡入
function ani3(num) {
	box1op = 1 - (num - ani3Start) * 0.01;
	box2op = (num - ani3Start) * 0.01;
	if (box1op <= 0) {
		box1op = 0;
	}
	if (box2op >= 1) {
		box2op = 1;
	}
	story_box1.style = `--bgop1:${box1op}`;
	story_box2.style = `--bgop2:${box2op}`;
	if (op4 >= 0) {
		ani4(num);
	}
}
//400 第二張背景圖淡入
function ani4(num) {
	var moveY_1 = startTxtY_4 - unitY_4 * (num - 400);
	var moveZ_1 = startTxtZ_4 - unitZ_4 * (num - 400);
	if (moveY_1 >= endTxtY_4) {
		moveY_1 = endTxtY_4;
	}
	if (moveZ_1 >= endTxtZ_4) {
		moveZ_1 = endTxtZ_4;
	}
	op4 = (num - 400) * 0.02;
	story_txt2.style = ` transform: translate3d(0, ${moveY_1}px, ${moveZ_1}px); opacity: ${op4};`;

	if (op5 >= 0) {
		ani5(num);
	}
}
function ani5(num) {
	var moveY_1 = startPicY_5 - unitY_5 * (num - 450);
	var moveZ_1 = startPicZ_5 - unitZ_5 * (num - 450);
	op5 = (num - 450) * 0.02;
	if (moveY_1 >= endPicY_5) {
		moveY_1 = endPicY_5;
	}
	if (moveZ_1 >= endPicZ_5) {
		moveZ_1 = endPicZ_5;
	}
	story_pic2.style = ` transform: translate3d(0, ${moveY_1}px, ${moveZ_1}px); opacity: ${op5};`;
}
// 550
window.addEventListener("scroll", () => {
	console.log("this.scrollY", this.scrollY);
	if (this.scrollY < 200) {
		ani1(this.scrollY);
	}
	if (this.scrollY > ani2Start) {
		ani2(this.scrollY);
	}
	if (this.scrollY > ani3Start) {
		ani3(this.scrollY);
	}
	if (this.scrollY > ani4Start) {
		ani4(this.scrollY);
	}
	if (this.scrollY > ani5Start) {
		ani5(this.scrollY);
	}
});

// start
document.addEventListener("DOMContentLoaded", () => {
	story.classList.add("active");
	setDefault();
});
