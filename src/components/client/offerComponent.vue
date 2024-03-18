<template>
  <div class="container mt-5 mb-5">
    <div class="card">
      <TabView>
        <TabPanel header="العروض">
          <!-- offers  -->
          <div class="row">
            <div class="col-md-6">
              <div class="single-offer flex_between">
                <div class="d-flex">
                  <div class="offer-img">
                    <img :src="require('@/assets/imgs/cake.jpg')" alt="" />
                  </div>
                  <div class="mx-4">
                    <h6 class="fw-bold">cake</h6>
                    <router-link to="/market/1" class="mb-3"
                      >market-name</router-link
                    >
                  </div>
                </div>

                <div>
                  <h6 class="fw-bold">100 ر.س</h6>
                  <h6 class="price_after">200 ر.س</h6>
                  <div>
                    <button class="main_btn">اضف للسلة</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="single-offer flex_between">
                <div class="d-flex">
                  <div class="offer-img">
                    <img :src="require('@/assets/imgs/coffee.webp')" alt="" />
                  </div>
                  <div class="mx-4">
                    <h6 class="fw-bold">coffee</h6>
                    <router-link to="/market/1" class="mb-3"
                      >market-name</router-link
                    >
                  </div>
                </div>

                <div>
                  <h6 class="fw-bold">100 ر.س</h6>
                  <h6 class="price_after">200 ر.س</h6>
                  <button class="main_btn">اضف للسلة</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="الخصومات">
          <div class="discounts">
            <div class="row">
              <div class="col-md-6">
                <div class="single-discount"></div>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

export default {
  components: {
    TabView,
    TabPanel,
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
