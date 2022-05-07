<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />

        <h2 class="brand-text text-primary ml-1">LOGO</h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Register V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1 text-center"
          >
            Registrate en nuestra App
          </b-card-title>
          <b-card-text class="mb-2 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </b-card-text>

          <!-- form -->
          <ValidationObserver ref="firstForm">
            <div class="first-part" v-if="sectionForm == 1">
              <ValidationProvider #default="{ errors }" rules="required">
                <b-form-group
                  label="Razón social"
                  label-for="register-business-name"
                >
                  <b-form-input
                    v-model="form.business_name"
                    id="register-business-name"
                    name="register-business-name"
                  />
                  <small class="text-danger" v-if="errors[0]">
                    Debes ingresar tu razon social
                  </small>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider
                #default="{ errors }"
                name="Username"
                rules="required"
              >
                <b-form-group
                  label="Tipo de usuario"
                  label-for="register-user-type"
                >
                  <div class="demo-inline-spacing" style="margin-top: -15px">
                    <b-form-radio
                      v-model="form.type_user"
                      name="register-user-type"
                      value="seller"
                    >
                      <small>Consumidor</small>
                    </b-form-radio>
                    <b-form-radio
                      v-model="form.type_user"
                      name="register-user-type"
                      value="buyer"
                    >
                      <small>Proveedor</small>
                    </b-form-radio>
                  </div>
                  <small class="text-danger" v-if="errors[0]">
                    Debes seleccionar un tipo de usuario
                  </small>
                </b-form-group>
              </ValidationProvider>

              <b-form-group
                :label="
                  form.type_document == 'ruc'
                    ? 'Ruc de empresa'
                    : 'Numero de DNI'
                "
                label-for="register-document-type"
              >
                <ValidationProvider #default="{ errors }" rules="required">
                  <b-input-group>
                    <b-form-input
                      v-model="form.number_document"
                      name="register-document-type"
                    />
                    <b-input-group-append>
                      <b-form-select
                        variant="outline-primary"
                        left
                        v-model="form.type_document"
                      >
                        <b-form-select-option value="ruc">
                          RUC
                        </b-form-select-option>
                        <b-form-select-option value="dni">
                          DNI
                        </b-form-select-option>
                      </b-form-select>
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger" v-if="errors[0]">
                    El campo es requerido
                  </small>
                </ValidationProvider>
              </b-form-group>

              <b-form-group
                label="Correo electrónico"
                label-for="register-email"
              >
                <ValidationProvider
                  #default="{ errors }"
                  rules="required|email"
                >
                  <b-form-input
                    id="register-email"
                    v-model="form.email"
                    name="register-email"
                  />
                  <small class="text-danger" v-if="errors[0]">
                    Debes ingresar un correo valido
                  </small>
                </ValidationProvider>
              </b-form-group>

              <b-form-group label-for="register-password" label="Contraseña">
                <ValidationProvider #default="{ errors }" rules="required">
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="register-password"
                      v-model="form.password"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="register-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger" v-if="errors[0]">
                    Debes ingresar una contraseña valida
                  </small>
                </ValidationProvider>
              </b-form-group>
            </div>
          </ValidationObserver>

          <ValidationObserver ref="secondForm">
            <div class="second-part" v-if="sectionForm == 2">
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="Pais"
                  label-for="register-country"
                  :state="errors.length > 0 ? false : null"
                >
                  <v-select
                    name="register-country"
                    v-model="form.country"
                    :options="countries"
                    :reduce="(el) => el.value"
                    :state="errors.length > 0 ? false : null"
                  ></v-select>
                  <small class="text-danger" v-if="errors[0]">
                    Debes seleccionar un País
                  </small>
                </b-form-group>
              </ValidationProvider>
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="Departamento"
                  label-for="register-department"
                  :state="errors.length > 0 ? false : null"
                >
                  <v-select
                    name="register-department"
                    v-model="form.department"
                    :options="departments"
                    :reduce="(el) => el.value"
                    :state="errors.length > 0 ? false : null"
                  ></v-select>
                  <small class="text-danger" v-if="errors[0]">
                    Debes seleccionar un Departamento
                  </small>
                </b-form-group>
              </ValidationProvider>
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="Ciudad"
                  label-for="register-city"
                  :state="errors.length > 0 ? false : null"
                >
                  <v-select
                    name="register-city"
                    v-model="form.city"
                    :options="cities"
                    :reduce="(el) => el.value"
                    :state="errors.length > 0 ? false : null"
                  ></v-select>
                  <small class="text-danger" v-if="errors[0]">
                    Debes seleccionar una Ciudad
                  </small>
                </b-form-group>
              </ValidationProvider>
              <ValidationProvider
                :rules="districts.length > 0 ? 'required' : ''"
                #default="{ errors }"
              >
                <b-form-group
                  label="Distrito"
                  label-for="register-district"
                  :state="errors.length > 0 ? false : null"
                >
                  <v-select
                    name="register-district"
                    v-model="form.district"
                    :options="districts"
                    :reduce="(el) => el.value"
                    :state="errors.length > 0 ? false : null"
                  ></v-select>
                  <small class="text-danger" v-if="errors[0]">
                    Debes seleccionar un Distrito
                  </small>
                </b-form-group>
              </ValidationProvider>
              <ValidationProvider rules="required" #default="{ errors }">
                <b-form-group
                  label="Dirección"
                  label-for="register-address"
                  :state="errors.length > 0 ? false : null"
                >
                  <b-form-input
                    name="register-address"
                    v-model="form.address"
                    :state="errors.length > 0 ? false : null"
                  ></b-form-input>
                  <small class="text-danger" v-if="errors[0]">
                    Debes ingresar una Dirección
                  </small>
                </b-form-group>
              </ValidationProvider>
            </div>
          </ValidationObserver>

          <b-button
            variant="primary"
            block
            @click="passToSecondForm"
            v-if="sectionForm == 1"
          >
            Continuar
            <feather-icon icon="ArrowRightIcon" class="ml-50" />
          </b-button>

          <b-button
            variant="primary"
            block
            v-if="sectionForm == 2"
            @click="submit"
            :disabled="loader"
          >
            <b-spinner small class="mr-50" v-if="loader" />
            Registrar
          </b-button>

          <div class="w-100 text-center">
            <b-button
              variant="flat-secondary"
              size="sm"
              v-if="sectionForm == 2"
              @click="sectionForm = 1"
              class="mt-1"
            >
              <feather-icon icon="ArrowLeftIcon" />
              Regresar
            </b-button>
          </div>
        </b-col>
      </b-col>
      <!-- /Register-->
    </b-row>
  </div>
</template>

<script>
import VuexyLogo from "@core/layouts/components/Logo.vue";
import { mapActions } from "vuex";
import vSelect from "vue-select";

import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";

export default {
  components: {
    VuexyLogo,
    vSelect,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      sideImg: require("@/assets/images/pages/register-v2.svg"),
      // validations
      required,
      email,

      sectionForm: 1,

      form: {
        email: "",
        password: "",
        business_name: "",
        type_user: "",
        type_document: "ruc",
        number_document: "",
        country: "",
        department: "",
        city: "",
        district: "",
        address: "",
        role: "",
      },

      countries: [],
      departments: [],
      cities: [],
      districts: [],
      roles: [],

      loader: false,
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/pages/register-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  watch: {
    "form.country"(newVal) {
      this.getDepartmentsByCountry(newVal);
    },
    "form.department"(newVal) {
      this.getCitiesByDepartment(newVal);
    },
    "form.city"(newVal) {
      this.getDistrictsByCity(newVal);
    },
  },
  methods: {
    ...mapActions({
      A_GET_COUNTRIES: "location/A_GET_COUNTRIES",
      A_GET_ROLES: "roles/A_GET_ROLES",
      A_REGISTER_NEW_USER: "signup/A_REGISTER_NEW_USER",
    }),
    async getRoles() {
      try {
        const response = await this.A_GET_ROLES({
          page: 0,
          size: 15,
        });

        if (response.status == 200) {
          this.roles = response.data;
        }
      } catch (error) {
        throw error;
      }
    },
    async getCountries() {
      try {
        const response = await this.A_GET_COUNTRIES({
          page: 0,
          size: 100,
        });

        if (response.status == 200) {
          response.data.map((item) => {
            this.countries.push({
              departments: item.departaments,
              idCountry: item.idCountry,
              nameCountry: item.nameCountry,
              label: item.nameCountry,
              value: item.idCountry,
            });
          });
        }
      } catch (error) {
        throw error;
      }
    },
    getDepartmentsByCountry(idCountry) {
      this.departments = [];

      let arrDepartments = this.countries.filter(
        (item) => item.idCountry === idCountry
      )[0].departments;

      arrDepartments.map((item) => {
        this.departments.push({
          cities: item.cities,
          idDepartment: item.idDepartment,
          nameDepartment: item.nameDepartment,
          label: item.nameDepartment,
          value: item.idDepartment,
        });
      });

      this.cities = [];
      this.districts = [];
    },
    getCitiesByDepartment(idDepartment) {
      this.cities = [];

      let arrCities = this.departments.filter(
        (item) => item.idDepartment === idDepartment
      )[0].cities;

      arrCities.map((item) => {
        this.cities.push({
          districts: item.districts,
          idCity: item.idCity,
          nameCity: item.nameCity,
          label: item.nameCity,
          value: item.idCity,
        });
      });

      this.districts = [];
    },
    getDistrictsByCity(idCity) {
      this.districts = [];

      let arrDistricts = this.cities.filter((item) => item.idCity === idCity)[0]
        .districts;

      if (arrDistricts.length > 0) {
        arrDistricts.map((item) => {
          this.districts.push({
            idDistrict: item.idDistrict,
            nameDistrict: item.nameDistrict,
            label: item.nameDistrict,
            value: item.idDistrict,
          });
        });
      }
    },
    async passToSecondForm() {
      const validate = await this.$refs.firstForm.validate();

      if (validate) {
        this.sectionForm = 2;
      }
    },
    async submit() {
      try {
        this.loader = true;

        const validate = await this.$refs.secondForm.validate();

        if (validate) {
          const response = await this.A_REGISTER_NEW_USER({
            email: this.form.email,
            password: this.form.password,
            businessName: this.form.business_name,
            type_document: this.form.type_document,
            number_document: this.form.number_document,
            address: this.form.address,
            idDistrict: this.form.district,
            idRole:
              this.form.type_user == "buyer"
                ? this.roles[1].idRole
                : this.roles[2].idRole,
          });

          if (response.status == 200) {
            console.log(200);
          }

          this.loader = false;
        }
      } catch (error) {
        this.loader = false;

        throw error;
      }
    },
  },
  async created() {
    await Promise.all([this.getCountries(), this.getRoles()]);
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
