<template>
  <div class="news-check">
    <hero>
      <Header />
      <form @submit.prevent="checkNews">
        <input
          type="text"
          placeholder="Enter news title"
          v-model="newsTitle"
          required
        />
        <btn>Check News</btn>
      </form>
    </hero>

    <section class="info">
      <card>
        <div class="details">
          <h2>{{ $route.query.title }}</h2>
          <p>
            Jerry Thompson, an American astronaut who was in orbit this week, claims to have matched with an extraterrestrial on Tinder.
          </p>
          <p>
            “It’s lonely out in space,” said Thompson in a recent press conference. “I miss the earth so much. I miss my wife. So yeah, sometimes I’ll go on Tinder just to see what’s out there. I always get the message ‘there’s no one new around you,’ but then I saw her.
          </p>

          <div class="similar">
            <h2>Similar fake news</h2>

            <ul>
              <li>
                <h3>Alien sees human in mirror</h3>
                <p>
                  Recent study shows that aliens see themselves as humans in front of a mirror.
                </p>
              </li>
              <li>
                <h3>Tinder has more aliens than humans</h3>
                <p>
                  Tinder recently reported that there are more monthly active aliens
                </p>
              </li>

            </ul>

          </div>
        </div>
        <div class="meta">
          <badge type="fake" />

          <h3>Found on</h3>
          <ul>
            <li><a href="#" target="_blank">theonion.com</a></li>
            <li><b>14/20</b> people reported</li>
          </ul>
        </div>
      </card>
    </section>

  </div>
</template>

<script>
import Header from '@/components/Header'
import hero from '@/components/Hero'
import btn from '@/components/Button'
import card from '@/components/Card'
import badge from '@/components/Badge'

export default {
  name: 'CheckNews',
  components: {
    Header,
    hero,
    btn,
    card,
    badge
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
    const title = this.$route.query.title;

    this.newsTitle = title;
    document.title = `${title} | News Detector`;
  },
  destroyed() {
    document.title = 'News Detector';
  }
}
</script>

<style scoped>

  input {
    width: calc(75% - 150px);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button {
    height: 44px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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

  section.info .card .meta {
    display: flex;
    margin-right: auto;
    margin-left: 0;
    flex-direction: column;
  }
  section.info .card .meta a {
    display: inline;
  }

  section.info .similar ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  section.info .similar ul li h3 {
    margin-top: 10px;
  }
  section.info .similar ul li p {
    margin: 10px 0;
  }

  @media screen and (min-width: 650px) {
    section.info .card {
      flex-direction: row;
    }

    section.info .card .details {
      width: 60%;
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

  @media screen and (min-width: 950px) {

    section.info .card {
      width: 80%;
    }

    .check-news {
      margin-top: 3%;
    }

  }

</style>
