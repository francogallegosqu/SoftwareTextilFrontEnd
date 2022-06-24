<template>
  <div>
    <b-nav card-header pills class="m-0">
      <b-nav-item
        exact-active-class="active"
        exact
        :to="{ name: 'app-utils-categories' }"
      >
        CATEGORIAS
      </b-nav-item>

      <b-nav-item
        exact-active-class="active"
        exact
        :to="{ name: 'app-utils-subcategories' }"
      >
        SUB CATEGORIAS
      </b-nav-item>

      <b-nav-item
        exact-active-class="active"
        exact
        :to="{ name: 'app-utils-fits' }"
        class="tab-count-nav-closed"
      >
        UNIDADES
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