<template>
  <div>
    <div class="stream__box">
      <h2>Mahsulot {{ flowData.product }}</h2>
      <div class="dotted__line"></div>
      <form class="stream__form" @submit.prevent="submitHandler">
        <input type="text" v-model.trim="flowData.url" disabled />
        <div class="d-flex">
          <button class="stream__copy" v-clipboard="flowData.url" v-clipboard:success="onCopy">
            Nusxa ko’chirish
          </button>
          <a
            href="https://telegram.org/"
            target="_blank"
            class="stream__telegram"
            ><i class="bx bx-navigation"></i
          ></a>
          <button class="stream__trash" @click="deleteFlow(flowData.id)">
            <i class="bx bx-trash-alt"></i>
          </button>
        </div>
      </form>
    </div>
    <simple-loading v-if="show" />
  </div>
</template>

<script>
import SimpleLoading from "../../../components/SimpleLoading.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
export default {
  components: { SimpleLoading },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    deleteFlow(flowId) {
      this.$store.dispatch("dashboard/deleteFlow", { flowId });
      this.show = true;
    },
    submitHandler() {},
    onCopy(){
      alert("Nusxa ko'chirildi")
    }
  },
  computed: {
    ...mapState({
      error: (state) => get(state, "dashboard.flowDelete.error", ""),
      data: (state) => get(state, "dashboard.flowDelete.data", ""),
      isFetched: (state) => get(state, "dashboard.flowDelete.isFetched", false),
    }),
    flowData() {
      return this.flow;
    },
  },
  watch: {
    isFetched: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!isEqual(newVal, oldVal) && (newVal || oldVal)) {
        this.show = false;

        if (!isEmpty(this.data)) {
          this.$swal({
            icon: "success",
            title: this.data.message ?? "Success",
          });
          this.$store.commit("dashboard/DELETE_FLOW_TRIGGER");
          this.$store.dispatch("dashboard/getAllFlows");
        }

        if (this.isFetchedCard && !isEmpty(this.card)) {
          this.$swal({
            icon: "error",
            title: this.error.message ?? this.error,
          });
          this.$store.commit("dashboard/DELETE_FLOW_TRIGGER");
        }
      }
    },
  },
  props: ["flow"],
};
</script>

<style lang="scss" scoped>
.stream__box {
  background: #ffffff;
  border-radius: 15px;
  padding: 20px 15px;
  margin-bottom: 40px;

  h2 {
    font-size: 18px;
    color: #006400;
    margin-bottom: 5px;
    font-weight: 500;
  }
  p {
    color: #929faf;
  }
  .dotted__line {
    margin-top: 30px;
    margin-bottom: 40px;
  }
}
.stream__form {
  padding: 22px 17px;
  background: #bfccdd;
  border-radius: 15px;
  input {
    background: #f0f0f0;
    border-radius: 15px;
    padding: 15px 20px;
    display: block;
    width: 100%;
    border: none;
    margin-bottom: 25px;
  }
}

.stream {
  &__copy {
    font-weight: 600;
    font-size: 14px;
    padding: 6px 15px;
    border: none;
    background-color: #398739;
    border-radius: 15px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    outline: none;
  }

  &__telegram {
    background-color: #2196f3;
    color: #fff;
    border-radius: 15px;
    height: 32px;
    width: 60px;
    font-size: 20px;
    text-align: center;
    border: none;
    margin-left: 15px;
    cursor: pointer;
  }

  &__trash {
    margin-left: 15px;
    border: none;
    color: #fff;
    font-size: 18px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: #f19f9d;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
button:focus {
  outline: none;
}

@media (max-width: 576px) {
.stream__box{
  padding: 15px;
  margin-bottom: 10px;
}
}

</style>