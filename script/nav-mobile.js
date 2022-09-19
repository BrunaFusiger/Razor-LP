const buttonNavMobile = document.querySelector(".menu-mobile-img");
const menuMobile = document.querySelector(".nav-bar");
const buttonCloseNavMobile = document.querySelector(".menu-mobile-img-close");
const itensNav = document.querySelectorAll(".nav-bar ul li a");
const buttonNavOpen = document.querySelector(".btn-16")

buttonNavMobile.addEventListener("click", () => {
  menuMobile.style.display = "block";
  buttonCloseNavMobile.style.display = "block";
  body.classList.add("overflow");
  setTimeout(() => {
    menuMobile.classList.add("show");
    buttonCloseNavMobile.classList.add("show");
  }, 0);
});

function closeMenu() {
  menuMobile.style.display = "none";
  buttonCloseNavMobile.style.display = "none";
  body.classList.remove("overflow");
  setTimeout(() => {
    menuMobile.classList.remove("show");
    buttonCloseNavMobile.classList.remove("show");
  }, 500);
}

buttonCloseNavMobile.addEventListener("click", closeMenu);

itensNav.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

buttonNavOpen.addEventListener("click", closeMenu)

