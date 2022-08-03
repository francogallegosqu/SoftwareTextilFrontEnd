<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title>
        <feather-icon icon="FileIcon" size="18" class="mr-50" />
        Documentos
      </b-card-title>

      <b-button-group class="btn-group-sm">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          @click="openModalAddDatasheet"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Agregar documento
        </b-button>
      </b-button-group>
    </template>

    <modal-add-datasheet
      v-if="showModalAddDatasheet"
      @onClose="closeModalAddDatasheet"
    />
  </b-card>
</template>

<script>
import Ripple from "vue-ripple-directive";

// Documents
import ModalAddDatasheet from "../../../components/ModalAddDataSheet.vue";

export default {
  components: {
    ModalAddDatasheet,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      // Modals
      showModalAddDatasheet: false,
    };
  },
  methods: {
    openModalAddDatasheet() {
      this.showModalAddDatasheet = true;
    },
    closeModalAddDatasheet() {
      this.showModalAddDatasheet = false;
    },
  },
};
</script>

<style>
</style>