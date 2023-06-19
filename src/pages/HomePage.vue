<template>
  <div class="homepage">
    <home-page-slider />
    <book-cards />
    <tabs />
    <wishes :assortments="assortments">
      <template #title>
        <div class="title">Мы учимся угадывать ваши желания</div>
      </template>
    </wishes>
    <advantages-list :advantages-list="advantagesList" />
    <authors-slider />
  </div>
</template>

<script>
import HomePageSlider from "../components/HomePageSlider.vue";
import BookCards from "../components/BookCards.vue";
import Tabs from "../components/Tabs.vue";
import Wishes from "../components/Wishes.vue";
import AdvantagesList from "../components/Advantages.vue";
import AuthorsSlider from "../components/AuthorsSlider.vue";

export default {
  methods: {},
  components: {
    HomePageSlider,
    BookCards,
    Tabs,
    Wishes,
    AdvantagesList,
    AuthorsSlider,
  },
  data() {
    return {
      advantagesList: [
        {
          title: "САМЫЙ КРУПНЫЙ МАГАЗИН КНИГ В ЦЕНТРАЛЬНОЙ АЗИИ",
          image: "assets/advantage/planet.png",
        },
        {
          title: "КУРЬЕРСКАЯ ДОСТАВКА ДО ДВЕРИ ВАШЕГО ДОМА",
          image: "assets/advantage/car.png",
        },
      ],
      assortments: [
        {
          image: "assets/wishesSlider/vimelbuh.jpg",
          title: "книжки - головоломки",
        },
        {
          image: "assets/wishesSlider/dinozavrium.jpg",
          title: "детям о древних обитателях земли",
        },
        {
          image: "assets/wishesSlider/razvivaem-mozg.jpg",
          title: "интеллект и память",
        },
        {
          image: "assets/wishesSlider/classic-in-english.jpg",
          title: "classic in english",
        },
        {
          image: "assets/wishesSlider/eko-sumki.jpg",
          title: "для шпинга для подарка",
        },
        {
          image: "assets/wishesSlider/kulinariya.jpg",
          title: "праздничная кулинария",
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 27px;
  font-weight: 700;
  font-family: "Noto Serif", sans-serif;
  letter-spacing: 5px;
  margin-bottom: 40px;
  text-transform: uppercase;
}

@media (max-width: 1440px) {
  .title {
    font-size: 24px;
  }
}

@media (max-width: 1024px) {
  .title {
    font-size: 20px;
  }
}
</style>
