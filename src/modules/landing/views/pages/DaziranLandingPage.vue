<template>
  <div class="daziran__landing">
    <div
      class="container-fluid section_one"
      :style="{ backgroundImage: `url(${bg})` }"
    >
      <img :src="logo1" class="img-fluid logo1" alt="" />
      <img :src="logo2" class="img-fluid logo2" alt="" />
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center">
            <img :src="daziran" class="img-fluid" alt="" />
            <p class="mb-0">
              Iste’mol uchun toza ichimlik suvi filtri Hamyonbop va yuqori
              sifatli
            </p>
          </div>
          <div class="col-md-6">
            <form @submit.prevent="order">
              <div class="skidka">
                <img :src="skidka" alt="" /><span>-30%</span>
              </div>
              <select
                v-model="region_id"
                class="form__select"
                placeholder="Hududni kiriting"
              >
                <option
                  v-for="(region, i) in regions"
                  :key="i"
                  :value="region.id"
                >
                  {{ region.name }}
                </option>
              </select>
              <input
                type="text"
                placeholder="Ismingiz"
                v-model="client_name"
                :class="{
                  invalid:
                    ($v.client_name.$dirty && !$v.client_name.required) ||
                    error,
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
    <div class="container">
      <video width="100%" controls>
        <source :src="vedio" type="video/mp4" />
        <source :src="vedio" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="container section_two">
      <div class="row">
        <div class="col-12 px-0">
          <p>
            Ichimlik suvi sotib olishdan charchadingizmi? Unda
            <span>DAZIRAN</span> suv tozalagichlari siz uchun ajoyib yechim.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <p>
            <img :src="tomchi" alt="" /><span
              >Korpus 304 markali sifatli zanglamas metalldan ishlangan</span
            >
          </p>
          <p>
            <img :src="tomchi" alt="" />
            <span> 1 daqiqada 2 L gacha suvni tozalash imkoniyatiga ega </span>
          </p>
          <p>
            <img :src="tomchi" alt="" />
            <span>
              1 ta Filtr kasetasi 6-oygacha sizga. xizmat qiladi. 6-oydan so’ng
              filtr kasetasini o’zinigina almashtirish tavsiya etiladi
            </span>
          </p>
          <p>
            <img :src="tomchi" alt="" />
            <span>
              Komplektida 3- xil nasatka,2-ta filtr kasetasi va puva kley</span
            >
          </p>
          <p>
            <img :src="tomchi" alt="" />
            <span>
              Deyarli barcha suv jo’mrak (kran) lari uchun mo’ljallangan
            </span>
          </p>
          <p>
            <img :src="tomchi" alt="" />
            <span>
              Filtr tarikibida 7 xil mineral mavjud bo’lib, suv aynan shu
              minerallar orqali o’tishi evaziga tozalanadi
            </span>
          </p>
        </div>
        <div class="col-md-4">
          <img :src="jihoz" alt="" />
        </div>
      </div>
    </div>
    <section
      class="section__three"
      :style="{ backgroundImage: `url(${formbg})` }"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 daziranform">
            <img :src="daziran" class="img-fluid daziran" alt="" />
            <p class="mb-0">Hoziroq buyurtma bering</p>
          </div>
          <div class="col-md-6">
            <form @submit.prevent="order">
              <div class="skidka">
                <img :src="skidka" alt="" /><span>-30%</span>
              </div>
              <select
                v-model="region_id"
                class="form__select"
                placeholder="Hududni kiriting"
              >
                <option
                  v-for="(region, i) in regions"
                  :key="i"
                  :value="region.id"
                >
                  {{ region.name }}
                </option>
              </select>
              <input
                type="text"
                placeholder="Ismingiz"
                v-model="client_name"
                :class="{
                  invalid:
                    ($v.client_name.$dirty && !$v.client_name.required) ||
                    error,
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
    </section>
  </div>
</template>

<script>
import logo1 from "./../../../../assets/images/daziran/BITBAD_logo_2-removebg-preview 1.png";
import logo2 from "./../../../../assets/images/daziran/BITBAD_logo_2-removebg-preview 2.png";
import daziran from "./../../../../assets/images/daziran/image_2021-04-15_14-57-04-removebg-preview (3) 1.png";
import bg from "../../../../assets/images/daziran/image6.png";
import tomchi from "../../../../assets/images/daziran/Vector1.png";
import jihoz from "../../../../assets/images/daziran/image_2021-04-15_14-58-25__2_-removebg-preview 1.png";
import qaytish from "../../../../assets/images/daziran/top.png";
import skidka from "../../../../assets/images/daziran/skid1.png";
import formbg from "../../../../assets/images/daziran/formbg.png";
import vedio from "../../../../assets/vedio/daziran.mp4";

import { mapState } from "vuex";
import get from "lodash/get";
import { required, minLength } from "vuelidate/lib/validators/";

export default {
  data() {
    return {
      logo1,
      logo2,
      daziran,
      bg,
      tomchi,
      jihoz,
      qaytish,
      vedio,
      skidka,
      formbg,
      region_id: 1,
      client_name: this.user ? this.user.full_name : "",
      client_phone: this.user ? this.user.phone_number : "",
    };
  },
  validations: {
    client_name: { required },
    client_phone: { required, minLength: minLength(12) },
  },
  props: ["product", "regions", "user"],

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
        const product = this.product.id
          ? this.product.id
          : this.product.product.id;
        const sharer = this.user ? this.user.id : this.product.user_id;
        const number_of_products = 1;
        this.$emit("order", {
          client_name,
          client_phone,
          region,
          product,
          sharer,
          number_of_products,
        });
        this.$swal({
          icon: "success",
          title:
            "Sizning buyurtmangiz yuborildi!!!<br> <small>Tez orada operatorimiz siz bilan bog'lanadi</small>",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.daziran__landing {
  .logo1 {
    margin-left: 20px;
  }

  .section_one {
    overflow: hidden;
    padding-top: 19px;
    padding-bottom: 38px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 165px;
    height: 100vh;

    p {
      font-family: Poppins;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.01em;
      text-align: center;
      color: #334d6e;
    }

    form {
      .skidka {
        top: -150px;
        left: 72%;
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
          color: #ffffff;
          top: 60px;
          left: 40px;
          transform: rotate(35deg);
        }
        img {
          position: absolute;
        }
      }
      width: 370px;
      padding-top: 35px;
      padding-left: 46px;
      padding-right: 38px;
      padding-bottom: 38px;
      background-color: #78a9cf;
      border-radius: 15px;
      margin-top: 165px;
      margin-left: 120px;

      input,
      select {
        border: none;
        margin-top: 30px;
        height: 58px;
        width: 286px;
        border-radius: 15px;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #9abce7;
        padding: 19px 25px;
        outline: none;
      }

      button {
        border: none;
        background: #079e07;
        box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
        border-radius: 15px;
        height: 58px;
        width: 286px;
        top: 584px;
        outline: none;
        margin-top: 34px;
        color: #ffffff;
      }
    }
  }

  .section_two {
    overflow: hidden;
    margin-top: 161.67px;
    .row {
      .col-12 {
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
        p {
          font-family: Poppins;
          font-size: 37px;
          font-style: normal;
          font-weight: 500;
          line-height: 60px;
          letter-spacing: 0.01em;
          text-align: center;
          color: #334d6e;

          span {
            color: #78a9cf;
          }
        }
      }
      .col-md-8 {
        margin-top: 100px;
        p {
          display: flex;
          align-items: center;
          margin-bottom: 56px;
          img {
            margin-right: 16px;
            width: 25px;
          }
          span {
            font-family: Poppins;
            font-size: 21px;
            font-style: normal;
            font-weight: 500;
            line-height: 38px;
            letter-spacing: 0.01em;
            text-align: left;
            color: #334d6e;
          }
        }
      }
      .col-md-4 {
        margin-top: 50px;
      }
    }
  }
  .section__three {
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px 1px;
    .daziran {
      width: 60%;
    }
    form {
      margin-left: auto;
      margin-top: 150px;
      .skidka {
        top: -150px;
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
          color: #ffffff;
          top: 60px;
          left: 40px;
          transform: rotate(35deg);
        }
        img {
          position: absolute;
        }
      }
      padding: 65px 46px;
      background: rgba(33, 150, 243, 0.57);
      border: 1px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      right: 60px;
      z-index: 99;
      width: 370px;
      .form__select {
        background-color: #fff;
        border-radius: 15px;
        padding: 10px 15px;
        width: 100%;
        outline: none;
        cursor: pointer;
        height: 77px;
      }
      input {
        height: 58px;
        border-radius: 15px;
        display: block;
        border: none;
        padding: 10px 15px;
        width: 100%;
        margin-top: 30px;
      }
      button {
        height: 58px;
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
    p {
      font-family: Poppins;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 60px;
      letter-spacing: 0.01em;
      color: #334d6e;
    }
  }
}

@media (max-width: 576px) {
  .daziran__landing {
    .logo1 {
      width: 8%;
    }
    .logo2 {
      width: 30%;
    }

    .section_one {
      height: 110vh;
      .col-md-6 {
        img {
          width: 50%;
          margin-bottom: 30px;
        }
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
      form {
        margin: 50px auto;
        width: 90%;
        padding: 20px;

        input {
          width: 100%;
        }
        select {
          width: 100%;
        }
        button {
          width: 100%;
        }
        .skidka {
          top: -70px;
          span {
            top: 35px;
            left: 25px;
            font-size: 22px;
          }
        }
      }
      margin-bottom: 10px;
    }
    .section_two {
      .row {
        .col-12 {
          p {
            font-size: 24px;
            line-height: 30px;
          }
          button {
            margin-top: 10px;
          }
        }
        .col-md-4 {
          img {
            display: none;
          }
        }
        .col-md-8 {
          margin-top: 20px;
          p {
            margin-bottom: 20px;
            span {
              font-size: 18px;
              line-height: 20px;
            }
          }
        }
      }
      margin-top: 10px;
    }
    .section__three {
      .daziranform {
        text-align: center;
        p {
          font-size: 30px;
          line-height: 35px;
        }
      }
      form {
        margin: 50px auto;
        width: 90%;
        padding: 20px;
        input {
          width: 100%;
        }
        select {
          width: 100%;
        }
        .form__select {
          height: 58px;
        }
        button {
          width: 100%;
        }
        .skidka {
          top: -95px;
          img {
            width: 50%;
          }
          span {
            top: 35px;
            left: 25px;
            font-size: 22px;
          }
        }
      }
    }
  }
}
@media (min-width: 576px) and (max-width: 768px) {
  .daziran__landing {
    .logo1 {
      width: 8%;
    }
    .logo2 {
      width: 30%;
    }

    .section_one {
      .col-md-6 {
        img {
          width: 50%;
          margin-bottom: 30px;
        }
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
      form {
        margin: 30% auto;
        width: 90%;
        input {
          width: 100%;
        }
        select {
          width: 100%;
        }
        button {
          width: 90%;
        }
      }
      margin-bottom: 10px;
    }
    .section_two {
      .row {
        .col-12 {
          p {
            font-size: 25px;
            line-height: 30px;
          }
          button {
            margin-top: 10px;
          }
        }
        .col-md-4 {
          img {
            display: none;
          }
        }
        .col-md-8 {
          margin-top: 20px;
          p {
            margin-bottom: 20px;
            span {
              font-size: 18px;
              line-height: 20px;
            }
          }
        }
      }
      margin-top: 10px;
    }
    .section__three {
      .daziranform {
        text-align: center;
        p {
          font-size: 30px;
          line-height: 35px;
        }
      }
      form {
        margin: 60px auto;
        width: 90%;

        input {
          width: 100%;
        }

        select {
          width: 100%;
        }
        .form__select {
          height: 58px;
        }

        button {
          width: 100%;
        }

        .skidka {
          top: -130px;
          img {
            width: 50%;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .daziran__landing {
    .section_one {
      .container {
        margin: 10% 10px;
      }
      form {
        margin: 200px auto;
        .skidka {
          img {
            width: 85%;
          }
          span {
            /*font-size: 24px;*/
            top: 60px;
            left: 40px;
            font-size: 30px;
          }
          top: -120px;
        }
      }
      margin-bottom: 10px;
    }
    .section_two {
      .row {
        .col-12 {
          p {
            font-size: 25px;
            line-height: 30px;
          }
          button {
            margin-top: 10px;
          }
        }
        .col-md-4 {
          img {
            /*display: none;*/
            width: 100%;
          }
        }
        .col-md-8 {
          margin-top: 20px;
          p {
            margin-bottom: 20px;
            span {
              font-size: 18px;
              line-height: 20px;
            }
          }
        }
      }
      margin-top: 10px;
    }

    .section__three {
      form {
        .skidka {
          img {
            width: 85%;
          }

          span {
            /*font-size: 24px;*/
            top: 60px;
            left: 40px;
            font-size: 30px;
          }
          top: -120px;
        }
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .daziran__landing {
    .section_one {
      form {
        margin: 200px auto;
      }
      margin-bottom: 10px;
    }
    .section_two {
      .row {
        .col-12 {
          p {
            font-size: 25px;
            line-height: 30px;
          }
          button {
            margin-top: 10px;
          }
        }
        .col-md-4 {
          img {
            /*display: none;*/
            width: 100%;
          }
        }
        .col-md-8 {
          margin-top: 40px;
          p {
            margin-bottom: 20px;
            span {
              line-height: 30px;
            }
          }
        }
      }
      margin-top: 10px;
    }
  }
}
</style>