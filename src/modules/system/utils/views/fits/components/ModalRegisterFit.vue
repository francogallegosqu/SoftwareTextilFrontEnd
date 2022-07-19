<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Registrar unidad"
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
                label="¿Cual es el nombre?"
                :state="errors.length > 0 ? false : null"
              >
                <b-input-group>
                  <b-form-input
                    v-model="form.nameFit"
                    :state="errors.length > 0 ? false : null"
                  />
                </b-input-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col cols="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Dale una descripción"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-textarea
                  v-model="form.descriptionFit"
                  :state="errors.length > 0 ? false : null"
                />
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
      <b-button submit variant="primary" @click="saveFit">
        <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
        Guardar
      </b-button>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    userCode: {
      type: Number,
    },
  },
  data() {
    return {
      show: false,

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
  },
  methods: {
    ...mapActions({
      A_REGISTER_FIT: "sharedFit/A_REGISTER_FIT",
    }),
    async saveFit() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          const confirm = await this.showGenericConfirmSwal({
            text: "Se guardará la unidad",
          });

          if (confirm.value) {
            this.addPreloader();

            this.form.created_by = this.currentUser.idUsuario;

            const response = await this.A_REGISTER_FIT(this.form);

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
  created() {
    this.show = true;
  },
};
</script>

<style>
</style>