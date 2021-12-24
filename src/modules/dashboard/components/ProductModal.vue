<template>
  <div class="popup" v-if="showModal">
    <div class="popup__content" v-click-outside="onClickOutside">
      <div class="img"  :style="{ backgroundImage: `url(${product.image})` }"></div>
      <div class="p-30">
        <h2 class="title">{{ product.name }}</h2>
        <p class="price">{{ product.price }} s’om</p>
        <p class="description">
          {{ product.text }}
        </p>
        <router-link class="link" :to="`/landing/${product.template.name}/${product.id}`"
          >Asosiy lending</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
export default {
  props: ["product", "show"],
  computed :{
    showModal(){
        return this.show;
    }
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    onClickOutside() {
      this.$emit('close-modal',false);
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(44, 62, 80, 0.75);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  &__content {
    width: 450px;
    background-color: #fff;
    border-radius: 15px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    .title {
      font-size: 18px;
      color: #006400;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .price {
      color: rgba(51, 77, 110, 0.7);
      font-size: 16px;
      margin-bottom: 10px;
    }
    .description {
      color: #334d6e;
      margin-bottom: 20px;
    }
    .link {
      background-color: #398739;
      padding: 5px 15px;
      border-radius: 15px;
      color: #fff;
      margin-bottom: 5px;
      display: inline-block;
    }
    .img {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      background-color: #bfccdd;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 250px;
    }
    .p-30 {
      padding: 15px;
    }
  }
}
@media (max-width: 576px) {
  .popup__content{
    width: 95%;
  }
}

</style>