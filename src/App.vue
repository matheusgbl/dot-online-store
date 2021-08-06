<template>
  <div
    id="app"
    class="page-app"
  >

  <page-header />
  <main class="page-main">
    <movie-card-detail :movies="movies" />
  </main>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue';
import MovieCardDetail from './components/MovieCardDetail.vue';
import api from './services/api';
const key = '02e8b35def595ca263a687a353b4b1c7';

export default {
  name: 'App',
  components: {
    PageHeader,
    MovieCardDetail,
  },
  data() {
			return {
				movies: [],
			}
		},
		created() {
			this.getMovies();
		},
    methods: {
      async getMovies() {
          const response = await api.get(`/list/20?api_key=${key}`)
          const data = await response.data.items;
          const genreId = data.map(movie => movie.genre_ids[0])
          const result = await api.get(`/genre/movie/list?api_key=${key}`)
          console.log(genreId)
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