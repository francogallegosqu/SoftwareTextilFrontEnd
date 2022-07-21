<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Seleccionar Avío"
    title-tag="h3"
    size="lg"
    @hide="close"
    hide-footer
    body-class="px-0"
  >
    <b-table
      small
      class="text-center"
      :fields="[
        { key: 'nameFabric', label: 'Nombre' },
        { key: 'priceFabric', label: 'Precio' },
        { key: 'actions', label: 'Acciones' },
      ]"
      :items="fabrics.data"
    >
      <!-- Cell => Actions -->
      <template #cell(actions)="data">
        <b-button
          variant="outline-primary"
          size="sm"
          @click="selectFabric(data.item)"
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

      fabrics: {
        data: [],
      },
    };
  },
  methods: {
    ...mapActions({
      A_GET_FABRICS: "provMyPostsFabrics/A_GET_FABRICS",
    }),
    async getFabrics() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FABRICS({
          page: 0,
          size: 100,
          sortDir: "asc",
          sort: "nameFabric",
        });

        if (response.status == 200) {
          this.fabrics.data = response.data;
        }
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    selectFabric(fabric) {
      this.$emit("onSelectItem", fabric);
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