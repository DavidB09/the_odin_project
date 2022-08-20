"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["main"],{

/***/ 342:
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 890:
/*!**************************************!*\
  !*** ./src/assets/functions/home.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const HOMEPAGE = `
    <div class="content-container home">
        <div class="image-container">
            <h1>Ciao a Gianni's Pizza Stop!</h1>
        </div>
        <div class="welcome-container">
            <h2>Enjoy a taste of Italy!</h2>

            <p>Come stop by for a oven-baked pizza topped with savoury meat and fresh vegetables, along with refreshing beverages, and a delicious dessert for the gran finale. Whether for a family night out, first date, or get together with old friends, our authentic Italian meals will make you feel right at home.</p>

            <button>View Menu</button>

            <p>Or</p>

            <button>Make a Reservation</button>
        </div>

        <span class="divider"></span>

        <div class="info-container">
            <h3>Visit us in downtown Fort Worth!</h3>
            <p>123 Food Street, Fort Worth, TX 76179</p>

            <div>
                <p>Order Online and Takeout!</p>

                <img class="uber" />
                <img class="grubhub" />
                <img class="postmates" />
            </div>
        </div>
    </div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HOMEPAGE);

/***/ }),

/***/ 318:
/*!****************************************!*\
  !*** ./src/assets/functions/render.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderIMG": () => (/* binding */ renderIMG),
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _svg_pizza_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/pizza.svg */ 738);
/* harmony import */ var _svg_ubereats_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/ubereats.svg */ 377);
/* harmony import */ var _svg_grubhub_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/grubhub.svg */ 137);
/* harmony import */ var _svg_postmates_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/postmates.svg */ 17);
/* harmony import */ var _svg_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg/instagram.svg */ 633);
/* harmony import */ var _svg_twitter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg/twitter.svg */ 402);
/* harmony import */ var _svg_facebook_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../svg/facebook.svg */ 196);










const MAIN = document.querySelector('main');

function renderPage(pageHTML) {
    MAIN.innerHTML = "";
    MAIN.insertAdjacentHTML("afterbegin", pageHTML);

    const imgContainer = document.querySelector('div.image-container');
    window.onscroll = () => {
        imgContainer.style.backgroundPosition = `center -${window.scrollY * 1.1}px`;
    };
}

const renderIMG = {
    HOME: () => {
        const PIZZA = document.querySelector('img.pizza');
        PIZZA.setAttribute('src', _svg_pizza_svg__WEBPACK_IMPORTED_MODULE_0__);
    
        const UBER = document.querySelector('img.uber');
        UBER.setAttribute('src', _svg_ubereats_svg__WEBPACK_IMPORTED_MODULE_1__);
    
        const GRUBHUB = document.querySelector('img.grubhub');
        GRUBHUB.setAttribute('src', _svg_grubhub_svg__WEBPACK_IMPORTED_MODULE_2__);
    
        const POSTMATES = document.querySelector('img.postmates');
        POSTMATES.setAttribute('src', _svg_postmates_svg__WEBPACK_IMPORTED_MODULE_3__);
    },
    FOOTER: () => {
        const INSTAGRAM = document.querySelector('img.instagram');
        INSTAGRAM.setAttribute('src', _svg_instagram_svg__WEBPACK_IMPORTED_MODULE_4__);
    
        const TWITTER = document.querySelector('img.twitter');
        TWITTER.setAttribute('src', _svg_twitter_svg__WEBPACK_IMPORTED_MODULE_5__);
    
        const FACEBOOK = document.querySelector('img.facebook');
        FACEBOOK.setAttribute('src', _svg_facebook_svg__WEBPACK_IMPORTED_MODULE_6__);
    },
};



/***/ }),

/***/ 495:
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ 342);
/* harmony import */ var _assets_functions_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/functions/home.js */ 890);
/* harmony import */ var _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/functions/render.js */ 318);





(function init() {
    _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_2__.renderIMG.FOOTER();
    // renderPage(homePage);
    _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_2__.renderIMG.HOME();
})();

/***/ }),

/***/ 196:
/*!*************************************!*\
  !*** ./src/assets/svg/facebook.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca151901440d41840373.svg";

/***/ }),

/***/ 137:
/*!************************************!*\
  !*** ./src/assets/svg/grubhub.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6b34da35df15d497ca5.svg";

/***/ }),

/***/ 633:
/*!**************************************!*\
  !*** ./src/assets/svg/instagram.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2581af20de91c77679ff.svg";

/***/ }),

/***/ 738:
/*!**********************************!*\
  !*** ./src/assets/svg/pizza.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a95751659bfb9dd1cff9.svg";

/***/ }),

/***/ 17:
/*!**************************************!*\
  !*** ./src/assets/svg/postmates.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c0168350429a22db331.svg";

/***/ }),

/***/ 402:
/*!************************************!*\
  !*** ./src/assets/svg/twitter.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e271bbdba70f2b9de68c.svg";

/***/ }),

/***/ 377:
/*!*************************************!*\
  !*** ./src/assets/svg/ubereats.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "274d3de4eeb70732c49e.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(495));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DaUI7QUFDeEM7QUFDMEM7QUFDRTtBQUNJO0FBQ2hEO0FBQ2dEO0FBQ0o7QUFDRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQscUJBQXFCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyQ0FBUTtBQUMxQztBQUNBO0FBQ0EsaUNBQWlDLDhDQUFPO0FBQ3hDO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQVU7QUFDOUM7QUFDQTtBQUNBLHNDQUFzQywrQ0FBWTtBQUNsRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQywrQ0FBWTtBQUNsRDtBQUNBO0FBQ0Esb0NBQW9DLDZDQUFVO0FBQzlDO0FBQ0E7QUFDQSxxQ0FBcUMsOENBQVc7QUFDaEQsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9Dc0I7QUFDdEI7QUFDa0Q7QUFDbUI7QUFDckU7QUFDQTtBQUNBLElBQUkseUVBQWdCO0FBQ3BCO0FBQ0EsSUFBSSx1RUFBYztBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzP2E4OGIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcclxuY29uc3QgSE9NRVBBR0UgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXIgaG9tZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxPkNpYW8gYSBHaWFubmkncyBQaXp6YSBTdG9wITwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndlbGNvbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMj5FbmpveSBhIHRhc3RlIG9mIEl0YWx5ITwvaDI+XHJcblxyXG4gICAgICAgICAgICA8cD5Db21lIHN0b3AgYnkgZm9yIGEgb3Zlbi1iYWtlZCBwaXp6YSB0b3BwZWQgd2l0aCBzYXZvdXJ5IG1lYXQgYW5kIGZyZXNoIHZlZ2V0YWJsZXMsIGFsb25nIHdpdGggcmVmcmVzaGluZyBiZXZlcmFnZXMsIGFuZCBhIGRlbGljaW91cyBkZXNzZXJ0IGZvciB0aGUgZ3JhbiBmaW5hbGUuIFdoZXRoZXIgZm9yIGEgZmFtaWx5IG5pZ2h0IG91dCwgZmlyc3QgZGF0ZSwgb3IgZ2V0IHRvZ2V0aGVyIHdpdGggb2xkIGZyaWVuZHMsIG91ciBhdXRoZW50aWMgSXRhbGlhbiBtZWFscyB3aWxsIG1ha2UgeW91IGZlZWwgcmlnaHQgYXQgaG9tZS48L3A+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uPlZpZXcgTWVudTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPHA+T3I8L3A+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uPk1ha2UgYSBSZXNlcnZhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImRpdmlkZXJcIj48L3NwYW4+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDM+VmlzaXQgdXMgaW4gZG93bnRvd24gRm9ydCBXb3J0aCE8L2gzPlxyXG4gICAgICAgICAgICA8cD4xMjMgRm9vZCBTdHJlZXQsIEZvcnQgV29ydGgsIFRYIDc2MTc5PC9wPlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPk9yZGVyIE9ubGluZSBhbmQgVGFrZW91dCE8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInViZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImdydWJodWJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBvc3RtYXRlc1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIT01FUEFHRTsiLCJpbXBvcnQgcGl6emFTdmcgZnJvbSAnLi4vc3ZnL3BpenphLnN2Zyc7XHJcblxyXG5pbXBvcnQgdWJlclN2ZyBmcm9tICcuLi9zdmcvdWJlcmVhdHMuc3ZnJztcclxuaW1wb3J0IGdydWJodWJTdmcgZnJvbSAnLi4vc3ZnL2dydWJodWIuc3ZnJztcclxuaW1wb3J0IHBvc3RtYXRlc1N2ZyBmcm9tICcuLi9zdmcvcG9zdG1hdGVzLnN2Zyc7XHJcblxyXG5pbXBvcnQgaW5zdGFncmFtU3ZnIGZyb20gJy4uL3N2Zy9pbnN0YWdyYW0uc3ZnJztcclxuaW1wb3J0IHR3aXR0ZXJTdmcgZnJvbSAnLi4vc3ZnL3R3aXR0ZXIuc3ZnJztcclxuaW1wb3J0IGZhY2Vib29rU3ZnIGZyb20gJy4uL3N2Zy9mYWNlYm9vay5zdmcnO1xyXG5cclxuY29uc3QgTUFJTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UocGFnZUhUTUwpIHtcclxuICAgIE1BSU4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIE1BSU4uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBwYWdlSFRNTCk7XHJcblxyXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmltYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGltZ0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgY2VudGVyIC0ke3dpbmRvdy5zY3JvbGxZICogMS4xfXB4YDtcclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlcklNRyA9IHtcclxuICAgIEhPTUU6ICgpID0+IHtcclxuICAgICAgICBjb25zdCBQSVpaQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5waXp6YScpO1xyXG4gICAgICAgIFBJWlpBLnNldEF0dHJpYnV0ZSgnc3JjJywgcGl6emFTdmcpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgVUJFUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy51YmVyJyk7XHJcbiAgICAgICAgVUJFUi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHViZXJTdmcpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgR1JVQkhVQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5ncnViaHViJyk7XHJcbiAgICAgICAgR1JVQkhVQi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdydWJodWJTdmcpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgUE9TVE1BVEVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnBvc3RtYXRlcycpO1xyXG4gICAgICAgIFBPU1RNQVRFUy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBvc3RtYXRlc1N2Zyk7XHJcbiAgICB9LFxyXG4gICAgRk9PVEVSOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgSU5TVEFHUkFNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmluc3RhZ3JhbScpO1xyXG4gICAgICAgIElOU1RBR1JBTS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGluc3RhZ3JhbVN2Zyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBUV0lUVEVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnR3aXR0ZXInKTtcclxuICAgICAgICBUV0lUVEVSLnNldEF0dHJpYnV0ZSgnc3JjJywgdHdpdHRlclN2Zyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBGQUNFQk9PSyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5mYWNlYm9vaycpO1xyXG4gICAgICAgIEZBQ0VCT09LLnNldEF0dHJpYnV0ZSgnc3JjJywgZmFjZWJvb2tTdmcpO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IHJlbmRlclBhZ2UsIHJlbmRlcklNRyB9OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbmltcG9ydCBob21lUGFnZSBmcm9tICcuL2Fzc2V0cy9mdW5jdGlvbnMvaG9tZS5qcyc7XHJcbmltcG9ydCB7IHJlbmRlclBhZ2UsIHJlbmRlcklNRyB9IGZyb20gJy4vYXNzZXRzL2Z1bmN0aW9ucy9yZW5kZXIuanMnO1xyXG5cclxuKGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICByZW5kZXJJTUcuRk9PVEVSKCk7XHJcbiAgICAvLyByZW5kZXJQYWdlKGhvbWVQYWdlKTtcclxuICAgIHJlbmRlcklNRy5IT01FKCk7XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9