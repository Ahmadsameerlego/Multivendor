<template>
  <div class="home">
    <headerComponentVue />
    <cartComponent />
    <footerComponentVue />
  </div>
</template>

<script>
import headerComponentVue from '@/components/client/headerComponent.vue';
import footerComponentVue from '@/components/client/footerComponent.vue';
import cartComponent from "@/components/client/cartComponent.vue"
export default {
  name: 'HomeView',
  components: {
    headerComponentVue,
      footerComponentVue,
      cartComponent
  }
}
</script>
