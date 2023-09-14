<template>
  <div class="modal">
    <div class="modal-header">
      <h1>Shopping Cart</h1>
    </div>
    <div v-if="orders">
      <div class="modal-inner" v-for="item in orders" :key="item.orderID">
        <div class="modal-img">
          <img :src="item.bookUrl" :alt="item.bookTitle">
        </div>
        <div class="modal-info">
          <div class="name">
            <h1>{{ item.bookTitle }}</h1>
            <h1>R {{ item.amount }}</h1>
          </div>
          <div class="actions">
            <div class="input">
              <button @click="decreaseQuantity(item)">
                <i class="fas fa-minus"></i>
              </button>
              <input v-model="item.quantity" type="number" min="1" @input="updateTotal(item)">
              <button @click="increaseQuantity(item)">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="del-btn">
              <i class="uil uil-trash-alt" @click="deleteItem(item.orderID)"></i>
            </div>
          </div>
        </div>
        <div class="total">
          Total: R {{ calculateItemTotal(item) }}
        </div>
      </div>
    </div>
    <div v-else>
      Getting cart items
    </div>
    <div class="cart-total">
      <h2>Total Amount: R {{ calculateCartTotal }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orders() {
      return this.$store.state.orders;
    },
    mounted() {
      this.$store.dispatch("fetchOrders");
    }
  },
  methods: {
    async getUserID() {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData && userData.result && userData.result.userID) {
        const userID = userData.result.userID;
        console.log("Cart userID", userID);
        await this.$store.dispatch("getOrder", userID);
        console.log("orders:", this.$store.state.orders);
        console.log("Type of orders:", typeof this.$store.state.orders);
      } else {
        console.error('User data or userID not found in local storage');
      }
    },
    async updateQuantity(orderID, newQuantity) {
      await this.$store.dispatch("updateCartQuantity", { orderID, quantity: newQuantity });
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        this.updateTotal(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
      this.updateTotal(item);
    },
    deleteItem(orderID) {
      console.log('Deleting item with orderID:', orderID);
      this.$store.dispatch("removeFromCart", orderID);
    },
    calculateItemTotal(item) {
      return item.amount * item.quantity;
    },
    updateTotal(item) {
      item.total = this.calculateItemTotal(item);
    },
    calculateCartTotal() {
      return this.orders.reduce((total, item) => total + item.total, 0);
    }
  },
  created() {
    this.getUserID();
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
  width: 10rem;
  height: 10rem;
}
.modal-info{
  width: 301px;
  height: 250px;
}

.modal-info .name h1 {
  font-size: 16px;
}
</style>
