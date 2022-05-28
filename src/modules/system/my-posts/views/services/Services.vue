<template>
  <div class="pt-1">
    <b-card body-class="px-0">
      <b-row>
        <b-col cols="12" class="text-right">
          <b-button
            variant="outline-primary"
            class="mr-2"
            @click="openModalRegisterService"
          >
            <feather-icon icon="PlusCircleIcon" class="mr-50" />
            Agregar Servicio
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

      <filter-slot
        :filter="table.filters"
        :filter-principal="filterPrincipal"
        :total-rows="services.total"
        :paginate="paginate"
        :start-page="services.fromPage"
        :to-page="services.toPage"
        @reload="getServices"
        @onChangeCurrentPage="getServices"
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
          :items="services.data"
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
                  name: 'app-my-posts-services-details',
                  params: { id: data.item.idService },
                }"
              >
                <feather-icon icon="EyeIcon" />
                <span class="align-middle ml-50">Ver servicio</span>
              </b-dropdown-item>

              <b-dropdown-item
                @click="openModalUpdateService(data.item.idService)"
              >
                <feather-icon icon="EditIcon" />
                <span class="align-middle ml-50">Actualizar</span>
              </b-dropdown-item>

              <b-dropdown-item @click="deleteService(data.item.idService)">
                <feather-icon icon="Trash2Icon" class="text-danger" />
                <span class="align-middle ml-50 text-danger">Eliminar</span>
              </b-dropdown-item>
            </b-dropdown>
          </template>

          <template #cell(created_at)="data">
            {{ $moment(data.item.created_at).format("dddd, MMMM Do YYYY") }}
          </template>
        </b-table>
      </filter-slot>
    </b-card>

    <modal-register-service
      v-if="showModalRegisterService"
      @onClose="closeModalRegisterService"
    />

    <modal-update-service
      v-if="showModalUpdateService"
      :service-code="serviceCodeSelected"
      @onClose="closeModalUpdateService"
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

      services: {
        data: [],
        total: 0,
        fromPage: 0,
        toPage: 0,
      },

      serviceCodeSelected: null,

      // Modals
      showModalRegisterService: false,
      showModalUpdateService: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_SERVICES_BY_USER: "myPosts/A_GET_SERVICES_BY_USER",
      A_DELETE_SERVICE: "myPosts/A_DELETE_SERVICE",
    }),
    openModalRegisterService() {
      this.showModalRegisterService = true;
    },
    async closeModalRegisterService(saved) {
      if (saved) await this.getServices();

      this.showModalRegisterService = false;
    },
    openModalUpdateService(id) {
      this.serviceCodeSelected = id;
      this.showModalUpdateService = true;
    },
    async closeModalUpdateService(saved) {
      if (saved) await this.getServices();

      this.showModalUpdateService = false;
    },
    async getServices() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SERVICES_BY_USER(
          this.currentUser.idUsuario
        );

        if (response.status == 200) {
          this.services.data = response.data;
        }

        this.removePreloader();
      } catch (error) {
        throw error;
      }
    },
    async deleteService(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          const response = await this.A_DELETE_SERVICE(id);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });

            await this.getServices();
          }
        }
      } catch (error) {
        throw error;
      }
    },
  },
  async created() {
    await this.getServices();
  },
};
</script>

<style lang="scss">
</style>