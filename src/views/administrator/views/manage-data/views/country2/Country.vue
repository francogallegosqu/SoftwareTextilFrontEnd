<template>
  <div>
    <t-general-title :title="'País'" />
    <b-row >
      <b-col cols="12" sm="12" md="5" lg="5" xl="5">
        <validation-observer ref="form">
          <b-row >
            <t-register
              :isAvailable="false"
              :nameTitle="'País'"
              :formRegister="form"
              @validationFormRegister="validationFormRegister"
            />
          </b-row>
        </validation-observer>
      </b-col>
      <b-col cols="12" sm="12" md="7" lg="7" xl="7">
        <t-pagination-table :items="myProvider" :paginate="paginate">
          <b-table
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
              <div class="d-flex justify-content-center">
                <feather-icon
                  size="15"
                  title="Actualizar"
                  icon="SettingsIcon"
                  class="mr-1"
                  @click="openModal(data.item.idCountry)"
                />
                <feather-icon
                  size="15"
                  class="text-danger"
                  title="Borrar"
                  icon="Trash2Icon"
                />
              </div>
            </template>
          </b-table>
        </t-pagination-table>
      </b-col>
    </b-row>
    <t-update 
        v-if="isUpdate"
        :isUpdate="isUpdate"
        :nameTitle="'País'"
        :formUpdate="formUpdate"
        @validationFormUpdate="validationFormUpdate"
        @closeModal="closeModal"
    />
  </div>
</template>

<script>
import TRegister from "../../commons/TRegister.vue";
import TUpdate from "../../commons/TUpdate.vue";
import TGeneralTitle from "../../commons/TGeneralTitle.vue";
import TPaginationTable from "../../commons/TPaginationTable.vue";
import CountryService from "./services/country.service";
import fields from "./data/country.fields";

export default {
  components: {
    TRegister,
    TGeneralTitle,
    TPaginationTable,
    TUpdate,
    
  },
  data() {
    return {
      form: {},
      formUpdate:{},
      paginate: {
        currentPage: 1,
        perPage: 5,
        totalData: 0,
      },
      fields: fields,
      index: 0,
      isBusy: false,
      isUpdate:false,
      idItem:'',
    };
  },
  methods: {
    validationFormRegister() {
      this.$refs.form.validate().then(async (success) => {
        if (success) {
          try {
            const params = {
              ...this.form,
            };
            const response = await CountryService.createCountry(params);
            this.showSuccessSwal();
          } catch (error) {
            this.showErrorSwal();
            console.log("[error]=>", error);
          }
        }
      });
    },
    validationFormUpdate(){
        console.log("[update]")
    },
    openModal(id){
        this.idItem = id
        this.isUpdate = true
    },
    closeModal(){
        this.isUpdate
    },
    async myProvider(ctx) {
      try {
        this.isBusy = true;
        const params = `page/${ctx.currentPage}?sortField=idCountry&sortDir=asc&pageSize=${ctx.perPage}`;
        const items = await CountryService.listCountry(params);
        const itemsValue = items[Object.keys(items)[0]];
        this.paginate.totalData = itemsValue?.totalElements;
        return itemsValue?.content || [];
      } catch (error) {
        return [];
      } finally {
        this.isBusy = false;
      }
    },
  },
};
</script>