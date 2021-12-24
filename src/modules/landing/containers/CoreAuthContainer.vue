<template>
  <div>
    <loader v-if="!product" color="#99CF67" />
    <component
      v-else-if="product"
      :is="page"
      @order="order"
      :product="product"
      :regions="regions"
      :user="user"
    />
    <div class="col-12 text-center" style="margin-top:-48px">
      <scrollToTop />
    </div>
    <page-footer />
  </div>
</template>

<script>
import Loader from "../../../components/Loader.vue";
import BlackSedanOilLandingPage from "../views/pages/BlackSedanOilLandingPage.vue";
import PsoriazMazLandingPage from "../views/pages/PsoriazMazLandingPage.vue";
import SmokeLandingPage from "../views/pages/SmokeLandingPage.vue";
import IntexLandingPage from "../views/pages/IntexLandingPage.vue";
import PageFooter from "../../../components/PageFooter.vue";
import GoldenDeerLandingPage from "../views/pages/GoldenDeerLandingPage.vue";
import RampShampooLandingPage from "../views/pages/RampShampooLandingPage.vue";
import ShotutVinegarLandingPage from "../views/pages/ShotutVinegarLandingPage.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import DaziranLandingPage from "../views/pages/DaziranLandingPage.vue";
import scrollToTop from "@/components/scrollToTop"
export default {
  data() {
    return {
      page: this.template + "-landing-page",
    };
  },
  components: {
    BlackSedanOilLandingPage,
    PsoriazMazLandingPage,
    SmokeLandingPage,
    Loader,
    IntexLandingPage,
    PageFooter,
    GoldenDeerLandingPage,
    RampShampooLandingPage,
    ShotutVinegarLandingPage,
    DaziranLandingPage,
    scrollToTop
  },
  mounted() {
    this.getRegions();
  },
  props: ["product", "user", "template"],
  computed: {
    ...mapState({
      regions: (state) =>
        get(state, "landing.regions.data.data.results", false),
      isFetched: (state) => get(state, "landing.regions.isFetched", false),
    }),
  },
  methods: {
    order({ ...params }) {
      this.$store.dispatch("landing/orderProduct", { ...params });
    },
    getRegions() {
      this.$store.dispatch("landing/getRegions");
    },
  },
};
</script>