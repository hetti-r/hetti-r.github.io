const header = document.querySelector("header");
const backToTop = document.querySelector("#backToTop");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");

/* hidden navbar */

window.addEventListener('scroll', function() {
  let header = document.querySelector('#navbar');
  header.classList.toggle('sticky', window.scrollY > 0);
});

/*color changing navbar */

window.addEventListener('scroll', function() {
  let header = document.querySelector('#navbar2');
  header.classList.toggle('sticky', window.scrollY > 0);
});

/* Back to top button */

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTop.style.display = "block";
    header.classList.add("bg");
  } else {
    backToTop.style.display = "none";
    header.classList.remove("bg");
  }
};

backToTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // Chrome, FF and others
  header.classList.toggle("bg");
});

/* Mobile menu toggle */

const toggleMenu = () => {
  nav.classList.toggle("responsive");
};

mobButton.addEventListener("click", toggleMenu);
menuItems.forEach((item) => item.addEventListener("click", toggleMenu));

