<template>
  <div>
    <div class="container-fluid pt-75">
      <div class="row">
        <div class="col-sm-6 offset-sm-3 offset-0 ">
          <div class="profile__info mt-3">
            <h2>Sms kodni kiriting</h2>
            <form @submit.prevent="handleSubmit">
              <div class="profile__form">
                <label for="#">Kod</label>
                <div
                  class="prefix"
                  :class="{
                    invalid:
                      ($v.code.$dirty && !$v.code.required) ||
                      ($v.code.$dirty && !$v.code.minLength) ||
                      error,
                  }"
                >
                  <input
                    type="text"
                    v-model="code"
                    placeholder="******"
                    v-mask="'######'"
                    ref="code"
                  />
                </div>
                <div
                  v-if="!$v.code.required && $v.code.$dirty"
                  class="text-center text-danger mt-1 w-60"
                >
                  Kodni kiriting
                </div>
                <div
                  v-else-if="!$v.code.minLength && $v.code.$dirty"
                  class="text-center text-danger mt-1 w-60"
                >
                  Kod to'liq kiritilmagan
                </div>
                <div
                  v-else-if="error.length > 0"
                  class="text-center text-danger mt-1 w-60"
                >
                  {{ error }}
                </div>
              </div>
              <button type="submit">Tasdiqlash</button>
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
import SimpleLoading from "../../../components/SimpleLoading.vue";
import isEqual from "lodash/isEqual";
export default {
  components: { SimpleLoading },
  data() {
    return {
      code: "",
      show: false,
    };
  },
  validations: {
    code: { required, minLength: minLength(6) },
  },
  computed: {
    ...mapState({
      error: (state) => get(state, "dashboard.phone.error.non_field_errors[0]", false),
      isFetched: (state) => get(state, "dashboard.phone.isFetched", false),
    }),
  },
  watch: {
    isFetched: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!isEqual(newVal, oldVal) && (newVal || oldVal)) {
        this.show = false;
      }
    },
  },
  props: ["phone_number", "full_name"],
  methods: {
    handleSubmit() {
      const code = this.code;
      const phone_number = this.phone_number;
      const full_name = this.full_name;
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        this.$store.dispatch("dashboard/changePhoneNumber", {
          code,
          phone_number,
          full_name,
        });
        this.show = true;
      }
    },
  },
  mounted() {
    this.$refs.code.focus();
    this.$store.commit("dashboard/CHANGE_PHONE_NUMBER_TRIGGER");
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
  .profile__info h2{
    font-size: 18px;
  }
  .profile__info .profile__form{
    margin-top: 15px;
  }
  .profile__info label{
    font-size: 14px;
  }
  .profile__info .prefix{
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }
  .profile__info button{
    margin-top: 15px;
    font-size: 14px;
    padding: 10px 15px;
  }
  .w-60{
    width: 100%;
  }
}
</style>