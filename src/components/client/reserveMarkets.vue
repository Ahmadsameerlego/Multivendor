<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <h5 class="fw-bold text-center">احجز مقاعدك الان بكل سهولة</h5>
      <p class="grayColor fw-6 fs-6">ما عليك سوا اختيار المتجر المطلوب</p>
    </div>

    <div class="container">
      <div class="flex_end mt-4">
        <div class="form-group search_market position-relative">
          <input
            type="text"
            class="form-control"
            placeholder="ابحث عن اسم المتجر"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div class="mx-4">
          <select name="" id="" class="form-select">
            <option value="" selected hidden>اختر نوع المتجر</option>
            <option value="">كوفي</option>
            <option value="">كيك</option>
            <option value="">مخبوزات</option>
          </select>
        </div>

        <div class="">
          <select name="" id="" class="form-select">
            <option value="" selected hidden>اختر اقرب مدينة لك</option>
            <option value="">الرياض</option>
            <option value="">مكة</option>
            <option value="">جدة</option>
          </select>
        </div>
      </div>

      <div class="mt-5">
        <div class="row">
          <div class="col-md-4 mb-3">
            <button
              @click="chooseMarket"
              class="normal_link btn w-100 position-relative"
            >
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img src="@/assets/imgs/coffee.webp" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold"> Bolivard </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6"> coffee , cake </span>
                </div>
              </div>
              <input
                type="radio"
                class="chooseMarketInput"
                name="reserve"
                value="1"
              />
            </button>
          </div>

          <div class="col-md-4 mb-3">
            <button @click="chooseMarket" class="normal_link btn w-100">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img src="@/assets/imgs/cake.jpg" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold"> Wizzard </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6"> coffee , cake </span>
                </div>
              </div>
              <input
                type="radio"
                class="chooseMarketInput"
                name="reserve"
                value="2"
              />
            </button>
          </div>

          <div class="col-md-4 mb-3">
            <button @click="chooseMarket" class="normal_link btn w-100">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img src="@/assets/imgs/coffee1.webp" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold"> CircleK </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6"> coffee , cake </span>
                </div>
              </div>
              <input
                type="radio"
                class="chooseMarketInput"
                name="reserve"
                value="3"
              />
            </button>
          </div>
        </div>

        <div v-if="store">
          <router-link to="/completeReserve" class="main_btn px-5 pt-2 pb-2">تأكيد الحجز</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultivendorMarketsComponent",

  data() {
    return {
      store: false,
    };
  },

  mounted() {},

  methods: {
    chooseMarket() {
      this.store = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.chooseMarketInput {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
.normal_link:has(.chooseMarketInput:checked) {
  border: 1px solid #333;
}
.search_market {
  input,
  select {
    width: 200px !important;
  }
}
.fa-magnifying-glass {
  position: absolute;
  left: 10px;
  top: 40%;
}
.single_market {
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 0px 10px #33333325;
  transition: 0.3s all;
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
