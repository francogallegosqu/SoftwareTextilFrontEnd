<template>
  <div>
    <t-general-title :title="'País'" />
    <b-row>
      <!-- Register -->
      <b-col
        cols="12"
        sm="12"
        md="5"
        lg="5"
        xl="5"
      >
        <validation-observer ref="formSendRegister">
          <b-row>
            <t-register
              :is-available="false"
              :name-title="'País'"
              :form-register="formRegister"
              @validationFormRegister="validationFormRegister"
            />
          </b-row>
        </validation-observer>
      </b-col>
      <!-- Table -->
      <b-col
        cols="12"
        sm="12"
        md="7"
        lg="7"
        xl="7"
      >
        <t-pagination-table
          :items="myProvider"
          :paginate="paginate"
        >
          <b-table
            ref="refListCountry"
            slot="table"
            sticky-header="40vh"
            responsive="sm"
            :items="myProvider"
            :fields="fields"
            :current-page="paginate.currentPage"
            :per-page="paginate.perPage"
            :busy.sync="isBusy"
            :hover="true"
          >
            <template #table-busy>
              <div class="text-center text-primary my-2">
                <b-spinner class="align-middle mr-1" />
                <strong>Loading ...</strong>
              </div>
            </template>
            <template #cell(actions)="data">
              <t-actions>
                <feather-icon
                  slot="update"
                  icon="SettingsIcon"
                  class="text-warning"
                  @click="openModal(data.item)"
                />
                <feather-icon
                  slot="delete"
                  icon="Trash2Icon"
                  class="text-danger"
                  @click="deleteCountry(data.item)"
                />
              </t-actions>
            </template>
          </b-table>
        </t-pagination-table>
      </b-col>
    </b-row>
    <!-- Update -->
    <validation-observer ref="formSendUpdate">
      <t-update
        v-if="isUpdate"
        :is-update="isUpdate"
        :name-title="'País'"
        :form-update="formUpdate"
        @validationFormUpdate="validationFormUpdate"
        @closeModal="closeModal"
      />
    </validation-observer>
  </div>
</template>

<script>
import TRegister from '../../commons/TRegister.vue'
import TUpdate from '../../commons/TUpdate.vue'
import TGeneralTitle from '../../commons/TGeneralTitle.vue'
import TPaginationTable from '../../commons/TPaginationTable.vue'
import TActions from '../../commons/TActions.vue'
import CountryService from './services/country.service'
import fields from './data/country.fields'

export default {
  components: {
    TRegister,
    TGeneralTitle,
    TPaginationTable,
    TUpdate,
    TActions,
  },
  data() {
    return {
      formRegister: {
        name: '',
      },
      formUpdate: {
        id: '',
        name: '',
      },
      paginate: {
        currentPage: 1,
        perPage: 5,
        totalData: 0,
      },
      fields,
      isBusy: false,
      isUpdate: false,
    }
  },
  methods: {
    validationFormRegister() {
      this.$refs.formSendRegister.validate().then(async success => {
        if (success) {
          try {
            const params = {
              nameCountry: this.formRegister.name,
            }
            await CountryService.createCountry(params)
            this.showSuccessSwal()
            this.$refs.refListCountry.refresh()
          } catch (error) {
            this.showErrorSwal()
            console.log('[error]=>', error)
          }
        }
      })
    },
    validationFormUpdate() {
      this.$refs.formSendUpdate.validate().then(async success => {
        if (success) {
          try {
            const params = {
              idCountry: this.formUpdate.id,
              nameCountry: this.formUpdate.name,
            }
            await CountryService.updateCountry(
              this.formUpdate.id,
              params,
            )
            this.showSuccessSwal()
            this.closeModal()
            this.$refs.refListCountry.refresh()
          } catch (error) {
            this.showErrorSwal()
            console.log('[error]=>', error)
          }
        }
      })
    },
    async deleteCountry(item) {
      try {
        const result = await this.showQuestionSwal('Eliminar')
        if (result.value) {
          const id = item.idCountry
          await CountryService.deleteCountry(id)
          this.showSuccessSwal()
          this.closeModal()
          this.$refs.refListCountry.refresh()
        }
      } catch (error) {
        this.showErrorSwal()
        console.log('[error]=>', error)
      }
    },
    openModal(item) {
      this.formUpdate.id = item?.idCountry
      this.formUpdate.name = item?.nameCountry
      this.isUpdate = true
    },
    closeModal() {
      this.isUpdate = false
      this.formUpdate = { id: '', name: '' }
    },
    async myProvider(ctx) {
      try {
        this.isBusy = true
        const params = `page/${ctx.currentPage}?sortField=idCountry&sortDir=asc&pageSize=${ctx.perPage}`
        const items = await CountryService.listCountry(params)
        const itemsValue = items[Object.keys(items)[0]]
        this.paginate.totalData = itemsValue?.totalElements
        return itemsValue?.content || []
      } catch (error) {
        return []
      } finally {
        this.isBusy = false
      }
    },
  },
}
</script>
