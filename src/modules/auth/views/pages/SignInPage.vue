<template>
  <div>
    <sign-in-container :phone="phone" />
  </div>
</template>

<script>
import SignInContainer from "../../containers/SignInContainer.vue";
export default {
  data() {
    return {
      phone: atob(this.$route.params.phone),
    };
  },
  components: { SignInContainer },
};
</script>
