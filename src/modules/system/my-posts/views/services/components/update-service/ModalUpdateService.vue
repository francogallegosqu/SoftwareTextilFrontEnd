<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Actualizar servicio"
    title-tag="h3"
    size="lg"
    @hide="close"
    hide-footer
  >
    <b-container>
      <h3 class="mt-1"><b> ¿Cuales son los datos de su Servicio? </b></h3>

      <ValidationObserver ref="form">
        <b-row class="mt-2">
          <b-col cols="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Ponle un titulo"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  v-model="form.nameService"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col cols="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Ponle un precio (Soles)"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  type="number"
                  v-model="form.priceService"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col cols="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Descríbelo a detalle"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-textarea
                  v-model="form.descriptionService"
                  :state="errors.length > 0 ? false : null"
                ></b-form-textarea>
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
      </ValidationObserver>
    </b-container>

    <b-container class="mt-1 text-center">
      <b-button variant="secondary" class="mr-1" @click="close(false)">
        Cancelar
      </b-button>
      <b-button submit variant="primary" @click="updateService">
        <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
        Grabar
      </b-button>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "@validations";

export default {
  props: {
    serviceCode: {
      type: String,
    },
  },
  data() {
    return {
      // Validations
      required,

      show: false,

      form: {
        nameService: "",
        priceService: "",
        descriptionService: "",
        created_by: "",
        created_at: new Date().toString(),
      },
    };
  },
  methods: {
    ...mapActions({
      A_GET_SERVICE_BY_ID: "myPosts/A_GET_SERVICE_BY_ID",
      A_UPDATE_SERVICE: "myPosts/A_UPDATE_SERVICE",
    }),
    async getService() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SERVICE_BY_ID(this.serviceCode);

        if (response.status == 200) {
          this.form = response.data;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    async updateService() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          const response = await this.A_UPDATE_SERVICE({
            id: this.serviceCode,
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
    await this.getService();

    this.show = true;

    console.log(this.serviceCode);
  },
};
</script>

<style>
</style>