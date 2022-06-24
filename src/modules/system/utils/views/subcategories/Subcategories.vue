<template>
  <div class="pt-1">
    <b-card body-class="px-0">
      <b-row>
        <b-col cols="12" class="text-right">
          <b-button
            variant="outline-primary"
            class="mr-2"
            @click="openModalRegisterSubcategory"
          >
            <feather-icon icon="PlusCircleIcon" class="mr-50" />
            Agregar Sub categoria
          </b-button>
        </b-col>
      </b-row>

      <filter-slot
        :filter="table.filters"
        :filter-principal="filterPrincipal"
        :total-rows="subcategories.total"
        :paginate="paginate"
        :start-page="subcategories.fromPage"
        :to-page="subcategories.toPage"
        @reload="getSubcategories"
        @onChangeCurrentPage="getSubcategories"
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
          :items="subcategories.data"
          sticky-header="500px"
        >
          <template #cell(category)="data">
            {{ data.item.category.nameCategory }}
          </template>

          <!-- Column: Actions -->
          <template #cell(actions)="data">
            <b-button
              size="sm"
              class="btn-icon"
              variant="flat-warning"
              @click="openModalUpdateSubcategory(data.item)"
            >
              <feather-icon icon="EditIcon" />
            </b-button>

            <b-button
              size="sm"
              class="btn-icon"
              variant="flat-danger"
              @click="deleteSubcategory(data.item.idFit)"
            >
              <feather-icon icon="TrashIcon" />
            </b-button>
          </template>
        </b-table>
      </filter-slot>
    </b-card>

    <modal-register-subcategory
      v-if="showModalRegisterSubcategory"
      @onClose="closeModalRegisterSubcategory"
    />

    <modal-update-subcategory
      v-if="showModalUpdateSubcategory"
      :fit="fitSelected"
      @onClose="closeModalUpdateSubcategory"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import ModalRegisterSubcategory from "./components/ModalRegisterSubcategory.vue";
import ModalUpdateSubcategory from "./components/ModalUpdateSubcategory.vue";

export default {
  components: {
    ModalRegisterSubcategory,
    ModalUpdateSubcategory,
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

      subcategories: {
        data: [],
        total: 0,
        fromPage: 0,
        toPage: 0,
      },

      fitSelected: null,

      // Modals
      showModalRegisterSubcategory: false,
      showModalUpdateSubcategory: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_SUBCATEGORIES: "sharedSubcategory/A_GET_SUBCATEGORIES",
      A_DELETE_SUBCATEGORY: "sharedSubcategory/A_DELETE_SUBCATEGORY",
    }),
    openModalRegisterSubcategory() {
      this.showModalRegisterSubcategory = true;
    },
    async closeModalRegisterSubcategory(saved) {
      if (saved) await this.getSubcategories();
      this.showModalRegisterSubcategory = false;
    },
    openModalUpdateSubcategory(item) {
      this.fitSelected = item;
      this.showModalUpdateSubcategory = true;
    },
    async closeModalUpdateSubcategory(saved) {
      if (saved) await this.getSubcategories();
      this.showModalUpdateSubcategory = false;
    },
    async getSubcategories() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SUBCATEGORIES({
          page: 0,
          size: 100,
        });

        if (response.status == 200) {
          this.subcategories.data = response.data;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    async deleteSubcategory(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();
          const response = await this.A_DELETE_SUBCATEGORY(id);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });
            await this.getSubcategories();
          }
          this.removePreloader();
        }
      } catch (error) {
        throw error;
      }
    },
  },
  async created() {
    await this.getSubcategories();
  },
};
</script>

<style lang="scss">
</style>