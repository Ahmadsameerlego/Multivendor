<template>
  <section class="auth">
    <section class="login_form flex_center flex-column">
      <!-- login image  -->
      <div class="login_image mb-4" style="width: 150px; height: 150px">
        <img src="@/assets/imgs/coffee1.webp" alt="" />
      </div>

      <h5 class="fw-bold mb-3 mainColor">مرحبا بك</h5>



      <form @submit.prevent="login" class="container loginForm" ref="loginForm">
        <h6 class="bold text-center">هل نسيت كلمة المرور؟</h6>
        <p class="text-center">ادخل كلمة المرور الجديدة</p>

                    <div class="row">
              <div class="col-md-12 mb-2">
                <!-- password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2 text-end mx-5"> كلمة المرور </label>
                    <Password v-model="password"  toggleMask class="defaultInput" placeholder="يرجى ادخال كلمة المرور" />

                    <!-- icon  -->
                    <!-- <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div> -->


                </div>

                <!-- confirm password  -->
                <div class="position-relative flex-auto mt-3">

                    <label for="integeronly" class="label fw-bold block mb-2 text-end mx-5"> تاكيد كلمة المرور </label>
                    <Password v-model="password_confirmation" :feedback="false" toggleMask class="defaultInput" placeholder="يرجى اعادة ادخال كلمة المرور" />

                    <!-- icon  -->
                    <!-- <div class="inputIcon">
                      <img :src="require('@/assets/imgs/lock.svg')" alt="">
                    </div> -->


                </div>

                <div v-if="showValid" class="mx-5 mt-3 mb3">
                  <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center text-success">
                    <i class="fa-regular fa-circle-check fs-16"></i>
                    <span class="fs-16"> متاطابق </span>
                  </p>
                  <p v-else class="passwordWrong d-flex align-items-center text-danger">
                      <i class="fa-regular fa-circle-xmark fs-16"></i>
                      <span class="fs-16">غير متطابق</span>
                  </p>
                </div>
              </div>



              <div class="mt-4">
                <button class="main_btn w-75 mx-auto pt-3 pb-3 fs-5" :disabled="disabled"> 
                  
                    <span v-if="!disabled"> اعادة تعيين </span>
                    <div class="spinner-border mx-2" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button>
              </div>



            </div>

      </form>
    </section>

    <!-- logo image  -->
    <div class="logo_image">
      <!-- <img :src="require('@/assets/imgs/logo.png')" alt="logo"> -->
    </div>
    <!-- circled  -->
    <span class="top_left_circle circle"></span>
    <span class="bottom_right_circle circle"></span>
  </section>
  <Toast />

  <!-- otp  -->
  <Dialog
    v-model:visible="otp"
    modal
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <activeCode
      @closeOtpModal="otp = false"
      @responsibleData="saveResponsible"
    />
  </Dialog>
</template>

<script>
// import ProgressSpinner from "primevue/progressspinner";
import axios from "axios";
import Toast from "primevue/toast";
import Password from 'primevue/password';

import activeCode from "@/components/client/forgetActiveCode.vue";

import Dialog from "primevue/dialog";

export default {
  data() {
    return {
      countries: [],
      disabled: false,
      phone_email: "",
      phone: "",
      selectedCountry: null,
      otp: false,
      password: "",
      password_confirmation: "",
    };
  },
  watch: {
    // password() {
    //   if (this.password == this.password_confirmation) {
    //     this.disabled = false;
    //   } else {
    //     this.disabled = true;
    //   }
    // },
     password_confirmation(){
           
            this.showValid = true ;
        }
    },
  computed:{
        passwordMatch() {
            return this.password === this.password_confirmation;  
        }
    },
  mounted() {
    this.getCountries();

    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => localStorage.setItem("device_id", data.ip))
      .catch((error) => console.error(error));
  },

  methods: {
    // get countries
    async getCountries() {
      await axios.get("countries").then((res) => {
        this.countries = res.data.data;
      });
    },

    // login
    async login() {
      this.disabled = true;
      const fd = new FormData();
      fd.append("phone", sessionStorage.getItem("phone"));
      fd.append("country_key", sessionStorage.getItem("country_key"));
      fd.append("code", localStorage.getItem("code"));
      fd.append("password", this.password);

      await axios.post("user/reset-password", fd).then((res) => {
        if (res.data.key == "success") {
          this.$toast.add({
            severity: "success",
            summary: res.data.msg,
            life: 4000,
          });
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        } else {
          this.$toast.add({
            severity: "error",
            summary: res.data.msg,
            life: 4000,
          });
        }
        this.disabled = false;
      });
    },
  },
  components: {
    // ProgressSpinner,
    Toast,
    Dialog,
      activeCode,
    Password
  },
};
</script>

<style lang="scss" scoped>
:deep(.country_code .p-dropdown) {
  position: absolute;
  left: -199px !important;
  top: 34px !important;
  width: 85px;
  background: #f6f6f6 !important;
}
:deep(.country_code .p-dropdown .p-dropdown-trigger) {
  background: #f6f6f6 !important;
  color: #6b7280;
  width: 1rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
label {
  color: #000;
  font-size: 16px;
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
}
.login_image {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
.country_code .p-dropdown {
  position: absolute;
  left: 0;
  top: -71px;
  width: 85px;
}
.country_code .p-dropdown .p-dropdown-trigger {
  background: #f6f6f6;
  color: #6b7280;
  width: 1rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.br-5 {
  border-radius: 5px !important;
}
.auth {
  position: relative;
  background-image: url("@/assets/imgs/coffee1.webp");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow: hidden;
  .login_form {
    background-color: #fff;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    width: 38%;
    min-height: 100vh;
    .login_image {
      width: 250px;
      height: 200px;
    }
    h5 {
      color: #000;
    }
    .reg_issue {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 15px;
      .login_underLine {
        color: #346cf6 !important;
        text-decoration: underline !important;
      }
    }
  }
  .logo_image {
    position: absolute;
    top: 36%;
    left: 30%;
  }
  .circle {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    position: absolute;
    background-color: #d8c326aa;
    &.top_left_circle {
      top: -20%;
      left: -10%;
    }
    &.bottom_right_circle {
      bottom: -30%;
      right: 39%;
    }
  }
}

.p-inputtext {
  color: #4b5563;
  background: #f6f6f6;
  border: none;
  width: 400px;
  height: 55px;
  text-align: start;
}
.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > i:last-of-type {
  right: auto;
  left: 0.75rem;
}
.p-input-icon-right > .p-inputtext {
  padding-right: 0.75rem;
  padding-left: 2.5rem;
}
</style>
