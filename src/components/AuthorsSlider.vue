<template>
  <div class="container">
    <div class="title">- YOUNG ADULT -</div>
    <div class="subtitle">ПОПУЛЯРНЫЕ АВТОРЫ МОЛОДЁЖНОЙ ЛИТЕРАТУРЫ</div>
    <swiper
      :modules="modules"
      :loop="true"
      :slides-per-view="slideSize"
      :slides-per-group="3"
      :draggable="false"
      navigation
      style="height: 230px"
      :pagination="{
        el: '.authors-swiper-pagination',
        clickable: true,
      }"
    >
      <swiper-slide
        style="
          width: 150px;
          height: 150px;
          display: flex;
          flex-direction: column;
        "
        v-for="slide in slides"
        :key="slide.name"
      >
        <img :src="require(`../${slide.image}`)" class="slide_image" />
        <div class="slide__title">{{ slide.name }}</div>
      </swiper-slide>
    </swiper>
    <div class="authors-swiper-pagination"></div>
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
  created() {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      this.windowSize = window.innerWidth;
      console.log(this.slideSize);
    });
  },
  data() {
    return {
      windowSize: window.innerWidth,
      slides: [
        { name: "Адам Сильвера", image: "assets/authors/adam-silvera.jpg" },
        {
          name: "Ася Лавринович",
          image: "assets/authors/asya-lavrinovich.jpg",
        },
        { name: "Холли Блэк", image: "assets/authors/holly-black.jpg" },
        {
          name: "Дженнифер Арментроуд",
          image: "assets/authors/jennifer-armentroud.jpg",
        },
        { name: "Джон Грин", image: "assets/authors/john=green.jpg" },
        { name: "Ли Бардуго", image: "assets/authors/li-bardugo.jpg" },
        { name: "Лия Арден", image: "assets/authors/liya-arden.jpg" },
        { name: "Мона Кастен", image: "assets/authors/mona-kasten.jpg" },
        { name: "Рэйчел Мид", image: "assets/authors/rachel-mid.jpg" },
        { name: "Сара Джанет", image: "assets/authors/sara-janet.jpg" },
        { name: "Стивен Чбоски", image: "assets/authors/steven-chboski.jpg" },
      ],
      modules: [Pagination, Navigation],
    };
  },
  computed: {
    slideSize() {
      // switch (this.windowSize) {
      //   case this.windowSize <= 1024:
      //     return "120px";
      //   default:
      //     return "190px";
      // }
      if (this.windowSize <= 1024) {
        return 3;
      } else {
        return 6;
      }
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.container {
  padding: 40px;
  background-color: #f7f8f9;
  margin-bottom: 150px;
}
.title {
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  font-family: "Noto Serif", sans-serif;
}

.subtitle {
  color: #747474;
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
}
.swiper {
  display: flex;
}

.authors-swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.slide__title {
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}

.slide_image {
  width: 193px;
}

@media (max-width: 1440px) {
  .container {
    padding: 30px;
    margin-bottom: 120px;
  }
  .title {
    font-size: 27px;
  }

  .subtitle {
    margin: 15px 0;
    font-size: 12px;
  }
  .authors-swiper-pagination {
    margin-top: 25px;
  }
  .slide__title {
    font-size: 12px;
    margin-top: 5px;
  }

  .slide_image {
    width: 170px;
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 25px;
    margin-bottom: 0px;
  }
  .title {
    font-size: 23px;
  }

  .subtitle {
    margin: 10px 0;
    font-size: 10px;
  }
  .authors-swiper-pagination {
    margin-top: 20px;
  }

  .slide__title {
    font-size: 10px;
    margin-top: 5px;
  }
}

@media (max-width: 780px) {
  .container {
    padding: 15px;
    margin-bottom: 0px;
  }
  .title {
    font-size: 20px;
  }

  .subtitle {
    margin: 5px 0;
    font-size: 10px;
  }
  .authors-swiper-pagination {
    margin-top: 15px;
  }

  .slide__title {
    font-size: 10px;
    margin-top: 5px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 10px;
    margin-bottom: 0px;
  }
  .title {
    font-size: 18px;
  }

  .subtitle {
    font-size: 10px;
    margin-bottom: 10px;
  }
  .authors-swiper-pagination {
    margin-top: 10px;
  }

  .slide__title {
    font-size: 12px;
    margin-top: 5px;
  }

  .slide_image {
    width: 140px;
  }
}
</style>
