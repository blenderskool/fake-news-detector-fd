<template>
  <header>
    <router-link to="/">
      <h1 class="logo">
        <img alt="Defaux logo" src="@/assets/logo.png">
        Defaux
      </h1>
    </router-link>
    
    <navigation v-if="!hideNav" />
  </header>
</template>

<script>
import navigation from '@/components/Navigation'

export default {
  name: 'Header',
  props: {
    hideNav: Boolean
  },
  components: {
    navigation
  }
}
</script>

<style scoped>
  .logo {
    font-size: 2.3rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo img {
    width: 70px;
    margin-right: 10px;
  }

  nav {
    display: none;
  }

  @media screen and (min-width: 650px) {
    nav {
      display: block;
    }

    .logo img {
      width: 80px;
    }
  }

  a {
    margin-top: 0;
    padding-top: 0;
  }

</style>
