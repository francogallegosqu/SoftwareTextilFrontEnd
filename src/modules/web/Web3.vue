<template>
  <div>
     <!-- NavBar -->
    <b-row class="header-navbar d-flex justify-content-center align-item-center">
      <b-col cols="10">
        <b-navbar
      :toggleable="currentSizeDirect"
      type="light"
      variant="light"
      sticky
    >
      <b-navbar-brand :to="{ name: 'web' }">
        <b-img
          class="img-logo"
          fluid
          src="@/assets/images/logo/logoTextil.svg"
          alt="My Logo"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <feather-icon class="text-success" v-if="expanded" icon="ChevronsUpIcon" size="25" />
          <feather-icon class="text-success" v-else icon="ChevronsDownIcon" size="25" />
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto " :class="currentSizeDirect?'d-flex flex-column':''">
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
                clientes manera segura y gratuita haciendo crecer tu negocio.
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
                    Para que los clientes sepan que puedes atenderlos y se pongan en contacto contigo.
                  </p>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
    }
  }
}
</script>

<style lang="scss" scoped>
/* Nav Bar */
a.navbar-brand {
  width: 50%;
  min-width: 50%;
  max-width: 500px;
}
.header-navbar {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
}

/* Logo */
.img-logo {
  max-width: 300px;
}
/* Back Image */
.back-image {
  /* The image used */
  background-image: url('../../assets/images/HomePage/Homepage-background-tela.png');
  padding-bottom: 1.5%;
  /* Full height */
  width: 100%;
  box-shadow: 0px 0 8px 8px white inset;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.web-button-1 {
  color: hsl(152, 24%, 32%, 1);
  font-weight: 700;
  font-size: 1rem;
}
.web-button-1:hover {
  color: #006414;
}

.web-button {
  background-color: #006414 !important ;
  border: 0px !important;
  opacity: 0.7;
}

.card-content-cards {
  background-color: #006414;
  opacity: 0.7;
}
.sub-card-number {
  display: block;
  background-color: #006414;
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
}
</style>
