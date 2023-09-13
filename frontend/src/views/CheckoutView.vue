<!-- <template>
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
      this.$store.dispatch("getOrders", this.user.userID);
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
</style> -->

<template>
  <div class="modal">
      <div class="modal-header">
          <h1>Shopping Cart</h1>
          <!-- <h2 @click="close">X</h2> -->
      </div>
      <div v-if="orders">
          <div class="modal-inner" v-for="item in orders" :key="item.orderID">
  
              <div class="modal-img">
                  <img :src="item.bookUrl" :alt="item.bookTitle">
              </div>
  
              <div class="modal-info">
                  <div class="name">
                      <h1>{{ item.bookTitle }}</h1>
                      <h1>$ {{ item.amount }}</h1>
                  </div>
  
                  <div class="actions">
                      <div class="input">
                        <button @click="decreaseQuantity(item)">
                            <i class="fas fa-minus"></i>
                            </button>
                            <input v-model="item.quantity" type="number" min="1">
                            <button @click="increaseQuantity(item)">
                            <i class="fas fa-plus"></i>
                            </button>
                      </div>
  
                      <div class="del-btn">
                          <i class="uil uil-trash-alt" @click="deleteItem(item.orderID)"></i>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div v-else>
          Getting cart items
      </div>
  </div>
</template>

<script>
export default {
  computed: {
        cartItems() {
      return this.$store.state.orders;
    }
  },

  methods: {
  async getUserID() {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData && userData.result && userData.result.userID) {
        const userID = userData.result.userID;
        await this.$store.dispatch("getCartItems", userID);
      } else {
        console.error('User data or userID not found in local storage');
      }
    },

    // async updateQuantity(item) {
    //   await this.$store.dispatch("updateCartItemQuantity", item);
    // },

    async updateQuantity(orderID, newQuantity) {
      await this.$store.dispatch("updateCartQuantity", { orderID, quantity: newQuantity });
    },

    decreaseQuantity(item) {
  if (item.quantity > 1) {
    item.quantity--;
  }
},
increaseQuantity(item) {
  item.quantity++;
},

    // async addToCart(productID, quantity) {
    //   await this.$store.dispatch("addToCart", { productID, quantity });
    // },

    // async removeFromCart(cartID) {
    //   await this.$store.dispatch("removeFromCart", cartID);
    // },

    deleteItem(orderID) {
          console.log('Deleting item with cartID:', orderID);
          this.$store.dispatch("removeFromCart", orderID);
      }
  },

  created() {
    this.getUserID();
    console.log("orders:",this.$store.state.orders);
    console.log("Type of orders:", typeof this.$store.state.orders);
  }
};
</script>

<style scoped>
.modal {
display: flex;
flex-direction: column;
background-color: #fff;
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

.modal-img img{
  width: 100%;
  height: 100%;
}
.modal-info{
  width: 301px;
  height: 250px;
}

.modal-info .name h1 {
  font-size: 16px;
}
</style>
