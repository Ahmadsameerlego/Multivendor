<template>
  <div class="home">
    <headerComponentVue />
    <LocationComponentVue />
    <categoriesComponentVue />
    <offersComponentVue />
    <branchesComponentVue />
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
export default {
  name: 'HomeView',
  components: {
    headerComponentVue,
    LocationComponentVue,
    categoriesComponentVue,
    offersComponentVue,
    branchesComponentVue,
    downloadAppVue,
    footerComponentVue
  }
}
</script>
