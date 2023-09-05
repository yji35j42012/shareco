// var footerH = document.querySelector("#footer").offsetHeight;
var story_box1 = document.querySelector("#story_box1");
var story_box2 = document.querySelector("#story_box2");
var story_txt2 = document.querySelector("#story_txt2");
var story_pic2 = document.querySelector("#story_pic2");
var story_emptyBox = document.querySelector("#story_emptyBox");


function mobile() {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}

var device = mobile() ? "ph" : "pc";
var story = document.querySelector("#story");
var story_title1 = document.querySelector("#story_title1");
var story_txt1 = document.querySelector("#story_txt1");
var story_pic1 = document.querySelector("#story_pic1");

if (device == "pc") {
	story_emptyBox.style.height =
	story_box1.offsetHeight + story_box2.offsetHeight + 1100 + "px";
	console.log("inPC");
	// ani1  Start
	var startPicY_1 = -150; //story_pic1 開始位置
	var endPicY_1 = -45; //story_pic1 終點位置
	var startPicZ_1 = 0; //story_pic1 開始大小
	var endPicZ_1 = -45; //story_pic1 終點大小
	var startTxtY_1 = -45; //story_txt1 開始位置
	var startTxtZ_1 = 0; //story_txt1 開始位置
	var endTxtZ_1 = -55; //story_txt1 開始位置
	var startTxtOp = 0;
	var endTxtOp = 1;
	var ani1Time = 400; //滑動時間
	// ani1  End

	var ani1toani2Time = 50; //ani1 到 ani2 間格
	// ani2 Start
	var startTitleZ = 0;
	var startTitleY = 0;
	var defTitleZ = 1.8;
	var startPicY_2 = endPicY_1;
	var defPicY_2 = 1;
	var startPicZ_2 = endPicZ_1;
	var startTxtY_2 = startTxtY_1;
	var startTxtZ_2 = endTxtZ_1;
	var ani2Time = 200;
	// ani2 End

	var ani2toani3Time = 0; //ani2 到 ani3 間格

	// ani3 Start
	var box1Op = 1;
	var box2Op = 0;
	var ani3Time = 100;
	// ani3 End

	var ani3toani4Time = 0; //ani3 到 ani4 間格
	// ani4 Start
	var startTxtY_4 = -800;
	var endTxtY_4 = 30;
	var startTxtZ_4 = -400;
	var endTxtZ_4 = -30;
	var op4 = 0;
	var ani4Time = 600;
	// ani4 End

	var ani4toani5Time = 0; //ani4 到 ani5 間格
	// ani5 Start
	var startPicY_5 = -500;
	var startPicZ_5 = -400;
	var endPicY_5 = 100;
	var endPicZ_5 = -50;
	var op5 = 0;
	var ani5Time = 600;
	// ani5 End

	var ani5toani6Time = 0; //ani4 到 ani5 間格
	// ani6 Start
	var ani6Time = 300;
	// ani6 End
} else {
	story_emptyBox.style.height =
	story_box1.offsetHeight + story_box2.offsetHeight + 1500 + "px";
	console.log("inPH");
	// ani1  Start
	var startPicY_1 = -50; //story_pic1 開始位置
	var endPicY_1 = 0; //story_pic1 終點位置
	var startPicZ_1 = 0; //story_pic1 開始大小
	var endPicZ_1 = 0; //story_pic1 終點大小
	var startTxtY_1 = -45; //story_txt1 開始位置
	var startTxtZ_1 = 0; //story_txt1 開始位置
	var endTxtZ_1 = -55; //story_txt1 開始位置
	var startTxtOp = 0;
	var endTxtOp = 1;
	var ani1Time = 400; //滑動時間
	// ani1  End

	var ani1toani2Time = 50; //ani1 到 ani2 間格

	// ani2 Start
	var startTitleZ = 0;
	var startTitleY = 0;
	var defTitleZ = 1.7;
	var startPicY_2 = endPicY_1;
	var defPicY_2 = 30;
	var startPicZ_2 = endPicZ_1;
	var startTxtY_2 = startTxtY_1;
	var startTxtZ_2 = endTxtZ_1;
	var ani2Time = 200;
	// ani2 End

	var ani2toani3Time = 0; //ani2 到 ani3 間格
	// ani3 Start
	var box1Op = 1;
	var box2Op = 0;
	var ani3Time = 100;
	// ani3 End

	var ani3toani4Time = 0; //ani2 到 ani3 間格
	// ani4 Start
	var startTxtY_4 = -800;
	var endTxtY_4 = 30;
	var startTxtZ_4 = -400;
	var endTxtZ_4 = -30;
	var op4 = 0;
	var ani4Time = 600;
	// ani4 End

	var ani4toani5Time = 0; //ani4 到 ani5 間格
	// ani5 Start
	var startPicY_5 = -500;
	var startPicZ_5 = -400;
	var endPicY_5 = 100;
	var endPicZ_5 = -50;
	var op5 = 0;
	var ani5Time = 600;
	// ani5 End

	var ani5toani6Time = 0; //ani4 到 ani5 間格
	// ani6 Start
	var ani6Time = 300;
	// ani6 End
}

var ani1_unitY = (startPicY_1 * -1) / ani1Time; //story_pic1 每滑動1px 移動距離
var pic1_unitZ = (endPicZ_1 - startPicZ_1 * -1) / ani1Time; //story_pic1 每滑動1px 伸縮
var txt1_unitZ = (endTxtZ_1 - startTxtZ_1 * -1) / ani1Time; //story_txt1 每滑動1px 伸縮
var txt1_op = (endTxtOp - startTxtOp) / ani1Time;

var ani2_unit = 1 / ani2Time;
var ani3_unit = 1 / ani3Time;

var unitY_4 = (startTxtY_4 - endTxtY_4) / ani4Time;
var unitZ_4 = (startTxtZ_4 - endTxtZ_4) / ani4Time;

var unitY_5 = (startPicY_5 - endPicY_5) / ani5Time;
var unitZ_5 = (startPicZ_5 - endPicZ_5) / ani5Time;

var story_box2Y = 0;

// 文字出現，圖片往下移
function ani1(y) {
	var picMoveY = y * ani1_unitY + startPicY_1;
	var picMoveZ = y * pic1_unitZ + startPicZ_1;
	var txtMoveZ = y * txt1_unitZ + startTxtZ_1;
	var txtMoveOp = y * txt1_op;
	if (picMoveY > endPicY_1) {
		picMoveY = endPicY_1;
	}
	if (picMoveZ < endPicZ_1) {
		picMoveZ = endPicZ_1;
	}
	if (txtMoveZ < endTxtZ_1) {
		txtMoveZ = endTxtZ_1;
	}
	if (txtMoveOp >= 1) {
		txtMoveOp = 1;
	}
	story_pic1.style = `transform: translate3d(0, ${picMoveY}px, ${picMoveZ}px); transition-duration: 0s;`;
	story_txt1.style = `transform: translate3d(0, ${startTxtY_1}px, ${txtMoveZ}px); opacity: ${txtMoveOp};`;
}
var ani2Range = ani1toani2Time + ani1Time;
// box1 標題、文字、圖片淡出
function ani2(y) {
	var startOP = 1 - (y - ani2Range) * ani2_unit;
	var moveTitleY = startTitleY + (y - ani2Range) * (ani2_unit + defTitleZ);
	var moveTitleZ = startTitleZ + (y - ani2Range) * (ani2_unit + 1);
	var movePicY_2 = startPicY_2 + (y - ani2Range) * (ani2_unit + defPicY_2);
	var movePicZ_2 = startPicZ_2 + (y - ani2Range) * (ani2_unit + 1);

	var moveTxtY_2 = startTxtY_2 + (y - ani2Range) * (ani2_unit + 1.5);
	var moveTxtZ_2 = startTxtZ_2 + (y - ani2Range) * (ani2_unit + 1);
	if (moveTitleY < startTitleY) {
		moveTitleY = startTitleY;
	}
	if (moveTitleZ < startTitleZ) {
		moveTitleZ = startTitleZ;
	}
	if (movePicY_2 > startPicY_2) {
		movePicY_2 = startPicY_2;
	}
	story_title1.style = ` transform: translate3d(0, ${moveTitleY}px, ${moveTitleZ}px);opacity: ${startOP};transition-duration: 0s;`;
	story_pic1.style = `transform: translate3d(0, ${movePicY_2}px,${movePicZ_2}px); opacity: ${startOP};transition-duration: 0s;`;
	story_txt1.style = `transform: translate3d(0, ${moveTxtY_2}px,${moveTxtZ_2}px); opacity: ${startOP};transition-duration: 0s;`;
}

var ani3Range = ani2Time + ani2toani3Time + ani2Range;
// box1 背景淡出 box2背景淡入
function ani3(y) {
	box1Op = 1 - (y - ani3Range) * ani3_unit;
	box2Op = (y - ani3Range) * ani3_unit;
	if (box1Op <= 0) {
		box1Op = 0;
	}
	if (box2Op >= 1) {
		box2Op = 1;
	}
	story_box1.style = `--bgop1:${box1Op}`;
	story_box2.style = `--bgop2:${box2Op}`;
}

var ani4Range = ani3Time + ani3toani4Time + ani3Range;
// box2 文字淡入
function ani4(y) {
	var moveY_4 = startTxtY_4 - (y - ani4Range) * unitY_4;
	var moveZ_4 = startTxtZ_4 - (y - ani4Range) * unitZ_4;
	var op4 = (y - ani4Range) * 0.02;
	console.log("moveY_4", moveY_4);
	// var moveY_1 = startTxtY_4 - unitY_4 * (y - 400);
	// var moveZ_1 = startTxtZ_4 - unitZ_4 * (y - 400);
	if (moveY_4 >= endTxtY_4) {
		moveY_4 = endTxtY_4;
	}
	if (moveZ_4 >= endTxtZ_4) {
		moveZ_4 = endTxtZ_4;
	}
	story_txt2.style = ` transform: translate3d(0, ${moveY_4}px, ${moveZ_4}px); opacity: ${op4};`;
}
var ani5Range = ani4Time + ani4toani5Time + ani4Range;

// box2 圖片淡入
function ani5(y) {
	var moveY_5 = startPicY_5 - (y - ani5Range) * unitY_5;
	var moveZ_5 = startPicZ_5 - (y - ani5Range) * unitZ_5;
	var op5 = (y - ani5Range) * 0.02;
	if (moveY_5 >= endPicY_5) {
		moveY_5 = endPicY_5;
	}
	if (moveZ_5 >= endPicZ_5) {
		moveZ_5 = endPicZ_5;
	}
	story_pic2.style = ` transform: translate3d(0, ${moveY_5}px, ${moveZ_5}px); opacity: ${op5};`;

	if (story_box2Y >= 0) {
		ani6(y);
	}
}
var ani6Range = ani5Time + ani5toani6Time + ani5Range;

// footer
function ani6(y) {
	story_box2Y = y - ani6Range;
	story_box2.style = `transform: translateY( -${story_box2Y}px )`;
}

function setDefault() {
	story_txt1.style = `transform: translate3d(0, ${startTxtY_1}px, 0px); opacity: 0;`;
	setTimeout(() => {
		story_pic1.style = `transform: translate3d(0, ${startPicY_1}px, 0px);`;
	}, 500);

	story_txt2.style = `transform: translate3d(0, ${startTxtY_4}px, ${startTxtZ_4}px); opacity: ${op4};`;
	story_pic2.style = `transform: translate3d(0, ${startPicY_5}px, ${startPicZ_5}px); opacity: ${op5};`;
}
window.addEventListener("scroll", () => {
	console.log("scrollY", this.scrollY);
	if (this.scrollY < ani1Time) {
		ani1(this.scrollY);
	}
	if (ani1Time + ani1toani2Time < this.scrollY) {
		ani2(this.scrollY);
	}
	console.log(
		"ani1Time + ani2toani3Time + ani2Time",
		ani1Time + ani2toani3Time + ani2Time
	);
	if (ani1Time + ani2toani3Time + ani2Time < this.scrollY) {
		ani3(this.scrollY);
		console.log("ani3");
	}
	if (
		ani1Time + ani2toani3Time + ani2Time + ani3Time + ani3toani4Time <
		this.scrollY
	) {
		ani4(this.scrollY);
	}
	if (
		ani1Time +
			ani2toani3Time +
			ani2Time +
			ani3Time +
			ani3toani4Time +
			ani4Time +
			ani4toani5Time <
		this.scrollY
	) {
		ani5(this.scrollY);
	}
	if (
		ani1Time +
			ani2toani3Time +
			ani2Time +
			ani3Time +
			ani3toani4Time +
			ani4Time +
			ani4toani5Time +
			ani5Time +
			ani5toani6Time <
		this.scrollY
	) {
		ani6(this.scrollY);
	}
});

// start
document.addEventListener("DOMContentLoaded", () => {
	setDefault();
	story.classList.add("active");
});

// var box1Default = 400;
// var ani2Start = 450;
// var box1Default2 = 600;
// var ani3Start = 650;
// var ani4Start = 750;
// var ani4Default = 800;
// var ani5Start = 1200;
// var ani5Default = 600;
// var ani6Start = 1500;
// // Y從-150 ~ -45   105
// // X從 0 ~ -55

//
// var unitY_1 = ((startPicY_1 - endPicY_1) * -1) / box1Default;
// var unitZ_1 = 55 / box1Default;
// var txtop_1 = 1 / box1Default;
// var title_op = 1;
// var moveY_title = 0;
// var moveZ_title = 0;var box1op = 1;
// var box2op = 0;

// // transform: translate3d(0, -800px, -400px);
// var startTxtY_4 = -800;
// var endTxtY_4 = 30;
// var startTxtZ_4 = -400;
// var endTxtZ_4 = -30;
// var op4 = 0;

// var unitY_4 = (startTxtY_4 - endTxtY_4) / ani4Default;
// var unitZ_4 = (startTxtZ_4 - endTxtZ_4) / ani4Default;

// // transform: translate3d(0, 0px, -30px);
// var startPicY_5 = -500;
// var startPicZ_5 = -400;

// var endPicY_5 = 100;
// var endPicZ_5 = -50;
// var unitY_5 = (startPicY_5 - endPicY_5) / ani5Default;
// var unitZ_5 = (startPicZ_5 - endPicZ_5) / ani5Default;
// var op5 = 0;
// var story_box2Y = 0;

// function setDefault() {
//

// 	story_txt2.style = `transform: translate3d(0, ${startTxtY_4}px, ${startTxtZ_4}px); opacity: 0;`;
// 	story_pic2.style = `transform: translate3d(0, ${startPicY_5}px, ${startPicZ_5}px); opacity: 0;`;
// }

// // 0~200
// function ani1(num) {
// 	var showop = txtop_1 * num;
// 	var moveY_1 = unitY_1 * num - (startPicY_1 * -1);
// 	var moveZ_1 = unitZ_1 * num * -1;
// 	if (moveY_1 >= -45) {
// 		moveY_1 = -45;
// 	}
// 	if (showop >= 1) {
// 		showop = 1;
// 	}
// 	if (moveZ_1 <= -55) {
// 		moveZ_1 = -55;
// 	}
// 	if (title_op < 1 && title_op > 0) {
// 		title_op = 1 - (num - ani2Start) * (1 / box1Default2);
// 		moveY_title = (num - ani2Start) * 1.7;
// 		moveZ_title = num - ani2Start;
// 		if (moveY_title <= 0) {
// 			moveY_title = 0;
// 		}
// 		if (moveZ_title <= 0) {
// 			moveZ_title = 0;
// 		}
// 		story_title1.style = ` transform: translate3d(0, ${moveY_title}px, ${moveZ_title}px);opacity: ${title_op};`;
// 	}
// 	story_txt1.style = `transform: translate3d(0, -45px, ${moveZ_1}px);opacity: ${showop};${title_op};transition-duration: 0s;`;
// 	story_pic1.style = `transform: translate3d(0, ${moveY_1}px, ${moveZ_1}px);${title_op};transition-duration: 0s;`;
// 	if (op4 >= 0) {
// 		ani4(num);
// 	}
// }
// // 250~450
// function ani2(num) {
// 	moveY_title = (num - ani2Start) * 1.2;
// 	moveZ_title = (num - ani2Start) * (ani2Start / box1Default2) - 0.5;

// 	var moveY_txt = (num - ani2Start) * 1.2 - 45;
// 	var moveZ_txt = (num - ani2Start) * (ani2Start / box1Default2) - 55 - 0.5;

// 	title_op = 1 - (num - ani2Start) * (1 / (box1Default2 - 400));
// 	if (title_op <= 0) {
// 		title_op = 0;
// 	}
// 	story_title1.style = ` transform: translate3d(0, ${moveY_title}px, ${moveZ_title}px);opacity: ${title_op};transition-duration: 0s;`;
// 	story_txt1.style = ` transform: translate3d(0, ${moveY_txt}px, ${moveZ_txt}px); opacity: ${title_op};transition-duration: 0s;`;
// 	story_pic1.style = ` transform: translate3d(0, ${moveY_txt}px, ${moveZ_txt}px); opacity: ${title_op};transition-duration: 0s;`;

// 	if (box1op <= 1) {
// 		box1op = 1 - (num - ani3Start) * 0.01;
// 		story_box1.style = `--bgop1:${box1op}`;
// 	}
// 	if (box2op > 0) {
// 		box2op = (num - ani3Start) * 0.01;
// 		story_box2.style = `--bgop2:${box2op}`;
// 	}
// 	if (op4 >= 0) {
// 		ani4(num);
// 	}
// }
// //350~450 第二張背景圖淡入
// function ani3(num) {
// 	box1op = 1 - (num - ani3Start) * 0.01;
// 	box2op = (num - ani3Start) * 0.01;
// 	if (box1op <= 0) {
// 		box1op = 0;
// 	}
// 	if (box2op >= 1) {
// 		box2op = 1;
// 	}
// 	story_box1.style = `--bgop1:${box1op}`;
// 	story_box2.style = `--bgop2:${box2op}`;
// 	if (op4 >= 0) {
// 		ani4(num);
// 	}
// }
// function ani4(num) {
// 	var moveY_1 = startTxtY_4 - unitY_4 * (num - 400);
// 	var moveZ_1 = startTxtZ_4 - unitZ_4 * (num - 400);
// 	if (moveY_1 >= endTxtY_4) {
// 		moveY_1 = endTxtY_4;
// 	}
// 	if (moveZ_1 >= endTxtZ_4) {
// 		moveZ_1 = endTxtZ_4;
// 	}
// 	op4 = (num - 400) * 0.02;
// 	story_txt2.style = ` transform: translate3d(0, ${moveY_1}px, ${moveZ_1}px); opacity: ${op4};`;

// 	if (op5 >= 0) {
// 		ani5(num);
// 	}
// }
// function ani5(num) {
// 	var moveY_1 = startPicY_5 - unitY_5 * (num - 1200);
// 	var moveZ_1 = startPicZ_5 - unitZ_5 * (num - 1200);
// 	op5 = (num - 1200) * 0.02;
// 	if (moveY_1 >= endPicY_5) {
// 		moveY_1 = endPicY_5;
// 	}
// 	if (moveZ_1 >= endPicZ_5) {
// 		moveZ_1 = endPicZ_5;
// 	}
// 	story_pic2.style = ` transform: translate3d(0, ${moveY_1}px, ${moveZ_1}px); opacity: ${op5};`;

// 	if (story_box2Y >= 0) {
// 		ani6(num);
// 	}
// }
// function ani6(num) {
// 	story_box2Y = num - 1800;
// 	story_box2.style = `transform: translateY( -${story_box2Y}px )`;
// }
// // 550
// window.addEventListener("scroll", () => {
// 	// console.log("this.scrollY", this.scrollY);

// 	if (this.scrollY < box1Default) {
// 		console.log("ani1");
// 		ani1(this.scrollY);
// 	}
// 	if (this.scrollY > ani2Start) {
// 		console.log("ani2");
// 		ani2(this.scrollY);
// 	}
// 	if (this.scrollY > ani3Start) {
// 		console.log("ani3");
// 		ani3(this.scrollY);
// 	}
// 	if (this.scrollY > ani4Start) {
// 		console.log("ani4");
// 		ani4(this.scrollY);
// 	}
// 	if (this.scrollY > ani5Start) {
// 		console.log("ani5");
// 		ani5(this.scrollY);
// 	}
// 	if (this.scrollY > ani6Start) {
// 		console.log("ani6");
// 		ani6(this.scrollY);
// 	}
// });
