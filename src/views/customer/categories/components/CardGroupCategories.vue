<template>
  <b-card-group columns>
    <b-card
      v-for="(item, index) of categories.data"
      :key="index"
      class="shadow"
      :title="item.nameCategory"
    >
      <b-card-text>
        <small>
          {{ $moment(item.created_at).format("L LTS") }}
        </small>

        <div
          style="white-space: nowrap"
          class="mt-1"
        >
          <b-button
            class="btn-icon"
            size="sm"
            variant="flat-warning"
            @click="update(item.idCategory)"
          >
            <feather-icon
              v-b-tooltip.hover.bottom="'Actualizar Categoria'"
              icon="EditIcon"
            />
          </b-button>

          <b-button
            class="btn-icon"
            size="sm"
            variant="flat-danger"
            @click="remove(item.idCategory)"
          >
            <feather-icon
              v-b-tooltip.hover.bottom="'Eliminar Categoria'"
              icon="TrashIcon"
            />
          </b-button>
        </div>
      </b-card-text>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      required: true,
    },
  },
  methods: {
    update(id) {
      this.$emit('onUpdate', id)
    },
    remove(id) {
      this.$emit('onDelete', id)
    },
  },
}
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 0 6px rgb(221, 221, 221) !important;
}
</style>
