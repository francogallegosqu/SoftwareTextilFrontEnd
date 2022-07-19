<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title>
        <feather-icon icon="CodepenIcon" size="18" class="mr-50" />
        Telas
      </b-card-title>

      <b-button-group class="btn-group-sm">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="openModalAddFabric"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Agregar tela
        </b-button>
      </b-button-group>
    </template>

    <div>
      <b-table
        class="text-center"
        small
        :fields="[
          { key: 'fabric', label: 'Tela' },
          { key: 'cant', label: 'Cantidad' },
          { key: 'totalCost', label: 'Costo total' },
          { key: 'actions', label: 'Acciones' },
        ]"
      ></b-table>
    </div>

    <modal-add-fabric
      v-if="showModalAddFabric"
      @onClose="closeModalAddFabric"
    />
  </b-card>
</template>

<script>
import Ripple from "vue-ripple-directive";

// Components
import ModalAddFabric from "@/views/customer/production/components/ModalAddFabric.vue";

export default {
  components: {
    ModalAddFabric,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      // Modals
      showModalAddFabric: false,
    };
  },
  methods: {
    openModalAddFabric() {
      this.showModalAddFabric = true;
    },
    closeModalAddFabric() {
      this.showModalAddFabric = false;
    },
  },
};
</script>

<style>
</style>