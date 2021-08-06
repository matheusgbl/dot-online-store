<template>
  <div
    id="app"
    class="page-app"
  >
  <page-header-mobile v-if="mobileView" />
  <page-header v-if="!mobileView" />
  <main class="page-main">
    <movie-card-detail :movies="movies" />
  </main>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue';
import PageHeaderMobile from './components/MobileHeader.vue';
import MovieCardDetail from './components/MovieCardDetail.vue';
import api from './services/api';
const key = '02e8b35def595ca263a687a353b4b1c7';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageHeaderMobile,
    MovieCardDetail,
  },
  data() {
			return {
				movies: [],
        mobileView: true
			}
		},
    methods: {
      handleView() {
        this.mobileView = window.innerWidth <= 990;
      },
      async getMovies() {
        const response = await api.get(`/list/20?api_key=${key}`)
          const data = await response.data.items;
          const result = await api.get(`/genre/movie/list?api_key=${key}`)
          const genreName = result.data.genres[0].name
          this.movies = data.map(movie => (
            {
              date: movie.release_date,
              title: movie.original_title,
              rate: movie.vote_average,
              img: movie.poster_path,
              id: movie.id,
              genre: genreName
            }
          ));
      },
      
  },
  created() {
    this.getMovies();
    this.handleView();
    window.addEventListener('resize', this.handleView)
  },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>