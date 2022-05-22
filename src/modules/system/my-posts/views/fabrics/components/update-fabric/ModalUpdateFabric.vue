<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Actualizar tela"
    title-tag="h3"
    size="lg"
    @hide="close"
    hide-footer
  >
  </b-modal>
</template>

<script>
export default {
  props: {
    fabricCode: {
      type: Number,
    },
  },
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