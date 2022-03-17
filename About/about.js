const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const progressDivided = 100 / (circles.length - 1);
const text = document.querySelectorAll(".text h3");

let circleCounter = 1;
let progressCounter = 0;
next.addEventListener("click", () => {
  circles[circleCounter].classList.add("active");

  text.forEach((text) =>
    text.classList.replace("text-active", "text-inactive")
  );
  text[circleCounter].classList.replace("text-inactive", "text-active");

  circleCounter++;
  progressCounter += progressDivided;
  if (progressCounter > 100) {
    progressCounter = 100;
  }
  progress.style.width = `${progressCounter}%`;
  if (circleCounter > 1) {
    prev.removeAttribute("disabled");
  }
  if (circleCounter === circles.length) {
    next.setAttribute("disabled", true);
  }
});

prev.addEventListener("click", () => {
  circleCounter--;
  circles[circleCounter].classList.remove("active");

  text.forEach((text) =>
    text.classList.replace("text-active", "text-inactive")
  );
  text[circleCounter - 1].classList.replace("text-inactive", "text-active");

  progressCounter -= progressDivided;
  if (progressCounter < 0) {
    progressCounter = 0;
  }
  progress.style.width = `${progressCounter}%`;
  if (circleCounter < circles.length) {
    next.removeAttribute("disabled");
  }
  if (circleCounter === 1) {
    prev.setAttribute("disabled", true);
  }
});
