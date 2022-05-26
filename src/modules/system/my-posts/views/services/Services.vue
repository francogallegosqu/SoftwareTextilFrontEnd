<template>
  <div class="pt-1">
    <b-card body-class="px-0">
      <b-row>
        <b-col cols="12" class="text-right">
          <b-button
            variant="outline-primary"
            class="mr-2"
            @click="openModalRegisterFabric"
          >
            <feather-icon icon="PlusCircleIcon" class="mr-50" />
            Agregar Servicio
          </b-button>

          <b-button-group class="mr-2">
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-primary"
            >
              <feather-icon icon="GridIcon" />
            </b-button>
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-primary"
            >
              <feather-icon icon="ColumnsIcon" />
            </b-button>
          </b-button-group>
        </b-col>
      </b-row>

      <filter-slot
        :filter="table.filters"
        :filter-principal="filterPrincipal"
        :total-rows="fabrics.total"
        :paginate="paginate"
        :start-page="fabrics.fromPage"
        :to-page="fabrics.toPage"
        @reload="getFabrics"
        @onChangeCurrentPage="getFabrics"
      >
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
          :fields="table.fields"
          :items="fabrics.data"
        >
          <!-- Column: Actions -->
          <template #cell(actions)="data">
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
                  name: 'app-my-posts-fabrics-details',
                  params: { id: data.item.idFabric },
                }"
              >
                <feather-icon icon="EyeIcon" />
                <span class="align-middle ml-50">Ver tela</span>
              </b-dropdown-item>

              <b-dropdown-item
                @click="openModalUpdateFabric(data.item.idFabric)"
              >
                <feather-icon icon="EditIcon" />
                <span class="align-middle ml-50">Actualizar</span>
              </b-dropdown-item>

              <b-dropdown-item @click="deleteUser(data.item.code)">
                <feather-icon icon="Trash2Icon" class="text-danger" />
                <span class="align-middle ml-50 text-danger">Eliminar</span>
              </b-dropdown-item>
            </b-dropdown>
          </template>
        </b-table>
      </filter-slot>
    </b-card>

    <modal-register-fabric
      v-if="showModalRegisterFabric"
      @onClose="closeModalRegisterFabric"
    />

    <modal-update-fabric
      v-if="showModalUpdateFabric"
      :fabric-code="fabricCodeSelected"
      @onClose="closeModalUpdateFabric"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Filters from "./data/filters.data";
import Fields from "./data/fields.data";

// Components
import ModalRegisterService from "./components/register-service/ModalRegisterService.vue";
import ModalUpdateService from "./components/update-service/ModalUpdateService.vue";

export default {
  components: {
    ModalRegisterService,
    ModalUpdateService,
  },
  data() {
    return {
      table: {
        fields: Fields,
        filters: Filters,
      },
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Buscar...",
        model: "",
      },

      paginate: {
        currentPage: 1,
        perPage: 1,
      },
      perPageOptions: [10, 25, 50, 100],
      sortBy: "id",
      isSortDirDesc: true,
      selectAll: false,
      isBusy: false,

      fabrics: {
        data: [],
        total: 0,
        fromPage: 0,
        toPage: 0,
      },

      fabricCodeSelected: null,

      // Modals
      showModalRegisterFabric: false,
      showModalUpdateFabric: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_FABRICS_BY_USER: "myPosts/A_GET_FABRICS_BY_USER",
    }),
    openModalRegisterFabric() {
      this.showModalRegisterFabric = true;
    },
    closeModalRegisterFabric() {
      this.showModalRegisterFabric = false;
    },
    openModalUpdateFabric(id) {
      this.fabricCodeSelected = id;
      this.showModalUpdateFabric = true;
    },
    closeModalUpdateFabric() {
      this.showModalUpdateFabric = false;
    },
    async getFabrics() {
      try {
        const response = await this.A_GET_FABRICS_BY_USER(
          this.currentUser.idUsuario
        );

        if (response.status == 200) {
          this.fabrics.data = response.data;
        }
      } catch (error) {
        throw error;
      }
    },
  },
  async created() {
    await this.getFabrics();
  },
};
</script>

<style lang="scss">
</style>