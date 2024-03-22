<template>
  <div class="pt-5 pb-5">
    <section class="market">
      <div class="container">
        <div class="market_info pt-5 pb-4 position-relative">
          <div class="market_details">
            <div class="market_image">
              <img src="@/assets/imgs/coffee1.webp" alt="" />
            </div>

            <div class="mt-4">
              <h5 class="fs-3 market_name fw-bold text-center">Bolivard</h5>
            </div>

            <div>
              <p class="fs-6 fs-6 text-center whiteColor">coffee , cake</p>
            </div>

            <div class="mt-4 mb-4">
              <router-link to="/menu/1" class="main_btn px-5 fw-6 fs-5">
                اطلع على قائمة المتجر
              </router-link>
            </div>

            <div class="discount-sign">
              <i class="fa-solid fa-tags"></i>
              <span>
                احصل على خصم 20 % على كل عملية شراء باكثر من 500 ريال
              </span>
            </div>

            <div class="discount-sign">
              <span> </span>
            </div>
          </div>

          <div class="market_breif mt-4">
            <h5 class="text-end fw-bold" style="color: #ffc800">
              نبذه عن Bolivard
            </h5>
            <p class="text-end fs-6 fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              quo. Illum quaerat veniam voluptate, odit adipisci ipsa architecto
              sunt iste!
            </p>
          </div>
        </div>

        <div class="best_seller mt-5">
          <h5 class="mainColor fs-4 text-end">الاكثر مبيعا</h5>

          <section class="row mt-4">
            <div class="col-md-3 mb-3">
              <div class="single_branch">
                <div class="flex_center flex-column">
                  <div class="single_image mb-3">
                    <img src="@/assets/imgs/cake.jpg" alt="" />
                  </div>
                  <h5 class="fw-bold">Espresso</h5>

                  <button class="btn main_btn px-4">اطلب الان</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="rates mt-5">
          <h5 class="mainColor fs-4 text-end">اراء العملاء عن المتجر</h5>
          <h6>
            <Rating v-model="value" readonly :cancel="false" />
            <span class="mainColor fw-6"> (1 تقييم ) </span>
          </h6>

          <div class="singleRate">
            <div class="flex_between">
              <div>
                <h6 class="secondColor">Ahmed Samir</h6>
                <p class="fs-6 fw-6">المتجر ممتاز</p>
              </div>
              <div>
                <span class="fs-6"> الشهر الماضي </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Rating from "primevue/rating";

export default {
  name: "MultivendorSingleMarketComponent",

  data() {
    return {
      value: 4,
    };
  },

  mounted() {},

  methods: {},
  components: {
    Rating,
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
  background-image: url("@/assets/imgs/coffee1.webp");
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
