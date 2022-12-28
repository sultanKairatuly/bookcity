<template>
  <div class="container">
    <slot name="title"></slot>
    <div class="assortment__slider">
      <div
        class="assortment__item"
        v-for="assortment in assortments"
        :key="assortment.title"
      >
        <img
          :src="require(`../${assortment.image}`)"
          class="assortment__item-image"
          alt=""
        />
        <div class="assortment__item-title">{{ assortment.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WishesSlider",
  props: {
    assortments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  padding: 80px 0;
  background-color: #f7f8f9;
}

.assortment__slider {
  display: flex;
  justify-content: center;
  column-gap: 3px;
}

.assortment__item {
  width: 193px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.assortment__item:hover {
  opacity: 0.7;
}
.assortment__item-title {
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
}
</style>
