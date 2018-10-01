<template>
  <div class="about">
    <hero>
      <Header />
      <h2>About</h2>
      <h3>The backbone of Defaux</h3>
    </hero>

    <section class="team">
      <card-profile
        v-for="contributor in contributors"
        :key="contributor.name"
        :title="contributor.name"
        :image="require(`../assets/avatars/${contributor.avatar}`)"
      >
        {{ contributor.role }}
      </card-profile>
    </section>

    <section class="pattern final">
      <h2>Sources we used</h2>
      <h3>Coming Soon</h3>
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
      contributors
    }
  },
  created() {
    document.title = 'About | Defaux'
  }
}
</script>

<style scoped>

  section.team {
    display: flex;
    flex-direction: column;
    top: -95px;
    padding: 0 20px;
  }
  section.team .card {
    margin: 50px 15px 15px;
    color: #6C7480;
  }

  @media screen and (min-width: 650px) {
    section.team { 
      flex-direction: row;
      flex-wrap: wrap;
    }

    section.team .card {
      width: 29%;
    }

  }

  @media screen and (min-width: 950px) {
    section.team {
      padding: 0 80px;
    }

  }

</style>
