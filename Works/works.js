const navButton = document.querySelector(".container-nav");
const content = document.querySelector(".container");
const navItems = document.querySelectorAll(".nav-icons h3");

navButton.addEventListener("click", () => {
  content.classList.toggle("show-nav");
  navItems.forEach((e) => {
    e.classList.toggle("nav-item");
  });
});

const panels = document.querySelectorAll(".panel");

panels.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("active")) {
      removeActive();
      el.classList.add("active");
    }
  });
});

function removeActive() {
  panels.forEach((el) => {
    el.classList.remove("active");
  });
}
