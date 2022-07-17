<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button
          variant="outline-primary"
          class="mr-2"
          @click="redirectToRegisterService"
        >
          <feather-icon icon="PlusCircleIcon" class="mr-50" />
          Agregar Servicio
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
          <card-group-services
            :services="services"
            @onViewDetails="redirectToViewDetails"
            @onUpdate="redirectToUpdateService"
            @onDelete="deleteService"
          >
          </card-group-services>
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-services
          :table="table"
          :services="services"
          @onViewDetails="redirectToViewDetails"
          @onUpdate="redirectToUpdateService"
          @onDelete="deleteService"
        ></table-services>
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import CardGroupServices from "./components/CardGroupServices.vue";
import TableServices from "./components/TableServices.vue";

export default {
  components: {
    CardGroupServices,
    TableServices,
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
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_SERVICES_BY_USER: "provMyPostsServices/A_GET_SERVICES_BY_USER",
      A_DELETE_SERVICE: "provMyPostsServices/A_DELETE_SERVICE",
    }),
    getGridView() {
      this.typeGridView = localStorage.getItem("providerMyPostsServicesView");
      this.typeGridView == null ? this.setGridView("table") : null;
    },
    setGridView(view) {
      this.typeGridView = view;
      localStorage.setItem("providerMyPostsServicesView", view);
    },
    redirectToRegisterService() {
      this.$router.push({
        name: "app-provider-my-posts-services-register",
      });
    },
    redirectToUpdateService(id) {
      this.$router.push({
        name: "app-provider-my-posts-services-update",
        params: { id: id },
      });
    },
    redirectToViewDetails(id) {
      this.$router.push({
        name: "app-provider-my-posts-services-details",
        params: { id: id },
      });
    },
    async getServices() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SERVICES_BY_USER(
          this.currentUser.idUsuario
        );

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
    async deleteService(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();

          const response = await this.A_DELETE_SERVICE(id);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });

            this.getServices();
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
    await this.getServices();
  },
};
</script>

<style>
</style>