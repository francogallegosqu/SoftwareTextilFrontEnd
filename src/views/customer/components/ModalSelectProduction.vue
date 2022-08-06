<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Seleccionar producción"
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
        { key: 'nameProduction', label: 'Nombre' },
        { key: 'quantityProduction', label: 'Cantidad' },
        { key: 'totalCostProduction', label: 'Precio total' },
        { key: 'actions', label: 'Acciones' },
      ]"
      :items="productions.data"
    >
      <template #cell(totalCostProduction)="data">
        <span>{{ data.item.totalCostProduction | formatPen }}</span>
      </template>

      <!-- Cell => Actions -->
      <template #cell(actions)="data">
        <b-button
          variant="outline-primary"
          size="sm"
          @click="selectProduction(data.item)"
        >
          Seleccionar
        </b-button>
      </template>
    </b-table>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {},
  data() {
    return {
      show: false,

      productions: {
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
      A_GET_PRODUCTIONS_BY_USER: "custProduction/A_GET_PRODUCTIONS_BY_USER",
    }),
    async getProductions() {
      try {
        this.addPreloader();

        const response = await this.A_GET_PRODUCTIONS_BY_USER(
          this.currentUser.idUsuario
        );

        if (response.status == 200) {
          this.productions.data = response.data;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    selectProduction(item) {
      localStorage.setItem(
        "customerProvidersProductionSelected",
        JSON.stringify(item)
      );
      this.close(true);
    },
    close(saved = false) {
      this.$emit("onClose", saved);
    },
  },
  async created() {
    this.show = true;
    await this.getProductions();
  },
};
</script>

<style>
</style>