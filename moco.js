var hamburgerMenu = document.querySelector(".hamburger");
var mainMenu = document.querySelector(".menu");

function navMob() {
  hamburgerMenu.classList.toggle("navOpen");

  if (hamburgerMenu.classList.contains("navOpen")) {
    mainMenu.classList.add("menuOverlay");
    mainMenu.classList.remove("menu");

  } else {
    mainMenu.classList.remove("menuOverlay");
    mainMenu.classList.add("menu");
  }

}

hamburgerMenu.addEventListener("click", navMob);

// BRONNEN
// https://www.youtube.com/watch?v=dIyVTjJAkLw
// https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
// https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
