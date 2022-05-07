import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

// Shared
import location from './shared/location.store'

// Authentication 
import signup from '@/modules/authentication/signup/signup.store'

// User
import roles from './user/roles.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,

    // Shared
    location,

    // Authentication
    signup,

    // User
    roles,
  },
  strict: process.env.DEV,
})
