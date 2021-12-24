<template>
  <div>
    <h2 class="layout__title">Tizimga kirish</h2>
    <p class="layout__text">Telefon raqamingizni kiriting</p>
    <div class="dotted__line"></div>
    <send-code-form @send-code="sendCode" />
    <router-link class="general__link layout__link" to="/register"
      >Ro’yxatdan o’tmaganmisiz?</router-link
    >
  </div>
</template>

<script>
import SendCodeForm from '../components/SendCodeForm.vue';
export default {
  components: {
    SendCodeForm,
  },
  methods: {
    sendCode(phone) {
      phone = "9" + phone.split(" ").join("");
      this.$store.dispatch("auth/sendCode", { phone });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>