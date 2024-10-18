const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle_menu");

toggleMenu.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  toggleMenu.classList.toggle("open");
});
