var btn = document.querySelector(".toggle_btn");
var nav = document.querySelector(".nav");
var tap = document.querySelector(".noscroll");

btn.onclick = function() {
  nav.classList.toggle("nav_open");
};

tap.onclick = function() {
  tap.classList.add("tapswap");
};
