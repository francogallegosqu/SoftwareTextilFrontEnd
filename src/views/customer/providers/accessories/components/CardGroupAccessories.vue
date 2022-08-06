<template>
  <b-card-group columns>
    <b-card
      class="shadow"
      v-for="(item, index) of accessories.data"
      :key="index"
      :title="item.nameAccessory"
    >
      <b-card-text>
        {{ item.descriptionAccessory }}

        <h1 class="mt-2">{{ item.priceAccesory | formatPen }}</h1>

        <div style="white-space: nowrap" class="mt-1">
          <b-button
            size="sm"
            variant="flat-primary"
            @click="addToProduction(item)"
          >
            <feather-icon
              class="mr-50"
              icon="ShareIcon"
              v-b-tooltip.hover.bottom="'Ver detalles'"
            ></feather-icon>
            Añadir a producción
          </b-button>
        </div>
      </b-card-text>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  props: {
    accessories: {
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

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 0 6px rgb(221, 221, 221) !important;
}
</style>