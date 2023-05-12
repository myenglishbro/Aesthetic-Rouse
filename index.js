window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar-scrolled", window.scrollY > 0);
});