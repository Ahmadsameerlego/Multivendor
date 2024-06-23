<template>
  <div class="footer">
    <div class="container">
      <div class="container p-0 px-md-3">
        <div class="home-footer d-flex flex-wrap">
          
          <div class="section poppular-links border-bottom w-100 py-5 pb-md-0">
            <div class="fs-13 row">
              <div class="col-sm-4 p-0">
                <div class="accordion accordion-flush" id="restaurantAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="restaurantHeading">
                      <button
                        class="accordion-button f-14 mb-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseRestaurants"
                        aria-expanded="true"
                        aria-controls="collapseRestaurants"
                      >
                        {{  $t('home.stores')  }}
                      </button>
                    </h2>
                    <div
                      id="collapseRestaurants"
                      class="accordion-collapse collapse show"
                      aria-labelledby="restaurantHeading"
                      data-bs-parent="#restaurantAccordion"
                    >
                      <div
                        class="accordion-body d-flex flex-column justify-content-start align-items-start"
                      >
                        <router-link :to="'/market/'+store.id" v-for="store in stores" :key="store.id"  class="btn btn-link pl-5 pt-3">
                          {{ store.name }}
                        </router-link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 p-0">
                <div class="accordion accordion-flush" id="cuisineAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="cuisineHeading">
                      <button
                        class="accordion-button f-14 mb-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCuisines"
                        aria-expanded="true"
                        aria-controls="collapseCuisines"
                      >
                        {{ $t('home.famous') }}
                      </button>
                    </h2>
                    <div
                      id="collapseCuisines"
                      class="accordion-collapse collapse show"
                      aria-labelledby="cuisineHeading"
                      data-bs-parent="#cuisineAccordion"
                    >
                      <div
                        class="accordion-body d-flex flex-column justify-content-start align-items-start"
                      >
                         <router-link :to="'/market/'+store.id" v-for="store in best_stores" :key="store.id"  class="btn btn-link pl-5 pt-3">
                          {{ store.name }}
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 p-0">
                <div class="accordion accordion-flush" id="aboutAccordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="aboutHeading">
                      <button
                        class="accordion-button f-14 mb-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseAbout"
                        aria-expanded="true"
                        aria-controls="collapseAbout"
                      >
                        {{  $t('home.aboutApp')  }}
                      </button>
                    </h2>
                    <div
                      id="collapseAbout"
                      class="accordion-collapse collapse show"
                      aria-labelledby="aboutHeading"
                      data-bs-parent="#aboutAccordion"
                    >
                      <div
                        class="accordion-body d-flex flex-column justify-content-start align-items-start"
                      >
                        <router-link
                          to="/us"
                          class="btn btn-link pl-5 pt-3"
                          >
                          {{ $t('home.whoUs') }}
                          </router-link>
                        <router-link
                          to="/contact"
                          class="btn btn-link pl-5 pt-3"
                          >
                          {{ $t('home.contact') }}
                        </router-link>
                        <router-link
                          to="/privacy"
                          class="btn btn-link pl-5 pt-3"
                          >
                            {{  $t('home.privacy')  }}
                          </router-link
                        >
                        <router-link to="/terms" class="btn btn-link pl-5 pt-3"
                          >
                          {{  $t('home.terms')  }}
                          </router-link
                        >
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex_center w-100 pb-3">
            <div class="pt-4 flex_center">
              <h4 class="whiteColor fs-6 o-5 text-center flex_center">
جميع الحقوق محفوظة 2024 @ coffeekies              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "MultivendorFooterComponent",

  data() {
    return {
      stores: [],
      best_stores : []
    };
  },

  mounted() {
    this.getStores();
  },

  methods: {
    async getStores() {
      await axios.get(`user/stores`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.stores = res.data.data.stores;
          this.best_stores = res.data.data.best_stores;
      } )
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #262626;
  color: rgb(255, 255, 255);
  position: relative;
  .btn-link {
    color: #fff !important;
    text-decoration: none !important;
  }
  .accordion-item,
  .accordion-button {
    background-color: transparent !important;
    color: #fff !important;
    box-shadow: none !important;
  }
  .accordion-button::after {
    color: #fff !important;
    margin-right: auto !important;
    margin-left: 0 !important;
    filter: invert(1);
  }
}
</style>
