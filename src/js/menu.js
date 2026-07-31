const menu = document.querySelector("#menu");
const openMenuBtn = document.querySelector("#menuOpen");

const toggleMenu = () => {
  menu.classList.toggle("open");
  openMenuBtn.classList.toggle("open");
};

openMenuBtn.addEventListener("click", toggleMenu);

const closeMenu = (event) => {
  const target = event.target;
  if (target.closest("[data-menu-link]")) {
    menu.classList.remove("open");
    openMenuBtn.classList.remove("open");
  }
};
menu.addEventListener("click", closeMenu);
