<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <h5 class="fw-bold text-center">جميع متاجرنا</h5>
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
            <router-link to="/market/1" class="normal_link">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img src="@/assets/imgs/coffee.webp" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold market-item">
                    <i class="fa-solid fa-utensils"></i>
                    <span class="mx-3"> Bolivard </span>
                  </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6 market-item">
                    <i class="fa-solid fa-layer-group"></i>
                    <span class="mx-3"> coffee , cake </span>
                  </span>
                </div>
                <div class="market_type">
                  <span class="fs-7 fw-6 market-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="mx-3"> يبعد 10 كم </span>
                  </span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-md-4 mb-3">
            <router-link to="/market/1" class="normal_link">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img src="@/assets/imgs/cake.jpg" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold market-item">
                    <i class="fa-solid fa-utensils"></i>
                    <span class="mx-3"> Bolivard </span>
                  </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6 market-item">
                    <i class="fa-solid fa-layer-group"></i>
                    <span class="mx-3"> coffee , cake </span>
                  </span>
                </div>
                <div class="market_type">
                  <span class="fs-7 fw-6 market-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="mx-3"> يبعد 10 كم </span>
                  </span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-md-4 mb-3">
            <router-link to="/market/1" class="normal_link">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img src="@/assets/imgs/coffee1.webp" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold market-item">
                    <i class="fa-solid fa-utensils"></i>
                    <span class="mx-3"> Bolivard </span>
                  </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6 market-item">
                    <i class="fa-solid fa-layer-group"></i>
                    <span class="mx-3"> coffee , cake </span>
                  </span>
                </div>
                <div class="market_type">
                  <span class="fs-7 fw-6 market-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="mx-3"> يبعد 10 كم </span>
                  </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- اشهر المتاجر  -->
      <div class="bestSell mt-5">
        <h5 class="fw-bold mainColor text-end">اشهر المتاجر</h5>
       <div class="row mt-4">
          <div class="col-md-4 mb-3">
            <router-link to="/market/1" class="normal_link">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img src="@/assets/imgs/coffee.webp" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold market-item">
                    <i class="fa-solid fa-utensils"></i>
                    <span class="mx-3"> Bolivard </span>
                  </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6 market-item">
                    <i class="fa-solid fa-layer-group"></i>
                    <span class="mx-3"> coffee , cake </span>
                  </span>
                </div>
                <div class="market_type">
                  <span class="fs-7 fw-6 market-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="mx-3"> يبعد 10 كم </span>
                  </span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-md-4 mb-3">
            <router-link to="/market/1" class="normal_link">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img src="@/assets/imgs/cake.jpg" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold market-item">
                    <i class="fa-solid fa-utensils"></i>
                    <span class="mx-3"> Bolivard </span>
                  </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6 market-item">
                    <i class="fa-solid fa-layer-group"></i>
                    <span class="mx-3"> coffee , cake </span>
                  </span>
                </div>
                <div class="market_type">
                  <span class="fs-7 fw-6 market-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="mx-3"> يبعد 10 كم </span>
                  </span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-md-4 mb-3">
            <router-link to="/market/1" class="normal_link">
              <div class="single_market flex_center flex-column">
                <div class="market_image">
                  <img src="@/assets/imgs/coffee1.webp" alt="" />
                </div>

                <div class="market_name mt-3">
                  <span class="fs-5 fw-bold market-item">
                    <i class="fa-solid fa-utensils"></i>
                    <span class="mx-3"> Bolivard </span>
                  </span>
                </div>

                <div class="market_type">
                  <span class="fs-6 fw-6 market-item">
                    <i class="fa-solid fa-layer-group"></i>
                    <span class="mx-3"> coffee , cake </span>
                  </span>
                </div>
                <div class="market_type">
                  <span class="fs-7 fw-6 market-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="mx-3"> يبعد 10 كم </span>
                  </span>
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
export default {
  name: "MultivendorMarketsComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.market-item {
  display: block;
  width: 170px;
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
