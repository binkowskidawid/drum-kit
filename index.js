/////////////////ELEMENTS/////////////////////////////
const drums = [...document.querySelectorAll(".drum")];

/////////////////SOUNDS///////////////////////////////
const tom1Sound = new Audio("./src/sounds/tom1.mp3");
const tom2Sound = new Audio("./src/sounds/tom2.mp3");
const tom3Sound = new Audio("./src/sounds/tom3.mp3");
const tom4Sound = new Audio("./src/sounds/tom4.mp3");
const crash = new Audio("./src/sounds/crash.mp3");
const kick = new Audio("./src/sounds/kick.mp3");
const snare = new Audio("./src/sounds/snare.mp3");

/////////////////EVENT LISTENERS//////////////////////
for (let i = 0; i < drums.length; i++) {
	drums[i].addEventListener("click", function () {
		makeSound(this.innerHTML);
	});
	drums[i].addEventListener("keydown", function (e) {
		makeSound(e.key);
	});
}

function makeSound(key) {
	switch (key) {
		case "w":
			tom1Sound.play();
			break;
		case "a":
			tom2Sound.play();
			break;
		case "s":
			tom3Sound.play();
			break;
		case "d":
			tom4Sound.play();
			break;
		case "j":
			crash.play();
			break;
		case "k":
			kick.play();
			break;
		case "l":
			snare.play();
			break;

		default:
			console.log(key);
	}
}
