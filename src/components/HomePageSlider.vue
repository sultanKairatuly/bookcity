<template>
  <div class="home-page-slider">
    <div class="home-page-swiper">
      <Swiper
        ref="swiper"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          el: '.home-page-swiper-pagination',
          clickable: true,
        }"
        style="width: 802px; height: 380px; margin: 0; padding: 0"
        :modules="modules"
      >
        <SwiperSlide v-for="slide in slides" :key="slide" class="customSlide">
          <img
            :src="require(`../assets/homePageSlides${slide}`)"
            class="slide-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div
      class="home-page-swiper-pagination"
      style="bottom: -20px; left: 28px"
    ></div>
    <img class="sales-image" src="../assets/homePageSlides/po500tg.jpg" />
  </div>
</template>

<script>
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use(Navigation, Pagination);

export default {
  name: "HomePageSlider",
  data() {
    return {
      slides: [
        "/new-year-books.jpg",
        "/december-sales.jpg",
        "/harryPoter.jpg",
        "/muha.png",
      ],
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: { Swiper, SwiperSlide },
};
</script>

<style>
.home-page-slider {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
}

.home-page-slider {
  position: relative;
}

.swiper-wrapper {
  width: 802px;
  height: 380px;
}

.sales-image {
  height: 380px;
}

.slide-image {
  width: 802px;
}

.home-page-swiper-pagination {
  display: flex;
  column-gap: 15px;
  position: absolute;
  bottom: -20px;
}

.swiper-pagination-bullet {
  transition: 0.3s ease-in-out;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid #e7e9ea;
  background-color: #fff;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #a5294b;
  border: none;
}

.swiper-button-next {
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);
  height: 42px;
  width: 42px;
  padding: 0;
  background: #fff;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  font-size: 0;
  background-image: url("../assets/icons/link-all-icon.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 26px 11px;
  transition: 0.3s ease-in-out;
}

.swiper-button-next:active {
  background-position: 15px center;
}

.swiper-button-prev {
  box-shadow: 0 4px 6px rgb(0 0 0 / 20%);
  height: 42px;
  width: 42px;
  padding: 0;
  background: #fff;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  font-size: 0;
  background-image: url("../assets/icons/arrow-left.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 26px 11px;
  transition: 0.3s ease-in-out;
}

.swiper-button-prev:active {
  background-position: -1px center;
}

.swiper-button-next::after {
  content: "";
}

.swiper-button-prev::after {
  content: "";
}
</style>
