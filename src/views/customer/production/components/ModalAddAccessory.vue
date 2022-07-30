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

    <ValidationObserver ref="form">
      <b-row class="mt-1">
        <b-col cols="8">
          <ValidationProvider rules="required" #default="{ errors }">
            <b-form-group
              label="Avío"
              :state="errors.length > 0 ? false : null"
            >
              <b-form-input
                readonly
                :value="form.nameAccessory"
                :state="errors.length > 0 ? false : null"
              ></b-form-input>
              <small v-if="errors[0]" class="text-danger">
                Debes seleccionar un avio
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
                :value="form.unitPriceAccessory"
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
                v-model="form.quantityAccesory"
                type="number"
                :disabled="form.nameAccessory == ''"
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
                :value="form.priceAccesory"
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
      <b-button submit variant="primary" @click="addProductionFabric">
        <feather-icon icon="SaveIcon"></feather-icon>
        Guardar
      </b-button>
    </b-container>

    <modal-select-accessories
      v-if="showModalSelectAccessories"
      @onSelectItem="selectAccessory"
      @onClose="closeModalSelectAccessories"
    />
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Ripple from "vue-ripple-directive";

// Components
import ModalSelectAccessories from "./ModalSelectAccessories.vue";
import { ValidationProvider } from "vee-validate";

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
  watch: {
    "form.quantityAccesory"(newVal) {
      if (newVal != "") {
        this.form.priceAccesory = newVal * this.form.unitPriceAccessory;
      }
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
    selectAccessory(item) {
      this.form.idAccessory = item.idAccessory;
      this.form.nameAccessory = item.nameAccessory;
      this.form.unitPriceAccessory = item.priceAccesory;
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

            const response = await this.A_REGISTER_PRODUCTION_ACCESSORY(
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