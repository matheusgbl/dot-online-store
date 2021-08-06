<template>
  <section class="movie_card_list">
    <base-card v-bind:key="movie" v-for="movie in movies" class="movie_card">
    <img class="movie_image" :src="`https://image.tmdb.org/t/p/w200${movie.img}`">
      <span class="movie_date">{{movie.date}}</span>
      <div class="movie_card_info">
        <p class="movie_card_title"><strong>{{movie.title}}</strong></p>
        <div class="card_rate_genre">
        <p><strong>{{movie.rate}}</strong></p>
        <p>{{movie.genre}}</p>
        </div>
      </div>
      <div class="price">
        <p>R$ 79,99</p>
      </div>
    <button class="buy_button">Adicionar</button>
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  font-family: Arial, Helvetica, sans-serif;
}

.movie_image {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 240px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.movie_card_title {
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical
}

.price {
  margin-top: 5px;
}

.card_rate_genre {
  display: flex;
  justify-content: center;
}

.card_rate_genre > p {
  margin-left: 10px;
}

.buy_button {
  background-color: #6558f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 1.5rem;
  width: 100%;
  align-items: center;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 12px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.buy_button:hover {
  cursor: pointer;
  background-color: #3d33a8;
}

</style>