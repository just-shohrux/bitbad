<template>
  <div class="landing__wrapper">
    <div class="landing__home">
      <img :src="logo" class="img-fluid logo" alt="logo" />
      <img :src="family" class="girl img-fluid" alt="family" />
      <div class="content">
        <h2>Дымок</h2>
      </div>
      <form @submit.prevent="order">
          <div class="skidka">
            <div class="inner">        
            <small>-30%</small>
            <img :src="skidka" alt="">
            </div>
          </div>
          <select
            v-model="region"
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
    <div class="landing__vedio">
      <h2>Bel, oyoq, tizza, grija og’riqlaridan charchadingizmi?</h2>
      <div class="flex">
        <div class="flex-text">
          Дымок - sizdagi barcha og’riqlar va grijsni tez fursat ichida davolovchi Koreya medicinasi va tabobat olamida o’z o’rniga ega tabiiy giyohlardan tayorlangan dori vositasi, hozirgi kunda bizning davlatimizga ham kirib ulgurgan.
          Natija deyarli darhol seziladi!!!
        </div>
        <div class="flex-image">
            <img :src="image1" alt="">
        </div>
      </div>
      <div class="flex2">
        <div class="flex-image">
          <img :src="spina" alt="">
        </div>
        <div class="flex-text">
          <b>Ko'rsatmalar:</b>
          <div class="info">
            <ul>
            <li>Revmatizm</li>
            <li>Artrit</li>
            <li>Artroz</li>
            <li>Podogra</li>
            <li>Bo'g'im og'riqlari</li>
          </ul>

          <ul>
            <li>Bo'g'imlarga suyuqlik yetishmasligi</li>
            <li>Suyak sinishi</li>
            <li>Operatsiyadan song tez tiklanish</li>
            <li>Umurtqa pog'onasidagi og'riqlar</li>
            <li>Grija</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="landing__form">
      <form @submit.prevent="order">
        <img class="smokeform" :src="smokeform" alt="">
          <div class="skidka">
            <div class="inner">        
            <small>-30%</small>
            <img :src="skidka" alt="">
            </div>
          </div>
          <select
            v-model="region"
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
</template>

<script>
import logo from "./../../../../assets/images/logo.png";
import skidka from "./../../../../assets/images/Vector.png";
import spina from "./../../../../assets/images/spina.png";
import icon from "./../../../../assets/images/up-icon.png";
import image1 from "./../../../../assets/images/image1.png";
import family from "./../../../../assets/images/family.png";
import smokeform from "./../../../../assets/images/smoke-form.png";
import form from "./../../../../assets/images/smoke-form.png";
import dimok from "./../../../../assets/images/dimok.png";
import { mapState } from "vuex";
import get from "lodash/get";
import { required, minLength } from "vuelidate/lib/validators/";
export default {
  data() {
    return {
      logo,
      family,
      form,
      icon,
      smokeform,
      spina, 
      dimok,
      skidka,
      image1,
      region: 1,
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
        const region = this.region;
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
          title: "Sizning buyurtmangiz yuborildi!!! <br> <small>Tez orada operatorimiz siz bilan bog'lanadi</small>",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.landing {
  overflow: hidden;
  width: 100%;
  &__home {
    height: 100vh;
    background-color: #DFDCDC;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    .girl {
      left: 30px;
      bottom: 0;
      position: absolute;
      z-index: 1;
      width: 60%;
      left: 10%;
    }
    .logo {
      top: 30px;
      left: 30px;
      position: absolute;
      z-index: 9;
      cursor: pointer;
    }

    .content {
      position: absolute;
      left: 60%;
      top: 80px;
      z-index: 99;
      transform: translateX(-50%);
      text-align: center;
      h2 {
        font-size: 80px;
        color: #006400;
        font-weight: 700;
        margin-bottom: 15px;
      }
    }
    form {
      padding: 40px 30px;
      background: #7997ff;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      position: absolute;
      bottom: 30px;
      right: 80px;
      z-index: 99;
      width: 370px;
      .skidka {
        width: 40%;
        position: absolute;
        border-radius: 50%;
        top: -70px;
        right: -70px;
        z-index: 1;
        overflow: hidden;
        .inner {
          width: 100%;
          height: 100%;
          z-index: 1;
          border-radius: 50%;
          small {
          position: absolute;
          z-index: 2;
          font-size: 25px;
          display: flex;
          justify-content: center;
          align-content: center;
          line-height: 150px;
          color: white;
          width: 100%;
          border-radius: 50%;
          height: 100%;
          transform: rotate(30deg);
            }
          img {
          width: 100%;
          border-radius: 45%;
          position: relative;
          z-index: 1;
        }
        }

        
      }
      .form__select {
        background-color: #fff;
        border-radius: 15px;
        padding: 10px 15px;
        width: 100%;
        outline: none;
        border: 1px solid transparent;
        z-index: 99;
      }
      input {
        height: 50px;
        border-radius: 15px;
        display: block;
        border: none;
        padding: 10px 15px;
        width: 100%;
        margin-top: 30px;
        &.invalid {
          border: 1px solid #f19f9d;
        }
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
      .maz {
        position: absolute;
        bottom: -30px;
        right: 90%;
        z-index: 99;
      }
    }
  }
    &__vedio {
      h2 {
        text-align: center;
        margin: 5% 0 0;
        width: 95%;
        color: rgb(0,100,0);
        font-weight: 550;
      }

      .flex {
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-bottom: 3%;

          .flex-text {
            font-size: 18px;
            font-weight: 550;
            flex: 5;
            height: 100%;
          }

          .flex-image {
            flex: 1;
          }
      }

      .flex2 {
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-bottom: 3%;

          .flex-text {
            font-size: 18px;
            font-weight: 550;
            flex: 5 !important;
            height: 100%;

            .info {
              display: flex;
              flex-direction: row;
              ul {
                width: 50%;
                justify-content: space-around;
                padding-left: 5%;
                li {
                  list-style: circle;
                }
              }
            }
          }

          .flex-image {
            
            img {
              width: 250px;
            }
          }
      }

      .formTwo {
        width: 100%;
        padding: 1.5% 0;
        display: flex;
        justify-content: center;
        align-content: center;
        form {
      padding: 40px 30px;
      background: #7997ff;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      position: relative;
      z-index: 99;
      width: 370px;
      .form__select {
        background-color: #fff;
        border-radius: 15px;
        padding: 10px 15px;
        width: 100%;
        outline: none;
        border: 1px solid transparent;
      }
      input {
        height: 50px;
        border-radius: 15px;
        display: block;
        border: none;
        padding: 10px 15px;
        width: 100%;
        margin-top: 30px;
        &.invalid {
          border: 1px solid #f19f9d;
        }
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
      .maz {
        position: absolute;
        bottom: -30px;
        right: 90%;
        z-index: 99;
      }
        }
      }

   
         button {
            background-color: rgb(0, 100, 0);
            padding: 17px;
            border-radius: 50%;
            cursor: pointer;
            margin: 3% 0 3%;
            transition: background-color 1s;
            border: 1px solid transparent;
          }
          button:hover {
            background-color: rgb(14, 197, 14);
          }


  }

  &__form {
    height: 90vh;
    background-image: url(./../../../../assets/images/dimok.png);
    position: relative;
    background-size: cover;
      form {
      padding: 40px 30px;
      background: #7997ff;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      position: absolute;
      bottom: 50px;
      right: 80px;
      z-index: 99;
      width: 370px;
      .smokeform {
        position: absolute;
        left: -45%;
        bottom: -10%;
      }
      .skidka {
        width: 40%;
        position: absolute;
        border-radius: 50%;
        top: -70px;
        right: -70px;
        z-index: 1;
        overflow: hidden;
        .inner {
          width: 100%;
          height: 100%;
          z-index: 1;
          border-radius: 50%;
          small {
          position: absolute;
          z-index: 2;
          font-size: 25px;
          display: flex;
          justify-content: center;
          align-content: center;
          line-height: 150px;
          color: white;
          width: 100%;
          border-radius: 50%;
          height: 100%;
          transform: rotate(30deg);
            }
          img {
          width: 100%;
          border-radius: 45%;
          position: relative;
          z-index: 1;
        }
        }

        
      }
      .form__select {
        background-color: #fff;
        border-radius: 15px;
        padding: 10px 15px;
        width: 100%;
        outline: none;
        border: 1px solid transparent;
        z-index: 99;
      }
      input {
        height: 50px;
        border-radius: 15px;
        display: block;
        border: none;
        padding: 10px 15px;
        width: 100%;
        margin-top: 30px;
        &.invalid {
          border: 1px solid #f19f9d;
        }
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
      .maz {
        position: absolute;
        bottom: -30px;
        right: 90%;
        z-index: 99;
      }
    }
    
  }

  @media screen and (max-width: 1000px) {
    &__home {
      .content {
        left: 50%;
      }

      form {
        bottom: 10px;
        right: 80px;
      }

      .girl {
        width: 100%;
        left: 0px;
      }
    }

    &__vedio {
      .flex {
        width: 90%;
        .flex-text {
          font-size: 15px;
        }
      }

      .flex2 {
        width: 90%;
        .flex-text {
          font-size: 14px;
        }
        .flex-image {
          img {
            width: 150px;
          }
        }
      }
    }
    &__form {
      form {
        bottom: 10px;
        right: 80px;
      }
    }
  }

   @media screen and (max-width: 700px) {
    &__home {
      .content {
        left: 50%;
      }

      form {
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        right: 0;
      }

      .maz {
        width: 50%;
      }

      .girl {
        width: 800px !important;
        left: 0px;
        display: none;
      }
    }

    &__vedio {
      button {
            width: 60px;
            height: 60px;
            padding: 0px !important;
            display: flex;
            justify-content: center;
            align-content: center;
            position: relative;
            img {
              position: absolute;
              width: 30px;
              top: 25%;
            }
          }
      h2 {
        font-size: 24px;
      }
      .flex {
        flex-direction: column;
        .flex-image{
          order: 1;
        }
        .flex-text {
          order: 2;
          margin: 15px 0;
          text-align: justify;
        }
      }

      .flex2 {
          flex-direction: column;
          justify-content: center;
          align-content: center;
          .flex-image {
            margin: 0 auto;
          }
          .flex-text {
            width: 100%;
            margin: 15px 0;
            b {
              margin: 10px 0;
            };
          }
      }
    }
    &__form {
      overflow: hidden;
      form {
        bottom: 5%;
        .smokeform {
          display: none;
        }
        .skidka {
          transform: rotate(-30deg);
          top: -80px;
        }
      }
    }
  }

   @media screen and (max-width: 500px) {
    &__home {
      .logo {
        top: 10px;
        left: 10px;
      }
      .content {
        left: 50%;
        h2 {
          font-size: 72px;
        }
      }

      form {
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        right: 0;
        .skidka {
          top: -80px;
          right: -40px;
          transform: rotate(-30deg);
          .inner {
            small {
            line-height: 150px;
          }
          }
        }
      }
      

      .maz {
        width: 30%;
      }

      .girl {
        width: 800px !important;
        left: 0px;
        display: none;
      }
    }

    &__vedio {
      .flex2 {
        .flex-text {
          .info {
            flex-direction: column;
            ul {
              width: 100%;
            }
          }
        }
      }

      button {
            width: 50px;
            height: 50px;
            padding: 0px !important;
            display: flex;
            justify-content: center;
            align-content: center;

            img {
              position: absolute;
              top: 20%;
              width: 30px;
            }
          }
    }
    &__form {
       form {
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        right: 0;
        .skidka {
          top: -80px;
          right: -40px;
          transform: rotate(-30deg);
          .inner {
            small {
            line-height: 150px;
          }
          }
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
      &__home {
        .logo {
          width: 130px;
        }
        form {
          width: 90%;
          bottom: 5px;
          left: 50%;
          button {
            font-size: 15px;
          }
          input {
            font-size: 15px;
          }
          .maz {
            display: none;
          }
          .skidka {
            right: -30px;
            width: 45%;
            .inner {
              small {
                line-height: 130px;
                font-size: 22px;
              }
            }
          }
        }
      }

      &__vedio {
        h2 {
          font-size: 18px;
          margin: 15px 0;
        }
        .flex {
          .flex-image {
            display: flex;
            justify-content: center;
            img {
              width: 50%;
              margin: 0 auto;
            }
          }
          .flex-text {
            font-size: 13px;
          }
        }

        .flex2 {
          .flex-text {
            ul {
              li {
                font-size: 12px;
              }
            }
          }
        }
      }
      &__form {
        form {
          width: 90%;
          bottom: 5px;
          left: 50%;
          button {
            font-size: 15px;
          }
          input {
            font-size: 15px;
          }
          .maz {
            display: none;
          }
          .skidka {
            right: -30px;
            width: 45%;
            .inner {
              small {
                line-height: 130px;
                font-size: 22px;
              }
            }
          }
        }
      }
  }
  @media screen and (max-width: 400px) and (max-height: 600px){
    &__home {
      height: 115vh;
    }
  }


  @media screen and (min-height: 700px) {
     &__home {
        height: 90vh;
     }


  }
}
</style>