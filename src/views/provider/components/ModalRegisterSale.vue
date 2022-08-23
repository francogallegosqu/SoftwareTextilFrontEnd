<template>
  <b-modal
    v-model="show"
    no-close-on-backdrop
    no-close-on-esc
    title="Registrar Venta"
    title-tag="h3"
    size="lg"
    @hide="close"
    hide-footer
    scrollable
  >
    <br />

    <ValidationObserver ref="form">
      <b-container>
        <h4>Datos del la venta</h4>
        <hr />
        <b-row>
          <b-col md="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Tipo de documento"
                :state="errors.length > 0 ? false : null"
              >
                <v-select
                  :options="paymentDocuments"
                  :reduce="(el) => el.value"
                  v-model="form.documentTypeId"
                  :state="errors.length > 0 ? false : null"
                ></v-select>
                <small v-if="errors[0]" class="text-center">
                  El campo es requerido
                </small>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col md="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Tipo de pago"
                :state="errors.lenght > 0 ? false : null"
              >
                <v-select
                  :options="paymentTypes"
                  :reduce="(el) => el.value"
                  v-model="form.payments[0].paymentTypeId"
                  :state="errors.lenght > 0 ? false : null"
                ></v-select>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col md="6">
            <b-form-group label="Precio unitario">
              <b-form-input
                v-model="form.details[0].netUnitValue"
                readonly
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Cantidad"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  v-model="form.details[0].quantity"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col md="6">
            <b-form-group label="Total">
              <b-form-input
                v-model="form.payments[0].amount"
                readonly
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <br />
        <h4>Datos del cliente</h4>
        <hr />
        <b-row>
          <b-col md="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Nro. de documento"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  v-model="form.client.code"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col md="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Nombres"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  v-model="form.client.firstName"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col md="6">
            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Apellidos"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  v-model="form.client.lastName"
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col md="6">
            <b-form-group label="Ciudad">
              <b-form-input v-model="form.client.city"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Distrito">
              <b-form-input v-model="form.client.district"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Dirección">
              <b-form-input v-model="form.client.address"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group label="Email">
              <b-form-input v-model="form.client.email"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
    </ValidationObserver>

    <br />

    <b-container class="mt-1 text-center">
      <b-button variant="secondary" class="mr-1" @click="close(false)">
        Cancelar
      </b-button>
      <b-button submit variant="primary" @click="makePayment">
        <feather-icon icon="SaveIcon" class="mr-50"></feather-icon>
        Guardar
      </b-button>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ValidationObserver } from "vee-validate";

// Components

export default {
  props: {
    unitPrice: {
      type: Number,
    },
  },
  components: {},
  data() {
    return {
      show: false,

      paymentTypes: [],
      paymentDocuments: [],

      form: {
        documentTypeId: "",
        emissionDate: 1587438598,
        expirationDate: 1587438598,
        declare: 1,
        client: {
          code: 20426110341,
          firstName: "NICOLAS",
          lastName: "DEMO",
          city: "LIMA",
          district: "MIRADEMO",
          address: "MALEDEMO",
          email: "demo_o@mail.cl",
        },
        details: [
          {
            comment: 23,
            netUnitValue: this.unitPrice,
            quantity: "",
            taxId: "[1]",
            discount: 0,
          },
        ],
        payments: [
          {
            paymentTypeId: "",
            amount: "",
            recordDate: 1586962457,
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  watch: {
    "form.details[0].quantity"(newValue) {
      if (newValue != "") {
        this.form.payments[0].amount =
          this.form.details[0].netUnitValue * newValue;
      } else {
        this.form.payments[0].amount = "";
      }
    },
  },
  methods: {
    ...mapActions({
      A_GET_PAYMENT_TYPES: "paymentStore/A_GET_PAYMENT_TYPES",
      A_GET_PAYMENT_DOCUMENTS: "paymentStore/A_GET_PAYMENT_DOCUMENTS",
      A_MAKE_PAYMENT: "paymentStore/A_MAKE_PAYMENT",
    }),
    async getPaymentTypes() {
      try {
        this.addPreloader();

        const response = await this.A_GET_PAYMENT_TYPES();

        if (response.status == 200) {
          this.paymentTypes = response.data.items.map((item) => ({
            value: item.id,
            label: item.name,
          }));
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });
        throw error;
      }
    },
    async getPaymentDocuments() {
      try {
        this.addPreloader();

        const response = await this.A_GET_PAYMENT_DOCUMENTS();

        if (response.status == 200) {
          console.log(response.data.items);

          this.paymentDocuments = response.data.items.map((item) => ({
            value: item.id,
            label: item.name,
          }));
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        this.showErrorToast({ text: error });
        throw error;
      }
    },
    async makePayment() {
      try {
        const validate = await this.$refs.form.validate();

        if (validate) {
          const confirm = await this.showGenericConfirmSwal({});

          if (confirm.value) {
            this.addPreloader();

            const response = await this.A_MAKE_PAYMENT(this.form);

            if (response.status == 201) {
              this.showGenericToast({ type: "register" });
              this.close(true);
            }

            this.removePreloader();
          }
        }
      } catch (error) {
        throw error;
      }
    },
    close(saved = false) {
      this.$emit("onClose", saved);
    },
  },
  async created() {
    await Promise.all([this.getPaymentTypes(), this.getPaymentDocuments()]);
    this.show = true;
  },
};
</script>

<style>
</style>