const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  display.innerText = audio.parentElement.id;
}

pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const key = pad.innerText.trim();
    playSound(key);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  playSound(key);
});
