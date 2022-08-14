<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title>
        <feather-icon icon="CommandIcon" size="18" class="mr-50" />
        Avíos
      </b-card-title>

      <b-button-group class="btn-group-sm">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="openModalAddAccessory"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Agregar avío
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
          { key: 'accessory', label: 'Avío' },
          { key: 'cant', label: 'Cantidad' },
          { key: 'totalCost', label: 'Costo total' },
          { key: 'actions', label: 'Acciones' },
        ]"
        :items="accessories.data"
      ></b-table>
    </div>

    <modal-add-accessory
      v-if="showModalAddAccessory"
      @onClose="closeModalAddAccessory"
    />
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
import Ripple from "vue-ripple-directive";

// Components
import ModalAddAccessory from "@/views/customer/production/components/ModalAddAccessory.vue";

export default {
  components: {
    ModalAddAccessory,
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

      accessories: {
        data: [],
      },

      // Modals
      showModalAddAccessory: false,
    };
  },
  methods: {
    ...mapActions({
      A_GET_PRODUCTION_ACCESSORIES:
        "custProduction/A_GET_PRODUCTION_ACCESSORIES",
    }),
    openModalAddAccessory() {
      this.showModalAddAccessory = true;
    },
    async closeModalAddAccessory(saved) {
      if (saved) await this.getProductionAccessories();
      this.showModalAddAccessory = false;
    },
    async getProductionAccessories() {
      try {
        this.addPreloader();

        const response = await this.A_GET_PRODUCTION_ACCESSORIES({});

        if (response.status == 200) {
          this.accessories.data = response.data;
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
    // await this.getProductionAccessories();
  },
};
</script>

<style>
</style>