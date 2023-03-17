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
})();

function RenderView () {
    const LIBRARY = Library();
    const MAIN = document.querySelector('body');
    const PROJECT_FOLDER = MAIN.querySelector('aside section:last-child');
    const PROJECT_VIEW = MAIN.querySelector('main .note-container');

    const init = () => {
        renderIcons();

        /*
            GET VALUES FROM LOCAL STORAGE
        */

        LIBRARY.addFolder('Today');
        LIBRARY.addFolder('This Week');
        LIBRARY.addFolder('Important');
        createFolder('The Odin Project');
        createFolder('Schoolwork');

        MAIN.querySelector('section:first-child li:first-child').classList.add('selected');
        showFolder('All Tasks');

        handleFolder();
    };

    const handleFolder = () => {
        const folders = MAIN.querySelectorAll('ul li');

        folders.forEach(folder => folder.addEventListener('click', (e) => {
            const liElement = e.target.closest('li');
            /*
                HANDLE EDIT BUTTON
            */
            folders.forEach(f => f != liElement ? f.classList.remove('selected') : f.classList.add('selected'));
            showFolder(liElement.innerText, liElement.classList.contains('created'));
        }));
    };

    const showFolder = (name, isCreated) => {
        MAIN.querySelector('.header-container h2').innerText = name;
        PROJECT_VIEW.innerHTML = '';

        const addButton = PROJECT_VIEW.nextElementSibling;
        if (addButton) {
            PROJECT_VIEW.parentElement.removeChild(addButton);
        }

        const values = LIBRARY.getFolder(name);

        if (values.length == 0 && !isCreated) {
            const newHTML =`<p class="empty-warning">No tasks exist!</p>`;
            PROJECT_VIEW.insertAdjacentHTML('beforeend', newHTML);
            return;
        }

        if (isCreated) {
            const newHTML = `<button class="add-project"><img class="add" src="${add}" /><p>Add Task</p></button>`;
            PROJECT_VIEW.parentElement.insertAdjacentHTML('beforeend', newHTML);
        }

        // LIBRARY.getFolder(name).forEach(book => {
        //     // const HTMLView = `<li>${book.name}<img class='circle' /></li>`
        //     console.log(book.name);
        // });
    };

    const createFolder = (name) => {
        const HTMLView = `<li class="created"><img class="menu" src="${menu}"/>${name}<img class='circle' src="${circle}"/></li>`
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
    };

    return { init };
}