<template>
  <div
    id="app"
    class="page-app"
  >
  <mobile-header v-if="mobileView" @togglemobile="openMobile = !openMobile" />
  <mobile-sidebar v-if="mobileView" :openMobile="openMobile" />
  <main>
    <page-header
      @togglefav="openFav = !openFav"
      @togglenav="navOpen = !navOpen"
      v-if="!mobileView"
    />
    <cart-sidebar v-if="!mobileView" :open="navOpen" />
    <fav-sidebar v-if="!mobileView" :openFav="openFav" />
    <home :open="navOpen || openFav || openMobile" :movies="movies" />
  </main>
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import api from './services/api';

const key = process.env.VUE_APP_API_KEY;

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      movies: [],
      mobileView: true,
      navOpen: false,
      openFav: false,
      openMobile: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    async getMovies() {
      const genresArr = [];
      const response = await api.get(`/list/20?api_key=${key}`);
      const data = await response.data.items;
      await Promise.all(
        data.map(async (movie) => {
          const result = await api.get(`/movie/${movie.id}?api_key=${key}`);
          genresArr.push(result.data.genres);
        }),
      );
      const genreName = genresArr.map((genre) => genre[0].name);
      this.movies = data.map((movie) => (
        {
          date: movie.release_date,
          title: movie.original_title,
          rate: movie.vote_average,
          img: movie.poster_path,
          id: movie.id,
          genre: genreName,
        }
      ));
    },
  },
  created() {
    this.getMovies();
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
