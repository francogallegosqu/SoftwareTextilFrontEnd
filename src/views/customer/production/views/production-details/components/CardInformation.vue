<template>
  <b-card>
    <template #header>
      <b-card-title>
        <feather-icon icon="BookOpenIcon" size="18" class="mr-50" />
        {{ production.nameProduction }}
      </b-card-title>

      <b-button-group class="btn-group-sm">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="openModalAddDataSheet"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Agregar documento
        </b-button>
      </b-button-group>
    </template>

    <b-row>
      <b-col cols="7">
        <b-table
          class="text-center"
          small
          :fields="[
            { key: 'name', label: 'Nombre' },
            { key: 'actions', label: 'Acciones' },
          ]"
        ></b-table>
      </b-col>
      <b-col cols="5">
        <b-row>
          <b-col md="12">
            <h5>
              <b>Cantidad</b>
            </h5>
            <p>{{ production.quantityProduction }}</p>
          </b-col>
          <b-col md="12">
            <h5>
              <b>Total costo de producción</b>
            </h5>
            <p>{{ production.totalCostProduction | formatPen }}</p>
          </b-col>
          <b-col md="12">
            <h5>
              <b>Fit</b>
            </h5>
            <p>{{ production.fit.nameFit }}</p>
          </b-col>
          <b-col md="12">
            <h5>
              <b>Categoria</b>
            </h5>
            <p>{{ production.subcategory.nameCategory }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <modal-add-data-sheet
      v-if="showModalAddDataSheet"
      @onClose="closeModalAddDataSheet"
    />
  </b-card>
</template>

<script>
// Components
import ModalAddDataSheet from "../../../components/ModalAddDataSheet.vue";

export default {
  props: {
    production: {
      type: Object,
      required: true,
    },
  },
  components: {
    ModalAddDataSheet,
  },
  data() {
    return {
      showModalAddDataSheet: false,
    };
  },
  methods: {
    openModalAddDataSheet() {
      this.showModalAddDataSheet = true;
    },
    closeModalAddDataSheet(saved) {
      this.showModalAddDataSheet = false;
    },
    async getDataSheets() {
      try {
        this.addPreloader();

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
  },
  async created() {
    await this.getDataSheets();
  },
};
</script>

<style>
</style>