<template>
  <b-row class="w-100 m-0 p-0">
    <b-col cols="12">
      <b-card class="w-100">
        <h1
          class="
            title-card-register
            bg-mainColor
            p-1
            mb-4
            text-white text-center
          "
        >
          Registra Tu {{ nameTitle }}
        </h1>
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
                  v-model="formRegister.name"
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
                  v-model="formRegister.value"
                  :options="optionsRegister"
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
              @click="validationFormRegister"
            >
              Crear
            </b-button>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import vSelect from "vue-select";
export default {
  components:{
    vSelect,
  },
  props: {
    isAvailable: {
      type: Boolean,
    },
    nameTitle: {
      type: String,
    },
    formRegister: {
      type: Object,
    },
    optionsRegister: {
      type: Array,
    },
    nameLabelRegister: {
      type: String,
    },
  },
  methods: {
    validationFormRegister() {
      this.$emit("validationFormRegister");
    },
  },
};
</script>


<style >
.title-card-register {
  border-radius: 5px;
  color: #fff;
}
</style>