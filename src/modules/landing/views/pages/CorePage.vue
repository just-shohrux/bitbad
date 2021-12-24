<template>
  <div>
    <loader color="#99CF67" v-if="!isFetched"/>
    <core-container v-else-if="isFetched"  :product="product" />
  </div>
</template>

<script>
import CoreContainer from "../../containers/CoreContainer.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import Loader from '../../../../components/Loader.vue';
export default {
  data() {
    return {
      landing: this.$route.params.landing,
    };
  },
  components: { CoreContainer, Loader },
  mounted() {
      this.getLandingInfo();
  },
  methods: {
    getLandingInfo() {
      const landing = this.landing;
      this.$store.dispatch("landing/landing", {landing});
    },
  },
   computed: {
    ...mapState({
      product: (state) => get(state, "landing.landing.data.data", {}),
      isFetched: (state) => get(state, "landing.landing.isFetched", false),
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>