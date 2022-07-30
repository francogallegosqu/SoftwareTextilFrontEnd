<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Seleccionar Servicio"
    title-tag="h3"
    size="lg"
    @hide="close(false)"
    hide-footer
    body-class="px-0"
  >
    <b-table
      small
      class="text-center"
      :fields="[
        { key: 'nameService', label: 'Nombre' },
        { key: 'priceService', label: 'Precio' },
        { key: 'actions', label: 'Acciones' },
      ]"
      :items="services.data"
    >
      <Template #cell(priceService)="data">
        <p>{{ data.item.priceService | formatPen }}</p>
      </Template>

      <!-- Cell => Actions -->
      <template #cell(actions)="data">
        <b-button
          variant="outline-primary"
          size="sm"
          @click="selectService(data.item)"
        >
          Seleccionar
        </b-button>
      </template>
    </b-table>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {},
  data() {
    return {
      show: false,

      services: {
        data: [],
      },
    };
  },
  methods: {
    ...mapActions({
      A_GET_SERVICES: "provMyPostsServices/A_GET_SERVICES",
    }),
    async getFabrics() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SERVICES({
          page: 0,
          size: 100,
          sortDir: "asc",
          sort: "idService",
        });

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
    selectService(fabric) {
      this.$emit("onSelectItem", fabric);
      this.close(true);
    },
    close(saved = false) {
      this.$emit("onClose", saved);
    },
  },
  async created() {
    this.show = true;
    await this.getFabrics();
  },
};
</script>

<style>
</style>