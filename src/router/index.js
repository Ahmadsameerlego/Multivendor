import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/client/HomeView.vue";
import markets from "../views/client/marketsView.vue";
import market from "../views/client/singleMarket.vue";
import menu from "../views/client/menueView.vue";
import reserve from "../views/client/reserveView.vue";
import cart from "../views/client/cartView.vue";
import complete from "../views/client/completeOrder.vue";
import login from "../views/client/loginView.vue";
import register from "../views/client/registerView.vue";
import completeReserve from "../views/client/completeReserve.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/markets",
    name: "markets",
    component: markets,
  },
  {
    path: "/market/:id",
    name: "market",
    component: market,
  },
  {
    path: "/menu/:id",
    name: "menu",
    component: menu,
  },
  {
    path: "/reserve",
    name: "reserve",
    component: reserve,
  },
  {
    path: "/cart",
    component: cart,
  },
  {
    path: "/complete",
    component: complete,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/completeReserve",
    component: completeReserve,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
