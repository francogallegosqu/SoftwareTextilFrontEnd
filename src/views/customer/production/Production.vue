<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button
          variant="outline-primary"
          class="mr-2"
          @click="redirectToRegisterProduction"
        >
          <feather-icon icon="PlusCircleIcon" class="mr-50" />
          Agregar producción
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
      <template v-if="typeGridView == 'cards'">
        <b-container>
          <card-group-productions
            :productions="productions"
            @onUpdate="redirectToUpdateProduction"
            @onViewDetails="redirectToViewDetails"
            @onDelete="deleteProduction"
          />
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-productions
          :table="table"
          :productions="productions"
          @onUpdate="redirectToUpdateProduction"
          @onViewDetails="redirectToViewDetails"
          @onDelete="deleteProduction"
        />
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import CardGroupProductions from "./components/CardGroupProductions.vue";
import TableProductions from "./components/TableProductions.vue";

export default {
  components: {
    CardGroupProductions,
    TableProductions,
  },
  data() {
    return {
      typeGridView: "",

      table: {
        fields: Fields,
      },

      productions: {
        data: [],
      },
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_PRODUCTIONS: "custProduction/A_GET_PRODUCTIONS",
    }),
    getGridView() {
      this.typeGridView = localStorage.getItem("customerProductionView");
      this.typeGridView == null ? this.setGridView("table") : null;
    },
    setGridView(view) {
      this.typeGridView = view;
      localStorage.setItem("customerProductionView", view);
    },
    redirectToRegisterProduction() {
      this.$router.push({
        name: "app-customer-productions-register",
      });
    },
    redirectToUpdateProduction(id) {
      this.$router.push({
        name: "app-customer-productions-update",
        params: { id: id },
      });
    },
    redirectToViewDetails(id) {
      this.$router.push({
        name: "app-customer-productions-details",
        params: { id: id },
      });
    },
    async getProductions() {
      try {
        this.addPreloader();

        const response = await this.A_GET_PRODUCTIONS({
          page: 0,
          size: 100,
          sortDir: "asc",
          sort: "idProduction",
        });

        if (response.status == 200) {
          this.productions.data = response.data;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    async deleteProduction(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();

          const response = await this.A_DELETE_PRODUCTION(id);

          if (response.status == 200) {
            await this.getProductions();
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
    await this.getProductions();
  },
};
</script>

<style>
</style>