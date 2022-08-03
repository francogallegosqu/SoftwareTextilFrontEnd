<template>
  <div style="height: 100vh">
    <b-row
      class="header-navbar-chooser d-flex justify-content-center align-item-center"
    >
      <b-col cols="10">
        <b-navbar
          type="light"
          class=" navbar-background  navbar navbar-shadow d-flex justify-content-between"
          sticky
        >
          <b-navbar-brand :to="{ name: 'web' }">
            <logo />
          </b-navbar-brand>
          <div v-if="isLogged">
            <user-dropdown />
          </div>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row
      class=" backgroung-row w-100 m-0 d-flex justify-content-center align-item-center"
      style="height: 90vh"
    >
      <b-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex flex-column justify-content-center "
      >
        <b-card
          no-body
          class=" b-card-body d-flex  justify-content-center align-item-center"
          bg-variant="primary"
          text-variant="white"
          @click="goManageCustomer"
        >

          <div class=" w-100 d-flex justify-content-center">
            <feather-icon
              size="200"
              fluid
              icon="UsersIcon"
            />
          </div>
          <b-card-title class="mb-0 d-flex justify-content-center">
            <h1 class="title-card text-center mb-0 mr-0">
              Clientes
            </h1>
          </b-card-title>
        </b-card>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex flex-column justify-content-center "
      >
        <b-card
          no-body
          class=" b-card-body d-flex  justify-content-center align-item-center"
          bg-variant="primary"
          text-variant="white"
          @click="goManageProvider"
        >
          <div class=" w-100 d-flex justify-content-center">
            <feather-icon
              size="200"
              fluid
              icon="TruckIcon"
            />
          </div>
          <b-card-title class="mb-0 d-flex justify-content-center">
            <h1 class="title-card text-center mb-0 mr-0">
              Proovedores
            </h1>
          </b-card-title>
        </b-card>
      </b-col>
      <b-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex flex-column justify-content-center "
      >
        <b-card
          no-body
          class=" b-card-body d-flex  justify-content-center align-item-center"
          bg-variant="primary"
          text-variant="white"
          @click="goManageManage"
        >
          <div class=" w-100 d-flex justify-content-center">
            <feather-icon
              size="200"
              fluid
              icon="SettingsIcon"
            />
          </div>
          <b-card-title class="mb-0 d-flex justify-content-center">
            <h1 class="title-card text-center mb-0 mr-0">
              Manage
            </h1>
          </b-card-title>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Components
import Logo from '@/commons/logo/Logo.vue'
import UserDropdown from '../../../commons/userDropdown/UserDropdown.vue'

export default {
  components: {
    UserDropdown,
    Logo,
  },
  computed: {
    ...mapGetters({
      currentUser: 'authentication/currentUser',
    }),
    isLogged() {
      return !!this.currentUser
    },

  },
  methods: {
    goManageCustomer() {
      this.$router.push({ name: 'admin-dashboard-customer' })
    },
    goManageProvider() {
      this.$router.push({ name: 'admin-dashboard-provider' })
    },
    goManageManage() {
      this.$router.push({ name: 'admin-create-city' })
    },
  },
}
</script>

<style lang="scss" scoped>
/* Color */

:root {
  --mainColor: #3e6552;
  --h3-font-size: 1.05rem;
  --header-background: white;
  --max-heigth: 400px
}
.navbar-background {
  background-color: var(--header-background);
}
.header-navbar-chooser {
  background-color: var(--header-background);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 1020;
}

.title-card{
  background-color: #e4ede9;
  border-radius: 5px;
  width: 80%;

}
.b-card-body{
  min-height: 50%;
  max-height: 70%;
  margin: 0%;
  padding-bottom: 2%;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 rgba(black, 0.55);
  }
}

.backgroung-row{
   background-image: url("../../../../assets/images/profile/chooser/fondo-lineas.jpg");
//    background-position:center center;
    background-repeat: no-repeat;
    background-size:100%;
}

</style>
