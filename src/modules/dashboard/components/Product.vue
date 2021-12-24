<template>
  <div>
    <div class="product">
      <div class="product__img" :style="{ backgroundImage: `url(${product.image})` }"></div>
      <div class="product__content">
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} s’om</p>
        <div class="d-flex justify-content-center">
          <button class="home__link" @click="$emit('more', product.id)">
            Batafsil
          </button>
          <button class="home__link" @click="createFlow(product.id)">
            Oqim yaratish
          </button>
        </div>
      </div>
    </div>
    <simple-loading v-if="show" />
    <app-modal
      v-if="isFetched"
      :show="showModal"
      :message="flow.message"
      :flow="flow.flow"
    />
  </div>
</template>
<script>
import SimpleLoading from "../../../components/SimpleLoading.vue";
import Modal from "../../../components/Modal.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";
export default {
  data() {
    return {
      show: false,
      showModal: false,
    };
  },
  components: { SimpleLoading, "app-modal": Modal },
  props: ["product"],
  computed: {
    ...mapState({
      error: (state) => get(state, "dashboard.flow.error", {}),
      flow: (state) => get(state, "dashboard.flow.data", {}),
      isFetched: (state) => get(state, "dashboard.flow.isFetched", false),
    }),
  },
  methods: {
    createFlow(productId) {
      this.show = true;
      this.$emit("create-flow", productId);
    },
  },
  watch: {
    isFetched: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!isEqual(newVal, oldVal) && (newVal || oldVal)) {
        this.show = false;
        if (!isEmpty(this.error)) {
          this.$swal({
            icon: "error",
            title: this.error.message ?? this.error,
          });
        }
        if (!isEmpty(this.flow)) {
          this.showModal = true;
        }
      }
    },
  },
  mount() {
    this.$store.commit("dashboard/CREATE_FLOW_TRIGGER");
  },
};
</script>

<style lang="scss" scoped>
.product {
  background: transparent;
  min-height: 335px;
  margin-bottom: 20px;

  &__img {
    background-color: #bfccdd;
    height: 200px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &__content {
    padding: 15px;
    background-color: #fff;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    h2 {
      color: #006400;
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      color: #334d6e;
      margin-bottom: 15px;
    }
    .home__link {
      border: none;
      font-weight: 600;
      min-width: 125px;
      border-radius: 30px;
      font-size: 14px;
      cursor: pointer;
      &:last-child {
        margin-left: 15px;
      }
    }
  }
}

@media (max-width: 576px) {
  .popup__content{
    width: 95%;
    padding: 15px;
  }
}
</style>