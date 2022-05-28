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

        showGenericConfirmSwal({
            title = "Estás seguro?",
            text = "¡No podrás revertir esto!",
        }) {
            return this.$swal({
                icon: "question",
                title: title,
                text: text,
                imageWidth: 70,
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Confirmar",
                cancelButtonText: "Cancelar",
                customClass: {
                    confirmButton: "btn btn-primary mr-1",
                    cancelButton: "btn btn-outline-danger  ",
                },
            });
        },

        addPreloader() {
            this.$store.commit('app/SET_LOADING', true)
        },

        removePreloader() {
            this.$store.commit("app/SET_LOADING", false);
        },
    }
}