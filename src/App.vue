<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;

    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    color: #2F353E;
  }

  section {
    position: relative;
  }

  a {
    display: block;
    text-decoration: none;
    text-align: center;
    padding-top: 10px;
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #EE7321;
  }

  .final-cta {
    text-align: center;
    padding: 20% 0;
  }
  .final-cta .title {
    font-weight: 700;
    font-size: 1.8rem;
  }
  .final-cta .subtitle {
    color: #A4A7AC;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .final-cta button {
    margin-top: 20px;
  }


  .pattern::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(assets/pattern.svg);
    background-size: 35%;
    opacity: 0.1;
    z-index: -1;
  }

  @media screen and (min-width: 650px) {
    .final-cta {
      padding: 8% 0;
    }

    .pattern::before {
      background-size: 18%;
    }
  }

</style>
