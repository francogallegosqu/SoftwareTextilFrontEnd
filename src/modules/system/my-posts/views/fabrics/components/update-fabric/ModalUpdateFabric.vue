<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Editar tela"
    title-tag="h3"
    size="lg"
    @hide="close"
    hide-footer
  >
    <b-container>
      <h3 class="mt-1"><b> Descripcion de la Tela </b></h3>

      <ValidationObserver ref="form">
        <b-row>
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
    };
  },
  computed: {
    idParam() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_FABRIC_BY_ID: "myPosts/A_GET_FABRIC_BY_ID",
      A_UPDATE_FABRIC: "myPosts/A_UPDATE_FABRIC",
    }),
    async getFabric() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FABRIC_BY_ID(this.idParam);

        console.log(response.data);
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
            code: this.idParam,
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
    await this.getFabric();

    this.show = true;
  },
};
</script>

<style>
</style>