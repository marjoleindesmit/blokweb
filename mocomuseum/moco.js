var hamburgerMenu = document.querySelector(".hamburger");
var mainMenu = document.querySelector(".menu");

function navMob() {
  hamburgerMenu.classList.toggle("navOpen");
  // mainMenu.classList.remove("menu"); werkt niet???
  // mainMenu.classlist.add("menuOverlay"); ??????
}

hamburgerMenu.addEventListener("click", navMob);


// BRONNEN
// https://www.youtube.com/watch?v=dIyVTjJAkLw
// https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
