<template>
  <div :class="{ open: open }" id="main">
  <transition
    appear
    @before-enter="beforeEnter"
    @enter="enter"
  >
    <h1 v-if="showTitle">DOT Online Movie Shopping</h1>
  </transition>
  <main class="movie_card_list">
    <transition-group
      appear
      @before-enter="beforeEnterMovie"
      @enter="enterMovie"
      class="card"
    >
      <base-card
        :key="movie.id"
        v-for="(movie, index) in movies"
        :data-index="index"
        class="card"
      >
        <img :src="`https://image.tmdb.org/t/p/w200${movie.img}`">
        <p class="movie_date">{{format_date(movie.date)}}</p>
        <div>
          <p class="movie_card_title"><strong>{{movie.title}}</strong></p>
          <div class="card_rate_genre">
          <p><strong><fa class="star_icon" icon="star" />{{movie.rate}}</strong></p>
          <p>{{movie.genre[index]}}</p>
          </div>
        </div>
        <div class="price">
          <p>R$ 79,99</p>
        </div>
      <button class="buy_button">Adicionar</button>
      </base-card>
    </transition-group>
  </main>
</div>
</template>

<script>
/* eslint-disable no-param-reassign */
import { ref } from 'vue';
import gsap from 'gsap';
import moment from 'moment';

moment.locale('pt-br');

export default {
  name: 'MovieCardDetail',
  props: {
    movies: Object,
    open: Boolean,
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format('LL');
      }
      return value;
    },
  },
  setup() {
    const showTitle = ref(true);
    const showMovie = ref(true);

    const beforeEnter = (el) => {
      el.style.transform = 'translateX(-200px)';
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: 'back.out(2)',
        onComplete: done,
      });
    };

    const beforeEnterMovie = (el) => {
      el.style.transform = 'translateY(100px)';
      el.style.opacity = 0;
    };

    const enterMovie = (el, done) => {
      gsap.to(el, {
        duration: 1.5,
        y: 0,
        opacity: 1,
        delay: el.dataset.index * 0.2,
        onComplete: done,
      });
      gsap.utils.toArray(el).forEach((movie) => {
        const hover = gsap.to(movie, {
          scale: 1.05, duration: 0.1, paused: true, ease: 'power1.inOut',
        });
        movie.addEventListener('mouseenter', () => hover.play());
        movie.addEventListener('mouseleave', () => hover.reverse());
      });
    };

    return {
      beforeEnter,
      enter,
      showTitle,
      beforeEnterMovie,
      enterMovie,
      showMovie,
    };
  },
};
</script>

<style lang="scss" scoped>
#main {
  transition: all 0.3s;

  &.open, &.openFav {
    margin-right: 250px;
    transition: all 0.3s;
  }

  &.openMobile {
    margin-right: 30px;
    transition: all 0.3s;
  }

  h1 {
    margin-top: 2rem;
    text-align: center;
  }

  .card {
    &:hover {
      transform: scale(1.05);
    }
  }
}

.movie_card_list {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 40px 10px;
  padding: 80px 120px;

  .card {
    transition: all 0.4s;
  }

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 240px;
  }

  .movie_date {
    bottom: 18px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: 600;
    justify-content: center;
    position: relative;
    z-index: 1000;
  }

  .movie_card_title {
    display: -webkit-box;
    margin-top: -0.3rem;
    margin-bottom: 1rem;
    overflow: hidden;
    width: 100%;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical
  }

  .price {
    margin-top: 0.8rem;
  }

  .star_icon {
    color: #d8ae24;
    margin-right: 5px;
  }

  .card_rate_genre {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    & > p {
      margin-left: 8px;
    }
  }

  .buy_button {
    align-items: center;
    background-color: #6558f5;
    border: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    color: #fff;
    font-weight: 600;
    margin-top: 0.4rem;
    padding: 12px;
    width: 100%;

    &:hover {
      background-color: #3d33a8;
      cursor: pointer;
    }
  }
}

@media (max-width: 990px) {
  .movie_card_list {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px 10px;
    padding: 40px 60px;
    place-items: center;

  }
  #main {
    &.open, &.openFav {
      margin-right: 80px;
    }
  }
}
</style>
