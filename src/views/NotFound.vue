<template>
  <div class="not-found">
    <hero>
      <Header />

      <h2>404</h2>
      <h3>The page you were looking for could not be found</h3>
      <Button @click.native="$router.push('/')">
        Back to Home
      </Button>
    </hero>
  </div>
</template>

<script>
import Header from '@/components/Header'
import hero from '@/components/Hero'
import Button from '@/components/Button'

export default {
  name: 'NotFound',
  components: {
    Header,
    hero,
    Button
  },
  created() {
    document.title = 'Page not found | Defaux';
  }
}
</script>

<style scoped>
  h2 {
    font-size: 4rem;
  }

  button {
    margin-top: 2rem;
  }
</style>


<style>
  .not-found .hero {
    height: 100vh;
    padding-right: 30px;
    padding-left: 30px;
  }

  .not-found .hero .divider {
    display: none;
  }
</style>
