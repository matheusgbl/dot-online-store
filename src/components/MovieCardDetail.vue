<template>
  <section class="movie_card_list">
    <base-card v-bind:key="movie" v-for="movie in movies" class="movie_card">
    <img class="movie_image" :src="`https://image.tmdb.org/t/p/w200${movie.img}`">
      <span class="movie_date">{{movie.date}}</span>
      <div class="movie_card_info">
        <p class="movie_card_name">{{movie.title}}</p>
        <div class="card_rate_gender">
        <p>{{movie.rate}}</p>
        <p>{{movie.genre}}</p>
        </div>
      </div>
      <div class="price">
        <p>R$ 79,99</p>
      </div>
      <button>Adicionar</button>
    </base-card>
  </section>
</template>

<script>
import '@/styles/card.css';

export default {
  name: 'MovieCardDetail',
  props: {
    movies: Object,
		},
		data() {
			return {};
		},
}
</script>

<style scoped>
.movie_card_list {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.movie_image {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 210px;
  height: 230px;
}

</style>