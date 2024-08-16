let books = [];

function loadBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            books = data;
            displayBooks();
        });
}

function displayBooks() {
    const bookList = document.getElementById('books');
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <h3>${book.title} (${book.year})</h3>
            <p><strong>Autor:</strong> ${book.author}</p>
            <p><strong>Gênero:</strong> ${book.genre}</p>
            <p><strong>Avaliação:</strong> ${book.rating} / 5</p>
            <button onclick="deleteBook(${index})">Excluir</button>
        `;
        bookList.appendChild(bookItem);
    });
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;
    const rating = document.getElementById('rating').value;

    const newBook = { title, author, genre, year, rating };
    books.push(newBook);
    displayBooks();
    saveBooks();
}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
    saveBooks();
}

function searchBooks() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

function sortBooks() {
    const criteria = document.getElementById('sortCriteria').value;
    books.sort((a, b) => {
        if (criteria === 'rating') return b[criteria] - a[criteria];
        if (a[criteria] < b[criteria]) return -1;
        if (a[criteria] > b[criteria]) return 1;
        return 0;
    });
    displayBooks();
}

function saveBooks() {
    fetch('books.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(books)
    });
}

window.onload = loadBooks;
