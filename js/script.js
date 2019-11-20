/* 
Cette variable représente la valeur du scroll, elle est à `false` de base 
étant donné que l'utilisateur n'est pas censé pouvoir scroller en arrivant sur le 
site 
*/
var checkScroll = false;

/* 
je viens initier la fonction vérifiant la valeur de du scroll grace a 
`checkScroll` et en positionnant l'overflow a scroll si `checkScroll` est à `true` 
et `hidden` si `checkScroll` est à `false`. 
(https://developer.mozilla.org/fr/docs/Web/CSS/overflow)
*/
const blockScroll = () => {
  if (checkScroll) {
    document.documentElement.style.overflow = "scroll";
  } else if (!checkScroll) {
    document.documentElement.style.overflow = "hidden";
  }
};

// j'appelle la fonction une première fois ici
blockScroll();
//

var btn = document.querySelector(".toggle_btn");
var nav = document.querySelector(".nav");
var tap = document.querySelector(".noscroll");

tap.onclick = function() {
  tap.classList.add("tapswap");
  /* 
Au click sur `.noscroll`, je viens définir `checkScroll` à `true` et je re appel 
la fonction qui du coup initie `overflow` en `scroll` qui libére le scroll
 */
  checkScroll = true;
  blockScroll();
  //
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
