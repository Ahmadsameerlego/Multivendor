<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <h4 class="fw-bold text-center">تأكيد الحجز</h4>

      <form @submit.prevent="reserve" ref="reserveForm" class="mt-5">
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="form-group">
              <label for="" class="text-start d-flex"> اختر المعاد </label>
              <input type="date" class="form-control" name="date" id="" />
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="form-group">
              <label for="" class="text-start d-flex"> اختر التوقيت </label>
              <input type="time" class="form-control" name="time" id="" />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group">
              <label for="" class="text-start d-flex"> حدد عدد المقاعد </label>
              <input type="number" class="form-control" name="members" id="" />
            </div>
          </div>
        </div>

        <div>
          <button class="main_btn px-5 pt-2 pb-2" :disabled="disabled">
            <span v-if="!disabled">
              تأكيد
            </span>
          <div class="spinner-border mx-2" role="status" v-if="disabled">
            <span class="visually-hidden">Loading...</span>
          </div>
          </button>
        </div>
      </form>
    </div>
  </div>
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
  name: "MultivendorCompleteReserComponent",

  data() {
    return {
      disabled  : false
    };
  },

  mounted() {},

  methods: {
    async reserve() {
      const fd = new FormData(this.$refs.reserveForm);
      fd.append('store_id', this.$route.params.id)
      this.disabled = true;
       await axios.post('user/create-reserve', fd, {
        headers: {
           lang: 'ar',
          Authorization  : `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
          
            setTimeout(() => {
              this.$router.push('/reserve')
            }, 3000);
          } else {
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
             this.disabled = false ;

        }
        )
    }
  },
  components: {
    Toast
  }
};
</script>

<style lang="scss" scoped></style>
