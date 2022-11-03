let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountains_behind = document.querySelector("#mountains_behind");
let title = document.querySelector("#title");
let discover = document.querySelector("#discover");
let mountains_front = document.querySelector("#mountains_front");
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 1.25 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  title.style.marginRight = value * 2 + "px";
  title.style.marginTop = value * 1 + "px";
  discover.style.marginTop = value * 2.5 + "px";
  header.style.top = value * 1 + "px";
});

const navToggler = document.querySelector(".navBtn");
const navLinksContainer = document.querySelector(".mobileNav");

const toggleNav = (e) => {
  navToggler.classList.toggle("open");
  navLinksContainer.classList.toggle("open");
  header.classList.toggle("height");
};
navToggler.addEventListener("click", toggleNav);


const btn = document.querySelector(".btnSubmit");

var position;

// mouse hover event listener
btn.addEventListener("mouseover", function () {
    position ? (position = 0) : (position = 200);
    //adding the css animation property
    btn.style.transform = `translate(${position}px, 0px)`;
    btn.style.transition = "all 0.3s ease";
});