<template>
  <div class="container">
    <div class="section custom-tabs">
      <div class="tabs">
        <div
          class="tab"
          @click="activeComponent = 'BestSellers'"
          :class="{
            'active-tab': currentTab === 'BestSellers',
          }"
        >
          Бестселлеры
        </div>
        <div
          class="tab"
          @click="activeComponent = 'RecentProducts'"
          :class="{
            'active-tab': currentTab === 'RecentProducts',
          }"
        >
          Новинки
        </div>
        <div
          class="tab"
          @click="activeComponent = 'PopularProducts'"
          :class="{
            'active-tab': currentTab === 'PopularProducts',
          }"
        >
          Популярные
        </div>
      </div>
      <div class="line"></div>
      <component :is="currentTab" />
    </div>
  </div>
</template>

<script>
import BestSellers from "./BestSellers.vue";
import RecentProducts from "./NewProducts.vue";
import PopularProducts from "./PopularProducts.vue";

export default {
  name: "TabCollection",
  data() {
    return {
      activeComponent: "BestSellers",
    };
  },
  computed: {
    currentTab() {
      return this.activeComponent;
    },
  },
  components: {
    BestSellers,
    RecentProducts,
    PopularProducts,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.tabs {
  display: flex;
  justify-content: center;
  column-gap: 80px;
}

.tab {
  font-family: "Noto Serif", sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #747474;
  transition: 0.1s ease-in-out;
  cursor: pointer;
}
.line {
  height: 1px;
  background-color: #cfd3d5;
  widows: 100%;
}
.tab:hover {
  color: black;
}

.active-tab {
  color: #000;
  border-bottom: 3px solid black;
}
</style>
