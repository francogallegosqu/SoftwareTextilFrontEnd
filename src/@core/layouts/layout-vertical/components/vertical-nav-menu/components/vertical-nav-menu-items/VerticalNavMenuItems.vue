<template>
  <ul>
    <template v-for="item in items">
      <component
      :is="resolveNavItemComponent(item)"
      v-if="item.route ? showTabNavigation(item) && onSameModuleItem(item): onSameModuleHeader(item)"
      :key="item.header || item.title"
      :item="item"
    />
    </template>
    
  </ul>
</template>

<script>
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
    provide('openGroups', ref([]))

    return {
      resolveNavItemComponent,
    }
  },
  methods:{
    showTabNavigation(item) {
      const { route } = this.$router.resolve({ name: item.route })
      console.log("[item] =>",item,"[route] => ",route)
      if (route.meta === {}) return true
      if (!route.meta.permittedRoles) return true 
      return true
    },
    onSameModuleItem(item) {
      const { route } = this.$router.resolve({ name: item.route })
      if(route.meta === {}) return false
      if(route.meta.module === 3) return true
      return false
    },
    onSameModuleHeader(item) {
      const moduleHeader =  item.module ? item.module : 0
      if (moduleHeader === 3) {
        return true
      }
      return false
    },
  }, 
}
</script>
