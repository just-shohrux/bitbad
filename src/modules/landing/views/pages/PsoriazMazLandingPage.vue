<template>
  <div class="landing__wrapper">
    <div class="landing__home" :style="{ backgroundImage: `url(${bg})` }">
      <img :src="logo" class="img-fluid logo" alt="logo" />
      <img :src="girl" class="girl img-fluid" alt="girl" />
      <div class="content">
        <h2>Psoriaz maz</h2>
        <p>Tabiiy mahsulotlardan tayerlangan malham</p>
      </div>
      <form @submit.prevent="order">
        <div class="skidka  "><img :src="skidka" alt=""><span>-30%</span></div>
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
        <img :src="maz" class="maz" alt="maz" />
      </form>
    </div>
    <div class="container">
      <video width="100%" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="landing__content">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 px-0">
            <div class="d-flex ">
              <img :src="yaproq" alt="">
              <p>
                Terining kichishishi Psoriaz, Ekzema, Dermatit, Qo’tir, Temiratka infektsiyalari uchun qo’llaniladi
              </p>
            </div>

            <div class="d-flex ">
              <img :src="yaproq" alt="">
              <p>
              Psoriaz malhami teri kasalligini juda tez va samarali davolaydi
              </p>
            </div>

            <div class="d-flex ">
              <img :src="yaproq" alt="">
              <p>
              Psoriaz malhamini kuniga 2 mahal zararlangan teri ustiga suritishingiz kifoya, natija deyarli bittada ta’sir kuchini ko’rsatadi
              </p>
            </div>
          </div>
          <div class="col-lg-5">
            <img :src="doctor" alt="">
          </div>
        </div>
      </div>
    </div>
    <section class="landing__form" :style="{backgroundImage: `url(${pastkiforma})`}">
      <div class="container">
      <div class="row">
        <div class="col-12 ">
          <form @submit.prevent="order">
            <div class="skidka  "><img :src="skidka" alt=""><span>-30%</span></div>
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
            <img :src="maz" class="maz" alt="maz" />
          </form>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import logo from "./../../../../assets/images/logo.png";
import bg from "./../../../../assets/images/bg/psoriaz-bg.png";
import girl from "./../../../../assets/images/girl.png";
import maz from "./../../../../assets/images/maz.png";
import yaproq from "./../../../../assets/images/Vector3.png";
import doctor from "./../../../../assets/images/Female-Doctor-Transparent-Images 1.png";
import top from "./../../../../assets/images/daziran/top.png";
import skidka from "./../../../../assets/images/daziran/skid2.png";
import pastkiforma from "./../../../../assets/images/pastkiform.png";
import { mapState } from "vuex";
import get from "lodash/get";
import { required, minLength } from "vuelidate/lib/validators/";
export default {
  data() {
    return {
      logo,
      bg,
      girl,
      maz,
      yaproq,
      doctor,
      top,
      skidka,
      pastkiforma,
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
.landing {
  &__home {
    margin-bottom: 153px;
    height: 100vh;
    background-color: #99cf67;
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
      left: 59%;
      top: 60px;
      transform: translateX(-59%);
      text-align: center;
      z-index: 3;
      h2 {
        font-size: 70px;
        color: #006400;
        font-weight: 700;
        margin-bottom: 15px;
      }
      p {
        color: #334d6e;
        font-size: 24px;
        font-weight: 700;
      }
      z-index: 500;
    }
    form {
      .skidka{
        top: -150px;
        left: 72%;
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
          top: 60px;
          left: 40px;
          transform: rotate(35deg);
        }
        img{
          position: absolute;
        }
      }
      padding: 40px 30px;
      background: rgba(33, 150, 243, 0.57);
      border: 1px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      position: absolute;
      bottom: 100px;
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
      .maz {
        position: absolute;
        bottom: -100px;
        left: -25px;
        z-index: 99;
      }
    }
  }
  &__content{
    overflow: hidden;
    margin-top: 100px;
    .col-lg-7{
      margin-top: 100px;
      .d-flex{
        align-items: center;
        margin-bottom: 76px;
      p {
        margin-left: 34px;
        font-family: Poppins;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 38px;
        letter-spacing: 0.01em;
        text-align: left;


      }
      }
    }
    .col-lg-5{
      margin-top: 50px;
    }


  }
  &__form{
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 103px 1px;
    form {
      .skidka{
        top: -150px;
        left: 80%;
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
          top: 60px;
          left: 40px;
          transform: rotate(35deg);
        }
        img{
          position: absolute;
        }
      }
      padding: 87px 64px;
      background: rgba(33, 150, 243, 0.57);
      border: 1px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;


      right: 60px;
      z-index: 99;
      width: 50%;
      height: 609px;
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
        height: 77px;
        border-radius: 15px;
        display: block;
        border: none;
        padding: 10px 15px;
        width: 100%;
        margin-top: 30px;
      }
      button {
        height: 77px;
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
        bottom: -40px;
        left:20%;
        z-index: 99;
      }
    }
  }
}

@media (max-width: 576px){
  .landing{
    &__home{
      height: 105vh;
      position: relative;
      margin-bottom: 50px;
      form{
        /*position: absolute;*/
        position: relative;
        left: 0%;
        width: 90%;
        margin-left:5% ;
        margin-right:5% ;
        top: 300px;
      height: 55%;
        padding: 30px 20px;

        .skidka{
          width: 1%;
          left: 70%;

        }
        .maz{
          width: 90%;
          bottom: -35px;
          left: 1px;
        }
      }
      .content{
        width: 100%;
        top: 100px;
        h2{
          font-size: 30px;
        }
        p{
          font-size: 20px;
        }
      }
    }
    &__content{
      margin-top: 0;
      .col-lg-7{
        margin-top: 10px;
        .d-flex {
          margin-bottom: 20px;
          p {
            font-size: 20px;
            line-height: 25px;
          }
        }
      }
      .col-lg-5{
        margin-top: 0;
        img{
          width: 100%;
        }
      }
    }
    &__form{
      overflow: hidden;
      form{
        padding: 10%;
        height: 100%;
        width: 100%;
        .skidka{
          left: 70%;

        }
        .maz{
          left: 10px;
          width: 100%;
          bottom: -60px;
        }
        input,button,.form__select{
          height: 65px;
        }
      }
    }
  }
}
@media (min-width:576px )and(max-width: 768px){
  .landing{
    &__home{
      margin-bottom: 50px;
      form{
        left: 0%;
        width: 80%;
        margin: 0 10%;
        .skidka{
          left: 90%;
        }
      }
      .content{
        width: 100%;
        h2{
          font-size: 30px;
        }
        p{
          font-size: 25px;
        }
      }
    }
    &__content{
      margin-top: 0;
      .col-lg-7{
        margin-top: 10px;
        .d-flex {
          margin-bottom: 20px;
          p {
            font-size: 20px;
            line-height: 25px;
          }
        }
      }
      .col-lg-5{
        margin-top: 0;
        img{
          width: 100%;
        }
      }
    }
    &__form{
      form{
       width: 100%;
        margin: 0 auto;
        .maz{
          left: 50px;
        }
        .skidka{
          width: 1%;
        }
      }
    }
  }
}
@media (min-width:768px )and(max-width: 992px){
  .landing{
    &__home{
      .girl{
        width: 70%;
      margin: 1px 15%;
      }
      margin-bottom: 50px;
      form{
        left: 0%;
        width: 80%;
        margin: 20% 10%;
        .skidka{
          left: 90%;
        }
      }
      .content{
        top: 120px;
        width: 100%;
        h2{
          font-size: 40px;
        }
        p{
          font-size: 30px;
        }
      }
    }
    &__content{
      margin-top: 0;
      .col-lg-7{
        margin-top: 10px;
        .d-flex {
          margin-bottom: 20px;
          p {
            font-size: 20px;
            line-height: 25px;
          }
        }
      }
      .col-lg-5{
        margin-top: 0;
        img{
          width: 100%;
        }
      }
    }
    &__form{
      form{
        width: 70%;
      }
    }
  }
}
@media (min-width:992px )and(max-width: 1200px){
  .landing{
    &__home{
      .girl{
        width: 50%;
      }
      margin-bottom: 50px;
      form{
        left: 32%;
        width: 50%;
        margin: 20% 10%;

        .skidka{
          left: 85%;
        }
      }
      .content{
        width: 100%;
        top:18%;
      }
    }
    &__content{
      margin-top: 50px;
      .col-lg-7{
        margin-top: 10px;
        .d-flex {
          margin-bottom: 20px;
          p {
            font-size: 20px;
            line-height: 25px;
          }
        }
      }
      .col-lg-5{
        margin-top: 0;
        img{
          width: 100%;
        }
      }
    }
    &__form {
      form {
        width: 60%;
      }
    }
  }
}
  @media (min-width: 1200px) {
    .landing{
      &__content{
        .col-lg-5{
          position: relative;
          img{
            position: absolute;
            /*width: 100%;*/
            left: -100px;
            top: -50px;
          }
        }
      }
    }
  }
</style>