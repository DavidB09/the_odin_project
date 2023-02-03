"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["main"],{

/***/ 676:
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 790:
/*!*****************************************!*\
  !*** ./src/assets/functions/contact.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const CONTACT = (() => {
    const divContainer = document.createElement('div');
    divContainer.classList = 'content-container contact';
    const innerHTML = `
        <div class="image-container">
            <h1>Contact</h1>
        </div>

        <div class="reserve-container">
            <h2>Make a Reservation</h2>

            <div class="row-container">
                <label for="reserve-date">
                    Date:
                    <input id="reserve-date" type="date" name="date"/>
                </label>
                <label for="reserve-time">
                    Time:
                    <input id="reserve-time" type="time" name="time"/>
                </label>
                <label for="reserve-guest">
                    # of Guests:
                    <input id="reserve-guest" type="number" name="guest" min="1" max="12"/>
                </label>
                <!--SET LIMIT ON TIME AND DATE-->
            </div>

            <div class="row-container">
                <label for="reserve-info">
                    Special Requests:
                    <textarea id="reserve-info"></textarea>
                </label>
            </div>

            <label for="reserve-email">
                Email:
                <input id="reserve-email" type="email" name="email" placeholder="Enter your email" />
            </label>
            <button type="submit">Submit Request</button>
        </div>

        <div class="contact-container">
            <h2>Contact Us!</h2>
            <p>Call us anytime at <a href="tel:1234567890">(123)-456-7890</a></p>
            <p>Or send an email to <a href="mailto:giannipizza@email.com">giannipizza@email.com</a></p>
        </div>

        <div class="address-container">
            <h2>Visit Us!</h2>
            <div class="hour-container">
                <h3>Hours:</h3>
                <p>Tuesday: 11:30 a.m. - 2:30 p.m.</p>
                <p>Wed, Thurs, Fri, Sat: 10:00am - 3:00 a.m.</p>
            </div>
            <p>We promise you won't regret trying out freshly baked pizza and Italian cuisine!</p>
            <p>123 Food Street, Fort Worth, TX 76179</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429270.7030494513!2d-97.28931895000001!3d32.80081295000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af8bf8dd69acbd!2sFort%20Worth%2C%20TX!5e0!3m2!1sen!2sus!4v1663365866352!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    `;

    divContainer.insertAdjacentHTML('afterbegin', innerHTML);
    return divContainer;
})();

/* harmony default export */ __webpack_exports__["default"] = (CONTACT);

/***/ }),

/***/ 890:
/*!**************************************!*\
  !*** ./src/assets/functions/home.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

const HOMEPAGE = (() => {
    const divContainer = document.createElement('div');
    divContainer.classList = 'content-container home';
    const innerHTML = `
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
    `;

    divContainer.insertAdjacentHTML('afterbegin', innerHTML);
    return divContainer;
})();

/* harmony default export */ __webpack_exports__["default"] = (HOMEPAGE);

/***/ }),

/***/ 918:
/*!**************************************!*\
  !*** ./src/assets/functions/menu.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const MENU = (() => {
    const divContainer = document.createElement('div');
    divContainer.classList = 'content-container menu';
    const innerHTML = `
        <div class="image-container">
            <h1>Menù</h1>
        </div>

        <div class="menu-container">
            <h2>Appetizers</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Pesto Breadsticks</h3>
                        <span class="line"></span>
                        <h3>$7</h3>
                    </div>
                    <p>Crunchy breadsticks baked with pesto and covered in mozzarella cheese</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Mamma's Home-spread</h3>
                        <span class="line"></span>
                        <h3>$8</h3>
                    </div>
                    <p>Eggplant spread seasoned with black pepper and garlic, served with toasted bread</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Caesar Salad</h3>
                        <span class="line"></span>
                        <h3>$10</h3>
                    </div>
                    <p>Fresh romaine served with crispy croutons, parmesan cheese, and homemade caesar dressing</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>House Green Salad</h3>
                        <span class="line"></span>
                        <h3>$10</h3>
                    </div>
                    <p>Mixed greens with chopped vegetables, parmesan, and house vinaigrette</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Beef Spiedini</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Delicious Italian-style kebabs holding marinated steak pinwheels and served with tomato dipping sauce</p>
                </div>
            </div>

            <h2>Pizzas</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Margherita</h3>
                        <span class="line"></span>
                        <h3>$25</h3>
                    </div>
                    <p>Delicious tomato and basil baked in mozzarella and tomato puree</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Prosciutto & Arugula</h3>
                        <span class="line"></span>
                        <h3>$25</h3>
                    </div>
                    <p>Smoked prosciutto topped with arugula, mushrooms, and parmesan in tomato puree</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Vegetariana</h3>
                        <span class="line"></span>
                        <h3>$25</h3>
                    </div>
                    <p>Roasted Peppers, aubergines, tomatoes, olives, and zucchini for healthy option without meat</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Quattro Formaggi</h3>
                        <span class="line"></span>
                        <h3>$20</h3>
                    </div>
                    <p>Creamy provolone, parmigiano reggiano, stracchino, and mozzarella combine for ultimate cheesiness</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Diavola</h3>
                        <span class="line"></span>
                        <h3>$20</h3>
                    </div>
                    <p>Classic pepperoni pizza made with spicy salami</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Frutti di Mare</h3>
                        <span class="line"></span>
                        <h3>$30</h3>
                    </div>
                    <p>Tasty shrimp and mussels combine with garlic and parsley for all our seafood lovers</p>
                </div>
            </div>

            <h2>Main Dishes</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Focaccia Barese</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Fresh olives, sliced sausage, and cherry tomatoes baked with potato-infused dough</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Barilla Lasagna</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Delicious ricotta cheese, mozzarella, and parmesan baked in layers of sausage and beef</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Fettuccine Alfredo</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Creamy alfredo sauce covering sliced chicken and fettuccine</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Pasta Napoletana</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Tasty spaghetti covered in marinara sauce, homemade meatballs, and parmesan cheese</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Pasta all'Ortolana</h3>
                        <span class="line"></span>
                        <h3>$15</h3>
                    </div>
                    <p>Roasted bell peppers, carrots, zucchini, and eggplant combine with creamy tomato sauce for vegan pasta</p>
                </div>
            </div>

            <h2>Beverages</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Soda</h3>
                        <span class="line"></span>
                        <h3>$2</h3>
                    </div>
                    <p>Dr. Pepper, Coca-Cola, Fanta, Sprite, or Barq's Root Beer, served with ice.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Sweet/Unsweet Tea</h3>
                        <span class="line"></span>
                        <h3>$3</h3>
                    </div>
                    <p>Freshly brewed and served with ice.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Lemonade</h3>
                        <span class="line"></span>
                        <h3>$3</h3>
                    </div>
                    <p>Choice of raspberry, strawberry, peach, or blueberry flavor is offered.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Pinot Bianco</h3>
                        <span class="line"></span>
                        <h3>$9 / $27</h3>
                    </div>
                    <p>Elegant white wine with refined hints of citrus, almonds, and ripe fruit.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Vietti Barbera</h3>
                        <span class="line"></span>
                        <h3>$10 / $30</h3>
                    </div>
                    <p>Classic red wine with rich, earthy fruit flavor.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Fattoria La Vialla</h3>
                        <span class="line"></span>
                        <h3>$12 / $32</h3>
                    </div>
                    <p>Sparkling wine with elegant aromas of lively green fruit, blossoms, and warm toast.</p>
                </div>
            </div>

            <h2>Desserts</h2>

            <div class="meals-container">
                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Gelato</h3>
                        <span class="line"></span>
                        <h3>$4</h3>
                    </div>
                    <p>Classic flavors like pistachio, dark chocolate, and stracciatella to invigorating raspberry, lemon, and strawberry.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Panna Cotta</h3>
                        <span class="line"></span>
                        <h3>$5</h3>
                    </div>
                    <p>Fresh custard-like cream topped with fresh fruit and drizzled with caramel sauce.</p>
                </div>

                <div class="meal-container">
                    <div class="meal-header">
                        <h3>Tiramisu</h3>
                        <span class="line"></span>
                        <h3>$7</h3>
                    </div>
                    <p>Delicious layers of creamy mascarpone and coffee-soaked ladyfingers, combined with hints of liquor.</p>
                </div>
            </div>
        </div>
    `;

    divContainer.insertAdjacentHTML('afterbegin', innerHTML);
    return divContainer;
})();

/* harmony default export */ __webpack_exports__["default"] = (MENU);

/***/ }),

/***/ 318:
/*!****************************************!*\
  !*** ./src/assets/functions/render.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderIMG": function() { return /* binding */ renderIMG; },
/* harmony export */   "renderPage": function() { return /* binding */ renderPage; }
/* harmony export */ });
/* harmony import */ var _svg_pizza_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg/pizza.svg */ 164);
/* harmony import */ var _svg_ubereats_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/ubereats.svg */ 82);
/* harmony import */ var _svg_grubhub_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/grubhub.svg */ 87);
/* harmony import */ var _svg_postmates_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/postmates.svg */ 886);
/* harmony import */ var _svg_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg/instagram.svg */ 895);
/* harmony import */ var _svg_twitter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg/twitter.svg */ 951);
/* harmony import */ var _svg_facebook_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../svg/facebook.svg */ 140);










const MAIN = document.querySelector('main');

function renderPage(pageHTML) {
    MAIN.innerHTML = "";
    MAIN.appendChild(pageHTML);

    const imgContainer = document.querySelector('div.image-container');
    // window.onscroll = () => {
    //     imgContainer.style.backgroundPosition = `center -${window.scrollY * 1.1}px`;
    // };
}

const renderIMG = {
    HEADER: () => {
        const PIZZA = document.querySelector('img.pizza');
        PIZZA.setAttribute('src', _svg_pizza_svg__WEBPACK_IMPORTED_MODULE_0__);
    },
    FOOTER: () => {
        const INSTAGRAM = document.querySelector('img.instagram');
        INSTAGRAM.setAttribute('src', _svg_instagram_svg__WEBPACK_IMPORTED_MODULE_4__);
    
        const TWITTER = document.querySelector('img.twitter');
        TWITTER.setAttribute('src', _svg_twitter_svg__WEBPACK_IMPORTED_MODULE_5__);
    
        const FACEBOOK = document.querySelector('img.facebook');
        FACEBOOK.setAttribute('src', _svg_facebook_svg__WEBPACK_IMPORTED_MODULE_6__);
    },
    HOME: () => {
        const UBER = document.querySelector('img.uber');
        UBER.setAttribute('src', _svg_ubereats_svg__WEBPACK_IMPORTED_MODULE_1__);
    
        const GRUBHUB = document.querySelector('img.grubhub');
        GRUBHUB.setAttribute('src', _svg_grubhub_svg__WEBPACK_IMPORTED_MODULE_2__);
    
        const POSTMATES = document.querySelector('img.postmates');
        POSTMATES.setAttribute('src', _svg_postmates_svg__WEBPACK_IMPORTED_MODULE_3__);
    },
};



/***/ }),

/***/ 495:
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ 676);
/* harmony import */ var _assets_functions_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/functions/home.js */ 890);
/* harmony import */ var _assets_functions_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/functions/menu.js */ 918);
/* harmony import */ var _assets_functions_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/functions/contact.js */ 790);
/* harmony import */ var _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/functions/render.js */ 318);







(function init() {
    _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderIMG.HEADER();
    _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderIMG.FOOTER();
    (0,_assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)(_assets_functions_home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderIMG.HOME();
})();

/***/ }),

/***/ 140:
/*!*************************************!*\
  !*** ./src/assets/svg/facebook.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ad0cb1401716d70ea27.svg";

/***/ }),

/***/ 87:
/*!************************************!*\
  !*** ./src/assets/svg/grubhub.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c9e34602cdcdf90a8942.svg";

/***/ }),

/***/ 895:
/*!**************************************!*\
  !*** ./src/assets/svg/instagram.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e28183337eda7f3d71fa.svg";

/***/ }),

/***/ 164:
/*!**********************************!*\
  !*** ./src/assets/svg/pizza.svg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1aed684f128ff5d430d7.svg";

/***/ }),

/***/ 886:
/*!**************************************!*\
  !*** ./src/assets/svg/postmates.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b5db2ba3cf1b35a380d5.svg";

/***/ }),

/***/ 951:
/*!************************************!*\
  !*** ./src/assets/svg/twitter.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fd562128b52ac86a3201.svg";

/***/ }),

/***/ 82:
/*!*************************************!*\
  !*** ./src/assets/svg/ubereats.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "388203212d0d5093c052.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(495));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELCtEQUFlLE9BQU87Ozs7Ozs7Ozs7OztBQy9EdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELCtEQUFlLFFBQVE7Ozs7Ozs7Ozs7O0FDeEN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsK0RBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BRcUI7O0FBRUU7QUFDRTtBQUNJOztBQUVBO0FBQ0o7QUFDRTs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQscUJBQXFCO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDJDQUFRO0FBQzFDLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLCtDQUFZO0FBQ2xEO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQVU7QUFDOUM7QUFDQTtBQUNBLHFDQUFxQyw4Q0FBVztBQUNoRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlDQUFpQyw4Q0FBTztBQUN4QztBQUNBO0FBQ0Esb0NBQW9DLDZDQUFVO0FBQzlDO0FBQ0E7QUFDQSxzQ0FBc0MsK0NBQVk7QUFDbEQsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ3NCOztBQUU0QjtBQUNBO0FBQ007QUFDYTs7QUFFckU7QUFDQSxJQUFJLHlFQUFnQjtBQUNwQixJQUFJLHlFQUFnQjtBQUNwQixJQUFJLHVFQUFVLENBQUMsaUVBQVE7QUFDdkIsSUFBSSx1RUFBYztBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzPzRkMjEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBDT05UQUNUID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0ID0gJ2NvbnRlbnQtY29udGFpbmVyIGNvbnRhY3QnO1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPkNvbnRhY3Q8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMj5NYWtlIGEgUmVzZXJ2YXRpb248L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzZXJ2ZS1kYXRlXCIgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLXRpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgVGltZTpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzZXJ2ZS10aW1lXCIgdHlwZT1cInRpbWVcIiBuYW1lPVwidGltZVwiLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLWd1ZXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICMgb2YgR3Vlc3RzOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNlcnZlLWd1ZXN0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJndWVzdFwiIG1pbj1cIjFcIiBtYXg9XCIxMlwiLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwhLS1TRVQgTElNSVQgT04gVElNRSBBTkQgREFURS0tPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc2VydmUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICBTcGVjaWFsIFJlcXVlc3RzOlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZXNlcnZlLWluZm9cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc2VydmUtZW1haWxcIj5cbiAgICAgICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNlcnZlLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQgUmVxdWVzdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMj5Db250YWN0IFVzITwvaDI+XG4gICAgICAgICAgICA8cD5DYWxsIHVzIGFueXRpbWUgYXQgPGEgaHJlZj1cInRlbDoxMjM0NTY3ODkwXCI+KDEyMyktNDU2LTc4OTA8L2E+PC9wPlxuICAgICAgICAgICAgPHA+T3Igc2VuZCBhbiBlbWFpbCB0byA8YSBocmVmPVwibWFpbHRvOmdpYW5uaXBpenphQGVtYWlsLmNvbVwiPmdpYW5uaXBpenphQGVtYWlsLmNvbTwvYT48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGRyZXNzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyPlZpc2l0IFVzITwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91ci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+SG91cnM6PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5UdWVzZGF5OiAxMTozMCBhLm0uIC0gMjozMCBwLm0uPC9wPlxuICAgICAgICAgICAgICAgIDxwPldlZCwgVGh1cnMsIEZyaSwgU2F0OiAxMDowMGFtIC0gMzowMCBhLm0uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD5XZSBwcm9taXNlIHlvdSB3b24ndCByZWdyZXQgdHJ5aW5nIG91dCBmcmVzaGx5IGJha2VkIHBpenphIGFuZCBJdGFsaWFuIGN1aXNpbmUhPC9wPlxuICAgICAgICAgICAgPHA+MTIzIEZvb2QgU3RyZWV0LCBGb3J0IFdvcnRoLCBUWCA3NjE3OTwvcD5cbiAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNDI5MjcwLjcwMzA0OTQ1MTMhMmQtOTcuMjg5MzE4OTUwMDAwMDEhM2QzMi44MDA4MTI5NTAwMDAwMSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODY0ZTZlMTIyZGM4MDdhZCUzQTB4YTRhZjhiZjhkZDY5YWNiZCEyc0ZvcnQlMjBXb3J0aCUyQyUyMFRYITVlMCEzbTIhMXNlbiEyc3VzITR2MTY2MzM2NTg2NjM1MiE1bTIhMXNlbiEyc3VzXCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkaXZDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaW5uZXJIVE1MKTtcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ09OVEFDVDsiLCJcbmNvbnN0IEhPTUVQQUdFID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0ID0gJ2NvbnRlbnQtY29udGFpbmVyIGhvbWUnO1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPkNpYW8gYSBHaWFubmkncyBQaXp6YSBTdG9wITwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2VsY29tZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMj5FbmpveSBhIHRhc3RlIG9mIEl0YWx5ITwvaDI+XG5cbiAgICAgICAgICAgIDxwPkNvbWUgc3RvcCBieSBmb3IgYSBvdmVuLWJha2VkIHBpenphIHRvcHBlZCB3aXRoIHNhdm91cnkgbWVhdCBhbmQgZnJlc2ggdmVnZXRhYmxlcywgYWxvbmcgd2l0aCByZWZyZXNoaW5nIGJldmVyYWdlcywgYW5kIGEgZGVsaWNpb3VzIGRlc3NlcnQgZm9yIHRoZSBncmFuIGZpbmFsZS4gV2hldGhlciBmb3IgYSBmYW1pbHkgbmlnaHQgb3V0LCBmaXJzdCBkYXRlLCBvciBnZXQgdG9nZXRoZXIgd2l0aCBvbGQgZnJpZW5kcywgb3VyIGF1dGhlbnRpYyBJdGFsaWFuIG1lYWxzIHdpbGwgbWFrZSB5b3UgZmVlbCByaWdodCBhdCBob21lLjwvcD5cblxuICAgICAgICAgICAgPGJ1dHRvbj5WaWV3IE1lbnU8L2J1dHRvbj5cblxuICAgICAgICAgICAgPHA+T3I8L3A+XG5cbiAgICAgICAgICAgIDxidXR0b24+TWFrZSBhIFJlc2VydmF0aW9uPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZGl2aWRlclwiPjwvc3Bhbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMz5WaXNpdCB1cyBpbiBkb3dudG93biBGb3J0IFdvcnRoITwvaDM+XG4gICAgICAgICAgICA8cD4xMjMgRm9vZCBTdHJlZXQsIEZvcnQgV29ydGgsIFRYIDc2MTc5PC9wPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPk9yZGVyIE9ubGluZSBhbmQgVGFrZW91dCE8L3A+XG5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidWJlclwiIC8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImdydWJodWJcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3N0bWF0ZXNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkaXZDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaW5uZXJIVE1MKTtcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgSE9NRVBBR0U7IiwiY29uc3QgTUVOVSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250ZW50LWNvbnRhaW5lciBtZW51JztcbiAgICBjb25zdCBpbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT5NZW7DuTwvaDE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgyPkFwcGV0aXplcnM8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBlc3RvIEJyZWFkc3RpY2tzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kNzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5DcnVuY2h5IGJyZWFkc3RpY2tzIGJha2VkIHdpdGggcGVzdG8gYW5kIGNvdmVyZWQgaW4gbW96emFyZWxsYSBjaGVlc2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+TWFtbWEncyBIb21lLXNwcmVhZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDg8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+RWdncGxhbnQgc3ByZWFkIHNlYXNvbmVkIHdpdGggYmxhY2sgcGVwcGVyIGFuZCBnYXJsaWMsIHNlcnZlZCB3aXRoIHRvYXN0ZWQgYnJlYWQ8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2Flc2FyIFNhbGFkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+RnJlc2ggcm9tYWluZSBzZXJ2ZWQgd2l0aCBjcmlzcHkgY3JvdXRvbnMsIHBhcm1lc2FuIGNoZWVzZSwgYW5kIGhvbWVtYWRlIGNhZXNhciBkcmVzc2luZzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ib3VzZSBHcmVlbiBTYWxhZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDEwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPk1peGVkIGdyZWVucyB3aXRoIGNob3BwZWQgdmVnZXRhYmxlcywgcGFybWVzYW4sIGFuZCBob3VzZSB2aW5haWdyZXR0ZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CZWVmIFNwaWVkaW5pPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+RGVsaWNpb3VzIEl0YWxpYW4tc3R5bGUga2ViYWJzIGhvbGRpbmcgbWFyaW5hdGVkIHN0ZWFrIHBpbndoZWVscyBhbmQgc2VydmVkIHdpdGggdG9tYXRvIGRpcHBpbmcgc2F1Y2U8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgyPlBpenphczwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+TWFyZ2hlcml0YTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDI1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyB0b21hdG8gYW5kIGJhc2lsIGJha2VkIGluIG1venphcmVsbGEgYW5kIHRvbWF0byBwdXJlZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Qcm9zY2l1dHRvICYgQXJ1Z3VsYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDI1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlNtb2tlZCBwcm9zY2l1dHRvIHRvcHBlZCB3aXRoIGFydWd1bGEsIG11c2hyb29tcywgYW5kIHBhcm1lc2FuIGluIHRvbWF0byBwdXJlZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5WZWdldGFyaWFuYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDI1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlJvYXN0ZWQgUGVwcGVycywgYXViZXJnaW5lcywgdG9tYXRvZXMsIG9saXZlcywgYW5kIHp1Y2NoaW5pIGZvciBoZWFsdGh5IG9wdGlvbiB3aXRob3V0IG1lYXQ8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UXVhdHRybyBGb3JtYWdnaTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDIwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNyZWFteSBwcm92b2xvbmUsIHBhcm1pZ2lhbm8gcmVnZ2lhbm8sIHN0cmFjY2hpbm8sIGFuZCBtb3p6YXJlbGxhIGNvbWJpbmUgZm9yIHVsdGltYXRlIGNoZWVzaW5lc3M8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RGlhdm9sYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDIwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNsYXNzaWMgcGVwcGVyb25pIHBpenphIG1hZGUgd2l0aCBzcGljeSBzYWxhbWk8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RnJ1dHRpIGRpIE1hcmU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQzMDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5UYXN0eSBzaHJpbXAgYW5kIG11c3NlbHMgY29tYmluZSB3aXRoIGdhcmxpYyBhbmQgcGFyc2xleSBmb3IgYWxsIG91ciBzZWFmb29kIGxvdmVyczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDI+TWFpbiBEaXNoZXM8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZvY2FjY2lhIEJhcmVzZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDE1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkZyZXNoIG9saXZlcywgc2xpY2VkIHNhdXNhZ2UsIGFuZCBjaGVycnkgdG9tYXRvZXMgYmFrZWQgd2l0aCBwb3RhdG8taW5mdXNlZCBkb3VnaDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CYXJpbGxhIExhc2FnbmE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5EZWxpY2lvdXMgcmljb3R0YSBjaGVlc2UsIG1venphcmVsbGEsIGFuZCBwYXJtZXNhbiBiYWtlZCBpbiBsYXllcnMgb2Ygc2F1c2FnZSBhbmQgYmVlZjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GZXR0dWNjaW5lIEFsZnJlZG88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5DcmVhbXkgYWxmcmVkbyBzYXVjZSBjb3ZlcmluZyBzbGljZWQgY2hpY2tlbiBhbmQgZmV0dHVjY2luZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYXN0YSBOYXBvbGV0YW5hPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VGFzdHkgc3BhZ2hldHRpIGNvdmVyZWQgaW4gbWFyaW5hcmEgc2F1Y2UsIGhvbWVtYWRlIG1lYXRiYWxscywgYW5kIHBhcm1lc2FuIGNoZWVzZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYXN0YSBhbGwnT3J0b2xhbmE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5Sb2FzdGVkIGJlbGwgcGVwcGVycywgY2Fycm90cywgenVjY2hpbmksIGFuZCBlZ2dwbGFudCBjb21iaW5lIHdpdGggY3JlYW15IHRvbWF0byBzYXVjZSBmb3IgdmVnYW4gcGFzdGE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgyPkJldmVyYWdlczwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U29kYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDI8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+RHIuIFBlcHBlciwgQ29jYS1Db2xhLCBGYW50YSwgU3ByaXRlLCBvciBCYXJxJ3MgUm9vdCBCZWVyLCBzZXJ2ZWQgd2l0aCBpY2UuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlN3ZWV0L1Vuc3dlZXQgVGVhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5GcmVzaGx5IGJyZXdlZCBhbmQgc2VydmVkIHdpdGggaWNlLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5MZW1vbmFkZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q2hvaWNlIG9mIHJhc3BiZXJyeSwgc3RyYXdiZXJyeSwgcGVhY2gsIG9yIGJsdWViZXJyeSBmbGF2b3IgaXMgb2ZmZXJlZC48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGlub3QgQmlhbmNvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kOSAvICQyNzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5FbGVnYW50IHdoaXRlIHdpbmUgd2l0aCByZWZpbmVkIGhpbnRzIG9mIGNpdHJ1cywgYWxtb25kcywgYW5kIHJpcGUgZnJ1aXQuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlZpZXR0aSBCYXJiZXJhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTAgLyAkMzA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q2xhc3NpYyByZWQgd2luZSB3aXRoIHJpY2gsIGVhcnRoeSBmcnVpdCBmbGF2b3IuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZhdHRvcmlhIExhIFZpYWxsYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDEyIC8gJDMyPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlNwYXJrbGluZyB3aW5lIHdpdGggZWxlZ2FudCBhcm9tYXMgb2YgbGl2ZWx5IGdyZWVuIGZydWl0LCBibG9zc29tcywgYW5kIHdhcm0gdG9hc3QuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMj5EZXNzZXJ0czwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+R2VsYXRvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kNDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5DbGFzc2ljIGZsYXZvcnMgbGlrZSBwaXN0YWNoaW8sIGRhcmsgY2hvY29sYXRlLCBhbmQgc3RyYWNjaWF0ZWxsYSB0byBpbnZpZ29yYXRpbmcgcmFzcGJlcnJ5LCBsZW1vbiwgYW5kIHN0cmF3YmVycnkuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBhbm5hIENvdHRhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5GcmVzaCBjdXN0YXJkLWxpa2UgY3JlYW0gdG9wcGVkIHdpdGggZnJlc2ggZnJ1aXQgYW5kIGRyaXp6bGVkIHdpdGggY2FyYW1lbCBzYXVjZS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+VGlyYW1pc3U8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQ3PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyBsYXllcnMgb2YgY3JlYW15IG1hc2NhcnBvbmUgYW5kIGNvZmZlZS1zb2FrZWQgbGFkeWZpbmdlcnMsIGNvbWJpbmVkIHdpdGggaGludHMgb2YgbGlxdW9yLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgZGl2Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGlubmVySFRNTCk7XG4gICAgcmV0dXJuIGRpdkNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1FTlU7IiwiaW1wb3J0IHBpenphU3ZnIGZyb20gJy4uL3N2Zy9waXp6YS5zdmcnO1xuXG5pbXBvcnQgdWJlclN2ZyBmcm9tICcuLi9zdmcvdWJlcmVhdHMuc3ZnJztcbmltcG9ydCBncnViaHViU3ZnIGZyb20gJy4uL3N2Zy9ncnViaHViLnN2Zyc7XG5pbXBvcnQgcG9zdG1hdGVzU3ZnIGZyb20gJy4uL3N2Zy9wb3N0bWF0ZXMuc3ZnJztcblxuaW1wb3J0IGluc3RhZ3JhbVN2ZyBmcm9tICcuLi9zdmcvaW5zdGFncmFtLnN2Zyc7XG5pbXBvcnQgdHdpdHRlclN2ZyBmcm9tICcuLi9zdmcvdHdpdHRlci5zdmcnO1xuaW1wb3J0IGZhY2Vib29rU3ZnIGZyb20gJy4uL3N2Zy9mYWNlYm9vay5zdmcnO1xuXG5jb25zdCBNQUlOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5mdW5jdGlvbiByZW5kZXJQYWdlKHBhZ2VIVE1MKSB7XG4gICAgTUFJTi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIE1BSU4uYXBwZW5kQ2hpbGQocGFnZUhUTUwpO1xuXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmltYWdlLWNvbnRhaW5lcicpO1xuICAgIC8vIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAvLyAgICAgaW1nQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGBjZW50ZXIgLSR7d2luZG93LnNjcm9sbFkgKiAxLjF9cHhgO1xuICAgIC8vIH07XG59XG5cbmNvbnN0IHJlbmRlcklNRyA9IHtcbiAgICBIRUFERVI6ICgpID0+IHtcbiAgICAgICAgY29uc3QgUElaWkEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcucGl6emEnKTtcbiAgICAgICAgUElaWkEuc2V0QXR0cmlidXRlKCdzcmMnLCBwaXp6YVN2Zyk7XG4gICAgfSxcbiAgICBGT09URVI6ICgpID0+IHtcbiAgICAgICAgY29uc3QgSU5TVEFHUkFNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmluc3RhZ3JhbScpO1xuICAgICAgICBJTlNUQUdSQU0uc2V0QXR0cmlidXRlKCdzcmMnLCBpbnN0YWdyYW1TdmcpO1xuICAgIFxuICAgICAgICBjb25zdCBUV0lUVEVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnR3aXR0ZXInKTtcbiAgICAgICAgVFdJVFRFUi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHR3aXR0ZXJTdmcpO1xuICAgIFxuICAgICAgICBjb25zdCBGQUNFQk9PSyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5mYWNlYm9vaycpO1xuICAgICAgICBGQUNFQk9PSy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZhY2Vib29rU3ZnKTtcbiAgICB9LFxuICAgIEhPTUU6ICgpID0+IHtcbiAgICAgICAgY29uc3QgVUJFUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy51YmVyJyk7XG4gICAgICAgIFVCRVIuc2V0QXR0cmlidXRlKCdzcmMnLCB1YmVyU3ZnKTtcbiAgICBcbiAgICAgICAgY29uc3QgR1JVQkhVQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5ncnViaHViJyk7XG4gICAgICAgIEdSVUJIVUIuc2V0QXR0cmlidXRlKCdzcmMnLCBncnViaHViU3ZnKTtcbiAgICBcbiAgICAgICAgY29uc3QgUE9TVE1BVEVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnBvc3RtYXRlcycpO1xuICAgICAgICBQT1NUTUFURVMuc2V0QXR0cmlidXRlKCdzcmMnLCBwb3N0bWF0ZXNTdmcpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgeyByZW5kZXJQYWdlLCByZW5kZXJJTUcgfTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCBob21lUGFnZSBmcm9tICcuL2Fzc2V0cy9mdW5jdGlvbnMvaG9tZS5qcyc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9hc3NldHMvZnVuY3Rpb25zL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vYXNzZXRzL2Z1bmN0aW9ucy9jb250YWN0LmpzJztcbmltcG9ydCB7IHJlbmRlclBhZ2UsIHJlbmRlcklNRyB9IGZyb20gJy4vYXNzZXRzL2Z1bmN0aW9ucy9yZW5kZXIuanMnO1xuXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgICByZW5kZXJJTUcuSEVBREVSKCk7XG4gICAgcmVuZGVySU1HLkZPT1RFUigpO1xuICAgIHJlbmRlclBhZ2UoaG9tZVBhZ2UpO1xuICAgIHJlbmRlcklNRy5IT01FKCk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==