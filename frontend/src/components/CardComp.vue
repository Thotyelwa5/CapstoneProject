<template>
  <div>
    <h2 class="hey">See Our Book Collection</h2>
    <div class="search box">
      <button class="btn-search"><i class="fas fa-search"></i></button>
      <input type="text" v-model="searchQuery"  class="input-search" placeholder="Type to Search...">
    </div>
    <div>
      <label for="filtercategory">Filter by Category:</label>
      <select v-model="filterCategory" id="filterCategory">
        <option value="all">All</option>
        <option value="Kids">Kids</option>
        <option value="Adults">Adults</option>
        <option value="Catering">Catering</option>
      </select>
    </div>
    <div>
      <label for="sortByPrice">Sort by Price:</label>
      <select v-model="sortByPrice" id="sortByPrice">
        <option value="all">All</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
    <div v-for="book in filteredBooks" :key="book.bookID" class="col">
      <div class="d-flex justify-content-between"></div>
    </div>

    <div>
      <section>
        <div class="container py-5 mt-4">
          <div class="row row-cols-1 row-cols-md-4">
            <div
              v-for="book in fetchedBooks"
              :key="book.bookID"
              class="col mb-4"
            >
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
                    <router-link
                      class="button"
                      :to="{ name: 'Single', params: { bookID: book.bookID } }"
                      >See more</router-link
                    >
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
import BooksViewVue from '../views/BooksView.vue';
export default {
  data() {
    return {
      sortByPrice: "",
      filterCategory: "", 
    };
  },

  components: {
    CardComp,
    Single,
  },
  props: ["books"],
  computed: {
    fetchedBooks() {
      return this.$store.state.books;
    },
    filteredBooks() {
      let filtered = this.fetchedBooks;

      if (this.filterCategory) {
        filtered = filtered.filter(
          (book) => book.category === this.filterCategory
        );
      }

      if (this.sortByPrice === "asc") {
        filtered = filtered.sort((a, b) => a.amount - b.amount);
      } else if (this.sortByPrice === "desc") {
        filtered = filtered.sort((a, b) => b.amount - a.amount);
      
      }
      if(this.searchQuery) {
        BooksViewVue = BooksViewVue.filter(book =>
          book.bookTitle.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
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
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Exo+2&family=Lora:ital,wght@0,700;1,500&family=Montserrat:ital,wght@1,100&family=Playfair+Display&display=swap");
.book-image {
  height: 300px;
  transition: transform 0.2s;
}
.button {
  background-color: #3e001f;
  text-decoration: none;
  color: white;
  box-shadow: 1px 2px;
}
.button:hover {
  transform: scale(1.1);
  background-color: transparent;
  color: #3e001f;
}
.hey {
  margin-top: 60px;
}

.book-image:hover {
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
