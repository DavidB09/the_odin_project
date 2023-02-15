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
            <img class="background-image" />
        </div>

        <div class="background-container">

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
            <img class="background-image" />
        </div>

        <div class="background-container">

            <div class="welcome-container">
                <h2>Enjoy a taste of Italy!</h2>

                <p>Come stop by for a oven-baked pizza topped with savoury meat and fresh vegetables, along with refreshing beverages, and a delicious dessert for the gran finale. Whether for a family night out, first date, or get together with old friends, our authentic Italian meals will make you feel right at home.</p>

                <button class="menu-link">View Menu</button>

                <p>Or</p>

                <button class="contact-link">Make a Reservation</button>
            </div>

            <span class="divider"></span>

            <div class="info-container">
                <h3>Visit us in downtown Fort Worth!</h3>
                <p>123 Food Street, Fort Worth, TX 76179</p>

                <div class="delivery-container">
                    <p>Order Online and Takeout!</p>

                    <div>
                        <img class="uber" />
                        <img class="grubhub" />
                        <img class="postmates" />
                    </div>
                </div>
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
            <img class="background-image" />
        </div>

        <div class="background-container">

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
/* harmony import */ var _images_oven_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/oven.jpg */ 949);












const MAIN = document.querySelector('main');

function renderPage(pageHTML) {
    MAIN.innerHTML = "";
    MAIN.appendChild(pageHTML);
    window.scrollTo(0, 0);

    const backgroundIMG = document.querySelector('img.background-image');
    window.onscroll = () => {
        backgroundIMG.style.transform = `translateY(${Math.min(window.scrollY * 0.25, 100)}px)`;
    };
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
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', _images_oven_jpg__WEBPACK_IMPORTED_MODULE_7__);

        const UBER = document.querySelector('img.uber');
        UBER.setAttribute('src', _svg_ubereats_svg__WEBPACK_IMPORTED_MODULE_1__);
    
        const GRUBHUB = document.querySelector('img.grubhub');
        GRUBHUB.setAttribute('src', _svg_grubhub_svg__WEBPACK_IMPORTED_MODULE_2__);
    
        const POSTMATES = document.querySelector('img.postmates');
        POSTMATES.setAttribute('src', _svg_postmates_svg__WEBPACK_IMPORTED_MODULE_3__);
    },
    MENU: () => {
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', _images_oven_jpg__WEBPACK_IMPORTED_MODULE_7__);
    },
    CONTACT: () => {
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', _images_oven_jpg__WEBPACK_IMPORTED_MODULE_7__);
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

    (function initiateLinks() {
        const homeLinks = document.querySelectorAll('.home-link');
        const menuLinks = document.querySelectorAll('.menu-link');
        const contactLinks = document.querySelectorAll('.contact-link');

        homeLinks.forEach(link => link.addEventListener('click', () => {
            (0,_assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)(_assets_functions_home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
            _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderIMG.HOME();
        }));

        menuLinks.forEach(link => link.addEventListener('click', () => {
            (0,_assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)(_assets_functions_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
            _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderIMG.MENU();
        }));

        contactLinks.forEach(link => link.addEventListener('click', () => {
            (0,_assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)(_assets_functions_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
            _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderIMG.CONTACT();
        }));
    })();
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

/***/ }),

/***/ 949:
/*!************************************!*\
  !*** ./src/assets/images/oven.jpg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3516977b2c35f26ab04e.jpg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(495));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELCtEQUFlLE9BQU87Ozs7Ozs7Ozs7OztBQ3JFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwrREFBZSxRQUFROzs7Ozs7Ozs7Ozs7QUMvQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELCtEQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVFxQjs7QUFFRTtBQUNFO0FBQ0k7O0FBRUE7QUFDSjtBQUNFOztBQUVMOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELHFDQUFxQztBQUMzRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyQ0FBUTtBQUMxQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQywrQ0FBWTtBQUNsRDtBQUNBO0FBQ0Esb0NBQW9DLDZDQUFVO0FBQzlDO0FBQ0E7QUFDQSxxQ0FBcUMsOENBQVc7QUFDaEQsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQ0FBMEMsNkNBQU87O0FBRWpEO0FBQ0EsaUNBQWlDLDhDQUFPO0FBQ3hDO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQVU7QUFDOUM7QUFDQTtBQUNBLHNDQUFzQywrQ0FBWTtBQUNsRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBDQUEwQyw2Q0FBTztBQUNqRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBDQUEwQyw2Q0FBTztBQUNqRCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEc0I7O0FBRTRCO0FBQ0E7QUFDTTtBQUNhOztBQUVyRTtBQUNBLElBQUkseUVBQWdCO0FBQ3BCLElBQUkseUVBQWdCO0FBQ3BCLElBQUksdUVBQVUsQ0FBQyxpRUFBUTtBQUN2QixJQUFJLHVFQUFjOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksdUVBQVUsQ0FBQyxpRUFBUTtBQUMvQixZQUFZLHVFQUFjO0FBQzFCLFNBQVM7O0FBRVQ7QUFDQSxZQUFZLHVFQUFVLENBQUMsaUVBQVE7QUFDL0IsWUFBWSx1RUFBYztBQUMxQixTQUFTOztBQUVUO0FBQ0EsWUFBWSx1RUFBVSxDQUFDLG9FQUFXO0FBQ2xDLFlBQVksMEVBQWlCO0FBQzdCLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuc2Nzcz80ZDIxIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYXNzZXRzL2Z1bmN0aW9ucy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYXNzZXRzL2Z1bmN0aW9ucy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYXNzZXRzL2Z1bmN0aW9ucy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYXNzZXRzL2Z1bmN0aW9ucy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXG5jb25zdCBDT05UQUNUID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0ID0gJ2NvbnRlbnQtY29udGFpbmVyIGNvbnRhY3QnO1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPkNvbnRhY3Q8L2gxPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImJhY2tncm91bmQtaW1hZ2VcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc2VydmUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPk1ha2UgYSBSZXNlcnZhdGlvbjwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzZXJ2ZS1kYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzZXJ2ZS1kYXRlXCIgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc2VydmUtdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGltZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlc2VydmUtdGltZVwiIHR5cGU9XCJ0aW1lXCIgbmFtZT1cInRpbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLWd1ZXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAjIG9mIEd1ZXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlc2VydmUtZ3Vlc3RcIiB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImd1ZXN0XCIgbWluPVwiMVwiIG1heD1cIjEyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8IS0tU0VUIExJTUlUIE9OIFRJTUUgQU5EIERBVEUtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNwZWNpYWwgUmVxdWVzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZXNlcnZlLWluZm9cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc2VydmUtZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlc2VydmUtZW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0IFJlcXVlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+Q29udGFjdCBVcyE8L2gyPlxuICAgICAgICAgICAgICAgIDxwPkNhbGwgdXMgYW55dGltZSBhdCA8YSBocmVmPVwidGVsOjEyMzQ1Njc4OTBcIj4oMTIzKS00NTYtNzg5MDwvYT48L3A+XG4gICAgICAgICAgICAgICAgPHA+T3Igc2VuZCBhbiBlbWFpbCB0byA8YSBocmVmPVwibWFpbHRvOmdpYW5uaXBpenphQGVtYWlsLmNvbVwiPmdpYW5uaXBpenphQGVtYWlsLmNvbTwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPlZpc2l0IFVzITwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5Ib3Vyczo8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5UdWVzZGF5OiAxMTozMCBhLm0uIC0gMjozMCBwLm0uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5XZWQsIFRodXJzLCBGcmksIFNhdDogMTA6MDBhbSAtIDM6MDAgYS5tLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5XZSBwcm9taXNlIHlvdSB3b24ndCByZWdyZXQgdHJ5aW5nIG91dCBmcmVzaGx5IGJha2VkIHBpenphIGFuZCBJdGFsaWFuIGN1aXNpbmUhPC9wPlxuICAgICAgICAgICAgICAgIDxwPjEyMyBGb29kIFN0cmVldCwgRm9ydCBXb3J0aCwgVFggNzYxNzk8L3A+XG4gICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ0MjkyNzAuNzAzMDQ5NDUxMyEyZC05Ny4yODkzMTg5NTAwMDAwMSEzZDMyLjgwMDgxMjk1MDAwMDAxITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4NjRlNmUxMjJkYzgwN2FkJTNBMHhhNGFmOGJmOGRkNjlhY2JkITJzRm9ydCUyMFdvcnRoJTJDJTIwVFghNWUwITNtMiExc2VuITJzdXMhNHYxNjYzMzY1ODY2MzUyITVtMiExc2VuITJzdXNcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkaXZDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaW5uZXJIVE1MKTtcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ09OVEFDVDsiLCJcbmNvbnN0IEhPTUVQQUdFID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0ID0gJ2NvbnRlbnQtY29udGFpbmVyIGhvbWUnO1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPkNpYW8gYSBHaWFubmkncyBQaXp6YSBTdG9wITwvaDE+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsY29tZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+RW5qb3kgYSB0YXN0ZSBvZiBJdGFseSE8L2gyPlxuXG4gICAgICAgICAgICAgICAgPHA+Q29tZSBzdG9wIGJ5IGZvciBhIG92ZW4tYmFrZWQgcGl6emEgdG9wcGVkIHdpdGggc2F2b3VyeSBtZWF0IGFuZCBmcmVzaCB2ZWdldGFibGVzLCBhbG9uZyB3aXRoIHJlZnJlc2hpbmcgYmV2ZXJhZ2VzLCBhbmQgYSBkZWxpY2lvdXMgZGVzc2VydCBmb3IgdGhlIGdyYW4gZmluYWxlLiBXaGV0aGVyIGZvciBhIGZhbWlseSBuaWdodCBvdXQsIGZpcnN0IGRhdGUsIG9yIGdldCB0b2dldGhlciB3aXRoIG9sZCBmcmllbmRzLCBvdXIgYXV0aGVudGljIEl0YWxpYW4gbWVhbHMgd2lsbCBtYWtlIHlvdSBmZWVsIHJpZ2h0IGF0IGhvbWUuPC9wPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtbGlua1wiPlZpZXcgTWVudTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPHA+T3I8L3A+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29udGFjdC1saW5rXCI+TWFrZSBhIFJlc2VydmF0aW9uPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkaXZpZGVyXCI+PC9zcGFuPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+VmlzaXQgdXMgaW4gZG93bnRvd24gRm9ydCBXb3J0aCE8L2gzPlxuICAgICAgICAgICAgICAgIDxwPjEyMyBGb29kIFN0cmVldCwgRm9ydCBXb3J0aCwgVFggNzYxNzk8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsaXZlcnktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPk9yZGVyIE9ubGluZSBhbmQgVGFrZW91dCE8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ1YmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJncnViaHViXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3N0bWF0ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkaXZDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaW5uZXJIVE1MKTtcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgSE9NRVBBR0U7IiwiXG5jb25zdCBNRU5VID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0ID0gJ2NvbnRlbnQtY29udGFpbmVyIG1lbnUnO1xuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPk1lbsO5PC9oMT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJiYWNrZ3JvdW5kLWltYWdlXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmQtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMj5BcHBldGl6ZXJzPC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGVzdG8gQnJlYWRzdGlja3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDc8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DcnVuY2h5IGJyZWFkc3RpY2tzIGJha2VkIHdpdGggcGVzdG8gYW5kIGNvdmVyZWQgaW4gbW96emFyZWxsYSBjaGVlc2U8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1hbW1hJ3MgSG9tZS1zcHJlYWQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDg8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FZ2dwbGFudCBzcHJlYWQgc2Vhc29uZWQgd2l0aCBibGFjayBwZXBwZXIgYW5kIGdhcmxpYywgc2VydmVkIHdpdGggdG9hc3RlZCBicmVhZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2Flc2FyIFNhbGFkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxMDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZyZXNoIHJvbWFpbmUgc2VydmVkIHdpdGggY3Jpc3B5IGNyb3V0b25zLCBwYXJtZXNhbiBjaGVlc2UsIGFuZCBob21lbWFkZSBjYWVzYXIgZHJlc3Npbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkhvdXNlIEdyZWVuIFNhbGFkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxMDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1peGVkIGdyZWVucyB3aXRoIGNob3BwZWQgdmVnZXRhYmxlcywgcGFybWVzYW4sIGFuZCBob3VzZSB2aW5haWdyZXR0ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QmVlZiBTcGllZGluaTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EZWxpY2lvdXMgSXRhbGlhbi1zdHlsZSBrZWJhYnMgaG9sZGluZyBtYXJpbmF0ZWQgc3RlYWsgcGlud2hlZWxzIGFuZCBzZXJ2ZWQgd2l0aCB0b21hdG8gZGlwcGluZyBzYXVjZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDI+UGl6emFzPC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TWFyZ2hlcml0YTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EZWxpY2lvdXMgdG9tYXRvIGFuZCBiYXNpbCBiYWtlZCBpbiBtb3p6YXJlbGxhIGFuZCB0b21hdG8gcHVyZWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlByb3NjaXV0dG8gJiBBcnVndWxhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQyNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNtb2tlZCBwcm9zY2l1dHRvIHRvcHBlZCB3aXRoIGFydWd1bGEsIG11c2hyb29tcywgYW5kIHBhcm1lc2FuIGluIHRvbWF0byBwdXJlZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VmVnZXRhcmlhbmE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDI1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Um9hc3RlZCBQZXBwZXJzLCBhdWJlcmdpbmVzLCB0b21hdG9lcywgb2xpdmVzLCBhbmQgenVjY2hpbmkgZm9yIGhlYWx0aHkgb3B0aW9uIHdpdGhvdXQgbWVhdDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UXVhdHRybyBGb3JtYWdnaTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DcmVhbXkgcHJvdm9sb25lLCBwYXJtaWdpYW5vIHJlZ2dpYW5vLCBzdHJhY2NoaW5vLCBhbmQgbW96emFyZWxsYSBjb21iaW5lIGZvciB1bHRpbWF0ZSBjaGVlc2luZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EaWF2b2xhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQyMDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNsYXNzaWMgcGVwcGVyb25pIHBpenphIG1hZGUgd2l0aCBzcGljeSBzYWxhbWk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZydXR0aSBkaSBNYXJlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQzMDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRhc3R5IHNocmltcCBhbmQgbXVzc2VscyBjb21iaW5lIHdpdGggZ2FybGljIGFuZCBwYXJzbGV5IGZvciBhbGwgb3VyIHNlYWZvb2QgbG92ZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoMj5NYWluIERpc2hlczwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZvY2FjY2lhIEJhcmVzZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVzaCBvbGl2ZXMsIHNsaWNlZCBzYXVzYWdlLCBhbmQgY2hlcnJ5IHRvbWF0b2VzIGJha2VkIHdpdGggcG90YXRvLWluZnVzZWQgZG91Z2g8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJhcmlsbGEgTGFzYWduYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EZWxpY2lvdXMgcmljb3R0YSBjaGVlc2UsIG1venphcmVsbGEsIGFuZCBwYXJtZXNhbiBiYWtlZCBpbiBsYXllcnMgb2Ygc2F1c2FnZSBhbmQgYmVlZjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RmV0dHVjY2luZSBBbGZyZWRvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNyZWFteSBhbGZyZWRvIHNhdWNlIGNvdmVyaW5nIHNsaWNlZCBjaGlja2VuIGFuZCBmZXR0dWNjaW5lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYXN0YSBOYXBvbGV0YW5hPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRhc3R5IHNwYWdoZXR0aSBjb3ZlcmVkIGluIG1hcmluYXJhIHNhdWNlLCBob21lbWFkZSBtZWF0YmFsbHMsIGFuZCBwYXJtZXNhbiBjaGVlc2U8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBhc3RhIGFsbCdPcnRvbGFuYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Sb2FzdGVkIGJlbGwgcGVwcGVycywgY2Fycm90cywgenVjY2hpbmksIGFuZCBlZ2dwbGFudCBjb21iaW5lIHdpdGggY3JlYW15IHRvbWF0byBzYXVjZSBmb3IgdmVnYW4gcGFzdGE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGgyPkJldmVyYWdlczwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNvZGE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDI8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Eci4gUGVwcGVyLCBDb2NhLUNvbGEsIEZhbnRhLCBTcHJpdGUsIG9yIEJhcnEncyBSb290IEJlZXIsIHNlcnZlZCB3aXRoIGljZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlN3ZWV0L1Vuc3dlZXQgVGVhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJlc2hseSBicmV3ZWQgYW5kIHNlcnZlZCB3aXRoIGljZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxlbW9uYWRlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hvaWNlIG9mIHJhc3BiZXJyeSwgc3RyYXdiZXJyeSwgcGVhY2gsIG9yIGJsdWViZXJyeSBmbGF2b3IgaXMgb2ZmZXJlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBpbm90IEJpYW5jbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kOSAvICQyNzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVsZWdhbnQgd2hpdGUgd2luZSB3aXRoIHJlZmluZWQgaGludHMgb2YgY2l0cnVzLCBhbG1vbmRzLCBhbmQgcmlwZSBmcnVpdC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlZpZXR0aSBCYXJiZXJhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxMCAvICQzMDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNsYXNzaWMgcmVkIHdpbmUgd2l0aCByaWNoLCBlYXJ0aHkgZnJ1aXQgZmxhdm9yLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RmF0dG9yaWEgTGEgVmlhbGxhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxMiAvICQzMjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNwYXJrbGluZyB3aW5lIHdpdGggZWxlZ2FudCBhcm9tYXMgb2YgbGl2ZWx5IGdyZWVuIGZydWl0LCBibG9zc29tcywgYW5kIHdhcm0gdG9hc3QuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoMj5EZXNzZXJ0czwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkdlbGF0bzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kNDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNsYXNzaWMgZmxhdm9ycyBsaWtlIHBpc3RhY2hpbywgZGFyayBjaG9jb2xhdGUsIGFuZCBzdHJhY2NpYXRlbGxhIHRvIGludmlnb3JhdGluZyByYXNwYmVycnksIGxlbW9uLCBhbmQgc3RyYXdiZXJyeS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBhbm5hIENvdHRhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQ1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJlc2ggY3VzdGFyZC1saWtlIGNyZWFtIHRvcHBlZCB3aXRoIGZyZXNoIGZydWl0IGFuZCBkcml6emxlZCB3aXRoIGNhcmFtZWwgc2F1Y2UuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5UaXJhbWlzdTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kNzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyBsYXllcnMgb2YgY3JlYW15IG1hc2NhcnBvbmUgYW5kIGNvZmZlZS1zb2FrZWQgbGFkeWZpbmdlcnMsIGNvbWJpbmVkIHdpdGggaGludHMgb2YgbGlxdW9yLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgZGl2Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGlubmVySFRNTCk7XG4gICAgcmV0dXJuIGRpdkNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1FTlU7IiwiaW1wb3J0IHBpenphU3ZnIGZyb20gJy4uL3N2Zy9waXp6YS5zdmcnO1xuXG5pbXBvcnQgdWJlclN2ZyBmcm9tICcuLi9zdmcvdWJlcmVhdHMuc3ZnJztcbmltcG9ydCBncnViaHViU3ZnIGZyb20gJy4uL3N2Zy9ncnViaHViLnN2Zyc7XG5pbXBvcnQgcG9zdG1hdGVzU3ZnIGZyb20gJy4uL3N2Zy9wb3N0bWF0ZXMuc3ZnJztcblxuaW1wb3J0IGluc3RhZ3JhbVN2ZyBmcm9tICcuLi9zdmcvaW5zdGFncmFtLnN2Zyc7XG5pbXBvcnQgdHdpdHRlclN2ZyBmcm9tICcuLi9zdmcvdHdpdHRlci5zdmcnO1xuaW1wb3J0IGZhY2Vib29rU3ZnIGZyb20gJy4uL3N2Zy9mYWNlYm9vay5zdmcnO1xuXG5pbXBvcnQgb3ZlbkltZyBmcm9tICcuLi9pbWFnZXMvb3Zlbi5qcGcnO1xuXG5jb25zdCBNQUlOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5mdW5jdGlvbiByZW5kZXJQYWdlKHBhZ2VIVE1MKSB7XG4gICAgTUFJTi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIE1BSU4uYXBwZW5kQ2hpbGQocGFnZUhUTUwpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmRJTUcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuYmFja2dyb3VuZC1pbWFnZScpO1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgYmFja2dyb3VuZElNRy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke01hdGgubWluKHdpbmRvdy5zY3JvbGxZICogMC4yNSwgMTAwKX1weClgO1xuICAgIH07XG59XG5cbmNvbnN0IHJlbmRlcklNRyA9IHtcbiAgICBIRUFERVI6ICgpID0+IHtcbiAgICAgICAgY29uc3QgUElaWkEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcucGl6emEnKTtcbiAgICAgICAgUElaWkEuc2V0QXR0cmlidXRlKCdzcmMnLCBwaXp6YVN2Zyk7XG4gICAgfSxcbiAgICBGT09URVI6ICgpID0+IHtcbiAgICAgICAgY29uc3QgSU5TVEFHUkFNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmluc3RhZ3JhbScpO1xuICAgICAgICBJTlNUQUdSQU0uc2V0QXR0cmlidXRlKCdzcmMnLCBpbnN0YWdyYW1TdmcpO1xuICAgIFxuICAgICAgICBjb25zdCBUV0lUVEVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnR3aXR0ZXInKTtcbiAgICAgICAgVFdJVFRFUi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHR3aXR0ZXJTdmcpO1xuICAgIFxuICAgICAgICBjb25zdCBGQUNFQk9PSyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5mYWNlYm9vaycpO1xuICAgICAgICBGQUNFQk9PSy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZhY2Vib29rU3ZnKTtcbiAgICB9LFxuICAgIEhPTUU6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5iYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICAgIGJhY2tncm91bmRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBvdmVuSW1nKTtcblxuICAgICAgICBjb25zdCBVQkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnViZXInKTtcbiAgICAgICAgVUJFUi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHViZXJTdmcpO1xuICAgIFxuICAgICAgICBjb25zdCBHUlVCSFVCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmdydWJodWInKTtcbiAgICAgICAgR1JVQkhVQi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdydWJodWJTdmcpO1xuICAgIFxuICAgICAgICBjb25zdCBQT1NUTUFURVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcucG9zdG1hdGVzJyk7XG4gICAgICAgIFBPU1RNQVRFUy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBvc3RtYXRlc1N2Zyk7XG4gICAgfSxcbiAgICBNRU5VOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuYmFja2dyb3VuZC1pbWFnZScpO1xuICAgICAgICBiYWNrZ3JvdW5kSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgb3ZlbkltZyk7XG4gICAgfSxcbiAgICBDT05UQUNUOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuYmFja2dyb3VuZC1pbWFnZScpO1xuICAgICAgICBiYWNrZ3JvdW5kSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgb3ZlbkltZyk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IHJlbmRlclBhZ2UsIHJlbmRlcklNRyB9OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vYXNzZXRzL2Z1bmN0aW9ucy9ob21lLmpzJztcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL2Fzc2V0cy9mdW5jdGlvbnMvbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9hc3NldHMvZnVuY3Rpb25zL2NvbnRhY3QuanMnO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSwgcmVuZGVySU1HIH0gZnJvbSAnLi9hc3NldHMvZnVuY3Rpb25zL3JlbmRlci5qcyc7XG5cbihmdW5jdGlvbiBpbml0KCkge1xuICAgIHJlbmRlcklNRy5IRUFERVIoKTtcbiAgICByZW5kZXJJTUcuRk9PVEVSKCk7XG4gICAgcmVuZGVyUGFnZShob21lUGFnZSk7XG4gICAgcmVuZGVySU1HLkhPTUUoKTtcblxuICAgIChmdW5jdGlvbiBpbml0aWF0ZUxpbmtzKCkge1xuICAgICAgICBjb25zdCBob21lTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZS1saW5rJyk7XG4gICAgICAgIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWxpbmsnKTtcbiAgICAgICAgY29uc3QgY29udGFjdExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QtbGluaycpO1xuXG4gICAgICAgIGhvbWVMaW5rcy5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclBhZ2UoaG9tZVBhZ2UpO1xuICAgICAgICAgICAgcmVuZGVySU1HLkhPTUUoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIG1lbnVMaW5rcy5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclBhZ2UobWVudVBhZ2UpO1xuICAgICAgICAgICAgcmVuZGVySU1HLk1FTlUoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnRhY3RMaW5rcy5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclBhZ2UoY29udGFjdFBhZ2UpO1xuICAgICAgICAgICAgcmVuZGVySU1HLkNPTlRBQ1QoKTtcbiAgICAgICAgfSkpO1xuICAgIH0pKCk7XG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=