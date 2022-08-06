import DragAndDrop from '@/components/DragAndDrop.vue';
<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Agregar documento"
    title-tag="h3"
    size="lg"
    @hide="close(false)"
    hide-footer
  >
    <b-container>
      <ValidationObserver ref="form">
        <b-row>
          <b-col cols="12">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Nombre"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  v-model="form.name"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
                <small v-if="errors[0]" class="text-danger">
                  El nombre es requerido
                </small>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col cols="12">
            <b-form-group label="Documento">
              <drag-and-drop
                :single="true"
                v-model="files"
                :files-array="files"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </ValidationObserver>
    </b-container>

    <b-container class="mt-2 text-center">
      <b-button variant="secondary" class="mr-1" @click="close(false)">
        Cerrar
      </b-button>
      <b-button submit variant="primary" @click="addProductionDatasheet">
        <feather-icon icon="SaveIcon" />
        Guardar
      </b-button>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Components
import DragAndDrop from "@/components/DragAndDrop.vue";

export default {
  components: {
    DragAndDrop,
  },
  data() {
    return {
      show: false,

      form: {
        name: "",
      },

      files: [],
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
    productionId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_UPLOAD_IMAGE_TO_HOSTING: "images/A_UPLOAD_IMAGE_TO_HOSTING",
      A_REGISTER_PRODUCTION_DATASHEET:
        "custProduction/A_REGISTER_PRODUCTION_DATASHEET",
    }),
    async addProductionDatasheet() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          if (this.files.length == 0) {
            return this.showErrorToast({
              text: "Debe seleccionar un archivo",
            });
          }

          this.addPreloader();

          const response = await this.A_UPLOAD_IMAGE_TO_HOSTING(this.files[0]);

          if (response.status == 200) {
            let data = {
              nameDataSheet: this.form.name,
              urlDatasheet: response.data.url,
              idProduction: this.productionId,
              created_at: new Date().toString(),
              created_by: this.currentUser.idUsuario,
            };

            const res = await this.A_REGISTER_PRODUCTION_DATASHEET(data);

            if (res.status == 201) {
              this.showGenericToast({ type: "register" });

              this.close(true);
            }
          }

          this.removePreloader();
        }
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

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