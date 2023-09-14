<template>
  <div>
    <div v-if="book">
      <section>
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4">
              <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div
                        class="bg-image hover-zoom ripple rounded ripple-surface"
                      >
                        <img
                          :src="book.bookUrl"
                          class="w-100"
                          :alt="book.bookTitle"
                        />
                        <router-link :to="'/cart/' + book.id">
                          <div class="hover-overlay">
                            <div
                              class="mask"
                              style="
                                background-color: rgba(253, 253, 253, 0.15);
                              "
                            ></div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6">
                      <h5>{{ book.bookTitle }}</h5>
                      <div class="d-flex flex-row">
                        <div class="text-danger mb-1 me-2">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <div class="mt-1 mb-0 text-muted small">
                        <span class="text-primary"> • </span>
                        <span>{{ book.category }}<br /></span>
                      </div>
                      <div class="mb-2 text-muted small">
                        <span class="text-primary"> • </span>
                        <span
                          >Embark on an unforgettable journey through the pages
                          of this book, where adventure and wonder await at
                          every turn.</span
                        >
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start"
                    >
                      <div class="d-flex flex-row align-items-center mb-1">
                        <h4 class="mb-1 me-1">R{{ book.amount }}</h4>
                      </div>
                      <h6 class="text-success">Free shipping</h6>
                      <div class="d-flex flex-column mt-4">
                        <button
                          class="btn btn-outline-primary btn-sm mt-2"
                          @click="addToCart(book.id, 1)"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-else>Processing...</div>
  </div>
</template>
  
  <script>
import sweet from "sweetalert";
export default {
  computed: {
    id() {
      return this.$route.params.bookID;
    },
    book() {
      return this.$store.state.book;
    },
  },
  methods: {
    // addToCart(bookID, quantity) {
    //   this.$store.dispatch("addToCart", bookID, quantity);
    //   this.$router.push("/cart");
    // },
    async addToCart(userID,bookID, quantity) {
  try {
    const userDataJSON = localStorage.getItem("userData");
    if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);
      const userID = userData.result.userID;
      console.log("USER ID:", userID);
      const Orders = {
        bookID: bookID, 
        userID: userID,
        quantity: quantity, 
      };
      console.log("BOOK ID:", bookID); 
      console.log("QUANTITY:", quantity);
      
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    sweet({
      icon: "error",
      title: "Error",
      text: "An error occurred while adding the book to your cart.",
    });
  }
},

    // async addToCart() {
    //   try {
    //     const userDataJSON = localStorage.getItem("userData");
    //     if (userDataJSON) {
    //       const userData = JSON.parse(userDataJSON);
    //       const userID = userData.result.userID;
    //       console.log(userID);
    //       const product = {
    //         bookID: this.bookID,
    //         userID: userID,
    //         quantity: this.quantity,
    //       };
    //       console.log(this.bookID);
    //       console.log(this.quantity);
    //       const existingBookIndex = this.$store.state.cart.findIndex(
    //         (item) => item.bookID === book.bookID
    //       );
    //       if (existingBookIndex !== -1) {
    //         const existingBook = this.$store.state.cart[existingBookIndex];
    //         await this.$store.dispatch("updateCartItem", {
    //           index: existingBookIndex,
    //           newQuantity: existingBook.quantity + this.quantity,
    //         });
    //       } else {
    //         await this.$store.dispatch("addToCart", product);
    //       }
    //       await this.$store.dispatch("getCart");
    //       sweet({
    //         icon: "success",
    //         title: "Added to Cart",
    //         text: "The book has been added to your cart.",
    //       });
    //     } else {
    //       sweet({
    //         icon: "error",
    //         title: "Not Logged In",
    //         text: "You need to log in to add book to your cart.",
    //         confirmButtonText: "Log In",
    //         showCancelButton: true,
    //         cancelButtonText: "Cancel",
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           this.$router.push("/login");
    //         }
    //       });
    //     }
    //   } catch (error) {
    //     console.error("Error adding to cart:", error);
    //     sweet({
    //       icon: "error",
    //       title: "Error",
    //       text: "An error occurred while adding the book to your cart.",
    //     });
    //   }
    // },
  },
  mounted() {
    const bookID = this.$route.params.bookID;
    this.$store.dispatch("fetchBook", bookID);
  },
};
</script>
  
  <style scoped>
.container {
  margin-top: 100px;
}
</style>
  