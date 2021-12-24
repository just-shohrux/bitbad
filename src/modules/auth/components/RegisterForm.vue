<template>
  <div>
    <form class="layout__form" @submit.prevent="login">
      <div
        class="general__prefix"
        :class="{
          invalid: $v.name.$dirty && !$v.name.required,
        }"
      >
        <input
          type="text"
          class="general__input"
          placeholder="Ism"
          v-model.trim="name"
        />
      </div>
      <div
        v-if="!$v.name.required && $v.name.$dirty"
        class="text-center text-danger mt-1"
      >
        Ismingizni kiriting
      </div>

      <div
        class="general__prefix mt-20"
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
          disabled
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
  components: { SimpleLoading },
  data() {
    return {
      name: "",
      phone: this.phone_number,
      show:false
    };
  },
  props: ["phone_number"],
  validations: {
    name: { required },
    phone: { required, minLength: minLength(12) },
  },
  methods: {
    login() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        this.$emit("register", this.name, this.phone);
      }
    },
  },
  computed: {
    ...mapState({
      error: (state) => get(state, "auth.register.error", ""),
      isFetched: (state) => get(state, "auth.register.isFetched", false),
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
  mounted(){
    this.$store.commit('auth/REGISTER_TRIGGER');
  }
};
</script>

<style lang="scss" scoped>
.mt-20 {
  margin-top: 20px;
}
</style>