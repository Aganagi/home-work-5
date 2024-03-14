window.addEventListener("scroll", function () {
  let head = document.getElementById("header-nav");
  if (window.scrollY > 0) {
    head.classList.add("scrolled");
  } else {
    head.classList.remove("scrolled");
  }
});
