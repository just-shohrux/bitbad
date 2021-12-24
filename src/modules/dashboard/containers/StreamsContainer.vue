<template>
  <div class="container-fluid pt-75">
    <div class="row" v-if="!isFetched">
      <div class="col-12">
        <content-loader />
      </div>
    </div>
    <div class="row" v-else-if="isFetched && flows.length === 0">
      <div class="col-12">
        <no-data title="Oqimlar mavjud emas"/>
      </div>
    </div>
    <div class="row" v-else-if="isFetched && flows.length !== 0">
      <div class="col-lg-4 col-sm-6" v-for="(flow, i) in flows" :key="i">
        <app-stream :flow="flow" />
      </div>
    </div>
  </div>
</template>

<script>
import Stream from "../components/Stream.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import ContentLoader from "../../../components/ContentLoader.vue";
import NoData from '../components/NoData.vue';
export default {
  components: {
    "app-stream": Stream,
    ContentLoader,
    NoData,
  },
  mounted() {
    this.getAllFlows();
  },
  computed: {
    ...mapState({
      flows: (state) => get(state, "dashboard.flows.data.results", []),
      isFetched: (state) => get(state, "dashboard.flows.isFetched", false),
    }),
  },
  methods: {
    getAllFlows() {
      this.$store.dispatch("dashboard/getAllFlows");
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.col-4 {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
.row {
  margin-left: -10px !important;
  margin-right: -10px !important;
}
.nodata{
  color: #fff;
}
</style>