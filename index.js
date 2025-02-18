const myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien,", 290), new Book("A Game of Thrones", "George R.R. Martin", 980)];

const bookContainer = document.querySelector('.book-container');

// New Book Form global variables
const bookForm = document.querySelector("#book-form")
const showForm = document.querySelector('.show-form-modal');
const formModal = document.querySelector('dialog');
const closeFormBtn = document.querySelector('.close-form');
const addBookBtn = document.querySelector('.add-book-btn');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;

  this.toggleRead = function() {
    this.read = !this.read;
  }
}

const displayBooks = () => {
  bookContainer.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = index;

    const readBtnClass = book.read ? "read" : "not-read";
    const readBtnText = book.read ? "Read" : "Not Read";

    card.innerHTML = 
      `
      <div class="title">${book.title}</div>
      <div class="author">by ${book.author}</div>
      <div class="pages">${book.pages} pages</div>
      <button class="${readBtnClass} toggle-read" data-index=${index}>${readBtnText}</button>
      <button class="remove-book-btn" data-index=${index}>Remove Book</button>
      `;

    bookContainer.appendChild(card);
  })
}

const closeForm = () => {
  bookForm.reset();
  formModal.close();
}

// Event Listeners
showForm.addEventListener('click', () => {
  formModal.showModal();
});

addBookBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const newAuthor = document.querySelector("#new-author").value;
  const newTitle = document.querySelector("#new-title").value;
  const newPages = document.querySelector("#new-pages").value;

  if (newAuthor && newTitle && newPages) {
    const newBook = new Book(newAuthor, newTitle, newPages, false);
    myLibrary.push(newBook);

    displayBooks();

    closeForm();
  } else {

  }
})

closeFormBtn.addEventListener('click', () => {
  closeForm();
});

displayBooks();


bookContainer.addEventListener("click", (e) => {
  const target = e.target;
  const index = target.dataset.index;

  if (target.classList.contains('remove-book-btn')) {
    myLibrary.splice(index, 1);
    displayBooks();
  }

  if (target.classList.contains('toggle-read')) {
    myLibrary[index].toggleRead();
    displayBooks();
  }  
});