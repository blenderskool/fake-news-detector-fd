<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
  .card {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    padding: 20px 25px;
    display: inline-block;
    border-radius: 4px;
    background-color: #ffffff;
  }

  .card .title {
    font-size: 1.35rem;
    color: #2F353E;
    font-weight: 700;
    margin-bottom: 15px;
  }
</style>
