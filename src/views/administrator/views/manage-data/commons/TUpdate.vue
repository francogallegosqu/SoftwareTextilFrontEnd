<template>
<b-modal
      modal
      :title="`Actualizar ${nameTitle}`"
      v-model="isOpenUpdate"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      title-tag="h3"
    >
  <b-row class="w-100 m-0 p-0">
    <b-col cols="12">
      <b-card class="w-100">
        <b-row class="w-100 m-0">
          <!-- name -->
          <b-col cols="12">
            <b-form-group :label="nameTitle" label-for="name">
              <validation-provider
                #default="{ errors }"
                name="Name"
                rules="required"
              >
                <b-form-input
                  id="name"
                  v-model="formUpdate.name"
                  :state="errors.length > 0 ? false : null"
                  :placeholder="nameTitle"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- Id  -->
          <b-col cols="12" v-if="isAvailable">
            <b-form-group label="Elige" label-for="idTemplate">
              <validation-provider
                #default="{ errors }"
                name="IdTemplate"
                rules="required"
              >
                <v-select
                  v-model="formUpdate.value"
                  :options="optionsUpdate"
                  :reduce="(val) => val.id"
                  :label="nameLabelRegister"
                  class="w-100"
                  :state="errors.length > 0 ? false : null"
                >
                </v-select>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12" class="d-flex justify-content-end">
            <b-button
              variant="primary"
              type="submit"
              @click="validationFormUpdate"
            >
              Crear
            </b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</b-modal>
</template>

<script>
export default {
  props: {
    isUpdate:{
        type:Boolean
    },
    isAvailable: {
      type: Boolean,
    },
    nameTitle: {
      type: String,
    },
    formUpdate: {
      type: Object,
    },
    optionsUpdate: {
      type: Array,
    },
    nameLabelRegister: {
      type: String,
    },
  },
  data(){
    return {
        isOpenUpdate:this.isUpdate
    }
  },
  methods: {
    validationFormUpdate() {
      this.$emit("validationFormUpdate");
    },
    closeModal(){
        this.$emit("closeModal")
    }
  },
};
</script>


<style >
.title-card-register {
  border-radius: 5px;
  color: #fff;
}
</style>