<template>
  <div class="container-fluid pt-75">
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <profile-info :user="user" />
      </div>
      <div class="col-sm-6">
        <plastic-card />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileInfo from "../components/ProfileInfo.vue";
import { mapState } from "vuex";
import get from "lodash/get";
import PlasticCard from "../components/PlasticCard.vue";
import isEmpty from "lodash/isEmpty";
export default {
  components: { ProfileInfo, PlasticCard },
  computed: {
    ...mapState({
      user: (state) => get(state, "auth.auth.data", {}),
      isFetched: (state) => get(state, "auth.auth.isFetched", false),
      profile: (state) => get(state, "dashboard.profile.data", {}),
      isFetchedProfile: (state) =>
        get(state, "dashboard.profile.isFetched", false),
      card: (state) => get(state, "dashboard.card.data", {}),
      isFetchedCard: (state) => get(state, "dashboard.card.isFetched", false),
    }),
  },
  mounted() {
    this.$store.dispatch("auth/getMe");

    if (this.isFetchedProfile && !isEmpty(this.profile)) {
      this.$swal({
        icon: "success",
        title: this.profile.message,
      });
      this.$store.commit("dashboard/CHANGE_PROFILE_INFO_TRIGGER");
    }

    if (this.isFetchedCard && !isEmpty(this.card)) {
      this.$swal({
        icon: "success",
        title: this.card.message,
      });
      this.$store.commit("dashboard/ADD_CARD_NUMBER_TRIGGER");
    }
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.col-6 {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
.row {
  margin-left: -10px !important;
  margin-right: -10px !important;
}

@media  (max-width:576px) {

 .profile__info{
   padding: 15px;
 }
}
</style>