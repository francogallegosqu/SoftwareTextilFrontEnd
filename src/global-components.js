import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'
import Filters from './components/Filters.vue'
import HeaderSlot from "@/@core/layouts/components/app-header/HeaderSlot.vue";
import vSelect from "vue-select";

Vue.component(FeatherIcon.name, FeatherIcon)
Vue.component("filters-component", Filters);
Vue.component("header-slot", HeaderSlot);
Vue.component("v-select", vSelect);

