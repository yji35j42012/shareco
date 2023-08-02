var lang = document.querySelector("#lang");
if (lang) {
	lang.onclick = function() {
		lang.classList.toggle("show_lang");
	};
}

var screen = window.innerWidth <= 1024 ? "ph" : "pc";
window.onresize = function() {
	if (screen == "pc" && window.innerWidth <= 1024) {
		screen = "ph";
	} else if (screen == "ph" && window.innerWidth > 1024) {
		screen = "pc";
	}
};

var nav_item = document.querySelectorAll("[name = 'nav_item']");
var nav_item_count = null;
if (nav_item) {
	for (let i = 0; i < nav_item.length; i++) {
		const element = nav_item[i];
		element.onclick = function() {
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
