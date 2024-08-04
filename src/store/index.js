import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: 0, // initial value of cart,
    country: {
      id: 12,
      name: "السعودية",
    },
  },
  getters: {},
  mutations: {
    increament(state) {
      state.cart += 1;
    },
    decreament(state) {
      state.cart -= 1;
    },
    setCountry(state, payload) {
      state.country.id = payload.id;
      state.country.name = payload.name;
    },
  },
  actions: {
    changeCountry({ commit }, country) {
      commit("setCountry", country);
    },
  },
  modules: {},
});
