<template>
  <div class="home">
    <headerComponentVue />
    <reserveMarketsVue />
    <footerComponentVue />
  </div>
</template>

<script>
import headerComponentVue from '@/components/client/headerComponent.vue';
import footerComponentVue from '@/components/client/footerComponent.vue';
import reserveMarketsVue from '@/components/client/reserveMarkets.vue';
export default {
  name: 'HomeView',
  components: {
    headerComponentVue,
    footerComponentVue,
      reserveMarketsVue
  }
}
</script>
