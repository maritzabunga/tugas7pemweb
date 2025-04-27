class BookController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.editIndex = -1;
  
      this.view.bindAddBook(this.handleAddOrUpdateBook.bind(this));
      this.view.bindEditBook(this.handleEditBook.bind(this));
      this.view.bindDeleteBook(this.handleDeleteBook.bind(this));
      this.view.renderBooks(this.model.getBooks());
    }
  
    handleAddOrUpdateBook(book) {
      if (this.editIndex === -1) {
        this.model.addBook(book);
      } else {
        this.model.updateBook(this.editIndex, book);
        this.editIndex = -1;
        this.view.resetForm();
      }
      this.view.renderBooks(this.model.getBooks());
    }
  
    handleEditBook(index) {
      const book = this.model.getBooks()[index];
      this.view.fillForm(book);
      this.editIndex = index;
    }
  
    handleDeleteBook(index) {
      this.model.deleteBook(index);
      this.view.renderBooks(this.model.getBooks());
    }
  }
  
  // Inisialisasi Aplikasi
  const app = new BookController(new BookModel(), new BookView());
  