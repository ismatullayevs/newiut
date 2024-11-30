document.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const breakpoint = window.innerHeight - 60;
  if (
    document.body.scrollTop >= breakpoint ||
    document.documentElement.scrollTop >= breakpoint
  ) {
    navbar.classList.remove("top");
  } else {
    navbar.classList.add("top");
  }
});

