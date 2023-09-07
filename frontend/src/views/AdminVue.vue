
<template>
  <div>
   
    <AddBook @bookAdded="fetchBooks" />
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
          <td><img :src="book.bookUrl" alt="books"  class="book-image"></td>
          <td>
            <!-- edit -->
            <i class="far fa-pen-to-square"></i>
            <!-- delete  -->
            <i class="fa-regular fa-trash-can"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AddBook from "@/components/AddBookComp.vue";

export default {
  name: "AdminBookTable",
  components: { AddBook },
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
  
    async deleteProduct(bookID) {
      const confirmed = confirm("Are you sure you want to delete this book?");
      if (confirmed) {
        try {
          await this.$store.dispatch("deleteBook", bookID);
          console.log("Book deleted successfully!");
        } catch (error) {
          console.error("Error deleting book:", error);
        }
      }
      this.$router.push("/admin");
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
