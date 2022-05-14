<template>
  <div id="user-profile">
    <card-profile-header :current-user="currentUser" />
    <section id="profile-info">
      <b-row>
        <b-col lg="3" cols="12" order="2" order-lg="1">
          <card-profile-about :current-user="currentUser" />
        </b-col>

        <b-col lg="9" cols="12" order="1" order-lg="2">
          <b-card></b-card>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CardProfileHeader from "./components/CardProfileHeader.vue";
import CardProfileAbout from "./components/CardProfileAbout.vue";

export default {
  components: {
    CardProfileHeader,
    CardProfileAbout,
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" >
@import "@core/scss/vue/pages/page-profile.scss";
</style>
