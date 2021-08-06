<template>
  <div class="movie_card">
    <slot></slot>
  </div>
</template>

<style scoped>
.movie_card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 13rem;
  height: 20rem;
  text-align: center;
  margin-top: 30px;
}
</style>