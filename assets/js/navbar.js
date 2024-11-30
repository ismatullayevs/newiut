const navMenu = document.getElementById("nav-menu");
document.getElementById("nav-toggle").addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.getElementById("search-button").addEventListener("click", () => {
  document.getElementById("search").classList.add("active");
});

document.getElementById("cancel").addEventListener("click", () => {
  document.getElementById("search").classList.remove("active");
});
