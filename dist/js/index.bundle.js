/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/smooth-scroll.js
// smooth scrolling to anchors
var applySmoothScroll = function applySmoothScroll() {
  var anchorlinks = document.querySelectorAll('a[href^="#anchor-"]');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var item = _step.value;
      // relitere
      item.addEventListener("click", function (e) {
        var hashval = item.getAttribute("href");
        var target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
      });
    };

    for (var _iterator = anchorlinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/* harmony default export */ var smooth_scroll = (applySmoothScroll);
// CONCATENATED MODULE: ./src/js/navbar.js

var navbar = document.querySelector("#navbar");
var maxPhoneWidth = 768; // render html of big-navbar

function fullNav() {
  navbar.innerHTML = "<div class=\"header-nav container-0-padding\" id=\"nav\">\n  <a href=\"#\"\n    ><img\n      src=\"images/valtech.svg\"\n      alt=\"Valtech_ Logo\"\n      class=\"header-nav__logo\"\n  /></a>\n  <div class=\"header-nav__btns\">\n    <div class=\"header-nav__btns-wrap\"><a href=\"#anchor-services\">Services</a></div>\n    <div class=\"header-nav__btns-wrap\"><a href=\"#anchor-clients\">Clients</a></div>\n    <div class=\"header-nav__btns-wrap\"><a href=\"#anchor-team\">Our team</a></div>\n    <div class=\"header-nav__btns-wrap\"><a href=\"#\">Contact Us</a></div>\n  </div>\n</div>";
} // render html of small-navbar


function smallNav() {
  navbar.innerHTML = "\n  <img\n      src=\"images/valtech.svg\"\n      alt=\"Valtech_ Logo\"\n      class=\"logo-pos-fixed\"\n  />\n  <div class=\"nav-burg-toggle\">\n  <div class=\"nav-burg-toggle-bar\"></div>\n  </div>\n  <div class=\"nav-burg\">\n    <ul>\n    <li><a href=\"#anchor-services\">Services</a></li>\n    <li><a href=\"#anchor-clients\">Clients</a></li>\n    <li><a href=\"#anchor-team\">Our team</a></li>\n    <li><a href=\"#\">Contact Us</a></li>\n    </ul>\n    </div>";
} // Load and render navbar depending on screen width


function loadNav() {
  if (window.screen.width >= maxPhoneWidth) {
    navbar_renderFullNav();
  } else {
    navbar_renderSmallNav();
  }
} // Big screens navbar


var navbar_renderFullNav = function renderFullNav() {
  fullNav(); // render html of big-navbar

  var nav = document.querySelector("#nav");
  var topOfNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      nav.classList.add("fixed-nav");
    } else {
      nav.classList.remove("fixed-nav");
    }
  }

  fixNav(); // check for Y offset to stick menu to the top

  window.addEventListener("scroll", fixNav);
  smooth_scroll(); // smooth scrolling to anchors
}; // Small screens navbar


var navbar_renderSmallNav = function renderSmallNav() {
  smallNav(); // render html of small-navbar

  var hamburger = {
    navToggle: document.querySelector(".nav-burg-toggle"),
    nav: document.querySelector(".nav-burg"),
    doToggle: function doToggle(e) {
      e.preventDefault();
      this.navToggle.classList.toggle("expanded");
      this.nav.classList.toggle("expanded");
    }
  };
  hamburger.navToggle.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
  hamburger.nav.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
  smooth_scroll(); // smooth scrolling to anchors
}; // Check user screen size when content loaded


document.addEventListener("DOMContentLoaded", loadNav); // Check user screen size when resizing screen

window.onresize = loadNav;
// CONCATENATED MODULE: ./src/js/index.js
 // main SASS file

 // JS sticky menu

/***/ })
/******/ ]);