<template>
  <div class="ramp_shampo">
    <div class="section_one" :style="{ backgroundImage: `url(${back})` }">
      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4 offset-lg-7 text-center position-relative">
            <img :src="shampo" class="position-absolute " alt="" />
            <p class="mb-0 ">RAPM Shampun’</p>
            <form @submit.prevent="order">
              <div class="skidka  "><img :src="skidka" alt=""><span>-30%</span></div>
          <select
            v-model="region_id"
            class="form__select"
            placeholder="Hududni kiriting"
          >
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
    <div class="section_two">
      <div class="container">
        <p>Mustahkam va qora sochlarga erishishning eng samarali usuli</p>
        <div class="row">
          <div class="col-md-8 position-relative">
            <img :src="doc" class="position-absolute" alt="" />
            <span
              >Bu shampun sochlar uchun ozuqaviy moddalarni beradi, tabiiy
              melanin ishlab chiqarishni ko'paytiradi va qora sochlarni ildizdan
              asta-sekin o'sishiga yordam beradi. Foydalanish xavfsizmi? Shampun
              har qanday dori-darmonlarni o'z ichiga olmaydi va FDA tomonidan
              tasdiqlangan sof o'simlik tarkibiy qismlari bilan ishlab
              chiqilgan, shuning uchun har qanday yoshdan foydalanish 100%
              xavfsizdir.
              <br />
              <span class="ml-2">&bullet; Tabiiy<br /></span>
              <span class="ml-2">&bullet; Hafsiz<br /></span>
              <span class="ml-2">&bullet; Samarali<br /></span>
              <span class="ml-2">&bullet; Kerakli<br /></span>
              <span class="ml-2">&bullet; Shifobaxsh<br /><br /></span>

              Sig'imi:<br />
              300 ml.<br /><br />

              Qulayligi:<br />
              Purkovchi uskunaga ega.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="section_three" :style="{backgroundImage: `url(${gril})`}">
      <div class="container">
      <div class="row">
      <div class="col-md-4  text-center position-relative">
        <img :src="shampo" class="position-absolute " alt="" />
        <p class="mb-0 ">RAPM Shampun’</p>
        <form @submit.prevent="order">
          <div class="skidka  "><img :src="skidka" alt=""><span>-30%</span></div>
          <select
                  v-model="region_id"
                  class="form__select"
                  placeholder="Hududni kiriting"
          >
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
import back from "../../../../assets/images/RampSham/image7.png";
import shampo from "./../../../../assets/images/RampSham/image-removebg-preview (2) 1.png";
import doc from "./../../../../assets/images/RampSham/image 8.png";
import skidka from "./../../../../assets/images/RampSham/skid3.png";
import gril from "./../../../../assets/images/RampSham/girl.png";
import { mapState } from "vuex";
import get from "lodash/get";
import { required, minLength } from "vuelidate/lib/validators/";

export default {
  data() {
    return {
      back,
      shampo,
      doc,
      skidka,
      gril,
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
          region,
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
.ramp_shampo {
  .section_one {
    overflow: hidden;
      height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    .container {
      overflow: hidden;
      .row {
        padding-top: 150px;
        padding-bottom: 55px;

        .col-md-4 {
          p {
            font-family: Poppins;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            line-height: 71px;
            letter-spacing: 0.01em;
            color: #ec3d4a;
            margin-left: -200px;
          }

          form {
            .skidka{

              left: 120%;
              z-index: 500;
              position: relative;
              span{
                position: absolute;
                text-align: center;
                font-family: Poppins;
                font-size: 30px;
                font-style: normal;
                font-weight: 500;
                line-height: 45px;
                letter-spacing: 0.01em;
                color: #FFFFFF;
                top: -95px;
                left: -75px;
                transform: rotate(35deg);
              }
              img{
                position: absolute;
              }
            }
            width: 370px;
            /*height: 459px;*/
            padding-top: 65px;
            padding-left: 46px;
            padding-right: 38px;
            padding-bottom: 38px;
            background-color: #5375de;
            border-radius: 15px;

            input {
                border: none;
              margin-bottom: 30px;
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
            }
            select {
                border: none;
              margin-bottom: 30px;
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
              color: gray;
              padding: 19px 25px;
            }

            button {
                border: none;
              background: #079e07;
              box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
              border-radius: 15px;
              height: 58px;
              width: 286px;
              top: 584px;
              margin-top: 34px;
              color: #ffffff;
            }
          }

          img {
            bottom: 0;
            left: -42%;
          }
        }
      }
    }
  }
  .section_two {
      margin-bottom: 140px;
    padding-top: 70px;
    p {
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 53px;
      letter-spacing: 0.01em;
      text-align: center;
      margin-bottom: 35px;
    }
    .col-md-8 {
      padding-top: 43px;
      padding-right: 27px;
      padding-left: 41px;
      padding-bottom: 30px;
      background-color: #5375de;

      border-radius: 15px;

      span {
        font-family: Poppins;
        font-size: 19px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #ffffff;
      }
      img {
        bottom: -25%;
        right: -45%;
      }
    }
  }
  .section_three{
    padding-bottom: 50px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: right;
    background-color: #E9ECEC;
    background-size: cover;
    .row {
      padding-top: 150px;
      padding-bottom: 30px;

      .col-md-4 {
        p {
          font-family: Poppins;
          font-size: 40px;
          font-style: normal;
          font-weight: 700;
          line-height: 71px;
          letter-spacing: 0.01em;
          color: #ec3d4a;
          margin-left: -200px;
        }

        form {
          .skidka{

            left: 120%;
            z-index: 500;
            position: relative;
            span{
              position: absolute;
              text-align: center;
              font-family: Poppins;
              font-size: 30px;
              font-style: normal;
              font-weight: 500;
              line-height: 45px;
              letter-spacing: 0.01em;
              color: #FFFFFF;
              top: -95px;
              left: -75px;
              transform: rotate(35deg);
            }
            img{
              position: absolute;
            }
          }
          width: 370px;
          /*height: 459px;*/
          padding-top: 65px;
          padding-left: 46px;
          padding-right: 38px;
          padding-bottom: 38px;
          background-color: #5375de;
          border-radius: 15px;

          input {
            border: none;
            margin-bottom: 30px;
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
          }
          select {
            border: none;
            margin-bottom: 30px;
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
            color: gray;
            padding: 19px 25px;
          }

          button {
            border: none;
            background: #079e07;
            box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
            border-radius: 15px;
            height: 58px;
            width: 286px;
            top: 584px;
            margin-top: 34px;
            color: #ffffff;
          }
        }

        img {
          bottom: 0;
          left: -42%;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .ramp_shampo {
    .section_one {
      height: 100vh;
      .container {
        .row {
          padding-top: 50px;
          .col-md-4 {
            p {
              font-size: 60px;
              margin-left: 0;


            }
            form {
              /*height: 350px;*/
              margin: 120px auto;
              /*padding: 20px;*/
              img{
                top: -150px;
                left: -110px;
              }

            }
            img{
              /*display: none;*/
              top: 55%;
              left: -12%;
            }
          }
        }
      }
    }
    .section_two {
      margin-top: 0;
      padding-top: 0;
        margin-bottom: 20px;
      p {
        font-size: 24px;
        line-height: 30px;
      }
      .col-md-8 {
        width: 90%;
        padding: 15px;
        margin: 0 auto;
        span {
          font-size: 16px;
        }
        img {
          display: none;
        }
      }
    }
    .section_three{
      .container{
        .row{
          p{
            margin-left: 0;
          }
        }

        form{
          margin-top: 80px;
        }
      }
    }

  }
}
@media (min-width: 576px) and (max-width: 768px) {
  .ramp_shampo {
    .section_one {
        height: 100vh;
      .container {
        .row {
          padding-top: 50px;
          .col-md-4 {
            p {
              font-size: 60px;
              margin-left: 0;


            }
            form {
              /*height: 350px;*/
              margin: 120px auto;
              /*padding: 20px;*/
              img{
                top: -150px;
                left: -110px;
              }

            }
            img{
              /*display: none;*/
              top: 55%;
              left: -12%;
            }
          }
        }
      }
    }
    .section_two {
      margin-top: 0;
      padding-top: 0;
      p {
        font-size: 24px;
        line-height: 30px;
      }
      .col-md-8 {
        width: 100%;
        padding: 15px;
        margin: 0 auto;
        span {
          font-size: 16px;
        }
        img {
          display: none;
        }
      }
    }
    .section_three{
      .container{
        form{
          margin-top: 80px;
        }
      }
    }
  }
}
@media (min-width: 768px) and(max-width: 996px) {
  .ramp_shampo {
    .section_one {
      height: 100vh;
      .container {
        .row {
          padding-top: 50px;
          .col-md-4 {
            p {
              font-size: 60px;
              margin-left: 0;


            }
            form {
              /*height: 350px;*/
              margin: 120px auto;
              /*padding: 20px;*/
              img{
                top: -150px;
                left: -110px;
              }

            }
            img{
              /*display: none;*/
              top: 55%;
              left: -12%;
            }
          }
        }
      }
    }
    .section_two {
      margin-top: 10px;
      padding-top: 10px;
      // .col-md-8 {
      //   // img {
      //   //   /*display: none;*/
      //   // }
      // }
    }
    .section_three{
      .container{
        form{
          /*margin-top: 80px;*/
          margin: 80px auto;
          width: 100%;
        }
      }
    }
  }
}
@media (min-width: 996px) and (max-width: 1200px) {
  .ramp_shampo {
    .section_one {
        height: 100vh;
      .container {
        .row {
          margin-top: 0;
          padding-top: 0;
          .col-md-4 {
            margin-top: 20%;
            right: 60px;
            // p {
              /*font-size: 30px;*/
            // }
          }
        }
      }
    }
    .section_three{
      .col-md-4{
        p{
          margin-left: 0;
        }
      }
    }
  }
}
</style>