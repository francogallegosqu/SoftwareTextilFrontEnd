<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title>
        <feather-icon
          icon="BookOpenIcon"
          size="18"
          class="mr-50"
        ></feather-icon>
        Telas
      </b-card-title>
    </template>

    <b-row>
      <b-col cols="12" class="text-right">
        <b-button variant="outline-primary" class="mr-2">
          <feather-icon icon="PlusCircleIcon" class="mr-50" />
          Agregar Tela
        </b-button>

        <b-button-group class="mr-2">
          <b-button variant="outline-primary">
            <feather-icon icon="GridIcon" />
          </b-button>
          <b-button variant="outline-primary">
            <feather-icon icon="ColumnsIcon" />
          </b-button>
        </b-button-group>
      </b-col>
    </b-row>

    <b-table
      slot="table"
      ref="refUserListTable"
      class="position-relative text-center"
      responsive
      primary-key="id"
      hover
      show-empty
      small
      empty-text="No hay datos para mostrar"
      :fields="[
        {
          key: 'name',
          label: 'Nombre',
        },
        {
          key: 'actions',
          label: 'Acciones',
        },
      ]"
    >
      <!-- Column: Actions -->
      <template>
        <b-dropdown variant="link" no-caret>
          <template #button-content>
            <feather-icon
              icon="MoreVerticalIcon"
              size="16"
              class="align-middle text-body"
            />
          </template>

          <b-dropdown-item
            :to="{
              name: 'app-my-posts-services-details',
            }"
          >
            <feather-icon icon="EyeIcon" />
            <span class="align-middle ml-50">Ver servicio</span>
          </b-dropdown-item>

          <b-dropdown-item>
            <feather-icon icon="EditIcon" />
            <span class="align-middle ml-50">Actualizar</span>
          </b-dropdown-item>

          <b-dropdown-item>
            <feather-icon icon="Trash2Icon" class="text-danger" />
            <span class="align-middle ml-50 text-danger">Eliminar</span>
          </b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>
  </b-card>
</template>

<script>
export default {};
</script>

<style>
</style>