<template>
  <section class="auth">
    <section class="login_form flex_center flex-column">
      <!-- login image  -->
      <div class="login_image mb-4" style="width: 150px; height: 150px">
        <img src="@/assets/imgs/coffee1.webp" alt="" />
      </div>

      <h5 class="fw-bold mb-3 mainColor">مرحبا بك</h5>

      <!-- <div class="reg_issue">
        <span>
          هل تواجه مشكلة بالتسجيل ؟
          <router-link to="/" class="login_underLine"> ارسل لنا </router-link>
        </span>
      </div> -->

      <form ref="loginForm" @submit.prevent="login">
        <div class="form-group mb-3 flex-column d-flex align-items-start">
          <label for=""> رقم الجوال او الايميل  </label>
          <InputText
            v-model="phone_email"
            inputId="withoutgrouping"
            :useGrouping="false"
            placeholder="يرجى ادخال رقم الجوال او الايميل"
            
          />
          <div class="country_code">
            <Dropdown
              v-model="selectedCity"
              :options="cities"
              optionLabel="name"
              placeholder="اختر المدينة"
              class="w-full md:w-14rem"
            />
          </div>
        </div>
        <div
          class="form-group position-relative flex-column d-flex align-items-start"
        >
          <label for=""> كملة المرور </label>
          <Password
            v-model="password"
            :feedback="false"
            class=""
            toggleMask
            placeholder="يرجى ادخال كملة المرور هنا"
          />
        </div>

        <div class="d-flex justify-content-end align-items-end mt-3">
          <router-link to="/forgetPassword" class="fs-16">
              هل نسيت كلمة المرور ؟ 
          </router-link>
        </div>

        <!-- <div class="flex_end mt-3 mb-4">
          <router-link to="/" class="forget_password fs-16">
            نسيت كملة المرور ؟
          </router-link>
        </div> -->

        <div class="flex_center mb-4 mt-4">
          <button class="pt-3 br-5 pb-3 px-5 main_btn  w-100" :disabled="disabled">
            <span v-if="!disabled">تسجيل الدخول</span>
                    <div class="spinner-border mx-2" role="status" v-if="disabled">
                        <span class="visually-hidden">Loading...</span>
                    </div>
          </button>
        </div>

        <div class="flex_center">
          <span class="fs-18 reg_issue">
            تسجيل جديد !
            <router-link to="/register" class="login_underLine">
              التسجيل الان
            </router-link>
          </span>
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
</template>

<script>
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
// import ProgressSpinner from 'primevue/progressspinner';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
   data() {
    return {
      countries: [],
      disabled: false,
      password: '',
      phone_email : ''
    };
  },

  mounted() {
    this.getCountries()
    
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => localStorage.setItem('device_id', data.ip))
    .catch(error => console.error(error));
  },

  methods: {
    // get countries 
    async getCountries() {
      await axios.get('countries')
        .then((res) => {
        this.countries = res.data.data
      } )
    },

    // login 
    async login() {
      this.disabled = true;
      const fd = new FormData()
      fd.append('phone_email', this.phone_email)
      fd.append('password', this.password)
      fd.append('device_type', 'web')
      fd.append('device_id', localStorage.getItem('device_id'))

      await axios.post('user/login', fd, {
        headers: {
          lang : 'ar'
        }
      })
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            localStorage.setItem('user', JSON.stringify(res.data.data))
            localStorage.setItem('token', res.data.data.token)
            setTimeout(() => {
              this.$router.push('/')
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
    Password,
    InputText,
    Dropdown,
    Toast
  },
};
</script>

<style lang="scss">
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
