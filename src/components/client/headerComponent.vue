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
                  متاجرنا
                </router-link>
              </li>
              <li class="nav-item kEkINZ pa-m-0 offers-li px-sm">
                <router-link class="jYUbJg pa-m-10 f-m-14" to="reserve"
                  >حجز المقاعد
                </router-link>
              </li>
              <li class="nav-item kEkINZ pa-m-0 become-partner-li px-sm">
                <router-link
                  rel="noreferrer"
                  class="jYUbJg pa-m-10 f-m-14"
                  to="/offers"
                  >العروض والخصومات
                </router-link>
              </li>
              <li class="nav-item kEkINZ d-sm-block px-2">
                <a
                  data-testid="switch-language-link"
                  href="/egypt"
                  class="jYUbJg ltr"
                  >English</a
                >
              </li>

               <li class="nav-item kEkINZ d-sm-block px-2" v-if="isAuthed">
                <router-link
                  to="/cart"
                  class="cart"
                  >
                  <i class="fa-solid fa-cart-shopping"></i>
                  </router-link
                >
              </li>
               <li class="nav-item kEkINZ d-sm-block px-2" v-if="isAuthed">
                <router-link
                  to="/cart"
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
                  تسجيل الدخول
                </router-link>
              </li>
               <div class="dropdown profile br-5" v-if="isAuthed">
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
              <span class="name">اهلا {{ username }}</span>

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
                  <span class="mx-2 fw-6"> الملف الشخصي </span>
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
                  <span class="mx-2 fw-6"> طلباتك </span>
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
                  <span class="mx-2 fw-6"> تسجيل الخروج </span>
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
</template>

<script>
export default {
  name: "MultivendorHeaderComponent",

  data() {
    return {
      isAuthed: false,
      username: '',
      image : ''
    };
  },
  methods: {
    toggleNav() {
      document.querySelector('.navbar-nav').classList.toggle('active')
    }
  },
  mounted() {
    if( localStorage.getItem('token') ){
            this.isAuthed = true ;
        }
        if( localStorage.getItem('user') ){
            this.username = JSON.parse(localStorage.getItem('user')).first_name ;
            this.image = JSON.parse(localStorage.getItem('user')).image ;
        }
  },

};
</script>

<style lang="scss" scoped>
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
