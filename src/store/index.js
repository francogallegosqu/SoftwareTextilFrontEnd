import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import authentication from './authentication'

// Shared
import location from './shared/location.store'
import category from './shared/category.store'
import images from './shared/images.store'

// Authentication 
import signup from '@/modules/authentication/signup/signup.store'

// User
import roles from './user/roles.store'

// System
import myPosts from '@/modules/system/my-posts/my-posts.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    authentication,

    // Shared
    location,
    category,
    images,

    // Authentication
    signup,

    // User
    roles,

    // System
    myPosts,
  },
  strict: process.env.DEV,
})
