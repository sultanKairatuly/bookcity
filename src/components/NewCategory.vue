<template>
  <div class="category-list">
    <h2 class="category__title">Новинки</h2>
    <div class="filter">
      <div class="filter__title">Сортировать по:</div>
      <div class="select">
        <div class="select-content" @click="isDropdown = !isDropdown">
          <div class="select-value">{{ selectValue }}</div>
          <button class="select-btn">
            <div
              class="select-btn__icon"
              :class="{
                reversed: isDropdown,
              }"
            ></div>
          </button>
        </div>
        <ul class="select-list" v-if="isDropdown">
          <li
            :key="option"
            class="select-list__item"
            v-for="option in dropdownOptions"
            @click="changeSelectValue(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
    <div class="loader" v-if="!iterableBooks.length">
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <transition-group name="bookList" tag="div">
      <div class="books-list" v-if="iterableBooks.length >= 1">
        <div
          class="book"
          @mouseenter="hoveredProduct = book"
          @mouseleave="hoveredProduct = {}"
          v-for="book in iterableBooks"
          :key="book.title"
        >
          <div class="book-link">
            <img :src="require(`../${book.image}`)" class="book__image" />
            <div class="book__status">
              <div class="status__new">новинка</div>
              <div class="discount">-25%</div>
            </div>
          </div>
          <div class="book-info">
            <div class="book__title">{{ title(book.title) }}</div>
            <div class="book__author">{{ author(book.author) }}</div>
            <div class="book__price">{{ book.price }}</div>
          </div>
          <div
            class="book-wrapper"
            :class="{
              active: book.id === hoveredProduct?.id,
            }"
          >
            <div class="book-link">
              <img :src="require(`../${book.image}`)" class="book__image" />
              <div class="book__status">
                <div class="status__new">новинка</div>
                <div class="discount">-25%</div>
              </div>
            </div>
            <div class="book-info">
              <div class="book__title">{{ title(book.title) }}</div>
              <div class="book__author">{{ author(book.author) }}</div>
              <div class="book__price">{{ book.price }}</div>
            </div>
            <div class="btns">
              <div class="to-card">В корзину</div>
              <div class="to-favourite">
                <i class="fa-solid fa-heart heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      hoveredProduct: {},
      selectValue: "По наименованию",
      isDropdown: false,
      dropdownOptions: ["Убывание цены", "По наименованию", "Возрастание цены"],
      iterableBooks: [],
    };
  },
  created() {
    this.iterableBooks = [...this.books];
  },
  computed: {
    ...mapGetters(["getNewBooks"]),
    books() {
      return this.getNewBooks.catalog;
    },
    priceDownBooks() {
      let booksClone = [...this.books];
      return this.sort(booksClone, true);
    },
    priceUpBooks() {
      let booksClone = [...this.books];
      return this.sort(booksClone);
    },
    filterNameBooks() {
      let booksClone = [...this.books];
      return booksClone.sort((a, b) => a.name < b.name);
    },
  },
  methods: {
    changeSelectValue(option) {
      this.selectValue = option;
      this.isDropdown = false;
      this.iterableBooks = [];
      setTimeout(() => {
        switch (option) {
          case "Убывание цены":
            this.iterableBooks = this.priceDownBooks;
            break;
          case "По наименованию":
            this.iterableBooks = this.filterNameBooks;
            break;
          case "Возрастание цены":
            this.iterableBooks = this.priceUpBooks;
            break;
        }
      }, 300);
    },
    sort(arr, down = false) {
      let intedArray = arr.map((item) => ({
        ...item,
        price: Number(item.price.toString().replace(/[\sтг]/g, "")),
      }));

      if (down) {
        let sortedArray = intedArray.sort((a, b) => b.price - a.price);
        return this.formatPrice(sortedArray);
      } else {
        let sortedArray = intedArray.sort((a, b) => a.price - b.price);
        return this.formatPrice(sortedArray);
      }
    },
    formatPrice(arr) {
      let formattedArray = arr.map((item) => {
        if (item.price.toString().length === 4) {
          let formatingPrice =
            item.price.toString().split("")[0] +
            " " +
            item.price.toString().split("").slice(1).join("") +
            " " +
            "тг";

          return {
            ...item,
            price: formatingPrice,
          };
        } else if (item.price.toString().length === 5) {
          let formatingPrice =
            item.price.toString().split("").slice(0, 2).join("") +
            " " +
            item.price.toString().split("").slice(2).join("") +
            " " +
            "тг";

          return {
            ...item,
            price: formatingPrice,
          };
        }
      });

      return formattedArray;
    },
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
  },
};
</script>

<style scoped>
.category__title {
  font-size: 28px;
  font-family: "Noto Serif", sans-serif;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin: 35px 0;
}
.category-list {
  width: 1200px;
  margin: 0 auto;
}

.btns {
  align-items: center;
  display: flex;
  margin-top: 10px;
}

.to-card {
  background-color: #a62749;
  color: #ffffff;
  text-transform: uppercase;
  padding: 12px 55px;
  text-align: center;
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.2s linear;
}

.to-card:hover {
  background-color: #751f36;
}

.to-favourite {
  cursor: pointer;
  height: 41px;
  font-size: 25px;
  padding: 5px 10px;
  border: 1px solid #cfd3d5;
  width: fit-content;
}

.heart {
  transition: 0.2s ease-in-out;
  color: #cfd3d5;
}

.heart:hover {
  color: #a62749;
}

.books-list {
  border: 1px solid #cfd3d5;
  border-top: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
}

.filter {
  border: 1px solid #cfd3d5;
  border-bottom: none;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background-color: #f7f8f9;
}

.select {
  padding: 4px 10px;
  outline: none;
}

.filter__title {
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

.book {
  justify-content: center;
  width: 239px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  height: 390px;
  border-top: 1px solid #cfd3d5;
  position: relative;
  border-right: 1px solid #cfd3d5;
}

.book__title {
  font-weight: 700;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  line-height: 18px;
}

.book__author {
  color: #747474;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
  text-transform: capitalize;
}

.book__price {
  color: #ba2749;
  text-align: center;
  margin-top: 10px;
  font-weight: 700;
}

.book:nth-child(5) {
  border-right: none;
}

.book:nth-child(10) {
  border-right: none;
}

.book:nth-child(15) {
  border-right: none;
}

.book:nth-child(20) {
  border-right: none;
}
.book:nth-child(25) {
  border-right: none;
}
.book:nth-child(30) {
  border-right: none;
}
.book:nth-child(35) {
  border-right: none;
}

.book:nth-child(40) {
  border-right: none;
}

.book-wrapper {
  position: absolute;
  width: 290px;
  background-color: #fff;
  left: -26px;
  top: -18px;
  display: none;
  height: 450px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 500;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);
  padding: 20px;
  cursor: pointer;
  z-index: 700;
}
.active {
  display: flex;
}

.select-value {
  padding: 4px 9px;
  font-weight: 700;
  font-size: 14px;
  color: #747474;
  border-right: 1px solid #cfd3d5;
  background-color: #fff;
}
.select-btn {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 1px 6px;
  cursor: pointer;
  border: none;
  background-color: #f7f7f7;
}
.select-btn__icon {
  width: 9px;
  height: 9px;
  border: 2px solid #1f1f1f;
  border-left: none;
  border-top: none;
  transform: rotate(45deg);
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.reversed {
  transform: rotate(-135deg);
}

.select-content {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #cfd3d5;
}

.select-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  font-size: 15px;
  color: #747474;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  width: 170px;
  z-index: 600;
}

.select-list__item {
  transition: 0.3s ease-in-out;
  padding: 10px;
  cursor: pointer;
}

.select-list__item:hover {
  background-color: #eeeeee;
}

.bookList-enter-active,
.bookList-leave-active {
  transition: all 0.5s ease;
}

.bookList-enter-from,
.bookList-leave-to {
  opacity: 0.2;
  transform: translateX(0px);
}

.loader {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cfd3d5;
}

.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: #a62749;
}

.status__new {
  padding: 5px 10px;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  background-color: #02c9cd;
}
.discount {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ee1e45;
  color: #fff;
  font-size: 14px;
}

.book__status {
  position: absolute;
  top: -35px;
  left: -35px;
  display: flex;
  align-items: center;
}

.book-link {
  position: relative;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
