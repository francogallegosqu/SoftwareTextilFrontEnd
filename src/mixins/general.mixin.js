import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
    methods: {
        showGenericToast({
            variant = "success",
            position = "top-right",
            title = "Genial",
            icon = "CheckIcon",
            type = null,
            error = false,
            text = "",
        }) {
            let message = "";
            type != null ? icon = !error ? "CheckIcon" : "XIcon" : icon;


            if (type == "register") {
                message = "registró";
            } else if (type == "update") {
                message = "actualizó"
            } else if (type == "delete") {
                message = "eliminó";
            }

            if (type != null) {
                text = text == "" ? !error ? "Se " + message + " correctamente" : "No se " + message + ", intentelo nuevamente por favor" : text
            }

            this.$toast(
                {
                    component: ToastificationContent,
                    props: {
                        title,
                        icon,
                        text,
                        variant,
                    },
                },
                {
                    position,
                },
            )
        },

        showSuccessSwal(){
            this.$swal({
                icon:"success",
                title:"Operación exitosa!",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                confirmButton: 'btn btn-primary',
                },
                buttonsStyling: false,
            })
        },

        showErrorSwal(){
            this.$swal({
                title: 'Ups...!!',
                text: 'Al parecer algo salió mal!, Intenta de nuevo por favor.',
                icon: 'error',
                customClass: {
                  confirmButton: 'btn btn-danger',
                },
                buttonsStyling: false,
              })
        },

        addPreloader() {
            this.$store.commit('app/SET_LOADING', true)
        },

        removePreloader() {
            this.$store.commit("app/SET_LOADING", false);
        },
    }
}