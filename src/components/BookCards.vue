<template>
  <div class="container">
    <h2 class="title">Топ категорий</h2>
    <div class="bookcards__container">
      <div class="bookcards">
        <div
          class="bookcard"
          v-for="card in cards"
          :key="card.id"
          :style="{
            width: card.width,
            height: card.heigth,
            backgroundImage: card.background,
          }"
          :class="{
            bgCenter: card.top,
            bordered: card.border,
          }"
        >
          <h3 class="bookcard__title">{{ card.title }}</h3>
          <div
            class="bookcard__guide"
            :class="{
              flexCol: card.isFlex,
            }"
          >
            <div
              class="guide__item"
              v-for="guide in card.subtitles"
              :key="guide"
            >
              {{ guide }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bookcards-mobile">
      <div
        class="bookcard-mobile"
        v-for="card in cards"
        :key="card.id"
        :style="{
          width: card.width,
          height: card.heigth,
          backgroundImage: card.background,
        }"
        :class="{
          bgCenter: card.top,
          bordered: card.border,
        }"
      >
        <h3 class="bookcard__title">{{ card.title }}</h3>
        <div
          class="bookcard__guide"
          :class="{
            flexCol: card.isFlex,
          }"
        >
          <div class="guide__item" v-for="guide in card.subtitles" :key="guide">
            {{ guide }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCards",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Мой Казахстан",
          border: true,
          subtitles: [
            "О Казахстане",
            "Художественная литература Казахстана",
            "Детям о Казахстане",
          ],
          top: true,

          isFlex: true,
          background: `url(${require(`../assets/homePageCategories/my-kazakhstan-bg.png`)})`,
        },
        {
          id: 2,
          title: "Художественная литература",
          border: true,
          subtitles: [
            "Классическая литература",
            "Современная литература",
            "Остросюжетная литература",
            "Поэзия",
            "Foreign books",
          ],

          isFlex: false,
          background: `url(${require(`../assets/homePageCategories/hud-literatura-bg.png`)})`,
        },
        {
          id: 3,
          title: "Подарочные издания",
          border: false,
          subtitles: ["Подарочные и эксклюзивные книги"],

          isFlex: false,
          background: `url(${require(`../assets/homePageCategories/izdeliya.png`)})`,
        },
        {
          id: 4,
          title: "Эзотерика \n Психология \n Философия",
          border: true,
          subtitles: ["Психология", "Эзотерика", "Философия"],

          isFlex: false,
          background: `url(${require(`../assets/homePageCategories/philosophy.png`)})`,
        },
        {
          id: 5,
          title: "Детям и \n Родителям",
          border: false,
          subtitles: [
            "В помощь школьнику",
            "Малышам",
            "Детям и подросткам",
            "Игры. Пазлы. Наборы для творчества",
            "Педагогика. Образование",
          ],

          isFlex: false,
          background: `url(${require(`../assets/homePageCategories/kids-bg.png`)})`,
        },
        {
          id: 6,
          title: "Деловая \n литература",
          border: true,
          subtitles: [
            "Экономика. Право. Финансы",
            "Менеджмент. Маркетинг. Управление персоналом",
            "Практика бизнеса",
          ],

          isFlex: false,
          background: `url(${require(`../assets/homePageCategories/bussiness-bg.png`)})`,
        },
        {
          id: 7,
          title: "Другая литература",
          border: false,
          subtitles: [
            "Образование",
            "Наука и промышленность",
            "Искусство. Строительство. Дизайн",
            "Досуг. Увлечение. Спорт",
            "Комиксы",
          ],
          isFlex: true,

          background: `url(${require(`../assets/homePageCategories/others-bg.png`)})`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  margin-top: 40px;
}

.bordered {
  border: 1px solid black;
}

.title {
  margin-bottom: 30px;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: "Noto Serif", serif;
  font-weight: 600;
}

.bookcards__container {
  height: 1001px;
}
.bookcards {
  display: grid;
  grid-template-columns: repeat(3, 380px);
  column-gap: 10px;
  row-gap: 10px;
  position: relative;
}

.bookcard {
  position: absolute;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  margin: 7px;
  flex-wrap: wrap;
  background-repeat: no-repeat;
  background-position: bottom right;
}

.bookcard:first-child {
  width: 400px;
  height: 600px;
}

.bookcard:nth-child(2) {
  left: 405px;
  width: 400px;
  height: 450px;
}

.bookcard:nth-child(3) {
  right: 0;
  width: 375px;
  height: 250px;
}

.bookcard:nth-child(4) {
  top: 570px;
  left: 0;
  width: 400px;
  height: 370px;
}

.bookcard:nth-child(5) {
  left: 405px;
  top: 477px;
  width: 400px;
  height: 460px;
}

.bookcard:nth-child(6) {
  right: 0;
  top: 271px;
  width: 375px;
  height: 400px;
}

.bookcard:nth-child(7) {
  right: 0;
  top: 685px;
  width: 375px;
  height: 250px;
}

.flexCol {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.bookcard__title {
  font-family: "Noto Serif", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
}

.guide__item {
  font-size: 14px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 15px;
  padding: 0 15px 0 17px;
  position: relative;
  max-width: 120px;
}

.guide__item::before {
  content: "";
  background-color: rgb(184, 23, 55);
  width: 6px;
  top: 5px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  display: inline-block;
}

.bookcards-mobile {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.bookcard-mobile {
  background-repeat: no-repeat;
  min-height: 200px;
  background-size: contain;
  background-position: center right;
}

.guide__item:hover {
  color: rgb(184, 23, 55);
}

.bgCenter {
  background-position: center 60px;
}

.bookcards-mobile {
  display: none;
}

@media (max-width: 1440px) {
  .container {
    max-width: 100%;
    margin-top: 30px;
  }

  .title {
    margin-bottom: 25px;
    font-size: 25px;
  }

  .bookcards__container {
    width: 1100px;
    height: 900px;
    margin: 0 auto;
  }
  .bookcard {
    padding: 25px;
    margin: 5px;
  }

  .bookcard:first-child {
    width: 370px;
    height: 550px;
  }

  .bookcard:nth-child(2) {
    left: 380px;
    width: 370px;
    height: 400px;
  }

  .bookcard:nth-child(3) {
    right: 0;
    width: 325px;
    height: 200px;
  }

  .bookcard:nth-child(4) {
    top: 515px;
    left: 0;
    width: 370px;
    height: 340px;
  }

  .bookcard:nth-child(5) {
    left: 380px;
    top: 410px;
    width: 370px;
    height: 445px;
  }

  .bookcard:nth-child(6) {
    right: 0;
    top: 220px;
    width: 330px;
    height: 400px;
  }

  .bookcard:nth-child(7) {
    right: 0;
    top: 635px;
    width: 330px;
    height: 225px;
  }

  .bookcard__title {
    font-size: 18px;
  }

  .guide__item {
    font-size: 12px;
    margin-bottom: 12px;
    padding: 0 11px 0 13px;
    max-width: 100px;
  }

  .guide__item::before {
    content: "";
    background-color: rgb(184, 23, 55);
    width: 6px;
    top: 5px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    display: inline-block;
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 10px 0;
    margin: 20px auto;
  }
  .title {
    margin-bottom: 20px;
    font-size: 22px;
  }
  .bookcards__container {
    width: 900px;
  }
  .bookcard {
    padding: 20px;
    margin: 0px;
  }

  .bookcard:first-child {
    width: 280px;
  }

  .bookcard:nth-child(2) {
    left: 290px;
    width: 280px;
    height: 370px;
  }

  .bookcard:nth-child(3) {
    right: 70px;
    width: 230px;
    height: 200px;
  }

  .bookcard:nth-child(4) {
    top: 560px;
    left: 0;
    width: 280px;
    height: 310px;
  }

  .bookcard:nth-child(5) {
    left: 290px;
    top: 380px;
    width: 280px;
    height: 485px;
  }

  .bookcard:nth-child(6) {
    right: 50px;
    top: 210px;
    width: 235px;
    height: 380px;
  }

  .bookcard:nth-child(7) {
    right: 50px;
    top: 635px;
    width: 270px;
    height: 200px;
  }

  .bookcard__title {
    font-size: 16px;
  }

  .guide__item {
    font-size: 10px;
    margin-bottom: 6px;
    padding: 0 5px 0 7px;
    max-width: 100px;
  }
}

@media (max-width: 768px) {
  .content {
    height: auto;
  }
  .container {
    margin-top: 30px;
    margin-bottom: 0;
  }
  .title {
    margin-bottom: 20px;
    font-size: 18px;
  }
  .bookcards__container {
    width: 700px;
  }
  .bookcard {
    padding: 10px;
    margin: 0px;
  }

  .bookcard:first-child {
    width: 240px;
  }

  .bookcard:nth-child(2) {
    left: 250px;
    width: 240px;
    height: 370px;
  }

  .bookcard:nth-child(3) {
    right: 0px;
    width: 190px;
    height: 200px;
  }

  .bookcard:nth-child(4) {
    top: 560px;
    left: 0;
    width: 240px;
    height: 310px;
  }

  .bookcard:nth-child(5) {
    left: 250px;
    top: 380px;
    width: 240px;
    height: 485px;
  }

  .bookcard:nth-child(6) {
    right: 0px;
    top: 210px;
    width: 195px;
    height: 380px;
  }

  .bookcard:nth-child(7) {
    right: 0px;
    top: 615px;
    width: 200px;
    height: 250px;
  }

  .guide__item {
    font-size: 12px;
  }
}

@media (max-width: 500px) {
  .container {
    margin-top: 20px;
  }
  .title {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .bookcards__container {
    width: 100%;
    height: auto;
  }

  .bookcards {
    display: none;
  }

  .bookcards-mobile {
    display: flex;
  }
  .bookcard {
    padding: 5px;
  }

  .bookcard__guide {
    padding: 30px;
  }

  .guide__item {
    font-size: 12px;
  }
}
</style>
