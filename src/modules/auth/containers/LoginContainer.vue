<template>
  <div>
    <h2 class="layout__title">Tizimga kirish</h2>
    <p class="layout__text">Raqamizga yuborilgan kodni kiriting</p>
    <div class="dotted__line"></div>
    <login-form @login="login"/>
    <router-link class="general__link layout__link d-none" to="/register"
      >Ro’yxatdan o’tmaganmisiz?
    </router-link>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
export default {
  components: {
    LoginForm,
  },
  methods: {
    login(code) {
      const phone = this.phone;
      this.$store.dispatch('auth/login',{phone,code});
    },
  },
  props: ["phone"],
};
</script>