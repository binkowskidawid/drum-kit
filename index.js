/////////////////ELEMENTS/////////////////////////////
const w = document.querySelector(".w");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");

/////////////////SOUNDS///////////////////////////////
const tom1Sound = new Audio("./src/sounds/tom-1.mp3");
const tom2Sound = new Audio("./src/sounds/tom-2.mp3");
const tom3Sound = new Audio("./src/sounds/tom-3.mp3");
const tom4Sound = new Audio("./src/sounds/tom-4.mp3");
const crash = new Audio("./src/sounds/crash.mp3");
const kickBass = new Audio("./src/sounds/kick-bass.mp3");
const snare = new Audio("./src/sounds/snare.mp3");

/////////////////EVENT LISTENERS//////////////////////
w.addEventListener("click", (e) => {
	console.log("Play Tom1 when was click");
	tom1Sound.play();
});

w.addEventListener("keyup", (e) => {
	if (e.keyCode === 87) {
		console.log("Button W was clicked");
		tom1Sound.play();
	}
});

a.addEventListener("click", (e) => {
	console.log("Play Tom2 when was click");
	tom2Sound.play();
});

a.addEventListener("keyup", (e) => {
	if (e.keyCode === 65) {
		console.log("Button A was clicked");
		tom2Sound.play();
	}
});
