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
        { key: 'nameAccessory', label: 'Nombre' },
        { key: 'priceAccesory', label: 'Precio' },
        { key: 'actions', label: 'Acciones' },
      ]"
      :items="accessories.data"
    >
      <template #cell(priceAccesory)="data">
        <p>{{ data.item.priceAccesory | formatPen }}</p>
      </template>

      <!-- Cell => Actions -->
      <template #cell(actions)="data">
        <b-button
          variant="outline-primary"
          size="sm"
          @click="selectAccesory(data.item)"
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

      accessories: {
        data: [],
      },
    };
  },
  methods: {
    ...mapActions({
      A_GET_ACCESSORIES: "provMyPostsAccessories/A_GET_ACCESSORIES",
    }),
    async getAccessories() {
      try {
        this.addPreloader();

        const response = await this.A_GET_ACCESSORIES({
          page: 0,
          size: 100,
          sortDir: "asc",
          sort: "idAccessory",
        });

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
    selectAccesory(accessory) {
      this.$emit("onSelectItem", accessory);
      this.close(true);
    },
    close(saved = false) {
      this.$emit("onClose", saved);
    },
  },
  async created() {
    this.show = true;
    await this.getAccessories();
  },
};
</script>

<style>
</style>