<template>
  <div>
    <div class="container-fluid pt-75">
      <div class="row">
        <div class="col-lg-6 offset-0 offset-lg-3">
          <div class="profile__info mt-3">
            <h2>Profile ma'lumotlarni o'zgartirish</h2>
            <form @submit.prevent="handleSubmit">
              <div class="profile__form">
                <label for="#">Ismingiz</label>
                <div
                  class="prefix w100"
                  :class="{
                    invalid: $v.full_name.$dirty && !$v.full_name.required,
                  }"
                >
                  <input
                    type="text"
                    v-model.trim="full_name"
                    placeholder="Ism"
                  />
                </div>
                <div
                  v-if="!$v.full_name.required && $v.full_name.$dirty"
                  class="text-center text-danger mt-1 w-60"
                >
                  Ismingizni kiriting
                </div>
              </div>
              <div class="profile__form">
                <label for="#">Telefon raqamingiz</label>
                <div
                  class="prefix"
                  :class="{
                    invalid:
                      ($v.phone_number.$dirty && !$v.phone_number.required) ||
                      ($v.phone_number.$dirty && !$v.phone_number.minLength) ||
                      error,
                  }"
                >
                  +998
                  <input
                    type="text"
                    v-model="phone_number"
                    placeholder="** *** ** **"
                    v-mask="'## ### ## ##'"
                  />
                </div>
                <div
                  v-if="!$v.phone_number.required && $v.phone_number.$dirty"
                  class="text-center text-danger mt-1 w-60"
                >
                  Telefon raqamingizni kiriting
                </div>
                <div
                  v-else-if="
                    !$v.phone_number.minLength && $v.phone_number.$dirty
                  "
                  class="text-center text-danger mt-1 w-60"
                >
                  Telefon raqam to'liq kiritilmagan
                </div>
                <div
                  v-else-if="error"
                  class="text-center text-danger mt-1 w-60"
                >
                  {{ error }}
                </div>
              </div>
              <button type="submit">Saqlash</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <simple-loading v-if="show"/>
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
      full_name: "",
      phone_number: "",
      show:false
    };
  },
  validations: {
    full_name: { required },
    phone_number: { required, minLength: minLength(12) },
  },
  computed: {
    ...mapState({
      error: (state) => get(state, "dashboard.sms.error", false),
      isFetched: (state) => get(state, "dashboard.sms.isFetched", false),
    }),
  },
  methods: {
    handleSubmit() {
      const full_name = this.full_name;
      const phone_number = this.phone_number.split(" ").join("");
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        this.$store.dispatch("dashboard/sendSmsCode", {
          full_name,
          phone_number,
        });
        this.show=true;
      }
    },
  },
  watch: {
    isFetched: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (!isEqual(newVal, oldVal) && (newVal || oldVal)) {
        this.show = false;
      }
    },
  },
  mounted(){
    this.$store.commit('dashboard/SEND_SMS_CODE_TRIGGER');
  }
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
  .pt-75{
    padding-top: 75px;
  }
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
    font-size: 14px;
    margin-top: 15px;
    padding: 10px 15px;
  }
  .w-60{
    width: 100%;
  }
}
</style>