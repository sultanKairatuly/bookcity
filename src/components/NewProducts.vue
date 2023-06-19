<template>
  <tab-item category="New" :products="products" />
</template>

<script>
import TabItem from "./TabItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "RecentProducts",
  created() {
    const slideOne = this.getNewBooks.catalog.slice(0, 8);
    const slideTwo = this.getNewBooks.catalog.slice(8, 16);

    this.products.push(slideOne);
    this.products.push(slideTwo);
  },
  components: {
    TabItem,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapGetters(["getNewBooks"]),
  },
};
</script>

<style></style>
