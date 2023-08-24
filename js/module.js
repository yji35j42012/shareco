var lang = document.querySelector("#lang");
if (lang) {
	lang.onclick = function() {
		lang.classList.toggle("show_lang");
	};
}

var screen = window.innerWidth <= 1024 ? "ph" : "pc";

var nav_item = document.querySelectorAll("[name = 'nav_item']");
var nav_item_count = null;
if (nav_item) {
	for (let i = 0; i < nav_item.length; i++) {
		const element = nav_item[i];
		element.onclick = function() {
			if (screen == "pc") return;
			if (nav_item_count == null) {
				element.classList.add("on");
				nav_item_count = i;
			} else if (nav_item_count == i) {
				element.classList.remove("on");
				nav_item_count = null;
			} else {
				nav_item[nav_item_count].classList.remove("on");
				element.classList.add("on");
				nav_item_count = i;
			}
		};
	}
}
var nav_btn = document.querySelector("#nav_btn");
var header = document.querySelector("#header");
if (nav_btn) {
	nav_btn.onclick = function() {
		header.classList.toggle("showMenu");
	};
}

window.onresize = function() {
	if (screen == "pc" && window.innerWidth <= 1024) {
		screen = "ph";
	} else if (screen == "ph" && window.innerWidth > 1024) {
		screen = "pc";
		if (nav_item_count !== null) {
			nav_item[nav_item_count].classList.remove("on");
		}
		header.classList.remove("showMenu");
	}
};

var alert = document.querySelector("#alert");
var alert_close = document.querySelector("#alert_close");
var alert_lightBox = document.querySelector("#alert_lightBox");
if (alert_lightBox) {
	alert_lightBox.onclick = function(event) {
		event.stopPropagation();
	};
}
if (alert_close && alert) {
	alert_close.onclick = function() {
		alert.classList.remove("on");
		setTimeout(() => {
			alert.classList.remove("show");
		}, 500);
	};
	alert.onclick = function() {
		alert.classList.remove("on");
		setTimeout(() => {
			alert.classList.remove("show");
		}, 500);
	};
}


let favicon = document.querySelector('link[rel="shortcut icon"]');
let isDarkMode = false;
isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

var html = document.querySelector("html");

if (isDarkMode || html.getAttribute("native-dark-active") !== null) {
	favicon.href = "../favicon-light.ico";
} else {
	favicon.href = "../favicon-dark.ico";
}

console.log(isDarkMode);
