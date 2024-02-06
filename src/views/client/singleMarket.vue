<template>
  <div class="home">
    <headerComponentVue />
    <marketsComponentVue />
    <singleMarketComponent />
    <downloadAppVue />
    <footerComponentVue />
  </div>
</template>

<script>
import headerComponentVue from '@/components/client/headerComponent.vue';
import downloadAppVue from '@/components/client/downloadApp.vue';
import footerComponentVue from '@/components/client/footerComponent.vue';
import singleMarketComponent from "@/components/client/singleMarketComponent.vue"
export default {
  name: 'HomeView',
  components: {
    headerComponentVue,
    downloadAppVue,
      footerComponentVue,
    singleMarketComponent
  }
}
</script>
