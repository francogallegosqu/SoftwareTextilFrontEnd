<template>
  <b-card-group columns>
    <b-card
      class="shadow"
      v-for="(item, index) of fabrics.data"
      :key="index"
      :title="item.nameFabric"
    >
      <b-card-text>
        {{ item.descriptionFabric }}

        <br />
        <br />
        <small>
          {{ item.composition }}
        </small>

        <h1 class="mt-2">{{ item.priceFabric | formatPen }}</h1>
        <small>
          {{ $moment(item.created_at).format("L LTS") }}
        </small>

        <div style="white-space: nowrap" class="mt-1">
          <b-button
            class="btn-icon"
            size="sm"
            variant="flat-primary"
            @click="viewDetails(item.idFabric)"
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
            @click="update(item.idFabric)"
          >
            <feather-icon
              icon="EditIcon"
              v-b-tooltip.hover.bottom="'Actualizar tela'"
            ></feather-icon>
          </b-button>

          <b-button
            class="btn-icon"
            size="sm"
            variant="flat-danger"
            @click="remove(item.idFabric)"
          >
            <feather-icon
              icon="TrashIcon"
              v-b-tooltip.hover.bottom="'Eliminar tela'"
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
    fabrics: {
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