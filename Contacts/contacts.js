const navButton = document.querySelector(".container-nav");
const content = document.querySelector(".container");
const navItems = document.querySelectorAll(".nav-icons h3");

navButton.addEventListener("click", () => {
  content.classList.toggle("show-nav");
  navItems.forEach((e) => {
    e.classList.toggle("nav-item");
  });
});
