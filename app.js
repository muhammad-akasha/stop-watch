let start = document.getElementById("strt");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let displayTimer = document.querySelector(".display");

let minutes = 0;
let seconds = 0;
let miliSecs = 0;
let interval;

function startTime() {
  miliSecs += 9;
  if (miliSecs >= 1000) {
    miliSecs = 0;
    seconds++;
  } else if (seconds === 60) {
    seconds = 0;
    minutes++;
  } else if (minutes === 60) {
    minutes = 0;
  }
  updateTimer();
}

function updateTimer() {
  displayTimer.innerHTML = `
    ${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")} : ${miliSecs.toString().padStart(3, "0")}
    `;
}

start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTime, 9);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});
reset.addEventListener("click", () => {
  resetTimer();
});

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  miliSecs = 0;
  updateTimer();
  displayTimer.innerHTML = `
  ${minutes.toString().padStart(2, "0")} : ${seconds
  .toString()
  .padStart(2, "0")} : ${miliSecs.toString().padStart(2, "0")}
  `;
}

// updateTimer();
