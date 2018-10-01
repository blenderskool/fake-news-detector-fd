<template>
  <footer>
    <span>MIT Licensed</span>
    <a href="https://github.com/blenderskool/fake-news-detector-fd" target="_blank" rel="noreferrer">
      Frontend code
    </a>
    <a href="https://gitlab.com/neelkamath/fake-news-checker" target="_blank" rel="noreferrer">
      Backend code
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  footer {
    text-align: center;
    color: #6C7480;
    background-color: #ffffff;
    padding: 20px 50px;
    font-size: 1rem;
    font-weight: 700;
    box-shadow: 0 2px 13px rgba(0, 0, 0, 0.1);
  }

  footer a {
    font-size: 1rem;
    padding: 0;
  }

  footer span,
  footer a {
    display: block;
    padding: 5px 0;
  }

  @media screen and (min-width: 650px) {
    footer {
      text-align: right;
    }

    footer span {
      float: left;
    }

    footer span,
    footer a {
      display: inline-block;
      margin: 0 15px;
      padding: 0;
    }
  }
</style>
