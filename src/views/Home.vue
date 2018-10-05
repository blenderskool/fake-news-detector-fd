<template>
  <div class="home">
    <hero>
      <Header />
      <form @submit.prevent="checkNews">
        <input
          type="text"
          aria-label="Enter news title"
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

    <section class="description">
      <h3>Our goal is to keep you away from fake and misleading news</h3>
      <span>by making Defaux accessible through multiple platforms</span>
      <br />
      <img src="https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_HOR.png">
    </section>
  
    <section class="cards" v-show="false">
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

    <report-cta />

    <Footer />

  </div>
</template>

<script>
import Header from '@/components/Header'
import hero from '@/components/Hero'
import card from '@/components/Card'
import btn from '@/components/Button'
import ReportCta from '@/components/ReportCta'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Header,
    hero,
    card,
    btn,
    'report-cta': ReportCta,
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
    document.title = 'Defaux | News detector';
  }
}
</script>

<style scoped>
  .check-news {
    margin-top: 8%;
  }

  .description {
    text-align: center;
    padding: 5rem 2rem;
    font-size: 1.3rem;
    color: #6C7480;
  }
  .description h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #2F353E;
  }
  .description img {
    width: 250px;
    border-radius: 5px;
    margin-top: 1.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
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