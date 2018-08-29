<template>
  <div class="about">
    <hero>
      <Header />
      <h2>About</h2>
      <h3>The backbone of News Detector</h3>
    </hero>

    <section class="team">
      <card-profile
        title="Neel Kamath"
        :image="require('../assets/neel.jpeg')"
      >
        Worked on something
      </card-profile>
      <card-profile
        title="Akash Hamirwasia"
        :image="require('../assets/akash.jpg')"
      >
        Worked on something
      </card-profile>
      <card-profile
        title="Siri R J"
        :image="require('../assets/siri.jpeg')"
      >
        Worked on something
      </card-profile>
    </section>

    <section class="pattern final">
      <h2>Sources we used</h2>
      <h3>Coming Soon</h3>
    </section>

  </div>
</template>

<script>
import hero from '@/components/Hero'
import Header from '@/components/Header'
import CardProfile from '@/components/CardProfile'

export default {
  name: 'about',
  components: {
    hero,
    Header,
    'card-profile': CardProfile
  },
  created() {
    document.title = 'About | News Detector'
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
  }

  @media screen and (min-width: 650px) {
    section.team { 
      flex-direction: row;
      flex-wrap: nowrap;
    }

    section.team .card {
      width: 33%;
    }

  }

  @media screen and (min-width: 950px) {
    section.team {
      padding: 0 80px;
    }

  }

</style>
