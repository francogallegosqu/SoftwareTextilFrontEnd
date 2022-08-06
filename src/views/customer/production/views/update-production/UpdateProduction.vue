<template>
  <div>
    <header-slot></header-slot>

    <b-card>
      <b-container>
        <h3 class="mt-1"><b> Cuéntanos acerca de tu producción</b></h3>

        <b-row class="mt-2">
          <b-col cols="12">
            <b-form-group label="Ponle un titulo">
              <b-form-input v-model="form.nameProduction"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="Ingresa la cantidad">
              <b-form-input
                type="number"
                v-model="form.quantityProduction"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="Costo total">
              <b-input-group prepend="S./">
                <b-form-input
                  type="number"
                  v-model="form.totalCostProduction"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>

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
      </b-container>

      <b-container class="mt-1 text-right">
        <b-button
          variant="secondary"
          class="mr-1"
          :to="{ name: 'app-provider-my-posts-accessories' }"
        >
          Cancelar
        </b-button>
        <b-button submit variant="primary" @click="registerProduction">
          <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
          Grabar
        </b-button>
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
    productionId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_ALL_SUB_CATEGORIES: "category/A_GET_ALL_SUB_CATEGORIES",
      A_GET_FITS: "fit/A_GET_FITS",
      A_UPDATE_PRODUCTION: "custProduction/A_UPDATE_PRODUCTION",
      A_GET_PRODUCTION_BY_ID: "custProduction/A_GET_PRODUCTION_BY_ID",
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
    async getProduction() {
      try {
        this.addPreloader();

        const response = await this.A_GET_PRODUCTION_BY_ID(this.productionId);

        if (response.status == 200) {
          this.form = response.data;
          this.form.totalCostProduction = response.data.totalCostProduction;
          this.form.idFit = response.data.fit.idFit;
          this.form.idSubCategory = response.data.subcategory.idSubCategory;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    async registerProduction() {
      try {
        this.addPreloader();

        this.form.updated_by = this.currentUser.idUsuario;
        this.form.idUsuario = this.currentUser.idUsuario;

        const response = await this.A_UPDATE_PRODUCTION({
          id: this.productionId,
          body: this.form,
        });

        if (response.status == 200) {
          this.showGenericToast({ type: "update" });

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
    await Promise.all([
      this.getProduction(),
      this.getAllSubCategories(),
      this.getFits(),
    ]);
  },
};
</script>

<style lang="scss">
</style>