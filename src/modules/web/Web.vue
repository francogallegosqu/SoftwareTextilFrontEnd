<template>
  <div>
    <!-- NavBar -->
    <b-row
      class="header-navbar d-flex justify-content-center align-item-center"
    >
      <b-col cols="10">
        <b-navbar
          :toggleable="currentSizeDirect"
          type="light"
          class="navbar-background d-flex justify-content-between"
          sticky
        >
          <b-navbar-brand :to="{ name: 'web' }">
            <logo />
          </b-navbar-brand>
          <div v-if="isLogged">
            <user-dropdown />
          </div>
          <b-navbar-toggle v-if="!isLogged" target="navbar-toggle-collapse">
            <template #default="{ expanded }">
              <feather-icon
                class="text-success"
                v-if="expanded"
                icon="ChevronsUpIcon"
                size="25"
              />
              <feather-icon
                class="text-success"
                v-else
                icon="ChevronsDownIcon"
                size="25"
              />
            </template>
          </b-navbar-toggle>

          <b-collapse v-if="!isLogged" id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav
              class="ml-auto"
              :class="currentSizeDirect ? 'd-flex flex-column' : ''"
            >
              <b-nav-item href="#">
                <b-link class="web-button-1" @click="redirectToSignIn"
                  >Iniciar Sesión
                </b-link></b-nav-item
              >
              <b-nav-item
                ><b-link class="web-button-1" @click="redirectToSignUp">
                  Regístrate gratis
                </b-link></b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
    <!-- Home -->
    <b-row class="d-flex justify-content-center align-item-center mt-1 pt-2">
      <b-col cols="10" md="5" lg="5" xl="5" class="d-flex align-item-center">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="w-100">
            <h1 style="font-size: 3.5rem; font-weight: 700">
              Encuentra a tu próximo socio de negocios
            </h1>
            <p style="font-size: 1.2rem">
              Somos una web que busca ayudarte a encontrar proveedores y
              clientes de manera segura y gratuita haciendo crecer tu negocio.
            </p>
          </div>
          <div class="w-100">
            <b-button class="web-button" @click="redirectToSignUp"
              >Registrate ahora <feather-icon icon="ArrowUpRightIcon"
            /></b-button>
          </div>
        </div>
      </b-col>
      <b-col cols="10" md="5" lg="5" xl="5">
        <b-img src="@/assets/images/manos.png" alt="Manos" fluid />
      </b-col>
    </b-row>
    <!-- About -->
    <b-row class="d-flex justify-content-center align-item-center mt-1">
      <b-col cols="10" sm="6" md="5" lg="5" xl="5">
        <b-img src="@/assets/images/Somos.png" alt="Somos" fluid />
      </b-col>
      <b-col
        cols="10"
        sm="6"
        md="5"
        lg="5"
        xl="5"
        class="d-flex flex-column justify-content-center"
      >
        <div>
          <h2 style="font-size: 2rem">
            Quienes somos realmente <br />
            & Por qué elegirnos
          </h2>
          <p style="font-size: 1rem">
            Somos una plataforma en la cual nos enfocamos en ayudarte a
            encontrar tu proveedor o clientes con mayor interes y además de
            proveerte una administrado de tus pedido o servicios.
          </p>
          <div>
            <p>
              <feather-icon icon="CheckIcon" />
              Tu proveedor o cliente siempre esta a tiempo.
            </p>
            <p>
              <feather-icon icon="CheckIcon" />
              Te guiamos para protegerte en tu proxima compra o venta de
              servicios.
            </p>
            <p>
              <feather-icon icon="CheckIcon" />
              Estamos siempre verificando cada transacción hecha en la web.
            </p>
            <p>
              <feather-icon icon="CheckIcon" />
              100% garantizados en tu primera experiencia en la web.
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- Steps Client -->
    <b-row class="mt-2 d-flex justify-content-center">
      <b-col cols="10">
        <b-card no-body class="card-content-cards">
          <h2
            class="text-center text-white mt-2"
            style="font-size: 2rem; font-weight: 700"
          >
            ¿Cómo funciona?
          </h2>
          <h3 class="text-white text-center">Si buscas proveedores</h3>

          <b-row class="m-1 d-flex justify-content-center">
            <b-col cols="10" sm="5" md="4" lg="3" xl="3" class="mb-1">
              <b-card no-body class="sub-card-body">
                <div class="sub-card-number">01</div>
                <div :class="cardContentItem">
                  <h3>Registra tu negocio</h3>
                  <p>
                    Crea un perfil para que otros negocios puedan conocerte.
                  </p>
                </div>
              </b-card>
            </b-col>
            <b-col cols="10" sm="5" md="4" lg="3" xl="3" class="mb-1">
              <b-card no-body class="sub-card-body">
                <div class="sub-card-number">02</div>
                <div :class="cardContentItem">
                  <h3>Crea tu pedido</h3>
                  <p>Registra el producto o servicio que estas buscando.</p>
                </div>
              </b-card>
            </b-col>
            <b-col cols="10" sm="5" md="4" lg="3" xl="3" class="mb-1">
              <b-card no-body class="sub-card-body">
                <div class="sub-card-number">03</div>
                <div :class="cardContentItem">
                  <h3>Recibe alertas</h3>
                  <p>
                    Te notificaremos al encontrar los proveedores que mejor se
                    adecuen a lo que necesitas.
                  </p>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <!-- Steps Provider -->
    <b-row class="mt-2 d-flex justify-content-center">
      <b-col cols="10 ">
        <b-card no-body class="card-content-cards">
          <h3 class="text-white text-center mt-2">Si buscas clientes</h3>

          <b-row class="m-1 d-flex justify-content-center">
            <b-col cols="10" sm="5" md="4" lg="3" xl="3" class="mb-1">
              <b-card no-body class="sub-card-body">
                <div class="sub-card-number">01</div>
                <div :class="cardContentItem">
                  <h3>Registra tu negocio</h3>
                  <p>
                    Crea un perfil para que otros negocios puedan conocerte.
                  </p>
                </div>
              </b-card>
            </b-col>
            <b-col cols="10" sm="5" md="4" lg="3" xl="3" class="mb-1">
              <b-card no-body class="sub-card-body">
                <div class="sub-card-number">02</div>
                <div :class="cardContentItem">
                  <h3>Publica tus productos</h3>
                  <p>Registra lo que ofreces a tus clientes.</p>
                </div>
              </b-card>
            </b-col>
            <b-col cols="10" sm="5" md="4" lg="3" xl="3" class="mb-1">
              <b-card no-body class="sub-card-body">
                <div class="sub-card-number">03</div>
                <div :class="cardContentItem">
                  <h3>Recibe alertas</h3>
                  <p>
                    Te notificaremos cuando un cliente este interesado en ti.
                  </p>
                </div>
              </b-card>
            </b-col>
            <b-col cols="10" sm="5" md="4" lg="3" xl="3" class="mb-1">
              <b-card no-body class="sub-card-body">
                <div class="sub-card-number">04</div>
                <div :class="cardContentItem">
                  <h3>Responde los pedidos</h3>
                  <p>
                    Para que los clientes sepan que puedes atenderlos y se
                    pongan en contacto contigo.
                  </p>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <!-- Questions -->
    <b-row class="mt-2 d-flex justify-content-center">
      <b-col cols="10 ">
        <b-row class="w-100 mt-2 mb-2">
          <b-col cols="12" class="text-center mb-2">
            <h1>Algunas preguntas que nos hacen a nosotros.</h1>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="6" xl="6">
            <div class="w-100 m-1">
              <b-card-actions
                title="Son confiables los proveedores de la plataforma ?"
                action-collapse
                :collapsed="true"
              >
                <b-card-text>
                  <span
                    >Si, todos los proveedores registrados en nuestra plataforma
                    han pasado por un filtro de seguridad.</span
                  >
                </b-card-text>
              </b-card-actions>
            </div>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="6" xl="6">
            <div class="w-100 m-1">
              <b-card-actions
                title="Si tengo un problema con mi pedido ?"
                action-collapse
                :collapsed="true"
              >
                <b-card-text>
                  <span
                    >Si, todos los proveedores registrados en nuestra plataforma
                    han pasado por un filtro de seguridad.</span
                  >
                </b-card-text>
              </b-card-actions>
            </div>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="6" xl="6">
            <div class="w-100 m-1">
              <b-card-actions
                title="Si tengo un problema con mi pedido ?"
                action-collapse
                :collapsed="true"
              >
                <b-card-text>
                  <span
                    >Si, todos los proveedores registrados en nuestra plataforma
                    han pasado por un filtro de seguridad.</span
                  >
                </b-card-text>
              </b-card-actions>
            </div>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="6" xl="6">
            <div class="w-100 m-1">
              <b-card-actions
                title="Si tengo un problema con mi pedido ?"
                action-collapse
                :collapsed="true"
              >
                <b-card-text>
                  <span
                    >Si, todos los proveedores registrados en nuestra plataforma
                    han pasado por un filtro de seguridad.</span
                  >
                </b-card-text>
              </b-card-actions>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- Contact -->
    <b-row class="mt-2 mb-2 d-flex justify-content-center background-contact">
      <b-col cols="10" sm="8" md="8" lg="8" xl="8" class="m-4">
        <b-row>
          <b-col cols="12" sm="6" md="6" lg="6" xl="6">
            <div class="d-flex flex-column">
              <h2
                style="font-size: 2rem; line-height: 4.3rem; font-weight: 600"
              >
                Comuníquese con nosotros hoy <br />
                a través de cualquiera de la <br />
                información dada
              </h2>
              <h3 style="font-size: 1rem">
                Llamanos para un soporte instantáneo
              </h3>
              <p class="ml-1">+51 903 207 417</p>
              <h3 style="font-size: 1rem">enTaller@gmail.com</h3>
              <p class="ml-1">+51 903 207 417</p>
            </div>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="6" xl="6">
            <b-row>
              <b-col cols="12">
                <ValidationObserver ref="form">
                  <ValidationProvider
                    name="Email"
                    :rules="{ email: true, required: true }"
                    v-slot="{ errors }"
                  >
                    <b-form-group label="Email">
                      <b-form-input
                        class="form-input"
                        name="Email"
                        v-model="form.email"
                      >
                      </b-form-input>
                    </b-form-group>
                    <small class="text-danger" v-if="errors[0]">{{
                      errors[0]
                    }}</small>
                  </ValidationProvider>
                  <ValidationProvider
                    name="Subject"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                  >
                    <b-form-group label="Subject">
                      <b-form-input
                        class="form-input"
                        name="Subject"
                        v-model="form.subject"
                      >
                      </b-form-input>
                    </b-form-group>
                    <small class="text-danger" v-if="errors[0]">{{
                      errors[0]
                    }}</small>
                  </ValidationProvider>
                  <ValidationProvider
                    name="Message"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                  >
                    <b-form-group label="Message">
                      <b-form-input
                        class="form-input"
                        name="Message"
                        v-model="form.message"
                      >
                      </b-form-input>
                    </b-form-group>
                    <small class="text-danger" v-if="errors[0]">{{
                      errors[0]
                    }}</small>
                  </ValidationProvider>
                </ValidationObserver>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <b-button class="web-button" @click="sendEmail"
                  >Enviar Mensaje</b-button
                >
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- Footer  -->
    <b-row class="mt-2 mb-4 d-flex justify-content-center">
      <b-col cols="10" sm="10" md="8" lg="8" xl="8" class="mt-4 mb-4">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="4"
            class="mb-1 d-flex flex-column justify-content-start align-item-left"
          >
            <h2 class="footer-title">En Taller</h2>
            <h3 class="footer-content">
              Suscribete para nuestros datos informativos <br />
              para mantenerte actualizado
            </h3>

            <div>
              <ValidationObserver ref="formEmail">
                <ValidationProvider
                  name="FormEmail"
                  :rules="{ email: true, required: true }"
                  v-slot="{ errors }"
                >
                  <b-input-group name="FormEmail">
                    <b-form-input
                      class="input-email"
                      placeholder="Ingresa tu Email"
                      v-model="email"
                    />
                    <b-input-group-append>
                      <b-button class="web-button"> Suscribete </b-button>
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</small>
                </ValidationProvider>
              </ValidationObserver>
            </div>
          </b-col>

          <b-col
            cols="6"
            sm="3"
            md="3"
            lg="4"
            xl="4"
            class="mb-1 d-flex flex-column justify-content-start align-item-left"
          >
            <h2 class="footer-title">Nuestra Dirección</h2>
            <h3 class="footer-content">Lima - Perú</h3>
            <h3 class="footer-content">Provincia lima</h3>
            <h3 class="footer-content">En Taller</h3>
          </b-col>
          <b-col
            cols="6"
            sm="3"
            md="3"
            lg="4"
            xl="4"
            class="d-flex flex-column justify-content-start align-item-left"
          >
            <h2 class="footer-title">Contáctanos</h2>
            <h3 class="footer-content">+51 903 207 417</h3>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Import Components
import Logo from '../../commons/logo/Logo.vue'
import UserDropdown from './UserDropdown.vue'
import BCardActions from '@core/components/b-card-actions/BCardActions.vue'
export default {
  components: {
    Logo,
    UserDropdown,
    BCardActions
  },
  data() {
    return {
      form: {
        email: '',
        subject: '',
        message: ''
      },
      email: ''
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'authentication/currentUser'
    }),
    ...mapGetters({
      currentSize: 'app/currentBreakPoint'
    }),
    currentSizeDirect() {
      return ['xs', 'sm'].includes(this.currentSize) ? true : false
    },
    isLogged() {
      return this.currentUser ? true : false
    },
    cardContentItem() {
      return 'm-1 d-flex flex-column justify-content-left'
    }
  },
  methods: {
    redirectToSignUp() {
      this.$router.push({
        name: 'auth-register'
      })
    },
    redirectToSignIn() {
      this.$router.push({
        name: 'auth-login'
      })
    },
    sendEmail() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          console.log('did not send')
          return
        }
        console.log('send')
      })
    },
    sendSuscribe() {
      this.$refs.formEmail.validate().then((success) => {
        if (!success) {
          console.log('did not send Email')
          return
        }
        console.log('send Email')
      })
    }
  }
}
</script>

<style lang="scss">
/* Color */

:root {
  --mainColor: #3e6552;
  --valQuestion: white;
  --h3-font-size: 1.05rem;
  --header-background: white;
}
/* Nav Bar */
a.navbar-brand {
  width: 50%;
  min-width: 50%;
  max-width: 500px;
}
.header-navbar {
  background-color: var(--header-background);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 1020;
}
.navbar-background {
  background-color: var(--header-background);
}

/* Logo */
.img-logo {
  max-width: 300px;
}
.web-button-1 {
  color: var(--mainColor);
  font-weight: 700;
  font-size: 1rem;
}
.web-button-1:hover {
  color: #006414;
  border-bottom: 5px solid var(--mainColor);
}

.web-button {
  background-color: var(--mainColor) !important ;
  border: 0px !important;
  &:focus {
    background-color: var(--mainColor) !important ;
    opacity: 0.7;
  }
}

.card-content-cards {
  background-color: var(--mainColor);
}
.sub-card-number {
  display: block;
  background-color: var(--mainColor);
  color: white;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  margin: 4px;
  width: 25%;
  min-width: 25px;
  max-width: 40px;
  max-height: 38px;
  flex: auto;
  transition: 0.3s;
}
.sub-card-body {
  height: 100%;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);
  }
}

.button-question {
  background-color: var(--valQuestion) !important ;
  border: 0px !important;
  &:focus {
    background-color: var(--valQuestion) !important ;
  }
  & > span {
    color: var(--mainColor);
    font-size: 1.5rem;
  }
}
.background-contact {
  background-color: #e5efea;
}

.form-input {
  border: 0px;
  border-radius: 0px;
  border-bottom: 1.5px solid var(--mainColor);
  background-color: #e5efea;
  &:focus {
    border-bottom: 1.5px solid var(--mainColor);
    background-color: #e5efea;
  }
}

.footer-content {
  font-size: var(--h3-font-size);
  margin-bottom: 1.2rem;
}
.input-group > .form-control {
  &:focus {
    border-color: var(--mainColor) !important;
  }
  &:disabled {
    border: 0px;
  }
}
.footer-title {
  margin-bottom: 1.2rem;
}
</style>
