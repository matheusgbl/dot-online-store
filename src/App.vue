<template>
  <div
    id="app"
    class="page-app"
  >
  <page-header-mobile v-if="mobileView" />
  <page-header
    @togglefav="openFav = !openFav"
    @togglenav="navOpen = !navOpen"
    v-if="!mobileView"
  />
  <cart-sidebar v-if="!mobileView" :open="navOpen" />
  <favs-sidebar v-if="!mobileView" :openFav="openFav" />
  <main>
    <home :open="navOpen || openFav" :movies="movies" />
  </main>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue';
import PageHeaderMobile from './components/MobileHeader.vue';
import CartSidebar from './components/CartSidebar.vue';
import FavsSidebar from './components/FavsSidebar.vue';
import Home from './pages/Home.vue';
import api from './services/api';

const key = '02e8b35def595ca263a687a353b4b1c7';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageHeaderMobile,
    CartSidebar,
    FavsSidebar,
    Home,
  },
  data() {
    return {
      movies: [],
      mobileView: true,
      showNav: false,
      navOpen: false,
      openFav: false,
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
