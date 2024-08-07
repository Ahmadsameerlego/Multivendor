import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueI18n from "vue-i18n";
import i18n from "./plugins/i18n";
// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import primevue
import PrimeVue from "primevue/config";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

import ToastService from "primevue/toastservice";

// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();

import VOtpInput from "vue3-otp-input";

import VueGoogleMaps from "@fawmi/vue-google-maps";

import vue3GoogleLogin from "vue3-google-login";

// import axios
import axios from "axios";
axios.defaults.baseURL = "https://coffeekies.trysnapus.com/api/";
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.lang = localStorage.getItem("locale");

// import pagination
import Paginate from "vuejs-paginate-next";

// importing AOS css style globally
import "aos/dist/aos.css";

// main styles
import "./assets/css/style.scss";
import './assets/css/style_ltr.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueI18n)
  .use(FontAwesomeIcon)
  .use(Paginate)
  .use(vue3GoogleLogin, {
    clientId:
      "597646459789-p7phtdta1l3lr866lj5uesp4sr5pbipe.apps.googleusercontent.com",
  })
  .component("v-otp-input", VOtpInput)
  .use(PrimeVue)
  .use(ToastService)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBzyIm5j_8mK6y2CoOkrYA5VdZma3Sulsc",
      libraries: "places",
    },
  })
  .mount("#app");
