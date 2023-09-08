<template>
  <div>
    <SpinnerComp/>
    <CardComp :books="books"/>
  </div>
</template>

<script>
 import SpinnerComp from '@/components/SpinnerComp.vue';
import CardComp from '@/components/CardComp.vue'
export default {
  components:{SpinnerComp , CardComp},
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