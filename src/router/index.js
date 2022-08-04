import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate, canNavigateTo } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData } from '@/auth/utils'
import administratorRouter from '@/views/administrator/router'
import administratorCustomer from '@/views/administrator/views/customer/router'
import administratorProvider from '@/views/administrator/views/provider/router'
import homepageRouter from '@/views/homepage/router'

// ----- Modules -----
// Authentication
import authSignUpRouter from '@/modules/authentication/signup/signup.router'
// import authSignInRouter from "@/modules/authentication/login/login.router"
import authSignInRouter from '@/views/authentication/signin/signin.router'

// System
import systemProfileRouter from '@/modules/system/profile/profile.router'
import systemMyPostsRouter from '@/modules/system/my-posts/my-posts.router'
import systemProductionRouter from '@/modules/system/production/production.router'
import systemUtilsRouter from '@/modules/system/utils/utils.router'

// Customer
import appCustomerRouter from '@/views/customer/module/customer.router'

// Provider
import appProviderRouter from '@/views/provider/module/provider.router'
import uiElements from './routes/ui-elements/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'web' } },
    // routes
    ...administratorRouter,
    ...administratorCustomer,
    ...administratorProvider,
    ...homepageRouter,
    // Modules
    ...authSignUpRouter,
    ...authSignInRouter,

    // System
    ...systemProfileRouter,
    ...systemMyPostsRouter,
    ...systemProductionRouter,
    ...systemUtilsRouter,

    ...uiElements,

    // Customer
    ...appCustomerRouter,

    // Provider
    ...appProviderRouter,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()

  if (isLoggedIn) {
    const userData = getUserData()
    const modulos = userData?.modulos.map(element => element.modulo) || []
    const nameRole = userData?.role.role_name || ''
    console.log('to', to, 'can', canNavigate(to, modulos, nameRole))
    if (!canNavigate(to, modulos, nameRole)) {
      console.log('pass navigate', !canNavigate(to, modulos, nameRole))
      // Redirect to login if not logged in
      if (isLoggedIn) return next({ name: 'web' })
      // If logged in => not authorized
      return next({ name: 'misc-not-authorized' })
    }
  }

  // Redirect if logged in
  if (!isLoggedIn) {
    if (canNavigateTo(to)) {
      console.log('can navidate to', to.name !== 'web')
      if (!isLoggedIn && to.name !== 'web' && to.name !== 'auth-login' && to.name !== 'auth-register') return next({ name: 'auth-login' })
      return next()
    }
  }
  console.log('get out ')
  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
