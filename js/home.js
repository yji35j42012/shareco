var home_btn = document.querySelector("#home_btn");
var home = document.querySelector("#home");

var home_video = document.querySelector("#home_video");

home_btn.onclick = function() {
	home.classList.add("zoomOut");
	home_video.classList.add("show");
	// home.style.display = "none";
};

function MouseWheel(e) {
	e = e || window.event;
	console.log(e.wheelDelta);
}

// hook event listener on window object
if ("onmousewheel" in window) {
	window.onmousewheel = MouseWheel;
} else if ("onmousewheel" in document) {
	document.onmousewheel = MouseWheel;
} else if ("addEventListener" in window) {
	window.addEventListener("mousewheel", MouseWheel, false);
	window.addEventListener("DOMMouseScroll", MouseWheel, false);
}

var nowW = window.innerWidth;
var nowH = window.innerHeight;
var boxCenterW = nowW / 2;
var boxCenterH = nowH / 2;

var straw_scene = document.getElementById("straw_scene");
var straw_parallax = new Parallax(straw_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
straw_parallax.friction(0.05, 0.05);

var strawMax = 160;
var strawMaxR = 15;

var strawNow = 0;
var strawNowR = 0;
var strawMove = 0;
var strawMoveR = 0;

var strawTime;
// var lionRange = 0.2;
var strawRange = strawMax / boxCenterH;
var strawRangeR = strawMaxR / boxCenterH;
// 100 / 70
function strawZ(y) {
	strawMove = y * strawRange;
	strawMoveR = y * strawRangeR;
	if (strawMove * -1 > strawMax) {
		strawMove = strawMax * -1;
	} else if (strawMove * -1 < 0) {
		strawMove = 0;
	}
	if (strawMoveR * -1 > strawMaxR) {
		strawMoveR = strawMaxR * -1;
	} else if (strawMoveR * -1 < 0) {
		strawMoveR = 0;
	}
	clearInterval(strawTime);

	strawTime = setInterval(() => {
		if (
			parseInt(strawMove) == parseInt(strawNow) &&
			parseInt(strawMoveR) == parseInt(strawNowR)
		) {
			clearInterval(strawTime);
		} else if (strawNow < strawMove) {
			strawNow = strawNow + (strawRange + 0.01);
		} else if (strawNow > strawMove) {
			strawNow = strawNow - (strawRange + 0.01);
		}

		if (strawNowR < strawMoveR) {
			strawNowR = strawNowR + (strawRangeR + 0.01);
		} else if (strawNowR > strawMoveR) {
			strawNowR = strawNowR - (strawRangeR + 0.01);
		}
		straw_scene.style = `transform: translate3d(0px, ${strawNow *
			-1}px, 0px) rotate(${strawNowR}deg) scale(1);`;
	}, 0.5);
}

var grass_scene = document.getElementById("grass_scene");
var grass_parallax = new Parallax(grass_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
grass_parallax.friction(0.1, 0.1);

var plant_scene = document.getElementById("plant_scene");
var plant_parallax = new Parallax(plant_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
plant_parallax.friction(0.1, 0.1);

var plantMax = 0.1;
var plantNow = 0;
var plantMove = 0;
var plantRange = plantMax / boxCenterW;
var plantTime;

function setFloat(num, f) {
	return num.toFixed(f);
}

function plantZ(x) {
	plantMove = x * plantRange;
	if (plantMove * -1 > plantMax) {
		plantMove = plantMax;
	} else if (plantMove * -1 < 0) {
		plantMove = 0;
	}
	clearInterval(plantTime);
	plantTime = setInterval(() => {
		if (setFloat(plantMove, 3) == setFloat(plantNow, 3)) {
			clearInterval(plantTime);
		} else if (plantNow < plantMove) {
			plantNow = plantNow + plantRange + 0.00018;
		} else if (plantNow > plantMove) {
			plantNow = plantNow - plantRange - 0.00018;
		}
		plant_scene.style = `transform: translate3d(0px, 0px, 0px) scale(${1 +
			plantNow * -1});`;
	}, 0.5);
}

var flyl_scene = document.getElementById("flyl_scene");
var flyl_parallax = new Parallax(flyl_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
flyl_parallax.friction(0.2, 0.2);

var flylMax = 30;
var flylNow = 0;
var flylMove = 0;

var flylMaxX = 100;
var flylNowX = 0;
var flylMoveX = 0;

var flylRange = flylMax / boxCenterW;
var flylRangeX = flylMax / boxCenterW;

var flylTime;
function flyl(x) {
	flylMove = x * flylRange;
	flylMoveX = x * flylRangeX;
	if (flylMove * -1 > flylMax) {
		flylMove = flylMax;
	} else if (flylMove * -1 < 0) {
		flylMove = 0;
	}
	if (flylMoveX * -1 > flylMaxX) {
		flylMoveX = flylMaxX;
	} else if (flylMoveX * -1 < 0) {
		flylMoveX = 0;
	}
	clearInterval(flylTime);
	flylTime = setInterval(() => {
		if (parseInt(flylMove) == parseInt(flylNow)) {
			clearInterval(flylTime);
		} else if (flylNow < flylMove) {
			flylNow = flylNow + flylRange + 0.1;
		} else if (flylNow > flylMove) {
			flylNow = flylNow - flylRange - 0.1;
		}
		console.log("flyl", flylNow);

		flyl_scene.style = `transform: translate3d(${flylNow}px, 0px, 0px) scale(${1 +
			flylNow * -0.01}) rotate(${flylNow * -1}deg);`;
	}, 0);
	console.log("flylMove", flylMove);
}

var flyr_scene = document.getElementById("flyr_scene");
var flyr_parallax = new Parallax(flyr_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
flyr_parallax.friction(0.3, 0.3);

var flyrMax = 0.2;
var flyrNow = 0;
var flyrMove = 0;
var flyrRange = flyrMax / boxCenterW;

var flyrMaxX = 80;
var flyrNowX = 0;
var flyrMoveX = 0;
var flyrRangeX = flyrMaxX / boxCenterW;

var flyrMaxY = 80;
var flyrNowY = 0;
var flyrMoveY = 0;
var flyrRangeY = flyrMaxY / boxCenterW;
var flyrTime;

function flyrZ(x) {
	flyrMove = x * flyrRange;
	flyrMoveX = x * flyrRangeX;
	flyrMoveY = x * flyrRangeY;
	if (flyrMove > flyrMax) {
		flyrMove = flyrMax;
	} else if (flyrMove < 0) {
		flyrMove = 0;
	}
	if (flyrMoveX > flyrMaxX) {
		flyrMoveX = flyrMaxX;
	} else if (flyrMoveX < 0) {
		flyrMoveX = 0;
	}
	if (flyrMoveY > flyrMaxY) {
		flyrMoveY = flyrMaxY;
	} else if (flyrMoveY < 0) {
		flyrMoveY = 0;
	}
	clearInterval(flyrTime);
	flyrTime = setInterval(() => {
		if (
			setFloat(flyrMove, 3) == setFloat(flyrNow, 3) &&
			parseInt(flyrMoveX) == parseInt(flyrNowX) &&
			parseInt(flyrMoveY) == parseInt(flyrNowY)
		) {
			clearInterval(flyrTime);
		} else if (flyrNow < flyrMove) {
			flyrNow = flyrNow + flyrRange + 0.0002;
		} else if (flyrNow > flyrMove) {
			flyrNow = flyrNow - flyrRange - 0.0002;
		}

		if (flyrNowX < flyrMoveX) {
			flyrNowX = flyrNowX + (flyrRangeX + 0.09);
		} else if (flyrNowX > flyrMoveX) {
			flyrNowX = flyrNowX - (flyrRangeX + 0.09);
		}
		if (flyrNowY < flyrMoveY) {
			flyrNowY = flyrNowY + (flyrRangeY + 0.09);
		} else if (flyrNowY > flyrMoveY) {
			flyrNowY = flyrNowY - (flyrRangeY + 0.09);
		}
		flyr_scene.style = `transform: translate3d(${flyrNowX}px, ${flyrNowY *
			-1}px, 0px) scale(${1 + flyrNow});`;
	}, 0);
}

var bird_scene = document.getElementById("bird_scene");
var bird_parallax = new Parallax(bird_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
bird_parallax.friction(0.1, 0.1);

var txt_scene = document.getElementById("txt_scene");
var txt_parallax = new Parallax(txt_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
txt_parallax.friction(0.1, 0.1);

var tree_scene = document.getElementById("tree_scene");

var straw_img1 = document.getElementById("straw_img1");
var straw_img2 = document.getElementById("straw_img2");

var tree_parallax = new Parallax(tree_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
tree_parallax.friction(0.05, 0.05);

var treeMax = 20;
var treeMaxB = 30;
var treeNow = 0;
var treeNowB = 0;
var treeMove = 0;
var treeMoveB = 0;
var treeTime;

var treeRange = treeMax / boxCenterW;
var treeRangeB = treeMaxB / boxCenterW;

function treeZ(x) {
	treeMove = x * treeRange;
	treeMoveB = x * treeRangeB;
	if (treeMove > treeMax) {
		treeMove = treeMax;
	} else if (treeMove < 0) {
		treeMove = 0;
	}
	if (treeMoveB > treeMaxB) {
		treeMoveB = treeMaxB;
	} else if (treeMoveB < 0) {
		treeMoveB = 0;
	}
	clearInterval(treeTime);
	treeTime = setInterval(() => {
		if (
			parseInt(treeMove) == parseInt(treeNow) &&
			parseInt(treeMoveB) == parseInt(treeNowB)
		) {
			clearInterval(treeTime);
		} else if (treeNow < treeMove) {
			treeNow = treeNow + (treeRange + 0.05);
		} else if (treeNow > treeMove) {
			treeNow = treeNow - (treeRange + 0.05);
		}

		if (treeNowB < treeMoveB) {
			treeNowB = treeNowB + (treeRangeB + 0.2);
		} else if (treeNowB > treeMoveB) {
			treeNowB = treeNowB - (treeRangeB + 0.2);
		}
		tree_scene.style = `transform: translate3d(0px, ${treeNowB}px, ${treeNow}px) scale(1)`;
	}, 0.5);
}

var lion_scene = document.getElementById("lion_scene");
var lion_parallax = new Parallax(lion_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
lion_parallax.friction(0.05, 0.05);

var lionMax = 20;
var lionNow = 0;
var lionMove = 0;
var lionTime;
var lionRange = lionMax / boxCenterH;
function lionZ(y) {
	lionMove = y * lionRange;
	if (lionMove * -1 > lionMax) {
		lionMove = lionMax * -1;
	} else if (lionMove * -1 < 0) {
		lionMove = 0;
	}
	clearInterval(lionTime);

	lionTime = setInterval(() => {
		if (parseInt(lionMove) == parseInt(lionNow)) {
			clearInterval(lionTime);
		} else if (lionNow < lionMove) {
			lionNow = lionNow + (lionRange + 0.01);
		} else if (lionNow > lionMove) {
			lionNow = lionNow - (lionRange + 0.01);
		}
		lion_scene.style = `transform: translate3d(0px, 0%, ${lionNow *
			-1}px) scale(1)`;
	}, 0.5);
}

function mousemove(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	// console.log("mouseX", mouseX - boxCenterW);

	if (mouseY - boxCenterH < 0) {
		// 滑鼠在上方
		lionZ(mouseY - boxCenterH);
		strawZ(mouseY - boxCenterH);
	}
	if (mouseX - boxCenterW > 0) {
		// 滑鼠在右方
		treeZ(mouseX - boxCenterW);
		flyrZ(mouseX - boxCenterW);
	}

	if (mouseX - boxCenterW < 0) {
		// 滑鼠在左方
		plantZ(mouseX - boxCenterW);
		flyl(mouseX - boxCenterW);
	}

	// strawZ
}

window.addEventListener("mousemove", mousemove);
