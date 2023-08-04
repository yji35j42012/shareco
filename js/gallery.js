var swiper1_prev = document.querySelector("#swiper1_prev");
var swiper1_next = document.querySelector("#swiper1_next");
var swiper1_group = document.querySelector("#swiper1_group");
var swiper1_dots = document.querySelector("#swiper1_dots");
var swiper1_dots_item = null;
var swiper1_item = document.querySelectorAll(
	"#swiper1_group .gallery_swiper_item"
);
var swiper1_count = 0;
var swiper1_max =
	screen == "pc"
		? Math.ceil(swiper1_item.length / 4)
		: Math.ceil(swiper1_item.length / 2);

var swiper1_moveNum = 0;

function swiper1MoveHandler(e) {
	swiper1_group.style = `transform: translateX(${swiper1_moveNum}%);transition-duration: 0.3s;opacity:1;`;
}

swiper1_prev.onclick = function() {
	console.log("swiper1_prev");
	if (swiper1_count == 0) {
		swiper1_count = swiper1_max - 1;
	} else {
		swiper1_count--;
	}
	swiper1_moveNum = -100 * swiper1_count;
	swiper1MoveHandler();
	dotsSwiper1Handler();
};

swiper1_next.onclick = function() {
	console.log("swiper1_next");
	if (swiper1_count + 1 >= swiper1_max) {
		swiper1_count = 0;
	} else {
		swiper1_count++;
	}
	swiper1_moveNum = -100 * swiper1_count;
	swiper1MoveHandler();
	dotsSwiper1Handler();
};
function allDots1RemoveSwiper1() {
	for (let i = 0; i < swiper1_dots_item.length; i++) {
		const element = swiper1_dots_item[i];
		element.classList.remove("on");
	}
}
function dotsSwiper1Handler() {
	allDots1RemoveSwiper1();
	swiper1_dots_item[swiper1_count].classList.add("on");
}
function pushDots1() {
	swiper1_dots.innerHTML = "";
	for (let i = 0; i < swiper1_max; i++) {
		const liDot = document.createElement("li");
		liDot.setAttribute("class", "dots_item");
		swiper1_dots.append(liDot);
	}
	swiper1_dots_item = document.querySelectorAll("#swiper1_dots > li");
	dotsSwiper1Handler();
	dotSwiper1Item();
}
function dotSwiper1Item() {
	for (let i = 0; i < swiper1_dots_item.length; i++) {
		const element = swiper1_dots_item[i];
		element.onclick = function() {
			swiper1_count = i;
			swiper1_moveNum = -100 * swiper1_count;
			swiper1MoveHandler();
			dotsSwiper1Handler();
		};
	}
}
pushDots1();

var swiper2_prev = document.querySelector("#swiper2_prev");
var swiper2_next = document.querySelector("#swiper2_next");
var swiper2_group = document.querySelector("#swiper2_group");
var swiper2_dots = document.querySelector("#swiper2_dots");
var swiper2_dots_item = null;
var swiper2_item = document.querySelectorAll(
	"#swiper2_group .gallery_swiper_item"
);
var swiper2_count = 0;
var swiper2_max =
	screen == "pc"
		? Math.ceil(swiper2_item.length / 4)
		: Math.ceil(swiper2_item.length / 2);
var swiper2_moveNum = 0;
function swiper2MoveHandler(e) {
	swiper2_group.style = `transform: translateX(${swiper2_moveNum}%);transition-duration: 0.3s;opacity:2;`;
}

swiper2_prev.onclick = function() {
	console.log("swiper2_prev");
	if (swiper2_count == 0) {
		swiper2_count = swiper2_max - 1;
	} else {
		swiper2_count--;
	}
	swiper2_moveNum = -100 * swiper2_count;
	swiper2MoveHandler();
	dotsSwiper2Handler();
};

swiper2_next.onclick = function() {
	console.log("swiper2_next");
	if (swiper2_count + 1 >= swiper2_max) {
		swiper2_count = 0;
	} else {
		swiper2_count++;
	}
	swiper2_moveNum = -100 * swiper2_count;
	swiper2MoveHandler();
	dotsSwiper2Handler();
};
function allDots2RemoveSwiper2() {
	for (let i = 0; i < swiper2_dots_item.length; i++) {
		const element = swiper2_dots_item[i];
		element.classList.remove("on");
	}
}
function dotsSwiper2Handler() {
	allDots2RemoveSwiper2();
	swiper2_dots_item[swiper2_count].classList.add("on");
}
function pushDots2() {
	swiper2_dots.innerHTML = "";
	for (let i = 0; i < swiper2_max; i++) {
		const liDot = document.createElement("li");
		liDot.setAttribute("class", "dots_item");
		swiper2_dots.append(liDot);
	}
	swiper2_dots_item = document.querySelectorAll("#swiper2_dots > li");
	dotsSwiper2Handler();
	dotSwiper2Item();
}
function dotSwiper2Item() {
	for (let i = 0; i < swiper2_dots_item.length; i++) {
		const element = swiper2_dots_item[i];
		element.onclick = function() {
			swiper2_count = i;
			swiper2_moveNum = -100 * swiper2_count;
			swiper2MoveHandler();
			dotsSwiper2Handler();
		};
	}
}
pushDots2();

window.onresize = function() {
	if (window.innerWidth <= 1024 && screen == "pc") {
		screen = "ph";
		// introductionChangeAni();
		swiper1_max = Math.ceil(swiper1_item.length / 2);
		swiper2_max = Math.ceil(swiper2_item.length / 2);
		pushDots1();
		pushDots2();
		// access_moveHandler();
		// pushAccissDots();
	} else if (screen == "ph" && window.innerWidth > 1024) {
		screen = "pc";
		swiper1_max = Math.ceil(swiper1_item.length / 4);
		swiper2_max = Math.ceil(swiper2_item.length / 4);
		pushDots1();
		pushDots2();
		// access_count > access_maxCount
		// 	? (access_count = access_maxCount - 1)
		// 	: access_count;
		// access_moveNum = -100 * access_count;
		// access_moveHandler();
		// pushAccissDots();

		// product_group.style = "";
		// product_count = 0;
		// dotsProductHandler();
	}
};

var swiperHandler = document.querySelectorAll("[name='swiperHandler']");
var gal_year = document.querySelector("#gal_year");
var gal_name = document.querySelector("#gal_name");
var gal_detail = document.querySelector("#gal_detail");
var gal_txt = document.querySelector("#gal_txt");
console.log("swiperHandler", swiperHandler);
for (let i = 0; i < swiperHandler.length; i++) {
	const element = swiperHandler[i];
	element.onclick = function() {
		console.log(element);
		if (alert) {
			alert.classList.add("show");
			setTimeout(() => {
				alert.classList.add("on");
			}, 10);
		} else {
			return;
		}
		var galId = element.getAttribute("data-galId");
		console.log("galId", galId);

		gal_year.innerHTML = galData[0].galYear;
		gal_name.innerHTML = galData[0].galName;
		gal_detail.innerHTML = galData[0].galDetail;
		gal_txt.innerHTML = galData[0].galTxt;
	};
}

var galData = [
	{
		galId: 1,
		galName: "裸麝香",
		galPhoto: "perfume_name_photot_1.png",
		galYear: "2023",
		galDetail:
			"海洋。孕育生命的起源，如鯨鯊的存在 強悍與母性並存 <br> 溫柔撩人的香氣 充滿成熟的韻味",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	},
	{
		galId: 2,
		galName: "麝掠香",
		galPhoto: "perfume_name_photot_1.png",
		galYear: "2023",
		galDetail:
			"在叢林的騷動裡 靜靜窺探，清澈、桀驁的琥珀木質香 <br> 模糊我們的界線",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br> using the most direct odor tomake you feel the fine atmosphere."
	},
	{
		galId: 3,
		galName: "迷幻靈魂",
		galPhoto: "perfume_name_photot_1.png",
		galYear: "2023",
		galDetail:
			"在叢林的騷動裡 靜靜窺探，清澈、桀驁的琥珀木質香 <br> 模糊我們的界線",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br> using the most direct odor tomake you feel the fine atmosphere."
	}
];
