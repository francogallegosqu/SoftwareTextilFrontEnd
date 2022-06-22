<template>
  <div style="height: 100vh">
    <b-row
      class="header-navbar d-flex justify-content-center align-item-center"
    >
    <b-col cols="10" >
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
        <b-col cols="12" sm="6" md="4"  lg="3" class="d-flex flex-column justify-content-center ">
          <b-card @click="goManageCustomer" bg-variant="primary" text-variant="white" class="card-first">
            <b-card-title>
              <h1 class="title-card text-center" >Clientes</h1>
            </b-card-title>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" md="4"  lg="3" class="d-flex flex-column justify-content-center ">
          <b-card @click="goManageProvider" bg-variant="primary" text-variant="white" class="card-second">
            <b-card-title>
              <h1 class="title-card text-center" >Proveedores</h1>
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
      currentUser: 'authentication/currentUser'
    }),
    isLogged() {
      return this.currentUser ? true : false
    },
    
  },
  methods:{
    goManageCustomer(){
      this.$router.push({ name: 'admin-dashboard-customer' })
    },
    goManageProvider(){
      this.$router.push({ name: 'admin-dashboard-provider' })
    }
  }
}
</script>


<style lang="scss">
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

.title-card{
  background-color: #e4ede9;
  border-radius: 5px;
  
}

.card-first{
    background-image: url("../../../../assets/images/profile/chooser/customer.jpg");
    background-position:center center;
    height: 80%;
    max-height: var(--max-heigth);
    &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 rgba(black, 0.55);
  }
}

.card-second{
    background-image: url("../../../../assets/images/profile/chooser/provider.png");
    background-position:center center ;
    height: 80%;
    max-height: var(--max-heigth);
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