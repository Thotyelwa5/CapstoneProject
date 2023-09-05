<template>
   
    <div>
        
    <div>
      <button class="add-btn">
        <router-link class="addBook" to="/addBook">Add New Book</router-link>
      </button>
    </div>
  
    <div v-if="books" class="p-5">
      <table class="col-12 w-100">
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Book URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book.bookID">
            <td>{{ book.bookID }}</td>
            <td>{{ book.bookTitle }}</td>
            <td>{{ book.amount }}</td>
            <td>{{ book.category }}</td>
            <td><img :src="book.bookUrl" alt=""></td>
            <td>
              <button>Edit</button>
              <button @click="deleteBook(book.bookID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
 </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bookFilter: '',
      };
    },
  
    computed: {
      books() {
        return this.$store.state.books;
      },
      filteredBooks() {
        if (!this.bookFilter) {
          return this.books;
        }
        return this.books.filter(book => book.category === this.bookFilter);
      },
    },
  
    methods: {
      async deleteBook(bookId) {
        if (confirm('Are you sure you want to delete this book?')) {
          try {
            await this.$store.dispatch('deleteBook', bookId);
          } catch (error) {
            console.error('Failed to delete book:', error);
          }
        }
      },
    },
  
    mounted() {
      this.$store.dispatch('fetchBooks');
    },
  };
  </script>
  
  <style scoped>
  .add-btn {
    width: 200px !important;
    background-color: #C2DBF8 !important;
    margin: 5px !important;
    border-radius: 15px !important;
    padding: 3px;
  }
  
  .addBook {
    text-decoration: none;
  }
  
  table {
    border-collapse: collapse;
    margin: 10px;
  }
  
  th {
    background: #ccc;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background: #C2DBF8;
  }
  </style>
  