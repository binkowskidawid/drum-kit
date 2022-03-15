const w = document.querySelector(".w");
const tom1Audio = document.querySelector(".tom1");

function playSound(e) {
  if (e.keyCode === 87) {
    tom1Audio.play();
  }
}

w.addEventListener("click", (e) => {
  console.log("play");
  if (e.keyCode === 87) {
    console.log("button w click");
  }
});
