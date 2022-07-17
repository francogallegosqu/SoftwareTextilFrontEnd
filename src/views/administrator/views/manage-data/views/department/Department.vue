<template>
    <div>
        <t-general-title :title="'Departamento'" />
        <b-row>
            <!-- Register -->
            <b-col cols="12" sm="12" md="5" lg="5" xl="5">
                <validation-observer ref="formSendRegisterD">
                    <b-row>
                        <t-register :isAvailable="true" :nameTitle="'Departamento'" :formRegister="formRegister"
                            :optionsRegister="optionsRegister" :nameLabelRegister="'nameCountry'"
                            @validationFormRegister="validationFormRegister" />
                    </b-row>
                </validation-observer>
            </b-col>
            <!-- Table -->
            <b-col cols="12" sm="12" md="7" lg="7" xl="7">
                <t-pagination-table :paginate="paginate">
                    <b-table ref="refListDepartment" slot="table" sticky-header="40vh" responsive="sm"
                        :items="myProvider" :fields="fields" :current-page="paginate.currentPage"
                        :per-page="paginate.perPage" :busy.sync="isBusy" :hover="true">
                        <template #table-busy>
                            <div class="text-center text-primary my-2">
                                <b-spinner class="align-middle mr-1" />
                                <strong>Loading ...</strong>
                            </div>
                        </template>
                        <template #cell(actions)="data">
                            <t-actions>
                                <feather-icon icon="SettingsIcon"  class="text-warning" slot="update"
                                        @click="openModal(data.item)" />
                                <feather-icon icon="Trash2Icon"  class="text-danger"  slot="delete" 
                                        @click="deleteDepartment(data.item)"/>
                            </t-actions>
                        </template>
                    </b-table>
                </t-pagination-table>
            </b-col>
        </b-row>
        <!-- Update -->
        <validation-observer ref="formSendUpdateD">
            <t-update v-if="isUpdate" :isUpdate="isUpdate" :nameTitle="'Departamento'" :formUpdate="formUpdate"
                @validationFormUpdate="validationFormUpdate" @closeModal="closeModal" />
        </validation-observer>
    </div>
</template>

<script>
import TRegister from "../../commons/TRegister.vue"
import TUpdate from "../../commons/TUpdate.vue"
import TGeneralTitle from "../../commons/TGeneralTitle.vue"
import TPaginationTable from "../../commons/TPaginationTable.vue"
import TActions from "../../commons/TActions.vue"
import DepartmentService from "./services/department.service"
import fields from "./data/department.fields"

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
                name: "",
                value: ""
            },
            formUpdate: {
                id: "",
                name: "",
            },
            paginate: {
                currentPage: 1,
                perPage: 5,
                totalData: 0,
            },
            fields: fields,
            isBusy: false,
            isUpdate: false,
            optionsRegister: [],
        }
    },
    methods: {
        validationFormRegister() {
            this.$refs.formSendRegisterD.validate().then(async (success) => {
                if (success) {
                    try {
                        const params = {
                            nameDepartment: this.formRegister.name,
                            idCountry: this.formRegister.value.idCountry
                        }
                        const response = await DepartmentService.createDepartment(params)
                        this.showSuccessSwal()
                        this.$refs.refListDepartment.refresh()
                    } catch (error) {
                        this.showErrorSwal()
                        console.log("[error]=>", error)
                    }
                }
            })
        },
        validationFormUpdate() {
            this.$refs.formSendUpdateD.validate().then(async (success) => {
                if (success) {
                    try {
                        const params = {
                            idDepartment: this.formUpdate.id,
                            nameDepartment: this.formUpdate.name,
                            idCountry:''
                        }
                        const response = await DepartmentService.updateDepartment(
                            this.formUpdate.id,
                            params
                        )
                        this.showSuccessSwal()
                        this.closeModal()
                        this.$refs.refListDepartment.refresh()
                    } catch (error) {
                        this.showErrorSwal()
                        console.log("[error]=>", error)
                    }
                }
            })
        },
        async deleteDepartment(item){
            try{
                const result = await this.showQuestionSwal("Eliminar")
                if(result.value){
                    const id = item.idDepartment
                    const response = await DepartmentService.deleteDepartment(id)
                    this.showSuccessSwal()  
                    this.closeModal()
                    this.$refs.refListDepartment.refresh()
                }
            }catch(error){
                this.showErrorSwal()
                console.log("[error]=>",error)
            }
            
        },
        async listCountry() {
            try {
                const params = "page=0&size=100&sortDir=asc&sort=idCountry"
                const items = await DepartmentService.listCountry(params)
                return items || []

            } catch (error) {
                console.log("[error]=>", error)
                return []
            }
        },
        openModal(item) {
            this.formUpdate.id = item?.idDepartment
            this.formUpdate.name = item?.nameDepartment
            this.isUpdate = true
        },
        closeModal() {
            this.isUpdate = false
            this.formUpdate = { id: "", name: "" }
        },
        async myProvider(ctx) {
            try {
                this.isBusy = true
                const params = `page/${ctx.currentPage}?sortField=idDepartment&sortDir=asc&pageSize=${ctx.perPage}`
                const items = await DepartmentService.listDepartment(params)
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
    async created() {
        this.optionsRegister = await this.listCountry()
    }
}
</script>

