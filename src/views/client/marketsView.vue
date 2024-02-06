<template>
  <div class="home">
    <headerComponentVue />
    <marketsComponentVue />
    <branchesComponentVue />
    <downloadAppVue />
    <footerComponentVue />
  </div>
</template>

<script>
import headerComponentVue from '@/components/client/headerComponent.vue';
import downloadAppVue from '@/components/client/downloadApp.vue';
import footerComponentVue from '@/components/client/footerComponent.vue';
import marketsComponentVue from "@/components/client/marketsComponent.vue"
export default {
  name: 'HomeView',
  components: {
    headerComponentVue,
    downloadAppVue,
      footerComponentVue,
    marketsComponentVue
  }
}
</script>
