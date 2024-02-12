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

      <form>
        <div class="form-group mb-3 flex-column d-flex align-items-start">
          <label for=""> رقم الجوال </label>
          <InputNumber
            v-model="value2"
            inputId="withoutgrouping"
            :useGrouping="false"
            placeholder="يرجى ادخال رقم الجوال"
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
            v-model="value"
            :feedback="false"
            class=""
            toggleMask
            placeholder="يرجى ادخال كملة المرور هنا"
          />
        </div>

        <!-- <div class="flex_end mt-3 mb-4">
          <router-link to="/" class="forget_password fs-16">
            نسيت كملة المرور ؟
          </router-link>
        </div> -->

        <div class="flex_center mb-4 mt-4">
          <button class="pt-3 br-5 pb-3 px-5 main_btn btn w-100">
            تسجيل الدخول
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
</template>

<script>
import Password from "primevue/password";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";

export default {
  components: {
    Password,
    InputNumber,
    Dropdown,
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
