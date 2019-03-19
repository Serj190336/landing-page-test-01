import applySmoothScroll from "./smooth-scroll.js";

const navbar = document.querySelector("#navbar");
const maxPhoneWidth = 768;

// render html of big-navbar
function fullNav() {
  navbar.innerHTML = `<div class="header-nav container-0-padding" id="nav">
  <a href="#"
    ><img
      src="images/valtech.svg"
      alt="Valtech_ Logo"
      class="header-nav__logo"
  /></a>
  <div class="header-nav__btns">
    <div class="header-nav__btns-wrap"><a href="#anchor-services">Services</a></div>
    <div class="header-nav__btns-wrap"><a href="#anchor-clients">Clients</a></div>
    <div class="header-nav__btns-wrap"><a href="#anchor-team">Our team</a></div>
    <div class="header-nav__btns-wrap"><a href="#">Contact Us</a></div>
  </div>
</div>`;
}

// render html of small-navbar
function smallNav() {
  navbar.innerHTML = `
  <img
      src="images/valtech.svg"
      alt="Valtech_ Logo"
      class="logo-pos-fixed"
  />
  <div class="nav-burg-toggle">
  <div class="nav-burg-toggle-bar"></div>
  </div>
  <div class="nav-burg">
    <ul>
    <li><a href="#anchor-services">Services</a></li>
    <li><a href="#anchor-clients">Clients</a></li>
    <li><a href="#anchor-team">Our team</a></li>
    <li><a href="#">Contact Us</a></li>
    </ul>
    </div>`;
}

// Load and render navbar depending on screen width
function loadNav() {
  if (window.screen.width >= maxPhoneWidth) {
    renderFullNav();
  } else {
    renderSmallNav();
  }
}

// Big screens navbar
const renderFullNav = () => {
  fullNav(); // render html of big-navbar
  const nav = document.querySelector("#nav");
  const topOfNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      nav.classList.add("fixed-nav");
    } else {
      nav.classList.remove("fixed-nav");
    }
  }
  fixNav(); // check for Y offset to stick menu to the top
  window.addEventListener("scroll", fixNav);

  applySmoothScroll(); // smooth scrolling to anchors
};

// Small screens navbar
const renderSmallNav = () => {
  smallNav(); // render html of small-navbar
  const hamburger = {
    navToggle: document.querySelector(".nav-burg-toggle"),
    nav: document.querySelector(".nav-burg"),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle("expanded");
      this.nav.classList.toggle("expanded");
    }
  };

  hamburger.navToggle.addEventListener("click", function(e) {
    hamburger.doToggle(e);
  });
  hamburger.nav.addEventListener("click", function(e) {
    hamburger.doToggle(e);
  });

  applySmoothScroll(); // smooth scrolling to anchors
};

// Check user screen size when content loaded
document.addEventListener("DOMContentLoaded", loadNav);
// Check user screen size when resizing screen
window.onresize = loadNav;
