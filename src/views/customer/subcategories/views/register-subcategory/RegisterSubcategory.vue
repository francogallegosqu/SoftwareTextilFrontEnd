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
        <b-button submit variant="primary" @click="registerCategory">
          <feather-icon icon="SaveIcon"></feather-icon>
          Guardar
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
        created_at: new Date().toString(),
        created_by: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_CATEGORIES: "sharedCategory/A_GET_CATEGORIES",
      A_REGISTER_SUBCATEGORY: "sharedSubcategory/A_REGISTER_SUBCATEGORY",
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
    async registerCategory() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          this.form.created_by = this.currentUser.idUsuario;

          const response = await this.A_REGISTER_SUBCATEGORY(this.form);

          if (response.status == 201) {
            this.showGenericToast({ type: "register" });
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
    await this.getCategories();
  },
};
</script>

<style>
</style>