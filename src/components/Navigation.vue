<template>
  <nav>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style scoped>
  nav {
    position: absolute;
    top: 20px;
    right: 60px;
  }

  a {
    color: #FDAB74;
  }
</style>
