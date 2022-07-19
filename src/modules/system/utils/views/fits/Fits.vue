<template>
  <div class="pt-1">
    <b-card body-class="px-0">
      <b-row>
        <b-col cols="12" class="text-right">
          <b-button
            variant="outline-primary"
            class="mr-2"
            @click="openModalRegisterFit"
          >
            <feather-icon icon="PlusCircleIcon" class="mr-50" />
            Agregar Unidad
          </b-button>

          <b-button-group class="mr-2">
            <b-button variant="outline-dark">
              <feather-icon icon="GridIcon" />
            </b-button>
            <b-button variant="outline-dark">
              <feather-icon icon="ColumnsIcon" />
            </b-button>
          </b-button-group>
        </b-col>
      </b-row>

      <filter-slot
        :filter="table.filters"
        :filter-principal="filterPrincipal"
        :total-rows="fits.total"
        :paginate="paginate"
        :start-page="fits.fromPage"
        :to-page="fits.toPage"
        @reload="getFits"
        @onChangeCurrentPage="getFits"
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
          :items="fits.data"
          sticky-header="500px"
        >
          <!-- Column: Actions -->
          <template #cell(actions)="data">
            <b-button
              size="sm"
              class="btn-icon"
              variant="flat-warning"
              @click="openModalUpdateFit(data.item)"
            >
              <feather-icon icon="EditIcon" />
            </b-button>

            <b-button
              size="sm"
              class="btn-icon"
              variant="flat-danger"
              @click="deleteFit(data.item.idFit)"
            >
              <feather-icon icon="TrashIcon" />
            </b-button>
          </template>
        </b-table>
      </filter-slot>
    </b-card>

    <modal-register-fit
      v-if="showModalRegisterFit"
      @onClose="closeModalRegisterFit"
    />

    <modal-update-fit
      v-if="showModalUpdateFit"
      :fit="fitSelected"
      @onClose="closeModalUpdateFit"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import ModalRegisterFit from "./components/ModalRegisterFit.vue";
import ModalUpdateFit from "./components/ModalUpdateFit.vue";

export default {
  components: {
    ModalRegisterFit,
    ModalUpdateFit,
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

      fits: {
        data: [],
        total: 0,
        fromPage: 0,
        toPage: 0,
      },

      fitSelected: null,

      // Modals
      showModalRegisterFit: false,
      showModalUpdateFit: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_FITS: "sharedFit/A_GET_FITS",
      A_DELETE_FIT: "sharedFit/A_DELETE_FIT",
    }),
    openModalRegisterFit() {
      this.showModalRegisterFit = true;
    },
    async closeModalRegisterFit(saved) {
      if (saved) await this.getFits();
      this.showModalRegisterFit = false;
    },
    openModalUpdateFit(item) {
      this.fitSelected = item;
      this.showModalUpdateFit = true;
    },
    async closeModalUpdateFit(saved) {
      if (saved) await this.getFits();
      this.showModalUpdateFit = false;
    },
    async getFits() {
      try {
        this.addPreloader();

        const response = await this.A_GET_FITS({
          page: 0,
          size: 100,
        });

        if (response.status == 200) {
          this.fits.data = response.data;
        }

        this.removePreloader();
      } catch (error) {
        throw error;
      }
    },
    async deleteFit(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();
          const response = await this.A_DELETE_FIT(id);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });
            await this.getFits();
          }
          this.removePreloader();
        }
      } catch (error) {
        throw error;
      }
    },
  },
  async created() {
    await this.getFits();
  },
};
</script>

<style lang="scss">
</style>