import './style.scss';

import homePage from './assets/functions/home.js';
import menuPage from './assets/functions/menu.js';
import contactPage from './assets/functions/contact.js';
import { renderPage, renderIMG } from './assets/functions/render.js';

(function init() {
    renderIMG.HEADER();
    renderIMG.FOOTER();
    renderPage(menuPage);
    renderIMG.MENU();

    (function initiateLinks() {
        const homeLinks = document.querySelectorAll('.home-link');
        const menuLinks = document.querySelectorAll('.menu-link');
        const contactLinks = document.querySelectorAll('.contact-link');

        homeLinks.forEach(link => link.addEventListener('click', () => {
            renderPage(homePage);
            renderIMG.HOME();
        }));

        menuLinks.forEach(link => link.addEventListener('click', () => {
            renderPage(menuPage);
            renderIMG.MENU();
        }));

        contactLinks.forEach(link => link.addEventListener('click', () => {
            renderPage(contactPage);
            renderIMG.CONTACT();
        }));
    })();
})();

