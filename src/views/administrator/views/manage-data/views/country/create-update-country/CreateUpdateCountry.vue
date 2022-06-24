<template>


    <b-row class=" todo d-flex justify-content-center align-item-end">
    <b-col cols="10" sm="6" md="5" lg="5" xl="4">
      <b-row>
        <b-col cols="12" class="d-flex justify-content-center">
          <b-card class="card-create-city " >
            <h1 class="title-card-city p-1 mb-4 text-white text-center">Registra Tu nuevo Pais</h1>
            <validation-observer ref="formCity">
            <b-form>
              <b-row>
                <!-- nameCity -->
                <b-col cols="12">
                  <b-form-group label="Ciudad" label-for="nameCity">
                    <validation-provider
                      #default="{ errors }"
                      name="NameCity"
                      rules="required"
                    >
                      <b-form-input
                        id="nameCity"
                        v-model="username"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Ciudad"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <!-- Id Department -->
                <b-col cols="12">
                  <b-form-group label="Departamento" label-for="department">
                    <validation-provider
                      #default="{ errors }"
                      name="Department"
                      rules="required"
                    >
                      <b-form-input
                        id="department"
                        v-model="passValue"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Departamento"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <!-- login button -->
                <b-col cols="12" class="d-flex justify-content-end">
                  <b-button
                    variant="primary"
                    type="submit"
                    @click.prevent="validationForm"
                  >
                    Crear
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </validation-observer>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="10" sm="6" md="5" lg="5" xl="4">
      <b-row>
        <b-col cols="12" class="d-flex justify-content-center">
          <b-card class="card-create-city " >
            <h1 class="title-card-city-update p-1 mb-4 text-white text-center">Actualiza Tu País</h1>
            <validation-observer ref="formCity">
            <b-form>
              <b-row>
                <!-- nameCity -->
                <b-col cols="12">
                  <b-form-group label="Ciudad" label-for="nameCity">
                    <validation-provider
                      #default="{ errors }"
                      name="NameCity"
                      rules="required"
                    >
                      <b-form-input
                        id="nameCity"
                        v-model="username"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Ciudad"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <!-- Id Department -->
                <b-col cols="12">
                  <b-form-group label="Departamento" label-for="department">
                    <validation-provider
                      #default="{ errors }"
                      name="Department"
                      rules="required"
                    >
                      <b-form-input
                        id="department"
                        v-model="passValue"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Departamento"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>

                <!-- login button -->
                <b-col cols="12" class="d-flex justify-content-end">
                  <b-button
                  
                   variant="warning"
                    type="submit"
                    @click.prevent="validationForm"
                  >
                    Actualizar
                  </b-button>
                  <!-- <div class="bg-important">
                    hola
                  </div> -->
                </b-col>
              </b-row>
            </b-form>
          </validation-observer>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-row>


</template>

<script>
export default {
  data() {
    return {
      passValue: '',
      username: ''
    }
  },
  methods: {
    validationForm() {
      this.$refs.formCity.validate().then((success) => {
        if (success) {
          // eslint-disable-next-line
          alert('login successfully')
        }
      })
    }
  }
}
</script>

<style scoped>
/* .card{
    min-height:120%
} */
.title-card-city{
  background-color: #3e6552;
  border-radius: 5px;
}
.title-card-city-update{
    background-color: #fca130;
    border-radius: 5px;
}

.todo{
    transition: all 0.3s ease-in-out
}
</style>
