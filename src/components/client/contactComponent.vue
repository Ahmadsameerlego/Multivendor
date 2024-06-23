<template>
  <section id="orders" class="mt-4">
    <div class="container">
      <!-- breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية</router-link>&nbsp; -
        &nbsp;
        <p class="active mainColor">تواصل معنا</p>
      </div>

      <!-- content  -->
      <section>
        <h5 class="fw-bold red mb-3">لا تتردد في التواصل معنا</h5>

       <form class="flex flex-wrap gap-3 p-fluid" @submit.prevent="sendMessage">
        <div class="row align-items-center">
          <div class="col-md-6 mb-2">
            <div class="row">
              <div class="col-md-12 mb-2">
                <!-- user name  -->
                <div class="position-relative flex-auto">
                  <label
                    for="integeronly"
                    class="label text-end fw-bold d-block mb-2 fs-13"
                  >
                    اسم المستخدم</label
                  >
                   <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    placeholder="اسم المستخدم"
                  />
                  <!-- icon  -->
                  <!-- <div class="inputIcon">
                    <img :src="require('@/assets/imgs/user.svg')" alt="" />
                  </div> -->
                </div>
              </div>

              <div class="col-md-12 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label
                    for="integeronly"
                    class="label fw-bold text-end d-block mb-2 fs-13"
                    >رقم الجوال</label
                  >
                  <!-- <InputNumber v-model="phone" class="defaultInput" inputId="integeronly" :placeholder="$t('auth.phonePlc')" /> -->
                  <input
                    type="number"
                    class="form-control"
                    v-model="phone"
                    placeholder="رقم الجوال"
                  />

                  <!-- icon  -->
                  <!-- <div class="inputIcon">
                    <img :src="require('@/assets/imgs/phone.svg')" alt="" />
                  </div> -->

                  <!-- select phone  -->
                  <!-- <Dropdown
                    v-model="selectedCity"
                    optionLabel="key"
                    class="w-full md:w-14rem"
                    @change="chooseCountry"
                  /> -->
                </div>
              </div>

              <div class="col-md-12 mb-2">
                <!-- user name  -->
                <div class="position-relative flex-auto">
                  <label
                    for="integeronly"
                    class="label fw-bold text-end d-block mb-2 fs-13"
                    >الرسالة
                  </label>
                 <textarea name="" v-model="complaint" class="form-control" id="" cols="30" rows="5"></textarea>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <button
                class="main_btn w-75 mx-auto pt-3 pb-3 fs-15"
                :disabled="disabled"
              >
                <span v-if="!disabled">ارسال </span>
                <div class="spinner-border mx-2" role="status" v-if="disabled">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            </div>
          </div>

          <div class="col-md-6 mb-2">
            <div class="job_image">
              <img
                class="w-100 h-100 lazy"
                :src="require('@/assets/imgs/logo.png')"
                alt="contact canvas"
              />
            </div>
          </div>
        </div>
      </form>
      </section>
    </div>
    <Toast />
  </section>
</template>

<script>
// import InputText from "primevue/inputtext";
// import InputNumber from 'primevue/inputnumber';
// import Dropdown from "primevue/dropdown";
// import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import axios from "axios";
// import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      selectedCity: {
        id: 1,
        name: "السعودية",
        key: "+966",
      },
      disabled: false,
      user_name: null,
      phone: null,
      complaint: null,
    };
  },
  components: {
    // InputText,
    // // InputNumber,
    // // Dropdown,
    // Textarea,
    Toast,
  },
  // computed:{
  //     ...mapState(["common"])
  // },
  methods:{
  //   ...mapActions('common',['getCountries']),

    async sendMessage(){
      this.disabled = true ;
      const fd = new FormData();
      fd.append('phone', this.phone);
      fd.append('name', this.user_name);
      fd.append('message', this.complaint);
    //   fd.append('country_code', this.selectedCity.key.replace(/\+/g, ''));

      await axios.post('user/contact-us', fd, {
        headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              lang : 'ar'
        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
           this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
          this.disabled = false ;
        //   setTimeout(() => {
        //       this.open = false ;
        //   }, 3000);

          this.phone = null ;
          this.complaint = null ;
          this.user_name = null ;
          } else {
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
          this.disabled = false ;

        }
      } )
      // // const res = await this.$store.dispatch('logic/sendCompaint', fd)
      // if( res.success == true ){
         
      // }else{
      // }
    },

  //   chooseCountry(){
  //         document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
  //     },
  },

  // mounted(){
  //     document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
  //     this.getCountries()
  // }
};
</script>
<style lang="scss"></style>
