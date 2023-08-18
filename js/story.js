var footerH = document.querySelector("#footer").offsetHeight;
var story_box1 = document.querySelector("#story_box1");
var story_box2 = document.querySelector("#story_box2");
var story_emptyBox = document.querySelector("#story_emptyBox");
var story = document.querySelector("#story");

var story_title1 = document.querySelector("#story_title1");
var story_txt1 = document.querySelector("#story_txt1");
var story_pic1 = document.querySelector("#story_pic1");
story_emptyBox.style.height =
	story_box1.offsetHeight + footerH + story_box2.offsetHeight + "px";

var box1Default = 200; //scroll滑200點結束
var ani2Start = 250;
var box1Default2 = 150; //scroll滑200點結束
var ani3Start = 350;

// Y從-150 ~ -45     105
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
function setDefault() {
	story_txt1.style = ` transform: translate3d(0, 0, 0px); opacity: 0;`;
	story_pic1.style = ` transform: translate3d(0, -150px, 0px)`;
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

//350~450
function ani3(num) {
	box1op = 1 - (num - ani3Start) * 0.01;
	box2op = (num - ani3Start) * 0.01;
	if (box1op <= 0) {
		box1op = 0;
	}
	if (op2 >= 1) {
		op2 = 1;
	}
	story_box1.style = `--bgop1:${box1op}`;
	story_box2.style = `--bgop2:${box2op}`;
}

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
});

// start
document.addEventListener("DOMContentLoaded", () => {
	story.classList.add("active");
	setDefault();
});
