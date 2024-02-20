// nav-fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.scrollY > fixNav) {
    header.classList.add("nav-fix");
  } else {
    header.classList.remove("nav-fix");
  }
};

// Hamburger menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#menu-nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
