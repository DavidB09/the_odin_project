/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/functions/home.js

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

/* harmony default export */ var home = (HOMEPAGE);
;// CONCATENATED MODULE: ./src/assets/functions/menu.js

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

/* harmony default export */ var menu = (MENU);
;// CONCATENATED MODULE: ./src/assets/functions/contact.js

const CONTACT = (() => {
    const divContainer = document.createElement('div');
    divContainer.classList = 'content-container contact';
    const innerHTML = `
        <div class="image-container">
            <h1>Contact</h1>
            <img class="background-image" />
        </div>

        <div class="background-container">

            <form class="reserve-container">
                <h2>Make a Reservation</h2>

                <div class="row-container">
                    <label for="reserve-date">
                        Date:
                        <input id="reserve-date" type="date" name="date" required/>
                    </label>
                    <label for="reserve-time">
                        Time:
                        <input id="reserve-time" type="time" name="time" step="60" required/>
                    </label>
                    <label for="reserve-guest">
                        # of Guests:
                        <input id="reserve-guest" type="number" name="guest" min="1" max="12" required/>
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
                    <input id="reserve-email" type="email" name="email" placeholder="Enter your email" required/>
                </label>
                <button type="submit">Submit Request</button>
            </form>

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

/* harmony default export */ var contact = (CONTACT);
;// CONCATENATED MODULE: ./src/assets/svg/pizza.svg
var pizza_namespaceObject = __webpack_require__.p + "1aed684f128ff5d430d7.svg";
;// CONCATENATED MODULE: ./src/assets/svg/ubereats.svg
var ubereats_namespaceObject = __webpack_require__.p + "388203212d0d5093c052.svg";
;// CONCATENATED MODULE: ./src/assets/svg/grubhub.svg
var grubhub_namespaceObject = __webpack_require__.p + "c9e34602cdcdf90a8942.svg";
;// CONCATENATED MODULE: ./src/assets/svg/postmates.svg
var postmates_namespaceObject = __webpack_require__.p + "b5db2ba3cf1b35a380d5.svg";
;// CONCATENATED MODULE: ./src/assets/svg/instagram.svg
var instagram_namespaceObject = __webpack_require__.p + "e28183337eda7f3d71fa.svg";
;// CONCATENATED MODULE: ./src/assets/svg/twitter.svg
var twitter_namespaceObject = __webpack_require__.p + "fd562128b52ac86a3201.svg";
;// CONCATENATED MODULE: ./src/assets/svg/facebook.svg
var facebook_namespaceObject = __webpack_require__.p + "2ad0cb1401716d70ea27.svg";
;// CONCATENATED MODULE: ./src/assets/images/oven.jpg
var oven_namespaceObject = __webpack_require__.p + "3516977b2c35f26ab04e.jpg";
;// CONCATENATED MODULE: ./src/assets/images/pizza.jpg
var images_pizza_namespaceObject = __webpack_require__.p + "9b82cd5a289766cfde52.jpg";
;// CONCATENATED MODULE: ./src/assets/images/chef.jpg
var chef_namespaceObject = __webpack_require__.p + "9692d5b1159dbb266c9e.jpg";
;// CONCATENATED MODULE: ./src/assets/functions/render.js














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
        PIZZA.setAttribute('src', pizza_namespaceObject);
    },
    FOOTER: () => {
        const INSTAGRAM = document.querySelector('img.instagram');
        INSTAGRAM.setAttribute('src', instagram_namespaceObject);

        const TWITTER = document.querySelector('img.twitter');
        TWITTER.setAttribute('src', twitter_namespaceObject);

        const FACEBOOK = document.querySelector('img.facebook');
        FACEBOOK.setAttribute('src', facebook_namespaceObject);
    },
    HOME: () => {
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', oven_namespaceObject);

        const UBER = document.querySelector('img.uber');
        UBER.setAttribute('src', ubereats_namespaceObject);

        const GRUBHUB = document.querySelector('img.grubhub');
        GRUBHUB.setAttribute('src', grubhub_namespaceObject);

        const POSTMATES = document.querySelector('img.postmates');
        POSTMATES.setAttribute('src', postmates_namespaceObject);
    },
    MENU: () => {
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', images_pizza_namespaceObject);
    },
    CONTACT: () => {
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', chef_namespaceObject);

        const dateInput = document.querySelector('input[type="date"]');
        const currDate = new Date();

        dateInput.min = currDate.toISOString().slice(0, 10);
        dateInput.max = new Date(currDate.getTime() + (3600 * 24 * 13 * 1000)).toISOString().slice(0, 10);
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


;// CONCATENATED MODULE: ./src/script.js







(function init() {
    renderIMG.HEADER();
    renderIMG.FOOTER();
    renderPage(home);
    renderIMG.HOME();

    (function initiateLinks() {
        const homeLinks = document.querySelectorAll('.home-link');
        const menuLinks = document.querySelectorAll('.menu-link');
        const contactLinks = document.querySelectorAll('.contact-link');

        homeLinks.forEach(link => link.addEventListener('click', () => {
            renderPage(home);
            renderIMG.HOME();
        }));

        menuLinks.forEach(link => link.addEventListener('click', () => {
            renderPage(menu);
            renderIMG.MENU();
        }));

        contactLinks.forEach(link => link.addEventListener('click', () => {
            renderPage(contact);
            renderIMG.CONTACT();
        }));
    })();
})();


/******/ })()
;