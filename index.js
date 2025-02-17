const myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien,", 290), new Book("A Game of Thrones", "George R.R. Martin", 980)];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.info = function() {
    return (this.title + " by " + this.author + ", " + this.pages + " pages");
  }
}

const addBookToLibrary = (title, author, pages) => {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

const displayBooks = () => {
  const libraryDiv = document.querySelector('.library');
  console.log(libraryDiv);
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    book.classList.add("card");
    book.setAttribute('data-attribute', i);

    book.innerHTML = 
      `<div class="title">${myLibrary[i].title}</div>
       <div class="author">${myLibrary[i].author}</div>
       <div class="pages">${myLibrary[i].pages} pages</div>`;

    libraryDiv.appendChild(book);
  }
}

const bookForm = document.querySelector("#book-form")
const showForm = document.querySelector('dialog + button');
const formModal = document.querySelector('dialog');
const closeFormBtn = document.querySelector('.close-form');
const addBookBtn = document.querySelector('.add-book-btn');

function closeForm() {
  bookForm.reset();
  formModal.close();
}

showForm.addEventListener('click', () => {
  formModal.showModal();
});

addBookBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const newAuthor = document.querySelector("#new-author").value;
  const newTitle = document.querySelector("#new-title").value;
  const newPages = document.querySelector("#new-pages").value;

  const newBook = new Book(newAuthor, newTitle, newPages);
  myLibrary.push(newBook);

  displayBooks();

  closeForm();
})

closeFormBtn.addEventListener('click', () => {
  closeForm();
});

displayBooks();