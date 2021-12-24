<template>
  <div>
    <div class="container-fluid pt-75">
      <div class="row">
        <div class="col-lg-3 col-sm-6 mb-3 mb-sm-0">
          <app-category :categories="categories" v-if="isFetchedCategory" />
        </div>
        <div class="col-12" v-if="!isFetched">
          <content-loader />
        </div>
        <div class="col-12" v-else-if="products.length === 0 && isFetched">
          <no-data title="Mahsulotlar mavjud emas" />
        </div>
        <template v-else-if="products.length !== 0 && isFetched">
          <div class="col-lg-3 col-sm-6" v-for="(product, i) in products" :key="i">
            <app-product
              :product="product"
              @create-flow="createFlow"
              @more="more"
              class="mb-3 mb-sm-0"
            />
          </div>
        </template>
      </div>
    </div>
    <product-modal
      v-if="isFetched"
      :product="productMore"
      :show="showProductMore"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import Category from "../components/Category.vue";
import Product from "../components/Product.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import ContentLoader from "../../../components/ContentLoader.vue";
import NoData from "../components/NoData.vue";
import ProductModal from "../components/ProductModal.vue";
import SimpleLoading from "../../../components/SimpleLoading.vue";
export default {
  components: {
    "app-category": Category,
    "app-product": Product,
    ContentLoader,
    NoData,
    ProductModal,
    SimpleLoading,
  },
  data() {
    return {
      productMore: {},
      showProductMore: false,
      show: false,
    };
  },
  watch: {
    $route(to, from) {
      this.getProductsBySearch(to.query.search);
    },
  },
  mounted() {
    if (this.$route.query.search) {
      this.getProductsBySearch(this.$route.query.search);
    }
    this.getAllProducts();
    this.getAllCategories();
  },
  computed: {
    ...mapState({
      products: (state) => get(state, "dashboard.products.data.results", []),
      isFetched: (state) => get(state, "dashboard.products.isFetched", false),
      categories: (state) =>
        get(state, "dashboard.categories.data.results", []),
      isFetchedCategory: (state) =>
        get(state, "dashboard.categories.isFetched", false),
      flow: (state) => get(state, "dashboard.flow.data", {}),
      errors: (state) => get(state, "dashboard.flow.errors", {}),
      isFetchedFlow: (state) => get(state, "dashboard.flow.isFetched", false),
    }),
  },
  methods: {
    getAllProducts() {
      this.$store.dispatch("dashboard/getAllProducts");
    },
    getProductsBySearch(query) {
      this.$store.dispatch("dashboard/getProductsBySearch", { query });
    },
    getAllCategories() {
      this.$store.dispatch("dashboard/getAllCategories");
    },
    createFlow(productId) {
      this.$store.dispatch("dashboard/createFlow", { productId });
    },
    more(productId) {
      this.productMore = this.products.find((product) =>
        isEqual(get(product, "id"), productId)
      );
      this.showProductMore = true;
    },
    closeModal() {
      this.showProductMore = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.col-4,
.col,
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