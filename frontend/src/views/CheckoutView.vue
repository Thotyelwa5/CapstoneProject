<template>
    <div>
     <div v-for="book in books" :key="book.bookID">
       <section class="h-100 h-custom" style="background-color: #d2c9ff;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
              <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-8">
                      <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                          <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                          <ul>
                            <li v-for="book in cart" :key="book.id">
                              {{ book.bookTitle }} - {{ book.amount }}
                            </li>
                          </ul>
                        </div>
                        <hr class="my-4">
      
                        <div class="row mb-4 d-flex justify-content-between align-items-center">
                          <div class="col-md-2 col-lg-2 col-xl-2">
                            <img :src="book.bookUrl"
                              class="img-fluid rounded-3" alt="Cotton T-shirt">
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <h6 class="text-muted">{{book.category}}</h6>
                            <h6 class="text-black mb-0">{{book.bookTitle}}</h6>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button class="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                              <i class="fas fa-minus"></i>
                            </button>
      
                            <input id="form1" min="0" name="quantity" value="1" type="number"
                              class="form-control form-control-sm" />
      
                            <button class="btn btn-link px-2"
                              onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                              <i class="fas fa-plus"></i>
                            </button>
                          </div>
                          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 class="mb-0">R{{book.amount}}</h6>
                          </div>
                          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                          </div>
                        </div>
                        <div class="pt-5">
                          <h6 class="mb-0"><a href="#!" class="text-body"><i
                                class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 bg-grey">
                      <div class="p-5">
                        <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr class="my-4">
      
                        <div class="d-flex justify-content-between mb-4">
                          <h5 class="text-uppercase">items 3</h5>
                          <h5>Total amount before shipping</h5>
                        </div>
      
                        <h5 class="text-uppercase mb-3">Shipping</h5>
      
                        <div class="mb-4 pb-2">
                          <select class="select">
                            <option value="1">Standard-Delivery- R5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>
      
                        <h5 class="text-uppercase mb-3">Give code</h5>
      
                        <div class="mb-5">
                          <div class="form-outline">
                            <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                            <label class="form-label" for="form3Examplea2">Enter your code</label>
                          </div>
                        </div>
      
                        <hr class="my-4">
      
                        <div class="d-flex justify-content-between mb-5">
                          <h5 class="text-uppercase">Total price</h5>
                          <h5>Total amount after shipping</h5>
                        </div>
      
                        <button type="button" class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <!-- Add to Cart button -->
         <div class="d-flex justify-content-between mb-5">
            <button @click="addToCart(book)" class="btn btn-dark btn-lg" data-mdb-ripple-color="dark">
              Add to Cart
            </button>
        </div>
      </section>
    </div>
 </div>
    
  </template>
  
  <script>
  
  export default {
    computed: {
  books() {
    return this.$store.state.books;
  },
 },

  data() {
    return {
      books: [], 
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
     
      try {
        const response = await fetch('http://localhost:3000/books');
        const data = await response.json();
        this.books = data.books;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
  },
};
</script>
  