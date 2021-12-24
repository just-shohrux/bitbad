<template>
  <div class="page">
    <div class="section__home section home">
      <div class="home__content">
        <div class="home__logo">
          <img :src="logo" alt="logo" class="img-fluid" /> 
        </div>
        <h3 class="home__subtitle">
          O'zbekistonda o'z o'rniga ega bo'lgan va uzoq yillardan beri
          xaridorlar ishonchiga erisha olgan online do'kon
        </h3>
        <div class="home__links">
          <router-link to="/login-or-signup" class="home__link"
            >Tizimga kirish
          </router-link>
        </div>
      </div>
    </div>
    <div class="section__advantages section advantage">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2 class="section__title text-center">Bizning afzalliklarimiz</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 advantage__item">
            <div class="advantage__img">
              <img :src="adv1" alt="adv1" />
            </div>
            <h4>Bepul yetkazib berish</h4>
            <p>O’zbekiston bo’ylab yetkazib berish imkoniyati mavjud</p>
          </div>
          <div class="col-sm-4 advantage__item">
            <div class="advantage__img">
              <img :src="adv2" alt="adv2" />
            </div>
            <h4>Buyurtmalar 24 soatda yetkaziladi</h4>
            <p>Istalgan buyurtmalar 24 soat ichida yetkazib beriladi</p>
          </div>
          <div class="col-sm-4 advantage__item">
            <div class="advantage__img">
              <img :src="adv3" alt="adv3" />
            </div>
            <h4>Aksiya narxida xarid qilish imkoniyati</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="section__about about section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2 class="section__title text-center">Raqamlar biz haqimizda</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 about__item">
            <h2>13</h2>
            <h4>Viloyatlar</h4>
          </div>
          <div class="col-sm-4 about__item">
            <h2>565 489</h2>
            <h4>Umumiy buyurtmalar soni</h4>
          </div>
          <div class="col-sm-4 about__item">
            <h2>156</h2>
            <h4>
              Ayni vaqtda yetkazib <br />
              berilayotgan buyurtmalar soni
            </h4>
          </div>
        </div>
      </div>
    </div>
    <page-footer />
  </div>
</template>

<script>
import logo from "../../../assets/images/logo-home.png";
import adv1 from "./../../../assets/images/adv1.png";
import adv2 from "./../../../assets/images/adv2.png";
import adv3 from "./../../../assets/images/adv3.png";
import PageFooter from '../../../components/PageFooter.vue';
export default {
  data() {
    return {
     logo,
      adv1,
      adv2,
      adv3,
    };
  },
  components:{
    PageFooter
  }
};
</script>