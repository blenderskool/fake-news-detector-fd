<template>
  <div class="hero pattern" :class="{'less-spacing': $route.path != '/'}">
    <slot />

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
    color: #ffffff;
  }
  .hero::before {
    opacity: 0.25;
  }

  .hero.less-spacing {
    padding-top: 5%;
    padding-bottom: 40%;
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

    .hero.less-spacing {
      padding: 4% 0 22%;
    }
  }

</style>
