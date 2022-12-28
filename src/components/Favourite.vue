<template>
  <div class="favourite">
    <div class="favourite_content">
      <div class="title">ИЗБРАННОЕ</div>
      <div class="none-products" v-if="!getFavourites.length">
        <div class="none-products__text">
          <div class="none-products__text-item">
            Вы еще не добавили ни одного товара в “Избранное”.
          </div>
          <div class="none-products__text-item">
            Начать пользоваться закладками очень легко!
          </div>
          <div class="none-products__text-item">
            Вы можете это сделать,
            <img src="../assets/icons/icon-like.svg" class="like" alt="like" />
            нажав на странице товара или в каталоге
          </div>
        </div>
        <div class="instruction">
          <div class="instruction__item">
            <div class="instruction__item-title">Страница товара</div>
            <img
              src="../assets/favourite/product-page.jpg"
              class="instruction__item-image"
            />
          </div>
          <div class="instruction__item">
            <div class="instruction__item-title">Каталог</div>
            <img
              src="../assets/favourite/product-page.jpg"
              class="instruction__item-image"
            />
          </div>
        </div>
        <div class="none-products__text">
          <div class="none-products__text-item extra">
            В дальнейшем Вам легко будет найти заинтересовавший Вас товар и
            <br />
            вернуться к нему, воспользовавшись Личным кабинетом.
          </div>
        </div>
        <div class="big-instruction">
          <div class="big-instruction__title">Личный кабинет</div>
          <img
            class="big-instruction__image"
            src="../assets/favourite/profile.jpg"
          />
        </div>
      </div>
      <div class="books-list" v-else>
        <div
          class="book"
          @mouseenter="hoveredProduct = book"
          @mouseleave="hoveredProduct = {}"
          v-for="book in getFavourites"
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
              <div
                class="delete"
                @mouseenter="hoveredDelete = true"
                @mouseleave="hoveredDelete = false"
                :class="{
                  hoveredDelete: hoveredDelete,
                }"
                @click="deleteFromFavourites(book)"
              >
                <i class="fa-solid fa-x delete__icon"></i>
                <div class="delete__text">Удалить</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FavouritePage",
  computed: {
    ...mapGetters(["getFavourites"]),
  },
  data() {
    return {
      hoveredProduct: {},
      hoveredDelete: false,
    };
  },
  methods: {
    ...mapActions(["callFavouritesFiltration"]),
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
    deleteFromFavourites(bookToDelete) {
      this.callFavouritesFiltration(bookToDelete);
    },
  },
};
</script>

<style scoped>
.like {
  width: 14px;
  height: 11px;
}

.btns {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
}

.delete {
  display: flex;
  align-items: center;
  margin-top: 15px;
  column-gap: 5px;
  color: #a62749;
}

.hoveredDelete {
  color: #000;
}

.delete__icon {
  font-size: 11px;
}
.delete__text {
  font-size: 14px;
}

.status__new {
  padding: 5px 10px;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  background-color: #02c9cd;
}
.books-list {
  border-top: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 50px;
  width: 900px;
}

.favourite_content {
  padding-top: 80px;
  margin: 0 auto;
  width: 896px;
}

.book {
  justify-content: center;
  width: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid #cfd3d5;
  padding: 0 15px;
  height: 390px;
  position: relative;
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

/* .book:nth-child(4) {
  border-right: none;
}

.book:nth-child(8) {
  border-right: none;
}

.book:nth-child(12) {
  border-right: none;
}

.book:nth-child(16) {
  border-right: none;
}
.book:nth-child(20) {
  border-right: none;
}
.book:nth-child(24) {
  border-right: none;
}
.book:nth-child(28) {
  border-right: none;
}

.book:nth-child(32) {
  border-right: none;
} */

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
.active {
  display: flex;
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

.added {
  color: #a62749;
}
.title {
  padding: 20px 30px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-family: "Noto Serif", sans-serif;
  background-color: #f7f8f9;
  border: 1px solid #cfd3d5;
}

.none-products__text {
  margin-top: 35px;
  margin-bottom: 20px;
  line-height: 35px;
}
.none-products__text-item {
  font-size: 13px;
}

.instruction {
  align-items: center;
  justify-content: space-between;
  display: flex;
}

.instruction__item-title {
  text-align: center;
  padding: 20px;
  font-size: 13px;
}
.extra {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
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

.big-instruction__title {
  text-align: center;
  padding: 20px;
  font-size: 13px;
}
.big-instruction__image {
  margin-bottom: 30px;
}
</style>
