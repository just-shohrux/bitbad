<template>
  <div class="landing__wrapper">
    <div class="landing__home" :style="{ backgroundImage: `url(${bg})` }">
      <router-link to="/" class="logo"
        ><img :src="logo" alt="logo"
      /></router-link>
      <div class="content">
        <h2>INTEX</h2>
        <p>Jazirama yoz? Zo’rku!</p>
      </div>
      <form @submit.prevent="order">
        <div class="skidka"><img :src="skidka" alt=""><span>-30%</span></div>
        <select v-model="region_id" class="form__select">
          <option v-for="(region, i) in regions" :key="i" :value="region.id">
            {{ region.name }}
          </option>
        </select>
        <input
          type="text"
          placeholder="Ismingiz"
          v-model="client_name"
          :class="{
            invalid:
              ($v.client_name.$dirty && !$v.client_name.required) || error,
          }"
        />
        <div
          v-if="!$v.client_name.required && $v.client_name.$dirty"
          class="text-center text-danger mt-1 w-60"
        >
          Ismingizni kiriting
        </div>
        <input
          type="text"
          placeholder="Telefon raqamingiz"
          v-mask="'## ### ## ##'"
          v-model="client_phone"
          :class="{
            invalid:
              ($v.client_phone.$dirty && !$v.client_phone.required) ||
              ($v.client_phone.$dirty && !$v.client_phone.minLength) ||
              error,
          }"
        />

        <div
          v-if="!$v.client_phone.required && $v.client_phone.$dirty"
          class="text-center text-danger mt-1 w-60"
        >
          Telefon raqamingizni kiriting
        </div>
        <div
          v-else-if="!$v.client_phone.minLength && $v.client_phone.$dirty"
          class="text-center text-danger mt-1 w-60"
        >
          Telefon raqam to'liq kiritilmagan
        </div>
        <div v-else-if="error" class="text-center text-danger mt-1 w-60">
          {{ error }}
        </div>
        <button type="submit">BUYURTMA BERISH</button>
        <img :src="child" class="form__img" alt="child" />
      </form>
    </div>
    <div class="landing__content ">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2>
              Endi sizning hovlingizda ham atigi 990 ming so’m evaziga muzdek
              suvga to’la basseyn bo’ladi
            </h2>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-lg-7 d-flex position-relative ">
            <div>
            <img :src="drop" alt="">
            </div>
            <p>
              Har kuni farzandlaringiz undan rohat olishadi va chiniqishadi. Siz
              esa jazirama issiq kunda bir tushib chiqib muzdekkina bo’lib
              olasiz!
            </p>
            <img :src="intex" class="img-fluid" alt="img">
          </div>

        </div>
      </div>
    </div>
    <div class="formuchun" :style="{backgroundImage: `url(${bassin})`}">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form @submit.prevent="order">
              <div class="skidka"><img :src="skidka" alt=""><span>-30%</span></div>
              <select v-model="region_id" class="form__select">
                <option v-for="(region, i) in regions" :key="i" :value="region.id">
                  {{ region.name }}
                </option>
              </select>
              <input
                      type="text"
                      placeholder="Ismingiz"
                      v-model="client_name"
                      :class="{
            invalid:
              ($v.client_name.$dirty && !$v.client_name.required) || error,
          }"
              />
              <div
                      v-if="!$v.client_name.required && $v.client_name.$dirty"
                      class="text-center text-danger mt-1 w-60"
              >
                Ismingizni kiriting
              </div>
              <input
                      type="text"
                      placeholder="Telefon raqamingiz"
                      v-mask="'## ### ## ##'"
                      v-model="client_phone"
                      :class="{
            invalid:
              ($v.client_phone.$dirty && !$v.client_phone.required) ||
              ($v.client_phone.$dirty && !$v.client_phone.minLength) ||
              error,
          }"
              />

              <div
                      v-if="!$v.client_phone.required && $v.client_phone.$dirty"
                      class="text-center text-danger mt-1 w-60"
              >
                Telefon raqamingizni kiriting
              </div>
              <div
                      v-else-if="!$v.client_phone.minLength && $v.client_phone.$dirty"
                      class="text-center text-danger mt-1 w-60"
              >
                Telefon raqam to'liq kiritilmagan
              </div>
              <div v-else-if="error" class="text-center text-danger mt-1 w-60">
                {{ error }}
              </div>
              <button type="submit">BUYURTMA BERISH</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import logo from "./../../../../assets/images/logo.png";
import bg from "./../../../../assets/images/intex/bg.png";
import child from "./../../../../assets/images/intex/child.png";
import drop from "./../../../../assets/images/intex/drop.png";
import top from "./../../../../assets/images/daziran/top.png";
import intex from "./../../../../assets/images/intex/intex.png";
import skidka from "./../../../../assets/images/intex/skid4.png";
import bassin from "./../../../../assets/images/intex/basin.png";
import { mapState } from "vuex";
import get from "lodash/get";
import { required, minLength } from "vuelidate/lib/validators/";
export default {
  data() {
    return {
      logo,
      bg,
      child,
      intex,
      drop,
      top,
      skidka,
      bassin,
     region_id: 1,
      client_name: this.user ? this.user.full_name : "" ,
      client_phone: this.user ? this.user.phone_number :"",
    };
  },
  validations: {
    client_name: { required },
    client_phone: { required, minLength: minLength(12) },
  },
  props: ["product", "regions","user"],
  computed: {
    ...mapState({
      error: (state) => get(state, "landing.order.errors", false),
    }),
  },
  methods: {
    order() {
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
        const client_name = this.client_name;
        const client_phone = this.client_phone.split(" ").join("");
        const region = this.region_id;
        const product = this.product.id ? this.product.id :this.product.product.id;
        const sharer = this.user?this.user.id : this.product.user_id;
        const number_of_products = 1;
        this.$emit("order", {
          client_name,
          client_phone,
          region_id,
          product,
          sharer,
          number_of_products,
        });
        this.$swal({
          icon: "success",
          title: "Sizning buyurtmangiz yuborildi!!!<br> <small>Tez orada operatorimiz siz bilan bog'lanadi</small>",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.landing {
  &__home {
    height: 100vh;
    background-color: #99cf67;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;

    .logo {
      top: 30px;
      left: 30px;
      position: absolute;
      z-index: 9;
      cursor: pointer;
    }

    .content {
      position: absolute;
      right: 15%;
      top: 50%;
      transform: translateY(-50%);

      h2 {
        font-size: 100px;
        color: #334d6e;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 15px;
      }

      p {
        color: #334d6e;
        font-size: 25px;
        font-weight: 700;
      }
    }

    form {
      .skidka {
        top: -130px;
        left: 80%;
        z-index: 500;
        position: relative;

        span {
          position: absolute;
          text-align: center;
          font-family: Poppins;
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 45px;
          letter-spacing: 0.01em;
          color: #FFFFFF;
          top: 50px;
          left: 40px;
          transform: rotate(35deg);
        }

        img {
          position: absolute;
        }
      }

      padding: 40px 30px;
      background: #78a9cf;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      position: absolute;
      left: 6%;
      top: 50%;
      transform: translateY(-50%);
      z-index: 100;
      width: 370px;

      .form__select {
        background-color: #fff;
        border-radius: 15px;
        padding: 10px 15px;
        width: 100%;
      }

      input {
        height: 50px;
        border-radius: 15px;
        display: block;
        border: none;
        padding: 10px 15px;
        width: 100%;
        margin-top: 30px;
      }

      button {
        border-radius: 15px;
        background-color: #079e07;
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 15px;
        display: block;
        width: 100%;
        padding: 15px;
        margin-top: 50px;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        border: none;
        outline: none;
        cursor: pointer;
      }

      .form__img {
        position: absolute;
        bottom: -150px;
        right: -140px;
        z-index: -1;
      }
    }
  }
}
.landing__content {
  padding: 80px 60px;

  h2 {
    font-size: 40px;
    color: #334d6e;
    font-weight: 500;
    margin-bottom: 80px;
    text-align: center;
  }

  p {
    margin-left: 34px;
    color: #334d6e;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 45px;
    letter-spacing: 0.01em;
    text-align: left;

  }

  .img-fluid {
    position: absolute;
    top: -80px;
    left: 70%;
    z-index: -1;
  }

  .top {
    margin-top: 220px;

    button {
      margin-top: 77px;
      height: 83px;
      width: 83px;
      border-radius: 50%;
      background-color: #006400;
      outline: none;
      box-shadow: none;
      margin-bottom: 35px;
    }
  }
}
.formuchun{
  background-repeat: no-repeat;
  background-size: cover;

  margin-top: 200px;
  .container{
    padding-top: 300px;
    overflow: hidden;
    .row{
      .col-12{
        form {
          .skidka {
            top: -130px;
            left: 80%;
            z-index: 500;
            position: relative;

            span {
              position: absolute;
              text-align: center;
              font-family: Poppins;
              font-size: 30px;
              font-style: normal;
              font-weight: 500;
              line-height: 45px;
              letter-spacing: 0.01em;
              color: #FFFFFF;
              top: 50px;
              left: 40px;
              transform: rotate(35deg);
            }

            img {
              position: absolute;
            }
          }

          padding: 40px 30px;
          background: #78a9cf;
          border: 1px solid #ffffff;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
          /*position: absolute;*/

          transform: translateY(-50%);
          z-index: 100;
          width: 370px;

          .form__select {
            background-color: #fff;
            border-radius: 15px;
            padding: 10px 15px;
            width: 100%;
          }

          input {
            height: 50px;
            border-radius: 15px;
            display: block;
            border: none;
            padding: 10px 15px;
            width: 100%;
            margin-top: 30px;
          }

          button {
            border-radius: 15px;
            background-color: #079e07;
            box-sizing: border-box;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            border-radius: 15px;
            display: block;
            width: 100%;
            padding: 15px;
            margin-top: 50px;
            color: #fff;
            font-size: 20px;
            font-weight: 600;
            border: none;
            outline: none;
            cursor: pointer;
          }

        }
      }
    }
  }
   }
  @media (max-width: 576px) {
    .landing{
      &__home{
        height: 120vh;
        form{

          width: 80%;
          top: 45%;
          left: 15%;
          .form__img{
            display: none;
          }
        }
        .content{
          top: 80%;
          width: 80%;
          margin: 1px -10%;
        }
      }
    }
    .landing__content{
      padding: 10px 6px;
      h2{
        font-size: 24px;
          margin-top: 30px;
          margin-bottom: 30px;
      }
      p{
        font-size: 16px;
          line-height: 20px;

      }
      .img-fluid{
        display: none;
      }
      .top{
        margin-top: 10px;
          button{
              margin-top: 10px;
          }
      }

    }
    .formuchun{
      margin-top: 20px;
      .container{
        margin-top: 0;
        .row{
          .col-12{
            form{
              width: 80%;
              top: 45%;
              left: 15%;
              margin: 0 auto;
              .form__img{
                display: none;
              }
            }
          }
        }

      }
    }
  }
@media (min-width:576px )and(max-width: 768px) {
  .landing{
    &__home{
      height: 120vh;
      form{

        width: 80%;
        top: 45%;
        left: 15%;
        .form__img{
          display: none;
        }
      }
      .content{
        text-align: center;
        top: 80%;
        width: 80%;
        margin: 1px -10%;
      }
    }
  }
  .landing__content{
    padding: 10px 6px;
    h2{
      font-size: 30px;
        margin-top: 20px;
    }
    p{
      font-size: 20px;
    }
    .img-fluid{
      display: none;
    }
    .top{
      margin-top: 10px;
    }

  }
  .formuchun{
    margin-top: 20px;
    .container{
      margin-top: 0;
      .row{
        .col-12{
          form{
            width: 80%;
            top: 45%;
            left: 15%;
            margin: 0 auto;
            .form__img{
              display: none;
            }
          }
        }
      }

    }
  }
}
@media (min-width:768px )and(max-width: 992px) {
  .landing{
    &__home{
      /*height: 60vh;*/
      form{
        top: 30%;
        /*left: 5%;*/

      }
      .content{
          text-align: center;
        top: 60%;
        /*left: 56%;*/
      }
    }
  }
  .landing__content{
    padding: 10px 6px;
    h2{
      font-size: 30px;
        margin-top: 20px;
    }
    p{
      font-size: 20px;
    }
    .img-fluid{
      display: none;

    }
    .top{
      margin-top: 0;
    }

  }
  .formuchun{
    margin-top: 40px;
  }
}
@media (min-width:992px )and(max-width: 1200px) {
  .landing{
    &__home{
      /*height: 50vh;*/
      form{
        top: 50%;
        left: 5%;

      }
      .content{
        top: 40%;
        left: 53%;
      }
    }
  }
  .landing__content{
    padding: 10px 6px;
    h2{
      font-size: 30px;
        margin-top: 30px;
    }
    p{
      font-size: 20px;
    }
    .img-fluid{
      /*display: none;*/
      width: 100%;
top: -100%;
      z-index: -500;
    }
    .top{
      margin-top: 100px;
    }

  }
}
</style>