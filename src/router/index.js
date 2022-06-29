import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import uiElements from './routes/ui-elements/index'
import administratorRouter from '@/views/administrator/router'
import administratorCustomer from '@/views/administrator/views/customer/router'
import administratorProvider from '@/views/administrator/views/provider/router'
import homepageRouter from '@/views/homepage/router'

// ----- Modules -----
// Authentication
import authSignUpRouter from "@/modules/authentication/signup/signup.router"
import authSignInRouter from "@/modules/authentication/login/login.router"

// System
import systemProfileRouter from "@/modules/system/profile/profile.router"
import systemMyPostsRouter from "@/modules/system/my-posts/my-posts.router"
import systemProductionRouter from "@/modules/system/production/production.router"
import systemUtilsRouter from "@/modules/system/utils/utils.router";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'web' } },
    //routes 
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
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

/* router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login' })

    // If logged in => not authorized
    return next({ name: 'misc-not-authorized' })
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData()
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }

  return next()
}) */

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
