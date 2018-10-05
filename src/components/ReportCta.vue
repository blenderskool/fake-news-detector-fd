<template>
  <section class="pattern final">
    <h2>Report fake news</h2>
    <h3>Help us in collecting false news</h3>

    <btn @click.native="$router.push('/report-news')">Start Reporting</btn>
  </section>
</template>

<script>
import btn from '@/components/Button'

export default {
  name: 'report-cta',
  components: {
    btn
  }
}
</script>

<style>

</style>
