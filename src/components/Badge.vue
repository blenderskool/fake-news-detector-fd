<template>
  <div class="badge" :class="{
    fake: type === 'satire',
    real: type === 'real',
    warn: type === 'warn'
  }">
    <h3>{{ type }}</h3>
    <div class="level">
      <span class="fill" :style="{top: `${100-percentage}%` }" />
      <span class="score">
        {{ percentage }}%
        <div style="font-size: 0.8rem">Match</div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: ['type', 'percentage']
}
</script>

<style scoped>
  .badge {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .badge .level {
    height: 85px;
    width: 85px;
    border-radius: 100%;
    margin-left: auto;
    position: relative;
    overflow: hidden;
    border: 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .badge .level .fill {
    position: absolute;
    bottom: -1px;
    left: -1px;
    right: -1px;
    top: 45%;
  }
  .badge .level .fill::before,
  .badge .level .fill::after {
    content: '';
    position: absolute;
    top: -3px;
    opacity: 0.5;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: inherit;
    transform: rotate(-1deg);
  }
  .badge .level .fill::after {
    top: -7px;
    opacity: 0.2;
    transform: rotate(-3deg);
  }

  .badge .level .score {
    z-index: 1;
    font-size: 1.3rem;
    font-weight: 700;
    color: #ffffff;
  }

  .badge h3 {
    text-transform: capitalize;
    font-weight: 700;
  }

  .badge.fake .level {
    border-color: #ee4d45;
  }
  .badge.fake .level .fill {
    background-color: #ee4d45;
  }

  .badge.real .level {
    border-color: #1DD53F;
  }
  .badge.real .level .fill {
    background-color: #1DD53F;
  }

  .badge.warn .level {
    border-color: #F45520;
  }
  .badge.warn .level .fill {
    background-color: #F45520;
  }

  @media screen and (min-width: 950px) {
    .badge {
      width: 95%;
    }
  }
</style>
