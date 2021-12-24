<template>
  <div class="container-fluid pt-75">
    <div class="row">
      <div class="col-lg-8 mb-3 mb-lg-0">
        <content-loader v-if="!statisticsIsFetched" />
        <no-data
          v-else-if="statisticsIsFetched && statistics.length === 0"
          title="Statistika mavjud emas"
        />
        <app-chart
          v-else-if="statisticsIsFetched && statistics.length !== 0"
          :orders="orders"
          :views="views"
          :days="days"
        />
      </div>
      <div class="col-lg-4">
        <app-balance :user="user" v-if="isFetchedOrders" :orders="ordersList" />
      </div>
      <div class="col-12 mt-20">
        <app-table v-if="isFetchedTransactions" :transactions="transactions" />
      </div>
    </div>
  </div>
</template>

<script>
import Balance from "../components/Balance.vue";
import Chart from "../components/Chart.vue";
import Table from "../components/Table.vue";
import Header from "./../components/Header";
import { mapState } from "vuex";
import get from "lodash/get";
import ContentLoader from "../../../components/ContentLoader.vue";
import NoData from "../components/NoData.vue";
export default {
  components: {
    "app-header": Header,
    "app-chart": Chart,
    "app-balance": Balance,
    "app-table": Table,
    ContentLoader,
    NoData,
  },
  computed: {
    ...mapState({
      user: (state) => get(state, "auth.auth.data", {}),
      isFetched: (state) => get(state, "auth.auth.isFetched", false),
      statistics: (state) => get(state, "dashboard.productStatistics.data", []),
      statisticsIsFetched: (state) =>
        get(state, "dashboard.productStatistics.isFetched", false),
      transactions: (state) =>
        get(state, "dashboard.transactions.data.transactions", []),
      isFetchedTransactions: (state) =>
        get(state, "dashboard.transactions.isFetched", false),
      ordersList: (state) => get(state, "dashboard.orders.data.results", []),
      isFetchedOrders: (state) =>
        get(state, "dashboard.orders.isFetched", false),
    }),
    days() {
      return this.statistics.map(
        (item) => item.before_yesterday ?? item.yesterday
      );
    },
    orders() {
      return this.statistics.map(
        (item) =>
          item.before_yesterday_order_count ?? item.yesterday_order_count
      );
    },
    views() {
      return this.statistics.map(
        (item) => item.before_yesterday_view_count ?? item.yesterday_view_count
      );
    },
  },

  methods: {
    getProductStatistics() {
      this.$store.dispatch("dashboard/getProductStatistics");
    },
    getTransactionList() {
      this.$store.dispatch("dashboard/getTransactionList");
    },
    getOrdersList() {
      this.$store.dispatch("dashboard/getOrdersList");
    },
  },
  mounted() {
    this.getProductStatistics();
    this.getTransactionList();
    this.getOrdersList();
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.col-4,
.col-8,
.col-12 {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
.row {
  margin-left: -10px !important;
  margin-right: -10px !important;
}
.mt-20 {
  margin-top: 20px;
}
</style>