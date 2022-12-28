<template>
  <tab-item :products="products" />
</template>

<script>
import TabItem from "./TabItem.vue";
import { mapGetters } from "vuex";

export default {
  created() {
    const slideOne = this.getPopularBooks.catalog.slice(0, 8);
    this.products.push(slideOne);
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
    ...mapGetters(["getPopularBooks"]),
  },
};
</script>

<style></style>
