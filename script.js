const navbar = document.querySelector("div.navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000) {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    navbar.style.backgroundColor = "#e7e9cd";
  } else if (window.scrollY < 1000) {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
});

function select(selection) {
  const nav = document.getElementById(selection);
  if (document.querySelector("li.active")) {
    document.querySelector("li.active").classList.remove("active");
  }
  nav.classList.add("active");
}
