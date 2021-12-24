<template>
  <div class="nodata">
    <img :src="noDataImg" alt="nodata" />
    <h2>{{title}}</h2>
  </div>
</template>

<script>
import noDataImg from "./../../../assets/images/nodata.png";
export default {
  data() {
    return {
      noDataImg,
    };
  },
  props:['title']
};
</script>

<style lang="scss" scoped>
.nodata {
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
h2{
    margin-top: 15px;
    font-size: 32px;
    color: #334D6E;
    font-weight: 600;
}
img{
    width: 150px;
}

@media (max-width: 576px) {
  h2{
    font-size: 24px;
  }
  img{
    width: 100px;
  }
}
</style>