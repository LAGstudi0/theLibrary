const myBooks = [
    ['Ultimate Spider-man', 'Stan Lee', 'Marvel', 'Read'],
    ['The Bat-man', 'Bob Keane', 'DC', 'Read'],
    ['Bat-man Year One', 'Frank Miller', 'DC', 'Read'],
    ['The arkham knight returns', 'Frank Miller', 'DC', 'Read']
];
console.log(myBooks);
function addBookToLibrary(title, author, editorial, read) {
    const newBook = [title, author, editorial, read];
    myBooks.push(newBook);
}
addBookToLibrary('a', 'b', 'c', 'd');
console.log(myBooks);
const contentBooks = document.querySelector('#content-books');
for(let i = 0; i < myBooks.length; i++) {
    const bookInfo = myBooks[i];
    const table = document.createElement('div');
    table.classList.add('book');
    contentBooks.appendChild(table);
    console.log(bookInfo);
    for(let a = 0; a < 4; a++) {
        const info = bookInfo[a];
        const infoSpan = document.createElement('span');
        infoSpan.textContent = info;
        table.appendChild(infoSpan);
        console.log(info);

    }
}






// functionality for the modal.

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if(modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}