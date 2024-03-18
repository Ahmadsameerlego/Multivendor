<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <div class="market-info">
        <div
          class="card d-flex justify-content-start align-items-start flex-row pt-3 pb-3 px-4"
        >
          <div class="market-image">
            <img src="@/assets/imgs/waffle.webp" alt="" />
          </div>
          <div class="market-details d-flex align-items-start flex-column mx-4">
            <h3 class="fw-bold fs-5">Waffle Tone</h3>
            <div class="location mb-2">
              <span class="grayColor fs-6 fw-6"> جدة </span>
            </div>
            <div class="category mb-2">
              <span class="grayColor fs-6 fw-6"> coffee , cakes </span>
            </div>
            <div>
              <span class="d-flex">
                <Rating v-model="value" readonly :cancel="false" />
                <span class="mainColor fw-6 mx-2"> 20 تقييم </span>
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
                    ابحث عن اسم المنتح
                  </label>
                  <input type="text" class="form-control" placeholder="ابحث " />
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <label for="" class="mainColor fw-bold d-flex fs-6">
                  اختر حسب التصنيف
                </label>

                <div class="mt-3 d-flex align-items-start flex-column">
                  <div class="form-group mb-2">
                    <input type="checkbox" class="" />
                    <label for="" class="fw-6 graColor fs-6 mx-2 fs-7">
                      cofee
                    </label>
                  </div>
                  <div class="form-group mb-2">
                    <input type="checkbox" class="" />
                    <label for="" class="fw-6 graColor fs-6 mx-2 fs-7">
                      cake
                    </label>
                  </div>
                  <div class="form-group mb-2">
                    <input type="checkbox" class="" />
                    <label for="" class="fw-6 graColor fs-6 mx-2 fs-7">
                      bakes
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="col-md-8">
            <div class="card pt-2 pb-2 px-3">
              <Accordion :activeIndex="0">
                <AccordionTab header="الاعلى تقييما">
                  <div class="row">
                    <div class="col-md-10">
                      <div class="single_menu mb-3 flex_between">
                        <div class="prod-image">
                          <img src="@/assets/imgs/coffee.webp" alt="" />
                        </div>

                        <div class="mx-3 d-flex align-items-start flex-column">
                          <h6 class="fw-bold">Expresso</h6>

                          <div>
                            <span class="grayColor fw-6 fs-6">
                              Lorem ipsum dolor sit amet.
                            </span>
                          </div>

                          <div class=""></div>
                        </div>

                        <div
                          class="product-price d-flex flex-column align-items-end"
                        >
                          <span class="fw-6"> 330 ر.س </span>
                          <button
                            class="btn main_btn br-50 w-20 h-20 mt-3 px-0 pt-0 pb-0 addCartButton"
                            @click="$router.push('/cart')"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTab>
                <AccordionTab header="الاكثر مبيعا">
                  <div class="row">
                    <div class="col-md-10">
                      <div class="single_menu mb-3 flex_between">
                        <div class="prod-image">
                          <img src="@/assets/imgs/coffee.webp" alt="" />
                        </div>

                        <div class="mx-3 d-flex align-items-start flex-column">
                          <h6 class="fw-bold">Expresso</h6>

                          <div>
                            <span class="grayColor fw-6 fs-6">
                              Lorem ipsum dolor sit amet.
                            </span>
                          </div>

                          <div class=""></div>
                        </div>

                        <div
                          class="product-price d-flex flex-column align-items-end"
                        >
                          <span class="fw-6"> 330 ر.س </span>
                          <button
                            class="btn main_btn br-50 w-20 h-20 mt-3 px-0 pt-0 pb-0 addCartButton"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
</template>

<script>
import Rating from "primevue/rating";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

export default {
  name: "MultivendorMenueComponent",

  data() {
    return {
      value: 3,
    };
  },

  mounted() {},

  methods: {},
  components: {
    Rating,
    Accordion,
    AccordionTab,
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
