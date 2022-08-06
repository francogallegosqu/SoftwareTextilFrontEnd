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
          v-if="fabricSelected == null"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
          class="float-right my-1"
          block
          @click="openModalSelectFabrics"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Seleccionar Tela
        </b-button>
      </b-col>
    </b-row>

    <ValidationObserver ref="form">
      <b-row class="mt-1">
        <b-col cols="8">
          <ValidationProvider rules="required" #default="{ errors }">
            <b-form-group
              label="Tela"
              :state="errors.length > 0 ? false : null"
            >
              <b-form-input
                readonly
                :value="form.nameFabric"
                :state="errors.length > 0 ? false : null"
              ></b-form-input>
              <small v-if="errors[0]" class="text-danger">
                Debes seleccionar una tela
              </small>
            </b-form-group>
          </ValidationProvider>
        </b-col>
        <b-col cols="4">
          <b-form-group label="Precio">
            <b-input-group prepend="S./">
              <b-form-input
                type="number"
                readonly
                :value="form.unitPriceFabric"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <ValidationProvider rules="required" #default="{ errors }">
            <b-form-group
              label="Unidad"
              :state="errors.length > 0 ? false : null"
            >
              <b-form-input
                v-model="form.unitFabric"
                :state="errors.length > 0 ? false : null"
              ></b-form-input>
              <small v-if="errors[0]" class="text-danger">
                Debes ingresar la unidad
              </small>
            </b-form-group>
          </ValidationProvider>
        </b-col>

        <b-col cols="6">
          <ValidationProvider rules="required" #default="{ errors }">
            <b-form-group
              label="Cantidad"
              :state="errors.length > 0 ? false : null"
            >
              <b-form-input
                v-model="form.quantityFabric"
                :disabled="form.nameFabric == ''"
                :state="errors.length > 0 ? false : null"
                type="number"
              ></b-form-input>
              <small v-if="errors[0]" class="text-danger">
                Debes ingresar la cantidad
              </small>
            </b-form-group>
          </ValidationProvider>
        </b-col>
        <b-col cols="6">
          <b-form-group label="Precio total">
            <b-input-group prepend="S./">
              <b-form-input
                type="number"
                readonly
                v-model="form.priceFabric"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
    </ValidationObserver>

    <b-container class="mt-2 text-center">
      <b-button variant="secondary" class="mr-1" @click="close(false)">
        Cerrar
      </b-button>
      <b-button submit variant="primary" @click="addProductionFabric">
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
import { mapActions, mapGetters } from "vuex";
import Ripple from "vue-ripple-directive";

// Components
import ModalSelectFabrics from "./ModalSelectFabrics.vue";

export default {
  props: {
    idProduction: {
      type: Number,
      default: null,
    },
    fabricSelected: {
      type: Object,
      default: null,
    },
  },
  components: {
    ModalSelectFabrics,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      show: false,

      form: {
        nameFabric: "",
        unitPriceFabric: "",
        unitFabric: "",
        quantityFabric: "",
        priceFabric: "",
        created_at: new Date().toString(),
        created_by: "",
        idProduction: "",
        idFabric: "",
      },

      // Modals
      showModalSelectFabrics: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
    productionId() {
      return this.idProduction == null
        ? this.$route.params.id
        : this.idProduction;
    },
  },
  watch: {
    "form.quantityFabric"(newVal) {
      if (this.form.quantityFabric != "") {
        this.form.priceFabric = newVal * this.form.unitPriceFabric;
      }
    },
  },
  methods: {
    ...mapActions({
      A_REGISTER_PRODUCTION_FABRIC:
        "custProduction/A_REGISTER_PRODUCTION_FABRIC",
    }),
    openModalSelectFabrics() {
      this.showModalSelectFabrics = true;
    },
    closeModalSelectFabrics() {
      this.showModalSelectFabrics = false;
    },
    selectFabric(item) {
      this.form.idFabric = item.idFabric;
      this.form.nameFabric = item.nameFabric;
      this.form.unitPriceFabric = item.priceFabric;
    },
    async addProductionFabric() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          const confirm = await this.showGenericConfirmSwal({});

          if (confirm.value) {
            this.addPreloader();

            this.form.idProduction = this.productionId;
            this.form.created_by = this.currentUser.idUsuario;

            const response = await this.A_REGISTER_PRODUCTION_FABRIC(this.form);

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

    if (this.fabricSelected != null) {
      this.selectFabric(this.fabricSelected);
    }
  },
};
</script>

<style>
</style>