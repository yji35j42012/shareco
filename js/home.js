// var mouseR = nowW * (3 / 4);
// var mouseL = nowW * (1 / 4);

// var mouseT = nowH * (1 / 4);
// var mouseB = nowH * (3 / 4);

// var home = document.querySelector("#home");

// console.log("mouseR", mouseR);
// console.log("mouseL", mouseL);
var nowW = window.innerWidth;
var nowH = window.innerHeight;

var boxCenter = nowH / 2; //一半高度
var mouseB = nowH;
// var bottomRange = mouseB - heightC;
var bgPos = 0;
// console.log("bottomRange", bottomRange);

var home_lion = document.querySelector("#home_lion");
var lionX = 0,
	lionY = 3,
	lionZ = 0,
	lionMaxY = 40;

function lionMove(e) {
	// 往下從０－４０
	// var x = e.offsetX === undefined ? e.layerX : e.offsetX;
	var y = e.offsetY === undefined ? e.layerY : e.offsetY;
	// x -= boxCenter.x;
	y -= boxCenter;
	var moveY = 0;
	var moveZ = 0;
	console.log("y", y);
	console.log("boxCenter", boxCenter);
	// if (y > 0) {
	moveY = bgPos + y / 50;
	// }
	// if (y < 0) {
	moveZ = (bgPos + y / 100) * -1;
	// }
	if (moveY >= 40) {
		moveY = 40;
	} else if (moveY <= 0) {
		moveY = 0;
	}
	if (moveZ < 0) {
		moveZ = 0;
	}
	console.log("moveZ", moveZ);
	home_lion.style = `transform: translate3d(0px, ${moveY}%, ${moveZ}px)`;
	// var moveY = (40 / bottomRange) * (Y - heightC);
	// if (Y > heightC && moveY <= lionMaxY) {
	// 	// console.log("moveY", moveY);
	// 	// home_lion.style = `transform: translate3d(${lionX}px, ${moveY}px, ${lionZ}px)`;
	// }
}

function mousemove(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	// lionMove(mouseX, mouseY);
	lionMove(event);
	// console.log("clientX: ", event.clientX);
	// console.log("clientY: ", event.clientY);
	// if (mouseY > mouseB) {
	// 	console.log("~~~@!@!@E!@");
	// }
	// 	if (mouseL > mouseX && home.getAttribute("class") !== "mouseL") {
	// 		home.setAttribute("class", "home mouseL");
	// 	}
	// 	if (mouseR < mouseX && home.getAttribute("class") !== "mouseR") {
	// 		home.setAttribute("class", "home mouseR");
	// 	}
	// 	if (mouseL < mouseX && mouseR > mouseX && mouseY < mouseT) {
	// 		home.setAttribute("class", "home mouseT");
	// 	}
	// 	if (mouseL < mouseX && mouseR > mouseX && mouseY > mouseB) {
	// 		home.setAttribute("class", "home mouseB");
	// 	}
	// 	if (
	// 		mouseL < mouseX &&
	// 		mouseR > mouseX &&
	// 		mouseY < mouseB &&
	// 		mouseY > mouseT
	// 	) {
	// 		home.setAttribute("class", "home mouseC");
	// 	}
	//
}

window.addEventListener("mousemove", mousemove);
// transform: translate(0, 40px);
function setDefault() {
	home_lion.style = `transform: translate3d(${lionX}px, ${lionY}%, ${lionZ}px)`;
}
// start
document.addEventListener("DOMContentLoaded", () => {
	setDefault();
});
