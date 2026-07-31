const menu = document.querySelector("#menu");
const openMenuBtn = document.querySelector("#menuOpen");

const toggleMenu = () => {
  menu.classList.toggle("open");
  openMenuBtn.classList.toggle("open");
};

openMenuBtn.addEventListener("click", toggleMenu);
