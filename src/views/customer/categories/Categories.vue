<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button
          variant="outline-primary"
          class="mr-2"
          @click="redirectToRegisterCategory"
        >
          <feather-icon
            icon="PlusCircleIcon"
            class="mr-50"
          />
          Agregar categoria
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
          <card-group-categories
            :categories="categories"
            @onUpdate="redirectToUpdateCategory"
            @onDelete="deleteCategory"
          />
        </b-container>
      </template>

      <template v-if="typeGridView == 'table'">
        <table-categories
          :table="table"
          :categories="categories"
          @onUpdate="redirectToUpdateCategory"
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
import TableCategories from './components/TableCategories.vue'
import CardGroupCategories from './components/CardGroupCategories.vue'

export default {
  components: {
    TableCategories,
    CardGroupCategories,
  },
  data() {
    return {
      typeGridView: '',

      table: {
        fields: Fields,
      },

      categories: {
        data: [],
      },
    }
  },
  async created() {
    await this.getGridView()
    await this.getCategories()
  },
  methods: {
    ...mapActions({
      A_GET_CATEGORIES: 'sharedCategory/A_GET_CATEGORIES',
      A_DELETE_CATEGORY: 'sharedCategory/A_DELETE_CATEGORY',
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
    redirectToRegisterCategory() {
      this.$router.push({
        name: 'app-customer-categories-register',
      })
    },
    redirectToUpdateCategory(id) {
      this.$router.push({
        name: 'app-customer-categories-update',
        params: { id },
      })
    },
    async getCategories() {
      try {
        this.addPreloader()

        const response = await this.A_GET_CATEGORIES({
          page: 0,
          size: 100,
        })

        if (response.status === 200) {
          this.categories.data = response.data
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

          const response = await this.A_DELETE_CATEGORY(id)

          if (response.status === 200) {
            this.showGenericToast({ type: 'delete' })
            await this.getCategories()
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
