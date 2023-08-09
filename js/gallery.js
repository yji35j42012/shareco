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
		swiper1_count = 0;
		swiper2_count = 0;
		swiper1_moveNum = -100 * swiper1_count;
		swiper2_moveNum = -100 * swiper2_count;
		swiper1MoveHandler();
		swiper2MoveHandler();
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
var gal_photo = document.querySelector("#gal_photo");
var gal_pic = document.querySelector("#gal_pic");
var gal_txt = document.querySelector("#gal_txt");
var show_photo = document.querySelector("#show_photo");
var gal_picOutside = document.querySelector("#gal_picOutside");

for (let i = 0; i < swiperHandler.length; i++) {
	const element = swiperHandler[i];
	element.onclick = function() {
		if (alert) {
			setAlert(element.getAttribute("data-galId"));
			alert.classList.add("show");
			setTimeout(() => {
				alert.classList.add("on");
			}, 10);
		} else {
			return;
		}
		var galId = element.getAttribute("data-galId");
	};
}

var galData = [
	{
		galId: 1,
		setMaxW: false,
		galName: "裸麝香",
		galPhoto: "perfume_name_photot_1.png",
		galPic: "perfume_open_photot_1.jpg",
		galPicPh: "perfume_open_photot_ph1.jpg",
		galYear: "2023",
		galDetail:
			"海洋。孕育生命的起源，如鯨鯊的存在 強悍與母性並存 <br> 溫柔撩人的香氣 充滿成熟的韻味",
		picPosition: "center"
	},
	{
		galId: 2,
		setMaxW: false,
		galName: "麝掠香",
		galPhoto: "perfume_name_photot_2.png",
		galPic: "perfume_open_photot_2.jpg",
		galPicPh: "perfume_open_photot_ph2.jpg",
		galYear: "2023",
		galDetail:
			"在叢林的騷動裡 靜靜窺探，清澈、桀驁的琥珀木質香 <br> 模糊我們的界線",
		picPosition: "30%"
	},
	{
		galId: 3,
		setMaxW: false,
		galName: "迷幻靈魂",
		galPhoto: "perfume_name_photot_3.png",
		galPic: "perfume_open_photot_3.jpg",
		galPicPh: "perfume_open_photot_ph3.jpg",
		galYear: "2023",
		galDetail:
			"在叢林的騷動裡 靜靜窺探，清澈、桀驁的琥珀木質香 <br> 模糊我們的界線",
		picPosition: "center"
	},
	{
		galId: 4,
		setMaxW: false,
		galName: "焚香草",
		galPhoto: "perfume_name_photot_4.png",
		galPic: "perfume_open_photot_4.jpg",
		galPicPh: "perfume_open_photot_ph4.jpg",
		galYear: "2023",
		galDetail:
			"一呼一吸 觸動心跳加速，我的香味是 Invitation Code <br> 這場螢光派對 你想邀請誰？",
		picPosition: "center"
	},
	{
		galId: 5,
		setMaxW: false,
		galName: "黑水香樹",
		galPhoto: "perfume_name_photot_5.png",
		galPic: "perfume_open_photot_5.jpg",
		galPicPh: "perfume_open_photot_ph5.jpg",
		galYear: "2022",
		galDetail: "木質酸甜的香氣、作為掩護 <br> 迷惑了感官、讓人卸下防備",
		picPosition: "42%"
	},
	{
		galId: 6,
		setMaxW: false,
		galName: "捕蠅草",
		galPhoto: "perfume_name_photot_6.png",
		galPic: "perfume_open_photot_6.jpg",
		galPicPh: "perfume_open_photot_ph6.jpg",
		galYear: "2022",
		galDetail:
			"精心佈置的伊甸園，默默散發誘惑的甜沁氣息 <br> 靜待獵物、被動比主動更有侵略性",
		picPosition: "52%"
	},
	{
		galId: 7,
		setMaxW: false,
		galName: "琥珀檀香",
		galPhoto: "perfume_name_photot_7.png",
		galPic: "perfume_open_photot_7.jpg",
		galPicPh: "perfume_open_photot_ph7.jpg",
		galYear: "2022",
		galDetail:
			"時而高傲冷漠，時而溫軟柔軟 <br> 無法被馴化侵略性浪漫，讓人無法招架",
		picPosition: "82%"
	},
	{
		galId: 8,
		setMaxW: false,
		galName: "清醒夢",
		galPhoto: "perfume_name_photot_8.png",
		galPic: "perfume_open_photot_8.jpg",
		galPicPh: "perfume_open_photot_ph1.jpg",
		galYear: "2021",
		galDetail:
			"浸入香味打造的幻境烏托邦，清新、歡愉、舒適慵懶 <br> 別叫醒我，夢境才是我的真實",
		picPosition: "97%"
	},
	{
		galId: 9,
		setMaxW: false,
		galName: "維吉尼亞麝香",
		galPhoto: "perfume_name_photot_9.png",
		galPic: "perfume_open_photot_9.jpg",
		galPicPh: "perfume_open_photot_ph9.jpg",
		galYear: "2021",
		galDetail:
			"霸道的控制狂穿上厚重木質煙燻氣息 <br> 只要妳願意臣服，就會感覺到無比的安全感",
		picPosition: "28%"
	},
	{
		galId: 10,
		setMaxW: false,
		galName: "大麻麝香",
		galPhoto: "perfume_name_photot_10.png",
		galPic: "perfume_open_photot_10.jpg",
		galPicPh: "perfume_open_photot_ph10.jpg",
		galYear: "2020",
		galDetail:
			"柑橘香氣拉開叢林的序幕，野性的菸草香瀰漫在空氣中 <br> 王者準備凱旋歸來",
		picPosition: "28%"
	},
	{
		galId: 11,
		setMaxW: false,
		galName: "琥珀萊姆",
		galPhoto: "perfume_name_photot_11.png",
		galPic: "perfume_open_photot_11.jpg",
		galPicPh: "perfume_open_photot_ph11.jpg",
		galYear: "2020",
		galDetail:
			"微辛甜氣喚醒夜的感官，萊姆酒香交織慵懶的雪松氣息 <br> 跳一支不想散場的舞",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	},
	{
		galId: 12,
		setMaxW: false,
		galName: "奇蹟罌粟",
		galPhoto: "perfume_name_photot_12.png",
		galPic: "perfume_open_photot_12.jpg",
		galPicPh: "perfume_open_photot_ph12.jpg",
		galYear: "2018",
		galDetail:
			"聖壇上三花齊放的讚美歌 <br> 伴隨令人成癮的安定與和平，是最奢侈的享受",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	},
	{
		galId: 13,
		setMaxW: false,
		galName: "能量麝香",
		galPhoto: "perfume_name_photot_13.png",
		galPic: "perfume_open_photot_13.jpg",
		galPicPh: "perfume_open_photot_ph13.jpg",
		galYear: "2018",
		galDetail:
			"冒險就在愜意的草木香中展開，隨晨曦揭開麝香的清新活力 <br> 為紳士帶來沈穩的優雅",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	},
	{
		galId: 14,
		setMaxW: false,
		galName: "皇家橡樹",
		galPhoto: "perfume_name_photot_14.png",
		galPic: "perfume_open_photot_14.jpg",
		galPicPh: "perfume_open_photot_ph14.jpg",
		galYear: "2018",
		galDetail:
			"不凡自信，在貴族檀香中誕生 <br> 融合海島植物與果實的香氣，散發皇室魅力",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	},

	{
		galId: 15,
		setMaxW: true,
		galName: "寬鬆棉質圓領 TEE",
		galPhoto: "",
		galPic: "clothing_open_photot_1.jpg",
		galPicPh: "clothing_open_photot_ph1.jpg",
		galYear: "2023",
		galDetail:
			"紫、可可、深棕：  M / L / XL <br> 黑、白：  M / L / XL / XXL",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	},

	{
		galId: 16,
		setMaxW: true,
		galName: "刺繡棒球帽",
		galPhoto: "",
		galPic: "clothing_open_photot_2.jpg",
		galPicPh: "clothing_open_photot_ph2.jpg",
		galYear: "2023",
		galDetail: "",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	},

	{
		galId: 17,
		setMaxW: true,
		galName: "CAE™ SOCKS",
		galPhoto: "",
		galPic: "clothing_open_photot_3.jpg",
		galPicPh: "clothing_open_photot_ph3.jpg",
		galYear: "2022",
		galDetail: "建議尺寸：  23~27cm",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	},

	{
		galId: 18,
		setMaxW: true,
		galName: "慵懶落肩口袋TEE",
		galPhoto: "",
		galPic: "clothing_open_photot_4.jpg",
		galPicPh: "clothing_open_photot_ph4.jpg",
		galYear: "2021",
		galDetail: " M / L / XL ",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	},

	{
		galId: 19,
		setMaxW: true,
		galName: "厚磅窄版TEE",
		galPhoto: "",
		galPic: "clothing_open_photot_5.jpg",
		galPicPh: "clothing_open_photot_ph5.jpg",
		galYear: "2019",
		galDetail: "S / M / L / XL / XXL",
		galTxt:
			"Odors have a power of persuasion stronger than that of words, appearances or will.SHARECO, <br>  using the most direct odor tomake you feel the fine atmosphere."
	}
];

function setAlert(id) {
	gal_year.innerHTML = "";
	gal_name.innerHTML = "";
	gal_detail.innerHTML = "";
	gal_photo.setAttribute("src", "");
	gal_pic.setAttribute("class", "");
	for (let i = 0; i < galData.length; i++) {
		if (galData[i].galId == id) {
			gal_year.innerHTML = galData[i].galYear;
			gal_name.innerHTML = galData[i].galName;
			gal_detail.innerHTML = galData[i].galDetail;
			if (galData[i].setMaxW) {
				gal_pic.setAttribute("class", "galMax");
			}
			if (galData[i].galPhoto == "") {
				show_photo.style.display = "none";
			} else {
				gal_photo.setAttribute(
					"src",
					"../images/gallery/" + galData[i].galPhoto
				);
			}
			// background-image:url(../images/gallery/" +
			// galData[i].galPic + ");background-position: " + galData[i].picPosition + "center

			gal_picOutside.setAttribute(
				"style",
				`
				background-image:url(../images/gallery/${galData[i].galPicPh});

				`
				// background-position: ${galData[i].picPosition} center;
			);
			gal_pic.setAttribute(
				"src",
				"../images/gallery/" + galData[i].galPic
			);
		}
	}
}
