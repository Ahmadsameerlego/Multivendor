<template>
  <div class="home">
    <headerComponentVue />
    <privacyComponent />
    <footerComponentVue />
  </div>
</template>

<script>
import headerComponentVue from "@/components/client/headerComponent.vue";
import footerComponentVue from "@/components/client/footerComponent.vue";
import privacyComponent from "@/components/client/termsComponent.vue";
export default {
  name: "HomeView",
  components: {
    headerComponentVue,
    footerComponentVue,
    privacyComponent,
  },
};
</script>
