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
    // const titleDiv = document.createElement("div");
    // const pagesDiv = document.createElement("div");
    // const authorDiv = document.createElement("div");

    // titleDiv.classList.add("title");
    // authorDiv.classList.add("author");
    // pagesDiv.classList.add("pages");

    // book.appendChild(titleDiv);
    // book.appendChild(authorDiv);
    // book.appendChild(pagesDiv);

    book.innerHTML = 
      `<div class="title">${myLibrary[i].title}</div>
       <div class="author">${myLibrary[i].author}</div>
       <div class="pages">${myLibrary[i].pages} pages</div>`;

    libraryDiv.appendChild(book);
  }
}

displayBooks();