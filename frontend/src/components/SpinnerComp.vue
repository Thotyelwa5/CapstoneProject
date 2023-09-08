<template>
  <div>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      
      <section>
        <div class="container py-5">
          <div class="row row-cols-1 row-cols-md-4">
            <div v-for="book in books" :key="book.bookID" class="col mb-4">
              <div class="card h-100" style="border-radius: 15px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <div
                  class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <router-link :to="{ name: 'Single', params: { bookID: book.bookID} }">
                    <img
                      :src="book.bookUrl"
                      class="img-fluid book-image">
                  </router-link>
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between">
                    <div>
                      <p><a href="#!" class="text-dark">{{ book.bookTitle }}</a></p>
                    </div>
                    <div>
                      <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-0" />
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between">
                  </div>
                  <p class="small text-muted">R{{ book.amount }}</p>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                    <button
                      class="btn btn-outline-primary btn-sm mt-2"
                      @click="addToCart(book)"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.books === null;
    }
  }
};
</script>

<style scoped>

</style>