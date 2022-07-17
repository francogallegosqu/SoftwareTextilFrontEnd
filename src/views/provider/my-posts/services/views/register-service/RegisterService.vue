<template>
  <div>
    <header-slot></header-slot>
    <b-card>
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
        <b-button
          variant="secondary"
          class="mr-1"
          :to="{ name: 'app-provider-my-posts-services' }"
        >
          Cancelar
        </b-button>
        <b-button submit variant="primary" @click="saveService">
          <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
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
  props: {
    userCode: {
      type: Number,
    },
  },
  data() {
    return {
      // Validations
      required,

      form: {
        nameService: "",
        priceService: "",
        descriptionService: "",
        created_by: "",
        created_at: new Date().toString(),
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
      A_REGISTER_SERVICE: "provMyPostsServices/A_REGISTER_SERVICE",
    }),
    async saveService() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          this.form.created_by = this.currentUser.idUsuario;

          const response = await this.A_REGISTER_SERVICE(this.form);

          if (response.status == 201) {
            this.showGenericToast({ type: "register" });

            this.$router.push({
              name: "app-provider-my-posts-services",
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
  created() {
    this.show = true;
  },
};
</script>

<style>
</style>