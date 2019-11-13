var btn = document.querySelector(".toggle_btn");
var nav = document.querySelector(".nav");

btn.onclick = function() {
  nav.classList.toggle("nav_open");
};

var tap = document.querySelector(".noscroll");

tap.onclick = function() {
  tap.classList.add("tapswap");
};
