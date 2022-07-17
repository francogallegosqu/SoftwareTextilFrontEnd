<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
    style="list-style: none"
  >
    <template #button-content>
      <div class="d-flex justify-content-end align-item-center">
        <div
          v-if="['md', 'lg', 'xl', 'xxl'].includes(currentSize)"
          class="mr-1 d-flex flex-column justify-content-end align-item-end"
        >
          <p class="font-weight-bolder mb-0">
            {{ currentUser.businessName }}
          </p>
          <span class="font-weight-bolder d-flex justify-content-end">
            {{ currentUser.role.role_name }}
          </span>
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
      </div>
    </template>

    <b-dropdown-item
      :to="{ name: 'app-profile' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="UserIcon" class="mr-50" />
      <span>Perfil</span>
    </b-dropdown-item>
    <b-dropdown-item
      v-if="isAdmin"
      :to="{ name: 'admin-dashboard-customer' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="BriefcaseIcon" class="mr-50" />
      <span>Administrar</span>
    </b-dropdown-item>

    <b-dropdown-item
      :to="{ name: 'apps-email' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="MailIcon" class="mr-50" />
      <span>Inbox</span>
    </b-dropdown-item>

    <b-dropdown-divider />

    <b-dropdown-item
      :to="{ name: 'pages-account-setting' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="SettingsIcon" class="mr-50" />
      <span>Settings</span>
    </b-dropdown-item>
    <b-dropdown-item link-class="d-flex align-items-center" @click="logout">
      <feather-icon size="16" icon="LogOutIcon" class="mr-50" />
      <span>Logout</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
import useJwt from '@/auth/jwt/useJwt'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      currentUser: 'authentication/currentUser',
      isAdmin: 'authentication/isAdmin'
    }),
    ...mapGetters({
      currentSize: 'app/currentBreakPoint'
    })
  },
  methods: {
    logout() {
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem('userData')
      this.$store.dispatch('authentication/updateCurrentUser', null)
      this.$store.dispatch('authentication/updateToken', null)
      this.$router.push({ name: 'auth-login' })
    }
  }
}
</script>
