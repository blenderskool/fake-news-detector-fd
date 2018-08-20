<template>
  <div class="hero pattern">
    <slot />

    <!-- <svg class="divider" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 291.75 1280 90.25" width="100%"><path d=" M 0 291.75 L 640 329.75 L 1280 291.75 L 1280 382 L 0 382 L 0 291.75 Z " fill="rgb(255,255,255)"/></svg> -->
    <div class="divider">
      <span class="tri1" />
      <span class="tri2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero'
}
</script>

<style scoped>
  .hero {
    background-color: #325ab7;
    background-image: linear-gradient(135deg, #325ab7 16%, #07305b 95%);
    position: relative;
    padding: 12% 0 30%;
    text-align: center;
    z-index: 0;
  }
  .hero::before {
    opacity: 0.25;
  }

  .divider {
    display: flex;
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    z-index: -1;
    overflow-x: hidden;
  }

  .divider span {
    width: 0;
    height: 0;
    border-style: solid;
    /* filter: drop-shadow(0 -5px 20px rgba(0, 0, 0 ,0.2)); */
  }

  .tri1 {
    border-width: 25px 0 0 50vw;
    border-color: transparent transparent transparent #ffffff;
  }

  .tri2 {
    border-width: 0 0 25px 50vw;
    border-color: transparent transparent #ffffff transparent;
  }


  @media screen and (min-width: 950px) {
    .hero {
      padding: 8% 0 20%;
    }
  }

</style>
