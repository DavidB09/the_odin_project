import './style.scss';

import homePage from './assets/functions/home.js';
import menuPage from './assets/functions/menu.js';
import contactPage from './assets/functions/contact.js';
import { renderPage, renderIMG } from './assets/functions/render.js';

(function init() {
    renderIMG.FOOTER();
    // renderPage(menuPage);
    renderIMG.HOME();
})();