import './style.scss';

import pizzaSvg from './assets/svg/pizza.svg';
import uberSvg from './assets/svg/uber-eats.svg';
import grubhubSvg from './assets/svg/grubhub.svg';


(function createIMG() {
    const pizzaImg = document.querySelector('img.pizza');
    pizzaImg.setAttribute('src', pizzaSvg);

    const uberImg = document.querySelector('img.uber');
    uberImg.setAttribute('src', uberSvg);

    const grubhubImg = document.querySelector('img.grubhub');
    grubhubImg.setAttribute('src', grubhubSvg);
})();