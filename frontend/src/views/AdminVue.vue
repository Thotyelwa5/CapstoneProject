<template>
  <div>
    <AddBook @bookAdded="fetchBooks" />
    <div class="p-5">
      <table class="col-12 w-100 table-responsive">
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
          <tr v-for="book in books" :key="book.bookID">
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
import AddBook from "@/components/AddBookComp.vue";

export default {
    components: {AddBook},
   data() {
    return {
      newBook: {
        bookID: '',
        bookTitle: '',
        amount: '',
        category: '',
        bookUrl: '',
      },
    };
  },

  computed: {
    books() {
      return this.$store.state.books;
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

.table-responsive {
  overflow-x: auto;
}
</style>
