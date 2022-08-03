<template>
  <div>
    <t-general-title :title="'Ciudad'" />
    <b-row class="match-height">
      <!-- Register -->
      <b-col
        cols="12"
        sm="12"
        md="5"
        lg="5"
        xl="5"
      >
        <validation-observer ref="formSendRegisterC">
          <b-row>
            <t-register
              :is-available="true"
              :name-title="'Ciudad'"
              :form-register="formRegister"
              :options-register="optionsRegister"
              :name-label-register="'nameDepartment'"
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
        <t-pagination-table :paginate="paginate">
          <b-table
            ref="refListCity"
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
                  @click="deleteCity(data.item)"
                />
              </t-actions>
            </template>
          </b-table>
        </t-pagination-table>
      </b-col>
    </b-row>
    <!-- Update -->
    <validation-observer ref="formSendUpdateCi">
      <t-update
        v-if="isUpdate"
        :is-update="isUpdate"
        :name-title="'Departamento'"
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
import CityService from './services/city.service'
import fields from './data/city.fields'

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
        value: '',
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
      optionsRegister: [],
    }
  },
  async created() {
    this.optionsRegister = await this.listDepartment()
  },
  methods: {
    validationFormRegister() {
      this.$refs.formSendRegisterC.validate().then(async success => {
        if (success) {
          try {
            const params = {
              nameCity: this.formRegister.name,
              idDepartment: this.formRegister.value.idDepartment,
            }
            await CityService.createCity(params)
            this.showSuccessSwal()
            this.$refs.refListCity.refresh()
          } catch (error) {
            this.showErrorSwal()
            console.log('[error]=>', error)
          }
        }
      })
    },
    validationFormUpdate() {
      this.$refs.formSendUpdateCi.validate().then(async success => {
        if (success) {
          try {
            const params = {
              idCity: this.formUpdate.id,
              nameCity: this.formUpdate.name,
              idDepartment: '',
            }
            await CityService.updateCity(
              this.formUpdate.id,
              params,
            )
            this.showSuccessSwal()
            this.closeModal()
            this.$refs.refListCity.refresh()
          } catch (error) {
            this.showErrorSwal()
            console.log('[error]=>', error)
          }
        }
      })
    },
    async deleteCity(item) {
      try {
        const result = await this.showQuestionSwal('Eliminar')
        if (result.value) {
          const id = item.idCity
          await CityService.deleteCity(id)
          this.showSuccessSwal()
          this.closeModal()
          this.$refs.refListCity.refresh()
        }
      } catch (error) {
        this.showErrorSwal()
        console.log('[error]=>', error)
      }
    },
    async listDepartment() {
      try {
        const params = 'page=0&size=100&sortDir=asc&sort=idDepartment'
        const items = await CityService.listDepartment(params)
        return items || []
      } catch (error) {
        console.log('[error]=>', error)
        return []
      }
    },
    openModal(item) {
      this.formUpdate.id = item?.idCity
      this.formUpdate.name = item?.nameCity
      this.isUpdate = true
    },
    closeModal() {
      this.isUpdate = false
      this.formUpdate = { id: '', name: '' }
    },
    async myProvider(ctx) {
      try {
        this.isBusy = true
        const params = `page/${ctx.currentPage}?sortField=idCity&sortDir=asc&pageSize=${ctx.perPage}`
        const items = await CityService.listCity(params)
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
