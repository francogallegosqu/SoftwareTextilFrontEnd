<template>
  <div class="pt-1">
    <b-card body-class="px-0">
      <b-row>
        <b-col cols="12" class="text-right">
          <b-button
            variant="outline-primary"
            class="mr-2"
            @click="openModalRegisterAccesory"
          >
            <feather-icon icon="PlusCircleIcon" class="mr-50" />
            Agregar Avio
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
        :total-rows="accesories.total"
        :paginate="paginate"
        :start-page="accesories.fromPage"
        :to-page="accesories.toPage"
        @reload="getAccesories"
        @onChangeCurrentPage="getAccesories"
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
          :items="accesories.data"
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
                  name: 'app-my-posts-tackle-details',
                  params: { id: data.item.idAccessory },
                }"
              >
                <feather-icon icon="EyeIcon" />
                <span class="align-middle ml-50">Ver avio</span>
              </b-dropdown-item>

              <b-dropdown-item
                @click="openModalUpdateAccesory(data.item.idAccessory)"
              >
                <feather-icon icon="EditIcon" />
                <span class="align-middle ml-50">Actualizar</span>
              </b-dropdown-item>

              <b-dropdown-item @click="deleteAccesory(data.item.idAccessory)">
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

    <modal-register-tackle
      v-if="showModalRegisterAccesory"
      @onClose="closeModalRegisterAccesory"
    />

    <modal-update-tackle
      v-if="showModalUpdateAccesory"
      :tackle-code="tackleCodeSelected"
      @onClose="closeModalUpdateAccesory"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Filters from "./data/filters.data";
import Fields from "./data/fields.data";

// Components
import ModalRegisterTackle from "./components/register-tackle/ModalRegisterTackle.vue";
import ModalUpdateTackle from "./components/update-tackle/ModalUpdateTackle.vue";

export default {
  components: {
    ModalRegisterTackle,
    ModalUpdateTackle,
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

      accesories: {
        data: [],
        total: 0,
        fromPage: 0,
        toPage: 0,
      },

      tackleCodeSelected: null,

      // Modals
      showModalRegisterAccesory: false,
      showModalUpdateAccesory: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_ACCESSORIES_BY_USER: "myPosts/A_GET_ACCESSORIES_BY_USER",
      A_DELETE_ACCESSORY: "myPosts/A_DELETE_ACCESSORY",
    }),
    openModalRegisterAccesory() {
      this.showModalRegisterAccesory = true;
    },
    async closeModalRegisterAccesory(saved) {
      if (saved) await this.getAccesories();

      this.showModalRegisterAccesory = false;
    },
    openModalUpdateAccesory(id) {
      this.tackleCodeSelected = id;
      this.showModalUpdateAccesory = true;
    },
    async closeModalUpdateAccesory(saved) {
      if (saved) await this.getAccesories();

      this.showModalUpdateAccesory = false;
    },
    async getAccesories() {
      try {
        const response = await this.A_GET_ACCESSORIES_BY_USER(
          this.currentUser.idUsuario
        );

        if (response.status == 200) {
          this.accesories.data = response.data;
        }
      } catch (error) {
        throw error;
      }
    },
    async deleteAccesory(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({});

        if (confirm.value) {
          this.addPreloader();

          const response = await this.A_DELETE_ACCESSORY(id);

          if (response.status == 200) {
            this.showGenericToast({ type: "delete" });

            await this.getAccesories();
          }

          this.removePreloader();
        }
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
  },
  async created() {
    await this.getAccesories();
  },
};
</script>

<style lang="scss">
</style>