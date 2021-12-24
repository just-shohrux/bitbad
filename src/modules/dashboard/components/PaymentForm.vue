<template>
  <div>
    <form class="payment__form" @submit.prevent="handleSubmit">
      <div class="d-flex flex-column">
        <div class="form__prefix">
          <div class="icon"><i class="bx bx-credit-card-front"></i></div>
          <input
            type="text"
            placeholder="**** **** **** ****"
            v-model.trim="card_number"
            v-mask="'#### #### #### ####'"
            disabled
          />
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="form__prefix">
          <div class="icon"><i class="bx bx-money"></i></div>
          <input
            type="text"
            :value="amount | numeral('0,0')"
            @input="changeSum"
            placeholder="Summa"
          />
        </div>
        <div v-if="error.length != 0" class="text-center text-danger mt-1">
          {{ error[0] }}
        </div>
        <div
          v-else-if="!$v.amount.required && $v.amount.$dirty"
          class="text-center text-danger mt-1"
        >
          Pul miqdorini kiriting
        </div>
      </div>
      <button class="home__link" type="submit" :disabled="disabled">
        Tasdiqlash
      </button>
    </form>
    <simple-loading v-if="show" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import get from "lodash/get";
import { required } from "vuelidate/lib/validators/";
import SimpleLoading from "../../../components/SimpleLoading.vue";
import isEqual from "lodash/isEqual";
import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";
export default {
  components: { SimpleLoading },
  data() {
    return {
      card_number: this.user.card_number ?? null,
      disabled: isNil(this.user.card_number) ? true : false,
      amount: null,
      show: false,
    };
  },
  validations: {
    amount: { required },
  },
  methods: {
    changeSum(event) {
      this.amount = event.target.value.replace(/\,/g, "");
    },
    handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        const amount = parseInt(this.amount);
        this.$store.dispatch("dashboard/createTransaction", {
          amount,
        });
        this.show = true;
      }
    },
  },
  props: ["user"],
  computed: {
    ...mapState({
      error: (state) => get(state, "dashboard.transaction.error", []),
      transaction: (state) => get(state, "dashboard.transaction.data", {}),
      isFetched: (state) =>
        get(state, "dashboard.transaction.isFetched", false),
    }),
  },
  watch: {
    isFetched: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!isEqual(newVal, oldVal) && (newVal || oldVal)) {
        this.show = false;
        if (!isEmpty(this.transaction)) {
          this.$swal({
            icon: "success",
            title: this.transaction.message,
          });
          this.amount = null;
          this.$store.dispatch("dashboard/getAllFlows");
        }
      }
    },
  },
  mounted() {
    this.$store.commit("dashboard/CREATE_TRANSACTION_TRIGGER");
  },
};
</script>

<style lang="scss" scoped>
.payment__form {
  width: 50%;
  margin: 60px auto;
  display: flex;
  justify-content: space-around;
}
.form__prefix {
  background: transparent;
  min-width: 250px;
  display: flex;
  margin-right: 15px;
 

  input {
    width: 100%;
    padding: 0px 20px;
    padding-top: 3px;
    line-height: 45px;
    height: 45px;
    border-radius: 0px 15px 15px 0px;
    border: none;
    background: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 45px;
    height: 45px;
    background: #99cf67;
    border-radius: 15px 0px 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
  }
}
.home__link {
  border: none;
  font-size: 16px;
  height: 45px;
  min-width: 175px;
  border-radius: 30px;
  cursor: pointer;
}
@media (max-width: 992px) {
.payment__form {
  width: 90%;
  flex-direction: column;
  margin: 30px auto;
}
 .form__prefix input{
    margin-bottom: 10px;
  }
}
@media (max-width: 576px) {
  .payment__form{
    margin-top: 15px;
    margin-bottom: 15px;
    flex-direction: column;
    width: 100%;
  }
  .form__prefix input{
    margin-bottom: 10px;
  }
  .text-danger{
    margin-bottom: 15px;
  }
}
</style>