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
/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/pizza.jpg */ 3);
/* harmony import */ var _images_chef_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/chef.jpg */ 632);














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
        backgroundImg.setAttribute('src', _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_8__);
    },
    CONTACT: () => {
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', _images_chef_jpg__WEBPACK_IMPORTED_MODULE_9__);
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
    (0,_assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)(_assets_functions_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderIMG.MENU();

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

/***/ 632:
/*!************************************!*\
  !*** ./src/assets/images/chef.jpg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9692d5b1159dbb266c9e.jpg";

/***/ }),

/***/ 949:
/*!************************************!*\
  !*** ./src/assets/images/oven.jpg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3516977b2c35f26ab04e.jpg";

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** ./src/assets/images/pizza.jpg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9b82cd5a289766cfde52.jpg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(495));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELCtEQUFlLE9BQU87Ozs7Ozs7Ozs7OztBQ3JFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwrREFBZSxRQUFROzs7Ozs7Ozs7Ozs7QUMvQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELCtEQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUXFCOztBQUVFO0FBQ0U7QUFDSTs7QUFFQTtBQUNKO0FBQ0U7O0FBRUw7QUFDRTtBQUNGOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELHFDQUFxQztBQUMzRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyQ0FBUTtBQUMxQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQywrQ0FBWTs7QUFFbEQ7QUFDQSxvQ0FBb0MsNkNBQVU7O0FBRTlDO0FBQ0EscUNBQXFDLDhDQUFXO0FBQ2hELEtBQUs7QUFDTDtBQUNBO0FBQ0EsMENBQTBDLDZDQUFPOztBQUVqRDtBQUNBLGlDQUFpQyw4Q0FBTzs7QUFFeEM7QUFDQSxvQ0FBb0MsNkNBQVU7O0FBRTlDO0FBQ0Esc0NBQXNDLCtDQUFZO0FBQ2xELEtBQUs7QUFDTDtBQUNBO0FBQ0EsMENBQTBDLDhDQUFRO0FBQ2xELEtBQUs7QUFDTDtBQUNBO0FBQ0EsMENBQTBDLDZDQUFPO0FBQ2pELEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RzQjs7QUFFNEI7QUFDQTtBQUNNO0FBQ2E7O0FBRXJFO0FBQ0EsSUFBSSx5RUFBZ0I7QUFDcEIsSUFBSSx5RUFBZ0I7QUFDcEIsSUFBSSx1RUFBVSxDQUFDLGlFQUFRO0FBQ3ZCLElBQUksdUVBQWM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1RUFBVSxDQUFDLGlFQUFRO0FBQy9CLFlBQVksdUVBQWM7QUFDMUIsU0FBUzs7QUFFVDtBQUNBLFlBQVksdUVBQVUsQ0FBQyxpRUFBUTtBQUMvQixZQUFZLHVFQUFjO0FBQzFCLFNBQVM7O0FBRVQ7QUFDQSxZQUFZLHVFQUFVLENBQUMsb0VBQVc7QUFDbEMsWUFBWSwwRUFBaUI7QUFDN0IsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzPzRkMjEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcbmNvbnN0IENPTlRBQ1QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnY29udGVudC1jb250YWluZXIgY29udGFjdCc7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+Q29udGFjdDwvaDE+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+TWFrZSBhIFJlc2VydmF0aW9uPC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNlcnZlLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzZXJ2ZS10aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzZXJ2ZS10aW1lXCIgdHlwZT1cInRpbWVcIiBuYW1lPVwidGltZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc2VydmUtZ3Vlc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICMgb2YgR3Vlc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzZXJ2ZS1ndWVzdFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZ3Vlc3RcIiBtaW49XCIxXCIgbWF4PVwiMTJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1TRVQgTElNSVQgT04gVElNRSBBTkQgREFURS0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc2VydmUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3BlY2lhbCBSZXF1ZXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInJlc2VydmUtaW5mb1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzZXJ2ZS1lbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzZXJ2ZS1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQgUmVxdWVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMj5Db250YWN0IFVzITwvaDI+XG4gICAgICAgICAgICAgICAgPHA+Q2FsbCB1cyBhbnl0aW1lIGF0IDxhIGhyZWY9XCJ0ZWw6MTIzNDU2Nzg5MFwiPigxMjMpLTQ1Ni03ODkwPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8cD5PciBzZW5kIGFuIGVtYWlsIHRvIDxhIGhyZWY9XCJtYWlsdG86Z2lhbm5pcGl6emFAZW1haWwuY29tXCI+Z2lhbm5pcGl6emFAZW1haWwuY29tPC9hPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+VmlzaXQgVXMhPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91ci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkhvdXJzOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPlR1ZXNkYXk6IDExOjMwIGEubS4gLSAyOjMwIHAubS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPldlZCwgVGh1cnMsIEZyaSwgU2F0OiAxMDowMGFtIC0gMzowMCBhLm0uPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPldlIHByb21pc2UgeW91IHdvbid0IHJlZ3JldCB0cnlpbmcgb3V0IGZyZXNobHkgYmFrZWQgcGl6emEgYW5kIEl0YWxpYW4gY3Vpc2luZSE8L3A+XG4gICAgICAgICAgICAgICAgPHA+MTIzIEZvb2QgU3RyZWV0LCBGb3J0IFdvcnRoLCBUWCA3NjE3OTwvcD5cbiAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDQyOTI3MC43MDMwNDk0NTEzITJkLTk3LjI4OTMxODk1MDAwMDAxITNkMzIuODAwODEyOTUwMDAwMDEhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg2NGU2ZTEyMmRjODA3YWQlM0EweGE0YWY4YmY4ZGQ2OWFjYmQhMnNGb3J0JTIwV29ydGglMkMlMjBUWCE1ZTAhM20yITFzZW4hMnN1cyE0djE2NjMzNjU4NjYzNTIhNW0yITFzZW4hMnN1c1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRpdkNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBpbm5lckhUTUwpO1xuICAgIHJldHVybiBkaXZDb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDT05UQUNUOyIsIlxuY29uc3QgSE9NRVBBR0UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnY29udGVudC1jb250YWluZXIgaG9tZSc7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+Q2lhbyBhIEdpYW5uaSdzIFBpenphIFN0b3AhPC9oMT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJiYWNrZ3JvdW5kLWltYWdlXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmQtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMj5FbmpveSBhIHRhc3RlIG9mIEl0YWx5ITwvaDI+XG5cbiAgICAgICAgICAgICAgICA8cD5Db21lIHN0b3AgYnkgZm9yIGEgb3Zlbi1iYWtlZCBwaXp6YSB0b3BwZWQgd2l0aCBzYXZvdXJ5IG1lYXQgYW5kIGZyZXNoIHZlZ2V0YWJsZXMsIGFsb25nIHdpdGggcmVmcmVzaGluZyBiZXZlcmFnZXMsIGFuZCBhIGRlbGljaW91cyBkZXNzZXJ0IGZvciB0aGUgZ3JhbiBmaW5hbGUuIFdoZXRoZXIgZm9yIGEgZmFtaWx5IG5pZ2h0IG91dCwgZmlyc3QgZGF0ZSwgb3IgZ2V0IHRvZ2V0aGVyIHdpdGggb2xkIGZyaWVuZHMsIG91ciBhdXRoZW50aWMgSXRhbGlhbiBtZWFscyB3aWxsIG1ha2UgeW91IGZlZWwgcmlnaHQgYXQgaG9tZS48L3A+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1saW5rXCI+VmlldyBNZW51PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8cD5PcjwvcD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb250YWN0LWxpbmtcIj5NYWtlIGEgUmVzZXJ2YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRpdmlkZXJcIj48L3NwYW4+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMz5WaXNpdCB1cyBpbiBkb3dudG93biBGb3J0IFdvcnRoITwvaDM+XG4gICAgICAgICAgICAgICAgPHA+MTIzIEZvb2QgU3RyZWV0LCBGb3J0IFdvcnRoLCBUWCA3NjE3OTwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxpdmVyeS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+T3JkZXIgT25saW5lIGFuZCBUYWtlb3V0ITwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInViZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImdydWJodWJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBvc3RtYXRlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRpdkNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBpbm5lckhUTUwpO1xuICAgIHJldHVybiBkaXZDb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBIT01FUEFHRTsiLCJcbmNvbnN0IE1FTlUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnY29udGVudC1jb250YWluZXIgbWVudSc7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+TWVuw7k8L2gxPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImJhY2tncm91bmQtaW1hZ2VcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPkFwcGV0aXplcnM8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QZXN0byBCcmVhZHN0aWNrczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kNzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNydW5jaHkgYnJlYWRzdGlja3MgYmFrZWQgd2l0aCBwZXN0byBhbmQgY292ZXJlZCBpbiBtb3p6YXJlbGxhIGNoZWVzZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TWFtbWEncyBIb21lLXNwcmVhZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kODwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVnZ3BsYW50IHNwcmVhZCBzZWFzb25lZCB3aXRoIGJsYWNrIHBlcHBlciBhbmQgZ2FybGljLCBzZXJ2ZWQgd2l0aCB0b2FzdGVkIGJyZWFkPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DYWVzYXIgU2FsYWQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDEwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJlc2ggcm9tYWluZSBzZXJ2ZWQgd2l0aCBjcmlzcHkgY3JvdXRvbnMsIHBhcm1lc2FuIGNoZWVzZSwgYW5kIGhvbWVtYWRlIGNhZXNhciBkcmVzc2luZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SG91c2UgR3JlZW4gU2FsYWQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDEwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWl4ZWQgZ3JlZW5zIHdpdGggY2hvcHBlZCB2ZWdldGFibGVzLCBwYXJtZXNhbiwgYW5kIGhvdXNlIHZpbmFpZ3JldHRlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CZWVmIFNwaWVkaW5pPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyBJdGFsaWFuLXN0eWxlIGtlYmFicyBob2xkaW5nIG1hcmluYXRlZCBzdGVhayBwaW53aGVlbHMgYW5kIHNlcnZlZCB3aXRoIHRvbWF0byBkaXBwaW5nIHNhdWNlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoMj5QaXp6YXM8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NYXJnaGVyaXRhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQyNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyB0b21hdG8gYW5kIGJhc2lsIGJha2VkIGluIG1venphcmVsbGEgYW5kIHRvbWF0byBwdXJlZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UHJvc2NpdXR0byAmIEFydWd1bGE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDI1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U21va2VkIHByb3NjaXV0dG8gdG9wcGVkIHdpdGggYXJ1Z3VsYSwgbXVzaHJvb21zLCBhbmQgcGFybWVzYW4gaW4gdG9tYXRvIHB1cmVlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5WZWdldGFyaWFuYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Sb2FzdGVkIFBlcHBlcnMsIGF1YmVyZ2luZXMsIHRvbWF0b2VzLCBvbGl2ZXMsIGFuZCB6dWNjaGluaSBmb3IgaGVhbHRoeSBvcHRpb24gd2l0aG91dCBtZWF0PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5RdWF0dHJvIEZvcm1hZ2dpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQyMDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNyZWFteSBwcm92b2xvbmUsIHBhcm1pZ2lhbm8gcmVnZ2lhbm8sIHN0cmFjY2hpbm8sIGFuZCBtb3p6YXJlbGxhIGNvbWJpbmUgZm9yIHVsdGltYXRlIGNoZWVzaW5lc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRpYXZvbGE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDIwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2xhc3NpYyBwZXBwZXJvbmkgcGl6emEgbWFkZSB3aXRoIHNwaWN5IHNhbGFtaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RnJ1dHRpIGRpIE1hcmU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDMwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFzdHkgc2hyaW1wIGFuZCBtdXNzZWxzIGNvbWJpbmUgd2l0aCBnYXJsaWMgYW5kIHBhcnNsZXkgZm9yIGFsbCBvdXIgc2VhZm9vZCBsb3ZlcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGgyPk1haW4gRGlzaGVzPC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Rm9jYWNjaWEgQmFyZXNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZyZXNoIG9saXZlcywgc2xpY2VkIHNhdXNhZ2UsIGFuZCBjaGVycnkgdG9tYXRvZXMgYmFrZWQgd2l0aCBwb3RhdG8taW5mdXNlZCBkb3VnaDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QmFyaWxsYSBMYXNhZ25hPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyByaWNvdHRhIGNoZWVzZSwgbW96emFyZWxsYSwgYW5kIHBhcm1lc2FuIGJha2VkIGluIGxheWVycyBvZiBzYXVzYWdlIGFuZCBiZWVmPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GZXR0dWNjaW5lIEFsZnJlZG88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDE1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3JlYW15IGFsZnJlZG8gc2F1Y2UgY292ZXJpbmcgc2xpY2VkIGNoaWNrZW4gYW5kIGZldHR1Y2NpbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBhc3RhIE5hcG9sZXRhbmE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDE1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFzdHkgc3BhZ2hldHRpIGNvdmVyZWQgaW4gbWFyaW5hcmEgc2F1Y2UsIGhvbWVtYWRlIG1lYXRiYWxscywgYW5kIHBhcm1lc2FuIGNoZWVzZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGFzdGEgYWxsJ09ydG9sYW5hPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJvYXN0ZWQgYmVsbCBwZXBwZXJzLCBjYXJyb3RzLCB6dWNjaGluaSwgYW5kIGVnZ3BsYW50IGNvbWJpbmUgd2l0aCBjcmVhbXkgdG9tYXRvIHNhdWNlIGZvciB2ZWdhbiBwYXN0YTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDI+QmV2ZXJhZ2VzPC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U29kYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRyLiBQZXBwZXIsIENvY2EtQ29sYSwgRmFudGEsIFNwcml0ZSwgb3IgQmFycSdzIFJvb3QgQmVlciwgc2VydmVkIHdpdGggaWNlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U3dlZXQvVW5zd2VldCBUZWE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVzaGx5IGJyZXdlZCBhbmQgc2VydmVkIHdpdGggaWNlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TGVtb25hZGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DaG9pY2Ugb2YgcmFzcGJlcnJ5LCBzdHJhd2JlcnJ5LCBwZWFjaCwgb3IgYmx1ZWJlcnJ5IGZsYXZvciBpcyBvZmZlcmVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGlub3QgQmlhbmNvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQ5IC8gJDI3PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWxlZ2FudCB3aGl0ZSB3aW5lIHdpdGggcmVmaW5lZCBoaW50cyBvZiBjaXRydXMsIGFsbW9uZHMsIGFuZCByaXBlIGZydWl0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VmlldHRpIEJhcmJlcmE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDEwIC8gJDMwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2xhc3NpYyByZWQgd2luZSB3aXRoIHJpY2gsIGVhcnRoeSBmcnVpdCBmbGF2b3IuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GYXR0b3JpYSBMYSBWaWFsbGE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDEyIC8gJDMyPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3BhcmtsaW5nIHdpbmUgd2l0aCBlbGVnYW50IGFyb21hcyBvZiBsaXZlbHkgZ3JlZW4gZnJ1aXQsIGJsb3Nzb21zLCBhbmQgd2FybSB0b2FzdC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGgyPkRlc3NlcnRzPC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+R2VsYXRvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQ0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2xhc3NpYyBmbGF2b3JzIGxpa2UgcGlzdGFjaGlvLCBkYXJrIGNob2NvbGF0ZSwgYW5kIHN0cmFjY2lhdGVsbGEgdG8gaW52aWdvcmF0aW5nIHJhc3BiZXJyeSwgbGVtb24sIGFuZCBzdHJhd2JlcnJ5LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGFubmEgQ290dGE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVzaCBjdXN0YXJkLWxpa2UgY3JlYW0gdG9wcGVkIHdpdGggZnJlc2ggZnJ1aXQgYW5kIGRyaXp6bGVkIHdpdGggY2FyYW1lbCBzYXVjZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRpcmFtaXN1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQ3PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVsaWNpb3VzIGxheWVycyBvZiBjcmVhbXkgbWFzY2FycG9uZSBhbmQgY29mZmVlLXNvYWtlZCBsYWR5ZmluZ2VycywgY29tYmluZWQgd2l0aCBoaW50cyBvZiBsaXF1b3IuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkaXZDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaW5uZXJIVE1MKTtcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTUVOVTsiLCJpbXBvcnQgcGl6emFTdmcgZnJvbSAnLi4vc3ZnL3BpenphLnN2Zyc7XG5cbmltcG9ydCB1YmVyU3ZnIGZyb20gJy4uL3N2Zy91YmVyZWF0cy5zdmcnO1xuaW1wb3J0IGdydWJodWJTdmcgZnJvbSAnLi4vc3ZnL2dydWJodWIuc3ZnJztcbmltcG9ydCBwb3N0bWF0ZXNTdmcgZnJvbSAnLi4vc3ZnL3Bvc3RtYXRlcy5zdmcnO1xuXG5pbXBvcnQgaW5zdGFncmFtU3ZnIGZyb20gJy4uL3N2Zy9pbnN0YWdyYW0uc3ZnJztcbmltcG9ydCB0d2l0dGVyU3ZnIGZyb20gJy4uL3N2Zy90d2l0dGVyLnN2Zyc7XG5pbXBvcnQgZmFjZWJvb2tTdmcgZnJvbSAnLi4vc3ZnL2ZhY2Vib29rLnN2Zyc7XG5cbmltcG9ydCBvdmVuSW1nIGZyb20gJy4uL2ltYWdlcy9vdmVuLmpwZyc7XG5pbXBvcnQgcGl6emFJbWcgZnJvbSAnLi4vaW1hZ2VzL3BpenphLmpwZyc7XG5pbXBvcnQgY2hlZkltZyBmcm9tICcuLi9pbWFnZXMvY2hlZi5qcGcnO1xuXG5jb25zdCBNQUlOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5mdW5jdGlvbiByZW5kZXJQYWdlKHBhZ2VIVE1MKSB7XG4gICAgTUFJTi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIE1BSU4uYXBwZW5kQ2hpbGQocGFnZUhUTUwpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmRJTUcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuYmFja2dyb3VuZC1pbWFnZScpO1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgYmFja2dyb3VuZElNRy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke01hdGgubWluKHdpbmRvdy5zY3JvbGxZICogMC4yNSwgMTAwKX1weClgO1xuICAgIH07XG59XG5cbmNvbnN0IHJlbmRlcklNRyA9IHtcbiAgICBIRUFERVI6ICgpID0+IHtcbiAgICAgICAgY29uc3QgUElaWkEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcucGl6emEnKTtcbiAgICAgICAgUElaWkEuc2V0QXR0cmlidXRlKCdzcmMnLCBwaXp6YVN2Zyk7XG4gICAgfSxcbiAgICBGT09URVI6ICgpID0+IHtcbiAgICAgICAgY29uc3QgSU5TVEFHUkFNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmluc3RhZ3JhbScpO1xuICAgICAgICBJTlNUQUdSQU0uc2V0QXR0cmlidXRlKCdzcmMnLCBpbnN0YWdyYW1TdmcpO1xuXG4gICAgICAgIGNvbnN0IFRXSVRURVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcudHdpdHRlcicpO1xuICAgICAgICBUV0lUVEVSLnNldEF0dHJpYnV0ZSgnc3JjJywgdHdpdHRlclN2Zyk7XG5cbiAgICAgICAgY29uc3QgRkFDRUJPT0sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuZmFjZWJvb2snKTtcbiAgICAgICAgRkFDRUJPT0suc2V0QXR0cmlidXRlKCdzcmMnLCBmYWNlYm9va1N2Zyk7XG4gICAgfSxcbiAgICBIT01FOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuYmFja2dyb3VuZC1pbWFnZScpO1xuICAgICAgICBiYWNrZ3JvdW5kSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgb3ZlbkltZyk7XG5cbiAgICAgICAgY29uc3QgVUJFUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy51YmVyJyk7XG4gICAgICAgIFVCRVIuc2V0QXR0cmlidXRlKCdzcmMnLCB1YmVyU3ZnKTtcblxuICAgICAgICBjb25zdCBHUlVCSFVCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmdydWJodWInKTtcbiAgICAgICAgR1JVQkhVQi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdydWJodWJTdmcpO1xuXG4gICAgICAgIGNvbnN0IFBPU1RNQVRFUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5wb3N0bWF0ZXMnKTtcbiAgICAgICAgUE9TVE1BVEVTLnNldEF0dHJpYnV0ZSgnc3JjJywgcG9zdG1hdGVzU3ZnKTtcbiAgICB9LFxuICAgIE1FTlU6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5iYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICAgIGJhY2tncm91bmRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwaXp6YUltZyk7XG4gICAgfSxcbiAgICBDT05UQUNUOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuYmFja2dyb3VuZC1pbWFnZScpO1xuICAgICAgICBiYWNrZ3JvdW5kSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgY2hlZkltZyk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IHJlbmRlclBhZ2UsIHJlbmRlcklNRyB9OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vYXNzZXRzL2Z1bmN0aW9ucy9ob21lLmpzJztcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL2Fzc2V0cy9mdW5jdGlvbnMvbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9hc3NldHMvZnVuY3Rpb25zL2NvbnRhY3QuanMnO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSwgcmVuZGVySU1HIH0gZnJvbSAnLi9hc3NldHMvZnVuY3Rpb25zL3JlbmRlci5qcyc7XG5cbihmdW5jdGlvbiBpbml0KCkge1xuICAgIHJlbmRlcklNRy5IRUFERVIoKTtcbiAgICByZW5kZXJJTUcuRk9PVEVSKCk7XG4gICAgcmVuZGVyUGFnZShtZW51UGFnZSk7XG4gICAgcmVuZGVySU1HLk1FTlUoKTtcblxuICAgIChmdW5jdGlvbiBpbml0aWF0ZUxpbmtzKCkge1xuICAgICAgICBjb25zdCBob21lTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZS1saW5rJyk7XG4gICAgICAgIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWxpbmsnKTtcbiAgICAgICAgY29uc3QgY29udGFjdExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QtbGluaycpO1xuXG4gICAgICAgIGhvbWVMaW5rcy5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclBhZ2UoaG9tZVBhZ2UpO1xuICAgICAgICAgICAgcmVuZGVySU1HLkhPTUUoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIG1lbnVMaW5rcy5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclBhZ2UobWVudVBhZ2UpO1xuICAgICAgICAgICAgcmVuZGVySU1HLk1FTlUoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnRhY3RMaW5rcy5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclBhZ2UoY29udGFjdFBhZ2UpO1xuICAgICAgICAgICAgcmVuZGVySU1HLkNPTlRBQ1QoKTtcbiAgICAgICAgfSkpO1xuICAgIH0pKCk7XG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=