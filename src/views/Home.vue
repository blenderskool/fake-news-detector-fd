<template>
  <div class="home">
    <hero>
      <header>
        <h1 class="logo">
          News Detector
        </h1>
        
        <navigation />
      </header>
      <inp placeholder="Enter news title" />
      <br>
      <btn class="check-news">Check news</btn>
    </hero>
  
    <section class="cards">
      <card>
        <h2 class="title">
          Trending fake news
        </h2>
        <p>
          Mayor Of Phoenix Apologizes For Naming Berlin Germany Of 1941 As Sister City
        </p>
        <a href="#">Read more</a>
      </card>
      <card>
        <h2 class="title">
          Recent fake news
        </h2>
        <p>
          Elon Musk Gives Saudi Investors Presentation On New Autonomous Beheading Machine For Adulterers
        </p>
        <a href="#">Read more</a>
      </card>
    </section>

    <section class="pattern final-cta">
      <h2 class="title">Report fake news</h2>
      <h3 class="subtitle">Help us in collecting false news</h3>

      <btn>Start Reporting</btn>
    </section>
  </div>
</template>

<script>
import navigation from '@/components/Navigation'
import hero from '@/components/Hero'
import card from '@/components/Card'
import inp from '@/components/Input'
import btn from '@/components/Button'

export default {
  name: 'home',
  components: {
    navigation,
    hero,
    card,
    inp,
    btn
  }
}
</script>


<style>
  .logo {
    font-size: 2.3rem;
    color: #ffffff;
  }

  h1, h2, h3 {
    margin: 0;
  }

</style>

<style scoped>
  .check-news {
    margin-top: 8%;
  }

  .hero .logo {
    margin-bottom: 20%;
  }

  section.cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0 20px;
    justify-content: center;

    top: -60px;
  }

  section.cards .card {
    margin: 15px;

    color: #2F353E;
    font-size: 1.13rem;
  }

  nav {
    display: none;
  }

  @media screen and (min-width: 650px) {
    section.cards { 
      flex-direction: row-reverse;
      flex-wrap: nowrap;
    }

    section.cards .card {
      width: 50%;
    }

    nav {
      display: block;
    }
  }

  @media screen and (min-width: 950px) {
    .hero .logo {
      margin-bottom: 8%;
    }

    section.cards {
      padding: 0 100px;
    }

    .check-news {
      margin-top: 3%;
    }
  }

</style>
