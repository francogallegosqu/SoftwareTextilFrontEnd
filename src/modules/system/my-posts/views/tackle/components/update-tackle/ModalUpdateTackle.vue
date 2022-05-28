<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Editar avio"
    title-tag="h3"
    size="lg"
    @hide="close"
    hide-footer
  >
    <b-container>
      <h3 class="mt-1"><b> Descripcion del Avio </b></h3>

      <ValidationObserver ref="form">
        <b-row>
          <b-col md="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Ponle un titulo"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  v-model="form.nameAccessory"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col md="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Composición de la tela"
                :state="errors.length > 0 ? false : null"
              >
                <v-select
                  v-model="form.idSubcategory"
                  :options="subcategories"
                  :reduce="(el) => el.value"
                  :state="errors.length > 0 ? false : null"
                ></v-select>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col md="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Describelo a detalle"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-textarea
                  v-model="form.descriptionAccessory"
                  :state="errors.length > 0 ? false : null"
                ></b-form-textarea>
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>

        <h3 class="mt-2"><b> Detalla los datos de tu avio </b></h3>

        <b-row>
          <b-col md="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="¿Cual es el precio?"
                :state="errors.length > 0 ? false : null"
              >
                <b-input-group prepend="S./">
                  <b-form-input
                    v-model="form.priceAccesory"
                    :state="errors.length > 0 ? false : null"
                  />
                </b-input-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col md="12">
            <b-form-group label="Elige el color de tu tela"> </b-form-group>
          </b-col>
          <b-col md="2">
            <ValidationProvider rules="required" #default="{ errors }">
              <input
                v-model="form.colorAccessory"
                type="color"
                class="form-control form-control-color"
                :state="errors.length > 0 ? false : null"
              />
            </ValidationProvider>
          </b-col>
        </b-row>
      </ValidationObserver>
    </b-container>

    <b-container class="mt-1 text-center">
      <b-button submit variant="primary" class="mr-1" @click="updateFabric">
        <feather-icon icon="SaveIcon"></feather-icon>
        Grabar
      </b-button>
      <b-button variant="secondary" @click="close(false)"> Cerrar </b-button>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "@validations";

import vSelect from "vue-select";

export default {
  props: {
    tackleCode: {
      type: String,
    },
  },
  components: {
    vSelect,
  },
  data() {
    return {
      // Validations
      required,

      show: false,

      form: {
        nameAccessory: "",
        priceAccesory: "",
        colorAccessory: "",
        descriptionAccessory: "",
        idSubcategory: "",
        created_by: "",
        created_at: new Date().toString(),
      },

      subcategories: [],
    };
  },
  methods: {
    ...mapActions({
      A_GET_ALL_SUB_CATEGORIES: "category/A_GET_ALL_SUB_CATEGORIES",
      A_GET_ACCESSORY_BY_ID: "myPosts/A_GET_ACCESSORY_BY_ID",
      A_UPDATE_ACCESSORY: "myPosts/A_UPDATE_ACCESSORY",
    }),
    async getAccessory() {
      try {
        this.addPreloader();

        const response = await this.A_GET_ACCESSORY_BY_ID(this.tackleCode);

        console.log(response.data);
        if (response.status == 200) {
          this.form = response.data;
          this.form.idSubcategory = response.data.subcategory.idSubCategory;
        }
        this.removePreloader();
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
        throw error;
      }
    },
    async updateFabric() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          const response = await this.A_UPDATE_ACCESSORY({
            id: this.tackleCode,
            body: this.form,
          });

          if (response.status == 200) {
            this.showGenericToast({ type: "update" });

            this.close(true);
          }

          this.removePreloader();
        }
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
    await Promise.all([
      await this.getAllSubCategories(),
      await this.getAccessory(),
    ]);

    this.show = true;
  },
};
</script>

<style>
</style>