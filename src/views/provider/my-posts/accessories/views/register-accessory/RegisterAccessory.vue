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
          <h3 class="mt-1"><b> Cuéntanos acerca de tu Avio</b></h3>

          <b-row class="mt-2">
            <b-col cols="12">
              <b-form-group label="Ponle un titulo">
                <b-form-input v-model="form.nameAccessory"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group label="Descríbelo a detalle">
                <b-form-textarea
                  v-model="form.descriptionAccessory"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
        </template>

        <template v-if="step == 2">
          <h3 class="mt-1"><b> Haz que tu nuevo socio te encuentre </b></h3>

          <b-row class="mt-2">
            <b-col>
              <b-form-group label="Elige una categoria que describa tu avio">
                <v-select
                  v-model="form.idSubcategory"
                  :options="subcategories"
                  :reduce="(el) => el.value"
                ></v-select>
              </b-form-group>
            </b-col>
          </b-row>
        </template>

        <template v-if="step == 3">
          <h3 class="mt-1"><b> Detalla los datos de tu avio </b></h3>

          <ValidationObserver ref="form">
            <b-row class="mt-2">
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
          <b-button
            submit
            variant="primary"
            @click="passStep(3)"
            :disabled="disableSecondButton"
          >
            Siguiente
            <feather-icon icon="ArrowRightIcon" class="ml-50"></feather-icon>
          </b-button>
        </template>
        <template v-if="step == 3">
          <b-button variant="secondary" class="mr-1" @click="passStep(2)">
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

      show: false,

      step: 1,
      steps: 3,

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

      colors: "#194D33A8",
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
    progressBarCovered() {
      if (this.step == 1) return 20;
      else if (this.step == 2) return 40;
      else return 70;
    },
    disableFirstButton() {
      return (
        this.form.nameAccessory == "" || this.form.descriptionAccessory == ""
      );
    },
    disableSecondButton() {
      return this.form.idSubcategory == "";
    },
  },
  methods: {
    ...mapActions({
      A_GET_ALL_SUB_CATEGORIES: "category/A_GET_ALL_SUB_CATEGORIES",
      A_REGISTER_ACCESSORY: "provMyPostsAccessories/A_REGISTER_ACCESSORY",
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
    async saveAccesory() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          this.form.created_by = this.currentUser.idUsuario;

          const response = await this.A_REGISTER_ACCESSORY(this.form);

          if (response.status == 201) {
            this.showGenericToast({ type: "register" });

            this.$router.push({
              name: "app-provider-my-posts-accessories",
            });
          }

          this.removePreloader();
        }
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
  },
  async created() {
    await this.getAllSubCategories();

    this.show = true;
  },
};
</script>

<style lang="scss">
</style>