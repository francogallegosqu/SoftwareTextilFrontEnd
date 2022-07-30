<template>
  <b-card>
    <template #header>
      <b-card-title>
        <feather-icon icon="BookOpenIcon" size="18" class="mr-50" />
        {{ production.nameProduction }}
      </b-card-title>
    </template>

    <b-row>
      <b-col cols="4"></b-col>
      <b-col cols="5">
        <b-row>
          <b-col md="6">
            <h5>
              <b>Cantidad</b>
            </h5>
            <p>{{ production.quantityProduction }}</p>
          </b-col>
          <b-col md="6">
            <h5>
              <b>Total costo de producción</b>
            </h5>
            <p>{{ production.totalCostProduction | formatPen }}</p>
          </b-col>
          <b-col md="6">
            <h5>
              <b>Fit</b>
            </h5>
            <p>{{ production.fit.nameFit }}</p>
          </b-col>
          <b-col md="6">
            <h5>
              <b>Categoria</b>
            </h5>
            <p>{{ production.subcategory.nameCategory }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    production: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>