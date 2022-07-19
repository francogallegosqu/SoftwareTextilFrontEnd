<template>
  <div>
    <header-slot></header-slot>

    <b-card>
      <b-container>
        <h3 class="mt-1"><b> Cuéntanos acerca de tu Tela </b></h3>

        <ValidationObserver ref="form">
          <b-row class="mt-2">
            <b-col md="6">
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="Ponle un titulo"
                  :state="errors.length > 0 ? false : null"
                >
                  <b-form-input
                    v-model="form.nameFabric"
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
                  <b-form-input
                    v-model="form.composition"
                    :state="errors.length > 0 ? false : null"
                  ></b-form-input>
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
                    v-model="form.descriptionFabric"
                    :state="errors.length > 0 ? false : null"
                  ></b-form-textarea>
                </b-form-group>
              </ValidationProvider>
            </b-col>
          </b-row>

          <h3 class="mt-2"><b> Detalla los datos de tu tela </b></h3>

          <b-row>
            <b-col md="6">
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="¿Cual es el precio?"
                  :state="errors.length > 0 ? false : null"
                >
                  <b-input-group prepend="S./">
                    <b-form-input
                      v-model="form.priceFabric"
                      :state="errors.length > 0 ? false : null"
                    />
                  </b-input-group>
                </b-form-group>
              </ValidationProvider>
            </b-col>
            <b-col md="6">
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="¿Cual es la tension?"
                  :state="errors.length > 0 ? false : null"
                >
                  <b-form-input
                    v-model="form.tension"
                    :state="errors.length > 0 ? false : null"
                  ></b-form-input>
                </b-form-group>
              </ValidationProvider>
            </b-col>
            <b-col md="6">
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="¿Cual es el peso?"
                  :state="errors.length > 0 ? false : null"
                >
                  <b-input-group append="Kg/m2">
                    <b-form-input
                      v-model="form.meters_x_Kg"
                      :state="errors.length > 0 ? false : null"
                    />
                  </b-input-group>
                </b-form-group>
              </ValidationProvider>
            </b-col>
            <b-col md="6">
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="¿Cual es el ancho?"
                  :state="errors.length > 0 ? false : null"
                >
                  <b-input-group append="cm">
                    <b-form-input
                      v-model="form.widthFabric"
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
                  v-model="form.colorFabric"
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
        <b-button variant="secondary" class="mr-1" @click="returnPage">
          Cancelar
        </b-button>
        <b-button submit variant="primary" @click="updateFabric">
          <feather-icon icon="SaveIcon"></feather-icon>
          Grabar
        </b-button>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "@validations";

export default {
  data() {
    return {
      // Validations
      required,

      show: false,

      form: {
        priceFabric: "",
        meters_x_Kg: "",
        widthFabric: "",
        colorFabric: "#1CA085",
        nameFabric: "",
        descriptionFabric: "",
        subCategory: "",
        tension: "",
        composition: "",
        created_by: "",
        created_at: new Date().toString(),
      },

      subcategories: [],
    };
  },
  computed: {
    fromRoute() {
      return this.$route.params.from;
    },
    fabricId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_ALL_SUB_CATEGORIES: "category/A_GET_ALL_SUB_CATEGORIES",
      A_GET_FABRIC_BY_ID: "provMyPostsFabrics/A_GET_FABRIC_BY_ID",
      A_UPDATE_FABRIC: "provMyPostsFabrics/A_UPDATE_FABRIC",
    }),
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
    async getFabric() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FABRIC_BY_ID(this.fabricId);

        if (response.status == 200) {
          this.form = response.data;
        }
        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    async updateFabric() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          const response = await this.A_UPDATE_FABRIC({
            id: this.fabricId,
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

        throw error;
      }
    },
    returnPage() {
      if (this.fromRoute == "d") {
        return this.$router.push({
          name: "app-provider-my-posts-fabrics-details",
          params: {
            id: this.fabricId,
          },
        });
      }

      this.$router.push({
        name: "app-provider-my-posts-fabrics",
      });
    },
  },
  async created() {
    await Promise.all([this.getAllSubCategories(), this.getFabric()]);

    this.show = true;
  },
};
</script>

<style>
</style>