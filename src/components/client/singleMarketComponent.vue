<template>
  <div class="pt-5 pb-5">
    <section class="market">
      <div class="container">
        <div class="market_info pt-5 pb-4 position-relative" :style="{ backgroundImage: `url(${store.cover})` }">
          <div class="market_details">
            <div class="market_image">
              <img :src="store.logo" alt="" />
            </div>

            <div class="mt-4">
              <h5 class="fs-3 market_name fw-bold text-center">{{ store.name }}</h5>
            </div>

            <div>
              <p class="fs-6 fs-6 text-center whiteColor"> {{ store.categories }} </p>
            </div>

            <div class="mt-4 mb-4">
              <router-link :to="'/menu/'+store.id" class="main_btn px-5 fw-6 fs-5">
                اطلع على قائمة المتجر
              </router-link>
            </div>

            <div class="discount-sign" v-if="discount.has_discount==true">
              <i class="fa-solid fa-tags"></i>
              <span>
                احصل على خصم {{ discount.discount_percentage }} % على كل عملية شراء باكثر من {{ discount.order_selling }} ريال
              </span>
            </div>

            <div class="discount-sign">
              <span> </span>
            </div>
          </div>

          <div class="market_breif mt-4">
            <h5 class="text-end fw-bold" style="color: #ffc800">
              نبذه عن {{  store.name  }}
            </h5>
            <p class="text-end fs-6 fs-6">
              {{  store.description  }}
            </p>
          </div>
        </div>

        <div class="best_seller mt-5">
          <h5 class="mainColor fs-4 text-end">الاكثر مبيعا</h5>

          <section class="row mt-4">
            <div class="col-md-3 mb-3" v-for="item in best_products" :key="item.id">
              <div class="single_branch">
                <div class="flex_center flex-column">
                  <div class="single_image mb-3">
                    <img :src="item.image" alt="" />
                  </div>
                  <h5 class="fw-bold"> {{ item.name }} </h5>

                  <button class="btn main_btn px-4" @click="addToCart(item.id)">اطلب الان</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="rates mt-5" >
          <h5 class="mainColor fs-4 text-end">اراء العملاء عن المتجر</h5>
          <h6>
            <Rating v-model="rate.rate" readonly :cancel="false" />
            <span class="mainColor fw-6"> ({{  rate.count  }} تقييم ) </span>
          </h6>

          <div class="singleRate" v-for="rate in rates" :key="rate.id">
            <div class="flex_between">
              <div>
                <h6 class="secondColor"> {{  rate.user_name }}</h6>
                <p class="fs-6 fw-6">{{  rate.comment }}</p>
              </div>
              <div>
                <span class="fs-6"> {{  rate.created_at }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Toast />
</template>

<script>
import Rating from "primevue/rating";
import axios from "axios";
import Toast from "primevue/toast";

export default {
  name: "MultivendorSingleMarketComponent",

  data() {
    return {
      value: 4,
      store: {},
      discount: {}, 
      rate: {},
      best_products: [],
      rates : []
    };
  },

  mounted() {
    this.getStores();
  },

  methods: {
    async getStores() {
      await axios.get(`user/single-store?store_id=${this.$route.params.id}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.store = res.data.data.store;
          this.discount = res.data.data.store.discount;
          this.rate = res.data.data.store.rate;
          this.best_products = res.data.data.best_products;
          this.rates = res.data.data.rates;
      } )
    },
     async addToCart(id) {
      const fd = new FormData();

      await axios.post(`user/add-to-cart?product_id=${id}`,fd , {
         headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
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
              this.$router.push('/cart')
            }, 2000);
          } else {
           this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
        }
      } )
    }
  },
  components: {
    Rating,
    Toast
  },
};
</script>

<style lang="scss">
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
  color: #ffc800 !important;
}
.singleRate {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 30px;
  margin-bottom: 10px;
}
.market_breif {
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  border-top: 7px solid #ffc800;
}
.single_image img {
  width: 150px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
}
.market_name {
  color: #ffc800;
}
.market_info {
  backdrop-filter: blur(100px);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 20px;

  .market_details {
    width: 60%;
    margin: auto;
    padding: 20px;
    background-color: #08080891;
    border-radius: 20px;
  }
  .market_image {
    img {
      width: 250px;
      height: 250px;
      border-radius: 20px;
    }
  }
}
.discount-sign {
  position: absolute;
  top: 9px;
  right: 30%;
  background-color: #00abab;
  color: #fff;
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 17px;
}
</style>
