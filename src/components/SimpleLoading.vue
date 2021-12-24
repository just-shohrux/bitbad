<template>
  <div class="simple__loader">
    <fade-loader :color="colour" />
  </div>
</template>

<script>
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
export default {
  data(){
    return {
      colour:this.color??"#006400"
    }
  },
  components: {
    FadeLoader,
  },
  props:["color"]
};
</script>

<style lang="scss" scoped>
.simple__loader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;  
    position: fixed;
    top: 0;
    left: 0; 
    background-color: rgba(255,255,255,0.5);  
    z-index: 9999; 
}
</style>