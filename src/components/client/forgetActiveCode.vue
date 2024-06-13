<template>
  <section id="otp" class="pt-4 px-5">
    <h5 class="fw-bold main_color text-center">رمز التفعيل</h5>

    <!-- gif  -->
    <div class="otp_gif mx-auto d-flex mt-4">
      <img
        :src="require('@/assets/imgs/PGdkpvJS0N.gif')"
        class="image"
        alt=""
      />
    </div>

     <form
      ref="loginForm"
      @submit.prevent="sendOtp"
      class="flex flex-wrap gap-3 p-fluid"
    >
      <!-- otp  -->
      <div class="position-relative flex-auto">
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          "
        >
          <v-otp-input
            ref="otpInput"
            v-model:value="code"
            name="code"
            input-classes="otp-input"
            separator=""
            :num-inputs="4"
            :should-auto-focus="true"
            autofocus
            input-type="letter-numeric"
            style="flex-direction: row-reverse"
          />
        </div>
      </div>

      <!-- submit  -->
      <div class="mt-4">
        <button
          class="main_btn pt-3 pb-3 fs-5 w-75 mx-auto flex_center"
          :disabled="disabled"
        >
          <span v-if="!spinner">تاكيد </span>
          <div class="spinner-border mx-2" role="status" v-if="spinner">
            <span class="visually-hidden">Loading...</span>
          </div>
        </button>
      </div>

      <div class="flex_between w-75 mx-auto d-flex">
        <div class="flex_center newAcc">
          <p class="fs-6 mt-4 fw-6" style="color: #15364d !important">
            لم يتم الارسال ؟
            <button
              type="button"
              class="fw-bold btn p-0"
              @click.prevent="resendCode"
              :disabled="isCodeSent"
            >
              اعادة ارسال
            </button>
          </p>
        </div>

        <div v-if="resendTime">
          <p v-if="timer > 0" class="text-center mt-3">
            متبقي<span class="" style="color: #15364d !important"
              >{{ timer }}ثانية</span
            >
          </p>
        </div>
      </div>
    </form>
  </section>
  <Toast />
</template>

<script>
import axios from "axios";
import Toast from "primevue/toast";

// import { mapState } from 'vuex';
export default {
  data() {
    return {
      otp: false,
      timer: 60,
      intervalId: null,
      openReset: false,
      disabled: true,
      spinner: false,
      code: "",
      isCodeSent: false,
      resendTime: false,
      parentPhone : false ,
      methodName: "",
      otpType: "",
    };
  },
  components: {
    // resetPass ,
    Toast,
  },
  watch: {
    openOtp() {
      this.otp = true;
    },
    code() {
      if (this.code.length ==4) {
        this.disabled = false;
      }
    },
  },
  // computed:{
  //     ...mapState(["auth"])
  // },
  methods: {
    startTimer() {
      this.intervalId = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          clearInterval(this.intervalId);
          this.isCodeSent = false;
        }
      }, 1000);
    },
    // submit otp form
    async sendOtp() {
      this.disabled = true;
      this.spinner = true;
      const fd = new FormData();
      fd.append("phone", sessionStorage.getItem("phone"));
      fd.append("country_key", sessionStorage.getItem("country_key"));
      fd.append("device_id", sessionStorage.getItem("device_id"));
      fd.append("device_type", "web");
      fd.append("code", this.code);

      // check if the function for the active code or check forget password code
      if (localStorage.getItem("otpType") == "active") {
        this.methodName = "auth/active";
      } else if (localStorage.getItem("otpType") == "forget") {
        this.methodName = "auth/forgetCode";
      }

      try {
        await axios.post("user/forget-password-check-code", fd).then((res) => {
          if (res.data.key == "success") {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            this.disabled = false;
            this.spinner = false;
            sessionStorage.setItem('code', this.code)
            setTimeout(() => {
              this.$router.push('/resetPassword')
            }, 2000);
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
            this.disabled = false;
            this.spinner = false;
          }
        });
      } catch (err) {
        console.error(err);
      }
    },
    // resend code
    async resendCode() {
      try {
         const fd = new FormData();
      fd.append("phone", sessionStorage.getItem("phone"));
      fd.append("country_key", sessionStorage.getItem("country_key"));
        await axios
          .post(`user/activate/resend-code`, fd)
          .then((res) => {
            if (res.data.key == "success") {
              this.$toast.add({
                severity: "success",
                summary: res.data.msg,
                life: 3000,
              });
              this.startTimer();
              this.timer = 60;
              this.isCodeSent = true;
              this.resendTime = true;
            } else {
              this.$toast.add({
                severity: "error",
                summary: res.data.msg,
                life: 3000,
              });
            }
          });
      } catch (err) {
        console.error(err);
      }
    },
  },
  
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  mounted() {
    // this.startTimer();
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => localStorage.setItem('device_id', data.ip))
    .catch(error => console.error(error));
  },
};
</script>

<style lang="scss">
#otp {
  .otp_gif {
       width: 110px;
    height: 113px;

  }
}

.otp-input {
  width: 60px;
  height: 50px;
  margin: 0 10px;
  border: 1px solid #346cf6;
  border-radius: 15px;
  text-align: center;
}
</style>
