var nowW = window.innerWidth;
var nowH = window.innerHeight;
var mouseR = nowW * (3 / 4);
var mouseL = nowW * (1 / 4);

var mouseT = nowH * (1 / 4);
var mouseB = nowH * (3 / 4);

var home = document.querySelector("#home");

console.log("mouseR", mouseR);
console.log("mouseL", mouseL);

function mousemove(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	if (mouseL > mouseX && home.getAttribute("class") !== "mouseL") {
		home.setAttribute("class", "home mouseL");
	}
	if (mouseR < mouseX && home.getAttribute("class") !== "mouseR") {
		home.setAttribute("class", "home mouseR");
	}
	if (mouseL < mouseX && mouseR > mouseX && mouseY < mouseT) {
		home.setAttribute("class", "home mouseT");
	}
	if (mouseL < mouseX && mouseR > mouseX && mouseY > mouseB) {
		home.setAttribute("class", "home mouseB");
	}
	if (
		mouseL < mouseX &&
		mouseR > mouseX &&
		mouseY < mouseB &&
		mouseY > mouseT
	) {
		home.setAttribute("class", "home mouseC");
	}
	console.log("clientX: ", event.clientX);
}

window.addEventListener("mousemove", mousemove);
