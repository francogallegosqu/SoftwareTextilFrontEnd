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

      form: {
        nameCategory: "",
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
      A_REGISTER_CATEGORY: "sharedCategory/A_REGISTER_CATEGORY",
    }),
    async registerCategory() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          this.form.created_by = this.currentUser.idUsuario;

          const response = await this.A_REGISTER_CATEGORY(this.form);

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
        name: "app-customer-categories",
      });
    },
  },
};
</script>

<style>
</style>