
let myLibrary = [];
const mainElement = document.querySelector('main');

window.onload = () => {
    myLibrary = [
        new Book('The Iliad', 'Homer', false, ''),
        new Book('Meditations', 'Marcus Aurelius', true, new Date().toISOString().slice(0, 10))
    ];
}; 

const convertDateString = {
    inputToReadable: (inputStr) => {
        let [year, month, day] = inputStr.split('-');
        return `${month} / ${day} / ${year}`;
    }, 
    readableToInput: (readStr) => {
        let [month, day, year] = readStr.split(/\D+/);
        return `${year}-${month}-${day}`;
    }
}; 

function Book(title, author, read, date = '') {
    this.title = title;
    this.author = author;
    this.read = read;
    this.date = date;
    this.html = this.createHTML();

    this.addHTML();
    this.editNames();
    this.editRead();
    this.editDate();
    this.deleteBook();
}

Book.prototype.createHTML = function() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('book-container');
    newDiv.innerHTML =
        `<p>${this.title}</p>
        <p>${this.author}</p>
        <button class="read${this.read ? ' selected' : ''}" type="button">
            <span class="slider">
                <span class="circle"></span>
            </span>
        </button>
        <p class="date">${this.date ? convertDateString.inputToReadable(this.date) : ''}</p>
        <button class="delete">Delete</button>`;

    return newDiv;
}

Book.prototype.addHTML = function() {
    if (myLibrary.length == 0) {
        mainElement.appendChild(this.html);
    } else {
        mainElement.insertBefore(this.html, myLibrary[0].html);
    }
}

function updateHTML(library) {
    mainElement.querySelectorAll('.book-container').forEach(oldBook => mainElement.removeChild(oldBook));
    library?.forEach(newBook => mainElement.appendChild(newBook.html));
}

/**** BOOK FUNCTIONALITY ****/
Book.prototype.editNames = function() {
    const nameElements = this.html.querySelectorAll('p:not(.date)');

    nameElements.forEach((el, index) => {
        el.addEventListener('click', () => {
            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'text');
            newInput.setAttribute('value', el.innerText);
            el.parentElement.replaceChild(newInput, el);

            newInput.selectionEnd = newInput.selectionStart = el.innerText.length;
            newInput.focus();

            newInput.addEventListener('blur', () => {
                if (index) this.author = newInput.value;
                else this.title = newInput.value;
                el.innerText = newInput.value;

                newInput.parentElement.replaceChild(el, newInput);
            }); 
        });
    });
}

Book.prototype.editRead = function() {
    const readBtn = this.html.querySelector('.read');

    readBtn.addEventListener('click', () => {
        const dateValue = this.html.querySelector('.date');
        readBtn.classList.toggle('selected');

        if (!readBtn.classList.contains('selected')) {
            this.date = '';
            this.read = false;
            console.log(this);
        } else {
            this.date = dateValue.innerText ? convertDateString.readableToInput(dateValue.innerText) : '';
            this.read = true;
            dateValue.click();

            console.log(this);
        }
    });
}

Book.prototype.editDate = function() {
    const dateValue = this.html.querySelector('.date');

    dateValue.addEventListener('click', () => {
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'date');
        newInput.setAttribute('value', this.date);

        dateValue.parentElement.replaceChild(newInput, dateValue);
        newInput.focus();

        newInput.addEventListener('blur', () => {
            dateValue.innerText = newInput.value ? convertDateString.inputToReadable(newInput.value) : '';
            this.date = newInput.value || '';

            newInput.parentElement.replaceChild(dateValue, newInput);
        });
    });
}

Book.prototype.deleteBook = function() {
    const deleteBtn = this.html.querySelector('.delete');

    deleteBtn.addEventListener('click', () => {
        myLibrary = myLibrary.filter(book => book != this);
        updateHTML(myLibrary);
    });
}

/**** OVERLAY LOGIC ****/

const closeOverlay = [...document.querySelectorAll('.overlay .close')];

//Add Book Overlay
const addBookOverlay = document.querySelector('.add-overlay');
const addBookForm = document.querySelector('.add-overlay form');
const addBookSuccess = document.querySelector('.add-overlay .success-message');
const addBookFail = document.querySelector('.add-overlay .fail-message');

const textInput = document.querySelectorAll('.add-overlay input[type="text"]');
const textClear = document.querySelectorAll('.add-overlay .clear');
const readInput = document.querySelector('.add-overlay .read');
const dateContainer = document.querySelector('.add-overlay .date-container');

const returnBtn = document.querySelector('.add-overlay .return');
const submitBtn = document.querySelector('.add-overlay .add');
const clearBtn = document.querySelector('.add-overlay .delete');

document.querySelector('header .add').addEventListener('click', () => {
    addBookOverlay.style.display = 'flex';
});
addBookOverlay.addEventListener('click', (e) => {
    if (e.target == addBookOverlay || closeOverlay.some(button => button == e.target)) {
        addBookOverlay.style.display = 'none';
        addBookForm.style.display = 'flex';
        addBookSuccess.style.display = 'none';
        addBookFail.style.display = 'none';
        return;
    }

    //Show/Hide button if input is clicked
    textInput.forEach((input, i) => {
        textClear[i].style.display = input == e.target ? 'inline-block' : 'none';
    }); 

    //Hide button and clear input if button is clicked
    textClear.forEach((btn, i) => {
        if (btn == e.target) {
            textInput[i].value = '';
            btn.display = 'none';
        }
    });
});

readInput.addEventListener('click', () => {
    readInput.classList.toggle('selected');
    dateContainer.style.opacity = readInput.classList.contains('selected') ? 1 : 0;
});

submitBtn.addEventListener('click', () => {
    const title = addBookOverlay.querySelector('#title').value;
    const author = addBookOverlay.querySelector('#author').value;
    const read = addBookOverlay.querySelector('.read').classList.contains('selected');
    const date = addBookOverlay.querySelector('#date').value || '';

    //Rejects form submission without title and author
    if (!title && !author) {
        addBookForm.style.display = 'none';
        addBookFail.style.display = 'flex';
        return;
    }

    const newBook = new Book(title, author, read, (read ? date : ''));
    myLibrary.unshift(newBook);

    resetForm();
    addBookForm.style.display = 'none';
    addBookSuccess.style.display = 'flex';
});

returnBtn.addEventListener('click', () => {
    addBookForm.style.display = 'flex';
    addBookFail.style.display = 'none';
});

clearBtn.addEventListener('click', resetForm);

function resetForm() {
    addBookForm.reset();
    readInput.classList.remove('selected');
    dateContainer.style.opacity = 0;
}

//Remove Book Overlay
const removeBookOverlay = document.querySelector('.remove-overlay');
const deleteBooks = document.querySelector('.remove-overlay .delete');
const saveBooks = document.querySelector('.remove-overlay .return');

document.querySelector('header .delete').addEventListener('click', () => {
    removeBookOverlay.style.display = 'flex';
});
removeBookOverlay.addEventListener('click', (e) => {
    if (e.target == removeBookOverlay || closeOverlay.some(button => button == e.target) || e.target == saveBooks) {
        removeBookOverlay.style.display = 'none';
        return;
    }
});

deleteBooks.addEventListener('click', () => {
    myLibrary = [];
    updateHTML();
    removeBookOverlay.style.display = 'none';
});

/**** SEARCH LOGIC  ****/
const typeInput = document.querySelector('header select');
const searchInput = document.querySelector('header input');
const searchBtn = document.querySelector('header .search');
const resetBtn = document.querySelector('header .return');

searchBtn.addEventListener('click', () => {
    if (!searchInput.value) return;

    let foundBooks = [];
    const searchRegex = new RegExp(searchInput.value, 'ig');

    myLibrary.forEach(book => {
        if (searchRegex.test(book[typeInput.value]))
            foundBooks.push(book);
    });
    updateHTML(foundBooks);
});

resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    updateHTML(myLibrary);
});

/**** * 
 * Sort List ->
 *  Sort Author | Book | Date Read
 * 
 * Total Book Count?
 */