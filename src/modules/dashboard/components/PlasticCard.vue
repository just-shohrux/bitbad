<template>
  <div class="plastic__box" v-if="isFetched">
    <h2>Hisob raqami</h2>
    <p>Karta raqamingiz</p>
    <input
      type="text"
      v-mask="'#### #### #### ####'"
      :value="user.card_number"
      placeholder="**** **** **** ****"
      disabled
    />
    <div class="d-flex">
      <router-link class="link" to="/profile/add-card">{{
        user.card_number ? "O'zgartirish" : "Karta qo'shish"
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import get from "lodash/get";
export default {
  computed: {
    ...mapState({
      user: (state) => get(state, "auth.auth.data", {}),
      isFetched: (state) => get(state, "auth.auth.isFetched", false),
    }),
  },
};
</script>

<style lang="scss" scoped>
.plastic {
  &__box {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 30px;

    h2 {
      font-size: 20px;
      color: #334d6e;
      font-weight: 600;
      margin-bottom: 15px;
    }
    p {
      font-size: 18px;
      color: #334d6e;
      margin-bottom: 10px;
    }
    input {
      background-color: transparent;
      border: none;
      font-size: 20px;
    }
  }
}
.link {
  display: inline-block;
  margin-top: 30px;
  background: #398739;
  border-radius: 15px;
  padding: 10px 30px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.25s ease;
  &:hover {
    box-shadow: 0px 0px 4px 5px rgba(0, 100, 0, 0.25);
    text-decoration: none;
  }
}
@media  (max-width:576px) {
 .plastic__box{
   padding: 15px;
 }
 .plastic__box h2{
   font-size: 18px;
   margin-bottom: 10px;
 }
 .plastic__box input{
   font-size: 14px;
 }
 .plastic__box p{
   font-size: 16px;
   margin-bottom: 5px;
 }
 .link{
   font-size: 14px;
   margin-top: 15px;
   padding: 10px 15px;
 }
}
</style>