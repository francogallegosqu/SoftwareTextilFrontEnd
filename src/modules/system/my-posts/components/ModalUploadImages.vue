<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Subir imagen"
    title-tag="h3"
    @hide="close"
    hide-footer
  >
    <drag-and-drop
      :single="true"
      v-model="form.files"
      :files-array="form.files"
    />

    <b-container class="mt-1 text-center">
      <b-button variant="secondary" class="mr-1" @click="close(false)">
        Cancelar
      </b-button>
      <b-button submit variant="primary" @click="uploadImage">
        <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
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
  props: {
    registerCode: {
      type: String,
    },
  },
  components: {
    DragAndDrop,
  },
  data() {
    return {
      show: false,

      form: {
        files: [],
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
      A_UPLOAD_IMAGE_BY_ID: "images/A_UPLOAD_IMAGE_BY_ID",
      A_UPLOAD_IMAGE_TO_HOSTING: "images/A_UPLOAD_IMAGE_TO_HOSTING",
    }),
    async uploadImage() {
      try {
        if (this.form.files.length > 0) {
          this.addPreloader();

          const response = await this.A_UPLOAD_IMAGE_TO_HOSTING(
            this.form.files[0]
          );

          if (response.status == 200) {
            let data = {
              typeImage: this.registerCode,
              urlImage: response.data.url,
              created_at: new Date().toString(),
              created_by: this.currentUser.idUsuario,
            };

            const res = await this.A_UPLOAD_IMAGE_BY_ID(data);

            if (res.status == 201) {
              this.showGenericToast({ type: "register" });

              this.close(true);
            }
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
  created() {
    this.show = true;
  },
};
</script>

<style>
</style>