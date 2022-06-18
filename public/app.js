const menuButton = document.getElementById("mobile-menu");
const menu = document.getElementById("mobile-links");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
