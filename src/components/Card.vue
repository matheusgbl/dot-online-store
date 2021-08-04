<template>
  <section class="movie_card_list">
    <div class="movie_card">
      <img src="" alt="imagem do filme">
      <span>Data de lançamento</span>
      <div class="movie_card_info">
        <p class="movie_card_name">Nome do filme</p>
        <div class="card_rate_gender">
        <p>rate</p>
        <p>genero</p>
        </div>
      </div>
      <div class="price">
        <p>Preço</p>
      </div>
    </div>
  </section>
</template>

<script>
import '@/styles/card.css';

export default {
  name: 'Card',
}
</script>