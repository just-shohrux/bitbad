<template>
  <div>
    <h2 class="layout__title">Tizimga kirish</h2>
    <p class="layout__text">Telefon raqamingizni kiriting</p>
    <div class="dotted__line"></div>
    <login-or-sign-up-form @login-or-signup="loginOrSignUp"/>
    <router-link class="general__link layout__link d-none" to="/register"
      >Ro’yxatdan o’tmaganmisiz?</router-link
    >
  </div>
</template>

<script>
import LoginOrSignUpForm from '../components/LoginOrSignUpForm.vue';
export default {
  components: {
    LoginOrSignUpForm
  },
  methods: {
    loginOrSignUp(phone) {
      phone = phone.split(" ").join("");
      this.$store.dispatch("auth/loginOrSignUp", { phone });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>