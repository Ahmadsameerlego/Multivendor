<template>
  <div class="container mt-5 mb-5">
    <div class="card">
      <TabView>
        <TabPanel :header="$t('order.offers')">
          <!-- offers  -->
          <div class="row" v-if="offers.length > 0">
            <div class="col-md-6 mb-3" v-for="offer in offers" :key="offer.id">
              <div class="single-offer flex_between">
                <div class="d-flex">
                  <div class="offer-img">
                    <img :src="offer.image" alt="" />
                  </div>
                  <div class="mx-4">
                    <h6 class="fw-bold">{{ offer.name }}</h6>
                    <router-link :to="'/market/'+offer.store_id" class="mb-3"
                      >{{ offer.store_name }}</router-link
                    >
                  </div>
                </div>

                <div>
                  <h6 class="fw-bold"> {{  offer.price_discount  }} ر.س</h6>
                  <h6 class="price_after"> {{ offer.price }} ر.س </h6>
                  <div>
                    <button class="main_btn"                             @click.prevent="addToCart(offer.id)"
>اضف للسلة</button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
                              <Message severity="error" v-else> {{  $t('order.noOffers')  }} </Message>

        </TabPanel>
        <TabPanel :header="$t('order.discounts')">
          <div class="discounts">
            <h6 class="mb-4"> {{ $t('order.get') }} </h6>
            <div class="row mt-4" v-if="discounts.length > 0">
              <div class="col-md-4 mb-3" v-for="dis in discounts" :key="dis.id">
                <router-link :to="'/market/'+dis.id" class="normal_link">
                  <div
                    class="single_market flex_center flex-column position-relative"
                  >
                    <div class="market_image">
                      <img :src="dis.cover" alt="" />
                    </div>

                    <div class="market_name mt-3">
                      <span class="fs-5 fw-bold market-item">
                        <i class="fa-solid fa-utensils"></i>
                        <span class="mx-3"> {{ dis.name }} </span>
                      </span>
                    </div>

                    <div class="market_type">
                      <span class="fs-6 fw-6 market-item">
                        <i class="fa-solid fa-layer-group"></i>
                        <span class="mx-3"> {{ dis.categories }} </span>
                      </span>
                    </div>
                    <div class="market_type">
                      <span class="fs-7 fw-6 market-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <span class="mx-3"> يبعد {{ dis.distance }} كم </span>
                      </span>
                    </div>

                    <!-- discount  -->
                    <div class="discount">{{dis.discount_ratio}} %</div>
                  </div>
                </router-link>
              </div>
            </div>
            <Message severity="error" v-else> {{ $t('order.noDiscount') }} </Message>

          </div>
        </TabPanel>
      </TabView>
    </div>
  </div>
  <Toast />
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Toast from "primevue/toast";
import Message from 'primevue/message';

import axios from "axios";
export default {
  data() {
    return {
      offers: [],
        discounts : []
      }
  },
  methods: {
    async getOffers() {
      await axios.get('user/offers', {
         headers: {
           lang: 'ar',
          Authorization  : `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          this.offers = res.data.data.products;
      } )
    },
    async getDiscounts() {
      await axios.get('user/stores-discounts', {
         headers: {
           lang: 'ar',
          Authorization  : `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          this.discounts = res.data.data.stores;
      } )
    },
      async addToCart(id) {
      const fd = new FormData();

      await axios.post(`user/add-to-cart?product_id=${id}`,fd , {
         headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
                     lang: 'ar',

        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
           this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
           });
           setTimeout(() => {
              this.$store.commit('increament')
            }, 2000);
          }
          else if (res.data.key == 'unauthenticated') {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });

            setTimeout(() => {
                this.$router.push('/login')

              localStorage.removeItem('user')
              localStorage.removeItem('token')
            }, 1000);
          }

          else {
           this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
        }
      } )
    }
  },
  mounted() {
    this.getOffers();
    this.getDiscounts();
  },
  components: {
    TabView,
    TabPanel,
    Toast,
    Message
  },
};
</script>

<style lang="scss">
.p-tabview-ink-bar {
  display: none !important;
}
.single-offer {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  .offer-img {
    width: 100px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .price_after {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 60px;
      height: 1px;
      background-color: #734b21;
      bottom: 45%;
    }
  }
}
.p-tabview .p-tabview-nav li {
  margin-right: 0;
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
}
.p-tabview-title {
  line-height: 1;
  white-space: nowrap;
  color: #734b21;
}
.p-tabview .p-tabview-nav li .p-tabview-nav-link {
  text-decoration: none !important;
}
</style>
