<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Empieza tu producción"
    title-tag="h3"
    size="lg"
    @hide="close"
    hide-footer
  >
    <b-container>
      <b-row class="mt-1">
        <b-col cols="12">
          <b-form-group label="Nombre">
            <b-form-input v-model="form.nameProduction"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Cantidad">
            <b-form-input
              type="number"
              v-model="form.quantityProduction"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Costo">
            <b-form-input
              type="number"
              v-model="form.totalCostProduction"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Unidad">
            <v-select
              v-model="form.idFit"
              :options="fits"
              :reduce="(el) => el.value"
            ></v-select>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Categoria">
            <v-select
              v-model="form.idSubCategory"
              :options="subcategories"
              :reduce="(el) => el.value"
            ></v-select>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-1 text-center">
      <b-button variant="outline-secondary" class="mr-1" @click="close(false)">
        Cancelar
      </b-button>
      <b-button submit variant="primary" @click="saveProduction">
        <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
        Guardar
      </b-button>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Components
import vSelect from "vue-select";

export default {
  props: {},
  components: {
    vSelect,
  },
  data() {
    return {
      show: false,

      form: {
        nameProduction: "",
        hasPrint: true,
        quantityProduction: "",
        totalCostProduction: "",
        created_at: new Date().toString(),
        created_by: "",
        idFit: "",
        idSubCategory: "",
        idUsuario: "",
      },

      fits: [],
      subcategories: [],
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_ALL_SUB_CATEGORIES: "category/A_GET_ALL_SUB_CATEGORIES",
      A_GET_FITS: "fit/A_GET_FITS",
      A_REGISTER_PRODUCTION: "production/A_REGISTER_PRODUCTION",
    }),
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
        this.removePreloader();

        throw error;
      }
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
        this.removePreloader();

        throw error;
      }
    },
    async saveProduction() {
      try {
        this.addPreloader();

        this.form.created_by = this.currentUser.idUsuario;
        this.form.idUsuario = this.currentUser.idUsuario;

        const response = await this.A_REGISTER_PRODUCTION(this.form);

        if (response.status == 201) {
          this.showGenericToast({ type: "register" });

          this.close(true);
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    close(saved = false) {
      this.$emit("onClose", saved);
    },
  },
  async created() {
    this.addPreloader();

    await Promise.all([this.getFits(), this.getAllSubCategories()]);

    this.removePreloader();

    this.show = true;
  },
};
</script>

<style>
</style>