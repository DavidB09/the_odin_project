let myLibrary = [];

function Book() {
    //Constructor
}

function addBook() {
    //Add book to library
}

function addLibrary() {

}

document.querySelectorAll('.book-container .read').forEach(button => {
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
}); 

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