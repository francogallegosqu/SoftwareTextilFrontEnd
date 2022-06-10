<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
  >
    <template #button-content>
      <!-- <div class=" user-nav">
        <p class="user-name font-weight-bolder mb-0">
          {{ currentUser.businessName }}
        </p>
        <div>
          <span class="user-status">{{ currentUser.role.role_name }}</span>
        </div>
        
      </div> -->
      <div class="profile-title mr-1">
            <p class="font-weight-bolder">
              {{ currentUser.businessName }}
            </p>
            <p class="font-weight-bolder">
              {{ currentUser.role.role_name }}
            </p>
          </div>
      <b-avatar
        size="40"
        :src="currentUser.avatar"
        variant="light-primary"
        badge
        class="badge-minimal"
        badge-variant="success"
      >
        <feather-icon
          v-if="!currentUser.fullName"
          icon="UserIcon"
          size="22"
        />
      </b-avatar>
    </template>

    <b-dropdown-item
      :to="{ name: 'app-profile'}"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="UserIcon"
        class="mr-50"
      />
      <span>Profile</span>
    </b-dropdown-item>
    <b-dropdown-item
      :to="{ name: 'apps-email' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="MailIcon"
        class="mr-50"
      />
      <span>Inbox</span>
    </b-dropdown-item>
   

    <b-dropdown-divider />

    <b-dropdown-item
      :to="{ name: 'pages-account-setting' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="SettingsIcon"
        class="mr-50"
      />
      <span>Settings</span>
    </b-dropdown-item>
    <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="logout"
    >
      <feather-icon
        size="16"
        icon="LogOutIcon"
        class="mr-50"
      />
      <span>Logout</span>
    </b-dropdown-item></b-nav-item-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
import {
  BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
import { initialAbility } from '@/libs/acl/config'
import useJwt from '@/auth/jwt/useJwt'
import { avatarText } from '@core/utils/filter'

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
  },
  data() {
    return {
      avatarText,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "authentication/currentUser",
    }),
  },
  methods: {
    logout() {
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)
      localStorage.removeItem('currentUser')
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>
