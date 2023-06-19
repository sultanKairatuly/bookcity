<template>
  <div class="about">
    <banner-component
      :bannerTitle="'О магазине'"
      :image="'https://www.bookcity.kz/upload/Sh/imageCache/eb3/7a2/87d0de889766a6f3f0c1e35d4d2c60e9.jpg'"
    />
    <div class="container">
      <div class="info">
        <div class="info_item">
          <div class="info_item-title">Магазин «Книжный Город»</div>
          <div class="info_item-description">
            «Книжный город» является самым крупным в Центральной Азии книжным
            магазином, в котором представлено около 80 000 наименований книг.
            Большое внимание в ассортименте уделяется детской литературе и
            развивающим играм для детей. Гордостью магазина является отдел
            подарочных и эксклюзивных изданий – уникальных книг, выпущенных
            ограниченным тиражом. В ассортименте имеются также и сопутствующие
            товары, в числе которых пазлы, открытки, закладки, картографические
            издания, сувениры.
          </div>
        </div>
        <div class="info_item">
          <div class="info_item-title">Наши ценности</div>
          <div class="info_item-description">
            Нами движет желание удовлетворить потребности клиентов,
            профессионализм и вовлечённость наших сотрудников. Нацеленность на
            удовлетворение потребностей наших покупателей является
            основополагающим принципом организации нашей работы.
          </div>
        </div>
        <div class="info_item">
          <div class="info_item-title">Покупатель</div>
          <div class="info_item-description">
            Мы отдаем себе отчёт в том, что успех заключается в компетентности
            наших сотрудников, и делаем всё возможное для привлечения и
            удержания лучших специалистов, создавая условия для развития их
            профессиональных качеств. Каждый сотрудник компании стремится к
            повышению уровня своего профессионализма и наряду с уникальной
            программой обучения самостоятельно посещает семинары и тренинги,
            читает специализированную литературу.
          </div>
        </div>
        <div class="info_item">
          <div class="info_item-title">Профессионализм</div>
          <div class="info_item-description">
            Мы отдаем себе отчёт в том, что успех заключается в компетентности
            наших сотрудников, и делаем всё возможное для привлечения и
            удержания лучших специалистов, создавая условия для развития их
            профессиональных качеств. Каждый сотрудник компании стремится к
            повышению уровня своего профессионализма и наряду с уникальной
            программой обучения самостоятельно посещает семинары и тренинги,
            читает специализированную литературу.
          </div>
        </div>
        <div class="info_item">
          <div class="info_item-title">Командный дух</div>
          <div class="info_item-description">
            Мы работаем в атмосфере сотрудничества и гордости за коллективный
            труд, где поставленные задачи и цели компании воспринимаются как
            общее дело. Мы сотрудничаем между собой без преград и барьеров и с
            радостью делимся своими знаниями и опытом друг с другом. Только
            занимаясь любимым делом, можно достичь общей цели и принести
            наибольшую пользу.
          </div>
        </div>
      </div>
      <wishes class="white" :assortments="assortments">
        <template #title>
          <img src="../assets/icons/book-mini.png" class="mini-book" />
          <div class="title">
            У НАС ВЫ ВСЕГДА НАЙДЕТЕ ЛЮБЫЕ<br />ИНТЕРЕСУЮЩИЕ ВАС КНИГИ
          </div>
        </template>
      </wishes>
      <advantage-list :advantagesList="advantagesList" />
    </div>
    <div class="why-us">
      <div class="why-us__title">ПОЧЕМУ С НАМИ УДОБНО</div>
      <div class="doublecard">
        <div class="why-us__reasons">
          <div class="reason top">
            <img class="reason-image" src="../assets/icons/check.png" />
            <div class="reason-text">
              Процесс покупки на нашем сайте максимально простой, удобный и
              понятный.
            </div>
          </div>
          <div class="reason">
            <img class="reason-image" src="../assets/icons/check.png" />
            <div class="reason-text">
              Наших покупателей всегда ждут приятные сюрпризы - акции, скидки,
              розыгрыши!
            </div>
          </div>
        </div>
        <div class="why-us-reasons">
          <div class="reason top">
            <img class="reason-image" src="../assets/icons/check.png" />
            <div class="reason-text">
              При оформлении заказа Вы сможете выбрать удобные для Вас время
              доставки и способ оплаты.
            </div>
          </div>
          <div class="reason">
            <img class="reason-image" src="../assets/icons/check.png" />
            <div class="reason-text">
              Оперативная доставка заказа при наличии товара на складе в Алматы.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="how-works">
      <div class="how-works__container">
        <div class="how-works__item main">
          <div class="main__title">
            <span class="dark">Как</span> это работает?
          </div>
        </div>
        <div class="how-works__item">
          <div class="number">1</div>
          <div class="how-works__item-text">
            Наши логистические центры находятся в Москве и Алматы, что позволяет
            оптимизировать обработку и доставку заказов.
          </div>
        </div>
        <div class="how-works__item">
          <div class="number">2</div>
          <div class="how-works__item-text">
            На складе в Алматы большой ассортимент товаров для оперативной
            доставки.
          </div>
        </div>
        <div class="how-works__item">
          <div class="number">3</div>
          <div class="how-works__item-text">
            Нашими партнерами являются ведущие и крупнейшие издательства
            Казахстана, России, Беларуси и других стран.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComponent from "../components/Banners.vue";
import Wishes from "../components/Wishes.vue";
import AdvantageList from "../components/Advantages.vue";

export default {
  name: "AboutCompany",
  components: {
    BannerComponent,
    Wishes,
    AdvantageList,
  },
  data() {
    return {
      assortments: [
        { image: "assets/wishesSlider/detective.jpg", title: "детективы" },
        {
          image: "assets/wishesSlider/dlya-detei.jpg",
          title: "книги для детей",
        },
        {
          image: "assets/wishesSlider/my-kazakhstan.jpg",
          title: "мой казахстан",
        },
        {
          image: "assets/wishesSlider/sovremennaya-proza.jpg",
          title: "современная проза",
        },
        {
          image: "assets/wishesSlider/igrovie-izdaniya.jpg",
          title: "игровые издания.наборы для творчества",
        },
        {
          image: "assets/wishesSlider/podarochnie-izdeliya.jpg",
          title: "Подарочные издания",
        },
      ],
      advantagesList: [
        {
          title: "САМЫЙ КРУПНЫЙ МАГАЗИН КНИГ В ЦЕНТРАЛЬНОЙ АЗИИ",
          image: "assets/advantage/planet.png",
        },
        {
          title: "КУРЬЕРСКАЯ ДОСТАВКА ДО ДВЕРИ ВАШЕГО ДОМА",
          image: "assets/advantage/car.png",
        },
        {
          title: "В МАГАЗИНЕ БЕСПЛАТНАЯ УПАКОВКА КНИГ",
          image: "assets/advantage/icon-gift.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
}
.number {
  font-weight: 700;
  font-family: "Noto Serif", sans-serif;
}
.how-works__container {
  width: 1200px;
  padding: 80px 0;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
}

.how-works__item-text {
  font-size: 14px;
}

.main {
  position: relative;
}

.main::before {
  content: "";
  display: block;
  position: absolute;
  width: 293px;
  height: 246px;
  z-index: 10;
  bottom: 0;
  left: 0;
  background-image: url("../assets/icons/books-tower.png");
  background-position: left center;
  background-repeat: no-repeat;
}

.how-works__item {
  width: 292px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.how-works__item:first-child {
  border: 1px solid #cfd3d5;
}

.how-works__item {
  border: 1px solid #cfd3d5;
  border-left: none;
}

.main__title {
  font-weight: 700;
  font-size: 20px;
  width: 100px;
  margin: 30px 0px 0px 110px;
  font-family: "Noto Serif", sans-serif;
  text-transform: uppercase;
}

.dark {
  padding: 5px;
  background-color: #000;
  color: #fff;
}

.mini-book {
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
}

.how-works__item {
  padding: 25px;
}
.top {
  margin-bottom: 30px;
}
.white {
  background-color: #fff;
}

.why-us {
  padding: 60px 0 80px 0;
  background-color: #f7f8f9;
}

.title {
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  font-family: "Noto Serif", sans-serif;
  letter-spacing: 5px;
  margin-bottom: 40px;
  text-transform: uppercase;
}
.info_item {
  font-size: 19px;
  font-weight: 500;
}
.info_item {
  margin-bottom: 50px;
}
.info_item-title {
  text-align: center;
  margin-bottom: 20px;
}

.why-us__title {
  font-family: "Noto Serif", sans-serif;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 5px;
  font-size: 25px;
}

.doublecard {
  display: flex;
  align-items: center;
  column-gap: 30px;
  justify-content: center;
}
.why-us__reasons {
  padding: 30px;
}
.reason {
  display: flex;
  column-gap: 25px;
}

.reason-text {
  width: 440px;
}

@media (max-width: 1440px) {
  .how-works__container {
    padding: 70px 0;
  }

  .how-works__item-text {
    font-size: 12px;
  }
  .main::before {
    content: "";
    width: 270px;
    height: 220px;
  }

  .how-works__item {
    width: 270px;
    height: 180px;
  }

  .main__title {
    font-size: 18px;
    margin: 25px 0px 0px 100px;
  }

  .mini-book {
    margin: 0 auto;
    display: block;
    margin-bottom: 15px;
  }

  .how-works__item {
    padding: 15px;
  }
  .top {
    margin-bottom: 20px;
  }

  .why-us {
    padding: 50px 0 70px 0;
    background-color: #f7f8f9;
  }

  .title {
    font-size: 22px;
    margin-bottom: 25px;
  }
  .info_item {
    font-size: 18px;
  }
  .info_item {
    margin-bottom: 40px;
  }
  .info_item-title {
    margin-bottom: 15px;
  }

  .why-us__title {
    margin-bottom: 20px;
    font-size: 22px;
  }

  .doublecard {
    column-gap: 25px;
  }
  .why-us__reasons {
    padding: 20px;
  }
  .reason {
    column-gap: 20px;
  }
}

@media (max-width: 1024px) {
  .how-works__container {
    padding: 55px 0;
  }

  .how-works__item-text {
    font-size: 12px;
  }
  .main::before {
    content: "";
    width: 250px;
    height: 220px;
  }

  .how-works__item {
    width: 250px;
    height: 180px;
  }

  .main__title {
    font-size: 16px;
    margin: 20px 0px 0px 80px;
  }

  .mini-book {
    margin-bottom: 10px;
  }

  .how-works__item {
    padding: 10px;
  }
  .top {
    margin-bottom: 15px;
  }

  .why-us {
    padding: 40px 0 60px 0;
  }

  .title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .info_item {
    font-size: 16px;
  }
  .info_item {
    margin-bottom: 35px;
  }
  .info_item-title {
    margin-bottom: 10px;
  }

  .why-us__title {
    margin-bottom: 15px;
    font-size: 20px;
  }

  .doublecard {
    column-gap: 20px;
  }
  .why-us__reasons {
    padding: 15px;
  }
  .reason {
    column-gap: 15px;
  }
}

@media (max-width: 780px) {
  .how-works__container {
    padding: 55px 0;
    width: 100%;
  }

  .how-works__item-text {
    font-size: 10px;
  }
  .main::before {
    content: "";
    width: 250px;
    height: 220px;
  }

  .how-works__item {
    width: 50%;
    height: 180px;
  }

  .main__title {
    font-size: 14px;
    margin: 15px 0px 0px 60px;
  }

  .mini-book {
    margin-bottom: 5px;
  }

  .how-works__item {
    padding: 5px;
  }
  .top {
    margin-bottom: 10px;
  }

  .why-us {
    padding: 30px 0 45px 0;
  }

  .title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .info_item {
    font-size: 14px;
  }
  .info_item {
    margin-bottom: 30px;
  }
  .info_item-title {
    margin-bottom: 5px;
  }

  .why-us__title {
    margin-bottom: 10px;
    font-size: 17px;
  }

  .doublecard {
    column-gap: 10px;
    flex-direction: column;
  }

  .why-us__reasons {
    padding: 10px;
  }
  .reason {
    column-gap: 15px;
  }
}

@media (max-width: 450px) {
  .how-works__container {
    flex-direction: column;
    padding: 30px 0;
    width: 100%;
  }

  .how-works__item-text {
    font-size: 18px;
  }
  .main::before {
    content: "";
    width: 200px;
    height: 120px;
  }

  .how-works__item {
    width: 100%;
    height: 180px;
  }

  .main__title {
    font-size: 12px;
    margin: 10px 0px 0px 40px;
  }

  .mini-book {
    margin-bottom: 5px;
  }

  .how-works__item {
    padding: 5px;
  }
  .top {
    margin-bottom: 5px;
  }

  .why-us {
    padding: 20px 0 35px 0;
  }

  .title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  .info_item {
    font-size: 12px;
  }
  .info_item {
    margin-bottom: 20px;
  }
  .info_item-title {
    margin-bottom: 5px;
  }

  .why-us__title {
    margin-bottom: 5px;
    font-size: 15px;
  }

  .doublecard {
    column-gap: 5px;
    flex-direction: column;
  }

  .why-us__reasons,
  .why-us-reasons {
    padding: 5px;
    width: 100%;
  }
  .reason {
    column-gap: 10px;
  }

  .reason-image {
    height: 100%;
  }
}

@media (max-width: 320px) {
  .how-works__container {
    padding: 20px 0;
  }

  .how-works__item-text {
    font-size: 16px;
  }
  .main__title {
    font-size: 10px;
    margin: 5px 0px 0px 20px;
  }

  .why-us {
    padding: 10px 0 20px 0;
  }

  .title {
    font-size: 14px;
  }
  .info_item {
    font-size: 13px;
  }
  .info_item {
    margin-bottom: 10px;
  }

  .why-us__title {
    font-size: 11px;
  }
}
</style>
