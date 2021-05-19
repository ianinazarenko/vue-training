<template>
  <div class="navbar">
    <nav class="nav-extended purple darken-4">
      <div class="nav-content">
        <router-link :to="{ name: 'Home' }">
          <span class="nav-title">Ninja Smoothies</span>
        </router-link>
        <a class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{ name: 'Add' }">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {}
    },
  }
</script>

<style>
  nav .nav-content {
    padding: 0 20px;
  }
</style>
