<template>
  <transition name="slide" appear>
    <div class="card">
      <slot />
    </div>
  </transition>
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

  .slide-enter-active {
    transition: all 0.5s ease;
  }
  .slide-enter {
    opacity: 0;
    transform: translateY(40px);
  }
  .slide-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  
</style>
