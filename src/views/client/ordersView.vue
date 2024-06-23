<template>
  <div class="home">
    <headerComponentVue />
    <offerComponentVue />
    <footerComponentVue />
  </div>
</template>

<script>
import headerComponentVue from "@/components/client/headerComponent.vue";
import footerComponentVue from "@/components/client/footerComponent.vue";
import offerComponentVue from "@/components/client/ordersComponent.vue";
export default {
  name: "HomeView",
  components: {
    headerComponentVue,
    footerComponentVue,
    offerComponentVue,
  },
};
</script>
