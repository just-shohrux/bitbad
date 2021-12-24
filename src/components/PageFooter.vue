<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <ul class="footer__contact">
            <li><img :src="phone" alt="phone" /> 33 500 65 65</li>
            <li><img :src="map" alt="map" />Toshkent shahar</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <ul class="footer__social">
            <li>
              <a href="#">
                <img :src="telegram" alt="telegram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="facebook" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="instagram" alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-sm-6 text-center text-sm-left">
          <p class="footer__text">
            © 2021 Medical Plants: Barcha huquqlar himoylangan
          </p>
        </div>
        <div class="col-sm-6 text-sm-right text-center mt-3 mt-sm-0">
          <p class="footer__text">
            Sayt
            <a href="https://greatsoft.uz/uz" target="_blank">GREATSOFT</a>
            kompaniyasi tomonidan ishlab chiqildi
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import phone from "../assets/icons/phone.png";
import map from "../assets/icons/map.png";
import telegram from "../assets/icons/telegram.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
export default {
  data() {
    return {
      phone,
      map,
      telegram,
      facebook,
      instagram,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #006400;
  padding: 30px 60px;
  color: #fff;
  &__contact {
    margin-bottom: 0;
    li {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 15px;
      img {
        margin-right: 15px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__social {
    display: flex;
    justify-content: flex-end;
    li {
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__text {
    color: #e2dede;
    font-size: 14px;
    a{
        color: #fff;
    }
  }
}

@media (max-width: 992px) {
    .footer{
        padding: 30px 0;
    }
    
}

@media (max-width: 992px) {
    .footer__contact{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .footer__contact li img{
        margin-right: 5px;
    }
    .footer__social{
        justify-content: center;
    }
}
</style>