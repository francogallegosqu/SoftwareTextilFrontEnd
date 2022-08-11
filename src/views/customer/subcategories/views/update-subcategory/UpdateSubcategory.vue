<template>
  <div>
    <header-slot></header-slot>

    <b-card>
      <ValidationObserver ref="form">
        <b-row>
          <b-col cols="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Selecciona una categoria"
                :state="errors.length > 0 ? false : null"
              >
                <v-select
                  v-model="form.idCategory"
                  :options="categories"
                  :reduce="(el) => el.value"
                ></v-select>
                <small v-if="errors[0]" class="text-danger">
                  El campo es requerido
                </small>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col cols="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Nombre"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  v-model="form.nameCategory"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
                <small v-if="errors[0]" class="text-danger">
                  El campo es requerido
                </small>
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
      </ValidationObserver>

      <b-container class="mt-2 text-center">
        <b-button variant="secondary" class="mr-1" @click="returnPage">
          Cancelar
        </b-button>
        <b-button submit variant="primary" @click="updateSubcategory">
          <feather-icon icon="SaveIcon"></feather-icon>
          Grabar
        </b-button>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required } from "@validations";

export default {
  data() {
    return {
      required,

      categories: [],

      form: {
        nameCategory: "",
        idCategory: "",
        updated_at: new Date().toString(),
        created_by: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
    subcategoryId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_CATEGORIES: "sharedCategory/A_GET_CATEGORIES",
      A_GET_SUBCATEGORY: "sharedSubcategory/A_GET_SUBCATEGORY",
      A_UPDATE_SUBCATEGORY: "sharedSubcategory/A_UPDATE_SUBCATEGORY",
    }),
    async getCategories() {
      try {
        this.addPreloader();

        const response = await this.A_GET_CATEGORIES({
          page: 0,
          size: 100,
        });

        if (response.status == 200) {
          response.data.map((item) => {
            this.categories.push({
              value: item.idCategory,
              label: item.nameCategory,
            });
          });
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    async getSubcategory() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SUBCATEGORY(this.subcategoryId);

        if (response.status == 200) {
          this.form = response.data;
          this.form.idCategory = response.data.category.idCategory;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    async updateSubcategory() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          this.form.created_by = this.currentUser.idUsuario;

          const response = await this.A_UPDATE_SUBCATEGORY({
            id: this.subcategoryId,
            body: this.form,
          });

          if (response.status == 200) {
            this.showGenericToast({ type: "update" });
            this.returnPage();
          }

          this.removePreloader();
        }
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    returnPage() {
      this.$router.push({
        name: "app-customer-subcategories",
      });
    },
  },
  async created() {
    await Promise.all([this.getSubcategory(), this.getCategories()]);
  },
};
</script>

<style>
</style>