<template>
  <div class="category__box">
    <h2>KATEGORIYALAR</h2>
    <ul>
      <li :class="{active:active===0}" @click="setActiveCategory(0)">Barchasi</li>
      <li  v-for="(category,i) in categories" :key="i" :class="{active:active===category.id}" @click="setActiveCategory(category.id)">{{category.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:0
    }
  },
  props:['isFetchedCategory','categories'],
  components:{},
  methods:{
    setActiveCategory(id){
      this.active = id;
      if(id){
        this.$store.dispatch('dashboard/getProductsByCategory',{id});
      }else{
        this.$store.dispatch('dashboard/getAllProducts');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.category {
  &__box {
    background: #ffffff;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 30px 15px;
    min-height: 335px;
  }
}
h2 {
  color: #006400;
  font-weight: 600;
  font-size: 18px;
}
ul {
  margin-bottom: 0;
  margin-top: 20px;
  li {
    color: rgba(51, 77, 110, 0.7);
    cursor: pointer;
    font-weight: 500;
    margin-bottom: 15px;
    &.active{
      font-weight: 600;
    }
    &:last-child{
        margin-bottom: 0;
    }
  }
}

@media  (max-width:576px) {
 .category__box{
   padding: 15px;
   min-height: 200px;
 }
}
</style>