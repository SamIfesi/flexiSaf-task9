import "./style.css";
const keys = document.querySelectorAll(".key");
const btn = document.querySelectorAll("button");

function playSound(e) {
  let keyCode;

  if (e.type === "click") {
    keyCode = e.currentTarget.getAttribute("data-key");
  } else {
    keyCode = e.keyCode;
  }
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
btn.forEach((button) => {
  button.addEventListener("click", playSound);
  button.addEventListener("touchstart", playSound);
});
