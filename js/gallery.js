var swiper1_prev = document.querySelector("#swiper1_prev");
var swiper1_next = document.querySelector("#swiper1_next");
var swiper1_group = document.querySelector("#swiper1_group");
var swiper1_dots = document.querySelector("#swiper1_dots");
// var swiper1_dots_item = null;
var swiper1_item = document.querySelectorAll(
	"#swiper1_group .gallery_swiper_item"
);
var swiper1_count = 0;
var swiper1_max = Math.ceil(swiper1_item.length / 4);

console.log("swiper1_item", swiper1_item);
console.log("swiper1_max", swiper1_max);

pushDots(swiper1_dots, swiper1_max);



function pushDots(who, count) {
	who.innerHTML = "";
	for (let i = 0; i < count; i++) {
		const liDot = document.createElement("li");
		liDot.setAttribute("class", "dots_item");
		who.append(liDot);
	}
	console.log('getId' , who.getAttribute("id"));

}
