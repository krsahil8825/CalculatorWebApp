const openMenuBtn = document.querySelector("span#openNavMenuBtn");
const closeMenuBtn = document.querySelector("span#closeNavMenuBtn");
const navMenu = document.querySelector("nav ul");

function openNavMenu() {
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  navMenu.style.display = "block";
}
function closeNavMenu() {
  openMenuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
  navMenu.style.display = "none";
}

let lastWidth = window.innerWidth;
let hasReloaded = false;

window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;

  if (!hasReloaded && lastWidth < 768 && currentWidth >= 768) {
    hasReloaded = true;
    location.reload();
  }

  lastWidth = currentWidth;
});
