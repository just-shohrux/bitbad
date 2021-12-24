<template>
  <div>
    <loader color="#99CF67" v-if="!isFetched" />
    <core-auth-container
      v-else-if="isFetched"
      :product="product"
      :user="user"
      :template="template"
    />
  </div>
</template>

<script>
import CoreAuthContainer from "../../containers/CoreAuthContainer.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import Loader from "../../../../components/Loader.vue";
export default {
  data() {
    return {
      template: this.$route.params.template,
    };
  },
  components: { CoreAuthContainer, Loader },
  computed: {
    ...mapState({
      product: (state) => get(state, "dashboard.product.data", {}),
      user: (state) => get(state, "auth.auth.data", {}),
      isFetched: (state) => get(state, "dashboard.product.isFetched", false),
    }),
  },
  mounted() {
      const prodId = this.$route.params.product;
    this.$store.dispatch("dashboard/getOneProduct",{prodId});
  },
};
</script>

<style lang="scss" scoped>
</style>