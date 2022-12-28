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
          width: "378px",
          heigth: "550px",
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
          width: "378px",
          heigth: "457px",
          isFlex: false,
          background: `url(${require(`../assets/homePageCategories/hud-literatura-bg.png`)})`,
        },
        {
          id: 3,
          title: "Подарочные издания",
          border: false,
          subtitles: ["Подарочные и эксклюзивные книги"],
          width: "380px",
          heigth: "251px",
          isFlex: false,
          background: `url(${require(`../assets/homePageCategories/izdeliya.png`)})`,
        },
        {
          id: 4,
          title: "Эзотерика \n Психология \n Философия",
          border: true,
          subtitles: ["Психология", "Эзотерика", "Философия"],
          width: "378px",
          heigth: "364px",
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
          width: "380px",
          heigth: "459px",
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
          width: "378px",
          heigth: "400px",
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
          width: "380px",
          heigth: "251px",
          background: `url(${require(`../assets/homePageCategories/others-bg.png`)})`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
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
  width: 1200px;
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

.bookcard:nth-child(2) {
  left: 405px;
}

.bookcard:nth-child(3) {
  right: 0;
}

.bookcard:nth-child(4) {
  top: 570px;
  left: 0;
}

.bookcard:nth-child(5) {
  left: 405px;
  top: 477px;
}

.bookcard:nth-child(6) {
  right: 0;
  top: 271px;
}

.bookcard:nth-child(7) {
  right: 0;
  top: 685px;
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

.guide__item:hover {
  color: rgb(184, 23, 55);
}

.bgCenter {
  background-position: center 60px;
}
</style>
