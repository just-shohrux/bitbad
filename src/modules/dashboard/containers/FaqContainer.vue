<template>
  <div class="contaner-fluid pt-75">
    <div class="row">
      <div class="col-12" v-if="!isFetched">
        <content-loader />
      </div>
      <div class="col-12" v-else-if="isFetched && faqs.length === 0">
        <no-data title="Ma'lumot mavjud emas" />
      </div>
      <template v-else-if="isFetched && faqs.length !== 0">
        <div class="col-sm-6 " v-for="(faq,i) in faqs" :key="i">
          <app-accordion :faq="faq" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Accordion from "../components/Accordion.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import NoData from "../components/NoData.vue";
import ContentLoader from "../../../components/ContentLoader.vue";
export default {
  components: {
    "app-accordion": Accordion,
    ContentLoader,
    NoData,
  },
  mounted() {
    this.getAllFaqs();
  },
  methods: {
    getAllFaqs() {
      this.$store.dispatch("dashboard/getAllFaqs");
    },
  },
  computed: {
    ...mapState({
      faqs: (state) => get(state, "dashboard.faqs.data.results", []),
      isFetched: (state) => get(state, "dashboard.faqs.isFetched", false),
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>

