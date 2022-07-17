<template>
  <b-table
    responsive
    hover
    small
    show-empty
    class="text-center"
    empty-text="No hay datos para mostrar"
    :fields="table.fields"
    :items="services.data"
  >
    <template #cell(created_at)="data">
      <small style="white-space: nowrap">
        {{ $moment(data.item.created_at).format("L LTS") }}
      </small>
    </template>

    <!-- Column: Actions -->
    <template #cell(actions)="data">
      <div style="white-space: nowrap">
        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-primary"
          @click="viewDetails(data.item.idService)"
        >
          <feather-icon
            icon="EyeIcon"
            v-b-tooltop.hover.bottom="'Ver Detalles'"
          />
        </b-button>

        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-warning"
          @click="update(data.item.idService)"
        >
          <feather-icon
            icon="EditIcon"
            v-b-tooltop.hover.bottom="'Editar servicio'"
          />
        </b-button>

        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-danger"
          @click="remove(data.item.idService)"
        >
          <feather-icon
            icon="TrashIcon"
            v-b-tooltip.hover.bottom="'Eliminar servicio'"
          />
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
    services: {
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

<style>
</style>