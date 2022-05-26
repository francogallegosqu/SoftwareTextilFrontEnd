import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'
import FilterSlot from './components/filter-slot/FilterSlot.vue'
import Filters from './components/Filters.vue'

Vue.component(FeatherIcon.name, FeatherIcon)
Vue.component("filters-component", Filters);
Vue.component("filter-slot", FilterSlot);
