
<template>
  <div>
    <h2>Add Book</h2>
    <input v-model="newBook.bookID" placeholder="bookID" type="number"/>
    <input v-model="newBook.bookTitle" placeholder="bookTitle"  />
    <input v-model="newBook.amount" placeholder="amount" type="number" step="0.01"/>
    <input v-model="newBook.category" placeholder="category" />
    <input v-model="newBook.bookUrl" placeholder=" bookUrl" />
    <button @click="addBook">Add Book</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
        return {
            newBook: {
                bookID: 0,
                bookTitle: "",
                amount: 0,
                category: "",
                bookUrl: ""
            }
        };
    },
  methods: {
      async addBook() {
    try {
      const response = await axios.post('https://capstone-4p7c.onrender.com/books', this.newBook);
      alert(response.data.msg); 
      this.newBook = {
        data() {
        return {
            newBook: {
                bookID: 0,
                bookTitle: "",
                amount: 0,
                category: "",
                bookUrl: ""
            }
            
        };
    },
      };
      this.fetchBooks();
    } catch (error) {
      console.error("Error adding books:", error);
    }
  },
    resetForm() {
      this.newBookID.bookID = 0;
      this.newBook.bookTitle = "";
      this.newBook.amount = 0;
      this.newBook.category= "",
      this.newBook.bookUrl = ""
    },
    populateForm(book) {
    this.newBookID.bookID = book.bookID;
    this.newBook.bookTitle = book.bookTitle;
    this.newBook.amount = book.amount;
    this.newBook.category = book.category;
    this.newBook.bookUrl = book.bookUrl;
  },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

.btn {
  background-color: #007bff;
  color: #fff;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
