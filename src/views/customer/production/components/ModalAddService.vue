<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Agregar Servicio"
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
          @click="openModalSelectServices"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Seleccionar Servicio
        </b-button>
      </b-col>
    </b-row>

    <ValidationObserver ref="form">
      <b-row class="mt-1">
        <b-col cols="8">
          <ValidationProvider rules="required" #default="{ errors }">
            <b-form-group
              label="Servicio"
              :state="errors.length > 0 ? false : null"
            >
              <b-form-input
                readonly
                :value="form.nameService"
                :state="errors.length > 0 ? false : null"
              ></b-form-input>
              <small v-if="errors[0]" class="text-danger">
                Debes seleccionar un servicio
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
                :value="form.unitPriceService"
              />
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
                v-model="form.unit"
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
                v-model="form.quantityService"
                type="number"
                :disabled="form.nameService == ''"
                :state="errors.length > 0 ? false : null"
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
                v-model="form.priceService"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
    </ValidationObserver>

    <b-container class="mt-2 text-center">
      <b-button variant="secondary" class="mr-1" @click="close(false)">
        Cerrar
      </b-button>
      <b-button submit variant="primary" @click="addProductionService">
        <feather-icon icon="SaveIcon"></feather-icon>
        Guardar
      </b-button>
    </b-container>

    <modal-select-services
      v-if="showModalSelectServices"
      @onSelectItem="selectService"
      @onClose="closeModalSelectFabrics"
    />
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Ripple from "vue-ripple-directive";

// Components
import ModalSelectServices from "./ModalSelectServices.vue";

export default {
  props: {},
  components: {
    ModalSelectServices,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      show: false,

      form: {
        nameService: "",
        unitPriceService: "",
        priceService: "",
        quantityService: "",
        unit: "",
        idProduction: "",
        idService: "",
        created_at: new Date().toString(),
        created_by: "",
      },

      // Modals
      showModalSelectServices: false,
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
  watch: {
    "form.quantityService"(newVal) {
      if (this.form.quantityService != "") {
        this.form.priceService = newVal * this.form.unitPriceService;
      }
    },
  },
  methods: {
    ...mapActions({
      A_REGISTER_PRODUCTION_SERVICE:
        "custProduction/A_REGISTER_PRODUCTION_SERVICE",
    }),
    openModalSelectServices() {
      this.showModalSelectServices = true;
    },
    closeModalSelectFabrics() {
      this.showModalSelectServices = false;
    },
    selectService(item) {
      this.form.idService = item.idService;
      this.form.nameService = item.nameService;
      this.form.unitPriceService = item.priceService;
    },
    async addProductionService() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          const confirm = await this.showGenericConfirmSwal({});

          if (confirm.value) {
            this.addPreloader();

            this.form.idProduction = this.productionId;
            this.form.created_by = this.currentUser.idUsuario;

            const response = await this.A_REGISTER_PRODUCTION_SERVICE(
              this.form
            );

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