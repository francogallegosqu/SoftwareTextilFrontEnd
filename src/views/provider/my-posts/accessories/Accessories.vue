<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button
          variant="outline-primary"
          class="mr-2"
          @click="redirectToRegisterAccessory"
        >
          <feather-icon icon="PlusCircleIcon" class="mr-50" />
          Agregar Avio
        </b-button>

        <b-button-group class="mr-2">
          <b-button
            :variant="typeGridView == 'table' ? 'primary' : 'outline-primary'"
            @click="setGridView('table')"
          >
            <feather-icon icon="GridIcon" />
          </b-button>
          <b-button
            :variant="typeGridView == 'cards' ? 'primary' : 'outline-primary'"
            @click="setGridView('cards')"
          >
            <feather-icon icon="ColumnsIcon" />
          </b-button>
        </b-button-group>
      </template>
    </header-slot>

    <b-card body-class="px-0">
      <template v-if="typeGridView == 'cards'">
        <b-container>
          <card-group-accessories
            :accessories="accessories"
            @onViewDetails="redirectToViewDetails"
            @onUpdate="redirectToUpdateAccessory"
            @onDelete="deleteAccesory"
          ></card-group-accessories>
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-accessories
          :table="table"
          :accessories="accessories"
          @onViewDetails="redirectToViewDetails"
          @onUpdate="redirectToUpdateAccessory"
          @onDelete="deleteAccesory"
        ></table-accessories>
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// Data
import Fields from "./data/fields.data";

// Components
import TableAccessories from "./components/TableAccessories.vue";
import CardGroupAccessories from "./components/CardGroupAccessories.vue";

export default {
  components: {
    TableAccessories,
    CardGroupAccessories,
  },
  data() {
    return {
      typeGridView: "",

      table: {
        fields: Fields,
      },

      accessories: {
        data: [],
      },
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_ACCESSORIES_BY_USER:
        "provMyPostsAccessories/A_GET_ACCESSORIES_BY_USER",
      A_DELETE_ACCESSORY: "provMyPostsAccessories/A_DELETE_ACCESSORY",
    }),
    getGridView() {
      this.typeGridView = localStorage.getItem(
        "providerMyPostsAccessoriesView"
      );
      this.typeGridView == null ? this.setGridView("table") : null;
    },
    setGridView(view) {
      this.typeGridView = view;
      localStorage.setItem("providerMyPostsAccessoriesView", view);
    },
    redirectToRegisterAccessory() {
      this.$router.push({ name: "app-provider-my-posts-accessories-register" });
    },
    redirectToUpdateAccessory(id) {
      this.$router.push({
        name: "app-provider-my-posts-accessories-update",
        params: { id: id },
      });
    },
    redirectToViewDetails(id) {
      this.$router.push({
        name: "app-provider-my-posts-accessories-details",
        params: { id: id },
      });
    },
    async getAccessories() {
      try {
        this.addPreloader();

        const response = await this.A_GET_ACCESSORIES_BY_USER(
          this.currentUser.idUsuario
        );

        if ((response.status = 200)) {
          this.accessories.data = response.data;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });

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
    await this.getGridView();
    await this.getAccessories();
  },
};
</script>

<style scoped>
</style>