<template>
  <div>
    <form class="layout__form" @submit.prevent="loginOrSignUp">
      <div
        class="general__prefix"
        :class="{
          invalid:
            ($v.phone.$dirty && !$v.phone.required) ||
            ($v.phone.$dirty && !$v.phone.minLength) ||
            error,
        }"
      >
        <span>+998</span>
        <input
          type="text"
          class="general__input"
          placeholder="** *** ** **"
          v-mask="'## ### ## ##'"
          v-model.trim="phone"
        />
      </div>
      
      <div
        v-if="!$v.phone.required && $v.phone.$dirty"
        class="text-center text-danger mt-1"
      >
        Telefon raqamingizni kiriting
      </div>
      <div
        v-else-if="!$v.phone.minLength && $v.phone.$dirty"
        class="text-center text-danger mt-1"
      >
        Telefon raqam to'liq kiritilmagan
      </div>
      <div v-else-if="error.length > 0" class="text-center text-danger mt-1">
        {{ error }}
      </div>
      <div class="text-center">
        <button type="submit" class="general__btn layout__btn">Yuborish</button>
      </div>
    </form>
    <simple-loading v-if="show" />
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators/";
import { mapState } from "vuex";
import get from "lodash/get";
import SimpleLoading from "../../../components/SimpleLoading.vue";
import isEqual from "lodash/isEqual";
export default {
  data() {
    return {
      phone: "",
      show: false,
    };
  },
  methods: {
    loginOrSignUp() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        this.$emit("login-or-signup", this.phone);
        this.show = true;
      }
    },
  },
  validations: {
    phone: { required, minLength: minLength(12) },
  },
  computed: {
    ...mapState({
      error: (state) => get(state, "auth.loginOrSignUp.error", ""),
      isFetched: (state) => get(state, "auth.loginOrSignUp.isFetched", false),
    }),
  },
  watch: {
    isFetched: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!isEqual(newVal, oldVal) && (newVal || oldVal)) {
        this.show = false;
      }
    },
  },
  components: { SimpleLoading },
   mounted(){
    this.$store.commit('auth/LOGIN_OR_SIGNUP_TRIGGER');
  }
};
</script>

<style lang="scss" scoped>
</style>