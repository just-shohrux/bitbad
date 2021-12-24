<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import AuthLayout from "./layouts/AuthLayout.vue";
import DashboardLayout from "./layouts/DashboardLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import LandingLayout from "./layouts/MainLayout.vue";

export default {
  name: "App",
  components: {
    AuthLayout,
    MainLayout,
    DashboardLayout,
    LandingLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "dashboard") + "-layout";
    },
  },
};
</script>

