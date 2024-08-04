<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <h5 class="fw-bold text-center"> {{  $t('store.all')  }} </h5>
    </div>

    <div class="container">
      <div class="flex_end mt-4 filters">
        <div class="form-group search_market position-relative">
          <input
            type="text"
            class="form-control"
            :placeholder="$t('store.search')"
            @input="searchMarket"
            v-model="marketName"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div class="mx-4">
          <select v-model="catId" id="" class="form-select" @change="getCatStores">
            <option value="" selected hidden> {{ $t('store.choose') }} </option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id"> {{ cat.name  }} </option>
          </select>
        </div>

        <div class="">
          <select v-model="cityId" id="" class="form-select" @change="getCityStores">
            <option value="" selected hidden> {{  $t('store.near')  }} </option>
            <option v-for="cat in citites" :key="cat.id" :value="cat.id"> {{ cat.name  }} </option>
            
          </select>
        </div>
      </div>

      <div class="mt-5">
        <div class="row" v-if="stores.length > 0">
          <div class="col-md-4 mb-3" v-for="(store, index) in stores" :key="index">
            <router-link :to="'/market/'+store.id" class="normal_link">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img :src="store.image" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold market-item">
                    <i class="fa-solid fa-utensils"></i>
                    <span class="mx-3"> {{ store.name }} </span>
                  </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6 market-item">
                    <i class="fa-solid fa-layer-group"></i>
                    <span class="mx-3"> {{ store.categories }} </span>
                  </span>
                </div>
                <div class="market_type">
                  <span class="fs-7 fw-6 market-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="mx-3"> {{ store.distance }} </span>
                  </span>
                </div>

                <!-- status  -->
                <div class="status" v-if="store.is_open == true">
                  <span class="icon open"></span>
                  <span> {{ $t('store.open') }} </span>
                </div>
                <div class="status" v-else>
                  <span class="icon closed"></span>
                  <span> {{ $t('store.close') }} </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div v-else>
          <Message severity="error"> {{ $t('store.empty') }} </Message>

        </div>
      </div>

      <!-- اشهر المتاجر  -->
      <div class="bestSell mt-5">
        <h5 class="fw-bold mainColor text-end"> {{ $t('home.famous') }} </h5>
        <div class="row mt-4">
          <div class="col-md-4 mb-3" v-for="(store, index) in best_stores" :key="index">
            <router-link :to="'/market/'+store.id" class="normal_link">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img :src="store.image" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold market-item">
                    <i class="fa-solid fa-utensils"></i>
                    <span class="mx-3"> {{ store.name }} </span>
                  </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6 market-item">
                    <i class="fa-solid fa-layer-group"></i>
                    <span class="mx-3"> {{ store.categories }} </span>
                  </span>
                </div>
                <div class="market_type">
                  <span class="fs-7 fw-6 market-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="mx-3"> {{ store.distance }} </span>
                  </span>
                </div>

                <!-- status  -->
                <div class="status" v-if="store.is_open == true">
                  <span class="icon open"></span>
                  <span> {{ $t('store.open') }} </span>
                </div>
                <div class="status" v-else>
                  <span class="icon closed"></span>
                  <span> {{ $t('store.close') }} </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
import axios from 'axios';
import Message from 'primevue/message';

export default {
  name: "MultivendorMarketsComponent",

  data() {
    return {
      stores: [],
      catId: '',
      cityId: '', 
      best_stores: [],
      marketName: '',
      categories: [],
      citites : []
    };
  },

  mounted() {
    this.getStores();
    this.getCategories();
    this.getCities();
  },

  methods: {
    async getStores() {
      await axios.get(`user/stores?lat=${localStorage.getItem('lat')}&long=${localStorage.getItem('lng')}&country_id=${this.currentCountry.id}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.stores = res.data.data.stores;
          this.best_stores = res.data.data.best_stores;
      } )
    },
    async searchMarket() {
      await axios.get(`user/stores?search=${this.marketName}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.stores = res.data.data.stores;
      } )
    },
    async getCatStores() {
      await axios.get(`user/stores?search=${this.catId}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.stores = res.data.data.stores;
      } )
    },
    async getCityStores() {
      await axios.get(`user/stores?search=${this.cityId}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          this.stores = res.data.data.stores;
      } )
    },
    async getCategories() {
      await axios.get('categories')
        .then((res) => {
        this.categories = res.data.data
      } )
    },
    async getCities() {
      await axios.get('cities')
        .then((res) => {
        this.citites = res.data.data
      } )
    }

  },
  watch: {
    countryId(newId, oldId) {
      // This function will run whenever the country id changes
       this.getStores();
      console.log(newId , oldId)
    }

  },
    computed: {
    currentCountry() {
      return this.$store.state.country;
      },
    countryId() {
      return this.$store.state.country.id;
    }

  },

  components: {
    Message
  }
};
</script>



<style scoped>
.fa-magnifying-glass {
  position: absolute;
  left: 10px;
  top: 40%;
}
</style>
<style lang="scss">
.market-item {
  display: block;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search_market {
  input,
  select {
    width: 200px !important;
  }
}

.single_market {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 0px 10px #33333325;
  transition: 0.3s all;
  .discount {
    position: absolute;
    top: -15px;
    left: -15px;
    background-color: red;
    color: #fff;
    text-align: center;
    width: 58px;
    padding: 6px 0;
    border-radius: 3px;
  }
  .status {
    position: absolute;
    top: 10px;
    left: 10px;
    .icon {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      &.open {
        background-color: green;
      }
      &.closed {
        background-color: red;
      }
    }
  }
  &:hover {
    box-shadow: 0px 0px 15px #33333346;
    transform: translate(-5px, -5px);
  }
  .market_image {
    img {
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .market_name {
  }
}
</style>
