<template>
  <div
    class="banner"
    :style="{
      backgroundImage: url,
    }"
  >
    <div class="banner__title">{{ bannerTitle }}</div>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  data() {
    return {
      url: `url('${this.image}')`,
    };
  },
  props: {
    bannerTitle: {
      type: String,
      default: "",
      required: true,
    },
    image: {
      type: String,
    },
  },
};
</script>

<style scoped>
.banner__title {
  text-align: center;
  text-transform: uppercase;
  font-family: "Noto Serif", sans-serif;
  font-size: 30px;
  font-weight: 700;
  padding: 30px;
  background-color: #fff;
  width: 700px;
}

.banner {
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
