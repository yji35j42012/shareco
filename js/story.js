var footerH = document.querySelector("#footer").offsetHeight;
var story_box1 = document.querySelector("#story_box1");
var story_box2 = document.querySelector("#story_box2");
var story_emptyBox = document.querySelector("#story_emptyBox");
var story = document.querySelector("#story");

console.log("story_box1", story_box1.offsetHeight);
story_emptyBox.style.height =
	story_box1.offsetHeight + footerH + story_box2.offsetHeight + "px";





// console.log("header", header.offsetHeight);
// console.log("window", window.innerHeight);
// var story_h = window.innerHeight - header.offsetHeight;

// story_box.style.height = story_h + "px";


document.addEventListener("DOMContentLoaded", () => {
	story.classList.add("active");
});


window.addEventListener("scroll", () => {
	console.log("1", this.scrollY);
});
