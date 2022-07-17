<template>
    <div class="d-flex justify-content-center">
        <b-button class="button-action-depart mr-1" v-ripple.400="'rgba(30, 30, 30, 0.15)'" v-b-tooltip.hover.v-warning
            title="Actualizar" variant="outline-warning">
            <slot name="update" />
        </b-button>
        <b-button class="button-action-depart" v-ripple.400="'rgba(234, 84, 85, 0.15)'" v-b-tooltip.hover.v-danger
            title="Eliminar" variant="outline-danger">
            <slot name="delete" />
        </b-button>

    </div>
</template>

<script>
import { VBTooltip } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
    props: {

    },
    directives: {
        'b-tooltip': VBTooltip,
        Ripple,
    },
}
</script>

<style scoped >
.button-action-depart {
    padding: 4px;
}
</style>