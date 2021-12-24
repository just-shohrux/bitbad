<template>
  <div class="container-fluid pt-75">
    <div class="row">
      <div class="col-12">
        <content-loader v-if="!isFetched" />
        <no-data
          title="Statistika topilmadi"
          v-else-if="isFetched && statistics.length == 0"
        />
        <template v-else-if="isFetched">
          <product-statistics
            v-if="statistics.length !== 0"
            :statistics="statistics"
          />
          <orders-table />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductStatistics from "../components/ProductStatistics.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import ContentLoader from "../../../components/ContentLoader.vue";
import NoData from "../components/NoData.vue";
import OrdersTable from "../components/OrdersTable.vue";
export default {
  components: { ProductStatistics, NoData, ContentLoader, OrdersTable },
  mounted() {
    this.getProductStatistics();
    this.getOrdersList();
  },
  methods: {
    getProductStatistics() {
      this.$store.dispatch("dashboard/getProductOrdersStatistics");
    },
    getOrdersList() {
      this.$store.dispatch("dashboard/getOrdersList");
    },
  },
  computed: {
    ...mapState({
      statistics: (state) =>
        get(state, "dashboard.productOrdersStatistics.data", []),
      isFetched: (state) =>
        get(state, "dashboard.productOrdersStatistics.isFetched", false),
    }),
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.col-12 {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
.row {
  margin-left: -10px !important;
  margin-right: -10px !important;
}
@media (max-width: 576px) {
}
</style>