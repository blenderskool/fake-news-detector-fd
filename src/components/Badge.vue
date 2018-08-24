<template>
  <div class="badge" :class="{
    fake: type === 'fake',
    real: type === 'real',
    warn: type === 'warn'
  }">
    {{ type }}
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: ['type']
}
</script>

<style scoped>
  .badge {
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 5px 8px 1.2rem;
    text-align: center;
    width: 80%;

    color: #ffffff;
    font-weight: 700;
    letter-spacing: 1rem;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .badge.fake {
    background-color: #EC2828;
  }
  .badge.real {
    background-color: #1DD53F;
  }
  .badge.warn {
    background-color: #F45520;
  }

  @media screen and (min-width: 950px) {
    .badge {
      width: 95%;
    }
  }
</style>
