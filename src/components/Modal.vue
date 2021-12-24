<template>
  <div class="popup" v-if="show">
    <div class="popup__content" v-click-outside="onClickOutside">
      <h2>{{message}}</h2>
      <div class="dotted__line"></div>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model.trim="flow.url" disabled />
      </form>
      <div class="d-flex">
        <button class="stream__copy" v-clipboard="flow.url">Nusxa ko’chirish</button>
        <button class="stream__telegram" type="submit">
          <i class="bx bx-navigation"></i>
        </button>
      </div>
      <div class="dotted__line mt-30"></div>
      <div class="d-flex justify-content-end">
        <button class="popup__close" @click="close">Yopish</button>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    onClickOutside() {
      this.show = false;
      this.$store.commit('dashboard/CREATE_FLOW_TRIGGER');
    },
    close() {
      this.show = false;
      this.$store.commit('dashboard/CREATE_FLOW_TRIGGER');
    },
  },
  props: ["flow","show","message"],
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
    width: 400px;
    padding: 30px;
    background-color: #fff;
    border-radius: 15px;
    h2 {
      font-size: 24px;
      font-weight: 600;
    }
  }
  &__close {
    border: none;
    padding: 6px 15px;
    border-radius: 15px;
    font-weight: 600;
    background-color: #ec3d4a;
    color: #fff;
    cursor: pointer;
  }
}
.dotted__line {
  margin-top: 15px;
  margin-bottom: 30px;
}
input {
  background: #f0f0f0;
  border-radius: 15px;
  padding: 15px 20px;
  display: block;
  width: 100%;
  border: none;
  margin-bottom: 25px;
}
.stream {
  &__copy {
    font-weight: 600;
    font-size: 14px;
    padding: 6px 15px;
    border: none;
    background-color: #398739;
    border-radius: 15px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    outline: none;
  }

  &__telegram {
    background-color: #2196f3;
    color: #fff;
    border-radius: 15px;
    height: 32px;
    width: 60px;
    font-size: 20px;
    text-align: center;
    border: none;
    margin-left: 15px;
    cursor: pointer;
  }
}
button:focus {
  outline: none;
}
.mt-30 {
  margin-top: 30px;
}
</style>