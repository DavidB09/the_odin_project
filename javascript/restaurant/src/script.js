import './style.scss';

import homePage from './assets/functions/home.js';
import { renderPage, renderIMG } from './assets/functions/render.js';

(function init() {
    renderIMG.FOOTER();
    // renderPage(homePage);
    renderIMG.HOME();
})();