<template>
  <div>
    <CardComp :books="books"/>
  </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue'
export default {
  components:{CardComp},
  computed: {
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