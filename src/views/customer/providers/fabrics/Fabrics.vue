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
          <card-group-fabrics
            :fabrics="fabrics"
            @onAddToProduction="addToProduction"
          ></card-group-fabrics>
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-fabrics
          :table="table"
          :fabrics="fabrics"
          @onAddToProduction="addToProduction"
        ></table-fabrics>
      </template>
    </b-card>

    <modal-select-production
      v-if="showModalSelectProduction"
      @onClose="closeModalSelectProduction"
    />

    <modal-add-fabric
      v-if="showModalAddFabricToProduction"
      :id-production="idProductionSelected"
      :fabric-selected="fabricSelected"
      @onClose="closeModalAddFabricToProduction"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import TableFabrics from "./components/TableFabrics.vue";
import CardGroupFabrics from "./components/CardGroupFabrics.vue";
import ModalSelectProduction from "../../components/ModalSelectProduction.vue";
import ModalAddFabric from "@/views/customer/production/components/ModalAddFabric.vue";

export default {
  components: {
    TableFabrics,
    CardGroupFabrics,
    ModalSelectProduction,
    ModalAddFabric,
  },
  data() {
    return {
      typeGridView: "",

      table: {
        fields: Fields,
      },

      fabrics: {
        data: [],
      },

      idProductionSelected: "",
      fabricSelected: "",

      showModalSelectProduction: false,
      showModalAddFabricToProduction: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_FABRICS: "provMyPostsFabrics/A_GET_FABRICS",
    }),
    getGridView() {
      this.typeGridView = localStorage.getItem(
        "CustomerProvidersMyPostsFabricsView"
      );
      this.typeGridView == null ? this.setGridView("table") : null;
    },
    setGridView(view) {
      this.typeGridView = view;
      localStorage.setItem("customerProvidersMyPostsFabricsView", view);
    },
    addToProduction(item) {
      localStorage.setItem(
        "customerProvidersFabricSelected",
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

        const fabricSelected = localStorage.getItem(
          "customerProvidersFabricSelected"
        );

        this.fabricSelected = JSON.parse(fabricSelected);

        this.openModalAddFabricToProduction();
      }
    },
    openModalAddFabricToProduction() {
      this.showModalAddFabricToProduction = true;
    },
    closeModalAddFabricToProduction() {
      this.showModalAddFabricToProduction = false;
    },
    async getFabrics() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FABRICS({
          page: 0,
          size: 100,
          sortDir: "asc",
          sort: "idFabric",
        });

        if (response.status == 200) {
          this.fabrics.data = response.data;
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
    await this.getFabrics();
  },
};
</script>

<style scoped>
</style>