<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <h4 class="fw-bold text-center">تأكيد الحجز</h4>

      <form action="" class="mt-5">
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="form-group">
              <label for="" class="text-start d-flex"> اختر المعاد </label>
              <input type="date" class="form-control" name="" id="" />
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="form-group">
              <label for="" class="text-start d-flex"> اختر التوقيت </label>
              <input type="time" class="form-control" name="" id="" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group">
              <label for="" class="text-start d-flex"> حدد عدد المقاعد </label>
              <input type="number" class="form-control" name="" id="" />
            </div>
          </div>
        </div>

        <div>
          <button class="main_btn px-5 pt-2 pb-2">تأكيد</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultivendorCompleteReserComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
