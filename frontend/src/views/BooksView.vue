<template>
  <div>
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
  data() {
    return {
      selectedCategory: 'all'
    };
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
    }
  },
  mounted() {
    this.$store.dispatch("fetchBooks");
  },
};
</script>


<style scoped>
div{
  margin-top: 10px;
}
</style>
