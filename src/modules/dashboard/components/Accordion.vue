<template>
  <div class="custom__accordion general__box">
    <h2>{{ faq.question }}</h2>
    <p :class="{ 'd-none': !isOpen }">
      {{ faq.answer }}
    </p>
    <i
      class="bx"
      :class="{ 'bx-chevron-down': !isOpen, 'bx-chevron-up': isOpen }"
      @click="isOpen = !isOpen"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props: ["faq"],
  methods: {},
};
</script>

<style lang="scss" scoped>
.custom__accordion {
  padding-left: 40px;
  padding-right: 60px;
  padding-top: 35px;
  padding-bottom: 35px;
  position: relative;
  margin-bottom: 15px;
  h2 {
    color: #006400;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    margin-top: 30px;
    color: #334d6e;
    font-weight: 600;
    font-size: 18px;
  }
  .bx {
    position: absolute;
    font-size: 36px;
    top: 30px;
    right: 32px;
    cursor: pointer;
    display: inline-block;
  }
}
@media (max-width: 576px) {
  .custom__accordion{
    margin-right: 5px;
    margin-left: 5px;
  }
  .custom__accordion{
    padding: 15px;
  }
  .custom__accordion h2{
    font-size: 16px;
  }
  .custom__accordion .bx{
    font-size: 24px;
    top: 15px;
    right: 15px;
  }
  .custom__accordion p{
    font-size: 14px;
    margin-top: 15px;
  }
}
</style>