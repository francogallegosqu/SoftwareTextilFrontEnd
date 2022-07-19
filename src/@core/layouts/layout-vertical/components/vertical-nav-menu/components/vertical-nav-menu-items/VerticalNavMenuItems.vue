<template>
  <ul>
    <template v-for="item in items">
      <component
        :is="resolveNavItemComponent(item)"
        v-if="
          item.route
            ? showTabNavigation(item) && onSameModuleItem(item)
            : onSameModuleHeader(item)
        "
        :key="item.header || item.title"
        :item="item"
      />
    </template>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    provide("openGroups", ref([]));

    return {
      resolveNavItemComponent,
    };
  },
  computed:{
    ...mapGetters({
      currentUser: 'authentication/currentUser',
      isAdmin: 'authentication/isAdmin'
    }),
    modulesPermitted(){
      const modules = this.currentUser.modulos
      return modules.map(element => element.modulo)
    }
  },
  methods:{
    showTabNavigation(item) {
      const { route } = this.$router.resolve({ name: item.route })
      if (route.meta === {}) return true
      if (!route.meta.permittedRoles) return true 
      return true
    },
    onSameModuleItem(item) {
      const { route } = this.$router.resolve({ name: item.route })
      if(route.meta === {}) return false
      if(this.modulesPermitted.includes(route.meta.module)) return true
      return false
    },
    onSameModuleHeader(item) {
      const moduleHeader =  item.module ? item.module : 0
      if (this.modulesPermitted.includes(moduleHeader)) {
        return true
      }
      return false;
    },
  },
};
</script>
