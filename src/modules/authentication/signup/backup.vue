<template>
  <div>
    <div id="signup-page">
      <div class="header">
        <div class="logo">
          <h1>APP_LOGO</h1>
        </div>

        <div class="title">
          <h1>Registrate en nuestra App</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div class="form">
        <ValidationObserver ref="firstForm">
          <div class="first-part" v-if="sectionForm == 1">
            <ValidationProvider rules="required" #default="{ errors }">
              <div
                class="form-label-group"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  id="floating-label1"
                  placeholder="Razón social"
                  :state="errors.length > 0 ? false : null"
                />
                <label for="floating-label1">Razón Social</label>
              </div>
            </ValidationProvider>

            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Tipo de usuario"
                v-slot="{ ariaDescribedby }"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-radio
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="A"
                >
                  Option A
                </b-form-radio>
                <b-form-radio
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="B"
                >
                  Option B
                </b-form-radio>
              </b-form-group>
            </ValidationProvider>

            <b-input-group>
              <b-form-input placeholder="Tipo de documento" />
              <b-input-group-append>
                <b-dropdown text="RUC" variant="outline-primary" right>
                  <b-dropdown-item>RUC </b-dropdown-item>
                  <b-dropdown-item>DNI</b-dropdown-item>
                </b-dropdown>
              </b-input-group-append>
            </b-input-group>

            <ValidationProvider rules="required" #default="{ errors }">
              <div
                class="form-label-group"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  id="floating-label1"
                  placeholder="Razón social"
                  :state="errors.length > 0 ? false : null"
                />
                <label for="floating-label1">Razón Social</label>
              </div>
            </ValidationProvider>

            <ValidationProvider rules="required" #default="{ errors }">
              <div
                class="form-label-group"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  id="floating-label1"
                  placeholder="Razón social"
                  :state="errors.length > 0 ? false : null"
                />
                <label for="floating-label1">Razón Social</label>
              </div>
            </ValidationProvider>

            <ValidationProvider rules="required" #default="{ errors }">
              <div
                class="form-label-group"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  id="floating-label1"
                  placeholder="Razón social"
                  :state="errors.length > 0 ? false : null"
                />
                <label for="floating-label1">Razón Social</label>
              </div>
            </ValidationProvider>

            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Tipo de documento"
                :state="errors.length > 0 ? false : null"
              >
                <v-select></v-select>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Numero de dni"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Correo"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider rules="required" #default="{ errors }">
              <b-form-group
                label="Contraseña"
                :state="errors.length > 0 ? false : null"
              >
                <b-form-input
                  :state="errors.length > 0 ? false : null"
                ></b-form-input>
              </b-form-group>
            </ValidationProvider>
          </div>
        </ValidationObserver>

     

        <button
          class="submit-button"
          v-if="sectionForm == 2"
          @click="sectionForm = 1"
        >
          Anterior
        </button>

        <button
          class="submit-button"
          v-if="sectionForm == 1"
          @click="passToSecondForm"
        >
          Continuar
        </button>

        <button class="submit-button" v-if="sectionForm == 2" @click="submit">
          Registrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import vSelect from "vue-select";
import { required } from "@validations";

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      // Validations
      required,

      sectionForm: 1,

      form: {
        email: "",
        password: "",
        business_name: "",
        type_document: "",
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
    };
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
    }),
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
        const validate = await this.$refs.form.validate();

        if (validate) {
        }
      } catch (error) {
        throw error;
      }
    },
  },
  async created() {
    await this.getCountries();
  },
};
</script>

<style lang="scss">
#signup-page {
  .header {
    width: 100%;
    height: 200px;
    text-align: center;

    .logo {
      position: absolute;
      top: 30px;
      left: 100px;
    }

    .title {
      padding-top: 80px;
    }
  }

  .form {
    width: 400px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>