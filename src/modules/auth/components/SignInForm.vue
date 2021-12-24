<template>
  <form class="layout__form" @submit.prevent="signIn">
    <div class="general__prefix">
      <input
        type="text"
        class="general__input"
        placeholder="****"
        v-mask="'####'"
        v-model.trim="code"
      />
    </div>
    <div class="text-center">
        <button type="submit" class="general__btn layout__btn">Yuborish</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      code: "",
    };
  },
  methods:{
      signIn(){
          this.$emit('signIn',this.code);
      }
  }
};
</script>