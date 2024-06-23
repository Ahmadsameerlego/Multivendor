<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <div class="market-info">
        <div
          class="card d-flex justify-content-start align-items-start flex-row pt-3 pb-3 px-4"
        >
          <div class="market-image">
            <img :src="store.logo" alt="" />
          </div>
          <div class="market-details d-flex align-items-start flex-column mx-4">
            <h3 class="fw-bold fs-5"> {{store.name }} </h3>
            <div class="location mb-2">
              <span class="grayColor fs-6 fw-6"> {{ store.city_name }} </span>
            </div>
            <div class="category mb-2">
              <span class="grayColor fs-6 fw-6"> {{  store.categories  }} </span>
            </div>
            <div>
              <span class="d-flex">
                <Rating v-model="value" readonly :cancel="false" />
                <span class="mainColor fw-6 mx-2"> {{ rate }} {{ $t('single.rates') }} </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- menu  -->
      <div class="mt-4">
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="filter card pt-2 pb-2 px-3">
              <form action="">
                <div class="form-group position-relative mb-4 mt-4">
                  <label for="" class="mainColor fw-bold d-flex fs-6 mb-2">
                    {{  $t('prod.search')  }}
                  </label>
                  <input type="text" class="form-control" :placeholder="$t('prod.search')" v-model="search" @input="searchProduct"/>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <label for="" class="mainColor fw-bold d-flex fs-6">
                  {{ $t('prod.cat') }}
                </label>

                <div class="mt-3 d-flex align-items-start flex-column" v-for="cat in categories" :key="cat.id">
                  <div class="form-group mb-2">
                    <input type="checkbox" class="" v-model="catId" :value="cat.id" @change="getProducts"/>
                    <label for="" class="fw-6 graColor fs-6 mx-2 fs-7">
                      {{  cat.name }}
                    </label>
                  </div>
                </div>  

                  <label for="" class="mainColor fw-bold d-flex fs-6">
                  {{ $t('prod.depend') }}
                </label>

                <div class="mt-3 d-flex align-items-start flex-column">
                  <div class="form-group mb-2">
                    <input type="checkbox" class=""   @change="getHightProducts"/>
                    <label for="" class="fw-6 graColor fs-6 mx-2 fs-7">
                     {{ $t('single.mostSell') }}
                    </label>
                  </div>
                  
                  <div class="form-group mb-2">
                    <input type="checkbox" class=""   @change="getHightProducts"/>
                    <label for="" class="fw-6 graColor fs-6 mx-2 fs-7">
                     {{ $t('prod.mostRate') }}
                    </label>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>

          <div class="col-md-8">
            <div class="card pt-2 pb-2 px-3">
              <Accordion :activeIndex="0">
                <AccordionTab :header="$t('prod.all')">
                  <div class="row" v-if="products.length>0">
                    <div class="col-md-10" v-for="store in products" :key="store.id">
                      <div class="single_menu mb-3 flex_between">
                        <div class="prod-image">
                          <img :src="store.image" alt="" />
                        </div>

                        <div class="mx-3 d-flex align-items-start flex-column">
                          <h6 class="fw-bold">{{ store.name }}</h6>

                          <div>
                            <span class="grayColor fw-6 fs-6">
{{store.description}}                            </span>
                          </div>

                          <div class=""></div>
                        </div>

                        <div
                          class="product-price d-flex flex-column align-items-end"
                        >
                          <!-- <span class="fw-6"> 330 ر.س </span> -->
                          <button
                            class="btn main_btn px-2 w-20 h-20 mt-3 px-0 pt-0 pb-0 "
                            @click="addToCart(store.id)"
                          >
                            {{  $t('prod.add')  }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                    <Message severity="error" v-else> {{ $t('prod.empty') }} </Message>
                </AccordionTab>
                
                <!-- <AccordionTab header="Header III">
                                    <p class="m-0">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                    </p>
                                </AccordionTab> -->
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Toast />
</template>

<script>
import Rating from "primevue/rating";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import axios from "axios";
import Message from 'primevue/message';
import Toast from "primevue/toast";


export default {
  name: "MultivendorMenueComponent",

  data() {
    return {
      value: 0,
      rate : '',
      store: {},
      high_rate_products: [],
      high_selling_products: [],
      products : [],
      search: '',
      categories: [],
      catId : []
    };
  },

  mounted() {
    this.getStores();
    this.getcats();
  },

  methods: {
     async getStores() {
      await axios.get(`user/store-products?store_id=${this.$route.params.id}&search=${this.search}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.store = res.data.data.store;
          this.rate = res.data.data.store.rate.count;
          this.value = res.data.data.store.rate.rate;
          // this.high_selling_products = res.data.data.high_selling_products;
          this.products = res.data.data.products;
      } )
    },
     async getcats() {
      await axios.get(`categories?store_id=${this.$route.params.id}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.categories = res.data.data;
      } )
    },
    searchProduct() {
      setTimeout(() => {
        this.getStores();
      }, 1000);
    },
    async getProducts() {
      await axios.get(`user/store-products?store_id=${this.$route.params.id}&search=${this.search}&category_id=${this.catId}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.store = res.data.data.store;
          this.rate = res.data.data.store.rate.count;
          this.value = res.data.data.store.rate.rate;
          // this.high_selling_products = res.data.data.high_selling_products;
          this.products = res.data.data.products;
      } )
    },
    
    async getHightProducts() {
      await axios.get(`user/store-products?store_id=${this.$route.params.id}&selling=high`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.store = res.data.data.store;
          this.rate = res.data.data.store.rate.count;
          this.value = res.data.data.store.rate.rate;
          // this.high_selling_products = res.data.data.high_selling_products;
          this.products = res.data.data.products;
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
    Accordion,
    AccordionTab,
    Message,
    Toast
  },
};
</script>

<style>
.p-accordion
  .p-accordion-header
  .p-accordion-header-link
  .p-accordion-toggle-icon {
  position: absolute;
  left: 20px;
}
.p-accordion .p-accordion-header .p-accordion-header-link {
  text-decoration: none !important;
  color: #333 !important;
}
</style>
<style lang="scss">
.addCartButton {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
}
.single_menu {
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px 15px;
  .prod-image {
    img {
      width: 110px;
      height: 70px;
      border-radius: 4px;
      object-fit: cover;
    }
  }
}
.market-image {
  img {
    width: 120px;
    height: 120px;
    border-radius: 15px;
    object-fit: contain;
  }
}
.fa-magnifying-glass {
  position: absolute;
  left: 10px;
  top: 60%;
}
</style>
