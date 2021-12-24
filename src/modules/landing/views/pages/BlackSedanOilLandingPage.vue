<template>
  <div class="blackSedanOil__landing">
    <section class="sedana-header">
      <div class="logo">
        <img :src="logo" />
        <img :src="logo2" />
      </div>
      <div class="header-text">
        <p>QORA SEDANA YOG’I</p>
        <b>Ming dardga davo</b>
      </div>
      <div class="header-form">
        <form @submit.prevent="order" id="form">
          <div class="skidka">
                    <div class="inner">        
                    <small>-30%</small>
                    <img src="./../../../../assets/images/Vector.png" alt="">
                    </div>
          </div>
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
    </section>
    <section class="diseases">
      <h1>AGAR SIZDA QON BOSIMI KO’TARILSA,</h1>
      <h1>XAVF OSTIDA QOLASIZ!</h1>
      <p>Gipertenziyaning eng tez-tez uchraydigan oqibatlar</p>
      <div class="diseases-menu">
        <div class="diseases-item">
          <div class="flex-end">
            Yurak xurujlari va qon tomirlari <button></button>
          </div>
          <div class="flex-end">Yurak ishemiyasi <button></button></div>
          <div class="flex-end">Aortani ajratish <button></button></div>
        </div>
        <div class="diseases-item">
          <img :src="dau" />
        </div>
        <div class="diseases-item">
          <div class="flex-start">
            <button></button>Tuzatib bo’lmaydigan ko’rish muammolari
          </div>
          <div class="flex-start"><button></button>Buyrak yetishmovchiligi</div>
          <div class="flex-start"><button></button>Nogironlik</div>
        </div>
      </div>
    </section>

    <section class="black-oil">
      <h1>QORA SEDANA YOG’I</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna ex,
        auctor a ligula sit amet, semper rutrum arcu. Curabitur a ipsum non dui
        hendrerit varius. Vestibulum quis sollicitudin eros. Nam nec orci vel
        magna fermentum elementum. Nunc ac sapien ornare, commodo tellus sit
        amet, bibendum quam. Quisque sed magna non sem sollicitudin pulvinar.
        Nunc tempor diam sem, eu posuere ligula laoreet pellentesque. Donec
        posuere suscipit mauris id porttitor. Curabitur et tincidunt risus, in
        laoreet ex. Suspendisse malesuada malesuada tortor vel hendrerit.
        Aliquam lobortis nulla vitae vehicula dictum. Curabitur et elit ex. Nam
        ullamcorper lectus ac ex laoreet, sed tincidunt lorem tincidunt. Donec
        ornare augue vel commodo volutpat. Cras feugiat hendrerit lorem, nec
        mollis lorem pharetra sit amet.
      </p>
      <p>
        Nunc sagittis convallis magna, at consectetur odio porta ut. Donec
        pharetra viverra elementum. Nam dignissim sollicitudin quam in semper.
        Nunc tincidunt tempor tortor, vitae facilisis mauris ullamcorper sed.
      </p>
    </section>

    <section class="influk">
      <h1>BUTUN ORGANIZMGA BIRLASHGAN INFLUK</h1>
      <div class="influk-item">
        <p>
          <img :src="influk" />
          Yurak xurujlari va qon tomirlar kassaligidan himoya qiladi
        </p>
        <p>
          <img :src="influk" />
          Bu tomirlarning elastikligi va egiluvchanligini oshiradi
        </p>
        <p>
          <img :src="influk" />
          Ichki organlarga ovqatlanishini normalizatsiya qiladi
        </p>
        <p>
          <img :src="influk" />
          Organizmning qarishini sekinlashtiradi
        </p>
        <p>
          <img :src="influk" />
          Lipit darajasini normalizatsiya qiladi
        </p>
        <p>
          <img :src="influk" />
          Yurakdaga bosim kamayadi
        </p>
        <p>
          <img :src="influk" />
          Miya faoliyatini kuchaytirish
        </p>
      </div>
    </section>

    <section class="exposure-time">
      <h1>
        QORA SEDANA MOYI BOSIMNI BARQARORLASHTIRISH UCHUN QANCHA VAQT OLADI?
      </h1>
      <div class="exposure-week">
        <div class="inner">
          <div class="week">
            <img :src="icon1" />
            <b>BIRINCHI HAFTA</b>
            <small
              >Bosh og'rig'i o'tadi, umuman olganda o'zini yaxshi his qiladi,
              bosim normallashadi.</small
            >
          </div>
          <div class="week">
            <img :src="icon2" />
            <b>Ikkinchi HAFTA</b>
            <small
              >Asosiy qon tomirlarida oqim maydoni oshadi va kapillyarlar
              tozalanadi. Xolesterol plitalari yo'q qilinishni boshlaydi.</small
            >
          </div>
        </div>
        <div class="inner">
          <div class="week">
            <img :src="icon3" />
            <b>Uchinchi HAFTA</b>
            <small
              >Xolesterol konlari va plakatlar sezilarli darajada kamayadi.
              Yurak urishi va puls normallashadi. Qonning suyuqligini
              yaxshilanadi.</small
            >
          </div>
          <div class="week">
            <img :src="icon4" />
            <b>To'rtinchi HAFTA</b>
            <small
              >Qon tomirlarida "yomon" xolesterin indeksining minimal
              ko'rsatkichiga erishiladi. Gipertenziyaning barcha belgilari
              o'tadi. Mutlaqo sog'lom odam bo'lishga qaytaradi.</small
            >
          </div>
        </div>
      </div>
      <center>
        <button type="submit" v-scroll-to="'#form'">BUYURTMA BERISH</button>
      </center>
    </section>

    <section class="doctor-report">
      <h1>QORA SEDANA YOG'I HAQIDA SHIFOKORLAR NIMA DEYISHADI?</h1>
      <div class="report-blog">
        <div class="blog-image">
          <img
            class="quot"
            :src="quot"
          />
          <img :src="doctorUser" />
          <b>MICHELE BRIZZI</b>
          <small>Kardiolog,professor</small>
        </div>
        <div class="blog-text">
          <p>
            Gipertenziya uchun qora sedana moyi eng samarali davo deb topildi.
            2016-2018 yillarda o'tkazilgan klinik tadqiqotlar ko'rsatilgandek,
            bu yurak va qon tomirlarini davolashda eng samarali tabiiy
            mahsulotdir. Bularning barchasi yog'ning noyob tarkibi bilan
            bog'liq.
          </p>
          <p>
            2 yil davomida men bemorlarning ko'pchiligiga Qora sedana moyini
            tavsiya qildim - bu ajoyib natijalarni ko'rsatmoqda. Uni qo'llash
            natijalari hatto tajribali shifokorlarni ham hayratga soldirdi.
          </p>
          <p>
            Yaqinda odamlar mendan tez-tez so'ray boshladilar: haqiqatan ham
            Qora sedana moyi bilan gipertoniyadan butunlay qutulish mumkinmi?
            Ha, agar qon tomir tizimining progressiv shikastlanishi tufayli
            paydo bo'ladigan yoshga bog'liq gipertenziya haqida gapiradigan
            bo'lsak, bu haqiqatdir.
          </p>
        </div>
      </div>
    </section>

    <section class="sistema">
      <h1>QORA SEDANA MOYI BO'YICHA KLINIK TADQIQOTLAR NATIJALARI</h1>
      <p>
        Butunjahon yurak-qon tomir kasalliklarini nazorat qilish tashkiloti 6 oy
        davomida nasha moyi bo'yicha bir qator klinik sinovlarni o'tkazdi. 3000
        ga yaqin ko'ngillilar ishtirok etishdi
      </p>

      <div class="sistema-menu">
        <div class="sistema-text">
          <div class="text-item">
            <b>89%</b>
            <div class="back">
              SINOVDAN <br />
              O’TGANLAR
            </div>
            <p>Tomirlarni xolesterin qatlamlaridan tozalash</p>
          </div>
          <div class="text-item">
            <b>87%</b>
            <div class="back">
              SINOVDAN <br />
              O’TGANLAR
            </div>
            <p>Terapevtik kurs davomida bosimni barqarorlashtirish</p>
          </div>
        </div>
        <div class="sistema-image">
          <img :src="sistema" />
        </div>
        <div class="sistema-text">
          <div class="text-item">
            <b>91%</b>
            <div class="back">
              SINOVDAN <br /> 
              O’TGANLAR
            </div>
            <p>Yurak va tomirlarning yangilanishi</p>
          </div>
          <div class="text-item">
            <b>100%</b>
            <div class="back">
              SINOVDAN <br />
              O’TGANLAR
            </div>
            <p>Miyya faoliyatni yaxshilash</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sedana-header sedana-header1">
      <div class="header-text">
        <p class="p1">Hoziroq buyurtma bering</p>
        <b>Ming dardga davo</b>
      </div>
      <div class="header-form">
        <form @submit.prevent="order">
          <div class="skidka">
            <div class="inner">        
            <small>-30%</small>
            <img :src="skidka" alt="">
            </div>
          </div>
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
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import logo from './../../../../assets/images/SedanOil/logo.png';
import skidka from './../../../../assets/images/Vector.png';
import logo2 from './../../../../assets/images/SedanOil/logo2.png';
import dau from './../../../../assets/images/SedanOil/dau.png';
import influk from './../../../../assets/images/SedanOil/influk-logo.png';
import icon1 from './../../../../assets/images/SedanOil/icon1.png';
import icon2 from './../../../../assets/images/SedanOil/icon2.png';
import icon3 from './../../../../assets/images/SedanOil/icon3.png';
import icon4 from './../../../../assets/images/SedanOil/icon4.png';
import quot from './../../../../assets/images/SedanOil/quot.png';
import sistema from './../../../../assets/images/SedanOil/sistema.png';
import doctorUser from './../../../../assets/images/SedanOil/doctorUser.png';

import get from "lodash/get";
import { required, minLength } from "vuelidate/lib/validators/";
export default {
  data() {
    return {
      logo, 
      logo2,
      dau,
      influk,
      skidka,
      icon1,
      icon2,
      icon3,
      icon4,
      quot,
      doctorUser,
      sistema,
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
          title: "Sizning buyurtmangiz yuborildi!!! <br> <small>Tez orada operatorimiz siz bilan bog'lanadi</small>",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$poppins: "Poppins", sans-serif;
$back-colorG: #398739;
$font-colorB: #334d6e;
$font-colorG: #006400;

.blackSedanOil__landing {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .sedana-header {
    width: 100%;
    height: 100%;
    background-image: url(./../../../../assets/images/SedanOil/second-back.png);
    background-size: cover;
    background-position: center;
    position: relative;
    height: 100vh;
    .logo {
      position: absolute;
      top: 10px;
      left: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      img:nth-child(1) {
        width: 50px;
      }
      img:nth-child(2) {
        width: 150px;
      }
    }

    .header-text {
      width: 100%;
      text-align: center;
      padding-top: 4%;

      p {
        font-size: 80px;
        padding: 0;
        margin: 0;
        color: $font-colorG;
        margin-left: 15%;
        font-weight: 650;
      }


      b {
        font-size: 40px;
        color: $font-colorB;
        margin-left: 15%;
      }
    }

    .header-form {
      width: 100%;
      position: relative;
      height: 60%;

      form {
        position: absolute;
        width: 25%;
        right: 10%;
        display: flex;
        flex-direction: column;
        background-color: white;
        justify-content: center;
        align-items: center;
        padding: 35px 10px;
        border-radius: 15px;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
        input,select{
          margin: 10px;
          padding: 8px 15px;
          border-radius: 15px;
          border: 1px solid transparent;
          background-color: #f0f0f0;
          outline: none;
          width: 80%;
          ::placeholder {
            font-size: 13px;
          }
        }

        button {
          padding: 8px;
          font-size: 18px;
          color: white;
          outline: none;
          cursor: pointer;
          background-color: #079e07;
          border: 0px solid transparent;
          border-radius: 10px;
          margin-top: 10%;
          width: 80%;
          box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
        }
      }
    }
  }
  .sedana-header1 {
    background-image: url(./../../../../assets/images/SedanOil/form.png);
    padding-bottom: 5%;
    .p1 {
      font-size: 48px !important;
    }
  }

  .diseases {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 0;

    h1 {
      font-size: 45px;
      margin: 0;
      padding: 0;
      font-weight: 600;
    }

    h1:nth-child(1) {
      color: rgb(51, 77, 110);
    }
    h1:nth-child(2) {
      color: rgb(236, 61, 74);
    }

    p {
      font-size: 24px;
      color: $font-colorB;
      padding: 0px;
      margin: 0;
      font-weight: 500;
    }
    .response-img {
      display: none;
    }
    .diseases-menu {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 90%;
      margin-top: 3%;

      .diseases-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        div {
          margin: 15% 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px 3%;
          width: 100%;
          font-size: 14px;
          color: $font-colorB;
          button {
            border: 1px solid transparent;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #ec3d4a;
            box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.25);
            outline: none;
            margin: 0px 20px;
          }
        }

        .flex-end {
          justify-content: flex-end;
          font-weight: 600;
        }
        .flex-start {
          font-weight: 600;
          justify-content: flex-start;
        }
      }

      .diseases-item::nth-child(1) {
        align-items: right;
        justify-content: right;
      }
    }
  }

  .black-oil {
    width: 100%;
    min-height: 100vh;
    background-image: url(./../../../../assets/images/SedanOil/doctor.png);
    background-size: cover;
    margin: 0;
    h1 {
      font-size: 48px;
      color: $font-colorB;
      padding-top: 3%;
      padding-left: 3%;
      font-weight: 600;
      padding-bottom: 3%;
    }

    p {
      padding: 0 3% 0;
      margin: 0;
      width: 60%;
      color: $font-colorB;
      font-weight: 500;
    }
  }

  .influk {
    margin: 0;
    width: 100%;
    height: 100vh;
    background-image: url(./../../../../assets/images/SedanOil/health.png);
    background-size: cover;
    h1 {
      margin: 0;
      padding-top: 4%;
      padding-left: 3%;
      font-size: 37px;
      font-weight: 600;
      color: $font-colorB;
    }

    .influk-item {
      padding-left: 3%;

      p {
        margin-top: 3%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: $font-colorB;
        img {
          margin: 0 15px;
        }
      }
    }
  }

  .exposure-time {
    width: 100%;
    background-image: url(./../../../../assets/images/SedanOil/back3.png);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5%;
    h1 {
      margin: 0;
      font-size: 48px;
      color: $font-colorB;
      text-align: center;
      padding-top: 3%;
    }

    .exposure-week {
      margin-top: 5%;
      width: 95%;
      display: flex;
      flex-direction: row;

      .inner {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex: 1;
        .week {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 100%;
          img {
            margin: 50px 0;
            width: 100px;
          }

          b {
            color: rgb(37, 79, 134);
          }

          small {
            color: $font-colorB;
          }
        }
      }
    }

    button {
      padding: 8px 15px;
      font-size: 18px;
      color: white;
      border: 1px solid transparent;
      outline: none;
      background-color: $back-colorG;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
      margin-top: 50px;
    }
  }

  .doctor-report {
    width: 100%;
    background-image: url(./../../../../assets/images/SedanOil/back4.png);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5%;

    h1 {
      margin: 0;
      padding: 5% 0;
      text-align: center;
      font-size: 40px;
      color: $font-colorB;
      width: 80%;
    }

    .report-blog {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .blog-image {
        flex: 2;
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: center;
        align-items: center;

        .quot {
          width: 60px;
          position: absolute;
          right: 10px;
          top: 0px;
        }

        img {
          width: 60%;
        }

        b {
          color: $font-colorB;
          font-size: 18px;
        }
        small {
          color: $font-colorB;
          font-size: 17px;
          opacity: 0.8;
        }
      }

      .blog-text {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 1%;

        p {
          color: $font-colorB;
          font-size: 15px;
        }
      }
    }
  }

  .sistema {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      padding-top: 5%;
      font-size: 40px;
      color: $font-colorB;
      width: 60%;
      margin-bottom: 1%;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      color: $font-colorB;
      margin: 0;
      padding: 0;
      width: 60%;
    }

    .sistema-menu {
      width: 70%;
      display: flex;
      flex-direction: row;
      margin-top: 2%;

      .sistema-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: white;

        b {
          font-size: 50px;
          color: $font-colorB;
        }

        .back {
          background-color: #5fa302;
          color: white;
          font-size: 15px;
        }
        p {
          color: $font-colorB;
          text-align: center;
          width: 100%;
          margin-top: 3%;
        }
      }

      .sistema-image {
        flex: 3;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .sistema {
      .sistema-menu {
        .sistema-image {
          justify-content: center;
          margin: auto 0;
          align-items: center;
          img {
            width: 60%;
          }
        }
      }
    }
    .exposure-time {
      h1 {
        font-size: 30px;
        width: 80%;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .sedana-header {
      .header-text {
        p {
          font-size: 60px;
        }
      }
    }

    .diseases {
      h1 {
        font-size: 35px;
      }
      p {
        font-size: 20px;
      }

      .diseases-menu {
        width: 95%;

        .diseases-item {
          .flex-end {
            font-size: 11px;
          }
          .flex-start {
            font-size: 11px;
          }
        }
      }
    }

    .sistema {
      .sistema-menu {
        width: 90%;
        .sistema-image {
          justify-content: center;
          margin: auto 0;
          align-items: center;
          img {
            width: 60%;
          }
        }
      }
    }

    .exposure-time {
      .exposure-week {
        flex-direction: column;
        justify-content: center;
        .inner {
          .week {
            justify-content: center;
            align-items: center;

            img {
              width: 20%;
            }
          }
        }
      }
    }

    .doctor-report {
      h1 {
        font-size: 30px;
      }

      .report-blog {
        .blog-image {
          .quot {
            width: 35px;
            top: 25px;
            right: 25px;
          }
          b {
            font-size: 15px;
          }
          small {
            font-size: 14px;
          }
        }

        .blog-text {
          p {
            font-size: 13px;
          }
        }
      }
    }

    .sistema {
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 15px;
      }

      .sistema-menu {
        .sistema-text {
          .text-item {
            margin: 5% 0;
            b {
              font-size: 35px;
            }
            .back {
              font-size: 13px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .sedana-header {
      .logo {
        width: 20%;
        margin: 5px;
      }
      .header-text {
        p {
          font-size: 50px;
          margin-top: 3%;
        }
        b {
          font-size: 35px;
        }
      }

      .header-form {
        height: 70%;
        form {
          width: 35%;

          button {
            font-size: 14px;
          }
        }
      }
    }

    .black-oil {
      display: flex;
      flex-direction: column;
      justify-content: baseline;

      h1 {
        width: 90%;
        margin: 2% 0;
      }
      p {
        font-size: 15px;
        width: 70%;
        margin-top: 3%;
      }
    }

    .diseases {
      .diseases-menu {
        .diseases-item {
          img {
            width: 90%;
          }
          .flex-end {
            width: 95%;
          }

          .flex-start {
            width: 100%;
            margin-left: -25px;
          }
        }
      }
    }
    .influk {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    // .footer {
    //   height: 60vh;
    //   margin-top: 55%;
    // }
  }

  @media screen and (max-width: 800px) {
    .sedana-header {
      .logo {
        margin-left: 5%;
      }
      .header-text {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 10%;
        margin: 0;
        p {
          margin: 0;
        }
        b {
          margin: 0;
        }
      }
    }
    .diseases {
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 18px;
      }
      .diseases-menu {
        flex-direction: column;
        width: 90%;
        padding: 0;
        margin-top: 5%;
        .diseases-item {
          flex: 1;
          width: 100%;
          justify-content: center;
          align-items: center;
          // padding: 10px 0;
          img {
            width: 50%;
          }

          .flex-end {
            margin: 1% 0;
            font-size: 18px;
          }
          .flex-start {
            font-size: 18px;
            margin: 1% 0;
          }
        }
        .diseases-item:nth-child(1) {
          order: 3;
        }
        .diseases-item:nth-child(2) {
          order: 2;
        }
        .diseases-item:nth-child(3) {
          order: 1;
        }
      }
    }
    .influk {
      h1 {
        text-align: center;
        font-size: 32px;
      }
    }
    .doctor-report {
      h1 {
        width: 90%;
      }
      .report-blog {
        flex-direction: column;

        .blog-image {
          .quot {
            display: none;
          }
          b {
            font-size: 18px;
          }
        }
        .blog-text {
          p {
            font-size: 16px;
          }
        }
      }
    }
    .sistema {
      h1 {
        width: 95%;
        font-size: 28px;
      }
      p {
        width: 80%;
      }
      .sistema-menu {
        width: 95%;
        flex-direction: column;
        .sistema-text {
          flex-direction: row;
          .text-item {
            flex: 1;
            margin: 0px 10px;
            .back {
              padding: 10px 0;
              br {
                display: none;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    .black-oil {
      justify-content: center;
      p {
        width: 80%;
        font-size: 14px;
      }
    }
    .sistema {
      .sistema-menu {
        .sistema-image {
          img {
            width: 50%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 650px) {
    .sedana-header {
      padding: 0;
      background-size: cover;
      .header-text {
        top: 0px;
        margin-top: 0;
        padding-top: 20px;

        p {
          font-size: 36px;
          margin-top: 0px;
          top: 0;
        }
        
      }
      .header-form {
        form {
          width: 50%;
          background-color: rgba(250, 250, 250, 0.5);
          input {
            background-color: rgba(250, 250, 250, 0.6);
          }
        }
      }
      .logo {
        position: relative;
        justify-content: left;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 90%;

        img {
          width: 40%;
        }
      }
    }
    .influk {
      background-size: 100% 100%;
      background-repeat: no-repeat;
      h1 {
        font-size: 24px;
      }
      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .sedana-header1 {
      .header-text {
        padding: 3% 0 5%;
        p {
          font-size: 35px !important;
        }
        b {
          font-size: 30px;
        }
      }
      .header-form {
        bottom: 10px;
      }
    }
    .diseases {
      h1 {
        font-size: 23px;
      }
      p {
        font-size: 14px;
      }

      .diseases-menu {
        .diseases-item {
          margin-top: 10px;
          .flex-end {
            font-size: 14px;
          }
          .flex-start {
            font-size: 14px;
          }
        }
      }
    }

    .black-oil {
      height: 80%;
      h1 {
        font-size: 35px;
      }
      p {
        font-size: 12px;
      }
    }
    .exposure-time {
      padding-bottom: 2%;
      h1 {
        font-size: 21px;
        width: 98%;
      }
      .exposure-week {
        margin-top: 1%;
        .inner {
          flex-direction: column;
          .week {
            img {
              margin-bottom: 10px;
            }
          }
        }
      }

      button {
        padding: 4px 5px;
        font-size: 14px;
        margin: 20px 0;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .sedana-header {
      background-size: cover;
      background-position-x: left;
      .logo {
        img:nth-child(1) {
          width: 30px;
        }
        img:nth-child(2) {
          width: 90px;
        }
      }
    }

    .black-oil {
      background-size: cover;
      background-position-x: center;
      h1 {
        width: 80%;
        font-size: 23px;
      }
      p {
        width: 85%;
        font-size: 12px;
      }
    }
    .influk {
      background-size: cover;
      background-position: center;
    }

    .sedana-header {
      .header-text {
          p {
            font-size: 36px;
          }
        }
      .header-form {
        display: flex;
        flex-direction: column;
        height: auto;
        justify-content: center;
        align-items: center;
        height: 60%;
        padding: 0;
        margin: 0;
        
        form {
          position: relative;
          width: 70%;
          top: 10%;
          margin: 0;
          transform: translate(0);
          right: 0;
          .skidka {
          width: 120px;
            .inner {
              small {
                font-size: 18px;
                line-height: 120px;
              }
            }
          }
        }
      }
    }

    .doctor-report {
      h1 {
        font-size: 20px;
        width: 100%;
      }

      .report-blog {
        .blog-text {
          p {
            font-size: 12px;
          }
        }
      }
    }

    .sistema {
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 12px;
      }

      .sistema-menu {
        .sistema-text {
          .text-item {
            b {
              font-size: 28px;
            }
            .back {
              padding: 5px 10px;
              font-size: 12px;
            }
            p {
              font-size: 12px;
            }
          }
        }
      }
    }

    .exposure-time {
      h1 {
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .sedana-header {
      .header-text {
        p {
          font-size: 30px;
        }
        b {
          font-size: 26px;
        }
      }
    }
    .influk {
      height: 80vh;

      h1 {
        font-size: 20px;
      }

      .influk-item {
        p {
          img {
            width: 20px;
          }

          font-size: 11px;
        }
      }
    }
    .exposure-time {
      h1 {
        font-size: 16px;
      }
    }
    // .footer {
    //   height: 40vh;
    // }
    .diseases {
      .diseases-menu {
        .diseases-item {
          .flex-end {
            font-size: 10px;
            button {
              width: 15px;
              height: 15px;
            }
          }
          .flex-start {
            font-size: 10px;
            button {
              width: 15px;
              height: 15px;
            }
          }
        }
      }
    }
    .black-oil {
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 9.5px;
      }
    }

    .sistema {
      .sistema-menu {
        .sistema-text {
          flex-direction: column;

          .text-item {
            margin-top: 5%;
            width: 100%;
            justify-content: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            .back {
              width: 50%;
            }
          }
        }
      }
    }
  }

  @media screen and (min-height: 650px) {
    .sedana-header {
      min-height: 85vh;
    }
    .black-oil {
      min-height: 70vh;
    }
    .influk {
      min-height: 70vh;
    }
  }

  @media screen and (max-width: 360px) {
    .sedana-header {
      height: 90vh !important;
      padding: 0;

      .header-text {
        height: auto;
      }
      .header-form {
        padding: 0;
        height: 80%;

        form {
          top: 0px;
          width: 90%;
          .skidka {
            transform: rotate(-30deg);
            top: -60px;
            right: -30px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 300px) {
    .sedana-header {
      .header-text {
          p {
            font-size: 22px;
          }
          b {
            font-size: 19px;
          }
        }
      .header-form {
        form {
          top: 0px;
          .skidka {
            width: 80px;
            right: -20px;
            top: -40px;
            .inner {
              small {
                line-height: 80px;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

}
</style>