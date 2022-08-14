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
      <b-pagination
        class="float-right mr-2"
        v-model="paginate.currentPage"
        :per-page="paginate.perPage"
        :total-rows="paginate.totalDocs"
        hide-goto-end-buttons
      />

      <template v-if="typeGridView == 'cards'">
        <b-container>
          <card-group-accessories
            :accessories="accessories"
            @onAddToProduction="addToProduction"
          ></card-group-accessories>
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-accessories
          :table="table"
          :accessories="accessories"
          @onAddToProduction="addToProduction"
        ></table-accessories>
      </template>
    </b-card>

    <modal-select-production
      v-if="showModalSelectProduction"
      @onClose="closeModalSelectProduction"
    />

    <modal-add-accessory
      v-if="showModalAddAccessoryToProduction"
      :id-production="idProductionSelected"
      :accessory-selected="accessorySelected"
      @onClose="closeModalAddAccessoryToProduction"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import TableAccessories from "./components/TableAccessories.vue";
import CardGroupAccessories from "./components/CardGroupAccessories.vue";
import ModalSelectProduction from "../../components/ModalSelectProduction.vue";
import ModalAddAccessory from "@/views/customer/production/components/ModalAddAccessory.vue";

export default {
  components: {
    TableAccessories,
    CardGroupAccessories,
    ModalSelectProduction,
    ModalAddAccessory,
  },
  data() {
    return {
      typeGridView: "",

      table: {
        fields: Fields,
      },

      paginate: {
        currentPage: 1,
        perPage: 10,
        totalDocs: "",
      },

      accessories: {
        data: [],
      },

      idProductionSelected: "",
      accessorySelected: "",

      showModalSelectProduction: false,
      showModalAddAccessoryToProduction: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  watch: {
    async "paginate.currentPage"(newVal) {
      await this.getAccessories();
    },
  },
  methods: {
    ...mapActions({
      A_GET_ACCESSORIES_PAGINATE:
        "provMyPostsAccessories/A_GET_ACCESSORIES_PAGINATE",
    }),
    getGridView() {
      this.typeGridView = localStorage.getItem(
        "customerProvidersMyPostsAccessoriesView"
      );
      this.typeGridView == null ? this.setGridView("table") : null;
    },
    setGridView(view) {
      this.typeGridView = view;
      localStorage.setItem("customerProvidersMyPostsAccessoriesView", view);
    },
    addToProduction(item) {
      localStorage.setItem(
        "customerProvidersAccessorySelected",
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

        const accessorySelected = localStorage.getItem(
          "customerProvidersAccessorySelected"
        );

        this.accessorySelected = JSON.parse(accessorySelected);

        this.openModalAddAccessoryToProduction();
      }
    },
    openModalAddAccessoryToProduction() {
      this.showModalAddAccessoryToProduction = true;
    },
    closeModalAddAccessoryToProduction() {
      this.showModalAddAccessoryToProduction = false;
    },
    async getAccessories() {
      try {
        this.addPreloader();

        const response = await this.A_GET_ACCESSORIES_PAGINATE({
          page: this.paginate.currentPage,
          params: {
            pageNo: this.paginate.currentPage,
            pageSize: this.paginate.perPage,
            sortDir: "asc",
            sortField: "idAccessory",
          },
        });

        if ((response.status = 200)) {
          const itemsValue = response.data[Object.keys(response.data)[0]];
          this.accessories.data = itemsValue.content;
          this.paginate.totalDocs = itemsValue.totalElements;
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
    await this.getAccessories();
  },
};
</script>

<style scoped>
</style>