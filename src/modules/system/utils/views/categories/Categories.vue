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
            Agregar Categoria
          </b-button>
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
              @click="deleteCategory(data.item.idCategory)"
            >
              <feather-icon icon="TrashIcon" />
            </b-button>
          </template>
        </b-table>
      </filter-slot>
    </b-card>

    <modal-register-category
      v-if="showModalRegisterCategory"
      @onClose="closeModalRegisterCategory"
    />

    <modal-update-category
      v-if="showModalUpdateCategory"
      :category="categorySelected"
      @onClose="closeModalUpdateCategory"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import ModalRegisterCategory from "./components/ModalRegisterCategory.vue";
import ModalUpdateCategory from "./components/ModalUpdateCategory.vue";

export default {
  components: {
    ModalRegisterCategory,
    ModalUpdateCategory,
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

      categorySelected: null,

      // Modals
      showModalRegisterCategory: false,
      showModalUpdateCategory: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_CATEGORIES: "sharedCategory/A_GET_CATEGORIES",
      A_DELETE_CATEGORY: "sharedCategory/A_DELETE_CATEGORY",
    }),
    openModalRegisterFit() {
      this.showModalRegisterCategory = true;
    },
    async closeModalRegisterCategory(saved) {
      if (saved) await this.getFits();
      this.showModalRegisterCategory = false;
    },
    openModalUpdateFit(item) {
      this.categorySelected = item;
      this.showModalUpdateCategory = true;
    },
    async closeModalUpdateCategory(saved) {
      if (saved) await this.getFits();
      this.showModalUpdateCategory = false;
    },
    async getFits() {
      try {
        this.addPreloader();

        const response = await this.A_GET_CATEGORIES({
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
    async deleteCategory(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();
          const response = await this.A_DELETE_CATEGORY(id);

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