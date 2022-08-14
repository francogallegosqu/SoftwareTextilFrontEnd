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
      <b-pagination
        class="float-right mr-2"
        v-model="paginate.currentPage"
        :per-page="paginate.perPage"
        :total-rows="paginate.totalDocs"
        hide-goto-end-buttons
      />

      <b-table
        class="text-center"
        small
        :fields="[
          { key: 'service.nameService', label: 'Servicio' },
          { key: 'quantityService', label: 'Cantidad' },
          { key: 'priceService', label: 'Costo total' },
          { key: 'actions', label: 'Acciones' },
        ]"
        :items="services.data"
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
      paginate: {
        currentPage: 1,
        perPage: 10,
        totalDocs: "",
      },

      services: {
        data: [],
      },

      // Modals
      showModalAddService: false,
    };
  },
  methods: {
    ...mapActions({
      A_GET_PRODUCTION_SERVICES_PAGINATE:
        "custProduction/A_GET_PRODUCTION_SERVICES_PAGINATE",
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
        this.addPreloader();

        const response = await this.A_GET_PRODUCTION_SERVICES_PAGINATE({
          page: this.paginate.currentPage,
          params: {
            pageNo: this.paginate.currentPage,
            pageSize: this.paginate.perPage,
            sortDir: "asc",
            sortField: "idProductionService",
          },
        });

        if (response.status == 200) {
          const itemsValue = response.data[Object.keys(response.data)[0]];
          this.services.data = itemsValue.content;
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
    await this.getProductionServices();
  },
};
</script>

<style>
</style>