<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Registrar sub categoria"
    title-tag="h3"
    size="lg"
    @hide="close"
    hide-footer
  >
    <b-container>
      <ValidationObserver ref="form">
        <b-row class="mt-1">
          <b-col cols="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Seleccione la categoria"
                :state="errors.length > 0 ? false : null"
              >
                <v-select
                  v-model="form.idCategory"
                  :options="categories"
                  :reduce="(el) => el.value"
                  :state="errors.length > 0 ? false : null"
                ></v-select>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col cols="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="¿Cual es el nombre?"
                :state="errors.length > 0 ? false : null"
              >
                <b-input-group>
                  <b-form-input
                    v-model="form.nameCategory"
                    :state="errors.length > 0 ? false : null"
                  />
                </b-input-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
      </ValidationObserver>
    </b-container>

    <b-container class="mt-1 text-center">
      <b-button variant="outline-secondary" class="mr-1" @click="close(false)">
        Cancelar
      </b-button>
      <b-button submit variant="primary" @click="saveSubcategorie">
        <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
        Guardar
      </b-button>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vSelect from "vue-select";
import { required } from "@validations";

export default {
  props: {},
  components: {
    vSelect,
  },
  data() {
    return {
      required,

      show: false,

      form: {
        nameCategory: "",
        idCategory: "",
        created_at: new Date().toString(),
        created_by: "",
      },

      categories: [],
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

        this.form.created_by = this.currentUser.idUsuario;

        const response = await this.A_GET_CATEGORIES({
          page: 0,
          size: 100,
        });

        if (response.status == 200) {
          response.data.map((item) => {
            this.categories.push({
              label: item.nameCategory,
              value: item.idCategory,
            });
          });
        }

        this.removePreloader();
      } catch (error) {
        throw error;
      }
    },
    async saveSubcategorie() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          const confirm = await this.showGenericConfirmSwal({
            text: "Se guardará la sub categoria",
          });

          if (confirm.value) {
            this.addPreloader();

            this.form.created_by = this.currentUser.idUsuario;

            const response = await this.A_REGISTER_SUBCATEGORY(this.form);

            if (response.status == 201) {
              this.showGenericToast({ type: "register" });
              this.close(true);
            }

            this.removePreloader();
          }
        }
      } catch (error) {
        throw error;
      }
    },
    close(saved = false) {
      this.$emit("onClose", saved);
    },
  },
  async created() {
    await this.getCategories();
    this.show = true;
  },
};
</script>

<style>
</style>