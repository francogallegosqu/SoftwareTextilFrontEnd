<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title>
        <feather-icon icon="CommandIcon" size="18" class="mr-50" />
        Avíos
      </b-card-title>

      <b-button-group class="btn-group-sm">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          <feather-icon icon="PlusIcon" size="14" />
          Agregar avío
        </b-button>
      </b-button-group>
    </template>

    <div>
      <b-table
        class="text-center"
        small
        :fields="[
          { key: 'accessory', label: 'Avío' },
          { key: 'cant', label: 'Cantidad' },
          { key: 'totalCost', label: 'Costo total' },
          { key: 'actions', label: 'Acciones' },
        ]"
      ></b-table>
    </div>
  </b-card>
</template>

<script>
export default {};
</script>

<style>
</style>