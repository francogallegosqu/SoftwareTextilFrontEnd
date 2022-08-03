<template>
  <div class="d-flex justify-content-center">
    <b-button
      v-ripple.400="'rgba(30, 30, 30, 0.15)'"
      v-b-tooltip.hover.v-warning
      class="button-action-depart mr-1"
      title="Actualizar"
      variant="outline-warning"
    >
      <slot name="update" />
    </b-button>
    <b-button
      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
      v-b-tooltip.hover.v-danger
      class="button-action-depart"
      title="Eliminar"
      variant="outline-danger"
    >
      <slot name="delete" />
    </b-button>

  </div>
</template>

<script>
import { VBTooltip } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  props: {

  },
}
</script>

<style scoped >
.button-action-depart {
    padding: 4px;
}
</style>
