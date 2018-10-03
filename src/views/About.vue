<template>
  <div class="about">
    <hero>
      <Header />
      <h2>About</h2>
      <h3>The backbone of Defaux</h3>
    </hero>

    <section class="people">
      <card-profile
        v-for="contributor in people"
        :key="contributor.name"
        :title="contributor.name"
        :image="require(`../assets/avatars/${contributor.avatar}`)"
      >
        {{ contributor.role }}
      </card-profile>
    </section>

    <section class="pattern final">
      <h2>Sources we used</h2>
      <h3>to build this amazing service</h3>
      <div class="sources">
        <a
          v-for="source in sources"
          :key="source.name"
          :href="source.site"
          :title="source.name"
          target="_blank"
        >
          <img :src="source.logo" :alt="source.name">
        </a>
      </div>
    </section>

    <Footer />

  </div>
</template>

<script>
import Header from '@/components/Header'
import hero from '@/components/Hero'
import CardProfile from '@/components/CardProfile'
import Footer from '@/components/Footer'
import contributors from '@/contributors.js'

export default {
  name: 'about',
  components: {
    hero,
    Header,
    'card-profile': CardProfile,
    Footer
  },
  data() {
    return {
      people: contributors.people,
      sources: contributors.sources
    }
  },
  created() {
    document.title = 'About | Defaux'
  }
}
</script>

<style scoped>

  section.people {
    display: flex;
    flex-direction: column;
    top: -95px;
    padding: 0 20px;
  }
  section.people .card {
    margin: 50px 15px 15px;
    color: #6C7480;
  }

  .sources {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
  }
  .sources img {
    /* max-width: 300px; */
    max-height: 1.9rem;
    margin: 15px;
  }

  @media screen and (min-width: 650px) {
    section.people { 
      flex-direction: row;
      flex-wrap: wrap;
    }

    section.people .card {
      width: 29%;
    }

    .sources {
      flex-direction: row;
    }

  }

  @media screen and (min-width: 950px) {
    section.people {
      padding: 0 80px;
    }

  }

</style>
