<template>
  <form class="layout__form" @submit.prevent="sendCode">
    <div class="general__prefix" :class="{ invalid: ($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.minLength) || error }">
      +998 9<input
        type="text"
        class="general__input"
        placeholder="* *** ** **"
        v-mask="'# ### ## ##'"
        v-model.trim="phone"
      />
    </div>
    <div v-if="error" class="text-center text-danger mt-1">{{ error }}</div>
    <div v-else-if="!$v.phone.required && $v.phone.$dirty" class="text-center text-danger mt-1">Telefon raqamingizni kiriting</div>
    <div v-else-if="!$v.phone.minLength && $v.phone.$dirty" class="text-center text-danger mt-1">Telefon raqam to'liq kiritilmagan</div>
    <div class="text-center">
      <button type="submit" class="general__btn layout__btn">Yuborish</button>
    </div>
  </form>
</template>

<script>
import { required,minLength } from "vuelidate/lib/validators/";
import { mapState } from "vuex";
import get from "lodash/get";
export default {
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    sendCode() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        this.$emit("send-code", this.phone);
      }
    },
  },
  validations: {
    phone: { required,minLength:minLength(11)},
  },
  computed: {
    ...mapState({
      error: (state) => get(state, "auth.sendCode.errors", false),
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>