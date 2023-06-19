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
        v-if="!isMobile"
        class="products__slider"
        navigation
        :slides-per-view="1"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :modules="modules"
        style="width: 100%"
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
            @click="handleProductClick(product)"
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
      <Swiper
        v-else
        class="products__slider mobile-slider"
        navigation
        :slides-per-view="1"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :modules="modules"
      >
        <swiper-slide
          class="product__slide mobile-slide"
          v-for="slide in products"
          :key="slide"
        >
          <div
            class="product"
            @mouseenter="hoveredProduct = product"
            @mouseleave="hoveredProduct = {}"
            @click="handleProductClick(product)"
            v-for="product in slide.slice(0, 4)"
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
        <swiper-slide
          class="product__slide mobile-slide"
          v-for="slide in products"
          :key="slide"
        >
          <div
            class="product"
            @mouseenter="hoveredProduct = product"
            @mouseleave="hoveredProduct = {}"
            @click="handleProductClick(product)"
            v-for="product in slide.slice(4, 8)"
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
    category: {
      type: String,
      required: false,
      default: "new",
    },
  },
  created() {
    window.addEventListener("resize", () => {
      this.windowSize = window.innerWidth;
    });
  },
  data() {
    return {
      windowSize: window.innerWidth,
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
    handleProductClick(product) {
      this.$router.push(`/${this.category}/${product.id}`);
    },
  },
  computed: {
    isMobile() {
      return this.windowSize <= 450;
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

.mobile-slide {
  display: flex;
  flex-direction: column;
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
  left: 0px;
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

@media (max-width: 1440px) {
  .product-link {
    width: 140px;
  }

  .swiper-pagination {
    column-gap: 10px;
  }

  .link-all {
    font-size: 13px;
  }

  .link-all::after {
    content: "";
    width: 22px;
    height: 6px;
  }

  .swiper-bottom-row {
    padding-right: 30px;
    margin-top: -60px;
  }

  .billboard {
    margin-top: 20px;
    width: 350px;
  }

  .billboard__title {
    font-size: 18px;
    margin: 10px 0 16px;
  }
  .billboard__image {
    width: 300px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .billboard__price {
    font-size: 13px;
  }

  .product__title {
    font-size: 10px;
    width: 150px;
    margin-top: 5px;
  }

  .product__author {
    font-size: 9px;
  }

  .product__price {
    font-size: 13px;
  }

  .product {
    padding: 10px 10px 0 10px;
    margin-bottom: 10px;
  }

  .product__wrapper {
    padding-top: 5px;
    padding-bottom: 10px;
  }

  .hover {
    padding: 10px 15px 0px 15px;
  }
}

@media (max-width: 1024px) {
  .slider {
    width: 95%;
  }
  .product-link {
    width: 120px;
  }
  .swiper-pagination {
    column-gap: 5px;
  }
  .link-all {
    font-size: 10px;
  }
  .link-all::after {
    content: "";
    width: 20px;
    height: 4px;
  }

  .swiper-pagination {
    left: 55px;
  }

  .swiper-bottom-row {
    padding-right: 25px;
    margin-top: -105px;
  }

  .billboard {
    margin-top: 15px;
    width: 320px;
    padding: 10px;
  }

  .billboard__title {
    font-size: 16px;
    margin: 5px 0 8px;
  }
  .billboard__image {
    width: 280px;
    height: 260px;
  }
  .billboard__price {
    font-size: 11px;
  }

  .product__title {
    font-size: 8px;
    width: 120px;
  }

  .product__price {
    font-size: 11px;
  }

  .product {
    padding: 5px 5px 0 5px;
    margin-bottom: 5px;
  }

  .product__wrapper {
    padding-bottom: 5px;
  }

  .hover {
    padding: 5px 10px 0px 10px;
  }
}

@media (max-width: 768px) {
  .slider {
    width: 95%;
  }
  .product-link {
    width: 100px;
  }
  .swiper-pagination {
    column-gap: 5px;
  }
  .link-all {
    font-size: 10px;
  }
  .link-all::after {
    content: "";
    width: 20px;
    height: 4px;
  }

  .swiper-pagination {
    left: 55px;
  }

  .swiper-bottom-row {
    padding-right: 25px;
    margin-top: -105px;
  }

  .billboard {
    width: 170px;
    padding: 5px;
    margin: 10px auto;
  }

  .billboard__title {
    font-size: 14px;
  }
  .billboard__image {
    width: 170px;
    height: 260px;
  }
  .billboard__price {
    font-size: 11px;
  }

  .product__title {
    font-size: 8px;
    width: 120px;
  }

  .product__price {
    font-size: 11px;
  }

  .content {
    flex-direction: column;
  }

  .content {
    height: 850px;
  }

  .product {
    padding: 5px 5px 0 5px;
    margin-bottom: 5px;
    width: 25%;
  }

  .product__wrapper {
    padding-bottom: 5px;
  }

  .hover {
    padding: 5px 10px 0px 10px;
  }

  .swiper {
    width: 100%;
  }
}
</style>
