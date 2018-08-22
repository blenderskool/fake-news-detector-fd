<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
  button {
    background-color: #EE7321;
    width: 170px;
    height: 40px;
    border-radius: 4px;
    color: #ffffff;
    border: none;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    cursor: pointer;
    user-select: none;
    transition: all .1s ease;
  }
  button:hover {
    opacity: 0.85;
  }
  button:active {
    transform: translateY(2px);
  }
</style>
