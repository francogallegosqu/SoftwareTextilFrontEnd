<template>
  <div>
    <t-general-title :title="'Rol'" />
    <b-row>
      <!-- Register -->
      <b-col
        cols="12"
        sm="12"
        md="5"
        lg="5"
        xl="5"
      >
        <validation-observer ref="formSendRegisterR">
          <b-row>
            <t-register
              :is-available="false"
              :name-title="'Rol'"
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
        <t-pagination-table :paginate="paginate">
          <b-table
            ref="refListRol"
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
                  @click="deleteRol(data.item)"
                />
              </t-actions>
            </template>
          </b-table>
        </t-pagination-table>
      </b-col>
    </b-row>
    <!-- Update -->
    <validation-observer ref="formSendUpdateR">
      <t-update
        v-if="isUpdate"
        :is-update="isUpdate"
        :name-title="'Rol'"
        :form-update="formUpdate"
        @validationFormUpdate="validationFormUpdate"
        @closeModal="closeModal"
      />
    </validation-observer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TRegister from '../../commons/TRegister.vue'
import TUpdate from '../../commons/TUpdate.vue'
import TGeneralTitle from '../../commons/TGeneralTitle.vue'
import TPaginationTable from '../../commons/TPaginationTable.vue'
import TActions from '../../commons/TActions.vue'
import RolService from './services/rol.service'
import fields from './data/rol.fields'

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
  computed: {
    ...mapGetters({
      currentUser: 'authentication/currentUser',
    }),
  },
  methods: {
    validationFormRegister() {
      this.$refs.formSendRegisterR.validate().then(async success => {
        if (success) {
          try {
            const params = {
              role_name: this.formRegister.name,
              created_by: this.currentUser.idUsuario,
            }
            await RolService.createRol(params)
            this.showSuccessSwal()
            this.$refs.refListRol.refresh()
          } catch (error) {
            this.showErrorSwal()
            console.log('[error]=>', error)
          }
        }
      })
    },
    validationFormUpdate() {
      this.$refs.formSendUpdateR.validate().then(async success => {
        if (success) {
          try {
            const params = {
              roleId: this.formUpdate.id,
              role_name: this.formUpdate.name,
              created_by: this.currentUser.idUsuario,
            }
            await RolService.updateRol(
              this.formUpdate.id,
              params,
            )
            this.showSuccessSwal()
            this.closeModal()
            this.$refs.refListRol.refresh()
          } catch (error) {
            this.showErrorSwal()
            console.log('[error]=>', error)
          }
        }
      })
    },
    async deleteRol(item) {
      try {
        const result = await this.showQuestionSwal('Eliminar')
        if (result.value) {
          const id = item.idRole
          await RolService.deleteRol(id)
          this.showSuccessSwal()
          this.closeModal()
          this.$refs.refListRol.refresh()
        }
      } catch (error) {
        this.showErrorSwal()
        console.log('[error]=>', error)
      }
    },
    openModal(item) {
      this.formUpdate.id = item?.idRole
      this.formUpdate.name = item?.role_name
      this.isUpdate = true
    },
    closeModal() {
      this.isUpdate = false
      this.formUpdate = { id: '', name: '' }
    },
    async myProvider(ctx) {
      try {
        this.isBusy = true
        const params = `page/${ctx.currentPage}?sortField=idRole&sortDir=asc&pageSize=${ctx.perPage}`
        const items = await RolService.listRol(params)
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
