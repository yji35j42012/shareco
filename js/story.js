var footerH = document.querySelector("#footer").offsetHeight;
var story_box1 = document.querySelector("#story_box1");
var story_box2 = document.querySelector("#story_box2");
var story_emptyBox = document.querySelector("#story_emptyBox");
var story = document.querySelector("#story");

var story_title1 = document.querySelector("#story_title1");
var story_txt1 = document.querySelector("#story_txt1");
var story_pic1 = document.querySelector("#story_pic1");
console.log("story_box1", story_box1.offsetHeight);
story_emptyBox.style.height =
	story_box1.offsetHeight + footerH + story_box2.offsetHeight + "px";

// console.log("header", header.offsetHeight);
// console.log("window", window.innerHeight);
// var story_h = window.innerHeight - header.offsetHeight;

// story_box.style.height = story_h + "px";

// transform: translate3d(0, -150px, 0px);
// transform: translate3d(0, -45px, -55px);

var box1Default = 200; //scroll滑200點結束
var ani2Start = 250;
var box1Default2 = 150; //scroll滑200點結束

// Y從-150 ~ -45     105
// X從 0 ~ -55

var startY_1 = -45;
var startZ_1 = 0;
var unitY_1 = 105 / box1Default;
var unitZ_1 = 55 / box1Default;
var txtop_1 = 1 / box1Default;

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
	story_txt1.style = `transform: translate3d(0, -45px, ${moveZ_1}px);opacity: ${showop};`;
	story_pic1.style = `transform: translate3d(0, ${moveY_1}px, ${moveZ_1}px)`;
}
// 250
function ani2(num) {
	var moveY_title = (num - ani2Start) * 1.7;
	var moveZ_title = num - ani2Start;

	var moveY_txt = (num - ani2Start) * 1.7 - 45;
	var moveZ_txt = num - ani2Start - 55;

	var op = 1 - (num - ani2Start) * (1 / box1Default2);
	if (op <= 0) {
		op = 0;
	}
	// console.log("moveY", moveY);
	story_title1.style = ` transform: translate3d(0, ${moveY_title}px, ${moveZ_title}px);opacity: ${op};`;
	story_txt1.style = ` transform: translate3d(0, ${moveY_txt}px, ${moveZ_txt}px); opacity: ${op};`;
	story_pic1.style = ` transform: translate3d(0, ${moveY_txt}px, ${moveZ_txt}px); opacity: ${op};`;
}

window.addEventListener("scroll", () => {
	console.log("this.scrollY", this.scrollY);
	if (this.scrollY < 200) {
		ani1(this.scrollY);
	}
	if (this.scrollY > ani2Start) {
		ani2(this.scrollY);
	}
});

// start
document.addEventListener("DOMContentLoaded", () => {
	story.classList.add("active");
	setDefault();
});
