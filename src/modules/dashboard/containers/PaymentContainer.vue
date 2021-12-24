<template>
  <div class="container-fluid pt-75">
    <div class="row">
      <div class="col-12">
        <app-table v-if="isFetched" :transactions="transactions">
          <payment-form v-if="userIsFetched" :user="user" />
        </app-table>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentForm from "../components/PaymentForm.vue";
import Table from "../components/Table.vue";
import { mapState } from "vuex";
import get from "lodash/get";
export default {
  components: { "app-table": Table, PaymentForm },
  mounted() {
    this.getTransactionList();
  },
  computed: {
    ...mapState({
      user: (state) => get(state, "auth.auth.data", {}),
      userIsFetched: (state) => get(state, "auth.auth.isFetched", false),
      transactions: (state) =>
        get(state, "dashboard.transactions.data.results", []),
      isFetched: (state) =>
        get(state, "dashboard.transactions.isFetched", false),
    }),
  },
  methods: {
    getTransactionList() {
      this.$store.dispatch("dashboard/getTransactionList");
    },
  },
};
</script>

<style lang="scss" scoped>
.payment {
  &__box {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 40px;
  }
}
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




</style>