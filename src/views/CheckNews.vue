<template>
  <div class="news-check">
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
        <btn>Check News</btn>
      </form>
    </hero>

    <section class="info" ref="info">
      <card>
        <div class="loading" v-if="loading">
          <span class="loader" />
          <div>Searching the news</div>
        </div>
        <template v-if="news.percentage > 0 && !loading">
          <div class="details" v-if="news.status !== 'unsure'">
            <h2>{{ news.title }}</h2>
            <p>{{ news.snippet }}</p>

            <div class="similar" v-if="related.length">
              <h2>Similar news</h2>

              <ul>
                <li v-for="news in related" :key="news.matchedTitle">
                  <router-link :to="{path: '/news', query: { title: news.matchedTitle }}">
                    <h3>{{ news.matchedTitle }}</h3>
                  </router-link>
                  <p>{{ news.snippet }}</p>
                </li>
              </ul>

            </div>
          </div>
          <div class="meta" v-if="news.status !== 'unsure'">
            <badge :type="news.status" :percentage="news.percentage" />

            <h3>Found on</h3>
            <ul v-if="news.sources && news.sources.length > 0 && !news.isReported">
              <li v-for="(source, i) in news.sources" :key="i">
                <a
                  :href="source.link"
                  rel="noreferrer"
                  v-if="source.link"
                  target="_blank"
                >
                  {{ source.text }}
                </a>
                <span v-else>
                  {{ source.text }}
                </span>
              </li>
            </ul>
            <ul v-else-if="news.isReported">
              <li>
                Source unverifiable
              </li>
            </ul>
          </div>
          <div class="not-found" v-else>
            <h2>News not found</h2>
            <p>Try out some other news</p>
          </div>
        </template>
        <div class="not-found" v-else-if="!loading">
          <h2>News not found</h2>
          <p>Try out some other news</p>
        </div>
      </card>
    </section>

    <report-cta />

    <Footer />

  </div>
</template>

<script>
import axios from 'axios'

import Header from '@/components/Header'
import hero from '@/components/Hero'
import btn from '@/components/Button'
import card from '@/components/Card'
import badge from '@/components/Badge'
import ReportCta from '@/components/ReportCta'
import Footer from '@/components/Footer'

export default {
  name: 'CheckNews',
  components: {
    Header,
    hero,
    btn,
    card,
    badge,
    'report-cta': ReportCta,
    Footer
  },
  data() {
    return {
      newsTitle: '',
      news: {
        title: '',
        status: 'fake',
        snippet: '',
        sources: [],
        percentage: 0,
        isReported: false
      },
      related: [],
      loading: true
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
    },
    getDetails() {
      const title = this.$route.query.title;

      this.newsTitle = title;
      document.title = `${title} | Defaux`;
      /**
       * Prepare the loading state
       */
      this.loading = true;

      /**
       * Scroll the news card into the view
       */
      if (this.$refs.info)
        this.$refs.info.scrollIntoView({
          behavior: 'smooth'
        });

      /**
       * API call for getting news status
       */
      axios.get(`https://fake-news-checker.herokuapp.com/api/v1/check/${title}`)
      .then(res => {
        const data = res.data;
        const news = data.news;
        this.loading = false;

        /**
         * If the status is unsure, then the news article wasn't found
         */
        this.news.status = data.status;
        if (data.status === 'unsure') return;

        this.news.title = news.matchedTitle;
        document.title = `${news.matchedTitle} | Defaux`;

        this.news.snippet = news.snippet;
        this.news.percentage = news.percentage;

        /**
         * RegExp to get the domain of the site excluding the routes
         */
        const regexp = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img;
        this.news.sources = [
          {
            text: regexp.exec(news.source)[1],
            link: news.source
          }
        ];

        /**
         * Use the first 2 related articles
         */
        if (data.relatedNews)
          this.related = data.relatedNews.slice(-2);

        this.news.isReported = data.isReported;

      })
      .catch(err => {
        console.log(`Error: ${err}`);
        this.loading = false;
      });

    }
  },
  watch: {
    '$route.query.title': function() {
      this.getDetails();
    }
  },
  beforeCreate() {
    /**
     * Fail check if the news title is not provided
     */
    if (!this.$route.query.title)
      this.$router.push('/');
  },
  created() {
    this.getDetails();
  }
}
</script>

<style scoped>

  button {
    margin-top: 8%;
  }

  section.info {
    display: flex;
    top: -60px;
    padding: 0 35px;
    justify-content: center;
  }

  section.info .card {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
  section.info .card .details p:empty::after {
    content: 'No description found';
    text-align: center;
    display: block;
    font-size: 1.1rem;
    margin-top: 30px;
  }

  section.info .card .meta {
    display: flex;
    margin-right: auto;
    margin-left: 0;
    flex-direction: column;
    width: 100%;
  }
  section.info .card .meta a {
    display: inline;
    word-wrap: break-word;
  }

  section.info .similar ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  section.info .similar ul li a {
    padding-top: 0;
  }
  section.info .similar ul li h3 {
    margin-top: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  section.info .similar ul li p {
    margin: 10px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  section.info h2 {
    font-size: 1.7rem;
    margin: 10px 0;
  }
  section.info p {
    color: #6C7480;
    font-size: 1.2rem;
  }

  section.info .similar {
    margin-top: 40px;
  }

  section.info h3 {
    font-weight: 700;
    margin-top: 30px;
  }
  section.info .meta ul {
    font-size: 1.15rem;
  }

  section.info .not-found {
    width: 100%;
    text-align: center;
  }

  section.info .loading {
    text-align: center;
    width: 100%;
  }
  section.info .loading .loader {
    display: inline-block;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #EE7321;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media screen and (min-width: 650px) {

    input {
      width: calc(75% - 160px);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button {
      height: 44px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-top: 0;
    }

    br {
      display: none;
    }


    section.info .card {
      flex-direction: row;
    }

    section.info .card .details {
      width: 65%;
      order: initial;
    }

    section.info .card .meta {
      width: 35%;
      flex-direction: column;
    }

    section.info .similar ul {
      flex-direction: row;
    }

    section.info .similar ul li {
      margin: 0 10px;
      max-width: 50%;
    }
    section.info .similar ul li:first-child {
      margin-left: 0;
    }
    section.info .similar ul li:last-child {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 950px) {
    section.info .card .details {
      width: 75%;
    }
    section.info .card .meta {
      flex-direction: column;
      width: 22%;
      margin-right: 0;
      margin-left: auto;
    }
    section.info .card {
      width: 80%;
    }

    .check-news {
      margin-top: 3%;
    }

  }

</style>
