<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title>
        <feather-icon icon="CodepenIcon" size="18" class="mr-50" />
        Telas
      </b-card-title>

      <b-button-group class="btn-group-sm">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="openModalAddFabric"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Agregar tela
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
          { key: 'fabric.nameFabric', label: 'Tela' },
          { key: 'quantityFabric', label: 'Cantidad' },
          { key: 'priceFabric', label: 'Costo total' },
          { key: 'actions', label: 'Acciones' },
        ]"
        :items="fabrics.data"
      ></b-table>
    </div>

    <modal-add-fabric
      v-if="showModalAddFabric"
      @onClose="closeModalAddFabric"
    />
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
import Ripple from "vue-ripple-directive";

// Components
import ModalAddFabric from "@/views/customer/production/components/ModalAddFabric.vue";

export default {
  components: {
    ModalAddFabric,
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

      fabrics: {
        data: [],
      },

      // Modals
      showModalAddFabric: false,
    };
  },
  methods: {
    ...mapActions({
      A_GET_PRODUCTION_FABRICS_PAGINATE:
        "custProduction/A_GET_PRODUCTION_FABRICS_PAGINATE",
    }),
    openModalAddFabric() {
      this.showModalAddFabric = true;
    },
    async closeModalAddFabric(saved) {
      if (saved) await this.getProductionFabrics();
      this.showModalAddFabric = false;
    },
    async getProductionFabrics() {
      try {
        this.addPreloader();

        const response = await this.A_GET_PRODUCTION_FABRICS_PAGINATE({
          page: this.paginate.currentPage,
          params: {
            pageNo: this.paginate.currentPage,
            pageSize: this.paginate.perPage,
            sortDir: "asc",
            sortField: "idProductionFabric",
          },
        });

        if (response.status == 200) {
          const itemsValue = response.data[Object.keys(response.data)[0]];
          this.fabrics.data = itemsValue.content;
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
    await this.getProductionFabrics();
  },
};
</script>

<style>
</style>