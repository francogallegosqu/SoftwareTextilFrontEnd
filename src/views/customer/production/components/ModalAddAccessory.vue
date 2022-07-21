<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Agregar Avío"
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
          class="float-right my-1"
          block
          @click="openModalSelectAccessories"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Seleccionar Avío
        </b-button>
      </b-col>
    </b-row>

    <b-row class="mt-1">
      <b-col cols="8">
        <b-form-group label="Avío">
          <b-form-input readonly></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="4">
        <b-form-group label="Precio">
          <b-form-input type="number" readonly></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group label="Unidad">
          <b-form-input></b-form-input>
        </b-form-group>
      </b-col>

      <b-col cols="6">
        <b-form-group label="Cantidad">
          <b-form-input type="number"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group label="Precio total">
          <b-form-input type="number" readonly></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-container class="mt-2 text-center">
      <b-button variant="secondary" class="mr-1" @click="close(false)">
        Cerrar
      </b-button>
      <b-button submit variant="primary" @click="addProductionFabric">
        <feather-icon icon="SaveIcon"></feather-icon>
        Guardar
      </b-button>
    </b-container>

    <modal-select-accessories
      v-if="showModalSelectAccessories"
      @onSelectItem="selectFabric"
      @onClose="closeModalSelectAccessories"
    />
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Ripple from "vue-ripple-directive";

// Components
import ModalSelectAccessories from "./ModalSelectAccessories.vue";

export default {
  components: {
    ModalSelectAccessories,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      show: false,

      form: {
        nameAccessory: "",
        unitPriceAccessory: "",
        unit: "",
        quantityAccesory: "",
        priceAccesory: "",
        created_at: new Date().toString(),
        created_by: "",
        idProduction: "",
        idAccessory: "",
      },

      // Modals
      showModalSelectAccessories: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
    productionId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_REGISTER_PRODUCTION_ACCESSORY:
        "custProduction/A_REGISTER_PRODUCTION_ACCESSORY",
    }),
    openModalSelectAccessories() {
      this.showModalSelectAccessories = true;
    },
    closeModalSelectAccessories() {
      this.showModalSelectAccessories = false;
    },
    selectFabric(item) {
      this.form.idAccessory = item.idAccessory;
      this.form.nameAccessory = item.nameAccessory;
      this.form.unitPriceAccessory = item.priceAccesory;
    },
    async addProductionFabric() {
      try {
        if (this.form.idFabric == "") {
          return this.showErrorToast({
            text: "Debes seleccionar un avío",
          });
        }

        const validate = await this.$refs.form.validate();

        if (validate) {
          const confirm = await this.showGenericConfirmSwal({});

          if (confirm.value) {
            this.addPreloader();

            this.form.idProduction = this.productionId;

            const response = await this.A_REGISTER_PRODUCTION_ACCESSORY({});

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