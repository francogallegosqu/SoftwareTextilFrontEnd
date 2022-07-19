<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Agregar Servicio"
    title-tag="h3"
    @hide="close"
    hide-footer
  >
  </b-modal>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      show: false,
    };
  },
  methods: {
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