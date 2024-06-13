<template>
  <section id="register" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية </router-link>&nbsp; -
        &nbsp;
        <p class="active mainColor">الملف الشخصي</p>

        <section class="loginSection" style="width: 93%; margin: auto">
          <h3 class="fw-bold mb-3">الملف الشخصي</h3>
          <p class="registerParagraph fw-bold d-flex align-items-center">
            <span class="step flex_center">1</span>
            يمكنك تعديل بياناتك من هنا
          </p>

          <form
            class="flex flex-wrap gap-3 p-fluid mt-4"
            ref="registerForm"
            @submit.prevent="register"
          >
            <div class="profile_image mx-auto d-flex position-relative mb-3">
              <img :src="image" alt="" />
              <input type="file" name="image" class="image" @change="updateProfileImage" />
            </div>
            <div class="row">
              <div class="col-md-6 mb-2">
                <!-- user name  -->
                <div class="position-relative flex-auto">
                  <label for="integeronly" class="label fw-bold block mb-2">
                    اسم الطالب
                  </label>
                  <InputText
                    type="text"
                    class="defaultInput2"
                    v-model="name"
                    name="name"
                    placeholder="الرجاء ادخال اسم الطالب"
                  />
                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/user.svg')" alt="" />
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >رقم الجوال
                  </label>
                  <input
                    type="text"
                    class="form-control defaultInput"
                    name="phone"
                    placeholder="الرجاء ادخال رقم الجوال"
                    v-model="phone"
                  />

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/phone.svg')" alt="" />
                  </div>

                  <!-- select phone  -->
                </div>
                <div>
                  <span v-if="phoneValid" class="text-danger">
                    يجب ان يكون رقم الهاتف بين ٩ او ١٠ ارقام
                  </span>
                </div>
              </div>

              <div class="col-md-6 mb-5">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >المحافظة
                  </label>
                  <!-- select phone  -->
                  <Dropdown
                    v-model="selectedRegion"
                    :options="regions"
                    optionLabel="name"
                    class="w-100 md:w-14rem"
                    @change="getRegionId"
                  />
                </div>
              </div>
              <div class="col-md-6 mb-5">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >المدينة
                  </label>
                  <!-- select phone  -->
                  <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    optionLabel="name"
                    class="w-100 md:w-14rem"
                  />
                </div>
              </div>

              <div class="col-md-6 mb-2 mt-3">
                <!-- user name  -->
                <div class="position-relative flex-auto">
                  <label for="integeronly" class="label fw-bold block mb-2">
                    العنوان
                  </label>
                  <InputText
                    type="text"
                    class="defaultInput2"
                    v-model="address"
                    name="address"
                    placeholder="الرجاء ادخال العنوان"
                  />
                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/user.svg')" alt="" />
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-2 mt-3">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >تاريخ الميلاد
                  </label>
                  <!-- select phone  -->
                  <Calendar v-model="date" />
                </div>
              </div>

              <div class="col-md-6 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >يرجى تحديد النوع
                  </label>
                  <!-- select phone  -->
                  <div
                    class="flex flex-wrap gap-3 d-flex justify-content-between"
                  >
                    <div class="flex align-items-center">
                      <RadioButton
                        v-model="gender"
                        inputId="birth_date1"
                        name="pizza"
                        value="male"
                      />
                      <label for="ingredient1" class="mx-2">ذكر</label>
                    </div>
                    <div class="flex align-items-center">
                      <RadioButton
                        v-model="gender"
                        inputId="birth_date2"
                        name="pizza"
                        value="female"
                      />
                      <label for="ingredient2" class="mx-2">انثي</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <button class="main_btn w-50 mx-auto flex_center pt-3 pb-3 fs-5">
                <span v-if="!spinner">حفظ البيانات</span>
                <div class="spinner-border mx-2" role="status" v-if="spinner">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            </div>

            <!-- new account  -->
          </form>
        </section>
      </div>
    </div>
  </section>

  <Toast />
  <!--  <sendOtp :openOtp="openOtp"/> -->
</template>

<script>
import axios from "axios";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import RadioButton from "primevue/radiobutton";
import Toast from "primevue/toast";
import moment from 'moment'

export default {
  data() {
    return {
      name: "",
      image: "",
      phone: "",
      address: "",
      countries: [],
      disabled: true,
      spinner: false,
      openOtp: false,
      is_conditions: null,
      years: [
        {
          id: 1,
          name: "الاول الثانوي",
        },
        {
          id: 2,
          name: "الثاني الثانوي",
        },
        {
          id: 3,
          name: "الثالث الثانوي",
        },
      ],
      regions: [],
      selectedRegion: null,
      regionID: null,
      cities: [],
      selectedCity: null,
      cityID: "",
      gender: null,
      date: "",
    };
  },
  computed: {
    formatedDate() {
        return moment(this.date).format('MMMM Do YYYY')
      }
  },
  methods: {
    async getRegion() {
      await axios.get("regions").then((res) => {
        this.regions = res.data.data.regions;
      });
    },
    getRegionId() {
      this.regionID = this.selectedRegion.id;
      this.getCities();
    },
    async getCities() {
      await axios.get(`region/${this.regionID}/cities`).then((res) => {
        this.cities = res.data.data.cities;
      });
    },
    async getAllCities() {
      await axios.get(`cities`).then((res) => {
        this.cities = res.data.data.cities;
      });
    },
    updateProfileImage(event) {
      const file = event.target.files[0];
      if (file) {
        // Read the file as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    // get user data
    async getProfile() {
      await axios
        .get("profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.key == "success") {
            let user = res.data.data.user;
            this.phone = user.phone;
            this.name = user.name;
            this.address = user.address;
            this.regionID = user.region_id;
            this.date =  moment(user.birth_date).format('MMMM Do YYYY');
            this.gender = user.gender;
            this.image = user.image;
            for (let i = 0; i < this.regions.length; i++) {
              if (this.regions[i].id == user.region_id) {
                this.selectedRegion = this.regions[i];
              }
            }
            this.cityID = user.city_id;
            for (let i = 0; i < this.cities.length; i++) {
              if (this.cities[i].id == user.city_id) {
                this.selectedCity = this.cities[i];
              }
            }
          }
        });
    },
    // register function
    async register() {
      this.disabled = true;
      this.spinner = true;
      const fd = new FormData(this.$refs.registerForm);
        fd.append('name', this.name)
        fd.append('phone', this.phone)
        fd.append('address', this.address)
        fd.append('birth_date', this.date)
        if (this.selectedRegion !== null) {
          fd.append('region_id', this.selectedRegion.id)
        }
        if (this.selectedCity != null) {
          fd.append('city_id', this.selectedCity.id)
        }
        fd.append('gender', this.gender)
      try {
        await axios.post('update-profile?_method=put', fd ,{
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
          this.disabled = false;
          this.spinner = false;
        } else {
          this.$toast.add({
            severity: "error",
            summary: res.data.msg,
            life: 3000,
          });
          this.disabled = false;
          this.spinner = false;
        }    
        } )
        
      } catch (err) {
        console.error(err);
      }
    },
  },
  components: {
    InputText,
    // InputNumber,
    Dropdown,
    // Password,
    Toast,
    RadioButton,
    Calendar,
    // sendOtp
  },
  mounted() {
    this.getRegion();
    this.getProfile();
    this.getAllCities();
  },
  //   created(){
  //     this.getCountries();
  //   }
};
</script>

<style scoped lang="scss">
.profile_image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .image{
    position: absolute;
    widows: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 50%;
    opacity: 0;
  }
}
.p-dropdown {
  position: absolute !important;
  width: 25%;
  top: 32px !important;
}
.checkCondition {
  accent-color: #2a3255;
  width: 16px;
  height: 16px;
}
</style>

<style lang="scss">
.registerParagraph {
  position: relative;
  font-size: 17px !important;
  .step {
    width: 35px;
    height: 35px;
    margin-left: 9px;
    background-color: #feede7;
    border-radius: 50%;
    border: 1px solid #e57d61;
    color: #e57d61;
    font-size: 21px !important;
  }
}
</style>
