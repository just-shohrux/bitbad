<template>
  <div class="balance__box">
    <div class="d-flex justify-content-between align-items-center">
      <h2>Hisobingiz</h2>
      <span class="balance">{{user.balance | numeral("0,0")}} so’m</span>
    </div>
    <div class="dotted__line"></div>
    <div class="line" ref="line">
      <span class="line__title" ref="order">Buyurtma</span>
      <span class="line__dotted" :style="{ width: widthOrder }"></span>
      <span class="line__count" ref="countOrder">{{goods}} dona</span>
    </div>
    <div class="line">
      <span class="line__title" ref="query">So’rov</span>
      <span class="line__dotted" :style="{ width: widthQuery }"></span>
      <span class="line__count" ref="countQuery">{{requests}} dona</span>
    </div>
    <div class="dotted__line"></div>
    <div class="d-flex justify-content-center">
        <router-link to="/streams" class="home__link">Pul ishlash</router-link>
        <router-link to="/payment" class="home__link pink">Pul yechish</router-link>
    </div>
  </div>
</template>

<script>
import filter from "lodash/filter";
import isEqual from "lodash/isEqual";
export default {
  data() {
    return {
      widthOrder: "0px",
      widthQuery: "0px",
    };
  },
  computed:{
    requests(){
      return this.orders.length;
    },
    goods(){
      return filter(this.orders,order => isEqual(order.status,"sotildi")).length;
    }
  },
  props:["user","orders"],
  mounted() {
    this.orderWidth(
      this.$refs.line.clientWidth,
      this.$refs.order.clientWidth,
      this.$refs.countOrder.clientWidth
    );
    this.queryWidth(
      this.$refs.line.clientWidth,
      this.$refs.query.clientWidth,
      this.$refs.countQuery.clientWidth
    );
  },
  methods: {
    orderWidth(wLine, wOrder, wCount) {
      this.widthOrder = wLine - wOrder - wCount -20 + "px";
    },
    queryWidth(wLine, wOrder, wCount) {
      this.widthQuery = wLine - wOrder - wCount -20 + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
.balance {
  &__box {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 40px 20px;
    padding-bottom: 37px;
  }
}
h2 {
  font-size: 18px;
  color: #334d6e;
  font-weight: 700;
}
.balance {
  color: #006400;
  font-size: 22px;
  font-weight: 500;
}
.dotted__line {
  margin-top: 40px;
  margin-bottom: 40px;
}
.line {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  &:last-child{
      margin-bottom: 0;
  }
  &__dotted {
    opacity: 0.8;
    border: 1px dashed rgba(51, 77, 110, 0.5);
  }
  &__title {
    color: #334d6e;
    font-size: 18px;
    font-weight: 600;
    padding-right: 5px;
  }
  &__count {
    color: rgba(51, 77, 110, 0.7);
    font-size: 16px;
    font-weight: 500;
    padding-left: 5px;
  }
}
.home__link{
    border:none;
    cursor: pointer;
    &.pink{
        background-color: #F19F9D;
        margin-left: 40px;
        &:hover{
            box-shadow: 0px 0px 4px 5px rgba(241, 159, 157, 0.25);
        }
    }
}
@media (max-width: 1600px) {
    .balance__box {
       padding: 30px 15px;
    }
    .dotted__line{
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .balance{
      font-size: 20px;
    }
    .table__dropdown .title{
      font-size: 16px;
    }
    table thead th{
      font-size: 16px;
    }
}

@media  (max-width:576px) {
  .balance{
    font-size: 16px;
  }
  .line__count{
    font-size: 14px;
  }
.line__title{
  font-size: 14px;
}
}
</style>