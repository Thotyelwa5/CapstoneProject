<template>
  <div>
    <AddBookComp @bookAdded="fetchBooks" />
    <table class="table">
      <thead>
        <tr>
          <th>BookID</th>
          <th>Book Title</th>
          <th>Amount</th>
          <th>category</th>
          <th>bookUrl</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.bookID">
          <td>{{ book.bookID }}</td>
          <td>{{ book.bookTitle }}</td>
          <td>{{ book.amount }}</td>
          <td>{{ book.category }}</td>
          <td><img :src="book.bookUrl" alt="books" class="book-image" /></td>
          <td>
            <!-- edit -->
            <updateBookComp @bookupdated="fetchBooks" />
            <!-- delete -->
            <button @click="deleteBook(book.bookID)">
              <i class="far fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AddBookComp from "@/components/AddBookComp.vue";
import updateBookComp from '@/components/updateBookComp.vue'

export default {
  name: "AdminBookTable",
  components: { AddBookComp, updateBookComp},
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  mounted() {
    this.$store.dispatch('fetchBooks');
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get(
          "http://localhost:3000/boks"
        );
        this.$store.commit("setBooks", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
  
    async deleteBook(bookID) {
      const confirmed = confirm("Are you sure you want to delete this book?");
      if (confirmed) {
        try {
          await this.$store.dispatch("deleteBook", bookID);
          console.log("Book deleted successfully!");
        } catch (err) {
          console.error("Error deleting book:", err);
        }
      }
    },
    async updateBook(bookID) {
      this.$router.push({
        path: "/updateBookComp",
        params: {id: bookID}
      })
      const confirmed = confirm("Book succesfully edited");
      if (confirmed) {
        try {
          await this.$store.dispatch("updateBook", bookID);
          console.log("Book updated successfully!");
        } catch (err) {
          console.error("Error updating the book:", err);
        }
      }
    },
  },
};
</script>

<style scoped>

.table-container {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.book-image {
  max-width: 60px; 
  height: 60px; 
}

@media (max-width: 768px) {
  .table th, .table td {
    font-size: 14px; 
  }
}
</style>
