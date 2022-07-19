<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Registrar unidad"
    title-tag="h3"
    @hide="close"
    hide-footer
  >
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-form-group label="Nombre">
            <b-form-input v-model="form.nameFit"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Descripción">
            <b-form-textarea v-model="form.descriptionFit"></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="mt-1 text-center">
      <b-button variant="secondary" class="mr-1" @click="close(false)">
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
import { mapActions } from "vuex";

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
        created_by: "",
        created_at: new Date().toString(),
      },
    };
  },
  methods: {
    ...mapActions({
      A_REGISTER_FIT: "fit/A_REGISTER_FIT",
    }),
    async saveFit() {
      try {
        this.addPreloader();

        const response = await this.A_REGISTER_FIT(this.form);

        if (response.status == 201) {
          this.showGenericToast({ type: "register" });

          this.close(true);
        }

        this.removePreloader();
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