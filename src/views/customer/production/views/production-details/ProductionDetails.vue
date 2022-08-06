<template>
  <div>
    <header-slot></header-slot>

    <b-row class="card-group">
      <b-col cols="6">
        <card-information :production="production" />
      </b-col>
      <b-col md="6">
        <card-fabrics />
      </b-col>
      <b-col md="6">
        <card-accessories />
      </b-col>
      <b-col md="6">
        <card-services />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

// Components
import CardInformation from "./components/CardInformation.vue";
import CardFabrics from "./components/CardFabrics.vue";
import CardAccessories from "./components/CardAccessories.vue";
import CardServices from "./components/CardServices.vue";
import CardDocuments from "./components/CardDocuments.vue";

export default {
  components: {
    CardInformation,
    CardFabrics,
    CardAccessories,
    CardServices,
    CardDocuments,
  },
  data() {
    return {
      production: {},
    };
  },
  computed: {
    productionId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_PRODUCTION_BY_ID: "custProduction/A_GET_PRODUCTION_BY_ID",
    }),
    async getProduction() {
      try {
        this.addPreloader();

        const response = await this.A_GET_PRODUCTION_BY_ID(this.productionId);

        if (response.status == 200) {
          this.production = response.data;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
  },
  async created() {
    await this.getProduction();
    console.log(this.productionId);
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