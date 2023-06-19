<template>
  <div class="app">
    <shop-header />
    <router-view></router-view>
    <shop-footer />
  </div>
</template>

<script>
import ShopHeader from "./components/ShopHeader.vue";
import ShopFooter from "./components/ShopFooter.vue";

export default {
  components: {
    ShopHeader,
    ShopFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@400;500;700&family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Roboto:wght@300;400;500;700&display=swap");

li {
  list-style: none;
}

* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  overflow-x: hidden;
}
</style>
