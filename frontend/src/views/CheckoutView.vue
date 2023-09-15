<template>
  <div>
  <div >
    <div >
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
              <i class="fa-regular fa-trash-can" @click="deleteOrder(item.orderID)"></i>
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
 <div class="container justify-content-end">
      <div class="row">
          <div class="col-xs-12 col-md-4 col-sm-6">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <h3 class="panel-title">
                          Payment Details
                      </h3>
                  </div>
                  <div class="panel-body">
                      <form role="form">
                        
                        <div class="row">
                              <div class="col-xs-12">
                                  <div class="form-group">
                                      <label for="couponCode">Card Holder Name</label>
                                      <input type="text" class="form-control" name="couponCode" />
                                  </div>
                              </div>                        
                          </div>
                        
                      <div class="form-group">
                          <label for="cardNumber">
                              CARD NUMBER</label>
                          <div class="input-group">
                              <input type="text" class="form-control" id="cardNumber" placeholder="Valid Card Number"
                                  required autofocus />
                              <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-xs-7 col-md-7">
                              <div class="form-group">
                                  <label for="expityMonth">EXPIRY DATE</label>
                                  <div class="col-xs-12 col-lg-12">
                                    <div class="col-xs-6 col-lg-6 ">
                                      <input type="text" class="form-control" id="expityMonth" placeholder="MM" required />
                                  </div>
                                  <div class="col-xs-6 col-lg-6 ">
                                      <input type="text" class="form-control" id="expityYear" placeholder="YY" required />
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div class="col-xs-5 col-md-5 pull-right">
                              <div class="form-group">
                                  <label for="cvCode">
                                      CV CODE</label>
                                  <input type="password" class="form-control" id="cvCode" placeholder="CV" required />
                              </div>
                          </div>
                      </div>
                      </form>
                  </div>
              </div>
              <ul class="nav nav-pills nav-stacked">
                  <li class="active"><a href="#"><span class="badge pull-right"><span class="glyphicon glyphicon-usd"></span>4200</span> Final Payment</a>
                  </li>
              </ul>
              <br/>
              <a class="btn btn-success btn-lg btn-block" @click="makePayment" role="button">Pay</a>
          </div>
      </div>
  </div>
  </div>
</template>
<script>
import sweet from 'sweetalert'
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
    async deleteOrder(orderID) {
      const confirmed = confirm("Are you sure you want to delete the order?");
      if (confirmed) {
        try {
          await this.$store.dispatch("deleteOrder", orderID);
          console.log("Book deleted successfully!");
        } catch (err) {
          console.error("Error deleting book:", err);
        }
      }
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
  },
  async makePayment() {
      try {
        await sweet({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Thank you for your payment!',
        });
      } catch (error) {
        console.error('Payment failed:', error);
        sweet({
          icon: 'error',
          title: 'Payment Failed',
          text: 'Sorry, we encountered an error during payment.',
        });
      }
    },
  }

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Exo+2&family=Lora:ital,wght@0,700;1,500&family=Montserrat:ital,wght@1,100&family=Playfair+Display&display=swap');
.modal {
display: flex;
flex-direction: column;
background-color: #fff;
}
.container{
  margin-left: 1000px;
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
body { margin-top:20px; }
.panel-title {display: inline;font-weight: bold;}
.checkbox.pull-right { margin: 0; }
.pl-ziro { padding-left: 0px; }
</style>
