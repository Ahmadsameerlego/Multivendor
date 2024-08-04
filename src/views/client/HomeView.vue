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
      categories: [],
        country_id : ''
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
      await axios.get(`user/home?lat=${localStorage.getItem('lat')}&long=${localStorage.getItem('lng')}&country_id=${this.currentCountry.id}`)
        .then((res) => {
          this.categories = res.data.data.categories;
          this.ads = res.data.data.ads;
          this.cities = res.data.data.cities;
      } )
    }
  },
   watch: {
    countryId(newId, oldId) {
      // This function will run whenever the country id changes
       this.getHome();
      console.log(newId , oldId)
    }

  },
    computed: {
    currentCountry() {
      return this.$store.state.country;
      },
    countryId() {
      return this.$store.state.country.id;
    }

  },
  mounted() {
    this.getHome();
    // if (localStorage.getItem('token') ) {
    //   this.country_id = JSON.parse(localStorage.getItem('user')).country.id
    // }
    // else {
    //   this.country_id = 12
    // }
  }
}
</script>
