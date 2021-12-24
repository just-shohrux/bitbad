<template>
  <div>
    <form class="layout__form" @submit.prevent="confirm">
      <div
        class="general__prefix"
        :class="{
          invalid:
            ($v.code.$dirty && !$v.code.required) ||
            ($v.code.$dirty && !$v.code.minLength) ||
            error,
        }"
      >
        <input
          type="text"
          class="general__input"
          placeholder="******"
          v-mask="'######'"
          v-model.trim="code"
        />
      </div>
      <div
        v-if="!$v.code.required && $v.code.$dirty"
        class="text-center text-danger mt-1"
      >
        Kodni kiriting
      </div>
      <div
        v-else-if="!$v.code.minLength && $v.code.$dirty"
        class="text-center text-danger mt-1"
      >
        Kod to'liq kiritilmagan
      </div>
      <div v-else-if="error" class="text-center text-danger mt-1">
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
      code: "",
      show: false,
    };
  },
  validations: {
    code: { required, minLength: minLength(6) },
  },
  computed: {
    ...mapState({
      error: (state) => get(state, "auth.confirm.error", false),
      isFetched: (state) => get(state, "auth.confirm.isFetched", false),
    }),
  },
  methods: {
    confirm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        this.$emit("confirm", this.code);
        this.show = true;
      }
    },
  },
  watch: {
    isFetched: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!isEqual(newVal, oldVal) && (newVal || oldVal)) {
        this.show = false;
      }
    },
  },
  mounted() {
    this.$store.commit("auth/CONFIRM_TRIGGER");
  },
  components: { SimpleLoading },
};
</script>