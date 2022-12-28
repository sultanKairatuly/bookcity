<template>
  <div class="basket">
    <div class="none-basket" v-if="!getBasket.length">
      <img src="../assets/icons/basket-red.png" />
      <h1 class="none-title">ВАША КОРЗИНА ПУСТА</h1>
      <div class="link">
        выберите нужный товар в
        <router-link class="catalog__link" to="/catalogs/Fiction"
          >каталоге</router-link
        >
      </div>
    </div>
    <div class="basket__container" v-else>
      <h1 class="title">Корзина</h1>
      <div class="info">
        Вы добавили {{ getBasket.length }} товаров на сумму 56 750 тг
      </div>
      <div class="header">
        <div class="header__item">Товар</div>
        <div class="header__item">Цена</div>
        <div class="header__item">Кол-во</div>
      </div>
      <div class="book-list">
        <div class="book" :key="book.id" v-for="book in getBasket">
          <div class="book-link">
            <img :src="require(`../${book.image}`)" class="book__image" />
          </div>
          <div class="book-info">
            <div class="book__title">{{ title(book.title) }}</div>
            <div class="book__author">{{ author(book.author) }}</div>
          </div>
          <div class="book-price">{{ book.price }}</div>
          <div class="book-counter">
            <input class="amount" v-model="book.counter" />
            <div class="setting">
              <div class="plus" @click="book.counter++"></div>
              <div
                class="minus"
                @click="
                  book.counter === 1 ? (book.counter = 1) : book.counter--
                "
              ></div>
            </div>
            <div class="btns">
              <i
                class="fa-solid fa-trash trash"
                @click="deleteFromBasket(book)"
              ></i>
              <i
                class="fa-solid fa-heart heart"
                :class="{
                  added: includes(book.id),
                }"
                @click="addToFavourites(book)"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div class="basket-footer">
        <div class="left">
          <div class="promocode">
            <input
              type="text"
              class="promocode__input"
              placeholder="Промокод"
            />
            <button class="promocode___btn">Применить</button>
          </div>
          <router-link to="/" class="back">Вернуться к покупкам</router-link>
        </div>
        <div class="vertical-line"></div>
        <div class="right">
          <div class="order-info">
            <div class="order-info__item">
              <div class="key">Сумма заказов</div>
              <div class="value">{{ summy }}</div>
            </div>
            <div class="order-info__item">
              <div class="key">Доставка</div>
              <div class="value delivery">
                {{
                  Number(summy.replace(/[\sтг]/gi, "")) > 10000
                    ? "Бесплатно"
                    : "1000 тг"
                }}
              </div>
            </div>
            <div class="order-info__item">
              <div class="main-key">Итого</div>
              <div class="value main-value">{{ summy }}</div>
            </div>
          </div>
          <button class="buy">оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BasketComponent",
  computed: {
    ...mapGetters(["getBasket", "getFavourites"]),
    summy() {
      const summy = this.getBasket.reduce((a, i) => {
        let inted = Number(i.price.replace(/[\sтг]/gi, "")) * i.counter;
        return (a += inted);
      }, 0);
      let a = summy + " " + "тг";
      return a;
    },
  },
  methods: {
    ...mapActions(["callFavouritesUpdation", "callBasketFiltration"]),
    author(str) {
      let strArray = str.split(" ");
      if (strArray.length > 1) {
        return (
          strArray[0][0] +
          strArray[0].split("").slice(1).join("").toLowerCase() +
          " " +
          strArray[1]
        );
      } else {
        return (
          strArray[0][0] + strArray[0].split("").slice(1).join("").toLowerCase()
        );
      }
    },
    deleteFromBasket(bookToDelete) {
      this.callBasketFiltration(bookToDelete);
    },
    includes(id) {
      const book = this.getFavourites.filter((i) => i.id === id)[0];

      return book ? true : false;
    },
    title(title) {
      let strArray = title.split(".");
      let result = [];
      strArray.forEach((item) => {
        let trimmed = item.trim();
        let string =
          trimmed[0] +
          trimmed.split("").slice(1).join("").trim().toLowerCase() +
          ".";
        result.push(string);
      });

      return result.join("");
    },
    addToFavourites(bookToAdd) {
      if (!this.includes(bookToAdd.id)) {
        this.callFavouritesUpdation(bookToAdd);
      } else {
        console.log("you already added this product!");
      }
    },
  },
  data() {
    return {
      headerItems: ["Товар", "Цена", "Кол-во"],
    };
  },
};
</script>

<style scoped>
.basket__container {
  width: 1200px;
}
.basket__container {
  width: 900px;
  margin: 0 auto;
  padding: 50px 0;
}

.book {
  position: relative;
}

.none-basket {
  display: flex;
  padding: 90px 0px 150px 0px;
  flex-direction: column;
  align-items: center;
  width: 900px;
  margin: 0 auto;
}

.none-title {
  font-family: "Noto Serif", sans-serif;
  margin: 15px 0 30px 0px;
}

.catalog__link {
  color: #a2163f;
  text-decoration: none;
}

.title {
  font-family: "Noto Serif", sans-serif;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.info {
  font-size: 15px;
  margin-bottom: 15px;
}
.header {
  padding: 15px 0;
  background-color: #f7f8f9;
  display: flex;
  border: 1px solid #d3d7d9;
  border-bottom: none;
}
.header__item {
  font-weight: 700;
  padding: 5px 20px;
}

.header__item:first-child {
  width: 405px;
}

.header__item:nth-child(2) {
  width: 140px;
}

.header__item:nth-child(3) {
  width: 140px;
}

.book {
  align-items: center;
  padding: 20px;
  border: 0.5px solid #cfd3d5;
  display: flex;
}
.book-link {
  margin-right: 20px;
}
.book__image {
  width: 59px;
  height: 96px;
}

.book__title {
  font-weight: 700;
  font-size: 15px;
  width: 320px;
}
.book__author {
  margin-top: 5px;
  color: #9b9b9b;
  font-size: 15px;
}
.book-price {
  font-weight: 700;
  width: 140px;
  color: #a2163f;
}

.book-counter {
  display: flex;
  align-items: center;
}
.amount {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaebec;
  width: 50px;
  height: 50px;
  text-align: center;
  transition: 0.2s ease-in-out;
  outline: none;
}

.amount:hover {
  border: 1px solid #a2163f;
}
.amount:focus {
  border: 1px solid #a2163f;
}
.plus,
.minus {
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
  border-right: 1px solid #eaebec;
  cursor: pointer;
  transition: 0.2s ease;
}

.plus {
  background-image: url("../assets/icons/plus.png");
  border-top: 1px solid #eaebec;
  border-right: 1px solid #eaebec;
  border-bottom: 0.5px solid #eaebec;
}
.minus {
  background-image: url("../assets/icons/minus-b.png");
  border-top: 0.5px solid #eaebec;
  border-bottom: 1px solid #eaebec;
}

.minus:hover,
.plus:hover {
  border: 1px solid #a2163f;
}

.btns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 10px;
  row-gap: 10px;
}

.trash,
.heart {
  cursor: pointer;
  padding: 10px;
  transition: 0.2s ease-in-out;
  font-size: 20px;
}

.trash:hover {
  background-color: #000;
  color: #fff;
}
.heart:hover {
  background-color: black;
  color: red;
}

.added {
  color: #a2163f;
}

.basket-footer {
  display: flex;
  padding: 25px 0;
  justify-content: center;
  border: 1px solid #cfd3d5;
  border-top: none;
}
.left {
  padding: 0px 50px 0px 30px;
}
.promocode {
  margin-bottom: 80px;
}
.promocode__input {
  width: 222px;
  padding: 9px 15px;
  border: 1px solid #cfd3d5;
  border-right: none;
  font-size: 16px;
  outline: none;
  transition: 0.2s ease-in-out;
}

.promocode__input:hover {
  border: 1px solid black;
}
.promocode___btn {
  text-transform: uppercase;
  color: #a2163f;
  border: 1px solid #a2163f;
  background-color: #fff;
  padding: 11px 20px;
  cursor: pointer;
}
.back {
  text-transform: uppercase;
  color: #a2163f;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  cursor: pointer;
}

.back::before {
  content: "";
  background-image: url("../assets/icons/arrow-left.png");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
  width: 20px;
  display: inline-block;
  height: 12px;
  margin-right: 5px;
}
.right {
  width: 50%;
  padding: 0px 50px 0px 30px;
}
.order-info {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 20px;
}
.order-info__item {
  display: flex;
  justify-content: space-between;
}
.key {
  font-size: 15px;
}
.main-key {
  font-weight: 700;
  text-transform: uppercase;
}
.value {
  font-weight: 700;
  font-size: 15px;
}
.buy {
  background-color: #a2163f;
  color: #fff;
  border: none;
  padding: 15px 35px;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.buy:hover {
  background-color: #7c1433;
}

.delivery {
  color: #a2163f;
}

.main-value {
  color: #a2163f;
}
</style>
