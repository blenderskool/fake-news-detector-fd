<template>
  <div class="offline">
    <hero>
      <Header hideNav />

      <h2>You are offline!</h2>
      <h3>Connect back to the internet and check more news</h3>
    </hero>
  </div>
</template>

<script>
import hero from '@/components/Hero'
import Header from '@/components/Header'

export default {
  name: 'Offline',
  components: {
    hero,
    Header
  }
}
</script>

<style scoped>
  .logo {
    color: black !important;
  }
</style>
