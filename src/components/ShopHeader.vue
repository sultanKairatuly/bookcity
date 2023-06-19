<template>
  <TransitionGroup name="fade">
    <div class="mobile-sidebar" v-if="isSidebar">
      <div class="catalogs_sidebar">
        <router-link
          v-for="catalog in catalogs"
          :active-class="'active-category-link'"
          class="catalog catalogs_sidebar_item"
          @click="handleBurgerItemClick(catalog)"
          :to="`/catalogs/${catalog[1]}`"
          :key="catalog[0]"
        >
          {{
            catalog[0].length <= 13
              ? catalog[0]
              : `${catalog[0].split("").slice(0, 13).join("")}...`
          }}
        </router-link>
      </div>
      <div class="sidebar-footer">
        <router-link
          class="header__text sidebar-footer_item"
          to="/about"
          :class="{
            passive: !isAbout,
          }"
          @click="
            (isAbout = true),
              (isPayment = false),
              (isContacts = false),
              (isSidebar = false)
          "
          >О компании</router-link
        >
        <router-link
          class="header__text sidebar-footer_item"
          to="/delivery"
          :class="{
            passive: !isPayment,
          }"
          @click="
            (isAbout = false),
              (isPayment = true),
              (isContacts = false),
              (isSidebar = false)
          "
        >
          Доставка и оплата
        </router-link>
        <router-link
          class="header__text sidebar-footer_item"
          to="/contacts"
          :class="{
            passive: !isContacts,
          }"
          @click="
            (isAbout = false),
              (isPayment = false),
              (isContacts = true),
              (isSidebar = false)
          "
        >
          Контакты
        </router-link>
      </div>
    </div>
  </TransitionGroup>
  <TransitionGroup name="hat">
    <div class="header_search-mobile" v-if="isSearchMobile">
      <input
        v-model="searchField"
        @mouseenter="inputHovered = true"
        @mouseleave="inputHovered = false"
        :class="{
          focused: inputHovered,
        }"
        type="text"
        class="search__input"
        placeholder="Введите наименование товара"
      />
      <div class="found-books" v-if="foundBooks.length">
        <div class="found-books__container">
          <div class="found-books-list">
            <div
              class="found-book"
              :key="book.id"
              @click="goToBookPage(book)"
              v-for="book in foundBooks"
            >
              <img
                class="found-book__image"
                :src="require(`../${book.image}`)"
              />
              <div class="found__books-text">
                <div class="found-book__title">{{ book.title }}</div>
                <div class="found-book__price">{{ book.price }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="search__button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </TransitionGroup>

  <div class="header">
    <div class="header-top-row__container">
      <div class="header-top-row">
        <ul class="header-item">
          <router-link
            class="header__text"
            to="/about"
            :class="{
              passive: !isAbout,
            }"
            @click="(isAbout = true), (isPayment = false), (isContacts = false)"
            >О компании</router-link
          >
          <router-link
            class="header__text"
            to="/delivery"
            :class="{
              passive: !isPayment,
            }"
            @click="(isAbout = false), (isPayment = true), (isContacts = false)"
          >
            Доставка и оплата
          </router-link>
          <router-link
            class="header__text"
            to="/contacts"
            :class="{
              passive: !isContacts,
            }"
            @click="(isAbout = false), (isPayment = false), (isContacts = true)"
          >
            Контакты
          </router-link>
        </ul>
        <div class="header-item header__text">
          Звоните, поможем найти +7 (727) 344-0-344
        </div>
        <div class="header-item header__text">Вход</div>
      </div>
    </div>
    <div class="header-top-row__container-mobile">
      <div class="burger mobile_item" @click="isSidebar = true">
        <span class="burger_item"></span>
        <span class="burger_item"></span>
        <span class="burger_item"></span>
      </div>
      <router-link to="/" class="mobile_item"
        ><img src="../assets/booklogo.svg" class="logo"
      /></router-link>
      <button class="search__button mobile_item" @click="isSearchMobile = true">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <router-link to="/basket" class="basket mobile_item">
        <div class="settings__item-image">
          <img src="../assets/icons/basket.png" class="basket__image" />
          <div class="counter">{{ getBasket.length }}</div>
        </div>
        <div class="basket__text">Корзина</div>
      </router-link>
      <router-link to="/favourite" class="favourite mobile_item">
        <div class="settings__item-image">
          <img src="../assets/icons/favourite.png" class="favourite__image" />
          <div class="counter">{{ getFavourites.length }}</div>
        </div>
        <div class="favourite__text">Избранное</div>
      </router-link>
    </div>

    <div class="header-middle-row__container">
      <div class="header-middle-row">
        <router-link to="/"
          ><img src="../assets/booklogo.svg" class="logo"
        /></router-link>
        <div class="search">
          <input
            v-model="searchField"
            @mouseenter="inputHovered = true"
            @mouseleave="inputHovered = false"
            :class="{
              focused: inputHovered,
            }"
            type="text"
            class="search__input"
            placeholder="Введите наименование товара"
          />
          <button class="search__button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <div class="found-books" v-if="foundBooks.length">
            <div class="found-books__container">
              <div class="found-books-list">
                <div
                  class="found-book"
                  :key="book.id"
                  @click="goToBookPage(book)"
                  v-for="book in foundBooks"
                >
                  <img
                    class="found-book__image"
                    :src="require(`../${book.image}`)"
                  />
                  <div class="found__books-text">
                    <div class="found-book__title">{{ book.title }}</div>
                    <div class="found-book__price">{{ book.price }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="settings">
          <router-link to="/favourite" class="favourite">
            <div class="settings__item-image">
              <img
                src="../assets/icons/favourite.png"
                class="favourite__image"
              />
              <div class="counter">{{ getFavourites.length }}</div>
            </div>
            <div class="favourite__text">Избранное</div>
          </router-link>
          <router-link to="/basket" class="basket">
            <div class="settings__item-image">
              <img src="../assets/icons/basket.png" class="basket__image" />
              <div class="counter">{{ getBasket.length }}</div>
            </div>
            <div class="basket__text">Корзина</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="header-bottom-row">
      <div class="catalogs">
        <div class="burger catalog" @click="isBurger = !isBurger">
          <i class="fa-solid fa-bars bars" v-if="!isBurger"></i>
          <i class="fa-regular fa-x x" v-if="isBurger"></i>
          <div>Каталог</div>
        </div>

        <router-link
          v-for="catalog in catalogs"
          :active-class="'active-category-link'"
          class="catalog"
          :to="`/catalogs/${catalog[1]}`"
          :key="catalog[0]"
        >
          {{
            catalog[0].length <= 13
              ? catalog[0]
              : `${catalog[0].split("").slice(0, 13).join("")}...`
          }}
        </router-link>
      </div>
    </div>
    <div class="catalog-menu" v-if="isBurger">
      <div
        class="catalog-menu__item"
        v-for="item in catalogs"
        @click="pushCatalog(`/catalogs/${item[1]}`)"
        :key="item"
      >
        <div>{{ item[0] }}</div>
        <i class="fa-solid fa-angle-right arrow-left"></i>
      </div>
    </div>
  </div>
  <div
    class="header-fixed"
    :class="{
      'header-fixed-active': headerFixed,
    }"
  >
    <div class="header-fixed-content">
      <div class="fixed-burger burger catalog">
        <i
          class="fa-solid fa-bars bars"
          v-if="!isBurger"
          @click="isBurger = true"
        ></i>
        <i
          class="fa-regular fa-x x"
          v-if="isBurger"
          @click="isBurger = false"
        ></i>
        <div>Каталог</div>
      </div>
      <div class="catalog-menu fixed-catalog-menu" v-if="isBurger">
        <div
          class="catalog-menu__item"
          v-for="item in catalogs"
          @click="pushCatalog(`/catalogs/${item[1]}`)"
          :key="item"
        >
          <div>{{ item[0] }}</div>
          <i class="fa-solid fa-angle-right arrow-left"></i>
        </div>
      </div>
      <div class="search">
        <input
          v-model="searchField"
          @mouseenter="inputHovered = true"
          @mouseleave="inputHovered = false"
          :class="{
            focused: inputHovered,
          }"
          type="text"
          class="search__input"
          placeholder="Введите наименование товара"
        />
        <button class="search__button">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    document.addEventListener("click", (e) => {
      if (
        e.target.closest(".burger") ||
        (e.target.closest(".mobile-sidebar") &&
          !e.target.closest(".catalog") &&
          !e.target.closest(".sidebar-footer_item"))
      ) {
        this.isSidebar = true;
      } else {
        this.isSidebar = false;
      }

      if (
        e.target.closest(".search__button") ||
        e.target.closest(".header_search-mobile")
      ) {
        this.isSearchMobile = true;
      } else {
        this.isSearchMobile = false;
      }
    });
    if (window.location.pathname === "/about") {
      this.isAbout = true;
    } else if (window.location.pathname === "/contacts") {
      this.isContacts = true;
    } else if (window.location.pathname === "/delivery") {
      this.isPayment = true;
    }

    document.addEventListener("scroll", () => {
      let offset = window.scrollY;
      if (offset >= 115) {
        this.headerFixed = true;
      } else {
        this.headerFixed = false;
      }
    });
  },
  data() {
    return {
      isSidebar: false,
      headerFixed: false,
      searchField: "",
      inputHovered: false,
      activeLink: "",
      isAbout: false,
      isContacts: false,
      isPayment: false,
      favouriteHovered: false,
      catalogs: [
        ["Новинки", "new"],
        ["Художественная литература", "Fiction"],
        ["Деловая литература", "business-literature"],
        ["Детям и родителям", "kids"],
        ["Психология. Эзотерика. Философия", "psychology-esoterics-philosophy"],
        ["Мой Казахстан", "my-kazakhstan"],
      ],
      isSearchMobile: false,
      isBurger: false,
    };
  },
  methods: {
    pushCatalog(route) {
      this.$router.push(route);
      this.isBurger = false;
    },

    goToBookPage(book) {
      let bookID = book.id;
      let catalogName = this.$route.params.catalogName;

      this.$router.push(`/${catalogName}/${bookID}`);
    },
    handleBurgerItemClick(catalog) {
      console.log(catalog[1]);
      this.isSidebar = false;
    },
  },
  computed: {
    ...mapGetters(["getAllBooks", "getBasket", "getFavourites"]),
    foundBooks() {
      let foundBooks = [];

      function removeDuplicatesById(arr) {
        const uniqueElements = {}; // or new Map()

        for (let i = 0; i < arr.length; i++) {
          const id = arr[i].title;
          if (!uniqueElements[id]) {
            uniqueElements[id] = arr[i];
          }
        }

        return Object.values(uniqueElements); // or Array.from(uniqueElements.values())
      }
      if (this.searchField.length >= 1) {
        this.getAllBooks.forEach((item) => {
          if (item.subcategories) {
            item.subcategories.forEach((item) => {
              item.catalog.forEach((book) => {
                if (
                  book.title
                    .toUpperCase()
                    .includes(this.searchField.toUpperCase())
                ) {
                  foundBooks.push(book);
                }
              });
            });
          }
          item.catalog.forEach((book) => {
            if (
              book.title.toUpperCase().includes(this.searchField.toUpperCase())
            ) {
              foundBooks.push(book);
            }
          });
        });
        return removeDuplicatesById(foundBooks);
      } else {
        return [];
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin: 0 auto;
  width: 100%;
}
.header-fixed {
  top: 0px;
  height: 62px;
  background-color: #fff;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 4px 6px rgb(0 0 0 / 40%);
  z-index: 999;
  opacity: 0;
  position: fixed;
  transform: translateY(-50px);
  visibility: hidden;
  transition: 0.2s ease-in-out;
}

.header-fixed-content {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.catalog-menu {
  position: absolute;
  z-index: 10;
  transform: translateX(-9px);
}

.header_search-mobile {
  display: none;
}

.header-top-row__container-mobile {
  display: none;
}
.fa-magnifying-glass {
  font-size: 20px;
}

.favourite {
  position: relative;
  cursor: pointer;
}

.header-middle-row {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-top-row__container {
  background-color: #e6e6e6;
}
.header-top-row {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-fixed-active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.header-item {
  display: flex;
}
.header__text {
  font-size: 14px;
  padding: 10px 15px;
  color: #000;
  text-decoration: none;
  cursor: default;
}

.passive {
  cursor: pointer;
  transition: 0.3s ease;
}

.passive:hover {
  background-color: #171717;
  color: #fff;
}
.header-middle-row {
  padding: 25px 0;
}
.logo {
  width: 169px;
  height: 41px;
}

.favourite {
  text-decoration: none;
  text-align: center;
  color: black;
}
.search {
  display: flex;
  align-items: center;
  position: relative;
}
.search__input {
  padding: 9px 15px;
  width: 495px;
  height: 44px;
  outline: none;
  border: 1px solid #cfd3d5;
  transition: 0.3s ease-in-out;
}
.search__button {
  border: none;
  background-color: #e6e6e6;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.search__button:hover {
  background-color: #181818;
  color: rgb(204, 204, 204);
}

.search__button img {
  height: 22px;
  width: 22px;
  object-fit: cover;
}

.focused {
  border: 1px solid #000;
}
.settings {
  display: flex;
  align-items: center;
  column-gap: 30px;
}
.favourite,
.basket {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  text-decoration: none;
  transition: 0.2s ease-in-out;
}
.favourite__image {
  width: 26px;
  height: 23px;
  object-fit: cover;
}
.favourite__text,
.basket__text {
  font-size: 14px;
}

.favourite__text:hover,
.basket__text:hover {
  color: #a62749;
}

.burger {
  background-color: #e6e6e6;
  display: flex;
  column-gap: 10px;
  cursor: pointer;
  align-items: center;
}

.header-bottom-row {
  border-bottom: 1px solid #cfd3d5;
  border-top: 1px solid #cfd3d5;
}
.catalogs {
  column-gap: 15px;
  align-items: center;
  display: flex;
  margin: 0 auto;
}
.catalog {
  padding: 15px;
  text-decoration: none;
  color: #000;
  font-size: 15px;
  height: 50px;
  text-transform: uppercase;
}

.catalog:hover {
  color: #a62749;
}

.active-category-link {
  background-color: #a62749;
  color: #fff;
  cursor: default;
  transition: 0.1s ease-in-out;
}

.active-category-link:hover {
  color: #fff;
  background-color: #751c34;
}

.bars {
  font-size: 20px;
  width: 18px;
}
.x {
  font-size: 20px;
  width: 18px;
}

.catalog-menu {
}

.catalog-menu__item {
  display: flex;
  justify-content: space-between;
  width: 310px;
  padding: 15px 20px;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.catalog-menu__item:hover {
  background-color: rgb(0, 111, 238);
  color: #fff;
}

.catalog-menu__item:not(:last-child) {
  border-bottom: 1px solid #f0f1f2;
}

.arrow-left {
  font-size: 14px;
}

.fixed-catalog-menu {
  position: absolute;
  left: 0;
  top: 62px;
}

.fixed-burger {
  width: 120px;
  height: 62px;
}

.active-category-link {
  color: #fff;
}

.favouriteHovered {
  border-bottom: 3px solid #000;
}

.counter {
  position: absolute;
  width: 15px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  height: 15px;
  border-radius: 50%;
  background-color: #a62749;
  color: #fff;
}

.settings__item-image {
  position: relative;
}

.found-books-list {
  padding: 30px 35px;
  max-height: 570px;
  overflow: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  background-color: #fff;
  z-index: 500;
}
.found-book {
  height: 75px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  border-top: 1px solid #cfd3d5;
}
.found-book__image {
  width: 40px;
  height: 55px;
}
.found-book__title {
  font-weight: 700;
  font-size: 14px;
}
.found-book__price {
  font-weight: 700;
  margin-top: 5px;
  font-size: 14px;
}

::-webkit-scrollbar {
  width: 2px;
  height: 12px;
  background-color: #dbdee0;
}

::-webkit-scrollbar-track {
}

::-webkit-scrollbar-thumb {
  background: #c8798f;
}

@media (max-width: 1440px) {
  .header {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .header-fixed-content {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .catalog-menu {
    position: absolute;
    z-index: 10;
    transform: translateX(-9px);
  }
  .fa-magnifying-glass {
    font-size: 20px;
  }

  .favourite {
    position: relative;
    cursor: pointer;
  }

  .header-middle-row {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-top-row__container {
    background-color: #e6e6e6;
  }
  .header-top-row {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-fixed-active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .header-item {
    display: flex;
  }
  .header__text {
    font-size: 14px;
    padding: 10px 15px;
    color: #000;
    text-decoration: none;
    cursor: default;
  }

  .passive {
    cursor: pointer;
    transition: 0.3s ease;
  }

  .passive:hover {
    background-color: #171717;
    color: #fff;
  }
  .header-middle-row {
    padding: 25px 0;
  }
  .logo {
    width: 169px;
    height: 41px;
  }

  .header-top-row__container-mobile {
    display: none;
    width: 100%;
  }

  .favourite {
    text-decoration: none;
    text-align: center;
    color: black;
  }
  .search {
    display: flex;
    align-items: center;
    position: relative;
  }
  .search__input {
    padding: 9px 15px;
    width: 495px;
    height: 44px;
    outline: none;
    border: 1px solid #cfd3d5;
    transition: 0.3s ease-in-out;
  }
  .search__button {
    border: none;
    background-color: #e6e6e6;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .search__button:hover {
    background-color: #181818;
    color: rgb(204, 204, 204);
  }

  .search__button img {
    height: 22px;
    width: 22px;
    object-fit: cover;
  }

  .focused {
    border: 1px solid #000;
  }
  .settings {
    display: flex;
    align-items: center;
    column-gap: 30px;
  }
  .favourite,
  .basket {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }
  .favourite__image {
    width: 26px;
    height: 23px;
    object-fit: cover;
  }
  .favourite__text,
  .basket__text {
    font-size: 14px;
  }

  .favourite__text:hover,
  .basket__text:hover {
    color: #a62749;
  }

  .burger {
    background-color: #e6e6e6;
    display: flex;
    column-gap: 10px;
    cursor: pointer;
    align-items: center;
  }

  .header-bottom-row {
    border-bottom: 1px solid #cfd3d5;
    border-top: 1px solid #cfd3d5;
  }
  .catalogs {
    column-gap: 15px;
    align-items: center;
    display: flex;
    margin: 0 auto;
  }
  .catalog {
    padding: 15px;
    text-decoration: none;
    color: #000;
    font-size: 15px;
    height: 50px;
    text-transform: uppercase;
  }

  .catalog:hover {
    color: #a62749;
  }

  .active-category-link {
    background-color: #a62749;
    color: #fff;
    cursor: default;
    transition: 0.1s ease-in-out;
  }

  .active-category-link:hover {
    color: #fff;
    background-color: #751c34;
  }

  .bars {
    font-size: 20px;
    width: 18px;
  }
  .x {
    font-size: 20px;
    width: 18px;
  }

  .catalog-menu__item {
    display: flex;
    justify-content: space-between;
    width: 310px;
    padding: 15px 20px;
    background-color: #fff;
    font-size: 14px;
    cursor: pointer;
  }

  .catalog-menu__item:hover {
    background-color: rgb(0, 111, 238);
    color: #fff;
  }

  .catalog-menu__item:not(:last-child) {
    border-bottom: 1px solid #f0f1f2;
  }

  .arrow-left {
    font-size: 14px;
  }

  .fixed-catalog-menu {
    position: absolute;
    left: 0;
    top: 62px;
  }

  .fixed-burger {
    width: 120px;
    height: 62px;
  }

  .active-category-link {
    color: #fff;
  }

  .favouriteHovered {
    border-bottom: 3px solid #000;
  }

  .counter {
    position: absolute;
    width: 15px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    height: 15px;
    border-radius: 50%;
    background-color: #a62749;
    color: #fff;
  }

  .settings__item-image {
    position: relative;
  }

  .found-books-list {
    padding: 30px 35px;
    max-height: 570px;
    overflow: scroll;
    overflow-x: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    background-color: #fff;
    z-index: 500;
  }
  .found-book {
    height: 75px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    border-top: 1px solid #cfd3d5;
  }
  .found-book__image {
    width: 40px;
    height: 55px;
  }

  .header_search-mobile {
    background-color: #fff;
    height: 50px;
    position: fixed;
    z-index: 2001;
    padding: 10px;
    display: flex;
    width: 100%;
    top: 0;
    left: 0;
    justify-content: center;
  }

  .header_search-mobile .search__input {
    width: 80%;
    padding: 14px 15px;
  }
  .found-book__title {
    font-weight: 700;
    font-size: 14px;
  }
  .found-book__price {
    font-weight: 700;
    margin-top: 5px;
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 2px;
    height: 12px;
    background-color: #dbdee0;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background: #c8798f;
  }
}

@media (max-width: 1024px) {
  .fa-magnifying-glass {
    font-size: 18px;
  }
  .header__text {
    font-size: 12px;
    padding: 5px 10px;
  }

  .header-middle-row {
    padding: 20px 0;
    justify-content: center;
    column-gap: 15px;
  }
  .logo {
    width: 150px;
    height: 35px;
  }

  .search__input {
    padding: 4px 10px;
    width: 450px;
    height: 35px;
  }
  .search__button {
    border: none;
    background-color: #e6e6e6;
    width: 35px;
    height: 35px;
  }

  .search__button img {
    height: 18px;
    width: 18px;
  }

  .settings {
    column-gap: 20px;
  }
  .favourite__image {
    width: 26px;
    height: 23px;
    object-fit: cover;
  }
  .favourite__text,
  .basket__text {
    font-size: 12px;
  }

  .burger {
    column-gap: 5px;
  }

  .catalogs {
    justify-content: center;
    column-gap: 10px;
  }
  .catalog {
    padding: 10px;
    font-size: 12px;
    height: 40px;
  }

  .bars {
    font-size: 18px;
    width: 15px;
  }
  .x {
    font-size: 18px;
    width: 15px;
  }

  .catalog-menu__item {
    width: 250px;
    padding: 10px 15px;
    font-size: 12px;
  }

  .arrow-left {
    font-size: 12px;
  }

  .fixed-burger {
    width: 100px;
    height: 40px;
  }

  .counter {
    position: absolute;
    width: 13px;
    font-size: 8px;
  }

  .found-books-list {
    padding: 25px 30px;
  }
  .found-book {
    height: 65px;
    column-gap: 5px;
  }
  .found-book__image {
    width: 35px;
    height: 50px;
  }
  .found-book__title {
    font-size: 12px;
  }
  .found-book__price {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .fa-magnifying-glass {
    font-size: 16px;
  }
  .header__text {
    font-size: 13px;
    padding: 15px 15px;
  }

  .header-middle-row {
    padding: 15px 0;
    justify-content: center;
    column-gap: 10px;
  }
  .logo {
    width: 140px;
    height: 30px;
  }

  .search__input {
    padding: 4px 5px;
    width: 420px;
    height: 25px;
  }
  .search__button {
    width: 30px;
    height: 30px;
  }

  .search__button img {
    height: 15px;
    width: 15px;
  }

  .header-fixed-content {
    justify-content: center;
    column-gap: 100px;
  }

  .settings {
    column-gap: 10px;
  }
  .favourite__image {
    width: 26px;
    height: 23px;
    object-fit: cover;
  }
  .favourite__text,
  .basket__text {
    font-size: 10px;
  }

  .burger {
    column-gap: 5px;
  }

  .catalogs {
    justify-content: center;
    column-gap: 10px;
  }
  .catalog {
    padding: 5px;
    font-size: 10px;
    height: 35px;
  }

  .bars {
    font-size: 16px;
    width: 15px;
  }
  .x {
    font-size: 16px;
    width: 15px;
  }

  .catalog-menu__item {
    width: 250px;
    padding: 5px 10px;
    font-size: 10px;
  }

  .arrow-left {
    font-size: 10px;
  }

  .fixed-burger {
    width: 100px;
    height: 40px;
  }

  .counter {
    position: absolute;
    width: 13px;
    font-size: 8px;
  }

  .found-books-list {
    padding: 20px 25px;
  }
  .found-book {
    height: 65px;
    column-gap: 5px;
  }
  .found-book__image {
    width: 35px;
    height: 50px;
  }
  .found-book__title {
    font-size: 10px;
  }
  .found-book__price {
    font-size: 10px;
  }
}

@media (max-width: 670px) {
  .burger {
    width: 40px;
    height: 40px;
    flex-direction: column;
    row-gap: 5px;
    background-color: rgb(214, 214, 214);
    padding: 10px;
  }
  .burger_item {
    height: 2px;
    width: 100%;
    display: block;
    background-color: #000;
  }

  .header-top-row {
    display: none;
  }
  .fa-magnifying-glass {
    font-size: 16px;
  }
  .header__text {
    font-size: 13px;
    padding: 15px 15px;
  }

  .header-middle-row {
    padding: 15px 0;
    justify-content: center;
    column-gap: 10px;
  }
  .logo {
    width: 140px;
    height: 30px;
  }

  .burger {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-top-row__container {
    background-color: #fff;
  }

  .header-top-row__container-mobile {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background-color: #fff;
    z-index: 2000;
  }

  .logo {
    width: 100%;
  }

  .search__input {
    padding: 4px 5px;
    width: 420px;
    height: 25px;
  }
  .search__button {
    width: 30px;
    height: 30px;
  }

  .search__button img {
    height: 15px;
    width: 15px;
  }

  .header-fixed-content {
    justify-content: center;
    column-gap: 100px;
  }

  .settings {
    column-gap: 10px;
  }
  .favourite__image {
    width: 26px;
    height: 23px;
    object-fit: cover;
  }
  .favourite__text,
  .basket__text {
    font-size: 10px;
  }

  .mobile_item {
    width: 25%;
    height: 50px;
    justify-content: center;
    align-items: center;
  }

  .mobile_item:nth-child(2) {
    width: 150%;
  }

  .mobile_item:nth-child(2) img {
    width: 100%;
  }
  .burger {
    column-gap: 5px;
  }

  .catalogs {
    justify-content: center;
    column-gap: 10px;
  }
  .header-top-row__container-mobile {
    border-bottom: 1px solid #c5c4c4;
  }
  .catalog {
    padding: 5px;
    font-size: 10px;
    height: 35px;
  }

  .bars {
    font-size: 16px;
    width: 15px;
  }

  .x {
    font-size: 16px;
    width: 15px;
  }

  .header-middle-row__container,
  .header-bottom-row {
    display: none;
  }

  .mobile-sidebar {
    background-color: #fff;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 75%;
    z-index: 1000;
    height: 100vh;
  }

  .header-fixed {
    display: none;
  }
  .catalog-menu__item {
    width: 250px;
    padding: 5px 10px;
    font-size: 10px;
  }

  .catalogs_sidebar_item {
    margin-top: 10px;
    font-size: 18px;
  }

  .arrow-left {
    font-size: 10px;
  }

  .fixed-burger {
    width: 100px;
    height: 40px;
  }

  .counter {
    position: absolute;
    width: 13px;
    font-size: 8px;
  }

  .found-books-list {
    padding: 20px 25px;
  }
  .found-book {
    height: 65px;
    column-gap: 5px;
  }
  .found-book__image {
    width: 35px;
    height: 50px;
  }
  .found-book__title {
    font-size: 10px;
  }
  .found-book__price {
    font-size: 10px;
  }

  .sidebar-footer {
    padding: 20px 0;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    height: 50%;
    padding: 0 10px;
  }
  .sidebar-footer_item {
    font-size: 18px;
    color: #fff;
  }

  .catalogs_sidebar {
    padding: 20px 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 50%;
    row-gap: 10px;
    padding: 0 10px;
  }

  .fa-magnifying-glass {
    font-size: 20px;
    padding: 0 13px;
  }
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active {
  transition: all 0.2s ease-out;
}

.fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}

.hat-enter-active {
  transition: all 0.2s ease-out;
}

.hat-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.hat-enter-from,
.hat-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>
