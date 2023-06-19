<template>
  <tab-item category="Bestsellers" :products="products" />
</template>

<script>
import TabItem from "./TabItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "BestSellers",
  created() {
    const slideOne = this.getBestsellersBooks.catalog.slice(0, 8);
    const slideTwo = this.getBestsellersBooks.catalog.slice(8, 16);
    const slideThree = this.getBestsellersBooks.catalog.slice(16, 25);

    this.products.push(slideOne);
    this.products.push(slideTwo);
    this.products.push(slideThree);
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
    ...mapGetters(["getBestsellersBooks"]),
  },
};
</script>

<style></style>
