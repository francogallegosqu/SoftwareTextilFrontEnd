<template>
  <div>
    <header-slot></header-slot>

    <b-card>
      <b-container>
        <div class="progress-wrapper py-1 text-left">
          <b-card-text class="mb-1 h6">
            Paso {{ step }} de {{ steps }}
          </b-card-text>
          <b-progress v-model="progressBarCovered" max="100" />
        </div>

        <template v-if="step == 1">
          <h3 class="mt-1"><b> Cuéntanos acerca de tu producción</b></h3>

          <b-row class="mt-2">
            <b-col cols="12">
              <b-form-group label="Ponle un titulo">
                <b-form-input v-model="form.nameProduction"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group label="Ingresa la cantidad">
                <b-form-input
                  type="number"
                  v-model="form.quantityProduction"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group label="Ingresa el costo por unidad">
                <b-input-group prepend="S./">
                  <b-form-input type="number" v-model="form.costUnit" />
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col cols="4">
              <b-form-group label="Costo total">
                <b-input-group prepend="S./">
                  <b-form-input
                    type="number"
                    readonly
                    v-model="form.totalCostProduction"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </template>

        <template v-if="step == 2">
          <h3 class="mt-1"><b> Dale un mejor orden a tu producción </b></h3>

          <b-row class="mt-2">
            <b-col cols="12">
              <b-form-group label="Elige la categoria que mejor encaje">
                <v-select
                  v-model="form.idSubCategory"
                  :options="subcategories"
                  :reduce="(el) => el.value"
                ></v-select>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group label="Selecciona el fit">
                <v-select
                  v-model="form.idFit"
                  :options="fits"
                  :reduce="(el) => el.value"
                ></v-select>
              </b-form-group>
            </b-col>
          </b-row>
        </template>
      </b-container>

      <b-container class="mt-1 text-right">
        <template v-if="step == 1">
          <b-button
            variant="secondary"
            class="mr-1"
            :to="{ name: 'app-provider-my-posts-accessories' }"
          >
            Cancelar
          </b-button>
          <b-button
            submit
            variant="primary"
            @click="passStep(2)"
            :disabled="disableFirstButton"
          >
            Siguiente
            <feather-icon icon="ArrowRightIcon" class="ml-50"></feather-icon>
          </b-button>
        </template>
        <template v-if="step == 2">
          <b-button variant="secondary" class="mr-1" @click="passStep(1)">
            <feather-icon icon="ArrowLeftIcon" class="mr-50"></feather-icon>
            Anterior
          </b-button>
          <b-button submit variant="primary" @click="saveAccesory">
            <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
            Guardar
          </b-button>
        </template>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required } from "@validations";

import "vue-swatches/dist/vue-swatches.css";

// Components
import vSelect from "vue-select";
import Verte from "verte";

export default {
  props: {
    userCode: {
      type: Number,
    },
  },
  components: {
    vSelect,
    Verte,
  },
  data() {
    return {
      // Validations
      required,

      step: 1,
      steps: 2,

      form: {
        nameProduction: "",
        hasPrint: false,
        quantityProduction: null,
        costUnit: "",
        totalCostProduction: null,
        created_at: new Date().toString(),
        created_by: "",
        idFit: "",
        idSubCategory: "",
        idUsuario: "",
      },

      subcategories: [],
      fits: [],

      colors: "#194D33A8",
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
    progressBarCovered() {
      if (this.step == 1) return 40;
      else if (this.step == 2) return 70;
    },
    disableFirstButton() {
      return (
        this.form.nameProduction == "" ||
        this.form.quantityProduction == null ||
        this.form.totalCostProduction == null
      );
    },
    disableSecondButton() {
      return this.form.idSubcategory == "";
    },
  },
  watch: {
    "form.quantityProduction"(newVal) {
      if (
        this.form.quantityProduction != null &&
        this.form.quantityProduction != "" &&
        this.form.costUnit != ""
      ) {
        this.form.totalCostProduction =
          this.form.quantityProduction * this.form.costUnit;
      }
    },
    "form.costUnit"(newVal) {
      if (
        this.form.quantityProduction != null &&
        this.form.quantityProduction != "" &&
        this.form.costUnit != ""
      ) {
        this.form.totalCostProduction =
          this.form.quantityProduction * this.form.costUnit;
      }
    },
  },
  methods: {
    ...mapActions({
      A_GET_ALL_SUB_CATEGORIES: "category/A_GET_ALL_SUB_CATEGORIES",
      A_GET_FITS: "fit/A_GET_FITS",
      A_REGISTER_PRODUCTION: "custProduction/A_REGISTER_PRODUCTION",
    }),
    passStep(step) {
      this.step = step;
    },
    async getAllSubCategories() {
      try {
        const response = await this.A_GET_ALL_SUB_CATEGORIES({
          page: 0,
          size: 50,
        });

        if (response.status == 200) {
          response.data.map((item) => {
            this.subcategories.push({
              label: item.nameCategory,
              value: item.idSubCategory,
            });
          });
        }
      } catch (error) {
        throw error;
      }
    },
    async getFits() {
      try {
        const response = await this.A_GET_FITS({
          page: 0,
          size: 100,
        });

        if (response.status == 200) {
          response.data.map((item) => {
            this.fits.push({
              label: item.nameFit,
              value: item.idFit,
            });
          });
        }
      } catch (error) {
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    async saveAccesory() {
      try {
        this.addPreloader();

        this.form.created_by = this.currentUser.idUsuario;
        this.form.idUsuario = this.currentUser.idUsuario;

        const response = await this.A_REGISTER_PRODUCTION(this.form);

        if (response.status == 201) {
          this.showGenericToast({ type: "register" });

          this.$router.push({
            name: "app-customer-productions",
          });
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
  },
  async created() {
    await Promise.all([this.getAllSubCategories(), this.getFits()]);
  },
};
</script>

<style lang="scss">
</style>