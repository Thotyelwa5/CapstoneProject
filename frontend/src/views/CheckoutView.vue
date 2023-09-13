<template>
  <div class="container">
    <h1>YOUR ITEMS</h1>
    <table v-if="books && books.length > 0">
      <tr>
        <td colspan="4">Your cart is empty.</td>
      </tr>
    </table>
    <table v-else>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in getOrder" :key="book.bookID">
          <td><img :src="book.bookUrl" alt="" class="w-25" /></td>
          <td>{{ book.bookTitle }}</td>
          <td>R{{ book.amount }}</td>
          <td>{{ book.category }}</td>
          <td>
            <button @click="removeFromCart(book.orderID)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button>
      <router-link to="/cart" class="text-white text-decoration-none"
        >Checkout</router-link
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "setOrder",
  computed: {
    user() {
      return this.$store.state.userID;
    },
    orderTotalPrice() {
      return this.$store.getters.orderTotalPrice;
    },
  },
  mounted() {
    if (this.user && this.user.userID) {
      this.$store.dispatch("getOrder", this.user.userID);
    } else {
      console.error("User data is undefined or missing 'userID'.");
    }
  },
  methods: {
    addToCart(book) {
      this.$store.commit("addToCart", book);
    },
    removeFromCart(orderID) {
      const userID = this.user.userID;

      this.$store
        .dispatch("removeFromOrder", { userID, orderID })
        .then(() => {})
        .catch((error) => {
          console.error("Error removing item from order:", error);
        });
    },
  },
};
</script>
<style scoped>
.container{
  margin-top: 150px;
}
</style>
