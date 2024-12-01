const navMenu = document.getElementById("nav-menu");
document.getElementById("nav-toggle").addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


const search = document.getElementById("search")
document.getElementById("search-button").addEventListener("click", () => {
  search.classList.add("active");
});

document.getElementById("cancel").addEventListener("click", () => {
  search.classList.remove("active");
});
