<template>
  <div>
    <div v-for="book in books" :key="book.bookID">
      <section >
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4">
              <div class="card" style="border-radius: 15px;">
                <div
                  class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <router-link :to="{ name: 'Single', params: { bookID: book.bookID} }">
                  <img :src="book.bookUrl" style="border-top-left-radius: 15px; border-top-right-radius: 15px;" class="img-fluid" :alt="book.bookTitle" />
                </router-link>
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between">
                    <div>
                      <p><a href="#!" class="text-dark">{{ book.bookTitle }}</a></p>
                      <p class="small text-muted">Laptops</p>
                    </div>
                    <div>
                      <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <p class="small text-muted">Rated 4.0/5</p>
                    </div>
                  </div>
                </div>
                <hr class="my-0" />
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between">
                    <p><a href="#!" class="text-dark">{{ book.amount }}</a></p>
                    <p class="text-dark">#### 8787</p>
                  </div>
                  <p class="small text-muted">VISA Platinum</p>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                    <a href="#!" class="text-dark fw-bold">Cancel</a>
                    <button type="button" class="btn btn-primary">Buy now</button>
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
import CardComp from '@/components/CardComp.vue'
    export default {
        components:{
            CardComp
        },
        props: ["books"],
        computed:{
            books() {
                return this.$store.state.books
            }
        },
        mounted(){
          this.$store.dispatch("fetchBooks");
        }
    }
    
</script>

<style scoped>

</style>