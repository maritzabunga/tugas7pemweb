class BookView {
    constructor() {
      this.form = document.getElementById('bookForm');
      this.judulInput = document.getElementById('judul');
      this.penulisInput = document.getElementById('penulis');
      this.tahunInput = document.getElementById('tahun');
      this.submitBtn = document.getElementById('submitBtn');
      this.tableBody = document.querySelector('#bookTable tbody');
    }
  
    bindAddBook(handler) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const book = {
          judul: this.judulInput.value,
          penulis: this.penulisInput.value,
          tahun: this.tahunInput.value
        };
        handler(book);
        this.form.reset();
      });
    }
  
    bindEditBook(handler) {
      this.tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
          const index = e.target.dataset.index;
          handler(index);
        }
      });
    }
  
    bindDeleteBook(handler) {
      this.tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
          const index = e.target.dataset.index;
          handler(index);
        }
      });
    }
  
    fillForm(book) {
      this.judulInput.value = book.judul;
      this.penulisInput.value = book.penulis;
      this.tahunInput.value = book.tahun;
      this.submitBtn.textContent = "Simpan Perubahan";
    }
  
    resetForm() {
      this.form.reset();
      this.submitBtn.textContent = "Tambah Buku";
    }
  
    renderBooks(books) {
      this.tableBody.innerHTML = '';
      books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${book.judul}</td>
          <td>${book.penulis}</td>
          <td>${book.tahun}</td>
          <td>
            <button class="edit" data-index="${index}">Edit</button>
            <button class="delete" data-index="${index}">Hapus</button>
          </td>
        `;
        this.tableBody.appendChild(row);
      });
    }
  }
  