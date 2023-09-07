<!-- <template>
    <div class="modal">
        <div class="modal-header">
            <h1>Add Products</h1>
            <h2 @click="close">X</h2>
        </div>

        <div class="modal-inner">
            <div class="login-box">
                <form @submit.prevent="addBook">
                    <div class="user-box">
                      <input type="text" id="productName" required v-model="newBook.bookID">
                      <label>BookID</label>
                    </div>

                    <div class="user-box">
                      <input type="number" id="productPrice" required v-model="newBook.bookTitle">
                      <label>Book Title</label>
                    </div>

                    <div class="user-box">
                      <input type="text" id="imageURL" required v-model="newBook.amount">
                      <label>Amount</label>
                    </div>

                    <div class="user-box">
                      <input type="text" id="description" required v-model="newBook.Category">
                      <label>Category</label>
                    </div>

                    <div class="user-box">
                      <input type="number" id="quantity" required v-model="newBook.bookUrl">
                      <label>Book Url</label>
                    </div>

                    <center>
                        <button type="submit">Add Book</button>
                    </center>
                </form>
            </div>
        </div>
    </div>
  </template>

<script>
export default {  
    methods: {
        close() {
          this.$emit("close");
        }
    },

    data() {
        return {
            newBook: {
                bookID: "",
                bookTitle: "",
                amount: "",
                category: "",
                bookUrl: ""
            }
        };
    },

    methods: {
        async addBook() {
            try {
                await this.$store.dispatch("addBook", this.newBook);
                this.$router.push("/admin");
                this.newBook = {
                    bookID: "",
                    bookTitle: "",
                    amount: "",
                    category: "",
                    bookUrl: ""
                };
                console.log("Book added successfully!")
            } catch (error) {
                console.error("Error adding product:", error);
            }
        }
    }
};
</script>

<style scoped>
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 675px;
    /* min-height: 1116px; */
    display: flex;
    flex-direction: column;
    background-color: #000;
}
.modal-header{
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    border-bottom: 2px solid gray;
    padding: 20px;
}
.modal-inner {  
    width: 555px;
    height: 250px;
    display: flex;
    justify-content: space-between;
}
.modal-inner{
    width: 222px;
    height: 250px;
}
.login-box {
  position: absolute;
  top: 90%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(24, 20, 20, 0.987);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #bdb8b8;
  font-size: 12px;
}

.login-box form button{
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box button:hover {
  background: #000;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #000,
}

.login-box button span {
  position: absolute;
  display: block;
}
</style> -->

<template>
  <div>
    <h2>Add Book</h2>
    <input v-model="newBook.bookID" placeholder="bookID" type="number"/>
    <input v-model="newBook.bookTitle" placeholder="bookTitle"  />
    <input v-model="newBook.amount" placeholder="amount" type="number" step="0.01"/>
    <input v-model="newBook.category" placeholder="category" />
    <input v-model="newBook.bookUrl" placeholder=" bookUrl" />
    <button @click="addBook">Add Product</button>
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
      async addBooks() {
    try {
      const response = await axios.post('http://localhost:3000/books', this.newBook);
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
      // Reset the form after successful add
      this.newBookID.bookID = 0;
      this.newBook.bookTitle = "";
      this.newBook.amount = 0;
      this.newBook.category= "",
      this.newBook.bookUrl = ""
    },
    populateForm(product) {
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

</style>
