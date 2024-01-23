document.addEventListener('DOMContentLoaded', function() {



const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const bookShelf = document.getElementById('books');
    bookShelf.innerHTML = "";

    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const h3Author = document.createElement('h3');
        h3Author.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(h3Author);

        const h3title = document.createElement('h3');
        h3title.textContent = `Title: ${book.title}`;
        bookDiv.appendChild(h3title);

        const h4pages = document.createElement('h4');
        h4pages.textContent = `Pages: ${book.pages}`;
        bookDiv.appendChild(h4pages);

        bookShelf.appendChild(bookDiv);
    })
}

function addBook() {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(author, title, pages, read);
}

displayBooks();
});