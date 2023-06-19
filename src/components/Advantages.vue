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

@media (max-width: 1440px) {
  .container {
    padding: 25px;
  }
  .advantages-list {
    justify-content: space-between;
  }
  .advantage {
    display: flex;
    align-items: center;
  }

  .advantage-title {
    padding: 5px;
    font-size: 12px;
    width: 190px;
    margin-left: 10px;
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 20px;
  }
  .advantages-list {
    justify-content: space-around;
  }
  .advantage {
    display: flex;
    align-items: center;
  }

  .advantage-title {
    padding: 5px;
    font-size: 10px;
    width: 170px;
    margin-left: 5px;
  }
}

@media (max-width: 480px) {
  .advantages-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 30px;
  }
}

@media (max-width: 780px) {
  .advantage {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
