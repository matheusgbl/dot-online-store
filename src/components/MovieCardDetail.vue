<template>
<transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      :css="false"
    >
      <h1 v-if="showTitle">DOT Online Movie Shopping</h1>
    </transition>
  <section class="movie_card_list">
    <base-card v-bind:key="movie" v-for="movie in movies" class="movie_card">
    <img :src="`https://image.tmdb.org/t/p/w200${movie.img}`">
      <p class="movie_date">{{movie.date}}</p>
      <div>
        <p class="movie_card_title"><strong>{{movie.title}}</strong></p>
        
        <div class="card_rate_genre">
        <p><strong><fa class="star_icon" icon="star" />{{movie.rate}}</strong></p>
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
import { ref } from 'vue';
import gsap from 'gsap';

export default {
  name: 'MovieCardDetail',
  props: {
    movies: Object,
		},
		data() {
			return {};
		},
    setup() {
    const showTitle = ref(true)
    const beforeEnter = (el) => {
      el.style.transform = 'translateX(-200px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: 'back.out(2)',
        
        onComplete: done
      })
    }
    return { beforeEnter, enter, showTitle }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 2rem;
}

.movie_card_list {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

img {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 240px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.movie_date {
  margin-bottom: 0.5rem;
}

.movie_card_title {
  overflow: hidden;
  margin-bottom: 0.5rem;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical
}

.price {
  margin-top: 0.8rem;
}

.star_icon {
  margin-right: 5px;
  color: #d8ae24;
}

.card_rate_genre {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
}

.card_rate_genre > p {
  margin-left: 8px;
}

.buy_button {
  background-color: #6558f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 0.4rem;
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