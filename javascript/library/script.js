let myLibrary = [];

function Book(title, author, read, date, html) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.date = date;
    this.html = html;
}

function createHTMLBook(newBook) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('book-container');
    newDiv.innerHTML = 
        `<p>${newBook.title}</p>
        <p>${newBook.author}</p>
        <button class="read ${newBook.read ? 'selected' : ''}" type="button">
            <span class="slider">
                <span class="circle"></span>
            </span>
        </button>
        <input type="date">
        <button class="delete">Delete</button>`;

    const newDivInput = newDiv.querySelector('input');
    newDivInput.value = newBook.date;
    if (!newBook.read) {
        newDivInput.style.opacity = '0';
    }

    changeRead(newDiv.querySelector('.read'));
    //CHANGE DATE
    //DELETE

    return newDiv;
}

const mainElement = document.querySelector('main');

function updateHTMLBook() {
    mainElement.querySelectorAll('.book-container').forEach(book => mainElement.removeChild(book));
    myLibrary.forEach(book => mainElement.appendChild(book.html));
}

const addBookOverlay = document.querySelector('.add-overlay');
const addBookForm = document.querySelector('.add-overlay form');
const addBookSuccess = document.querySelector('.add-overlay .success-message');
const addBookFail = document.querySelector('.add-overlay .fail-message');

const returnBtn = document.querySelector('.add-overlay .return');
const closeOverlay = [...document.querySelectorAll('.overlay .close')];

const getText = document.querySelectorAll('.add-overlay input[type="text"');
const clearText = document.querySelectorAll('.add-overlay .clear');
const getRead = document.querySelector('.add-overlay .read');
const dateContainer = document.querySelector('.add-overlay .date-container');

const submitBook = document.querySelector('.add-overlay .add');
const clearBook = document.querySelector('.add-overlay .delete');

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

    getText.forEach((input, i) => {
        if (input == e.target) {
           clearText[i].style.display = 'inline-block';
        } else {
            clearText[i].style.display = 'none';
        }
    }); 

    clearText.forEach((input, i) => {
        if (input == e.target) {
            getText[i].value = '';
            input.display = 'none';
        }
    });
});

getRead.addEventListener('click', () => {
    getRead.classList.toggle('selected');
    dateContainer.style.opacity = getRead.classList.contains('selected') ? 1 : 0;
});

returnBtn.addEventListener('click', () => {
    addBookForm.style.display = 'flex';
    addBookFail.style.display = 'none';
});

submitBook.addEventListener('click', () => {
    const title = addBookOverlay.querySelector('#title').value;
    const author = addBookOverlay.querySelector('#author').value;
    const read = addBookOverlay.querySelector('.read').classList.contains('selected');
    const date = addBookOverlay.querySelector('#date').value || '';

    if (!title && !author) {
        addBookForm.style.display = 'none';
        addBookFail.style.display = 'flex';
        return;
    }

    const newBook = new Book(title, author, read, (read ? date : ''));
    newBook.html = createHTMLBook(newBook);

    myLibrary.unshift(newBook);
    updateHTMLBook();

    resetForm();
    addBookForm.style.display = 'none';
    addBookSuccess.style.display = 'flex';
});

clearBook.addEventListener('click', resetForm);

const removeBookOverlay = document.querySelector('.remove-overlay');
const deleteBooks = document.querySelector('.remove-overlay .delete');
const returnBook = document.querySelector('.remove-overlay .return');

document.querySelector('header .delete').addEventListener('click', () => {
    removeBookOverlay.style.display = 'flex';
});
removeBookOverlay.addEventListener('click', (e) => {
    if (e.target == removeBookOverlay || closeOverlay.some(button => button == e.target) || e.target == returnBook) {
        removeBookOverlay.style.display = 'none';
        return;
    }
});

deleteBooks.addEventListener('click', () => {
    myLibrary = [];
    updateHTMLBook();
    removeBookOverlay.style.display = 'none';
})

function resetForm() {
    addBookForm.reset();
    getRead.classList.remove('selected');
    dateContainer.style.opacity = 0;
}

function changeRead(button) {
    const book = button.parentElement;
    const dateInput = button.parentElement.querySelector('input[type="date"]');

    //console.log(book); REMOVE READ FROM BOOK ELEMENT
    button.addEventListener('click', () => {
        /*
        button.classList.toggle('selected');
        dateInput.style.opacity = button.classList.contains('selected') ? 1 : 0;
        */
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            dateInput.style.opacity = 0;
        } else {
            button.classList.add('selected');
            dateInput.style.opacity = 1;
        }
    });
}


document.querySelectorAll('.book-container .read').forEach(btn => changeRead(btn)); 

/****
 * Add Book ->
 *  Create Author & Title & Read Status | Date Read
 * 
 * Search Book ->
 *  Input Author | Book | Date Read
 * 
 * Sort List ->
 *  Sort Author | Book | Date Read
 * 
 * Delete Book ->
 *  Delete All | Delete Book
 * 
 * Total Book Count?
 */