const myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien,", 290), new Book("A Game of Thrones", "George R.R. Martin", 980)];

const libraryDiv = document.querySelector('.library');

// New Book Form global variables
const bookForm = document.querySelector("#book-form")
const showForm = document.querySelector('dialog + button');
const formModal = document.querySelector('dialog');
const closeFormBtn = document.querySelector('.close-form');
const addBookBtn = document.querySelector('.add-book-btn');

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const addBookToLibrary = (title, author, pages) => {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

const removeBookFromLibraryBtns = () => {
  const removeBookBtns = document.querySelectorAll('.remove-book-btn');
  removeBookBtns.forEach((element) => {
    element.addEventListener('click', () => {
      const bookIndex = element.getAttribute("bookIndex")
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    })
  })
}

const displayBooks = () => {
  libraryDiv.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div");
    book.classList.add("card");
    book.setAttribute('data-attribute', i);

    book.innerHTML = 
      `<div class="book-info">
        <div class="title">${myLibrary[i].title}</div>
        <div class="author">by ${myLibrary[i].author}</div>
        <div class="pages">${myLibrary[i].pages} pages</div>
      </div>
       <button class="remove-book-btn" bookIndex=${i}>Remove Book</button>`;

    libraryDiv.appendChild(book);
  }

  removeBookFromLibraryBtns();
}

const closeForm = () => {
  bookForm.reset();
  formModal.close();
}

// Event Listeners
showForm.addEventListener('click', () => {
  console.log("clicked");
  formModal.showModal();
});

addBookBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const newAuthor = document.querySelector("#new-author").value;
  const newTitle = document.querySelector("#new-title").value;
  const newPages = document.querySelector("#new-pages").value;

  if (newAuthor && newTitle && newPages) {
    const newBook = new Book(newAuthor, newTitle, newPages);
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
