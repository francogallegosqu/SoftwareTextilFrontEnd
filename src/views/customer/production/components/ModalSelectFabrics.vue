<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Seleccionar Tela"
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
      A_GET_FABRICS_PAGINATE: "provMyPostsFabrics/A_GET_FABRICS_PAGINATE",
    }),
    async getFabrics() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FABRICS_PAGINATE({
          params: {
            pageNo: 0,
            pageSize: 100,
            sortDir: "asc",
            sortField: "idFabric",
          },
          page: 1,
        });

        if (response.status == 200) {
          console.log(response.data["com.anderson.textil.model.Fabric@4624d882"].content);
          this.fabrics.data =
            response.data["com.anderson.textil.model.Fabric@4624d882"].content;
        }

        this.removePreloader();
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