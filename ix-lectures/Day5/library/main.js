
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UserInterface {
  constructor() {
    this.titleInput = document.getElementById('title-input');
    this.authorInput = document.getElementById('author-input');
    this.isbnInput = document.getElementById('isbn-input');
    this.form = document.getElementById('form');
    this.tableBody = document.getElementById('table-body');

    this.books = [];
  }

  bindEventListeners() {
    this.form.addEventListener('submit', (e) => this.onFromSubmit(e));
  }

  onFromSubmit(event) {
    event.preventDefault();

    const book = new Book(
      this.titleInput.value,
      this.authorInput.value,
      this.isbnInput.value,
    );

    this.books.push(book);
    this.populateBooksTable();

    this.titleInput.value = '';
    this.authorInput.value = '';
    this.isbnInput.value = '';
  }

  populateBooksTable() {

    this.tableBody.innerHTML = '';

    for (const book of this.books) {
      const row = document.createElement('tr');

      const titleCell = document.createElement('td');
      const authorCell = document.createElement('td');
      const isbnCell = document.createElement('td');
      const actionsCell = document.createElement('td');

      const removeButton = document.createElement('button');


      titleCell.innerHTML = book.title;
      authorCell.innerHTML = book.author;
      isbnCell.innerHTML = book.isbn;
      removeButton.innerHTML = 'X';

      removeButton.addEventListener('click', (e) => this.onRemoveButtonClick(book));
      actionsCell.append(removeButton);

      row.append(titleCell);
      row.append(authorCell);
      row.append(isbnCell);
      row.append(actionsCell);
      this.tableBody.append(row);
    }

  }

  onRemoveButtonClick(bookToRemove) {
    this.books = this.books.filter((book) => {
      return book.isbn !== bookToRemove.isbn;
    });
    this.populateBooksTable();
  }
}

const ui = new UserInterface();
ui.bindEventListeners();