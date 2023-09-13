<template>
  <div>
    <h2>See Our Book Collection</h2>
    <SpinnerComp/>
    <CardComp :books="filteredBooks"/>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import CardComp from '@/components/CardComp.vue';

export default {
  components: {
    SpinnerComp,
    CardComp
  },
  computed: {
    filteredBooks() {
      return this.$store.state.filteredBooks;
    },
    books() {
      return this.$store.state.books;
    },
  },
  mounted() {
    this.$store.dispatch("fetchBooks");
  },
};
</script>

<style scoped>
</style>
