import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PaymentAndDelivery from "../pages/PaymentAndDelivery";
import Contacts from "../pages/Contacts";
import BookCategory from "../components/BookCategory";
import FavouritePage from "../components/Favourite";
import BookSubcategory from "../components/BookSubcategory";
import Basket from "../components/Basket";
import BookPage from "../components/BookPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/delivery",
    component: PaymentAndDelivery,
  },
  {
    path: "/contacts",
    component: Contacts,
  },
  {
    path: "/catalogs/:catalogName",
    component: BookCategory,
  },
  {
    path: "/catalogs/:catalogName/:subcatalogName/:page",
    component: BookSubcategory,
  },
  {
    path: "/favourite",
    component: FavouritePage,
  },
  {
    path: "/basket",
    component: Basket,
  },
  {
    path: "/:catalogName/:bookId",
    component: BookPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
