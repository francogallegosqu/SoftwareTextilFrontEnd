<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Agregar Tela"
    title-tag="h3"
    size="lg"
    @hide="close(false)"
    hide-footer
  >
    <b-row>
      <b-col cols="12">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          class="float-right"
          @click="openModalSelectFabrics"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Seleccionar Tela
        </b-button>
      </b-col>
    </b-row>

    <b-row class="mt-1">
      <b-col cols="12">
        <b-form-group label="Tela">
          <b-form-input readonly></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Cantidad">
          <b-form-input type="number"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Precio">
          <b-form-input type="number"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Precio total">
          <b-form-input type="number" readonly></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-container class="mt-1 text-center">
      <b-button variant="secondary" class="mr-1" @click="close(false)">
        Cerrar
      </b-button>
      <b-button submit variant="primary" @click="submit">
        <feather-icon icon="SaveIcon"></feather-icon>
        Guardar
      </b-button>
    </b-container>

    <modal-select-fabrics
      v-if="showModalSelectFabrics"
      @onSelectItem="selectFabric"
      @onClose="closeModalSelectFabrics"
    />
  </b-modal>
</template>

<script>
import Ripple from "vue-ripple-directive";

// Components
import ModalSelectFabrics from "./ModalSelectFabrics.vue";

export default {
  props: {},
  components: {
    ModalSelectFabrics,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      show: false,

      // Modals
      showModalSelectFabrics: false,
    };
  },
  methods: {
    openModalSelectFabrics() {
      this.showModalSelectFabrics = true;
    },
    closeModalSelectFabrics() {
      this.showModalSelectFabrics = false;
    },
    selectFabric(item) {},
    async addProductionFabric() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          const confirm = await this.showGenericConfirmSwal({});

          if (confirm.value) {
            this.addPreloader();

            const response = await this.A_REGISTER_PRODUCTION_FABRIC({});

            if (response.status == 201) {
              this.showGenericToast({ type: "register" });
              this.close(true);
            }

            this.removePreloader();
          }
        }
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    close(saved = false) {
      this.$emit("onClose", saved);
    },
  },
  created() {
    this.show = true;
  },
};
</script>

<style>
</style>