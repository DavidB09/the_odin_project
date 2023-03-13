import pizzaSvg from '../svg/pizza.svg';

import uberSvg from '../svg/ubereats.svg';
import grubhubSvg from '../svg/grubhub.svg';
import postmatesSvg from '../svg/postmates.svg';

import instagramSvg from '../svg/instagram.svg';
import twitterSvg from '../svg/twitter.svg';
import facebookSvg from '../svg/facebook.svg';

import ovenImg from '../images/oven.jpg';
import pizzaImg from '../images/pizza.jpg';
import chefImg from '../images/chef.jpg';

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
        PIZZA.setAttribute('src', pizzaSvg);
    },
    FOOTER: () => {
        const INSTAGRAM = document.querySelector('img.instagram');
        INSTAGRAM.setAttribute('src', instagramSvg);

        const TWITTER = document.querySelector('img.twitter');
        TWITTER.setAttribute('src', twitterSvg);

        const FACEBOOK = document.querySelector('img.facebook');
        FACEBOOK.setAttribute('src', facebookSvg);
    },
    HOME: () => {
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', ovenImg);

        const UBER = document.querySelector('img.uber');
        UBER.setAttribute('src', uberSvg);

        const GRUBHUB = document.querySelector('img.grubhub');
        GRUBHUB.setAttribute('src', grubhubSvg);

        const POSTMATES = document.querySelector('img.postmates');
        POSTMATES.setAttribute('src', postmatesSvg);
    },
    MENU: () => {
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', pizzaImg);
    },
    CONTACT: () => {
        const backgroundImg = document.querySelector('img.background-image');
        backgroundImg.setAttribute('src', chefImg);

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

export { renderPage, renderIMG };