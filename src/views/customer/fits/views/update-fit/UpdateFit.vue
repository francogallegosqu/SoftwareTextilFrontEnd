<template>
  <div>
    <header-slot></header-slot>

    <b-card>
      <ValidationObserver ref="form">
        <b-row>
          <b-col cols="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Nombre"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  v-model="form.nameFit"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
                <small v-if="errors[0]" class="text-danger">
                  El campo es requerido
                </small>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col cols="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Descripción"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-textarea
                  v-model="form.descriptionFit"
                  :state="errors.length > 0 ? false : null"
                ></b-form-textarea>
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
        <b-button submit variant="primary" @click="updateFit">
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

      form: {
        nameFit: "",
        descriptionFit: "",
        created_at: new Date().toString(),
        created_by: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
    fitId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_FIT_BY_ID: "fit/A_GET_FIT_BY_ID",
      A_UPDATE_FIT: "fit/A_UPDATE_FIT",
    }),
    async getFit() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FIT_BY_ID(this.fitId);

        if (response.status == 200) {
          this.form = response.data;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

        throw error;
      }
    },
    async updateFit() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          this.form.created_by = this.currentUser.idUsuario;

          const response = await this.A_UPDATE_FIT({
            id: this.fitId,
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
        name: "app-customer-fits",
      });
    },
  },
  async created() {
    await this.getFit();
  },
};
</script>

<style>
</style>