<template>
  <b-card-group columns>
    <b-card
      class="shadow"
      v-for="(item, index) of productions.data"
      :key="index"
      :title="item.nameProduction"
    >
      <b-card-text>
        <h3><b>Cantidad: </b>{{ item.quantityProduction }}</h3>

        <h1 class="mt-2">
          <b>Costo total: </b>{{ item.priceAccesory | formatPen }}
        </h1>
        <small>
          {{ $moment(item.created_at).format("L LTS") }}
        </small>

        <div style="white-space: nowrap" class="mt-1">
          <b-button
            class="btn-icon"
            size="sm"
            variant="flat-primary"
            @click="viewDetails(item.idProductions)"
          >
            <feather-icon
              icon="EyeIcon"
              v-b-tooltip.hover.bottom="'Ver detalles'"
            ></feather-icon>
          </b-button>

          <b-button
            class="btn-icon"
            size="sm"
            variant="flat-warning"
            @click="update(item.idProductions)"
          >
            <feather-icon
              icon="EditIcon"
              v-b-tooltip.hover.bottom="'Actualizar avio'"
            ></feather-icon>
          </b-button>

          <b-button
            class="btn-icon"
            size="sm"
            variant="flat-danger"
            @click="remove(item.idProductions)"
          >
            <feather-icon
              icon="TrashIcon"
              v-b-tooltip.hover.bottom="'Eliminar avio'"
            ></feather-icon>
          </b-button>
        </div>
      </b-card-text>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  props: {
    productions: {
      type: Object,
      required: true,
    },
  },
  methods: {
    viewDetails(id) {
      this.$emit("onViewDetails", id);
    },
    update(id) {
      this.$emit("onUpdate", id);
    },
    remove(id) {
      this.$emit("onDelete", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 0 6px rgb(221, 221, 221) !important;
}
</style>