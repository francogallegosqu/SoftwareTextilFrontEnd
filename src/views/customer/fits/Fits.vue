<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button
          variant="outline-primary"
          class="mr-2"
          @click="redirectToRegisterFit"
        >
          <feather-icon icon="PlusCircleIcon" class="mr-50" />
          Agregar fit
        </b-button>

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
          <card-group-fits
            :fits="fits"
            @onUpdate="redirectToUpdateFit"
            @onDelete="deleteFit"
          />
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-fits
          :table="table"
          :fits="fits"
          @onUpdate="redirectToUpdateFit"
          @onDelete="deleteFit"
        />
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Componets
import TableFits from "./components/TableFits.vue";
import CardGroupFits from "./components/CardGroupFits.vue";

export default {
  components: {
    TableFits,
    CardGroupFits,
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

      fits: {
        data: [],
      },
    };
  },
  watch: {
    async "paginate.currentPage"(newVal) {
      await this.getFits();
    },
  },
  methods: {
    ...mapActions({
      A_GET_FITS_PAGINATE: "sharedFit/A_GET_FITS_PAGINATE",
      A_DELETE_FIT: "fit/A_DELETE_FIT",
    }),
    getGridView() {
      this.typeGridView = localStorage.getItem("customerFitView");
      this.typeGridView == null ? this.setGridView("table") : null;
    },
    setGridView(view) {
      this.typeGridView = view;
      localStorage.setItem("customerFitView", view);
    },
    redirectToRegisterFit() {
      this.$router.push({
        name: "app-customer-fits-register",
      });
    },
    redirectToUpdateFit(id) {
      this.$router.push({
        name: "app-customer-fits-update",
        params: { id: id },
      });
    },
    async getFits() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FITS_PAGINATE({
          page: this.paginate.currentPage,
          params: {
            pageNo: this.paginate.currentPage,
            pageSize: this.paginate.perPage,
            sortDir: "asc",
            sortField: "idFit",
          },
        });

        if (response.status == 200) {
          const itemsValue = response.data[Object.keys(response.data)[0]];
          this.fits.data = itemsValue.content;
          this.paginate.totalDocs = itemsValue.totalElements;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    async deleteFit(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();

          const response = await this.A_DELETE_FIT(id);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });
            await this.getFits();
          }

          this.removePreloader();
        }
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
  },
  async created() {
    await this.getGridView();
    await this.getFits();
  },
};
</script>

<style>
</style>