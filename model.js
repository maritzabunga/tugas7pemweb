class BookModel {
    constructor() {
      this.books = JSON.parse(localStorage.getItem('books')) || [];
    }
  
    saveToLocalStorage() {
      localStorage.setItem('books', JSON.stringify(this.books));
    }
  
    addBook(book) {
      this.books.push(book);
      this.saveToLocalStorage();
    }
  
    updateBook(index, newBook) {
      this.books[index] = newBook;
      this.saveToLocalStorage();
    }
  
    deleteBook(index) {
      this.books.splice(index, 1);
      this.saveToLocalStorage();
    }
  
    getBooks() {
      return this.books;
    }
  }
  