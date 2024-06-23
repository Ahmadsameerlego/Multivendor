<template>
  <div class="reservation-container">
    <h2> {{ $t('order.reserveDetails') }} </h2>
    <div class="reservation-details">
      <div class="detail">
        <strong> {{ $t('order.reserveDetailDate') }} :</strong> <span>{{ rerserve.date }}</span>
      </div>
      <div class="detail">
        <strong> {{ $t('order.reserveTimeDet') }} :</strong> <span>{{ rerserve.reservation_date }}</span>
      </div>
      <div class="detail">
        <strong> {{$t('order.membersNum')  }} :</strong> <span>{{ rerserve.members }}</span>
      </div>
      <div class="detail">
        <strong>{{ $t('order.storeInfo') }}:</strong> <span>{{ store.name }}</span>
      </div>
      <div class="detail">
        <strong> {{ $t('order.clientInfo') }} :</strong> <span>{{ user.name }}</span>
      </div>
       <div class="detail">
        <strong> {{ $t('order.status') }} :</strong> <span>{{ status.text }}</span>
      </div>
    </div>
    <div class="mt-5 flex_center" v-if="status.key=='0'">
        <button class="main_btn pt-2 pb-2 px-5" @click.prevent="cancelOrder">الغاء الحجز
        </button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      reservation: {
        date: '2024-06-20',
        time: '18:00',
        members: 4,
        store: 'Awesome Store',
            user: 'John Doe',
        },
        rerserve: {},
        store: {},
        user: {},
              status : {}

    };
    },
    mounted() {
        this.getReserve();  
    },
  methods: {
       async cancelOrder() {
      const fd = new FormData();
      fd.append('reservation_id', this.$route.params.id)
      await axios.post('user/cancel-reservation', fd, {
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
              this.$router.push('/reservations')
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
        async getReserve() {
            await axios.get(`user/reservation-details?reservation_id=${this.$route.params.id}`, {
                headers: {
                Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            
            }).then((res) => {
                this.rerserve = res.data.data;
                this.store = res.data.data.store;
                this.user = res.data.data.user;
                this.status = res.data.data.status;
        } )
    }
  }
};
</script>

<style scoped>
.reservation-container {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  max-width: 50%;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.reservation-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}

.detail strong {
  color: #555;
}

.detail span {
  color: #000;
}
</style>
