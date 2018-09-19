<template>
  <div class="home">
    <hero>
      <Header />
      <form @submit.prevent="checkNews">
        <input
          type="text"
          placeholder="Enter news title"
          v-model="newsTitle"
          required
        />
        <br>
        <btn class="check-news" type="submit">
          Check news
        </btn>
      </form>
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

    <section class="pattern final">
      <h2>Report fake news</h2>
      <h3>Help us in collecting false news</h3>

      <btn>Start Reporting</btn>
    </section>

    <Footer />

  </div>
</template>

<script>
import Header from '@/components/Header'
import hero from '@/components/Hero'
import card from '@/components/Card'
import btn from '@/components/Button'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Header,
    hero,
    card,
    btn,
    Footer
  },
  data() {
    return {
      newsTitle: ''
    }
  },
  methods: {
    checkNews() {
      this.$router.push({
        path: 'news',
        query: {
          title: this.newsTitle
        }
      });
    }
  },
  created() {
    document.title = 'News Detector';
  }
}
</script>

<style scoped>
  .check-news {
    margin-top: 8%;
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

    font-size: 1.13rem;
    transition: all 0.2s ease;
  }
  section.cards .card:hover {
    transform: scale(1.03);
  }
  section.cards .card .title {
    font-size: 1.45rem;
    color: #2F353E;
    font-weight: 700;
    margin-bottom: 15px;
  }
  section.cards .card p {
    color: #6C7480;
  }

  @media screen and (min-width: 650px) {
    section.cards { 
      flex-direction: row-reverse;
      flex-wrap: nowrap;
    }

    section.cards .card {
      width: 50%;
    }
  }

  @media screen and (min-width: 950px) {

    section.cards {
      padding: 0 100px;
    }

    .check-news {
      margin-top: 3%;
    }

  }

</style>