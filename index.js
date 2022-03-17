/////////////////ELEMENTS/////////////////////////////
const drums = [...document.querySelectorAll(".drum")];

/////////////////SOUNDS///////////////////////////////
const tom1Sound = new Audio("./src/sounds/tom1.mp3");
const tom2Sound = new Audio("./src/sounds/tom2.mp3");
const tom3Sound = new Audio("./src/sounds/tom3.mp3");
const tom4Sound = new Audio("./src/sounds/tom4.mp3");
const crash = new Audio("./src/sounds/crash.mp3");
const kickBass = new Audio("./src/sounds/kick.mp3");
const snare = new Audio("./src/sounds/snare.mp3");

/////////////////EVENT LISTENERS//////////////////////

for (let i = 0; i < drums.length; i++) {
	drums[i].addEventListener("click", function (e) {
		tom1Sound.play();
		console.log(this.innerHTML);
		console.log();
	});
}

// w.addEventListener("click", (e) => {
// 	console.log("Play Tom1 when was click");
// 	tom1Sound.play();
// });

// w.addEventListener("keydown", (e) => {
// 	if (e.keyCode === 87) {
// 		console.log("Button W was clicked");
// 		tom1Sound.play();
// 	}
// });

// a.addEventListener("click", (e) => {
// 	console.log("Play Tom2 when was click");
// 	tom2Sound.play();
// });

// a.addEventListener("keydown", (e) => {
// 	if (e.keyCode === 65) {
// 		console.log("Button A was clicked");
// 		tom2Sound.play();
// 	}
// });

// s.addEventListener("click", (e) => {
// 	console.log("Play Tom3 when was click");
// 	tom3Sound.play();
// });

// s.addEventListener("keydown", (e) => {
// 	if (e.keyCode === 83) {
// 		console.log("Button S was clicked");
// 		tom3Sound.play();
// 	}
// });

// d.addEventListener("click", (e) => {
// 	console.log("Play Tom4 when was click");
// 	tom4Sound.play();
// });

// d.addEventListener("keydown", (e) => {
// 	if (e.keyCode === 68) {
// 		console.log("Button S was clicked");
// 		tom4Sound.play();
// 	}
// });
// j.addEventListener("click", (e) => {
// 	console.log("Play Crash when was click");
// 	crash.play();
// });

// j.addEventListener("keydown", (e) => {
// 	if (e.keyCode === 74) {
// 		console.log("Button J was clicked");
// 		crash.play();
// 	}
// });
// k.addEventListener("click", (e) => {
// 	console.log("Play Kick-bass when was click");
// 	kickBass.play();
// });

// k.addEventListener("keydown", (e) => {
// 	if (e.keyCode === 75) {
// 		console.log("Button K was clicked");
// 		kickBass.play();
// 	}
// });
// l.addEventListener("click", (e) => {
// 	console.log("Play Snare when was click");
// 	snare.play();
// });

// l.addEventListener("keydown", (e) => {
// 	if (e.keyCode === 76) {
// 		console.log("Button L was clicked");
// 		snare.play();
// 	}
// });
