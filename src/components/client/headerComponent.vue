<template>
  <div>
    <div class="header">
      <div class="container px-m-0 mobile-header">
        <div
          class="nav-bar navbar-expand-sm d-flex justify-content-between align-items-baseline"
        >
          <router-link to="/" class="decoration-none">
            <div class="logo">
              <img :src="require('@/assets/imgs/logo.png')" alt="" />
            </div>
          </router-link>
          <div class="language-switcher d-sm-none d-block">
            <li class="kEkINZ d-sm-block px-2">
              <a
                data-testid="switch-language-link"
                href="/egypt"
                class="jYUbJg ltr"
                >English</a
              >
            </li>
          </div>

          <div class="country-switcher d-sm-none d-block">
            <div data-testid="country-switcher" class="sc-891c0653-0 eZWmLF">
              <div class="sc-891c0653-2 kOeoCR">
                <a
                  aria-label="country-switcher"
                  href="#"
                  class="country-link px-m-4 py-m-2 px-3 nav-link"
                  role="button"
                  ><span class="flag flag-eg"></span
                ></a>
              </div>
            </div>
          </div>
          <div class="nav-menu">
            <ul class="navbar-nav d-none d-sm-flex">
              <li class="nav-item kEkINZ pa-m-0 offers-li px-sm">
                <router-link class="jYUbJg pa-m-10 f-m-14" to="/markets">
                  {{  $t('nav.stores')  }}
                </router-link>
              </li>
              <li class="nav-item kEkINZ pa-m-0 offers-li px-sm">
                <router-link class="jYUbJg pa-m-10 f-m-14" to="reserve"
                  >
                  {{ $t('nav.reserve') }}
                </router-link>
              </li>
              <li class="nav-item kEkINZ pa-m-0 become-partner-li px-sm">
                <router-link
                  rel="noreferrer"
                  class="jYUbJg pa-m-10 f-m-14"
                  to="/offers"
                  >
                  {{  $t('nav.offers')  }}
                </router-link>
              </li>
               <li class="nav-item kEkINZ pa-m-0 become-partner-li px-sm">
                <router-link
                  rel="noreferrer"
                  class="jYUbJg pa-m-10 f-m-14"
                  to="/partener"
                  >
                        {{  $t('nav.join_partener')  }}
                </router-link>
              </li>


           
                
              <!-- <li class="nav-item kEkINZ d-sm-block px-2">
                <a
                  data-testid="switch-language-link"
                  href="/egypt"
                  class="jYUbJg ltr"
                  >English</a
                >
              </li> -->
              <li class="nav-item kEkINZ d-sm-block px-2">
                <!-- lang  -->
                <button class="lang flex_center mx-2" @click="switchLang"> 
                    <span v-if="$i18n.locale=='en'" >AR</span>
                    <span v-else-if="$i18n.locale=='ar'" >EN</span> 
                    <i class="fa-solid fa-globe mx-2"></i>
                </button>
              </li>

               <li class="nav-item kEkINZ d-sm-block px-2" v-if="isAuthed">
                <router-link
                  to="/cart"
                  class="cart position-relative"
                  >
                  <span class="cart_numer" >  {{cart}}</span>
                  <i class="fa-solid fa-cart-shopping"></i>
                  </router-link
                >
              </li>
               <li class="nav-item kEkINZ d-sm-block px-2" v-if="isAuthed">
                <router-link
                  to="/notification"
                  class="cart"
                  >
<i class="fa-solid fa-bell"></i>                  </router-link
                >
              </li>
              
              <li class="nav-item kEkINZ">
                <div
                  data-testid="country-switcher"
                  class="sc-891c0653-0 eZWmLF"
                >
                  <div class="sc-891c0653-2 kOeoCR">
                    <a
                      aria-label="country-switcher"
                      href="#"
                      class="country-link px-m-4 py-m-2 px-3 nav-link"
                      role="button"
                      ><span class="flag flag-eg"></span
                    ></a>
                  </div>
                </div>
              </li>
              <li class="kEkINZ pa-m-0 px-2" v-if="!isAuthed">
                <router-link
                  to="/login"
                  type="button"
                  class="btn btn-login f-m-14 pa-m-10"
                  data-testid="login"
                >
                  {{ $t('nav.login') }}
                </router-link>
              </li>


                 <div class="dropdown profile br-5"  >
            <button
              class="btn dropdown-toggle  br-5 pt-2 pb-2 main_btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
              <span class="name"> {{ currentCountry.name }}</span>

              <!-- <i class="fa-regular fa-user user_profile"></i> -->
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="mb-3" v-for="country in countries" :key="country.id">
                <button
                  class="dropdown-item d-flex justify-content-start align-items-center"
                  @click="chageCountry(country)"
                > 
                  <span class="mx-2 fw-6"> {{  country.name  }} </span>
                </button>
              </li>
            </ul>
                </div>

               <div class="dropdown profile br-5 mx-3" v-if="isAuthed">
            <button
              class="btn dropdown-toggle px-4 br-5 pt-2 pb-2 main_btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                :src="
                  image
                "
                class="mx-2 imoji"
                width="30"
                height="30"
                alt=""
              />
              <span class="name">{{  $t('nav.welcome')  }} {{ username }}</span>

              <!-- <i class="fa-regular fa-user user_profile"></i> -->
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="mb-3">
                <router-link
                  class="dropdown-item d-flex justify-content-start align-items-center"
                  to="/profile"
                >
                  <span class="profile_icon flex_center">
                    <i class="fa-solid fa-user-pen"></i>
                  </span>
                  <span class="mx-2 fw-6"> {{ $t('nav.profile') }} </span>
                </router-link>
              </li>

              <li class="mb-3">
                <router-link
                  class="dropdown-item d-flex justify-content-start align-items-center"
                  to="/orders"
                >
                  <span class="profile_icon flex_center">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </span>
                  <span class="mx-2 fw-6"> {{  $t('nav.orders')  }}  </span>
                </router-link>
              </li>
              <li class="mb-3">
                <router-link
                  class="dropdown-item d-flex justify-content-start align-items-center"
                  to="/reservations"
                >
                  <span class="profile_icon flex_center">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </span>
                  <span class="mx-2 fw-6"> {{  $t('nav.rerserve')  }} </span>
                </router-link>
              </li>

              <li class="mb-3">
                <button
                  class="dropdown-item d-flex justify-content-start align-items-center"
                  @click.prevent="signOut"
                >
                  <span class="profile_icon logout flex_center">
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </span>
                  <span class="mx-2 fw-6"> {{  $t('nav.logout')  }} </span>
                </button>
              </li>
              <li class="mb-3">
                <button
                  class="dropdown-item d-flex justify-content-start align-items-center"
                  @click.prevent="deleteAccount"
                >
                  <span class="profile_icon logout flex_center text-danger">
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </span>
                  <span class="mx-2 fw-6 text-danger"> {{  $t('nav.delete')  }} </span>
                </button>
              </li>
            </ul>
                </div>
            </ul>

            <button class="btn toggleNabBtn dropdown profile " style="color:#fff" @click="toggleNav">
              <i class="fa-solid fa-bars-staggered"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Toast />
</template>

<script>
import axios from 'axios';
import Toast from 'primevue/toast';
import { mapState } from 'vuex';
export default {
  name: "MultivendorHeaderComponent",

  data() {
    return {
      isAuthed: false,
      username: '',
      image: '',
      country: '',
      countries: [],
      country_id: '',
      country_name : 'السعودية'
    };
  },
  methods: {
    chageCountry(country) {
      // this.country_id = country.id;
      // this.country_name = country.name;


      // localStorage.setItem('country_name', country.name)
      // localStorage.setItem('country_id', country.id)

      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
      this.$store.dispatch('changeCountry', country);


    },
    switchLang(){
            let lang = 'ar';
            if(this.$i18n.locale == 'ar'){
                lang = 'en';
                this.arabic = false;
            }

            if(localStorage.getItem('locale')){
                localStorage.removeItem('locale');
            }

            localStorage.setItem('locale' ,lang);
            this.arabic = true;

            location.reload()
    },
        
    toggleNav() {
      document.querySelector('.navbar-nav').classList.toggle('active')
    },
      // sign out
        async signOut(){
            const token = localStorage.getItem('token');
            // const token = JSON.parse(localStorage.getItem('user'))[0].token;
            const headers = {
              Authorization: `Bearer ${token}`,
                lang : 'ar'
          };
            const fd = new FormData()
            await axios.post(`user/logout?device_id=test00&device_type=web`, fd ,{headers})
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    setTimeout(() => {
                        this.$router.push('/login')
                    }, 1000);
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                }
            } )
        },
      // sign out
        async deleteAccount(){
            const token = localStorage.getItem('token');
            // const token = JSON.parse(localStorage.getItem('user'))[0].token;
            const headers = {
              Authorization: `Bearer ${token}`,
                lang : 'ar'
          };
          const fd = new FormData()
            fd.append('device_id' , 'test')
            fd.append('device_type' , 'web')
            await axios.post(`user/delete-account`, fd ,{headers})
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
                    setTimeout(() => {
                        this.$router.push('/login')
                    }, 1000);
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                }else{
                    this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
                }
            } )
    },

     async getCountries() {
       await axios.get('countries', {
         headers: {
          lang : 'ar'
        }
      })
        .then((res) => {
        this.countries = res.data.data
      } )
    },
  },
  components: {
    Toast
  },
  computed: {
    ...mapState({
      cart: state => state.cart
    }),

        currentCountry() {
      return this.$store.state.country;
    }

  },
  mounted() {
    this.getCountries()
    if( localStorage.getItem('token') ){
      this.isAuthed = true;
        
        }
        if( localStorage.getItem('user') ){
          this.username = JSON.parse(localStorage.getItem('user')).first_name;
          // localStorage.setItem('country_id', JSON.parse(localStorage.getItem('user')).country.id);
          // localStorage.setItem('country_name', JSON.parse(localStorage.getItem('user')).country.name);
          //   this.country_id = localStorage.getItem('country_id') ;
          //   this.country_name = localStorage.getItem('country_name') ;
            this.image = JSON.parse(localStorage.getItem('user')).image ;
    }
   
  },

};
</script>

<style lang="scss" scoped>
.cart_numer{
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #f10f0f;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    left: -5px;
    top: -5px;
}
 .lang{
                background-color: transparent;
                color:#fff ;
                border: none;
                font-weight: bold;

            }
.header {
  background: #734b21;
  padding-top: 5px;
  padding-bottom: 5px;
}
.logo {
  width: 150px;
  height: 90px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.nav-item {
  a {
    color: #fff;
    text-decoration: none !important;
    font-size: 16px;
    margin: 0 14px;
    font-weight: 600;
  }
  svg{
    font-size: 25px !important;
  }
}
.btn-login {
  color: #fff;
  border: 1px solid #fff;
}

.dropdown-menu {
  border: none !important;
  box-shadow: 0px 0px 10px #33333346;
}
.dropdown {
  &.profile {
    button.dropdown-toggle {
    background-color: #734b21 !important;
    color: #fff;
    border: 1px solid #fff;
    }
  }
}
</style>
