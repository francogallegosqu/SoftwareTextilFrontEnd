<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button
          variant="outline-primary"
          class="mr-2"
          @click="redirectToRegisterSubcategory"
        >
          <feather-icon
            icon="PlusCircleIcon"
            class="mr-50"
          />
          Agregar sub categoria
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
          <card-group-subcategories
            :subcategories="subcategories"
            @onUpdate="redirectToUpdateSubcategory"
            @onDelete="deleteCategory"
          />
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-subcategories
          :table="table"
          :subcategories="subcategories"
          @onUpdate="redirectToUpdateSubcategory"
          @onDelete="deleteCategory"
        />
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

// Data
import Fields from './data/fields.data'

// Componets
import TableSubcategories from './components/TableSubcategories.vue'
import CardGroupSubcategories from './components/CardGroupSubcategories.vue'

export default {
  components: {
    TableSubcategories,
    CardGroupSubcategories,
  },
  data() {
    return {
      typeGridView: '',

      table: {
        fields: Fields,
      },

      subcategories: {
        data: [],
      },
    }
  },
  async created() {
    await this.getGridView()
    await this.getSubcategories()
  },
  methods: {
    ...mapActions({
      A_GET_SUBCATEGORIES: 'sharedSubcategory/A_GET_SUBCATEGORIES',
      A_DELETE_SUBCATEGORY: 'sharedSubcategory/A_DELETE_SUBCATEGORY',
    }),
    getGridView() {
      this.typeGridView = localStorage.getItem('customerCategoriesView')
      // eslint-disable-next-line no-unused-expressions
      this.typeGridView == null ? this.setGridView('table') : null
    },
    setGridView(view) {
      this.typeGridView = view
      localStorage.setItem('customerCategoriesView', view)
    },
    redirectToRegisterSubcategory() {
      this.$router.push({
        name: 'app-customer-subcategories-register',
      })
    },
    redirectToUpdateSubcategory(id) {
      this.$router.push({
        name: 'app-customer-subcategories-update',
        params: { id },
      })
    },
    async getSubcategories() {
      try {
        this.addPreloader()

        const response = await this.A_GET_SUBCATEGORIES({
          page: 0,
          size: 100,
        })

        if (response.status === 200) {
          this.subcategories.data = response.data
        }

        this.removePreloader()
      } catch (error) {
        this.removePreloader()
        this.showErrorToast({ text: error })

        throw error
      }
    },
    async deleteCategory(id) {
      try {
        const confirm = await this.showGenericConfirmSwal({})

        if (confirm.value) {
          this.addPreloader()

          const response = await this.A_DELETE_SUBCATEGORY(id)

          if (response.status === 200) {
            this.showGenericToast({ type: 'delete' })
            await this.getSubcategories()
          }

          this.removePreloader()
        }
      } catch (error) {
        this.removePreloader()
        this.showErrorToast({ text: error })

        throw error
      }
    },
  },
}
</script>

<style>
</style>
