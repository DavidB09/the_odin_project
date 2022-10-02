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

const CONTACT = `
<div class="content-container contact">
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
</div>
`;

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

const MENU = `
    <div class="content-container menu">
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
    </div>
`;

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
    window.onscroll = () => {
        imgContainer.style.backgroundPosition = `center -${window.scrollY * 1.1}px`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBZSxPQUFPOzs7Ozs7Ozs7OztBQzVEdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLCtEQUFlLFFBQVE7Ozs7Ozs7Ozs7O0FDeEN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUXFCO0FBQ3hDO0FBQzBDO0FBQ0U7QUFDSTtBQUNoRDtBQUNnRDtBQUNKO0FBQ0U7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHFCQUFxQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMkNBQVE7QUFDMUMsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsK0NBQVk7QUFDbEQ7QUFDQTtBQUNBLG9DQUFvQyw2Q0FBVTtBQUM5QztBQUNBO0FBQ0EscUNBQXFDLDhDQUFXO0FBQ2hELEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUNBQWlDLDhDQUFPO0FBQ3hDO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQVU7QUFDOUM7QUFDQTtBQUNBLHNDQUFzQywrQ0FBWTtBQUNsRCxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHNCO0FBQ3RCO0FBQ2tEO0FBQ0E7QUFDTTtBQUNhO0FBQ3JFO0FBQ0E7QUFDQSxJQUFJLHlFQUFnQjtBQUNwQixJQUFJLHlFQUFnQjtBQUNwQixJQUFJLHVFQUFVLENBQUMsaUVBQVE7QUFDdkIsSUFBSSx1RUFBYztBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzPzRkMjEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hc3NldHMvZnVuY3Rpb25zL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcclxuY29uc3QgQ09OVEFDVCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyIGNvbnRhY3RcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aDE+Q29udGFjdDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2ZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aDI+TWFrZSBhIFJlc2VydmF0aW9uPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc2VydmUtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgRGF0ZTpcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInJlc2VydmUtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIi8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLXRpbWVcIj5cclxuICAgICAgICAgICAgICAgIFRpbWU6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNlcnZlLXRpbWVcIiB0eXBlPVwidGltZVwiIG5hbWU9XCJ0aW1lXCIvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzZXJ2ZS1ndWVzdFwiPlxyXG4gICAgICAgICAgICAgICAgIyBvZiBHdWVzdHM6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZXNlcnZlLWd1ZXN0XCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJndWVzdFwiIG1pbj1cIjFcIiBtYXg9XCIxMlwiLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPCEtLVNFVCBMSU1JVCBPTiBUSU1FIEFORCBEQVRFLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3ctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXNlcnZlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIFNwZWNpYWwgUmVxdWVzdHM6XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZXNlcnZlLWluZm9cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicmVzZXJ2ZS1lbWFpbFwiPlxyXG4gICAgICAgICAgICBFbWFpbDpcclxuICAgICAgICAgICAgPGlucHV0IGlkPVwicmVzZXJ2ZS1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQgUmVxdWVzdDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyPkNvbnRhY3QgVXMhPC9oMj5cclxuICAgICAgICA8cD5DYWxsIHVzIGFueXRpbWUgYXQgPGEgaHJlZj1cInRlbDoxMjM0NTY3ODkwXCI+KDEyMyktNDU2LTc4OTA8L2E+PC9wPlxyXG4gICAgICAgIDxwPk9yIHNlbmQgYW4gZW1haWwgdG8gPGEgaHJlZj1cIm1haWx0bzpnaWFubmlwaXp6YUBlbWFpbC5jb21cIj5naWFubmlwaXp6YUBlbWFpbC5jb208L2E+PC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImFkZHJlc3MtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyPlZpc2l0IFVzITwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhvdXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMz5Ib3Vyczo8L2gzPlxyXG4gICAgICAgICAgICA8cD5UdWVzZGF5OiAxMTozMCBhLm0uIC0gMjozMCBwLm0uPC9wPlxyXG4gICAgICAgICAgICA8cD5XZWQsIFRodXJzLCBGcmksIFNhdDogMTA6MDBhbSAtIDM6MDAgYS5tLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD5XZSBwcm9taXNlIHlvdSB3b24ndCByZWdyZXQgdHJ5aW5nIG91dCBmcmVzaGx5IGJha2VkIHBpenphIGFuZCBJdGFsaWFuIGN1aXNpbmUhPC9wPlxyXG4gICAgICAgIDxwPjEyMyBGb29kIFN0cmVldCwgRm9ydCBXb3J0aCwgVFggNzYxNzk8L3A+XHJcbiAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ0MjkyNzAuNzAzMDQ5NDUxMyEyZC05Ny4yODkzMTg5NTAwMDAwMSEzZDMyLjgwMDgxMjk1MDAwMDAxITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4NjRlNmUxMjJkYzgwN2FkJTNBMHhhNGFmOGJmOGRkNjlhY2JkITJzRm9ydCUyMFdvcnRoJTJDJTIwVFghNWUwITNtMiExc2VuITJzdXMhNHYxNjYzMzY1ODY2MzUyITVtMiExc2VuITJzdXNcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENPTlRBQ1Q7IiwiXHJcbmNvbnN0IEhPTUVQQUdFID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdjb250ZW50LWNvbnRhaW5lciBob21lJztcclxuICAgIGNvbnN0IGlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5DaWFvIGEgR2lhbm5pJ3MgUGl6emEgU3RvcCE8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDI+RW5qb3kgYSB0YXN0ZSBvZiBJdGFseSE8L2gyPlxyXG5cclxuICAgICAgICAgICAgPHA+Q29tZSBzdG9wIGJ5IGZvciBhIG92ZW4tYmFrZWQgcGl6emEgdG9wcGVkIHdpdGggc2F2b3VyeSBtZWF0IGFuZCBmcmVzaCB2ZWdldGFibGVzLCBhbG9uZyB3aXRoIHJlZnJlc2hpbmcgYmV2ZXJhZ2VzLCBhbmQgYSBkZWxpY2lvdXMgZGVzc2VydCBmb3IgdGhlIGdyYW4gZmluYWxlLiBXaGV0aGVyIGZvciBhIGZhbWlseSBuaWdodCBvdXQsIGZpcnN0IGRhdGUsIG9yIGdldCB0b2dldGhlciB3aXRoIG9sZCBmcmllbmRzLCBvdXIgYXV0aGVudGljIEl0YWxpYW4gbWVhbHMgd2lsbCBtYWtlIHlvdSBmZWVsIHJpZ2h0IGF0IGhvbWUuPC9wPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbj5WaWV3IE1lbnU8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxwPk9yPC9wPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbj5NYWtlIGEgUmVzZXJ2YXRpb248L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkaXZpZGVyXCI+PC9zcGFuPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgzPlZpc2l0IHVzIGluIGRvd250b3duIEZvcnQgV29ydGghPC9oMz5cclxuICAgICAgICAgICAgPHA+MTIzIEZvb2QgU3RyZWV0LCBGb3J0IFdvcnRoLCBUWCA3NjE3OTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5PcmRlciBPbmxpbmUgYW5kIFRha2VvdXQhPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ1YmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJncnViaHViXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3N0bWF0ZXNcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgZGl2Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGlubmVySFRNTCk7XHJcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyO1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSE9NRVBBR0U7IiwiXHJcbmNvbnN0IE1FTlUgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXIgbWVudVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxPk1lbsO5PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMj5BcHBldGl6ZXJzPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFscy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UGVzdG8gQnJlYWRzdGlja3M8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kNzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q3J1bmNoeSBicmVhZHN0aWNrcyBiYWtlZCB3aXRoIHBlc3RvIGFuZCBjb3ZlcmVkIGluIG1venphcmVsbGEgY2hlZXNlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NYW1tYSdzIEhvbWUtc3ByZWFkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDg8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkVnZ3BsYW50IHNwcmVhZCBzZWFzb25lZCB3aXRoIGJsYWNrIHBlcHBlciBhbmQgZ2FybGljLCBzZXJ2ZWQgd2l0aCB0b2FzdGVkIGJyZWFkPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DYWVzYXIgU2FsYWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkZyZXNoIHJvbWFpbmUgc2VydmVkIHdpdGggY3Jpc3B5IGNyb3V0b25zLCBwYXJtZXNhbiBjaGVlc2UsIGFuZCBob21lbWFkZSBjYWVzYXIgZHJlc3Npbmc8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkhvdXNlIEdyZWVuIFNhbGFkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDEwPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5NaXhlZCBncmVlbnMgd2l0aCBjaG9wcGVkIHZlZ2V0YWJsZXMsIHBhcm1lc2FuLCBhbmQgaG91c2UgdmluYWlncmV0dGU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJlZWYgU3BpZWRpbmk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyBJdGFsaWFuLXN0eWxlIGtlYmFicyBob2xkaW5nIG1hcmluYXRlZCBzdGVhayBwaW53aGVlbHMgYW5kIHNlcnZlZCB3aXRoIHRvbWF0byBkaXBwaW5nIHNhdWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGgyPlBpenphczwvaDI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1hcmdoZXJpdGE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyB0b21hdG8gYW5kIGJhc2lsIGJha2VkIGluIG1venphcmVsbGEgYW5kIHRvbWF0byBwdXJlZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UHJvc2NpdXR0byAmIEFydWd1bGE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlNtb2tlZCBwcm9zY2l1dHRvIHRvcHBlZCB3aXRoIGFydWd1bGEsIG11c2hyb29tcywgYW5kIHBhcm1lc2FuIGluIHRvbWF0byBwdXJlZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+VmVnZXRhcmlhbmE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlJvYXN0ZWQgUGVwcGVycywgYXViZXJnaW5lcywgdG9tYXRvZXMsIG9saXZlcywgYW5kIHp1Y2NoaW5pIGZvciBoZWFsdGh5IG9wdGlvbiB3aXRob3V0IG1lYXQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlF1YXR0cm8gRm9ybWFnZ2k8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNyZWFteSBwcm92b2xvbmUsIHBhcm1pZ2lhbm8gcmVnZ2lhbm8sIHN0cmFjY2hpbm8sIGFuZCBtb3p6YXJlbGxhIGNvbWJpbmUgZm9yIHVsdGltYXRlIGNoZWVzaW5lc3M8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRpYXZvbGE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMjA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNsYXNzaWMgcGVwcGVyb25pIHBpenphIG1hZGUgd2l0aCBzcGljeSBzYWxhbWk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZydXR0aSBkaSBNYXJlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDMwPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5UYXN0eSBzaHJpbXAgYW5kIG11c3NlbHMgY29tYmluZSB3aXRoIGdhcmxpYyBhbmQgcGFyc2xleSBmb3IgYWxsIG91ciBzZWFmb29kIGxvdmVyczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMj5NYWluIERpc2hlczwvaDI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZvY2FjY2lhIEJhcmVzZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQxNTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RnJlc2ggb2xpdmVzLCBzbGljZWQgc2F1c2FnZSwgYW5kIGNoZXJyeSB0b21hdG9lcyBiYWtlZCB3aXRoIHBvdGF0by1pbmZ1c2VkIGRvdWdoPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5CYXJpbGxhIExhc2FnbmE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyByaWNvdHRhIGNoZWVzZSwgbW96emFyZWxsYSwgYW5kIHBhcm1lc2FuIGJha2VkIGluIGxheWVycyBvZiBzYXVzYWdlIGFuZCBiZWVmPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GZXR0dWNjaW5lIEFsZnJlZG88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNyZWFteSBhbGZyZWRvIHNhdWNlIGNvdmVyaW5nIHNsaWNlZCBjaGlja2VuIGFuZCBmZXR0dWNjaW5lPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYXN0YSBOYXBvbGV0YW5hPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDE1PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5UYXN0eSBzcGFnaGV0dGkgY292ZXJlZCBpbiBtYXJpbmFyYSBzYXVjZSwgaG9tZW1hZGUgbWVhdGJhbGxzLCBhbmQgcGFybWVzYW4gY2hlZXNlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYXN0YSBhbGwnT3J0b2xhbmE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlJvYXN0ZWQgYmVsbCBwZXBwZXJzLCBjYXJyb3RzLCB6dWNjaGluaSwgYW5kIGVnZ3BsYW50IGNvbWJpbmUgd2l0aCBjcmVhbXkgdG9tYXRvIHNhdWNlIGZvciB2ZWdhbiBwYXN0YTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMj5CZXZlcmFnZXM8L2gyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWxzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Tb2RhPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkRyLiBQZXBwZXIsIENvY2EtQ29sYSwgRmFudGEsIFNwcml0ZSwgb3IgQmFycSdzIFJvb3QgQmVlciwgc2VydmVkIHdpdGggaWNlLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U3dlZXQvVW5zd2VldCBUZWE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RnJlc2hseSBicmV3ZWQgYW5kIHNlcnZlZCB3aXRoIGljZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxlbW9uYWRlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNob2ljZSBvZiByYXNwYmVycnksIHN0cmF3YmVycnksIHBlYWNoLCBvciBibHVlYmVycnkgZmxhdm9yIGlzIG9mZmVyZWQuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QaW5vdCBCaWFuY288L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kOSAvICQyNzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+RWxlZ2FudCB3aGl0ZSB3aW5lIHdpdGggcmVmaW5lZCBoaW50cyBvZiBjaXRydXMsIGFsbW9uZHMsIGFuZCByaXBlIGZydWl0LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+VmlldHRpIEJhcmJlcmE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4kMTAgLyAkMzA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNsYXNzaWMgcmVkIHdpbmUgd2l0aCByaWNoLCBlYXJ0aHkgZnJ1aXQgZmxhdm9yLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RmF0dG9yaWEgTGEgVmlhbGxhPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDEyIC8gJDMyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TcGFya2xpbmcgd2luZSB3aXRoIGVsZWdhbnQgYXJvbWFzIG9mIGxpdmVseSBncmVlbiBmcnVpdCwgYmxvc3NvbXMsIGFuZCB3YXJtIHRvYXN0LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMj5EZXNzZXJ0czwvaDI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkdlbGF0bzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQ0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5DbGFzc2ljIGZsYXZvcnMgbGlrZSBwaXN0YWNoaW8sIGRhcmsgY2hvY29sYXRlLCBhbmQgc3RyYWNjaWF0ZWxsYSB0byBpbnZpZ29yYXRpbmcgcmFzcGJlcnJ5LCBsZW1vbiwgYW5kIHN0cmF3YmVycnkuPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QYW5uYSBDb3R0YTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiQ1PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5GcmVzaCBjdXN0YXJkLWxpa2UgY3JlYW0gdG9wcGVkIHdpdGggZnJlc2ggZnJ1aXQgYW5kIGRyaXp6bGVkIHdpdGggY2FyYW1lbCBzYXVjZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRpcmFtaXN1PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JDc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkRlbGljaW91cyBsYXllcnMgb2YgY3JlYW15IG1hc2NhcnBvbmUgYW5kIGNvZmZlZS1zb2FrZWQgbGFkeWZpbmdlcnMsIGNvbWJpbmVkIHdpdGggaGludHMgb2YgbGlxdW9yLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTUVOVTsiLCJpbXBvcnQgcGl6emFTdmcgZnJvbSAnLi4vc3ZnL3BpenphLnN2Zyc7XHJcblxyXG5pbXBvcnQgdWJlclN2ZyBmcm9tICcuLi9zdmcvdWJlcmVhdHMuc3ZnJztcclxuaW1wb3J0IGdydWJodWJTdmcgZnJvbSAnLi4vc3ZnL2dydWJodWIuc3ZnJztcclxuaW1wb3J0IHBvc3RtYXRlc1N2ZyBmcm9tICcuLi9zdmcvcG9zdG1hdGVzLnN2Zyc7XHJcblxyXG5pbXBvcnQgaW5zdGFncmFtU3ZnIGZyb20gJy4uL3N2Zy9pbnN0YWdyYW0uc3ZnJztcclxuaW1wb3J0IHR3aXR0ZXJTdmcgZnJvbSAnLi4vc3ZnL3R3aXR0ZXIuc3ZnJztcclxuaW1wb3J0IGZhY2Vib29rU3ZnIGZyb20gJy4uL3N2Zy9mYWNlYm9vay5zdmcnO1xyXG5cclxuY29uc3QgTUFJTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2UocGFnZUhUTUwpIHtcclxuICAgIE1BSU4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIE1BSU4uYXBwZW5kQ2hpbGQocGFnZUhUTUwpO1xyXG5cclxuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5pbWFnZS1jb250YWluZXInKTtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBpbWdDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYGNlbnRlciAtJHt3aW5kb3cuc2Nyb2xsWSAqIDEuMX1weGA7XHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJJTUcgPSB7XHJcbiAgICBIRUFERVI6ICgpID0+IHtcclxuICAgICAgICBjb25zdCBQSVpaQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5waXp6YScpO1xyXG4gICAgICAgIFBJWlpBLnNldEF0dHJpYnV0ZSgnc3JjJywgcGl6emFTdmcpO1xyXG4gICAgfSxcclxuICAgIEZPT1RFUjogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IElOU1RBR1JBTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5pbnN0YWdyYW0nKTtcclxuICAgICAgICBJTlNUQUdSQU0uc2V0QXR0cmlidXRlKCdzcmMnLCBpbnN0YWdyYW1TdmcpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgVFdJVFRFUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy50d2l0dGVyJyk7XHJcbiAgICAgICAgVFdJVFRFUi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHR3aXR0ZXJTdmcpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgRkFDRUJPT0sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcuZmFjZWJvb2snKTtcclxuICAgICAgICBGQUNFQk9PSy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZhY2Vib29rU3ZnKTtcclxuICAgIH0sXHJcbiAgICBIT01FOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgVUJFUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy51YmVyJyk7XHJcbiAgICAgICAgVUJFUi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHViZXJTdmcpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgR1JVQkhVQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZy5ncnViaHViJyk7XHJcbiAgICAgICAgR1JVQkhVQi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdydWJodWJTdmcpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgUE9TVE1BVEVTID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nLnBvc3RtYXRlcycpO1xyXG4gICAgICAgIFBPU1RNQVRFUy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBvc3RtYXRlc1N2Zyk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgcmVuZGVyUGFnZSwgcmVuZGVySU1HIH07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vYXNzZXRzL2Z1bmN0aW9ucy9ob21lLmpzJztcclxuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vYXNzZXRzL2Z1bmN0aW9ucy9tZW51LmpzJztcclxuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vYXNzZXRzL2Z1bmN0aW9ucy9jb250YWN0LmpzJztcclxuaW1wb3J0IHsgcmVuZGVyUGFnZSwgcmVuZGVySU1HIH0gZnJvbSAnLi9hc3NldHMvZnVuY3Rpb25zL3JlbmRlci5qcyc7XHJcblxyXG4oZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIHJlbmRlcklNRy5IRUFERVIoKTtcclxuICAgIHJlbmRlcklNRy5GT09URVIoKTtcclxuICAgIHJlbmRlclBhZ2UoaG9tZVBhZ2UpO1xyXG4gICAgcmVuZGVySU1HLkhPTUUoKTtcclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=