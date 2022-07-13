<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button
          variant="outline-primary"
          class="mr-2"
          @click="redirectToRegisterFabric"
        >
          <feather-icon icon="PlusCircleIcon" class="mr-50" />
          Agregar Tela
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
          <card-group-fabrics
            :fabrics="fabrics"
            @onViewDetails="redirectToViewDetails"
            @onUpdate="redirectToUpdateFabric"
            @onDelete="deleteFabric"
          ></card-group-fabrics>
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-fabrics
          :table="table"
          :fabrics="fabrics"
          @onViewDetails="redirectToViewDetails"
          @onUpdate="redirectToUpdateFabric"
          @onDelete="deleteFabric"
        ></table-fabrics>
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import TableFabrics from "./components/TableFabrics.vue";
import CardGroupFabrics from "./components/CardGroupFabrics.vue";

export default {
  components: {
    TableFabrics,
    CardGroupFabrics,
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
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_FABRICS_BY_USER: "provMyPostsFabrics/A_GET_FABRICS_BY_USER",
      A_DELETE_FABRIC: "provMyPostsFabrics/A_DELETE_FABRIC",
    }),
    getGridView() {
      this.typeGridView = localStorage.getItem("providerMyPostsFabricsView");
    },
    setGridView(view) {
      this.typeGridView = view;
      localStorage.setItem("providerMyPostsFabricsView", view);
    },
    redirectToRegisterFabric() {
      this.$router.push({ name: "app-provider-my-posts-fabrics-register" });
    },
    redirectToUpdateFabric(id) {
      this.$router.push({
        name: "app-provider-my-posts-fabrics-update",
        params: { id: id },
      });
    },
    redirectToViewDetails(id) {
      this.$router.push({
        name: "app-provider-my-posts-fabrics-details",
        params: { id: id },
      });
    },
    async getFabrics() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FABRICS_BY_USER(
          this.currentUser.idUsuario
        );

        if ((response.status = 200)) {
          this.fabrics.data = response.data;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    async deleteFabric(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();

          const response = await this.A_DELETE_FABRIC(id);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });

            await this.getFabrics();
          }

          this.removePreloader();
        }
      } catch (error) {
        this.removePreloader();

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