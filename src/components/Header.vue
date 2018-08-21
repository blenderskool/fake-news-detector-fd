<template>
  <header>
    <h1 class="logo">
      News Detector
    </h1>
    
    <navigation />
  </header>
</template>

<script>
import navigation from '@/components/Navigation'

export default {
  name: 'Header',
  components: {
    navigation
  }
}
</script>

<style scoped>
  .logo {
    font-size: 2.3rem;
    color: #ffffff;
  }

  nav {
    display: none;
  }

  @media screen and (min-width: 650px) {
    nav {
      display: block;
    }
  }

</style>
