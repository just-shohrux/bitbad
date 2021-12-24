<template>
  <div class="landing__wrapper" id="landing__wrapper">
    <div class="landing__home" :style="{ backgroundImage: `url(${bg})` }">
      <img :src="logo" class="img-fluid logo" alt="logo" />
      <div class="content">
        <h2>Золотой олень</h2>
        <p>Bio qo’shimcha</p>
      </div>
      <form @submit.prevent="order">
        <div class="skidka">
                    <div class="inner">        
                    <small>-30%</small>
                    <img src="./../../../../assets/images/Vector.png" alt="">
                    </div>
          </div>
        <select v-model="region_id" class="form__select">
          <option v-for="(region, i) in regions" :key="i" :value="region.id">{{ region.name }}</option>
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
        >Ismingizni kiriting</div>
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
        >Telefon raqamingizni kiriting</div>
        <div
          v-else-if="!$v.client_phone.minLength && $v.client_phone.$dirty"
          class="text-center text-danger mt-1 w-60"
        >Telefon raqam to'liq kiritilmagan</div>
        <div v-else-if="error" class="text-center text-danger mt-1 w-60">{{ error }}</div>
        <button type="submit">BUYURTMA BERISH</button>
        <img :src="maz" class="maz" alt="maz" />
      </form>
    </div>
    <div class="landing__content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col1">
            <div class="flex">
              <div class="flex-icon">
                <img :src="truee" alt />
              </div>
              <div class="flex-text">
                <p>
                  “Золотой олень” sharikchalari - bu tibiyot hunarmandlarining
                  qadimiy retseptlari bo’yicha, Tibet tog’ining 100% tabiiy
                  tarkibiy qisimlaridan yaratilgan
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-icon">
                <img :src="truee" alt />
              </div>
              <div class="flex-text">
                <p>
                  Uni ham jinsiy aloqa vaqtini uzaytirish uchun, ham prostata bezi
                  va buyraklar faoliyatidagi buzilishlar bilan bog’lik bo’lgan jinsiy
                  faoliyatlardan halos bo’lish uchun ishlatish tavsiya etiladi
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="flex-icon">
                <img :src="truee" alt />
              </div>
              <div class="flex-text">
                <p>
                  Jinsiy aloqadan 30 daqiqa oldin chaynab suv bilan iste’mol qilinadi
                  <br />Profilaktika maqsadida har 3 kunda 1 tabletkadan foydalaning
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col2">
            <img :src="doctor" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="landing__form">
      <h1>Hoziroq buyurtma bering</h1>
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <form @submit.prevent="order">
              <div class="skidka">
                    <div class="inner">        
                    <small>-30%</small>
                    <img src="./../../../../assets/images/Vector.png" alt="">
                    </div>
          </div>
        <select v-model="region_id" class="form__select">
          <option v-for="(region, i) in regions" :key="i" :value="region.id">{{ region.name }}</option>
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
        >Ismingizni kiriting</div>
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
        >Telefon raqamingizni kiriting</div>
        <div
          v-else-if="!$v.client_phone.minLength && $v.client_phone.$dirty"
          class="text-center text-danger mt-1 w-60"
        >Telefon raqam to'liq kiritilmagan</div>
        <div v-else-if="error" class="text-center text-danger mt-1 w-60">{{ error }}</div>
        <button type="submit">BUYURTMA BERISH</button>
      </form>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <img :src="maz" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "./../../../../assets/images/logo.png";
import bg from "./../../../../assets/images/bg/goldenbg.png";
import maz from "./../../../../assets/images/golden_img.png";
import truee from './../../../../assets/images/true.png';
import doctor from './../../../../assets/images/doctor.png';
import icon from './../../../../assets/images/up-icon.png';
import { mapState } from "vuex";
import get from "lodash/get";
import { required, minLength } from "vuelidate/lib/validators/";
export default {
  data() {
    return {
      logo,
      bg,
      maz,
      truee,
      doctor, 
      icon,
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
        const region_id = this.region_id;
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
          title: "Sizning buyurtmangiz yuborildi!!! <br> <small>Tez orada operatorimiz siz bilan bog'lanadi</small>",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.landing {
  &__home {
    height: 110vh;
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
      left: 50%;
      width: 100%;
      top: 60px;
      transform: translateX(-50%);
      text-align: center;
      h2 {
        font-size: 70px;
        color: #006400;
        font-weight: 700;
        letter-spacing: 3px;
        margin-bottom: 15px;
      }
      p {
        color: #334d6e;
        font-size: 28px;
        font-weight: 700;
      }
    }
    form {
      padding: 40px 30px;
      background: #ffffff;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      position: absolute;
      bottom: 100px;
      right: 120px;
      z-index: 1;
      width: 370px;
          .skidka {
                width: 150px;
                position: absolute;
                border-radius: 50%;
                top: -70px;
                right: -70px;
                z-index: 3;
                overflow: hidden;
                .inner {
                  width: 100%;
                  height: 100%;
                  z-index: 1;
                  border-radius: 50%;
                  position: relative;

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
        background-color: #f0f0f0;
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
        background-color: #f0f0f0;
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
        z-index: 10;
      }
      .maz {
        position: absolute;
        bottom: -120px;
          right: -100px;
        z-index: -99;
        width: 250px;
      }
    }
  }
  &__content {
    padding: 10% 0%;

    .container-fluid {

      .row {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        .col1 {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .flex {
            width: 100%;
            display: flex;
            flex-direction: row;
            .flex-icon {
              flex: 1;
              position: relative;
              img {
                width: 60%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }

            .flex-text {
              flex: 8;
              p {
                font-weight: 600;
              }
            }
          }
        }
        .col2 {
          img {
            width: 100%;
          }
        }

        .col3 {
          display: flex;
          justify-content: center;
          button {
            background-color: rgb(0, 100, 0);
            padding: 15px;
            margin-top: 10%;
            border-radius: 50%;
            border: 1px solid transparent;
            cursor: pointer;
            transition: background-color 1s;
          }
          :hover {
            background-color: rgb(14, 197, 14);
          }
        }
      }
    }
  }

  &__form {
    padding: 5% 0;
    background-image: url(./../../../../assets/images/golden-from.png);
    background-size: cover;
    position: relative;
    background-position-y: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 55px;
        color: #006400;
        font-weight: 700;
        letter-spacing: 3px;
        text-align: center;
        margin-bottom: 50px;
      }
    .row {
      width: 80%;
      .col-xl-8 {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        form {
            padding: 40px 30px;
            background: #ffffff;
            border: 1px solid #ffffff;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            position: relative;
            z-index: 1;
            width: 370px;
                .skidka {
                width: 150px;
                position: absolute;
                border-radius: 50%;
                top: -70px;
                right: -70px;
                z-index: 3;
                overflow: hidden;
                .inner {
                  width: 100%;
                  height: 100%;
                  z-index: 1;
                  border-radius: 50%;
                  position: relative;

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
              background-color: #f0f0f0;
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
              background-color: #f0f0f0;
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
              z-index: 10;
            }
          }
      }

      .col-xl-4 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    &__content {
      .col1 {
        z-index: 4;
        .flex {
          margin: 15px 0;
          .flex-text {
            p {
              text-align: justify;
              font-size: 18px;
            }
          }
        }
      }

      .col2 {
        position: relative;
        padding: 0;
        display: flex;
        justify-content: center;
        img {
          position: relative;
          z-index: 2;
          width: 50% !important;
          margin: 0 auto;
    }
      }

    }
  }

  @media screen and (max-width: 700px) {
    &__home {
      form {
        position: relative;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
      }
    }
    &__content {
      .container-fluid {
        .row {
          width: 100%;

          .col1 {
            .flex {
              flex-direction: column;
              .flex-icon {
                img {
                position: relative;
                width: 25px;
                margin-bottom: 10px;
                }
                  }
              .flex-text {
                p {
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
    }
    &__form {
      h1 {
        font-size: 40px;
      }
    }
  }

  @media screen and (max-width: 700px){
    &__home {
      height: 100vh;
      padding-top: 0;
      padding-bottom: 10%;

    .logo {
        position: relative;
        top: 10px;
        left: 10px;
      }
      form {
        width: 80%;
      }
      .content {
        position: relative;
        margin-top: -15px;
        h2 {
          font-size: 52px;
        }
      }

      .maz {
          display: none;
      }
    }
    &__content {
      .container-fluid {
        .row {
          width: 100%;

          .col1 {
            .flex {
              flex-direction: column;
              .flex-icon {
                img {
                position: relative;
                width: 25px;
                margin-bottom: 10px;
                }
                  }
              .flex-text {
                p {
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px){

    &__home {
      background-size: cover;
      background-position-y: center;
      padding: 0;
      height: 100vh;
      .logo {
        width: 130px;
      }
      .content {
        margin-bottom: 10px;
        h2 {
          font-size: 42px;
          font-weight: 800;
        }
        p {
          font-size: 18px;
        }
      }
      form {
        top: 40% !important; 
        transform: translateY(-50%, -50%) !important;
         width: 300px;
        position: relative;
        button {
          font-size: 15px;
        } 
        input  {
          font-size: 12px;
        }
      }
    }

    &__content {
      .container-fluid {
        .col3 {
          button {
            width: 50px !important;
            height: 50px !important;
            padding: 0px !important;
            display: flex;
            justify-content: center;
            align-content: center;

            img {
              position: absolute;
              top: 45% !important;
              width: 35px !important;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    &__home {
      height: 120vh;
      .logo {
        width: 130px ;
      }
      .content {
        h2 {
        font-size: 26px;
        margin-bottom: 15px;
      }
    
      }
    }
  }

  @media screen and (max-width: 800px) and (min-height: 1000px) {
    &__home {
      border: 1px solid;
      height: 70vh;
    }
  }

  @media screen and (max-width: 500px) and (max-height: 720px) {
    &__home {
      .maz {
        display: none;
      }

      form {
        bottom: 100px;
        right: 50px;
        width: 70%;
      }
      }
  }

  @media screen and (min-height: 780px) and (min-width: 800px) {
    &__home {
      .content {
        h2 {
          font-size: 100px;
          margin-top: 5%;
        }
      }
      form {
        // display: block;
        // width: 20%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    &__home {
      form {
        width: 90%;
        .skidka {
          transform: rotate(-30deg);
          top: -50px;
          right: -30px;
          width: 100px;
          .inner {
            small {
              line-height: 100px;
              font-size: 17px;
            }
          }
        }
      }
    }
    &__content {
      .container-fluid {
        .col3 {
          button {
            width: 80px;
            height: 80px;
            padding: 0px !important;
            display: flex;
            justify-content: center;
            align-content: center;

            img {
              position: absolute;
              top: 40%;
              width: 50px;
            }
          }
        }
      }
    }
    &__form {
      h1 {
        font-size: 32px;
      }
      .row {
        width: 100%;
        .col-xl-8 {
          align-items: center;
          form {
            margin-top: 20%;
            width: 95%;
            .skidka {
                transform: rotate(-30deg);
                top: -50px;
                right: -30px;
                width: 100px;
                .inner {
                  small {
                    line-height: 100px;
                    font-size: 17px;
                  }
                }
              }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1500px) {
    &__home {
      .logo {
        width: 320px;
      }
      .content {
        h2 {
          font-size: 150px;
        }
        p {
          font-size: 56px;
        }
      }
      form {
        width: 30%;
        input {
          font-size: 24px;
          padding: 18px
        }
        select {
          font-size: 24px;
        }
        button {
          font-size: 24px;
        }
      }

    }
  }

  @media screen and (max-width: 1000px) and (min-width: 800px) and  (min-height: 1000px) {
     &__home {
       height: 80vh;
       .content {
         h2 {
           font-size: 80px;
           margin-top: 10%;
         }
       }
       form {
         width: 50%;
       }
     }
  }

  @media screen and (max-width: 1100px) and (min-height: 1200px) {
    &__home {
      height: 70vh;
      form {
        width: 40%;
      }
    }
    
  }
  @media screen and (max-width: 768px) {
    &__form {
      .row {
        .col-xl-4 {
          img {
            width: 180px;
          }
        }
      }
    }
  }
}
</style>