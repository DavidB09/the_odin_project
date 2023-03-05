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
                        <input id="reserve-time" type="time" name="time" step="60"/>
                    </label>
                    <label for="reserve-guest">
                        # of Guests:
                        <input id="reserve-guest" type="number" name="guest" min="1" max="12"/>
                    </label>
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

        const dateInput = document.querySelector('input[type="date"]');
        const currDate = new Date();

        dateInput.min = currDate.toISOString().slice(0, 10);
        dateInput.max = new Date(currDate.getTime() + (3600 * 24 * 14 * 1000)).toISOString().slice(0, 10);
        dateInput.addEventListener('input', () => {
            const timeInput = document.querySelector('input[type="time"]');
            const selectedDay = new Date(dateInput.value).getDay();

            if (selectedDay == 6 || selectedDay == 1) {
                timeInput.min = '11:30';
                timeInput.max = '14:30';
            } else {
                timeInput.min = '10:00';
                timeInput.max = '23:00';
            }
        });
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
    (0,_assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)(_assets_functions_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    _assets_functions_render_js__WEBPACK_IMPORTED_MODULE_4__.renderIMG.CONTACT();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwrREFBZSxPQUFPOzs7Ozs7Ozs7Ozs7QUNwRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsK0RBQWUsUUFBUTs7Ozs7Ozs7Ozs7O0FDL0N2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwrREFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVFxQjs7QUFFRTtBQUNFO0FBQ0k7O0FBRUE7QUFDSjtBQUNFOztBQUVMO0FBQ0U7QUFDRjs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCxxQ0FBcUM7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMkNBQVE7QUFDMUMsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsK0NBQVk7O0FBRWxEO0FBQ0Esb0NBQW9DLDZDQUFVOztBQUU5QztBQUNBLHFDQUFxQyw4Q0FBVztBQUNoRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBDQUEwQyw2Q0FBTzs7QUFFakQ7QUFDQSxpQ0FBaUMsOENBQU87O0FBRXhDO0FBQ0Esb0NBQW9DLDZDQUFVOztBQUU5QztBQUNBLHNDQUFzQywrQ0FBWTtBQUNsRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBDQUEwQyw4Q0FBUTtBQUNsRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBDQUEwQyw2Q0FBTzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRnNCOztBQUU0QjtBQUNBO0FBQ007QUFDYTs7QUFFckU7QUFDQSxJQUFJLHlFQUFnQjtBQUNwQixJQUFJLHlFQUFnQjtBQUNwQixJQUFJLHVFQUFVLENBQUMsb0VBQVc7QUFDMUIsSUFBSSwwRUFBaUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1RUFBVSxDQUFDLGlFQUFRO0FBQy9CLFlBQVksdUVBQWM7QUFDMUIsU0FBUzs7QUFFVDtBQUNBLFlBQVksdUVBQVUsQ0FBQyxpRUFBUTtBQUMvQixZQUFZLHVFQUFjO0FBQzFCLFNBQVM7O0FBRVQ7QUFDQSxZQUFZLHVFQUFVLENBQUMsb0VBQVc7QUFDbEMsWUFBWSwwRUFBaUI7QUFDN0IsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzPzRkMjEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcbmNvbnN0IENPTlRBQ1QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRhaW5lci5jbGFzc0xpc3QgPSAnY29udGVudC1jb250YWluZXIgY29udGFjdCc7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+Q29udGFjdDwvaDE+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+TWFrZSBhIFJlc2VydmF0aW9uPC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNlcnZlLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzZXJ2ZS10aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzZXJ2ZS10aW1lXCIgdHlwZT1cInRpbWVcIiBuYW1lPVwidGltZVwiIHN0ZXA9XCI2MFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc2VydmUtZ3Vlc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICMgb2YgR3Vlc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzZXJ2ZS1ndWVzdFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZ3Vlc3RcIiBtaW49XCIxXCIgbWF4PVwiMTJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzZXJ2ZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTcGVjaWFsIFJlcXVlc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwicmVzZXJ2ZS1pbmZvXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLWVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNlcnZlLWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdCBSZXF1ZXN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPkNvbnRhY3QgVXMhPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5DYWxsIHVzIGFueXRpbWUgYXQgPGEgaHJlZj1cInRlbDoxMjM0NTY3ODkwXCI+KDEyMyktNDU2LTc4OTA8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDxwPk9yIHNlbmQgYW4gZW1haWwgdG8gPGEgaHJlZj1cIm1haWx0bzpnaWFubmlwaXp6YUBlbWFpbC5jb21cIj5naWFubmlwaXp6YUBlbWFpbC5jb208L2E+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGRyZXNzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMj5WaXNpdCBVcyE8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+SG91cnM6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+VHVlc2RheTogMTE6MzAgYS5tLiAtIDI6MzAgcC5tLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2VkLCBUaHVycywgRnJpLCBTYXQ6IDEwOjAwYW0gLSAzOjAwIGEubS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+V2UgcHJvbWlzZSB5b3Ugd29uJ3QgcmVncmV0IHRyeWluZyBvdXQgZnJlc2hseSBiYWtlZCBwaXp6YSBhbmQgSXRhbGlhbiBjdWlzaW5lITwvcD5cbiAgICAgICAgICAgICAgICA8cD4xMjMgRm9vZCBTdHJlZXQsIEZvcnQgV29ydGgsIFRYIDc2MTc5PC9wPlxuICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNDI5MjcwLjcwMzA0OTQ1MTMhMmQtOTcuMjg5MzE4OTUwMDAwMDEhM2QzMi44MDA4MTI5NTAwMDAwMSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODY0ZTZlMTIyZGM4MDdhZCUzQTB4YTRhZjhiZjhkZDY5YWNiZCEyc0ZvcnQlMjBXb3J0aCUyQyUyMFRYITVlMCEzbTIhMXNlbiEyc3VzITR2MTY2MzM2NTg2NjM1MiE1bTIhMXNlbiEyc3VzXCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgZGl2Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGlubmVySFRNTCk7XG4gICAgcmV0dXJuIGRpdkNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENPTlRBQ1Q7IiwiXG5jb25zdCBIT01FUEFHRSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250ZW50LWNvbnRhaW5lciBob21lJztcbiAgICBjb25zdCBpbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT5DaWFvIGEgR2lhbm5pJ3MgUGl6emEgU3RvcCE8L2gxPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImJhY2tncm91bmQtaW1hZ2VcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZC1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlbGNvbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPkVuam95IGEgdGFzdGUgb2YgSXRhbHkhPC9oMj5cblxuICAgICAgICAgICAgICAgIDxwPkNvbWUgc3RvcCBieSBmb3IgYSBvdmVuLWJha2VkIHBpenphIHRvcHBlZCB3aXRoIHNhdm91cnkgbWVhdCBhbmQgZnJlc2ggdmVnZXRhYmxlcywgYWxvbmcgd2l0aCByZWZyZXNoaW5nIGJldmVyYWdlcywgYW5kIGEgZGVsaWNpb3VzIGRlc3NlcnQgZm9yIHRoZSBncmFuIGZpbmFsZS4gV2hldGhlciBmb3IgYSBmYW1pbHkgbmlnaHQgb3V0LCBmaXJzdCBkYXRlLCBvciBnZXQgdG9nZXRoZXIgd2l0aCBvbGQgZnJpZW5kcywgb3VyIGF1dGhlbnRpYyBJdGFsaWFuIG1lYWxzIHdpbGwgbWFrZSB5b3UgZmVlbCByaWdodCBhdCBob21lLjwvcD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZW51LWxpbmtcIj5WaWV3IE1lbnU8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxwPk9yPC9wPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRhY3QtbGlua1wiPk1ha2UgYSBSZXNlcnZhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGl2aWRlclwiPjwvc3Bhbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgzPlZpc2l0IHVzIGluIGRvd250b3duIEZvcnQgV29ydGghPC9oMz5cbiAgICAgICAgICAgICAgICA8cD4xMjMgRm9vZCBTdHJlZXQsIEZvcnQgV29ydGgsIFRYIDc2MTc5PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGl2ZXJ5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5PcmRlciBPbmxpbmUgYW5kIFRha2VvdXQhPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwidWJlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiZ3J1Ymh1YlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9zdG1hdGVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgZGl2Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGlubmVySFRNTCk7XG4gICAgcmV0dXJuIGRpdkNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEhPTUVQQUdFOyIsIlxuY29uc3QgTUVOVSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250ZW50LWNvbnRhaW5lciBtZW51JztcbiAgICBjb25zdCBpbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT5NZW7DuTwvaDE+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiYmFja2dyb3VuZC1pbWFnZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+QXBwZXRpemVyczwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBlc3RvIEJyZWFkc3RpY2tzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQ3PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3J1bmNoeSBicmVhZHN0aWNrcyBiYWtlZCB3aXRoIHBlc3RvIGFuZCBjb3ZlcmVkIGluIG1venphcmVsbGEgY2hlZXNlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NYW1tYSdzIEhvbWUtc3ByZWFkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQ4PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWdncGxhbnQgc3ByZWFkIHNlYXNvbmVkIHdpdGggYmxhY2sgcGVwcGVyIGFuZCBnYXJsaWMsIHNlcnZlZCB3aXRoIHRvYXN0ZWQgYnJlYWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNhZXNhciBTYWxhZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GcmVzaCByb21haW5lIHNlcnZlZCB3aXRoIGNyaXNweSBjcm91dG9ucywgcGFybWVzYW4gY2hlZXNlLCBhbmQgaG9tZW1hZGUgY2Flc2FyIGRyZXNzaW5nPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Ib3VzZSBHcmVlbiBTYWxhZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NaXhlZCBncmVlbnMgd2l0aCBjaG9wcGVkIHZlZ2V0YWJsZXMsIHBhcm1lc2FuLCBhbmQgaG91c2UgdmluYWlncmV0dGU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJlZWYgU3BpZWRpbmk8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDE1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVsaWNpb3VzIEl0YWxpYW4tc3R5bGUga2ViYWJzIGhvbGRpbmcgbWFyaW5hdGVkIHN0ZWFrIHBpbndoZWVscyBhbmQgc2VydmVkIHdpdGggdG9tYXRvIGRpcHBpbmcgc2F1Y2U8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGgyPlBpenphczwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1hcmdoZXJpdGE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDI1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVsaWNpb3VzIHRvbWF0byBhbmQgYmFzaWwgYmFrZWQgaW4gbW96emFyZWxsYSBhbmQgdG9tYXRvIHB1cmVlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Qcm9zY2l1dHRvICYgQXJ1Z3VsYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TbW9rZWQgcHJvc2NpdXR0byB0b3BwZWQgd2l0aCBhcnVndWxhLCBtdXNocm9vbXMsIGFuZCBwYXJtZXNhbiBpbiB0b21hdG8gcHVyZWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlZlZ2V0YXJpYW5hPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQyNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJvYXN0ZWQgUGVwcGVycywgYXViZXJnaW5lcywgdG9tYXRvZXMsIG9saXZlcywgYW5kIHp1Y2NoaW5pIGZvciBoZWFsdGh5IG9wdGlvbiB3aXRob3V0IG1lYXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlF1YXR0cm8gRm9ybWFnZ2k8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDIwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3JlYW15IHByb3ZvbG9uZSwgcGFybWlnaWFubyByZWdnaWFubywgc3RyYWNjaGlubywgYW5kIG1venphcmVsbGEgY29tYmluZSBmb3IgdWx0aW1hdGUgY2hlZXNpbmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RGlhdm9sYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DbGFzc2ljIHBlcHBlcm9uaSBwaXp6YSBtYWRlIHdpdGggc3BpY3kgc2FsYW1pPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GcnV0dGkgZGkgTWFyZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMzA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UYXN0eSBzaHJpbXAgYW5kIG11c3NlbHMgY29tYmluZSB3aXRoIGdhcmxpYyBhbmQgcGFyc2xleSBmb3IgYWxsIG91ciBzZWFmb29kIGxvdmVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDI+TWFpbiBEaXNoZXM8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Gb2NhY2NpYSBCYXJlc2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDE1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJlc2ggb2xpdmVzLCBzbGljZWQgc2F1c2FnZSwgYW5kIGNoZXJyeSB0b21hdG9lcyBiYWtlZCB3aXRoIHBvdGF0by1pbmZ1c2VkIGRvdWdoPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CYXJpbGxhIExhc2FnbmE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDE1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVsaWNpb3VzIHJpY290dGEgY2hlZXNlLCBtb3p6YXJlbGxhLCBhbmQgcGFybWVzYW4gYmFrZWQgaW4gbGF5ZXJzIG9mIHNhdXNhZ2UgYW5kIGJlZWY8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZldHR1Y2NpbmUgQWxmcmVkbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DcmVhbXkgYWxmcmVkbyBzYXVjZSBjb3ZlcmluZyBzbGljZWQgY2hpY2tlbiBhbmQgZmV0dHVjY2luZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGFzdGEgTmFwb2xldGFuYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UYXN0eSBzcGFnaGV0dGkgY292ZXJlZCBpbiBtYXJpbmFyYSBzYXVjZSwgaG9tZW1hZGUgbWVhdGJhbGxzLCBhbmQgcGFybWVzYW4gY2hlZXNlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYXN0YSBhbGwnT3J0b2xhbmE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDE1PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Um9hc3RlZCBiZWxsIHBlcHBlcnMsIGNhcnJvdHMsIHp1Y2NoaW5pLCBhbmQgZWdncGxhbnQgY29tYmluZSB3aXRoIGNyZWFteSB0b21hdG8gc2F1Y2UgZm9yIHZlZ2FuIHBhc3RhPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoMj5CZXZlcmFnZXM8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Tb2RhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQyPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHIuIFBlcHBlciwgQ29jYS1Db2xhLCBGYW50YSwgU3ByaXRlLCBvciBCYXJxJ3MgUm9vdCBCZWVyLCBzZXJ2ZWQgd2l0aCBpY2UuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Td2VldC9VbnN3ZWV0IFRlYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZyZXNobHkgYnJld2VkIGFuZCBzZXJ2ZWQgd2l0aCBpY2UuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5MZW1vbmFkZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNob2ljZSBvZiByYXNwYmVycnksIHN0cmF3YmVycnksIHBlYWNoLCBvciBibHVlYmVycnkgZmxhdm9yIGlzIG9mZmVyZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QaW5vdCBCaWFuY288L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDkgLyAkMjc8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FbGVnYW50IHdoaXRlIHdpbmUgd2l0aCByZWZpbmVkIGhpbnRzIG9mIGNpdHJ1cywgYWxtb25kcywgYW5kIHJpcGUgZnJ1aXQuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5WaWV0dGkgQmFyYmVyYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTAgLyAkMzA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DbGFzc2ljIHJlZCB3aW5lIHdpdGggcmljaCwgZWFydGh5IGZydWl0IGZsYXZvci48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZhdHRvcmlhIExhIFZpYWxsYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTIgLyAkMzI8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TcGFya2xpbmcgd2luZSB3aXRoIGVsZWdhbnQgYXJvbWFzIG9mIGxpdmVseSBncmVlbiBmcnVpdCwgYmxvc3NvbXMsIGFuZCB3YXJtIHRvYXN0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDI+RGVzc2VydHM8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5HZWxhdG88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DbGFzc2ljIGZsYXZvcnMgbGlrZSBwaXN0YWNoaW8sIGRhcmsgY2hvY29sYXRlLCBhbmQgc3RyYWNjaWF0ZWxsYSB0byBpbnZpZ29yYXRpbmcgcmFzcGJlcnJ5LCBsZW1vbiwgYW5kIHN0cmF3YmVycnkuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYW5uYSBDb3R0YTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kNTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZyZXNoIGN1c3RhcmQtbGlrZSBjcmVhbSB0b3BwZWQgd2l0aCBmcmVzaCBmcnVpdCBhbmQgZHJpenpsZWQgd2l0aCBjYXJhbWVsIHNhdWNlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VGlyYW1pc3U8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDc8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EZWxpY2lvdXMgbGF5ZXJzIG9mIGNyZWFteSBtYXNjYXJwb25lIGFuZCBjb2ZmZWUtc29ha2VkIGxhZHlmaW5nZXJzLCBjb21iaW5lZCB3aXRoIGhpbnRzIG9mIGxpcXVvci48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRpdkNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBpbm5lckhUTUwpO1xuICAgIHJldHVybiBkaXZDb250YWluZXI7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNRU5VOyIsImltcG9ydCBwaXp6YVN2ZyBmcm9tICcuLi9zdmcvcGl6emEuc3ZnJztcblxuaW1wb3J0IHViZXJTdmcgZnJvbSAnLi4vc3ZnL3ViZXJlYXRzLnN2Zyc7XG5pbXBvcnQgZ3J1Ymh1YlN2ZyBmcm9tICcuLi9zdmcvZ3J1Ymh1Yi5zdmcnO1xuaW1wb3J0IHBvc3RtYXRlc1N2ZyBmcm9tICcuLi9zdmcvcG9zdG1hdGVzLnN2Zyc7XG5cbmltcG9ydCBpbnN0YWdyYW1TdmcgZnJvbSAnLi4vc3ZnL2luc3RhZ3JhbS5zdmcnO1xuaW1wb3J0IHR3aXR0ZXJTdmcgZnJvbSAnLi4vc3ZnL3R3aXR0ZXIuc3ZnJztcbmltcG9ydCBmYWNlYm9va1N2ZyBmcm9tICcuLi9zdmcvZmFjZWJvb2suc3ZnJztcblxuaW1wb3J0IG92ZW5JbWcgZnJvbSAnLi4vaW1hZ2VzL292ZW4uanBnJztcbmltcG9ydCBwaXp6YUltZyBmcm9tICcuLi9pbWFnZXMvcGl6emEuanBnJztcbmltcG9ydCBjaGVmSW1nIGZyb20gJy4uL2ltYWdlcy9jaGVmLmpwZyc7XG5cbmNvbnN0IE1BSU4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2UocGFnZUhUTUwpIHtcbiAgICBNQUlOLmlubmVySFRNTCA9IFwiXCI7XG4gICAgTUFJTi5hcHBlbmRDaGlsZChwYWdlSFRNTCk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZElNRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5iYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBiYWNrZ3JvdW5kSU1HLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7TWF0aC5taW4od2luZG93LnNjcm9sbFkgKiAwLjI1LCAxMDApfXB4KWA7XG4gICAgfTtcbn1cblxuY29uc3QgcmVuZGVySU1HID0ge1xuICAgIEhFQURFUjogKCkgPT4ge1xuICAgICAgICBjb25zdCBQSVpaQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5waXp6YScpO1xuICAgICAgICBQSVpaQS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBpenphU3ZnKTtcbiAgICB9LFxuICAgIEZPT1RFUjogKCkgPT4ge1xuICAgICAgICBjb25zdCBJTlNUQUdSQU0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuaW5zdGFncmFtJyk7XG4gICAgICAgIElOU1RBR1JBTS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGluc3RhZ3JhbVN2Zyk7XG5cbiAgICAgICAgY29uc3QgVFdJVFRFUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy50d2l0dGVyJyk7XG4gICAgICAgIFRXSVRURVIuc2V0QXR0cmlidXRlKCdzcmMnLCB0d2l0dGVyU3ZnKTtcblxuICAgICAgICBjb25zdCBGQUNFQk9PSyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5mYWNlYm9vaycpO1xuICAgICAgICBGQUNFQk9PSy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZhY2Vib29rU3ZnKTtcbiAgICB9LFxuICAgIEhPTUU6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5iYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICAgIGJhY2tncm91bmRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBvdmVuSW1nKTtcblxuICAgICAgICBjb25zdCBVQkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnViZXInKTtcbiAgICAgICAgVUJFUi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHViZXJTdmcpO1xuXG4gICAgICAgIGNvbnN0IEdSVUJIVUIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuZ3J1Ymh1YicpO1xuICAgICAgICBHUlVCSFVCLnNldEF0dHJpYnV0ZSgnc3JjJywgZ3J1Ymh1YlN2Zyk7XG5cbiAgICAgICAgY29uc3QgUE9TVE1BVEVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnBvc3RtYXRlcycpO1xuICAgICAgICBQT1NUTUFURVMuc2V0QXR0cmlidXRlKCdzcmMnLCBwb3N0bWF0ZXNTdmcpO1xuICAgIH0sXG4gICAgTUVOVTogKCkgPT4ge1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLmJhY2tncm91bmQtaW1hZ2UnKTtcbiAgICAgICAgYmFja2dyb3VuZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBpenphSW1nKTtcbiAgICB9LFxuICAgIENPTlRBQ1Q6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5iYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICAgIGJhY2tncm91bmRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBjaGVmSW1nKTtcblxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpO1xuICAgICAgICBjb25zdCBjdXJyRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgZGF0ZUlucHV0Lm1pbiA9IGN1cnJEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgICBkYXRlSW5wdXQubWF4ID0gbmV3IERhdGUoY3VyckRhdGUuZ2V0VGltZSgpICsgKDM2MDAgKiAyNCAqIDE0ICogMTAwMCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGltZVwiXScpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWREYXkgPSBuZXcgRGF0ZShkYXRlSW5wdXQudmFsdWUpLmdldERheSgpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWREYXkgPT0gNiB8fCBzZWxlY3RlZERheSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGltZUlucHV0Lm1pbiA9ICcxMTozMCc7XG4gICAgICAgICAgICAgICAgdGltZUlucHV0Lm1heCA9ICcxNDozMCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbWVJbnB1dC5taW4gPSAnMTA6MDAnO1xuICAgICAgICAgICAgICAgIHRpbWVJbnB1dC5tYXggPSAnMjM6MDAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgcmVuZGVyUGFnZSwgcmVuZGVySU1HIH07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9hc3NldHMvZnVuY3Rpb25zL2hvbWUuanMnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vYXNzZXRzL2Z1bmN0aW9ucy9tZW51LmpzJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2Fzc2V0cy9mdW5jdGlvbnMvY29udGFjdC5qcyc7XG5pbXBvcnQgeyByZW5kZXJQYWdlLCByZW5kZXJJTUcgfSBmcm9tICcuL2Fzc2V0cy9mdW5jdGlvbnMvcmVuZGVyLmpzJztcblxuKGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgcmVuZGVySU1HLkhFQURFUigpO1xuICAgIHJlbmRlcklNRy5GT09URVIoKTtcbiAgICByZW5kZXJQYWdlKGNvbnRhY3RQYWdlKTtcbiAgICByZW5kZXJJTUcuQ09OVEFDVCgpO1xuXG4gICAgKGZ1bmN0aW9uIGluaXRpYXRlTGlua3MoKSB7XG4gICAgICAgIGNvbnN0IGhvbWVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lLWxpbmsnKTtcbiAgICAgICAgY29uc3QgbWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtbGluaycpO1xuICAgICAgICBjb25zdCBjb250YWN0TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdC1saW5rJyk7XG5cbiAgICAgICAgaG9tZUxpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyUGFnZShob21lUGFnZSk7XG4gICAgICAgICAgICByZW5kZXJJTUcuSE9NRSgpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgbWVudUxpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyUGFnZShtZW51UGFnZSk7XG4gICAgICAgICAgICByZW5kZXJJTUcuTUVOVSgpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29udGFjdExpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyUGFnZShjb250YWN0UGFnZSk7XG4gICAgICAgICAgICByZW5kZXJJTUcuQ09OVEFDVCgpO1xuICAgICAgICB9KSk7XG4gICAgfSkoKTtcbn0pKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==