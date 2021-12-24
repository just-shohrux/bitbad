<template>
  <div class="pulse__loader">
    <fade-loader :color="color"/>
  </div>
</template>

<script>
import FadeLoader from "vue-spinner/src/FadeLoader.vue";
export default {
  data() {
    return {
        color:"#fff",
    };
  },
  components: {
    FadeLoader,
  },
};
</script>

<style lang="scss" scoped>
.pulse__loader {
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>