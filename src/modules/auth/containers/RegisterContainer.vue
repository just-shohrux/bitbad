<template>
  <div>
    <h2 class="layout__title">Ro’yxatdan o’tish</h2>
    <p class="layout__text">Ismingizni va telefon raqamingizni kiriting</p>
    <div class="dotted__line"></div>
    <register-form @register="register" :phone_number="phone" />
    <router-link class="general__link layout__link d-none" to="/send-code"
      >Ro’yxatdan o’tganmisiz?
    </router-link>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
export default {
  components: {
    RegisterForm,
  },
  methods: {
    register(name, phone) {
      phone =  phone.split(" ").join("");
      this.$store.dispatch("auth/register", { name, phone });
    },
  },
  props:["phone"]
};
</script>
