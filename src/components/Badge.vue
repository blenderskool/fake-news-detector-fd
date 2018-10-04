<template>
  <div class="badge" :class="{
    fake: type === 'fake',
    real: type === 'real',
    warn: type === 'satire'
  }">
    <h3>{{ type }}</h3>
    <div class="level">
      <span class="fill" :style="{top: `${90-percentage}%` }" />
      <span class="score"
        :style="{color: percentage > 45 ? '#fff' : '#000'}"
      >
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
  .badge .level .fill,
  .badge .level .fill::before,
  .badge .level .fill::after {
    position: absolute;
    bottom: -1px;
    left: -1px;
    right: -1px;

    background-repeat: repeat-x;
  } 
  .badge .level .fill {
    top: 45%;

    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="555 349 100 161.348" width="100" height="161.348"><path d=" M 655 510.348 L 655 510.348 L 555 510.348 L 555 349 C 581.484 349 587.192 365.21 603.402 365.21 C 619.612 365.21 634.959 349 655 349 L 655 510.348 Z " fill="rgb(0,0,0)"/></svg>');
    background-position: 0 8px;
    animation: flow 10s linear infinite;
  }
  .badge .level .fill::before,
  .badge .level .fill::after {
    content: '';
    top: -1px;
  }

  .badge .level .fill::before {
    opacity: 0.6;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="555 349 100 161.348" width="100" height="161.348"><path d=" M 655 510.348 L 655 510.348 L 555 510.348 L 555 349 C 581.484 349 587.192 365.21 603.402 365.21 C 619.612 365.21 634.959 349 655 349 L 655 510.348 Z " fill="rgb(0,0,0)"/></svg>');
    background-position: 80px 4px;
    animation: flow 13s linear infinite;
  }
  .badge .level .fill::after {
    opacity: 0.4;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="555 349 100 161.348" width="100" height="161.348"><path d=" M 655 510.348 L 655 510.348 L 555 510.348 L 555 349 C 581.484 349 587.192 365.21 603.402 365.21 C 619.612 365.21 634.959 349 655 349 L 655 510.348 Z " fill="rgb(0,0,0)"/></svg>');
    background-position: 30px 0;
    animation: flow 15s linear infinite;
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
  .badge.fake .level .fill,
  .badge.fake .level .fill::before,
  .badge.fake .level .fill::after {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="555 349 100 161.348" width="100" height="161.348"><path d=" M 655 510.348 L 655 510.348 L 555 510.348 L 555 349 C 581.484 349 587.192 365.21 603.402 365.21 C 619.612 365.21 634.959 349 655 349 L 655 510.348 Z " fill="#ee4d45"/></svg>');
  }

  .badge.real .level {
    border-color: #1DD53F;
  }
  .badge.real .level .fill,
  .badge.real .level .fill::before,
  .badge.real .level .fill::after {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="555 349 100 161.348" width="100" height="161.348"><path d=" M 655 510.348 L 655 510.348 L 555 510.348 L 555 349 C 581.484 349 587.192 365.21 603.402 365.21 C 619.612 365.21 634.959 349 655 349 L 655 510.348 Z " fill="#1DD53F"/></svg>');
  }

  .badge.warn .level {
    border-color: #F45520;
  }
  .badge.warn .level .fill,
  .badge.warn .level .fill::before,
  .badge.warn .level .fill::after {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="555 349 100 161.348" width="100" height="161.348"><path d=" M 655 510.348 L 655 510.348 L 555 510.348 L 555 349 C 581.484 349 587.192 365.21 603.402 365.21 C 619.612 365.21 634.959 349 655 349 L 655 510.348 Z " fill="#F45520"/></svg>');
  }

  @media screen and (min-width: 950px) {
    .badge {
      width: 95%;
    }
  }

  @keyframes flow {
    0% {
      background-position-x: -550px;
    }
  }
</style>
