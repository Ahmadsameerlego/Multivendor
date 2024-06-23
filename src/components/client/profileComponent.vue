<template>
  <section id="register" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> {{  $t('profile.main')  }} </router-link>&nbsp; -
        &nbsp;
        <p class="active mainColor"> {{  $t('profile.profile')  }} </p>

        <section class="loginSection" style="width: 93%; margin: auto">
          <h3 class="fw-bold mb-3"> {{  $t('profile.profile')  }} </h3>
          <p class="registerParagraph fw-bold d-flex align-items-center">
            <span class="step flex_center">1</span>
            {{ $t('profile.edit') }}
          </p>

          <form @submit.prevent="login" ref="profileForm">

             <section class="profile_pic mx-auto d-flex">
                    <input type="file" name="image" @change="uploadProfilePic" class="uploadInput">
                    <!-- default image  -->
                    <img :src="profile_image" name="image" ref="profile" class="profile_image" alt="">
                    <!-- edit  -->
                    <span class="edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </span>
                </section>

        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="form-group mb-3 flex-column d-flex align-items-start">
              <label for=""> {{ $t('profile.firstName') }} </label>
              <InputText
                v-model="first_name"
                inputId="withoutgrouping"
                :useGrouping="false"
                :placeholder="$t('profile.firstDesc')"
              />
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="form-group mb-3 flex-column d-flex align-items-start">
              <label for=""> {{  $t('profile.lastName')  }} </label>
              <InputText
                v-model="last_name"
                inputId="withoutgrouping"
                :useGrouping="false"
                :placeholder="$t('profile.lastDesc')"
              />
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group mb-3 flex-column d-flex align-items-start position-relative">
              <label for=""> {{ $t('prfile.phone') }} </label>
              <InputText
                v-model="phone"
                inputId="withoutgrouping"
                :useGrouping="false"
                :placeholder="$t('profile.phoneDesc')"
              />
              <div class="country_code">
                <Dropdown
                  v-model="selectedCountry"
                  :options="countries"
                  optionLabel="code"
                  class="w-full md:w-14rem"
                />
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <div class="form-group mb-3 flex-column d-flex align-items-start">
              <label for=""> {{ $t('profile.email') }} </label>
              <InputText
                v-model="email"
                inputId="withoutgrouping"
                :useGrouping="false"
                :placeholder="$t('profile.emailDesc')"
              />
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="form-group d-flex position-relative flex-column d-flex align-items-start">
                            <label class="d-block" for=""> {{ $t('profile.address') }} </label>

              <InputText
                v-model="address"
                @focus="googleMap = true"
                type="text"
                class=""
                :placeholder="$t('profile.addressDesc')"
              />
            </div>
          </div>

        

          
        </div>

        <div class="flex_center mb-4">
          <button class="pt-3 br-5 pb-3 px-5 main_btn btn w-25" :disabled="disabled" >
            <span v-if="!disabled"> {{ $t('cart.confirm')  }} </span>
            <ProgressSpinner v-if="disabled" />

          </button>
        </div>
        <div class="flex_center mb-4">
          <router-link to="/changePassword" class="pt-3 br-5 pb-3 px-5 main_btn btn w-25 sec_btn"  >
            {{ $t('profile.changePassword') }}
          </router-link>
        </div>

        
      </form>
        </section>
      </div>
    </div>
  </section>

  <Toast />
  <!--  <sendOtp :openOtp="openOtp"/> -->


   <!-- google map modal  -->
  <Dialog v-model:visible="googleMap" modal :style="{ width: '50vw' }">
    <GMapMap
      :center="locations"
      :zoom="11"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
    >
      <GMapAutocomplete
        :placeholder="$t('profile.addressDesc')"
        @place_changed="onPlaceChanged"
      >
      </GMapAutocomplete>
      <GMapMarker
        :position="locations"
        :clickable="true"
        :draggable="true"
        @mouseover="onMarkerDragEnd($event)"
      />
    </GMapMap>
  </Dialog>
</template>

<script>
// import Password from "primevue/password";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";

import ProgressSpinner from 'primevue/progressspinner';
import axios from 'axios';
import Toast from 'primevue/toast';
// import moment from 'moment'
import Dialog from "primevue/dialog";

export default {
    data() {
        return{
          otp: false,
                countries: [],
          disabled: false,
          selectedCountry: {
            code :'00966'
          },
          phone: '',
          email: '',
          first_name: '',
          last_name: '',
          password: '',
          profile_image: '',
          address: "",
      googleMap: false,
      locations: {
        lat: 0,
        lng: 0,
      },
      currentLocation: {},
        }      
  },  
  methods: {
    // get current location
    geolocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locations = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    // get new value after dragged
    onMarkerDragEnd(event) {
      // get new lat lang value
      const newLat = event.latLng.lat();
      const newLng = event.latLng.lng();
      this.locations = {
        lat: newLat,
        lng: newLng,
      };

      // get format_address
      const latLng = event.latLng;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK") {
          this.address = results[0].formatted_address;
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    },

    onPlaceChanged(place) {
      if (place.geometry) {
        this.locations = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        this.address = place.formatted_address;
        this.updateLocations();
      }
    },

    // get countries 
    async getCountries() {
      await axios.get('countries')
        .then((res) => {
        this.countries = res.data.data
      } )
     },
     uploadProfilePic(e){
            const file = e.target.files[0];
            this.$refs.profile.src = URL.createObjectURL(file);

        },
     async getProfile() {
       await axios.get('user/show-profile', {
         headers: {
            Authorization :`Bearer ${localStorage.getItem('token')}`
          }
       })
         .then((res) => {
           if (res.data.key === 'success') {
             this.first_name = res.data.data.first_name;
             this.last_name = res.data.data.last_name;
             this.email = res.data.data.email;
             this.phone = res.data.data.phone.phone;
             this.selectedCountry.code = res.data.data.phone.country_key;
             this.profile_image = res.data.data.image;
             for (let i = 0; i < this.countries.length; i++){
               if (res.data.data.phone.country_key == this.countries[i].code) {
                  this.selectedCountry = this.countries[i]
                }
             }

             this.address  = res.data.data.address_data.address 
             this.locations.lat  = res.data.data.address_data.lat 
             this.locations.lng  = res.data.data.address_data.lng 
          }
        } )
    },
    // login 
    async login() {
      this.disabled = true;
      const fd = new FormData(this.$refs.profileForm)
      fd.append('first_name', this.first_name)
      fd.append('last_name', this.last_name)
      fd.append('phone', this.phone)
      fd.append('email', this.email)
      
      if (this.selectedCountry) {
                fd.append('country_key', this.selectedCountry.code)
        
      }
      // fd.append('device_type', 'web')
      // fd.append('device_id', localStorage.getItem('device_id'))

      await axios.post('user/update-profile', fd, {
        headers: {
          lang: 'ar',
                      Authorization :`Bearer ${localStorage.getItem('token')}`

        }
      })
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            // localStorage.setItem('user', JSON.stringify(res.data.data))
            // localStorage.setItem('token', res.data.data.token)
            // sessionStorage.setItem('phone', this.phone)
            // sessionStorage.setItem('country_key', this.selectedCountry.code)
            setTimeout(() => {
              this.otp = true;
            }, 2000);
          } else {
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }
             this.disabled = false ;

        }
        )

    },
    // update location 
    async updateLocations() {
      this.disabled = true;
      const fd = new FormData()
      fd.append('lat', this.locations.lat)
      fd.append('long', this.locations.lng)
      fd.append('address', this.address)

      // fd.append('device_type', 'web')
      // fd.append('device_id', localStorage.getItem('device_id'))

      await axios.post('user/update-location', fd, {
        headers: {
          lang: 'ar',
                      Authorization :`Bearer ${localStorage.getItem('token')}`

        }
      })
        .then((res) => {
          if (res.data.key == 'success') {
            this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            
          } else {
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
          }

        }
        )

    },
  },
   mounted() {
    this.getCountries()
     this.getProfile();

    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => localStorage.setItem('device_id', data.ip))
       .catch(error => console.error(error));

      //  setTimeout(() => {
      //   document.querySelector('.p-dropdown-label').innerHTML = this.selectedCountry.code
      //  }, 1000);
  },

  components: {
    // Password,
    Dropdown,
    InputText,
    ProgressSpinner,
    Toast,
    Dialog
  },
};
</script>

<style scoped lang="scss">
.profile_pic{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: relative;
  .uploadInput{
    position: absolute;
    top : 0;
    right:0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
:deep(.p-inputtext){
  width: 100% !important;
}
:deep(.p-dropdown){
      background: #f6f6f6 !important;
}
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
