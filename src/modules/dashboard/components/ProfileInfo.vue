<template>
  <div class="profile__info">
    <h2>Aloqa uchun malumotlar</h2>
    <form @submit.prevent="handleSubmit">
      <div class="profile__form">
        <label for="#">Ismingiz</label>

        <input type="text" :value="user.full_name" disabled />
      </div>
      <div class="profile__form">
        <label for="#">Telefon raqamingiz</label>
        <div class="prefix">
          <span>+998</span>
          <input
            type="text"
            v-model="user.phone_number"
            placeholder="** *** ** **"
            v-mask="'## ### ## ##'"
            disabled
          />
        </div>
      </div>
      <button @click="$router.push('/profile-change')">O'zgartirish</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      console.log("submitting");
    },
  },
  props: ["user"],
};
</script>

<style lang="scss" scoped>
.profile {
  &__info {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 30px;
    h2 {
      font-size: 20px;
      color: #334d6e;
      font-weight: 600;
    }
    label {
      font-size: 18px;
      color: #334d6e;
    }
    input {
      display: block;
      width: 80%;
      background-color: #f0f0f0;
      border-radius: 15px;
      padding: 15px 20px;
      border: none;
    }
    .profile__form {
      margin-top: 30px;
    }
    button {
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
      }
    }
  }
}
.prefix {
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 15px 20px;
  width: 80%;
  display: flex;
  input {
    background-color: transparent;
    border: none;
    padding: 0;
  }
}

@media (max-width: 576px) {
  .mt-50 {
    padding-top: 90px !important;
  }
  .profile__info .profile__form {
    margin-top: 15px;
  }
  .profile__info label {
    font-size: 14px;
  }
  .profile__info input {
    padding: 10px;
    width: 80%;
    font-size: 14px;
  }
  .prefix{
    width: 80%;
    padding: 0px 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .profile__info button{
    font-size: 14px;
    margin-top: 15px;
    padding: 10px 15px;
  }
  .profile__info h2{
    font-size: 18px;
  }
}
</style>