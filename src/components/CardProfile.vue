<template>
  <card>
    <div
      class="image"
      :style='{backgroundImage: `url(${image})`}'
      role="img"
      :aria-label="title+' image'"
    />
    <h3>{{ title }}</h3>
    <p>
      <slot />
    </p>
  </card>
</template>

<script>
import card from '@/components/Card'

export default {
  name: 'CardProfile',
  props: ['title', 'image'],
  components: {
    card
  }
}
</script>

<style scoped>

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image {
    width: 130px;
    height: 130px;
    border-radius: 100%;
    background-size: cover;
    background-position: center;
    border: 5px solid #ffffff;

    margin-top: -65px;
  }

  h3 {
    font-weight: 700;
    margin-top: 5px;
    font-size: 1.6rem;
    line-height: 1.2em;
    color: #2F353E;
  }

  p {
    font-size: 1.1rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>
