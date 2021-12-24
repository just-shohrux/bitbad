<template>
  <div>
    <div class="layout__dashboard">
      <template v-if="isFetched">
        <app-header />
        <slot />
      </template>
      <loader color="#398739" v-else />
    </div>
    <app-footer  />
  </div>
</template>
<script>
import Header from "../modules/dashboard/components/Header";
import { mapState } from "vuex";
import get from "lodash/get";
import Loader from "../components/Loader.vue";
import Footer from "../components/PageFooter.vue";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    Loader,
  },
  mounted() {
    this.getMe();
  },
  methods: {
    getMe() {
      this.$store.dispatch("auth/getMe");
    },
  },
  computed: {
    ...mapState({
      user: (state) => get(state, "auth.auth.data", {}),
      isFetched: (state) => get(state, "auth.auth.isFetched", false),
    }),
  },
};
</script>