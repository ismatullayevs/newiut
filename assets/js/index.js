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

const heading = document.createElement("h1");
heading.textContent = "Westminster";
const hero = document.querySelector("#hero .content");
hero.appendChild(heading);

document
  .getElementById("message-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const err = document.getElementById("error-messages");
    err.innerHTML = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let is_valid = true;
    const errors = [];

    if (name === "") {
      errors.push("Name is required.");
      is_valid = false;
    }

    if (email === "") {
      errors.push("Email is required.");
      is_valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.push("Please enter a valid email address.");
      is_valid = false;
    }

    if (message === "") {
      errors.push("Message is required.");
      is_valid = false;
    }

    if (!is_valid) {
      errors.forEach((error) => {
        const errorItem = document.createElement("div");
        errorItem.textContent = error;
        err.appendChild(errorItem);
      });
    } else {
      // send data using api
    }
  });
