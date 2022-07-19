<template>
  <b-row class="card-group">
    <b-col cols="12">
      <production-information />
    </b-col>

    <b-col cols="6">
      <production-fabrics />
    </b-col>

    <b-col cols="6">
      <production-accessories />
    </b-col>

    <b-col cols="12">
      <production-services />
    </b-col>
  </b-row>
</template>

<script>
// Components
import ProductionInformation from "./components/ProductionInformation.vue";
import ProductionFabrics from "./components/ProductionFabrics.vue";
import ProductionAccessories from "./components/ProductionAccessories.vue";
import ProductionServices from "./components/ProductionServices.vue";

export default {
  components: {
    ProductionInformation,
    ProductionFabrics,
    ProductionAccessories,
    ProductionServices,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.card-group > div > .card {
  height: calc(100% - 2rem);
  min-height: 350px;
  > .card-header {
    border-bottom: 1px solid rgb(80 85 99 / 50%);
    margin-bottom: 1.5rem;
    .card-title {
      font-weight: bold;
    }
  }
}
</style>