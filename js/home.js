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
		console.log("DFASDFASDF");

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

var flyl_scene = document.getElementById("flyl_scene");
var flyl_parallax = new Parallax(flyl_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
flyl_parallax.friction(0.2, 0.2);

var flyr_scene = document.getElementById("flyr_scene");
var flyr_parallax = new Parallax(flyr_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
flyr_parallax.friction(0.3, 0.3);

var bird_scene = document.getElementById("bird_scene");
var bird_parallax = new Parallax(bird_scene, {
	invertX: false,
	invertY: false,
	originY: 0.5
});
bird_parallax.friction(0.5, 0.5);

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
var treeNow = 0;
var treeMove = 0;
var treeTime;
var treeRange = treeMax / boxCenterW;

function treeZ(x) {
	treeMove = x * treeRange;
	if (treeMove > treeMax) {
		treeMove = treeMax;
	} else if (treeMove < 0) {
		treeMove = 0;
	}
	clearInterval(treeTime);
	treeTime = setInterval(() => {
		if (parseInt(treeMove) == parseInt(treeNow)) {
			clearInterval(treeTime);
		} else if (treeNow < treeMove) {
			treeNow = treeNow + (lionRange + 0.01);
		} else if (treeNow > treeMove) {
			treeNow = treeNow - (lionRange + 0.01);
		}
		tree_scene.style = `transform: translate3d(0px, 0%, ${treeNow}px) scale(1)`;
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
// var lionRange = 0.2;
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
	if (mouseY - boxCenterH < 0) {
		// 滑鼠在上方
		lionZ(mouseY - boxCenterH);
		strawZ(mouseY - boxCenterH);
	}
	if (mouseX - boxCenterW > 0) {
		treeZ(mouseX - boxCenterW);
	}
}

window.addEventListener("mousemove", mousemove);
