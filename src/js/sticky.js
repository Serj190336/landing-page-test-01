const nav = document.querySelector("#nav");
const topOfNav = nav.offsetTop; // distance between menu bar and top of the window

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    nav.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    nav.classList.remove("fixed-nav");
  }
  console.log(topOfNav, nav.offsetHeight);
}
window.addEventListener("scroll", fixNav);

// let topOfNav = nav.offsetTop;
// function fixNav() {
//   if (window.scrollY >= topOfNav) {
//     document.body.style.paddingTop = nav.offsetHeight + "px";
//     document.body.classList.add("fixed-nav");
//   } else {
//     document.body.classList.remove("fixed-nav");
//     document.body.style.paddingTop = 0;
//   }
// }
// window.addEventListener("scroll", fixNav);
