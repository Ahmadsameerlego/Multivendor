<template>
  <div class="home">
    <headerComponentVue />
    <completeOrder />
    <footerComponentVue />
  </div>
</template>

<script>
import headerComponentVue from '@/components/client/headerComponent.vue';
import footerComponentVue from '@/components/client/footerComponent.vue';
import completeOrder from '@/components/client/completeOrder.vue';
export default {
  name: 'HomeView',
  components: {
    headerComponentVue,
      footerComponentVue,
      completeOrder
  }
}
</script>
