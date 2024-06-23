<template>
  <div class="home">
    <headerComponentVue />
    <privacyComponent />
    <contactComponent />
  </div>
</template>

<script>
import headerComponentVue from "@/components/client/headerComponent.vue";
import contactComponent from "@/components/client/footerComponent.vue";
import privacyComponent from "@/components/client/contactComponent.vue";
export default {
  name: "HomeView",
  components: {
    headerComponentVue,
    contactComponent,
    privacyComponent,
  },
};
</script>
