import Vue from 'vue'
import {
  ToastPlugin,
  ModalPlugin,
  BootstrapVue,
  BootstrapVueIcons,
} from 'bootstrap-vue'

import VueCompositionAPI from '@vue/composition-api'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VueMoment from 'vue-moment'

import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'

import { initialize } from './service/general'
import 'verte/dist/verte.css';


// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

// Axios Mock Adapter
import '@/@fake-db/db'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(BootstrapVue, {
  BModal: { headerBgVariant: 'primary', titleClass: 'text-light' },
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
})
Vue.use(BootstrapVueIcons)

// Composition API
Vue.use(VueCompositionAPI)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
// Validation rules (Vee validate)

import './validation/rules'

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false


// Filters
import '@/filters/status.filters'
import '@/filters/extension.filters'
import '@/filters/money.filters'

// Mixins
import generalMixins from './mixins/general.mixin'
import vueLoader from './directives/preloader/index'

Vue.mixin(generalMixins)
Vue.use(vueLoader, 'loading')
Vue.use(VueMoment)

initialize(router)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
