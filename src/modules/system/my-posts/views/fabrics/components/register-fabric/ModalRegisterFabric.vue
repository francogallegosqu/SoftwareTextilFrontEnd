<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Agregar tela"
    title-tag="h3"
    size="lg"
    @hide="close"
    hide-footer
  >
    <b-container>
      <div class="progress-wrapper py-1 text-left">
        <b-card-text class="mb-1 h6"> Paso {{ step }} de {{ steps }} </b-card-text>
        <b-progress v-model="progressBarCovered" max="100" />
      </div>

      <template v-if="step == 1">
        <h3 class="mt-1"><b> Cuéntanos acerca de tu Tela</b></h3>

        <b-row class="mt-2">
          <b-col cols="12">
            <b-form-group label="Ponle un titulo">
              <b-form-input></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label="Descríbelo a detalle">
              <b-form-textarea></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </template>

      <template v-if="step == 2">
        <h3 class="mt-1"><b> Haz que tu nuevo socio te encuentre </b></h3>

        <b-row class="mt-2">
          <b-col>
            <b-form-group label="Elige una categoria que describa tu tela">
              <v-select></v-select>
            </b-form-group>
          </b-col>
        </b-row>
      </template>

      <template v-if="step == 3">
        <h3 class="mt-1"><b> Detalla los datos de tu tela </b></h3>

        <b-row class="mt-2">
          <b-col md="6">
            <b-form-group label="¿Cual es el precio?">
              <b-input-group prepend="S./">
                <b-form-input />
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="¿Cual es la tension?">
              <b-form-input></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="¿Cual es el peso?">
              <b-input-group append="Kg/m2">
                <b-form-input />
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="¿Cual es el peso?">
              <b-input-group append="cm">
                <b-form-input />
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group label="Describe la composición de tu tela">
              <b-form-input></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group label="Elige el color de tu tela"> </b-form-group>
          </b-col>
        </b-row>
      </template>
    </b-container>

    <b-container class="mt-1 text-right">
      <template v-if="step == 1">
        <b-button submit variant="primary" @click="passStep(2)">
          Siguiente
          <feather-icon icon="ArrowRightIcon" class="ml-50"></feather-icon>
        </b-button>
      </template>
      <template v-if="step == 2">
        <b-button variant="secondary" class="mr-1" @click="passStep(1)">
          <feather-icon icon="ArrowLeftIcon" class="mr-50"></feather-icon>
          Anterior
        </b-button>
        <b-button submit variant="primary" @click="passStep(3)">
          Siguiente
          <feather-icon icon="ArrowRightIcon" class="ml-50"></feather-icon>
        </b-button>
      </template>
      <template v-if="step == 3">
        <b-button variant="secondary" class="mr-1" @click="passStep(2)">
          <feather-icon icon="ArrowLeftIcon" class="mr-50"></feather-icon>
          Anterior
        </b-button>
        <b-button submit variant="primary" @click="passStep(3)">
          <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
          Guardar
        </b-button>
      </template>
    </b-container>
  </b-modal>
</template>

<script>
import vSelect from "vue-select";

export default {
  props: {
    userCode: {
      type: Number,
    },
  },
  components: {
    vSelect,
  },
  data() {
    return {
      show: false,

      step: 3,
      steps: 3,
    };
  },
  computed: {
    progressBarCovered() {
      if (this.step == 1) return 20;
      else if (this.step == 2) return 40;
      else return 70;
    },
  },
  methods: {
    passStep(step) {
      this.step = step;
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