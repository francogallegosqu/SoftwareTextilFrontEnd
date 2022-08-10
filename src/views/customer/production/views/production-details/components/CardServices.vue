<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title>
        <feather-icon icon="FeatherIcon" size="18" class="mr-50" />
        Servicios
      </b-card-title>

      <b-button-group class="btn-group-sm">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="openModalAddService"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Agregar servicio
        </b-button>
      </b-button-group>
    </template>

    <div>
      <b-table
        class="text-center"
        small
        :fields="[
          { key: 'service', label: 'Servicio' },
          { key: 'cant', label: 'Cantidad' },
          { key: 'totalCost', label: 'Costo total' },
          { key: 'actions', label: 'Acciones' },
        ]"
      ></b-table>
    </div>

    <modal-add-service
      v-if="showModalAddService"
      @onClose="closeModalAddService"
    />
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
import Ripple from "vue-ripple-directive";

// Components
import ModalAddService from "@/views/customer/production/components/ModalAddService.vue";

export default {
  components: {
    ModalAddService,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      services: {
        data: [],
      },

      // Modals
      showModalAddService: false,
    };
  },
  methods: {
    ...mapActions({
      A_GET_PRODUCTION_SERVICES: "custProduction/A_GET_PRODUCTION_SERVICES",
    }),
    openModalAddService() {
      this.showModalAddService = true;
    },
    async closeModalAddService(saved) {
      if (saved) await this.getProductionServices();
      this.showModalAddService = false;
    },
    async getProductionServices() {
      try {
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
  },
  async created() {
    await this.getProductionServices();
  },
};
</script>

<style>
</style>