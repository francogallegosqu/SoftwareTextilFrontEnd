<template>
  <b-card-group columns>
    <b-card
      class="shadow"
      v-for="(item, index) of fits.data"
      :key="index"
      :title="item.nameFit"
    >
      <b-card-text>
        <p>{{ item.descriptionFit }}</p>
        <small>
          {{ $moment(item.created_at).format("L LTS") }}
        </small>

        <div style="white-space: nowrap" class="mt-1">
          <b-button
            class="btn-icon"
            size="sm"
            variant="flat-warning"
            @click="update(item.idFit)"
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
            @click="remove(item.idFit)"
          >
            <feather-icon
              icon="TrashIcon"
              v-b-tooltip.hover.bottom="'Eliminar producción'"
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
    fits: {
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

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 0 6px rgb(221, 221, 221) !important;
}
</style>