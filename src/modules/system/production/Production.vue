<template>
  <div>
    <b-card body-class="px-0">
      <b-row>
        <b-col cols="12" class="text-right">
          <b-button
            variant="outline-primary"
            class="mr-2"
            @click="openModalRegisterProduction"
          >
            <feather-icon icon="PlusCircleIcon" class="mr-50" />
            Agregar Producción
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
        :total-rows="productions.total"
        :paginate="paginate"
        :start-page="productions.fromPage"
        :to-page="productions.toPage"
        @reload="getProductions"
        @onChangeCurrentPage="getProductions"
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
          :items="productions.data"
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

    <modal-register-production
      v-if="showModalRegisterProduction"
      @onClose="closeModalRegisterProduction"
    />

    <modal-register-fit
      v-if="showModalRegisterFit"
      @onClose="closeModalRegisterFit"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import ModalRegisterProduction from "./components/register-production/ModalRegisterProduction.vue";
import ModalRegisterFit from "../fits/components/register-fit/ModalRegisterFit.vue";

export default {
  components: {
    ModalRegisterProduction,
    ModalRegisterFit,
  },
  data() {
    return {
      table: {
        fields: Fields,
        filters: [],
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

      productions: {
        data: [],
        total: 0,
        fromPage: 0,
        toPage: 0,
      },

      // Modals
      showModalRegisterProduction: false,
      showModalRegisterFit: false,
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      A_GET_PRODUCTIONS: "production/A_GET_PRODUCTIONS",
    }),
    openModalRegisterProduction() {
      this.showModalRegisterProduction = true;
    },
    async closeModalRegisterProduction(saved) {
      if (saved) await this.getProductions();
      this.showModalRegisterProduction = false;
    },
    openModalRegisterFit() {
      this.showModalRegisterFit = true;
    },
    closeModalRegisterFit() {
      this.showModalRegisterFit = false;
    },
    async getProductions() {
      try {
        this.addPreloader();

        const response = this.A_GET_PRODUCTIONS({});

        console.log(response);

        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
  },
  async created() {
    await this.getProductions();
  },
};
</script>

<style>
</style>