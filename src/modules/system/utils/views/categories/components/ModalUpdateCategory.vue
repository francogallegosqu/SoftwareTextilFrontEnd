<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Actualizar categoria"
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
                    v-model="form.nameCategory"
                    :state="errors.length > 0 ? false : null"
                  />
                </b-input-group>
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
      <b-button submit variant="primary" @click="updateCategory">
        <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
        Guardar
      </b-button>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required } from "@validations";

export default {
  props: {
    category: {
      type: Object,
    },
  },
  data() {
    return {
      required,

      show: false,

      form: {
        nameCategory: this.category.nameCategory,
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
      A_UPDATE_CATEGORY: "sharedCategory/A_UPDATE_CATEGORY",
    }),
    async updateCategory() {
      try {
        const validate = await this.$refs.form.validate();

        this.form.created_by = this.currentUser.idUsuario;

        if (validate) {
          const confirm = await this.showGenericConfirmSwal({
            text: "Se actualizara la categoria",
          });

          if (confirm.value) {
            this.addPreloader();

            const response = await this.A_UPDATE_CATEGORY({
              id: this.category.idCategory,
              body: this.form,
            });

            if (response.status == 200) {
              this.showGenericToast({ type: "update" });
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