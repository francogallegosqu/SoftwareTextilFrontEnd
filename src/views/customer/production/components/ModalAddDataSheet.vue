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
      <b-row>
        <b-col cols="12">
          <b-form-group label="Nombre">
            <b-form-input></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Documentos">
            <drag-and-drop
              :single="true"
              v-model="files"
              :files-array="files"
            />
          </b-form-group>
        </b-col>
      </b-row>
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
import { mapActions } from "vuex";

// Components
import DragAndDrop from "@/components/DragAndDrop.vue";

export default {
  components: {
    DragAndDrop,
  },
  data() {
    return {
      show: false,

      files: [],
    };
  },
  methods: {
    ...mapActions({
      A_UPLOAD_IMAGE_TO_HOSTING: "images/A_UPLOAD_IMAGE_TO_HOSTING",
    }),
    async addProductionDatasheet() {
      try {
        if (this.files.length > 0) {
          this.addPreloader();

          const response = await this.A_UPLOAD_IMAGE_TO_HOSTING(this.files[0]);

          if (response.status == 200) {
            let data = {};
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