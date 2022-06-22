<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
       <!-- /Brand logo-->
     <b-link :to="{ name: 'web' }" class="brand-logo">
        <logo style="width:100%"/>
      </b-link>

      <!-- Left Image-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img style="border-radius: 5px ;" fluid src="@/assets/images/profile/post-media/signIn.jpg" alt="Login V2" />
        </div>
      </b-col>
      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title class="mb-1 font-weight-bold" title-tag="h2">
            Bienvenido de Nuevo 👋
          </b-card-title>
          <b-card-text class="mb-2">
            Por favor inicia sesión con tu cuenta y empieza tu producción
          </b-card-text>

          <b-alert variant="primary" show>
            <div class="alert-body font-small-2">
              <p>
                <small class="mr-50"
                  ><span class="font-weight-bold">Client:</span>
                  inversionesroahn@gmail.com | client</small
                >
              </p>
              <p>
                <small class="mr-50"
                  ><span class="font-weight-bold">Password:</span>
                  roahn123456</small
                >
              </p>
            </div>
            <feather-icon
              v-b-tooltip.hover.left="'This is just for ACL demo purpose'"
              icon="HelpCircleIcon"
              size="18"
              class="position-absolute"
              style="top: 10; right: 10"
            />
          </b-alert>

          <!-- form -->
          <validation-observer ref="loginForm" #default="{ invalid }">
            <b-form class="auth-login-form mt-2" @submit.prevent="login">
              <!-- email -->
              <b-form-group label="Email" label-for="login-email">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false : null"
                    name="login-email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Password</label>
                  <b-link :to="{ name: 'auth-forgot-password' }">
                    <small>Forgot Password?</small>
                  </b-link>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="Password"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- checkbox -->
              <b-form-group>
                <b-form-checkbox
                  id="remember-me"
                  v-model="status"
                  name="checkbox-1"
                >
                  Recuerdame
                </b-form-checkbox>
              </b-form-group>

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="invalid"
              >
                Iniciar Sesión
              </b-button>
            </b-form>
          </validation-observer>

          <b-card-text class="text-center mt-2">
            <span>Nuevo en nuestra plataforma? </span>
            <b-link :to="{ name: 'auth-register' }">
              <span>&nbsp;Crea una cuenta</span>
            </b-link>
          </b-card-text>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import Components
import Logo from "../../../commons/logo/Logo.vue"
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  BAlert,
  VBTooltip,
} from "bootstrap-vue";
import useJwt from "@/auth/jwt/useJwt";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import { getHomeRouteForLoggedInUser } from '@/auth/utils'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from "@/store/index";
export default {
  directives: {
    "b-tooltip": VBTooltip,
  },
  components: {
    Logo,
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: "",
      password: "roahn123456",
      userEmail: "inversionesroahn@gmail.com",
      sideImg: require("@/assets/images/pages/login-v2.svg"),

      // validation rules
      required,
      email,
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then((success) => {
        if (success) {
          useJwt
            .login({
              usernameOrEmail: this.userEmail,
              password: this.password,
            })
            .then((response) => {
              let userData = response.data.user;
              const userToken = response.data.jwt;
              useJwt.setToken(userToken);
              localStorage.setItem("userData", JSON.stringify(userData));
              
              this.$store.dispatch(
                "authentication/updateCurrentUser",
                userData
              );

              this.$store.dispatch("authentication/updateToken", userToken);

              this.$router
                .replace(getHomeRouteForLoggedInUser(userData.role.role_name))
                .then(() => {
                  this.$toast({
                    component: ToastificationContent,
                    position: "top-right",
                    props: {
                      title: `Bienvenido 
                      ${userData.businessName.substr(0, 13)}${
                        userData.businessName.length > 13 ? "..." : ""
                      }`,
                      icon: "CoffeeIcon",
                      variant: "success",
                    },
                  });
                })

            })
            .catch((error) => {
              console.log(error)
            });
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
