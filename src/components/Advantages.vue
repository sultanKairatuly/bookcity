<template>
  <div class="container">
    <div class="advantages-list">
      <div
        class="advantage"
        v-for="advantage in advantagesList"
        :key="advantage.title"
      >
        <img class="advantage-image" :src="require(`../${advantage.image}`)" />
        <div class="advantage-title">{{ advantage.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvantagesList",
  props: {
    advantagesList: {
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
  padding: 30px;
  border-bottom: 1px solid #cfd3d5;
}
.advantages-list {
  display: flex;
  margin: 0 auto;
  width: 1200px;
  justify-content: space-between;
}
.advantage {
  display: flex;
  align-items: center;
}

.advantage-title {
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  width: 215px;
  margin-left: 15px;
}
</style>
