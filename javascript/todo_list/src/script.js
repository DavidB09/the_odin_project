import './style.scss';

import Library from './Library.js';

import notebook from './assets/svg/notebook.svg';
import inbox from './assets/svg/inbox.svg';
import today from './assets/svg/day.svg';
import week from './assets/svg/week.svg';
import important from './assets/svg/star.svg';
import add from './assets/svg/add.svg';
import menu from './assets/svg/menu.svg';
import circle from './assets/svg/circle.svg';

(function init() {
    const VIEW = RenderView();
    VIEW.init();
    VIEW.renderIcons();
    VIEW.handleFolder();
})();

function RenderView () {
    const LIBRARY = Library();
    const MAIN = document.querySelector('body');
    const PROJECT_FOLDER = MAIN.querySelector('aside section:last-child');

    const init = () => {
        /*
            GET VALUES FROM LOCAL STORAGE
        */
        LIBRARY.addFolder('Today');
        LIBRARY.addFolder('This Week');
        LIBRARY.addFolder('Important');
        createFolder('The Odin Project');
        createFolder('Schoolwork');
        showFolder('Today');
    };

    const handleFolder = () => {
        const folders = MAIN.querySelectorAll('ul li');

        folders.forEach(folder => folder.addEventListener('click', (e) => {
            /*
                HANDLE EDIT BUTTON
            */
            folders.forEach(f => f != e.target ? f.classList.remove('selected') : f.classList.add('selected'));
            showFolder(e.target.innerText);
        }));
    };

    const showFolder = (name) => {
        LIBRARY.getFolder(name).forEach(book => {
            const HTMLView = `<li>${book.name}<img class='circle' /></li>`
            console.log(book.name);
        });
    };

    const createFolder = (name) => {
        const HTMLView = `<li><img class="menu" />${name}<img class='circle' /></li>`
        PROJECT_FOLDER.querySelector('ul').insertAdjacentHTML('beforeend', HTMLView);

        LIBRARY.addFolder(name);
    };

    const renderIcons = () => {
        const noteBookImg = MAIN.querySelector('.notebook');
        noteBookImg.setAttribute('src', notebook);

        const inboxImg = MAIN.querySelector('.inbox');
        inboxImg.setAttribute('src', inbox);

        const todayImg = MAIN.querySelector('.today');
        todayImg.setAttribute('src', today);

        const weekImg = MAIN.querySelector('.week');
        weekImg.setAttribute('src', week);

        const importantImg = MAIN.querySelector('.important');
        importantImg.setAttribute('src', important);

        const addImg = MAIN.querySelector('.add');
        addImg.setAttribute('src', add);

        const menuImgs = MAIN.querySelectorAll('.menu');
        menuImgs.forEach(img => img.setAttribute('src', menu));

        const circleImgs = MAIN.querySelectorAll('.circle');
        circleImgs.forEach(img => img.setAttribute('src', circle));
    }

    return { init, renderIcons, handleFolder };
}