<template>
  <div class="home">
    <headerComponentVue />
    <LocationComponentVue />
    <categoriesComponentVue :categories="categories"/>
    <offersComponentVue :ads="ads" />
    <branchesComponentVue  :cities="cities"/>
    <downloadAppVue />
    <footerComponentVue />
  </div>
</template>

<script>
import headerComponentVue from '@/components/client/headerComponent.vue';
import LocationComponentVue from '@/components/client/LocationComponent.vue';
import categoriesComponentVue from '@/components/client/categoriesComponent.vue';
import offersComponentVue from '@/components/client/offersComponent.vue';
import branchesComponentVue from '@/components/client/branchesComponent.vue';
import downloadAppVue from '@/components/client/downloadApp.vue';
import footerComponentVue from '@/components/client/footerComponent.vue';
import axios from 'axios';
export default {
  name: 'HomeView',
  data() {
    return {
      cities: [],
      ads: [],
        categories : []
      }
  },
  components: {
    headerComponentVue,
    LocationComponentVue,
    categoriesComponentVue,
    offersComponentVue,
    branchesComponentVue,
    downloadAppVue,
    footerComponentVue
  },
  methods: {
    async getHome() {
      await axios.get('user/home')
        .then((res) => {
          this.categories = res.data.data.categories;
          this.ads = res.data.data.ads;
          this.cities = res.data.data.cities;
      } )
    }
  },
  mounted() {
    this.getHome();
  }
}
</script>
