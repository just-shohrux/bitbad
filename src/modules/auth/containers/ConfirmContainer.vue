<template>
  <div>
    <h2 class="layout__title">Ro’yxatdan o’tish</h2>
    <p class="layout__text">Raqamizga yuborilgan kodni kiriting</p>
    <div class="dotted__line"></div>
    <confirm-form @confirm="confirm" />
    <router-link class="general__link layout__link d-none" to="/login"
      >Ro’yxatdan o’tganmisiz?
    </router-link>
  </div>
</template>

<script>
import ConfirmForm from "../components/ConfirmForm.vue";
export default {
  components: {
    ConfirmForm,
  },
  methods: {
    confirm(code) {
      const phone = this.phone;
      const name = this.name;
      this.$store.dispatch("auth/confirm", { phone, code, name });
    },
  },
  props: ["phone","name"],
};
</script>