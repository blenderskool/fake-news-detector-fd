<template>
  <div class="report-news">
    <hero>
      <Header />

      <h2>Report news</h2>
      <h3>Help in improving Defaux even more!</h3>

    </hero>

    <section class="report-form">
      <form @submit.prevent="reportNews" v-if="!finished">
        <fab-menu
          class="news-type"
          v-model="type"
          :items="['real', 'fake', 'satire', 'faux satire']"
        />
        <br>
        <textarea
          rows="3"
          v-model="title"
          placeholder="News title"
          required
        />
        <br>
        <br>
        <btn type="submit">
          Submit
        </btn>
      </form>
      <p v-else>
        Thanks for reporting the news
      </p>
    </section>

    <Footer />

  </div>
</template>

<script>
import axios from 'axios';
import hero from '@/components/Hero';
import Header from '@/components/Header';
import FabricMenu from '@/components/Menu';
import btn from '@/components/Button';
import Footer from '@/components/Footer';

export default {
  name: 'ReportNews',
  components: {
    hero,
    Header,
    btn,
    'fab-menu': FabricMenu,
    Footer
  },
  data() {
    return {
      title: '',
      type: 'news type',
      finished: false
    }
  },
  methods: {
    reportNews() {
      if (this.type === 'news type') return;

      axios.post('https://fake-news-checker.herokuapp.com/api/v1/report', {
        title: this.title,
        type: this.type === 'faux satire' ? 'faux_satire' : this.type,
      }).then(res => {
        if (res.status == 204) {
          this.finished = true;
        }
      });
    }
  },
  created() {
    document.title = 'Report News | Defaux';
  }
}
</script>

<style scoped>
  section.report-form {
    text-align: center;
    padding: 4rem 2rem 8rem;
  }

  textarea, .news-type {
    font-family: 'Nunito', sans-serif;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 4px;
    background-color: #ffffff;
  }

  textarea {
    padding: 10px;
    border: 1px solid #cdd6da;
  }

  .news-type {
    margin-bottom: 20px;
    width: 100%;
  }

  @media screen and (min-width: 650px) {
    textarea, .news-type {
      width: 60%;
    }
  }
</style>
