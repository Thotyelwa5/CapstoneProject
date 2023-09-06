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
                      <div class="bg-image hover-zoom ripple rounded ripple-surface">
                        <img :src="book.bookUrl" class="w-100" :alt="book.bookTitle" />
                        <router-link :to="'/cart/' + book.id">
                          <div class="hover-overlay">
                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
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
                        <span>Embark on an unforgettable journey through the pages of this book, where adventure and wonder await at every turn.</span>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div class="d-flex flex-row align-items-center mb-1">
                        <h4 class="mb-1 me-1">R{{ book.amount }}</h4>
                      </div>
                      <h6 class="text-success">Free shipping</h6>
                      <div class="d-flex flex-column mt-4">
                        <button class="btn btn-outline-primary btn-sm mt-2" @click="addToCart(book)">
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
export default {
  computed: {
      id() {
        return this.$route.params.bookID
        },
        book() {
          return this.$store.state.book;
        },
  },
  methods: {
    addToCart(book) {
      this.$store.commit('addToCart', book);
      this.$router.push('/cart');
    },
  },
  mounted() {

    this.$store.dispatch("fetchBook", this.id);
  },
};
</script>
  
  <style scoped>
  
  </style>
  