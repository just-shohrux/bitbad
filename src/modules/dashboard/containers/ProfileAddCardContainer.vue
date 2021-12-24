<template>
  <div>
    <div class="container-fluid pt-75">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 offset-0">
          <div class="profile__info mt-3">
            <h2>Karta raqamingizni kiriting</h2>
            <form @submit.prevent="handleSubmit">
              <div class="profile__form">
                <label for="#">Karta raqami</label>
                <div
                  class="prefix"
                  :class="{
                    invalid:
                      ($v.card_number.$dirty && !$v.card_number.required) ||
                      ($v.card_number.$dirty && !$v.card_number.minLength) ||
                      error,
                  }"
                >
                  <input
                    type="text"
                    v-model.trim="card_number"
                    placeholder="**** **** **** ****"
                    v-mask="'#### #### #### ####'"
                    ref="card"
                  />
                </div>
                <div
                  v-if="!$v.card_number.required && $v.card_number.$dirty"
                  class="text-center text-danger mt-1 w-60"
                >
                  Karta raqamini kiriting
                </div>
                <div
                  v-else-if="!$v.card_number.minLength && $v.card_number.$dirty"
                  class="text-center text-danger mt-1 w-60"
                >
                  Karta raqami to'liq kiritilmagan
                </div>
                <div
                  v-else-if="error.length > 0"
                  class="text-center text-danger mt-1 w-60"
                >
                  {{ error }}
                </div>
              </div>
              <button type="submit">Yuborish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <simple-loading v-if="show" />
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators/";
import { mapState } from "vuex";
import get from "lodash/get";
import SimpleLoading from '../../../components/SimpleLoading.vue';
import isEqual from "lodash/isEqual";
export default {
  components: { SimpleLoading },
  data() {
    return {
      card_number: "",
      show:false
    };
  },
  validations: {
    card_number: { required, minLength: minLength(19) },
  },
  computed: {
    ...mapState({
      error: (state) => get(state, "dashboard.card.error", ""),
      isFetched: (state) => get(state, "dashboard.card.isFetched", false),
    }),
  },
  props: ["phone_number", "full_name"],
  methods: {
    handleSubmit() {
      const card_number = this.card_number.split(" ").join("");
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        this.$store.dispatch("dashboard/addCardNumber", {
          card_number,
        });
        this.show = true;
      }
    },
  },
  mounted() {
    this.$refs.card.focus();
  },
   watch: {
    isFetched: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!isEqual(newVal, oldVal) && (newVal || oldVal)) {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  &__info {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 30px;
    h2 {
      font-size: 20px;
      color: #334d6e;
      font-weight: 600;
    }
    label {
      font-size: 18px;
      color: #334d6e;
    }
    .prefix {
      background-color: #f0f0f0;
      border-radius: 15px;
      padding: 15px 20px;
      width: 60%;
      &.invalid {
        border: 1px solid #f19f9d;
      }
      &.w100 {
        input {
          width: 100%;
          display: block;
        }
      }
    }
    input {
      background-color: transparent;
      border: none;
    }
    .profile__form {
      margin-top: 30px;
    }
    button {
      display: inline-block;
      margin-top: 30px;
      background: #398739;
      border-radius: 15px;
      padding: 10px 30px;
      border: none;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      transition: 0.25s ease;
      &:hover {
        box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
      }
    }
  }
}
.w-60 {
  width: 60%;
}
@media  (max-width:576px) {
  .profile__info{
    padding: 15px;
  }
  .w-60 {
    width: 100%;
  }
  .profile__info .profile__form{
    margin-top: 15px;
  }
  .profile__info .prefix{
    width: 100%;
    padding: 15px;
    font-size: 14px;
  }
  .profile__info label{
    font-size: 14px;
  }
  .profile__info button{
    font-size: 14px;
    margin-top: 15px;
    padding: 10px 15px;
  }
}
</style>