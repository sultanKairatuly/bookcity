<template>
  <div class="content">
    <div class="billboard">
      <div class="billboard__image">
        <img :src="require(`../${main.image}`)" />
      </div>
      <div class="billboard__text">
        <div class="billboard__title">{{ main.title }}</div>
        <div class="billboard__author">{{ main.author }}</div>
        <div class="billboard__price">{{ formattedPrice(main.price) }}</div>
      </div>
    </div>
    <div class="slider">
      <Swiper
        class="products__slider"
        navigation
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :modules="modules"
      >
        <swiper-slide
          class="product__slide"
          v-for="slide in products"
          :key="slide"
        >
          <div
            class="product"
            @mouseenter="hoveredProduct = product"
            @mouseleave="hoveredProduct = {}"
            v-for="product in slide"
            :key="product.title"
            :class="{
              hover: product.id === hoveredProduct?.id,
            }"
          >
            <div class="product-link">
              <img
                :src="require(`../${product.image}`)"
                class="product__image"
              />
            </div>
            <div
              class="product__wrapper"
              :class="{
                active: product.id === hoveredProduct?.id,
              }"
            >
              <div class="product-link">
                <img
                  :src="require(`../${product.image}`)"
                  class="product__image"
                />
              </div>
              <div
                class="product-info"
                v-if="hoveredProduct?.id === product.id"
              >
                <div class="product__title">{{ product.title }}</div>
                <div class="product__author">{{ product.author }}</div>
                <div class="product__price">{{ product.price }}</div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
      <div class="swiper-bottom-row">
        <div class="swiper-pagination"></div>
        <div class="link-all">Смотреть все книги</div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use(Navigation, Pagination);

export default {
  name: "TabItem",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      main: this.products[0][2],
      modules: [Navigation, Pagination],
      hoveredProduct: {},
    };
  },
  methods: {
    formattedPrice(price) {
      const priceArray = price.split("");
      const cuttedPriceArray = priceArray.slice(1);
      return `${priceArray[0]} ${cuttedPriceArray.join("")}`;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  height: 550px;
  align-items: flex-start;
  margin-top: 5px;
}

.product__slide {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
}
.product-link {
  width: 160px;
  margin: 0 auto;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination {
  display: flex;
  bottom: 0;
  column-gap: 15px;
  left: 150px;
}

.link-all {
  color: #a62749;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  z-index: 100;
  cursor: pointer;
}

.product {
  position: relative;
}

.link-all::after {
  content: "";
  display: inline-block;
  cursor: pointer;
  width: 26px;
  height: 11px;
  background-image: url("../assets/icons/link-all-icon.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.swiper-bottom-row {
  margin-left: 6px;
  display: flex;
  padding-right: 40px;
  margin-top: -60px;
  position: relative;
  width: 100%;
  justify-content: flex-end;
}

.billboard {
  margin-top: 35px;
  padding: 30px;
  background-color: #f7f8f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
}

.billboard__title {
  text-align: center;
  font: 700 15px/21px "Noto Serif", serif;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 20px 0 16px;
}
.billboard__author {
  color: #747474;
  text-align: center;
}

.slider {
  position: relative;
  height: 550px;
}

.billboard__image {
  width: 320px;
  height: 306px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.billboard__price {
  color: #a62749;
  font-weight: 700;
  font-size: 15px;
  font-family: "Noto Serif", sans-serif;
  text-align: center;
  margin-top: 5px;
}

.products__slider {
  height: 550px;
}

.product__slide {
  height: 430px;
}
.product {
  box-sizing: border-box;
}

.product__title {
  font-size: 12px;
  width: 170px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-top: 10px;
}

.product__author {
  font-size: 11px;
  text-align: center;
  margin-top: 7px;
  color: #747474;
}

.product__price {
  font-size: 15px;
  color: #a62749;
  font-weight: 700;
  text-align: center;
  margin-top: 7px;
}

.product {
  padding: 15px 15px 0 15px;
  margin-bottom: 15px;
  z-index: 100;
}

.product-link {
  z-index: 1;
}

.product__wrapper {
  position: absolute;
  display: none;
  top: 6px;
  cursor: pointer;
  left: 14px;
  box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 15px;
}

.hover {
  padding: 15px 20px 0px 20px;
  z-index: 101;
}
.active {
  display: block;
  z-index: 300;
}
</style>
