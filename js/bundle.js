/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/btnPromo.js":
/*!************************************!*\
  !*** ./src/js/modules/btnPromo.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction btnPromo(linkSelector, aboutSelector, activeClass) {\n  const btnLink = document.querySelector(linkSelector),\n    btnAbout = document.querySelector(aboutSelector);\n  function btnActive() {\n    btnAbout.classList.toggle(activeClass);\n    btnLink.classList.toggle(activeClass);\n  }\n  btnAbout.addEventListener('click', btnActive);\n  btnLink.addEventListener('click', btnActive);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (btnPromo);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/btnPromo.js?");

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ \"./src/js/services/services.js\");\n\nfunction cards() {\n  class SkillsCards {\n    constructor(src, alt, title, descr, parentSelector) {\n      this.src = src;\n      this.alt = alt;\n      this.title = title;\n      this.descr = descr;\n      for (var _len = arguments.length, classes = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {\n        classes[_key - 5] = arguments[_key];\n      }\n      this.classes = classes;\n      this.parent = document.querySelector(parentSelector);\n    }\n    render() {\n      const element = document.createElement('div');\n      if (this.classes.length === 0) {\n        this.classes = \"skills__item\";\n        element.classList.add(this.classes);\n      } else {\n        this.classes.forEach(className => element.classList.add(className));\n      }\n      element.innerHTML = `\n                <div class=\"skills__item-icon\">\n                    <img src=${this.src} alt=${this.alt}>\n                </div>\n                <h3 class=\"title title_fz14\">${this.title}</h3>\n                <p>${this.descr}</p>\n            `;\n      this.parent.append(element);\n    }\n  }\n  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResources)('http://localhost:3000/skills').then(data => {\n    data.forEach(_ref => {\n      let {\n        img,\n        altimg,\n        title,\n        descr\n      } = _ref;\n      new SkillsCards(img, altimg, title, descr, '.skills .skills__wrapper').render();\n    });\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/cards.js?");

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction hamburger(navigationSelector, hamburgerSelector, activeClass) {\n  const navigation = document.querySelector(navigationSelector),\n    hamburger = document.querySelector(hamburgerSelector);\n  hamburger.addEventListener('click', () => {\n    navigation.classList.toggle(activeClass);\n  });\n}\n\n// module.exports = hamburger;\n/* harmony default export */ __webpack_exports__[\"default\"] = (hamburger);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/hamburger.js?");

/***/ }),

/***/ "./src/js/modules/navigation.js":
/*!**************************************!*\
  !*** ./src/js/modules/navigation.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction navigation(linksSelector, activeClass, sectionsSelector, indicatorSelector) {\n  const links = document.querySelectorAll(linksSelector),\n    indicator = document.querySelector(indicatorSelector),\n    sections = document.querySelectorAll(sectionsSelector);\n  function removeActiveClass() {\n    links.forEach(item => {\n      item.classList.remove(activeClass);\n    });\n  }\n  function scrollNavigation() {\n    sections.forEach(section => {\n      const link = document.querySelector(`a[href=\"#${section.id}\"]`),\n        top = window.scrollY,\n        offset = section.offsetTop - 250,\n        height = section.offsetHeight;\n      if (top >= offset && top < offset + height && link) {\n        const linkParent = link.parentNode;\n        removeActiveClass();\n        indicator.classList.remove('hide');\n        indicator.classList.add('show');\n        linkParent.classList.add(activeClass);\n      } else if (top <= 400 && link) {\n        const linkParent = link.parentNode;\n        linkParent.classList.remove(activeClass);\n        indicator.classList.remove('show');\n        indicator.classList.add('hide');\n      }\n    });\n  }\n  window.addEventListener('scroll', scrollNavigation);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/navigation.js?");

/***/ }),

/***/ "./src/js/modules/skills.js":
/*!**********************************!*\
  !*** ./src/js/modules/skills.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction skills(counterSelector, lineSelector) {\n  const counters = document.querySelectorAll(counterSelector),\n    lines = document.querySelectorAll(lineSelector);\n  counters.forEach((item, i) => {\n    lines[i].style.width = item.innerHTML;\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (skills);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/modules/skills.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ \"./src/js/modules/hamburger.js\");\n/* harmony import */ var _modules_btnPromo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/btnPromo */ \"./src/js/modules/btnPromo.js\");\n/* harmony import */ var _modules_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/skills */ \"./src/js/modules/skills.js\");\n/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navigation */ \"./src/js/modules/navigation.js\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ \"./src/js/modules/cards.js\");\n\n\n\n\n\n// import modal from './modules/modal';\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  // const hamburger = require('./modules/hamburger'),\n\n  (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.navigation', '.hamburger', 'active');\n  (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.navigation__link', 'active', 'section', '.indicator');\n  (0,_modules_btnPromo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.promo__link', '.promo__about', 'btn');\n  (0,_modules_skills__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.skills__ratings-counter', '.skills__ratings-line span');\n  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  // modal();\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js/script.js?");

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getResources: function() { return /* binding */ getResources; }\n/* harmony export */ });\n// const postData = async (url, data) => {\n//     const res = await fetch(url, {\n//         method: 'POST',\n//         headers: {\n//             'Content-type': 'application/json'\n//         },\n//         body: data\n//     });\n\n//     return await res.json();\n// };\n\nasync function getResources(url) {\n  let res = await fetch(url);\n  if (!res.ok) {\n    throw new Error(`Could not fetch ${url}, status: ${res.status}`);\n  }\n  return await res.json();\n}\n\n// export {postData};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/services/services.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;