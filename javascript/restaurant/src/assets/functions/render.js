import pizzaSvg from '../svg/pizza.svg';

import uberSvg from '../svg/ubereats.svg';
import grubhubSvg from '../svg/grubhub.svg';
import postmatesSvg from '../svg/postmates.svg';

import instagramSvg from '../svg/instagram.svg';
import twitterSvg from '../svg/twitter.svg';
import facebookSvg from '../svg/facebook.svg';

const MAIN = document.querySelector('main');

function renderPage(pageHTML) {
    MAIN.innerHTML = "";
    MAIN.insertAdjacentHTML("afterbegin", pageHTML);

    const imgContainer = document.querySelector('div.image-container');
    window.onscroll = () => {
        imgContainer.style.backgroundPosition = `center -${window.scrollY * 1.1}px`;
    };
}

const renderIMG = {
    HOME: () => {
        const PIZZA = document.querySelector('img.pizza');
        PIZZA.setAttribute('src', pizzaSvg);
    
        const UBER = document.querySelector('img.uber');
        UBER.setAttribute('src', uberSvg);
    
        const GRUBHUB = document.querySelector('img.grubhub');
        GRUBHUB.setAttribute('src', grubhubSvg);
    
        const POSTMATES = document.querySelector('img.postmates');
        POSTMATES.setAttribute('src', postmatesSvg);
    },
    FOOTER: () => {
        const INSTAGRAM = document.querySelector('img.instagram');
        INSTAGRAM.setAttribute('src', instagramSvg);
    
        const TWITTER = document.querySelector('img.twitter');
        TWITTER.setAttribute('src', twitterSvg);
    
        const FACEBOOK = document.querySelector('img.facebook');
        FACEBOOK.setAttribute('src', facebookSvg);
    },
};

export { renderPage, renderIMG };