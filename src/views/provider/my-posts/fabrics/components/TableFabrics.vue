<template>
  <b-table
    responsive
    hover
    small
    show-empty
    class="text-center"
    empty-text="No hay datos para mostrar"
    :fields="table.fields"
    :items="fabrics.data"
  >
    <!-- Column: Price -->
    <template #cell(priceFabric)="data">
      <span style="white-space: nowrap">
        {{ data.item.priceFabric | formatPen }}
      </span>
    </template>

    <!-- Column: Actions -->
    <template #cell(actions)="data">
      <div style="white-space: nowrap">
        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-primary"
          @click="viewDetails(data.item.idFabric)"
        >
          <feather-icon
            icon="EyeIcon"
            v-b-tooltip.hover.bottom="'Ver detalles'"
            :to="{
              name: 'app-my-posts-tackle-details',
              params: { id: data.item.idFabric },
            }"
          ></feather-icon>
        </b-button>

        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-warning"
          @click="update(data.item.idFabric)"
        >
          <feather-icon
            icon="EditIcon"
            v-b-tooltip.hover.bottom="'Ver detalles'"
          ></feather-icon>
        </b-button>

        <b-button
          class="btn-icon"
          size="sm"
          variant="flat-danger"
          @click="remove(data.item.idFabric)"
        >
          <feather-icon
            icon="TrashIcon"
            v-b-tooltip.hover.bottom="'Ver detalles'"
          ></feather-icon>
        </b-button>
      </div>
    </template>

    <template #cell(created_at)="data">
      <small style="white-space: nowrap">
        {{ $moment(data.item.created_at).format("L LTS") }}
      </small>
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

<style>
</style>