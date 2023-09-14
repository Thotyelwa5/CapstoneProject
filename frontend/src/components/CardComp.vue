<template>
  <div>
    <h2>See Our Book Collection</h2>
    <div v-for="book in filteredBooks" :key="book.bookID" class="col mb-4">
      <div class="d-flex justify-content-between mb-3">
        <div>
          <label for="sortByPrice">Sort by Price:</label>
          <select v-model="sortByPrice" id="sortByPrice">
            <option value="all">All</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <div>
          <label for="filtercategory">Filter by Category:</label>
          <select v-model="filterCategory" id="filterCategory">
            <option value="all">All</option>
            <!-- Add options for categories based on your data -->
            <option value="Kids">Kids</option>
            <option value="Adults">Adults</option>
            <option value="Catering">Catering</option>

            <!-- Add more options as needed -->
          </select>
        </div>
      </div>
    </div>

    <div>
      <section>
        <div class="container py-5 mt-4">
          <div class="row row-cols-1 row-cols-md-4">
            <div v-for="book in books" :key="book.bookID" class="col mb-4">
              <div
                class="card h-100"
                style="
                  border-radius: 15px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                "
              >
                <div
                  class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <router-link
                    :to="{ name: 'Single', params: { bookID: book.bookID } }"
                  >
                    <img :src="book.bookUrl" class="img-fluid book-image" />
                  </router-link>
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between">
                    <div>
                      <p>
                        <a href="#!" class="text-dark">{{ book.bookTitle }}</a>
                      </p>
                    </div>
                    <div>
                      <div
                        class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger"
                      >
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
                  <div class="d-flex justify-content-between"></div>
                  <p class="small text-muted">R{{ book.amount }}</p>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center pb-2 mb-1"
                  >
                    <router-link to="/Single">See more</router-link>
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
import CardComp from "@/components/CardComp.vue";
import Single from "@/components/SingleComp.vue";
export default {
  data() {
    return {
      sortByPrice: "", // You can set this to 'asc' or 'desc'
      filtercategory: "", // The selected category for filtering
    };
  },

  components: {
    CardComp,
    Single,
  },
  props: ["books"],
  computed: {
    books() {
      return this.$store.state.books;
    },
    filteredBooks() {
      let filtered = this.books;

      if (this.filterCategory) {
        filtered = filtered.filter(
          (book) => book.category === this.filtercategory
        );
      }

      if (this.sortByPrice === "asc") {
        filtered = filtered.sort((a, b) => a.amount - b.amount);
      } else if (this.sortByPrice === "desc") {
        filtered = filtered.sort((a, b) => b.amount - a.amount);
      }

      return filtered;
    },
  },
  mounted() {
    this.$store.dispatch("fetchBooks");
  },
};
</script>
<style scoped>
.book-image {
  height: 300px;
  transition: transform 0.2s;
}

.book-image:hover {
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>