// var nowW = window.innerWidth;
// var nowH = window.innerHeight;
// var boxCenterW = nowW / 2;
// var boxCenterH = nowH / 2;
// var lion_scene = document.querySelector("#lion_scene");

// var lion = {
// 	x: 0,
// 	y: 0,
// 	z: 0,
// 	minX: -30,
// 	maxX: 20,
// 	rangeL: 0,
// 	rangeR: 0,
// 	maxY: 40,
// 	range: 0,
// 	time: "",
// 	moveX: 0,
// 	moveY: 0,
// 	moveZ: 0,
// 	maxZ: 20,
// 	rangeZ: 0
// };
// function setFloat(num, f) {
// 	return parseFloat(num.toFixed(f));
// }
// function lionTime() {
// 	clearInterval(lion.time);
// 	lion.time = setInterval(() => {
// 		// console.log('~~~');
// 		var lx = lion.x;
// 		var lmx = lion.moveX;
// 		var ly = lion.y;
// 		var lmy = lion.moveY;
// 		var lz = lion.z;
// 		var lmz = lion.moveZ;
// 		console.log("lz", lz);
// 		console.log("lmz", lmz);
// 		if (parseInt(ly) == parseInt(lmy) && parseInt(lx) == parseInt(lmx)) {
// 			clearInterval(lion.time);
// 		} else if (lmy >= ly && lmy !== 0) {
// 			lion.moveY = setFloat(lion.moveY - lion.range, 3);
// 		} else if (lion.moveY <= lion.y && lion.moveY < lion.maxY) {
// 			lion.moveY = setFloat(lion.moveY + lion.range, 3);
// 		} else {
// 			clearInterval(lion.time);
// 		}
// 		if (lmx < lx) {
// 			lion.moveX = setFloat(lmx + lion.rangeR, 3);
// 		} else if (lx < lmx) {
// 			lion.moveX = setFloat(lmx + lion.rangeL, 3);
// 		}

// 		if (lmz <= lz) {
// 			lion.moveZ = setFloat(lmz + lion.rangeZ, 3);
// 		} else {
// 			lion.moveZ = setFloat(lmz - lion.rangeZ, 3);
// 		}

// 		lion_scene.style = `transform: translate3d(${lion.moveX}px, ${lion.moveY}px, ${lion.moveZ}px)`;
// 	}, 1);
// }
// function lionMove(x, y) {
// 	// var moveX = (x - boxCenterW) * lion.rangeL;
// 	var moveX = x - boxCenterW;
// 	moveX > 0
// 		? (moveX = moveX * lion.rangeR)
// 		: (moveX = moveX * lion.rangeL * -1);
// 	lion.x = setFloat(moveX, 3);

// 	var moveY = y - boxCenterH;
// 	var moveZ = y - boxCenterH;
// 	if (moveY < 0 && moveZ <= lion.maxZ) {
// 		moveY = 0;
// 		lion.z = setFloat(moveZ * lion.rangeZ * -1, 3);
// 	} else {
// 		moveY = moveY * lion.range;
// 		lion.y = setFloat(moveY, 3);
// 	}


// 	lionTime();
// }

// function mousemove(event) {
// 	var mouseX = event.clientX;
// 	var mouseY = event.clientY;
// 	lionMove(mouseX, mouseY);
// }

// window.addEventListener("mousemove", mousemove);
// function setDefault() {
// 	lion.rangeL = setFloat(lion.minX / boxCenterW, 3);
// 	lion.rangeR = setFloat(lion.maxX / boxCenterW, 3);
// 	lion.range = setFloat(lion.maxY / boxCenterH, 3);
// 	lion.rangeZ = setFloat(lion.maxZ / boxCenterH, 3);

// 	lion_scene.style = `transform: translate3d(${lion.x}px, ${lion.y}%, ${lion.z}px)`;
// }
// // start
// document.addEventListener("DOMContentLoaded", () => {
// 	setDefault();
// });

// // // var mouseR = nowW * (3 / 4);
// // // var mouseL = nowW * (1 / 4);

// // // var mouseT = nowH * (1 / 4);
// // // var mouseB = nowH * (3 / 4);

// // // var home = document.querySelector("#home");

// // // console.log("mouseR", mouseR);
// // // console.log("mouseL", mouseL);
// // var nowW = window.innerWidth;
// //

// // var boxCenterH = nowH / 2; //一半高度
// // var mouseB = nowH;
// // // var bottomRange = mouseB - heightC;
// // var bgPos = 0;
// // // console.log("bottomRange", bottomRange);

// // var lionX = 0,
// // 	lionY = 3,
// // 	lionZ = 0,
// // 	lionMaxY = 40;

// // var lion_t;
// // var test = document.querySelector("#test");

// // var lionY_move = 10;
// // var switchL = false;

// // console.log();

// // function lionTime() {
// // 	lion_t = setInterval(() => {
// // 		if (switchL) {
// // 			console.log("a");
// // 			clearInterval(lion_t);
// // 		} else {
// // 			console.log("lionY_move",lionY_move);
// // 		}
// // 	}, 1000);
// // }

// // test.onclick = function() {
// // 	switchL = !switchL;
// // 	console.log("switchL", switchL);
// // };
// // // lionTime();
// // function lionMove(e) {
// // 	// 往下從０－４０
// // 	// var x = e.offsetX === undefined ? e.layerX : e.offsetX;
// // 	var y = e.offsetY === undefined ? e.layerY : e.offsetY;
// // 	// x -= boxCenterH.x;
// // 	y -= boxCenterH;
// // 	var moveY = 0;
// // 	var moveZ = 0;
// // 	// console.log("y", y);
// // 	// console.log("boxCenterH", boxCenterH);
// // 	lionY_move = bgPos + y / 50;
// // 	// moveZ = (bgPos + y / 100) * -1;
// // 	// if (moveY >= 40) {
// // 	// 	moveY = 40;
// // 	// } else if (moveY <= 0) {
// // 	// 	moveY = 0;
// // 	// }
// // 	// if (moveZ < 0) {
// // 	// 	moveZ = 0;
// // 	// }
// // 	// console.log("moveZ", moveZ);
// // 	// lion_scene.style = `transform: translate3d(0px, ${moveY}%, ${moveZ}px)`;
// // 	// var moveY = (40 / bottomRange) * (Y - heightC);
// // 	// if (Y > heightC && moveY <= lionMaxY) {
// // 	// 	// console.log("moveY", moveY);
// // 	// 	// lion_scene.style = `transform: translate3d(${lionX}px, ${moveY}px, ${lionZ}px)`;
// // 	// }
// // }

// // function mousemove(event) {
// // 	var mouseX = event.clientX;
// // 	var mouseY = event.clientY;
// // 	// console.log(mouseX, mouseY);

// // 	// lionMove(mouseX, mouseY);
// // 	lionMove(event);

// // 	// 	if (mouseL > mouseX && home.getAttribute("class") !== "mouseL") {
// // 	// 		home.setAttribute("class", "home mouseL");
// // 	// 	}
// // 	// 	if (mouseR < mouseX && home.getAttribute("class") !== "mouseR") {
// // 	// 		home.setAttribute("class", "home mouseR");
// // 	// 	}
// // 	// 	if (mouseL < mouseX && mouseR > mouseX && mouseY < mouseT) {
// // 	// 		home.setAttribute("class", "home mouseT");
// // 	// 	}
// // 	// 	if (mouseL < mouseX && mouseR > mouseX && mouseY > mouseB) {
// // 	// 		home.setAttribute("class", "home mouseB");
// // 	// 	}
// // 	// 	if (
// // 	// 		mouseL < mouseX &&
// // 	// 		mouseR > mouseX &&
// // 	// 		mouseY < mouseB &&
// // 	// 		mouseY > mouseT
// // 	// 	) {
// // 	// 		home.setAttribute("class", "home mouseC");
// // 	// 	}
// // 	//
// // }
