<template>
  <div class="pulse__loader">
    <fade-loader :color="colour" />
  </div>
</template>

<script>
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
export default {
  data(){
    return {
      colour:this.color??"#fff"
    }
  },
  components: {
    FadeLoader,
  },
  props:["color"]
};
</script>

<style lang="scss" scoped>
.pulse__loader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;      
}
</style>