var btn = document.querySelector(".toggle_btn");
var nav = document.querySelector(".nav");

btn.onclick = function() {
  nav.classList.toggle("nav_open");
};
//scroll taptoswap//
var tap = document.querySelector(".noscroll");

tap.onclick = function() {
  tap.classList.add("tapswap");
};
//reveals img by change opacity//

function revealImagesInViewport() {
  var scrollPosition = window.innerHeight + window.scrollY;

  window.requestAnimationFrame(function() {
    Array.from(document.querySelectorAll(".element")).forEach(img => {
      if (scrollPosition > img.offsetTop + 50) {
        img.classList.add("is-revealed");
      }
    });
  });
}

window.addEventListener("scroll", function() {
  revealImagesInViewport();
});
revealImagesInViewport();
