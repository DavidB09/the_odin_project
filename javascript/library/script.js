'use strict';

/**** LIBRARY ARRAY ****/
let myLibrary = [];

/**** HELPER FUNCTIONS ****/
const convertDateInputToReadable = (inputStr) => {
    let [year, month, day] = inputStr.split('-');
    return `${month} / ${day} / ${year}`;
};

const updateHTML = (() => {
    const mainElement = document.querySelector('main');
    const sortBtn = [...document.querySelectorAll('main span[class*="material-symbols"]')];

    //Add book to main element or update all books in main element
    return {
        addBook: (newBookHTML) => {
            if (myLibrary.length == 0) {
                mainElement.appendChild(newBookHTML);
            } else {
                mainElement.insertBefore(newBookHTML, myLibrary[0].html);
            }
            sortBtn.forEach(btn => btn.classList.remove('focus'));
        },
        updateLibrary: (newLibrary) => {
            mainElement.querySelectorAll('.book-container')?.forEach(oldBook => mainElement.removeChild(oldBook));
            newLibrary?.forEach(newBook => mainElement.appendChild(newBook.html));
            sortBtn.forEach(btn => btn.classList.remove('focus'));
        },
    };
})();

/**** BOOK OBJECT ****/
function Book(title, author, read, date = '') {
    this.title = title;
    this.author = author;
    this.read = read;
    this.date = date;
    this.html = this.createHTML();

    this.editNames();
    this.editRead();
    this.editDate();
    this.deleteBook();
}

Book.prototype.createHTML = function() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('book-container');
    newDiv.innerHTML =
        `<p>${this.title || '-'}</p>
        <p>${this.author || '-'}</p>
        <button class="read${this.read ? ' selected' : ''}" type="button">
            <span class="slider">
                <span class="circle"></span>
            </span>
        </button>
        <p class="date">${this.read && this.date ? convertDateInputToReadable(this.date) : '-'}</p>
        <button class="delete">Delete</button>`;

    return newDiv;
}

/**** BOOK FUNCTIONALITY ****/
Book.prototype.editNames = function() {
    const nameElements = this.html.querySelectorAll('p:not(.date)');

    nameElements.forEach((el, index) => {
        //Convert name description to input text field when clicked
        el.addEventListener('click', () => {
            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'text');
            newInput.setAttribute('value', el.innerText == '-' ? '' : el.innerText);
            el.parentElement.replaceChild(newInput, el);

            newInput.selectionEnd = newInput.selectionStart = el.innerText.length;
            newInput.focus();

            //Convert input text field to name description when focus is removed
            newInput.addEventListener('blur', () => {
                if (index == 0) this.title = newInput.value;
                if (index == 1) this.author = newInput.value;
                el.innerText = newInput.value || '-';

                newInput.parentElement.replaceChild(el, newInput);
            }); 
        });
    });
}

Book.prototype.editRead = function() {
    const readBtn = this.html.querySelector('.read');

    //Update read and date value when clicked
    readBtn.addEventListener('click', () => {
        const dateElement = this.html.querySelector('.date');
        readBtn.classList.toggle('selected');

        //Updates read value to true if selected and focuses date input
        if (readBtn.classList.contains('selected')) {
            this.read = true;
            dateElement.click();
        } else {
            this.read = false;
            dateElement.innerText = '-';
        }
    });
}

Book.prototype.editDate = function() {
    const dateElement = this.html.querySelector('.date');

    //Convert date description to input text field when clicked
    dateElement.addEventListener('click', () => {
        if (!this.read) return;

        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'date');
        newInput.setAttribute('value', this.date);

        dateElement.parentElement.replaceChild(newInput, dateElement);
        newInput.focus();

        //Convert input text field to date description when focus is removed
        newInput.addEventListener('blur', () => {
            this.date = newInput.value || '';
            dateElement.innerText = newInput.value ? convertDateInputToReadable(newInput.value) : '-';

            newInput.parentElement.replaceChild(dateElement, newInput);
        });
    });
}

Book.prototype.deleteBook = function() {
    const deleteBtn = this.html.querySelector('.delete');

    //Remove book from library
    deleteBtn.addEventListener('click', () => {
        myLibrary = myLibrary.filter(book => book != this);
        updateHTML.updateLibrary(myLibrary);
    });
}

/**** INITIALIZE LIBRARY WHEN PAGE LOAD ****/
function initialize() {
    //If no prior library books in Session Storage, add 2 default books
    if (!sessionStorage.getItem('myLibrary')) {
        myLibrary = [
            new Book('The Iliad', 'Homer', false),
            new Book('Meditations', 'Marcus Aurelius', true, new Date().toISOString().slice(0, 10)),
            new Book('The Bible', 'God', true)
        ];
    } else {
        //Retrieve library books from Session Storage
        myLibrary = Object.values(JSON.parse(sessionStorage.getItem('myLibrary')))
            .map(({title, author, read, date}) => new Book(title, author, read, date));
    }
    updateHTML.updateLibrary(myLibrary);

    //Update Session Storage before page reload with newest library books
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('myLibrary', JSON.stringify(Object.assign({}, myLibrary)));
    });
}
initialize();

/**** OVERLAY LOGIC ****/
(() => {
    const closeBtn = [...document.querySelectorAll('.overlay .close')];

    //Add Book Overlay
    (() => {
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

        //Resets form input to default values
        function resetForm() {
            addBookForm.reset();
            readInput.classList.remove('selected');
            dateContainer.style.opacity = 0;
        }

        document.querySelector('header .add').addEventListener('click', () => {
            addBookOverlay.style.display = 'flex'; //Show overlay
        });
        addBookOverlay.addEventListener('click', (e) => {
            //Closes overlay if background or close button is clicked
            if (e.target == addBookOverlay || closeBtn.includes(e.target)) {
                addBookOverlay.style.display = 'none';
                addBookForm.style.display = 'flex';
                addBookSuccess.style.display = 'none';
                addBookFail.style.display = 'none';
                return;
            }

            //Show/Hide clear button if input is clicked
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

            //Create book, add book to DOM, add book to library
            const newBook = new Book(title, author, read, (read ? date : ''));
            updateHTML.addBook(newBook.html)
            myLibrary.unshift(newBook);

            //Reset form to defaults
            resetForm();
            addBookForm.style.display = 'none';
            addBookSuccess.style.display = 'flex';
        });

        returnBtn.addEventListener('click', () => {
            addBookForm.style.display = 'flex';
            addBookFail.style.display = 'none';
        });

        clearBtn.addEventListener('click', resetForm);
    })();

    //Remove Book Overlay
    (() => {
        const removeBookOverlay = document.querySelector('.remove-overlay');
        const deleteBtn = document.querySelector('.remove-overlay .delete');
        const returnBtn = document.querySelector('.remove-overlay .return');
    
        document.querySelector('header .delete').addEventListener('click', () => {
            removeBookOverlay.style.display = 'flex'; //Show overlay
        });
        removeBookOverlay.addEventListener('click', (e) => {
            //Closes overlay if background, close button, or return button is clicked
            if (e.target == removeBookOverlay || closeBtn.includes(e.target) || e.target == returnBtn) {
                removeBookOverlay.style.display = 'none';
                return;
            }
        });

        deleteBtn.addEventListener('click', () => {
            myLibrary = [];
            updateHTML.updateLibrary(myLibrary);
            removeBookOverlay.style.display = 'none';
        });
    })();
})();

/**** SEARCH LOGIC ****/
(function() {
    const typeInput = document.querySelector('header select');
    const searchInput = document.querySelector('header input');
    const searchBtn = document.querySelector('header .search');
    const resetBtn = document.querySelector('header .return');

    searchInput.value = '';

    typeInput.addEventListener('input', () => {
        searchInput.setAttribute('type', typeInput.value == 'date' ? 'date' : 'search');
    });

    searchBtn.addEventListener('click', () => {
        if (!searchInput.value) return;

        let foundBooks = [];

        //Compare date of each book to input value
        if (searchInput.type == 'date') {
            myLibrary.forEach(book => {
                if (book.date == searchInput.value) {
                    foundBooks.push(book);
                }
            });
        }

        //Compare value of each book to input value
        if (searchInput.type == 'search') {
            let toLower = searchInput.value.trim().toLowerCase();

            myLibrary.forEach(book => {
                if (book[typeInput.value].trim().toLowerCase().includes(toLower)) {
                    foundBooks.push(book);
                }
            });
        }

        updateHTML.updateLibrary(foundBooks);
    });

    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        updateHTML.updateLibrary(myLibrary);
    });
})();

/**** SORT LOGIC ****/
(function() {
    const sortBtn = [...document.querySelectorAll('main span[class*="material-symbols"]')];

    sortBtn.forEach(btn => {
        let isUp = btn.classList.contains('up');
        let value = btn.closest('.header-container').querySelector('h2').innerText.toLowerCase();

        btn.addEventListener('click', () => {
            //Get current books shown in HTML
            let currBooks = [...document.querySelectorAll('.book-container')];
            let filterLibrary = myLibrary.filter(book => currBooks.includes(book.html));

            //Reset books shown in HTML to default
            if (btn.classList.contains('focus')) {
                updateHTML.updateLibrary(filterLibrary);
                btn.classList.remove('focus');
            } else {
                //Update books shown in HTML to sorted
                let sorted = filterLibrary;
                if (value == 'finished') {
                    //Sort book by date
                    sorted.sort((book1, book2) => {
                        if (!book2.date) return -1;
                        if (!book1.date) return 1;

                        if (isUp) {
                            return new Date(book1.date + "T00:00:00") < new Date(book2.date+ "T00:00:00") ? 1 : -1
                        } else {
                            return new Date(book1.date + "T00:00:00") > new Date(book2.date + "T00:00:00") ? 1 : -1
                        }
                    });
                } else {
                    //Sort book by title or author
                    sorted.sort((book1, book2) => {
                        if (!book2[value]) return -1;
                        if (!book1[value]) return 1;

                        if (isUp) {
                            return book1[value] > book2[value] ? 1 : -1;
                        } else {
                            return book1[value] < book2[value] ? 1 : -1;
                        }
                    });
                }
                updateHTML.updateLibrary(sorted);
                sortBtn.forEach(otherBtn => otherBtn != btn ? otherBtn.classList.remove('focus') : otherBtn.classList.add('focus'));
            }
        });
    });
})();