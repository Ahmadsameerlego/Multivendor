<template>
  <div>
    <div class="header">
      <div class="container px-m-0 mobile-header">
        <div
          class="nav-bar navbar-expand-sm d-flex justify-content-between align-items-center"
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
              <!-- <li>
                <select
                  name=""
                  id=""
                  style="
                    background-color: transparent;
                    border: none;
                    color: #fff;
                  "
                >
                  <option value="">اختر العملة</option>
                  <option value="">SAR</option>
                  <option value="">USA</option>
                  <option value="">EG</option>
                </select>
              </li> -->
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
              <li class="kEkINZ pa-m-0 px-2">
                <button
                  type="button"
                  class="btn btn-login f-m-14 pa-m-10"
                  data-testid="login"
                >
                  تسجيل الدخول
                </button>
              </li>
            </ul>

            <ul class="navbar-nav px-m-8 d-flex d-sm-none mobile-menu">
              <li class="kEkINZ pa-m-0 home-li">
                <a
                  rel="noreferrer"
                  href="#"
                  class="jYUbJg pa-m-2 f-m-14 d-block d-sm-none"
                  >الصفحة الرئيسية</a
                >
              </li>
              <li class="kEkINZ pa-m-0 login-li">
                <a rel="noreferrer" class="jYUbJg pa-m-2 f-m-14"
                  >تسجيل الدخول</a
                >
              </li>
              <li class="kEkINZ pa-m-0 contact-li d-block d-sm-none">
                <a rel="noreferrer" href="#" class="jYUbJg pa-m-2 f-m-14"
                  >إتصل بنا</a
                >
              </li>
              <li class="kEkINZ pa-m-0">
                <div>
                  <a
                    rel="noreferrer"
                    href="#"
                    data-testid="restaurants"
                    class="jYUbJg pa-m-2 f-m-14"
                    >جميع المطاعم</a
                  >
                </div>
              </li>
              <li class="kEkINZ pa-m-0 become-partner-li">
                <div>
                  <a
                    rel="noreferrer"
                    href="https://eg.partner.talabat.com/s/?language=ar"
                    target="_blank"
                    class="jYUbJg pa-m-2 f-m-14"
                    >انضم كشريك</a
                  >
                </div>
              </li>
              <li class="kEkINZ pa-m-0 offers-li">
                <a
                  href="/ar/egypt/donations"
                  class="jYUbJg pa-m-2 f-m-14"
                  data-testid="donations"
                  >التبرعات</a
                >
              </li>
              <li class="kEkINZ pa-m-0 offers-li">
                <a
                  rel="noreferrer"
                  href="#"
                  data-testid="offers"
                  class="jYUbJg pa-m-2 f-m-14"
                  >عروض المطاعم</a
                >
              </li>
            </ul>
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
    return {};
  },

  mounted() {},

  methods: {},
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
</style>
