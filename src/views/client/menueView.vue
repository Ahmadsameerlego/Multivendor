<template>
  <div class="home">
    <headerComponentVue />
    <menueComponent />
    <footerComponentVue />
  </div>
</template>

<script>
import headerComponentVue from '@/components/client/headerComponent.vue';
import footerComponentVue from '@/components/client/footerComponent.vue';
import menueComponent from "@/components/client/menueComponent.vue"
export default {
  name: 'HomeView',
  components: {
    headerComponentVue,
      footerComponentVue,
      menueComponent
  }
}
</script>
