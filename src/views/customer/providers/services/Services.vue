<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button-group class="mr-2">
          <b-button
            :variant="typeGridView == 'table' ? 'primary' : 'outline-primary'"
            @click="setGridView('table')"
          >
            <feather-icon icon="GridIcon" />
          </b-button>
          <b-button
            :variant="typeGridView == 'cards' ? 'primary' : 'outline-primary'"
            @click="setGridView('cards')"
          >
            <feather-icon icon="ColumnsIcon" />
          </b-button>
        </b-button-group>
      </template>
    </header-slot>

    <b-card body-class="px-0">
      <template v-if="typeGridView == 'cards'">
        <b-container>
          <card-group-services
            :services="services"
            @onAddToProduction="addToProduction"
          >
          </card-group-services>
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-services
          :table="table"
          :services="services"
          @onAddToProduction="addToProduction"
        ></table-services>
      </template>
    </b-card>

    <modal-select-production
      v-if="showModalSelectProduction"
      @onClose="closeModalSelectProduction"
    />

    <modal-add-service
      v-if="showModalAddServiceToProduction"
      :id-production="idProductionSelected"
      :service-selected="serviceSelected"
      @onClose="closeModalAddServiceToProduction"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import CardGroupServices from "./components/CardGroupServices.vue";
import TableServices from "./components/TableServices.vue";
import ModalSelectProduction from "../../components/ModalSelectProduction.vue";
import ModalAddService from "@/views/customer/production/components/ModalAddService.vue";

export default {
  components: {
    CardGroupServices,
    TableServices,
    ModalSelectProduction,
    ModalAddService,
  },
  data() {
    return {
      typeGridView: "",

      table: {
        fields: Fields,
      },

      services: {
        data: [],
      },

      idProductionSelected: "",
      serviceSelected: "",

      showModalSelectProduction: false,
      showModalAddServiceToProduction: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_SERVICES: "provMyPostsServices/A_GET_SERVICES",
    }),
    getGridView() {
      this.typeGridView = localStorage.getItem("providerMyPostsServicesView");
      this.typeGridView == null ? this.setGridView("table") : null;
    },
    setGridView(view) {
      this.typeGridView = view;
      localStorage.setItem("providerMyPostsServicesView", view);
    },
    addToProduction(item) {
      localStorage.setItem(
        "customerProvidersServiceSelected",
        JSON.stringify(item)
      );
      this.openModalSelectProduction();
    },
    openModalSelectProduction() {
      this.showModalSelectProduction = true;
    },
    closeModalSelectProduction(selected) {
      this.showModalSelectProduction = false;
      if (selected) {
        const productionSelected = localStorage.getItem(
          "customerProvidersProductionSelected"
        );
        this.idProductionSelected = JSON.parse(productionSelected).idProduction;

        const serviceSelected = localStorage.getItem(
          "customerProvidersServiceSelected"
        );

        this.serviceSelected = JSON.parse(serviceSelected);

        this.openModalAddServiceToProduction();
      }
    },
    openModalAddServiceToProduction() {
      this.showModalAddServiceToProduction = true;
    },
    closeModalAddServiceToProduction() {
      this.showModalAddServiceToProduction = false;
    },
    async getServices() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SERVICES({
          page: 0,
          size: 100,
          sortDir: "asc",
          sort: "idService",
        });

        if (response.status == 200) {
          this.services.data = response.data;
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
    await this.getGridView();
    await this.getServices();
  },
};
</script>

<style>
</style>