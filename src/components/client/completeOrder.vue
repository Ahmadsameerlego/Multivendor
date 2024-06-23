<template>
  <div class="pt-5 pb-5">
    <div class="container">
      <h4 class="fw-bold text-center"> {{  $t('order.details')  }} </h4>

      <div class="market-info mt-5 mb-3 d-flex align-items-start flex-column">
        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{ $t('order.name') }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3">
            {{  store.name  }}
          </span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{ $t('order.status') }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> {{  status.text  }}  </span>
        </div>
        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{ $t('order.num') }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> {{  order.order_num  }}  </span>
        </div>
        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{ $t('order.date') }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> {{  order.order_date  }}  </span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{ $t('order.receiveDate') }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> {{ order.receive_date }}</span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{ $t('order.receiveTime') }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> {{ order.receive_time }} </span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{  $t('order.price')  }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> {{  order.products_price  }} ر.س </span>
        </div>
        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{  $t('order.tax')  }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> {{  order.service_price  }} ر.س </span>
        </div>

        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{ $t('order.total') }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3"> {{  order.total_price  }} ر.س </span>
        </div>
        <div class="mb-2 w-50 d-flex">
          <span class="fw-bold fs-16 w-25"> {{ $t('order.pay') }} </span>
          <span class="fs-16 mainColor fw-bold"> :</span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3" v-if="order.payment_status==0"> {{ $t('order.not') }} </span>
          <span class="fw-6 mainColor fs-16 w-25 d-block mx-3" v-if="order.payment_status==1"> {{  $t('order.done')  }} </span>
        </div>
      </div>

      <div class="market-info mb-4">
        <h5 class="fw-bold text-center mb-3"> {{ $t('order.orders') }} </h5>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"> {{ $t('order.name') }} </th>
              <th scope="col"> {{ $t('order.qty') }} </th>
              <th scope="col"> {{ $t('prder.size') }} </th>
              <th scope="col"> {{ $t('order.price') }} </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(prod, index) in products" :key="index">
              <th scope="row">{{index+1}}</th>
              <td>{{ prod.name }}</td>
              <td> {{ prod.qty }} </td>
              <td> {{ prod.size }} </td>
              <td>{{ prod.price }} ر.س</td>
            </tr>
            
          </tbody>
        </table>
      </div>

      <div class="mt-5 flex_center" v-if="status.key=='waiting_payment'">
        <button class="main_btn pt-2 pb-2 px-5" @click="payOrder">ادفع الان</button>
      </div>
      <div class="mt-5 flex_center" v-if="status.key=='pending'">
        <button class="main_btn pt-2 pb-2 px-5" @click.prevent="cancelOrder">الغاء الطلب
        </button>
      </div>
      <div class="mt-5 flex_center" v-if="order.payment_status==1">
        <button class="main_btn pt-2 pb-2 px-5" @click="visible = true">
          قيم المتجر
        </button>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="visible"
    modal
    header="قيم الطلب"
    :style="{ width: '45rem' }"
  >
    <Rating v-model="value" :cancel="false" class="flex_center" />

    <div class="form-group mt-4">
      <label for=""> اترك تعليق </label>
      <textarea v-model="message" rows="5" cols="" class="form-control"></textarea>
    </div>

     <div class="flex-center mt-3">
           <button class="main_btn px-5 pt-2 pb-2" :disabled="disabled" @click.prevent="rateOrder">
            <span v-if="!disabled">
              تأكيد
            </span>
          <div class="spinner-border mx-2" role="status" v-if="disabled">
            <span class="visually-hidden">Loading...</span>
          </div>
          </button>
        </div>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import Rating from "primevue/rating";
import axios from 'axios';
export default {
  name: "MultivendorCompleteOrder",

  data() {
    return {
      visible: false,
      value: 0,
      order: {},
      products: [],
      status: {},
      store: {},
      disabled : false
    };
  },

  mounted() {
    this.getOrder()
  },

  methods: {
     async cancelOrder() {
      const fd = new FormData();
      fd.append('order_id', localStorage.getItem('order_id'))
      await axios.post('user/cancel-order', fd, {
        headers: {
          Authorization : `Bearer ${localStorage.getItem('token')}`
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
              this.$router.push('/orders')
            }, 2000);
          } else {
           this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
        }
      } )
    },
    async payOrder() {
      const fd = new FormData();
      fd.append('order_id', localStorage.getItem('order_id'))
      await axios.post('user/pay-order', fd, {
        headers: {
          Authorization : `Bearer ${localStorage.getItem('token')}`
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
              this.getOrder();
            }, 2000);
          } else {
           this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
        }
      } )
    },
    async getOrder() {
      await axios.get(`user/order-details?order_id=${localStorage.getItem('order_id')}`, {
        headers: {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          this.order = res.data.data;
          this.products = res.data.data.products;
          this.status = res.data.data.status;
          this.store = res.data.data.store;
      } )
    },
       async rateOrder() {
      const fd = new FormData(this.$refs.createForm);

      fd.append('rate', this.value)
      fd.append('comment', this.message)
      fd.append('order_id', localStorage.getItem('order_id'))
      
      this.disabled = true;
       await axios.post('user/rate-order', fd, {
        headers: {
           lang: 'ar',
          Authorization  : `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
          
            setTimeout(() => {
              this.$router.push('/')
            }, 2000);
          } else {
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
             this.disabled = false ;

        }
        )

    },
  },
  components: {
    Dialog,
    Rating,
  },
};
</script>

<style lang="scss" scoped>
.w-25 {
  width: 200px !important;
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
