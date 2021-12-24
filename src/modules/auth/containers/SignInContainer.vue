<template>
  <div>
    <h2 class="layout__title">Tizimga kirish</h2>
    <p class="layout__text">Raqamizga yuborilgan kodni kiriting</p>
    <div class="dotted__line"></div>
    <sign-in-form @signIn="signIn" />
    <router-link class="general__link layout__link" to="/register"
      >Ro’yxatdan o’tmaganmisiz?
    </router-link>
  </div>
</template>

<script>
import SignInForm from "../components/SignInForm.vue";
export default {
  components: {
    SignInForm,
  },
  methods: {
    signIn(code) {
      const phone = this.phone;
      this.$store.dispatch('auth/signin',{phone,code});
    },
  },
  props: ["phone"],
};
</script>