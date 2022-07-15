<template>
    <div>
        <b-row>
            <b-col cols="5">
                <validation-observer ref="form">
                    <b-row class="w-100">
                        <t-register :isAvailable="false" :nameTitle="'País'" :formRegister="form" />
                    </b-row>
                </validation-observer>
                <b-row>
                    <b-button variant="primary" type="submit" @click="validationFormRegister">
                        Crear
                    </b-button>
                </b-row>
            </b-col>
            <b-col cols="6"></b-col>
        </b-row>
    </div>
</template>

<script>
import TRegister from '../../commons/TRegister.vue'
import CountryService from './services/country.service'
export default {
    components: {
        TRegister,
    },
    data() {
        return {
            form: {

            }
        }
    },
    methods: {
        validationFormRegister() {
            this.$refs.form.validate().then(async (success) => {
                if (success) {
                    
                    try{
                        const params = {
                            ...this.form
                        }
                        const response = await CountryService.createCountry("params")
                        this.showSuccessSwal()
                        

                    }catch(error){
                        this.showErrorSwal()
                        console.log("[error]=>",error)
                    }

                }
            })
        }
    }
}
</script>