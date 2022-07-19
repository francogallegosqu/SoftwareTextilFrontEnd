<template>
  <div>
    <header-slot></header-slot>

    <b-row class="card-group">
      <b-col cols="12">
        <card-information />
      </b-col>
      <b-col md="6">
        <card-fabrics />
      </b-col>
      <b-col md="6">
        <card-accessories />
      </b-col>
      <b-col md="12">
        <card-services />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// Components
import CardInformation from "./components/CardInformation.vue";
import CardFabrics from "./components/CardFabrics.vue";
import CardAccessories from "./components/CardAccessories.vue";
import CardServices from "./components/CardServices.vue";

export default {
  components: {
    CardInformation,
    CardFabrics,
    CardAccessories,
    CardServices,
  },
};
</script>

<style lang="scss">
.card-group > div > .card {
  height: calc(100% - 2rem);
  min-height: 250px;
  > .card-header {
    border-bottom: 1px solid rgb(228, 228, 228);
    margin-bottom: 1.5rem;
    .card-title {
      font-weight: bold;
    }
  }
}
</style>