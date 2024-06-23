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
import offers from "../views/client/offersView.vue"
import forgetPassword from "../views/client/forgetPassword.vue"
import resetPassword from "../views/client/resetPassword.vue"
import profile from '../views/client/profileView.vue'
import privacy from "../views/client/privacyView.vue";
import terms from "../views/client/termsConditionView.vue"
import us from "../views/client/whoUsView.vue"
import contact from "../views/client/contactUS.vue"
import changePassword from "../views/client/changePassword.vue"
import orders from "../views/client/ordersView.vue"
import reservatiosn from "../views/client/reservationsView.vue"
import reservationDetails from "../views/client/rerservationDetails.vue"
import orderDetails from "../views/client/orderDetails.vue"
import notification from "../views/client/notificationView.vue"

const routes = [
  {
    path: "/notification",
    component: notification,
  },
  {
    path: "/orderDetails/:id",
    component: orderDetails,
  },
  {
    path: "/reservationDetails/:id",
    component: reservationDetails,
  },
  {
    path: "/reservations",
    component: reservatiosn,
  },
  {
    path: "/orders",
    component: orders,
  },
  {
    path: "/changePassword",
    component: changePassword,
  },
  {
    path: "/contact",
    component: contact,
  },
  {
    path: "/us",
    component: us,
  },
  {
    path: "/terms",
    component: terms,
  },
  {
    path: "/privacy",
    component: privacy,
  },
  {
    path: "/profile",
    component: profile,
  },
  {
    path: "/forgetPassword",
    component: forgetPassword,
  },
  {
    path: "/resetPassword",
    component: resetPassword,
  },
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
    name: "login",
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/completeReserve/:id",
    component: completeReserve,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/offers",
    component: offers,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem("token")) {
      next({ name: "login" });
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});
export default router;
