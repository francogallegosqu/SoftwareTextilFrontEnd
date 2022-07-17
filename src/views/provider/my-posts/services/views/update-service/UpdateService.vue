<template>
  <div>
    <header-slot></header-slot>
    <b-card>
      <b-container>
        <h3 class="mt-1"><b> ¿Cuales son los datos de su Servicio? </b></h3>

        <ValidationObserver ref="form">
          <b-row class="mt-2">
            <b-col cols="6">
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="Ponle un titulo"
                  :state="errors.length > 0 ? false : null"
                >
                  <b-form-input
                    v-model="form.nameService"
                    :state="errors.length > 0 ? false : null"
                  ></b-form-input>
                </b-form-group>
              </ValidationProvider>
            </b-col>
            <b-col cols="6">
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="Ponle un precio (Soles)"
                  :state="errors.length > 0 ? false : null"
                >
                  <b-form-input
                    type="number"
                    v-model="form.priceService"
                    :state="errors.length > 0 ? false : null"
                  ></b-form-input>
                </b-form-group>
              </ValidationProvider>
            </b-col>
            <b-col cols="12">
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="Descríbelo a detalle"
                  :state="errors.length > 0 ? false : null"
                >
                  <b-form-textarea
                    v-model="form.descriptionService"
                    :state="errors.length > 0 ? false : null"
                  ></b-form-textarea>
                </b-form-group>
              </ValidationProvider>
            </b-col>
          </b-row>
        </ValidationObserver>
      </b-container>

      <b-container class="mt-1 text-center">
        <b-button variant="secondary" class="mr-1" @click="returnPage">
          Cancelar
        </b-button>
        <b-button submit variant="primary" @click="updateService">
          <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
          Grabar
        </b-button>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "@validations";

export default {
  props: {},
  data() {
    return {
      // Validations
      required,

      form: {
        nameService: "",
        priceService: "",
        descriptionService: "",
        created_by: "",
        created_at: new Date().toString(),
      },
    };
  },
  computed: {
    fromRoute() {
      return this.$route.params.from;
    },
    serviceId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      A_GET_SERVICE_BY_ID: "provMyPostsServices/A_GET_SERVICE_BY_ID",
      A_UPDATE_SERVICE: "provMyPostsServices/A_UPDATE_SERVICE",
    }),
    async getService() {
      try {
        this.addPreloader();

        const response = await this.A_GET_SERVICE_BY_ID(this.serviceId);

        if (response.status == 200) {
          this.form = response.data;
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    async updateService() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          this.addPreloader();

          const response = await this.A_UPDATE_SERVICE({
            id: this.serviceId,
            body: this.form,
          });

          if (response.status == 200) {
            this.showGenericToast({ type: "update" });

            this.returnPage();
          }

          this.removePreloader();
        }
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    returnPage() {
      if (this.fromRoute == "d") {
        return this.$router.push({
          name: "app-provider-my-posts-services-details",
          params: {
            id: this.serviceId,
          },
        });
      }

      this.$router.push({
        name: "app-provider-my-posts-services",
      });
    },
  },
  async created() {
    await this.getService();
  },
};
</script>

<style>
</style>