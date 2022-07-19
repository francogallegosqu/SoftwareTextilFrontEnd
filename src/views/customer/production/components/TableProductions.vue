<template>
  <b-table
    responsive
    hover
    small
    show-empty
    class="text-center"
    empty-text="No hay datos para mostrar"
    :fields="table.fields"
    :items="productions.data"
  >
    <!-- Column: Actions -->
    <template #cell(actions)="data">
      <div style="white-space: nowrap">
        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-primary"
          @click="viewDetails(data.item.idProduction)"
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
          @click="update(data.item.idProduction)"
        >
          <feather-icon
            icon="EditIcon"
            v-b-tooltip.hover.bottom="'Actualizar producción'"
          ></feather-icon>
        </b-button>

        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-danger"
          @click="remove(data.item.idProduction)"
        >
          <feather-icon
            icon="TrashIcon"
            v-b-tooltip.hover.bottom="'Eliminar producción'"
          ></feather-icon>
        </b-button>
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  props: {
    table: {
      type: Object,
      required: true,
    },
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
    delete(id) {
      this.$emit("onDelete", id);
    },
  },
};
</script>

<style>
</style>