<template>
  <b-table
    responsive
    hover
    small
    show-empty
    class="text-center"
    empty-text="No hay datos para mostrar"
    :fields="table.fields"
    :items="subcategories.data"
  >
    <!-- Column: Price -->
    <template #cell(category)="data">
      <span style="white-space: nowrap">
        {{ data.item.category.nameCategory }}
      </span>
    </template>

    <template #cell(created_at)="data">
      <small class="text-nowrap">
        {{ $moment(data.item.created_at).format("L LTS") }}
      </small>
    </template>

    <!-- Column: Actions -->
    <template #cell(actions)="data">
      <div style="white-space: nowrap">
        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-warning"
          @click="update(data.item.idSubCategory)"
        >
          <feather-icon
            icon="EditIcon"
            v-b-tooltip.hover.bottom="'Actualizar Categoria'"
          ></feather-icon>
        </b-button>

        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-danger"
          @click="remove(data.item.idSubCategory)"
        >
          <feather-icon
            icon="TrashIcon"
            v-b-tooltip.hover.bottom="'Eliminar Categoria'"
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
    subcategories: {
      type: Object,
      required: true,
    },
  },
  methods: {
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