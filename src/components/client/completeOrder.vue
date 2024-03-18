<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <h4 class="fw-bold text-center">ملخص طلبك</h4>

      <div class="market-info mt-5 mb-3 d-flex align-items-start flex-column">
        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> اسم المتجر </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3">
            Boldivard
          </span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> العنوان </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> الرياض </span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> تاريخ الاستلام </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> 1-2-2024 </span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> موعد الاستلام </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> 2:00 pm </span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> السعر </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> 1000 ر.س </span>
        </div>
        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> الخدمة </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> 100 ر.س </span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> الاجمالي </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> 1100 ر.س </span>
        </div>
      </div>

      <div class="market-info mb-4">
        <h5 class="fw-bold text-center mb-3">الطلبات</h5>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">اسم المنتج</th>
              <th scope="col">الكمية</th>
              <th scope="col">السعر</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Express0</td>
              <td>3</td>
              <td>100 ر.س</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Molton Cake</td>
              <td>2</td>
              <td>150 ر.س</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-5 flex_center">
        <button class="main_btn pt-2 pb-2 px-5">ادفع الان</button>
      </div>
      <div class="mt-5 flex_center">
        <button class="main_btn pt-2 pb-2 px-5" @click="visible = true">
          قيم المتجر
        </button>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="visible"
    modal
    header="قيم المتجر"
    :style="{ width: '45rem' }"
  >
    <Rating v-model="value" :cancel="false" class="flex_center" />

    <div class="form-group mt-4">
      <label for=""> اترك تعليق </label>
      <textarea rows="5" cols="" class="form-control"></textarea>
    </div>

    <div class="flex_center mt-4">
      <button class="main_btn pt-2 pb-2 px-5">تاكيد</button>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import Rating from "primevue/rating";

export default {
  name: "MultivendorCompleteOrder",

  data() {
    return {
      visible: false,
      value: 0,
    };
  },

  mounted() {},

  methods: {},
  components: {
    Dialog,
    Rating,
  },
};
</script>

<style lang="scss" scoped>
.w-25 {
  width: 150px !important;
  display: block;
  text-align: start;
}
.market-info {
  background-color: #cccccc21;
  border-radius: 10px;
  padding: 10px 30px;
  box-shadow: 0px 0px 10px #33333331;
}
</style>
