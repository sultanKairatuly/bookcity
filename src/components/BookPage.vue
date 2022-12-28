<template>
  <div class="book">
    <div class="book_container">
      <div class="left">
        <img class="book_image" :src="require(`../${book.image}`)" />
        <div
          class="characteristics"
          :class="{
            'active-characteristics': isDropDown,
          }"
        >
          <div class="characteristic">
            <div class="characteristic__key">Серия</div>
            <div class="characteristic_value">Отдельные издания</div>
          </div>
          <div class="characteristic">
            <div class="characteristic__key">Издательство</div>
            <div class="characteristic_value">Синдбад</div>
          </div>
          <div class="characteristic">
            <div class="characteristic__key">Год издания</div>
            <div class="characteristic_value">2022</div>
          </div>
          <div class="characteristic">
            <div class="characteristic__key">Количество страниц</div>
            <div class="characteristic_value">248</div>
          </div>
          <div class="characteristic">
            <div class="characteristic__key">Переплет</div>
            <div class="characteristic_value">Мягкий</div>
          </div>
          <div class="characteristic">
            <div class="characteristic__key">Штрих-код</div>
            <div class="characteristic_value">9785001313748</div>
          </div>
          <div class="characteristic">
            <div class="characteristic__key"></div>
            <div class="characteristic_value"></div>
          </div>
          <div class="show-all-link" @click="isDropDown = !isDropDown">
            <div
              class="arrow"
              :class="{
                rotated: isDropDown,
              }"
            ></div>
            <div class="text">
              {{ isDropDown ? "Свернуть" : "Все характеристики" }}
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">{{ book.title }}</div>
        <div class="right-flex">
          <div class="right__text">
            <div class="author">{{ book.author }}</div>
            <div class="pereplet">
              Мягкий переплет<br /><b>{{ book.price }}</b>
            </div>
          </div>
          <div class="right__delivery">
            <div class="book_delivery">
              <div class="book_delivery-price">{{ book.price }}</div>
              <div class="instock">В наличии</div>
              <div class="btns">
                <div
                  class="to-card"
                  v-if="!includes(book.id, false)"
                  @click="addToBasket(book)"
                >
                  В корзину
                </div>
                <div v-else class="buy" @click="$router.push('/basket')">
                  оформить
                </div>
                <div class="to-favourite" @click="addToFavourites(book)">
                  <i
                    class="fa-solid fa-heart heart"
                    :class="{
                      added: includes(book.id),
                    }"
                  ></i>
                </div>
              </div>
              <div class="delivery-title">Доставка</div>
              <div class="delivery-time">В ТЕЧЕНИЕ 3-Х ДНЕЙ ПО АЛМАТЫ</div>
              <div class="extra-delivery__info">
                Стоимость доставки: <b>500 тг</b>
              </div>
              <div class="extra-delivery__info">
                При заказе от <b>10 000 тг</b> доставка <b>бесплатная</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    let bookId = this.$route.params.bookId;
    let categoryName = this.$route.params.catalogName;
    console.log("i am created");
    this.getAllBooks.forEach((item) => {
      if (item.category.toUpperCase() === categoryName.toUpperCase()) {
        if (item.subcategories) {
          item.subcategories.forEach((sc) => {
            sc.catalog.forEach((book) => {
              if (book.id === bookId) {
                this.book = book;
                localStorage.setItem("book", JSON.stringify(book));
                console.log(book);
              }
            });
          });
        }
        item.catalog.forEach((book) => {
          if (book.id === bookId) {
            this.book = book;
            localStorage.setItem("book", JSON.stringify(book));
          }
        });
      }
    });
  },
  data() {
    return {
      book: null || JSON.parse(localStorage.getItem("book")),
      isDropDown: false,
    };
  },
  computed: {
    ...mapGetters(["getAllBooks", "getFavourites", "getBasket"]),
  },
  methods: {
    ...mapActions(["callBasketUpdation", "callFavouritesUpdation"]),
    addToBasket(bookToAdd) {
      if (!this.includes(bookToAdd.id, false)) {
        let bookClone = { ...bookToAdd, counter: 1 };
        this.callBasketUpdation(bookClone);
      } else {
        console.log("you already added this product!");
      }
    },
    addToFavourites(bookToAdd) {
      if (!this.includes(bookToAdd.id)) {
        this.callFavouritesUpdation(bookToAdd);
      } else {
        console.log("you already added this product!");
      }
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
    includes(id, favourite = true) {
      if (favourite) {
        const book = this.getFavourites.filter((i) => i.id === id)[0];
        return book ? true : false;
      } else {
        const book = this.getBasket.filter((i) => i.id === id)[0];
        return book ? true : false;
      }
    },
  },
};
</script>

<style scoped>
.book_container {
  padding: 50px 0;
  margin: 0 auto;
  width: 1200px;
  display: flex;
}

.book_image {
  width: 270px;
  height: 371px;
  object-fit: cover;
}

.characteristics {
  height: 120px;
  position: relative;
  overflow-y: hidden;
  margin-top: 20px;
  position: relative;
  transition: 0.2s ease-in-out;
}
.characteristic {
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 15px;
  transition: 0.2s ease-in-out;
  margin-bottom: 10px;
}
.characteristic__key {
  color: #8396aa;
  width: 115px;
}
.characteristic_value {
  width: 125px;
}

.active-characteristics {
  height: 230px;
}
.show-all-link {
  position: absolute;
  bottom: -5px;
  width: 100%;
  height: 30px;
  z-index: 100;
  background-color: #fff;
  color: #ae4d62;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.arrow {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 5px;
  margin-bottom: 4px;
  margin-right: 5px;
  border-right: 2px solid #ae4d62;
  border-bottom: 2px solid #ae4d62;
  transform: rotate(45deg);
  transition: 0.2s linear;
}

.show-all-link::before {
  transform: rotate(180deg);
}
.right {
  margin-left: 20px;
  width: 100%;
}

.right-flex {
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 30px;
  font-weight: 700;
  font-family: "Noto Serif", sans-serif;
}
.author {
  font-weight: 700;
  color: #217dd8;
  margin-top: 20px;
}
.pereplet {
  margin-top: 35px;
  padding: 20px;
  border: 1px solid #d3d6d8;
  background-color: #f7f8f9;
  width: fit-content;
  line-height: 30px;
  background-image: url("../assets/icons/pereplet.png");
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 27px 39px;
  padding-left: 50px;
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

.added {
  color: #a62749;
}

.rotated {
  transform: rotate(-135deg);
  margin-top: 7px;
}

.book_delivery {
  padding: 25px;
  margin-top: 30px;
  border: 1px solid #e1e4e5;
}
.book_delivery-price {
  font-size: 35px;
  color: #ee1e45;
  font-weight: 700;
}
.instock {
  background-image: url("../assets/icons/check-red.png");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
  padding-left: 20px;
  margin: 25px 0;
}

.to-card {
  padding: 18px 50px;
}
.buy {
  border: 1px solid #a62749;
  color: #a62749;
  padding: 20px 50px;
  text-transform: uppercase;
  background-color: #fff;
  cursor: pointer;
}
.to-favourite {
  height: 57px;
  width: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.delivery-title {
  margin: 20px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Noto Serif", sans-serif;
  letter-spacing: 3px;
  background-image: url(../assets/icons/delivery-bus.png);
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 40px;
  background-size: contain;
}
.delivery-time {
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 300;
}

.delivery-time::before {
  content: "";
  margin-right: 5px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #a62749;
}
.extra-delivery__info {
  color: #83897e;
  margin-top: 20px;
}
</style>
