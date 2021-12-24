<template>
  <div>
    <profile-confirm-container :full_name="full_name" :phone_number="phone_number" />
  </div>
</template>

<script>
import ProfileConfirmContainer from "../../containers/ProfileConfirmContainer.vue";
export default {
  data() {
    return {
      full_name: atob(this.$route.params.name),
      phone_number:atob(this.$route.params.phone)
    };
  },
  components: { ProfileConfirmContainer },
};
</script>

<style lang="scss" scoped>
</style>