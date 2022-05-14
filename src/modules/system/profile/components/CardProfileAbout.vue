<template>
  <b-card>
    <div class="mt-2">
      <h5 class="text-capitalize mb-75"><b>Correo electrónico</b></h5>
      <b-card-text> {{ currentUser.email }} </b-card-text>
    </div>
    <div class="mt-2">
      <h5 class="text-capitalize mb-75"><b>Razón social</b></h5>
      <b-card-text> {{ currentUser.businessName }} </b-card-text>
    </div>
    <div class="mt-2">
      <h5 class="text-capitalize mb-75"><b>Documento</b></h5>
      <b-card-text> {{ currentUser.number_document }} </b-card-text>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>