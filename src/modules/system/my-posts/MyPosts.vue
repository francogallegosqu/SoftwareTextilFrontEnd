<template>
  <div>
    <b-nav card-header pills class="m-0">
      <b-nav-item
        exact-active-class="active"
        exact
        :to="{ name: 'app-my-posts-fabrics' }"
      >
        TELAS
      </b-nav-item>

      <b-nav-item
        exact-active-class="active"
        exact
        :to="{ name: 'app-my-posts-tackle' }"
      >
        AVIOS
      </b-nav-item>

      <b-nav-item
        exact-active-class="active"
        exact
        :to="{ name: 'app-my-posts-services' }"
        class="tab-count-nav-closed"
      >
        SERVICIOS
      </b-nav-item>
    </b-nav>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>