<template>
  <div>
    <login-container :phone="phone" />
  </div>
</template>

<script>
import LoginContainer from "../../containers/LoginContainer.vue";
export default {
  data() {
    return {
      phone: atob(this.$route.params.phone),
    };
  },
  components: {
    LoginContainer,
  },
};
</script>
