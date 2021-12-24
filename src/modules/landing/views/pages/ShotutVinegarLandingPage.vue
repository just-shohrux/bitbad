<template>
    <div class="shotutVinegar__landing">
         <header>
            <nav>
                <div class="logo">
                <img src="./../../../../assets/images/ShotutVinegar/logo1.png" alt />
                <img src="./../../../../assets/images/ShotutVinegar/logo2.png" alt />
                </div>
            </nav>
            <h1>SHOTUT SIRKASI</h1>
            <p>QON AYLANISHINI NARMALLASHTIRADI!</p>

            <div class="advantage">
                <div class="advantage-item">
                <img src="./../../../../assets/images/ShotutVinegar/true.png" alt />
                <p>Qon aylanishni yaxshilaydi</p>
                </div>
                <div class="advantage-item">
                <img src="./../../../../assets/images/ShotutVinegar/true.png" alt />
                <p>Qon bosimi narmallashtiradi</p>
                </div>
                <div class="advantage-item">
                <img src="./../../../../assets/images/ShotutVinegar/true.png" alt />
                <p>Jigar va yurakni faoliyatini yaxshilaydi</p>
                </div>
                <div class="advantage-item">
                <img src="./../../../../assets/images/ShotutVinegar/true.png" alt />
                <p>Qon tomirlani kengaytiradi</p>
                </div>
            </div>

            <div class="forms">
                
                <img src="./../../../../assets/images/ShotutVinegar/product.png" alt />
                <form @submit.prevent="order">
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
        </header>

    <section class="blood-benefit">
      <center>
        <h2>BUTUN TANA UCHUN FOYDALI</h2>

        <div class="benefit-image">
          <div class="inner">
            <div class="img-item">
              <img src="./../../../../assets/images/ShotutVinegar/symptom-1.png" alt />
            </div>
            <div class="img-item">
              <img src="./../../../../assets/images/ShotutVinegar/symptom-2.png" alt />
            </div>
          </div>
          <div class="inner">
            <div class="img-item">
              <img src="./../../../../assets/images/ShotutVinegar/symptom-3.png" alt />
            </div>
            <div class="img-item">
              <img src="./../../../../assets/images/ShotutVinegar/symptom-4.png" alt />
            </div>
          </div>
        </div>
      </center>
    </section>

    <section class="sistema">
      <center>
        <h2>QON SUYULISHINING FOYDALARI</h2>
      </center>

      <div class="sistema-menu">
        <div class="sistema-item">
          <div class="text">
            <div class="circ1"></div>
            <p>Qon aylanishi tezlashishi</p>
            <div class="circ"></div>
          </div>
          <div class="text">
            <div class="circ1"></div>
            <p>Yurak faoliyatini yengillashishi</p>
            <div class="circ"></div>
          </div>
          <div class="text">
            <div class="circ1"></div>
            <p>Jigar faoliyatni yaxshilash</p>
            <div class="circ"></div>
          </div>
        </div>
        <div class="sistema-item">
          <img src="./../../../../assets/images/ShotutVinegar/bg-attention-sis.png" alt />
        </div>
        <div class="sistema-item">
          <div class="text">
            <div class="circ"></div>
            <p>Yengillik</p>
          </div>
          <div class="text">
            <div class="circ"></div>
            <p>Yosharish</p>
          </div>
          <div class="text">
            <div class="circ"></div>
            <p>Miyya faoliyatini kuchayishi</p>
          </div>
        </div>
      </div>
    </section>

    <section class="benefit">
      <h2>FOYDALI</h2>
      <div class="text">
        <p>Qon tomirdagi xolesterinni me’yorga keltiradi.</p>
        <p>
          Shotut sirkasi Me’yordan ko‘p ovqatlanish sababli qorningiz
          juda to‘q bo‘lsa, ovqat xazm qilishga qiynalsangiz 1 osh qoshiq
          (10-15ml) shotut sirkasini iching, ovqat yaxshi hazm bo‘ladi.
          Qon bosimi (davleniya) va qondagi qand miqdorini oshib ketishiga
          yo‘l qo‘ymaydi. Magnit bo‘roni (magnitnaya burya) tasirida qon
          bosimi oshganda ichish tavsiya qilinadi.
        </p>
      </div>
    </section>

    <section class="structure">
      <h2>TARKIBI</h2>
      <div class="text">
        <p>
          Vitamin B1 (tiamin) organizmning oqsil va uglevodorod
          almashinuvini muvozanatga keltiradi.
        </p>
        <p>
          Vitamin B2 (riboflavin) — hujayralar almashinuvi jarayonini va
          terining yuza qatlamidagi jarayonda muvozanatga keltiruvchi
          vazifani bajaradi, undan tashqari nafas olish jarayonida ham ishtirok etadi.
        </p>
        <p>
          Vitamin B6 organizmda piridoksin yetishmasa bolalar o‘smay qoladi,
          me’da-ichak ishi buziladi, kamqonlik ro‘y beradi.
        </p>
        <p>
          Vitamin C — allergik holatlarni kuchini kamaytiradi, qon tomirlarini
          baquvvatlashtiradi, organizmning qarshilik kuchini oshiradi, birlashtiruvchi
          to‘qimalarning holatini yaxshilaydi.
        </p>

        <button type="button" v-scroll-to="'#form'">BUYURTMA BERISH</button>
      </div>
    </section>

    <section class="shotut-info">
      <h2>SHOTUT SIRKASI</h2>
      <div class="info">
        <div class="info-item">
          <p>
            QON
            <br />Shotut sirkasi qonni suyultirib qon aylanishini yaxshilaydi.
            Shotut sirkasi qonni suyultiradi, qon tomirlardagi "tromb"
            va tugunlarni yechadi. Mayda qon tomirlarni kengaytirib, tanada
            qon aylanishini yaxshilaydi. Qon tomirdagi xolesterinni me’yorga
            keltiradi.
          </p>
          <p>
            Oshqozon
            <br />Shotut sirkasi oshqozon uchun foydali va kerakli sirop. Shotut
            sirkasi oshqozon va ichaklarga ziyon yetkazmasligi uchun maxsus
            ishlov berilgan va hushta’m bo‘lishi ta'minlangan. U hazim qilishni
            yengillashtiradi.
          </p>
          <p>Sifatli, shifobaxsh va samarali!</p>
        </div>
        <div class="info-item">
          <img src="./../../../../assets/images/ShotutVinegar/product.png" alt />
        </div>
      </div>
    </section>  
    
    <section class="container-fluid">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h1>SHOTUT SIRKASI</h1>
                <p>QON AYLANISHINI NARMALLASHTIRADI!</p>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                <div class="forms">
                    <form @submit.prevent="order">
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
            </div>
            <div class="col-xl-6 col-lg-6 col-md-4 col-sm-12">
                <img src="./../../../../assets/images/ShotutVinegar/shotut.png" alt="">
                <img src="./../../../../assets/images/ShotutVinegar/product.png" alt="">
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    import { mapState } from "vuex";
import get from "lodash/get";
import { required, minLength } from "vuelidate/lib/validators/";
export default {
  data() {
    return {
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
</script>

<style lang="scss" scoped>
$back-colorG: #398739;
$font-colorB: #334D6E;
$font-colorG: #006400;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.shotutVinegar__landing{

        header {
            width: 100%;
            background-size: cover;
            background-image: url(./../../../../assets/images/ShotutVinegar/back.png);
            position: relative;
            background-repeat: no-repeat;
            padding: 0 0 10% 0;

            nav {
                padding-top: 10px;

                .logo {
                    margin-left: 2%;
                }
            }

            h1 {
                font-size: 55px;
                color: $font-colorB;
                margin-left: 3%;
                font-weight: 600;
            }

            p {
                font-size: 35px;
                color: $font-colorB;
                margin-left: 3%;
                font-weight: 550;
            }

            .advantage {

                .advantage-item {
                    display: flex;
                    flex-direction: row;
                    margin-top: 3%;
                    margin-left: 3%;

                    img {
                        height: auto;
                    }

                    p {
                        font-size: 21px;
                        color: $font-colorB;
                        margin-left: 1%;
                    }


                }
            }

            .forms {
                width: 28%;
                position: absolute;
                right: 10%;
                bottom: 10%;

                img {
                    position: absolute;
                    z-index: 2;
                    left: -40%;
                    width: 60%;
                    bottom: -13%;
                }

                form {
                    position: relative;

                    border: 1px solid white;
                    background-color: rgba(103, 120, 175, 0.7);
                    border-radius: 10px;
                    padding: 25px 5px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .skidka {
                        width: 150px;
                        position: absolute;
                        border-radius: 50%;
                        top: -70px;
                        right: -70px;
                        z-index: 3;
                        overflow: hidden;
                            .inner {
                                width: 150px;
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
                                width: 100% !important;
                                border-radius: 45%;
                                position: relative;
                                z-index: 1;
                                left: 0%;
                                }
                            }

        
      }

                    input,select {
                        padding: 8px 12px;
                        font-size: 16px;
                        color: rgba(146, 159, 175, 1);
                        border-radius: 10px;
                        width: 80%;
                        margin-top: 25px;
                        border: 1px solid transparent;
                        outline: none;
                    }

                    ::placeholder {
                        font-size: 11px;
                    }

                    button {
                        background-color: #079E07;
                        width: 80%;
                        padding: 10px 0;
                        font-size: 20px;
                        color: white;
                        border-radius: 10px;
                        margin-top: 40px;
                        border: 1px solid transparent;
                        transition: background-color 1s;
                        cursor: pointer;
                        box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
                    }

                    button:hover {
                        background-color: #398739c4;
                    }


                }
            }

        }

        .blood-benefit {
            width: 100%;

            h2 {
                font-size: 40px;
                font-weight: 600;
                padding: 5%;
                color: $font-colorB;
            }

            .benefit-image {
                width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                margin: 3% 0 7%;

                .inner {
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    .img-item {

                        flex: 1;
    
                        img {
                            width: 70%;
                            border-radius: 50%;
                            box-shadow: 0px 10px 7px rgb(56, 55, 55);
                        }
                    }
                }
            }
        }

        .sistema {
            background-image: url(./../../../../assets/images/ShotutVinegar/bg-attention.png);
            background-size: cover;
            background-color: 238, 242, 254;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h2 {
                font-size: 40px;
                font-weight: 500;
                margin-top: 5%;
                color: $font-colorB;
                width: 100%;
            }

            .sistema-menu {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 90%;
                margin-bottom: 3%;
                margin-top: 5%;

                .sistema-item {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    height: 100%;

                    .text {
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                        align-items: center;
                        margin-top: 50%;

                        p {
                            font-size: 16px;
                            color: $font-colorB;
                        }

                        .circ {
                            width: 20px;
                            height: 20px;
                            margin: 0 10px;
                            background-color: rgba(236, 61, 74, 1);
                            border-radius: 50%;
                            box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.25);
                        }
                        .circ1 {
                            display: none;
                            width: 20px;
                            height: 20px;
                            margin: 0 10px;
                            background-color: rgba(236, 61, 74, 1);
                            border-radius: 50%;
                            box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.25);
                        }
                    }

                    .text:nth-child(1) {
                        margin-right: -50%;
                    }

                    .text:nth-child(2) {
                        margin-right: -25%;
                    }

                    .text:nth-child(3) {
                        margin-right: -50%;
                    }
                }

                .sistema-item:nth-child(2) {
                    flex: 2;

                    img {
                        width: 60%;
                    }
                }

                .sistema-item:nth-child(3) {
                    .text {
                        justify-content: flex-start;
                    }

                    .text:nth-child(1) {
                        margin-left: -100%;
                    }

                    .text:nth-child(2) {
                        margin-left: -50%;
                    }

                    .text:nth-child(3) {
                        margin-left: -100%;
                    }
                }
            }

        }

        .benefit {
            margin-top: 3%;
            width: 100%;
            padding: 10% 0;
            background-image: url(./../../../../assets/images/ShotutVinegar/spina.png);
            background-repeat: no-repeat;
            h2 {
                font-size: 40px;
                font-weight: 600;
                padding: 0 0 5% 0;
                color: $font-colorB;
                width: 100%;
                text-align: center;
            }

            .text {
                width: 70%;
                display: flex;
                flex-direction: column;
                margin-left: 10%;
                p {
                    margin-top: 5%;
                    font-size: 18px;
                    color: $font-colorB;
                }
            }
        }

        .structure {
            width: 100%;
            padding: 5% 0;
            background-image: url(./../../../../assets/images/ShotutVinegar/bg-unique.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position-x: 100%;

            h2 {    
                font-size: 40px;
                font-weight: 500;
                padding: 0 0 5% 0;
                color: $font-colorB;
                width: 100%;
                text-align: center;
            }
            
            .text {
                width: 60%;
                background-color: rgba(103, 120, 175, 0.9);
                border-radius: 10px;
                padding: 25px;
                margin-left: 25px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                p {
                    font-size: 16px;
                    color: white;
                    width: 80%;
                    font-weight: 500;
                    margin-top: 15px;
                }

                button {
                    width: 50%;
                    padding: 10px 15px;
                    background-color: rgba(7, 158, 7, 1);
                    box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
                    border-radius: 10px;
                    color: white;
                    border: 1px solid transparent;
                    font-size: 18px;
                    margin-top: 25px;
                    outline: none;
                    cursor: pointer;
                    transition: background-color 1s;
                }
                button:hover {
                    background-color: rgba(7, 158, 7, 0.7);
                }
            }
        }

        .shotut-info {
            width: 100%;
            padding: 5% 0;
            margin-top: 3%;
            background-image: url(./../../../../assets/images/ShotutVinegar/bg-composition.png);
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h2 {
                font-size: 40px;
                font-weight: 400;
                padding: 0 0 5% 0;
                color: $font-colorB;
                width: 100%;
                text-align: center;
            }

            .info {
                width: 80%;
                background-color: rgba(255, 255, 255, 0.7);
                border-radius: 10px;
                padding: 25px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                .info-item:nth-child(1) {
                    flex: 3;

                    p {
                        margin-top: 35px;
                        font-size: 16px;
                        color: $font-colorB;
                        font-weight: 500;

                    }
                } 

                .info-item:nth-child(2) {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 80%;
                    }
                } 
            }
        }

        .container-fluid {
            padding: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2% 0;

            .row {
                width: 90%;

                .col-xl-12 {
                    padding: 5% 0;
                    text-align: center;
                    h1 {
                        font-size: 55px;
                        color: $font-colorB;
                        margin-left: 3%;
                        font-weight: 600;
                    }

                    p {
                        font-size: 35px;
                        color: $font-colorB;
                        margin-left: 3%;
                        font-weight: 550;
                    }
                }
                .col-xl-6 {
                    display: none;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    .forms {
                        width: 70%;
                        position: relative;

                           form {
                            position: relative;

                            border: 1px solid white;
                            background-color: rgba(103, 120, 175, 0.7);
                            border-radius: 10px;
                            padding: 25px 5px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;

                            .skidka {
                                width: 150px;
                                position: absolute;
                                border-radius: 50%;
                                top: -70px;
                                right: -70px;
                                z-index: 3;
                                overflow: hidden;
                                    .inner {
                                        width: 150px;
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
                                        width: 100% !important;
                                        border-radius: 45%;
                                        position: relative;
                                        z-index: 1;
                                        left: 0%;
                                        }
                                    }

                
                                 }

                                    input,select {
                                        padding: 8px 12px;
                                        font-size: 16px;
                                        color: rgba(146, 159, 175, 1);
                                        border-radius: 10px;
                                        width: 80%;
                                        margin-top: 25px;
                                        border: 1px solid transparent;
                                        outline: none;
                                    }

                                    ::placeholder {
                                        font-size: 11px;
                                    }

                                    button {
                                        background-color: #079E07;
                                        width: 80%;
                                        padding: 10px 0;
                                        font-size: 20px;
                                        color: white;
                                        border-radius: 10px;
                                        margin-top: 40px;
                                        border: 1px solid transparent;
                                        transition: background-color 1s;
                                        cursor: pointer;
                                        box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
                                    }

                                    button:hover {
                                        background-color: #398739c4;
                                    }


                            }
                    }
                }
                .col-xl-6 {
                    display: flex;
                    flex-direction: row;
                }
            }
        }

        @media screen and (max-width: 1150px){
            header {
                background-size: contain;
                nav {
                    .logo {
                        margin-left: 3%;
                    }
                }
                h1 {
                    margin-top: 2%;
                    font-size: 40px;
                }
                p {
                    font-size: 28px;
                }
                .advantage {
                    .advantage-item {
                        img {
                            width: 25px;
                            height: 25px;
                        }
                        p {
                            font-size: 20px;
                        }
                    }
                }
            }
            .sistema {
                .sistema-menu {
                    .sistema-item {
                        height: 100%;

                        .text {
                            p {
                                font-size: 13px;
                            }
                        }
                    }
                }
            }
            .shotut-info {
                .info {
                    .info-item:nth-child(2) {
                        img {
                            width: 100%;
                        }
                    }
                }
            }
            .structure {
                .text {
                    width: 70%;
                    p {
                        width: 100%;
                    }
                }
            }
        }
        @media screen and (max-width: 1000px) {
             .container-fluid {
                 .row {
                     width: 100%;
                     .col-xl-6 {
                         .forms {
                             width: 60%;
                             form {
                                 .skidka {
                                     width: 120px;
                                     right: -50px;
                                     top: -45px;
                                     .inner {
                                         width: 100%;
                                         img {
                                             width: 100%;
                                         }
                                         small {
                                             line-height: 120px;
                                             font-size: 22px;
                                         }
                                     }
                                 }
                             }
                         }
                     }
                     .col-md-4 {
                         img:nth-child(1) {
                             width: 50%;
                         }
                         img:nth-child(2) {
                             width: 50%;
                         }
                     }
                 }
             }
        }

        @media screen and (max-width: 1500px) {
            header {
                background-size: 100%;
            }
        }

        @media screen and (max-width: 900px) {
            header {
                overflow: hidden;
                h1 {
                    margin-top: 2%;
                    font-size: 35px;
                }
                p {
                    font-size: 24px;
                }
                .advantage {
                    .advantage-item {
                        img {
                            width: 18px;
                            height: 18px;
                        }
                        p {
                            font-size: 16px;
                        }
                    }
                }

                .forms {
                    width: 35%;
                    right: 5%;
                    bottom: 2%;
                    form {
                        .skidka {
                            width: 120px;
                            right: -20px;
                            top: -60px;
                            transform: rotate(-30deg);
                            .inner {
                                width: 100%;
                                small {
                                    line-height: 120px;
                                    font-size: 21px;
                                }
                            }
                        }
                        button {
                            font-size: 15px;
                        }
                    }
                }
            }

            .blood-benefit {
                h2 {
                    font-size: 30px;
                }

                .benefit-image {
                    flex-direction: column;
                    .inner {
                        margin-top: 5%;
                            .img-item {
                                img {
                                    box-shadow: 0px 5px 6px rgb(85, 84, 84);
                                }   
                            }
                    }
                }
            }

            .sistema {
                h2 {
                    font-size: 30px;
                }

                .sistema-menu {
                    width: 100%;
                    .sistema-item {
                        .text {
                            p {
                                font-size: 10px;
                                text-align: right;
                            }
                        }
                    }
                    .sistema-item:nth-child(3) {
                        .text {
                            p {
                                text-align: left;
                            }
                        }
                    }
                }
            }

            .benefit {
                h2 {
                    font-size: 30px;
                    padding-top: 5%;
                }

                .text {
                    p {
                        font-size: 16px;
                    }
                }
            }

            .structure {
                background-size: cover;
                .text {
                    width: 80%;
                    p {
                        width: 100%;
                        font-size: 12px;
                    }
                    button {
                        width: 40%;
                        font-size: 14px;
                    }
                }
            }

            .shotut-info {
                .info {
                    .info-item:nth-child(1) {
                        p {
                            font-size: 10px;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 780px) {
            header {
                .forms {
                    position: relative;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    flex-direction: row;
                    width: 80%;
                    left: 50%;
                    transform: translateX(-50%);
                    margin-top: 3%;
                    img {
                        position: relative;
                        flex: 1;
                        left: 0;
                        right: 0;
                        width: 40%;
                    }

                    form {
                        flex: 5;
                        width: 100%;
                    }
                }
            }
            .container-fluid {
                .row {
                    .col-xl-12 {
                        h1 {
                            width: 100%;
                            font-size: 36px;
                        }
                        p {
                            font-size: 28px;
                        }
                    }

                    .col-md-4 {
                        img:nth-child(1) {
                            width: 30%;
                        }
                        img:nth-child(2) {
                            width: 30%;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 600px) {
            .sistema {
                background-size: cover;
                background-repeat: no-repeat;
                .sistema-menu {
                    flex-direction: column;

                    .sistema-item:nth-child(1) {
                        width: 100%;
                        display: flex;
                        order: 3;
                        flex-direction: row;
                        .text {
                            margin: 15px 3px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            text-align: center;
                            p {
                                width: 100%;
                                margin: 0;
                                text-align: center;
                            }
                            .circ1 {
                                display: block;
                            }
                            .circ {
                                display: none;
                            }
                        }
                    }
                    .sistema-item:nth-child(2) {
                        width: 100%;
                        img {
                            width: 30%;
                        }
                        order: 2;
                    }

                    .sistema-item:nth-child(3) {
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        order: 1;

                        .text {
                            margin: 2px 0;
                            justify-content: center;
                            margin: 0;
                            position: relative;
                            display: flex;
                            flex-direction: column;

                            .circ {
                                order: 2;
                                margin: 0px 3px;
                            }
                            
                            p {
                                order: 1;
                                width: 100%;
                                text-align: center;
                            }
                        }

                        .text:nth-child(1) {
                            margin-left: 0%;
                        }
                        .text:nth-child(2) {
                            margin-left: 0%;
                        }
                        .text:nth-child(3) {
                            margin-left: 0%;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 550px) {
            header {
                nav {
                    .logo {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: center;
                        img:nth-child(1) {
                            width: 35px;
                        }
                        img:nth-child(2) {
                            width: 120px;
                        }
                    }
                }

                h1  {
                    font-size: 25px;
                }
                p {
                    font-size: 16px;
                }

                .advantage {
                    .advantage-item {
                        img {
                            width: 15px;
                            height: 15px;
                        }
                        p {
                            font-size: 12px;
                        }
                    }
                }

                .forms {
                    width: 95%;
                    align-items: center;
                    justify-content: center;

                    img {
                        width: 20%;
                        height: 50%;

                    }
                }
            }

            .benefit {
                padding: 20% 0;
                .text {
                    width: 90%;
                    margin-left: 3%;
                    p {
                        font-size: 12px;
                        text-align: justify;
                    }
                }
            }

            .structure {
                h2 {
                    font-size: 28px;
                }

                .text {
                    width: 95%;
                    margin-left: 2.4%;
                    p {
                        font-size: 10px;
                    }
                    button {
                        width: 70%;
                        padding: 5px;
                        font-size: 14px;
                    }
                }
            }

            .shotut-info {
                h2 {
                    font-size: 28px;
                }

                .info {
                    width: 90%;
                    flex-direction: column;
                    padding: 25px;
                    .info-item:nth-child(2) {
                        img {
                            width: 30%;
                        }
                    }
                }
            }
            .container-fluid {
                .row {
                    width: 100%;
                    .col-xl-6 {
                        .forms {
                            width: 75%;
                        }
                    }
                }
            }
        }
        @media screen and (max-width: 360px) {
             header {
                 .forms {
                     form {
                         .skidka {
                             width: 90px;
                             top: -45px;
                             .inner {
                                 width: 100%; 
                                 small {
                                     font-size: 16px;
                                     line-height: 90px;
                                 }

                             }
                         }
                     }
                 }
             }
        }
        @media screen and (max-width: 450px) {
            .container-fluid {
                .row {
                    .col-xl-12 {
                        h1 {
                            font-size: 30px;
                        }
                        p {
                            font-size: 24px;
                        }
                    }
                    .col-xl-6 {
                        .forms {
                            width: 85%;
                            form {
                                .skidka {
                                    right: -15px;
                                    width: 90px;
                                    transform: rotate(-30deg);
                                    top: -40px;
                                    .inner {
                                        small {
                                            line-height: 90px;
                                            font-size: 16px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>