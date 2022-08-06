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
          size="sm"
          variant="flat-primary"
          @click="addToProduction(data.item)"
        >
          <feather-icon
            class="mr-50"
            icon="ShareIcon"
            v-b-tooltip.hover.bottom="'Ver detalles'"
          ></feather-icon>
          Añadir a producción
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
    addToProduction(item) {
      this.$emit("onAddToProduction", item);
    },
  },
};
</script>

<style>
</style>