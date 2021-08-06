<template>
  <div class="movie_card">
    <fa class="heart_icon" icon="heart" size="2x" />
    <slot></slot>
  </div>
</template>

<style scoped>
.movie_card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 15rem;
  height: 30rem;
  text-align: center;
  margin-top: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: all 0.4s;
}

.movie_card:hover {
  transform: scale(1.05);
}

.heart_icon {
  position: absolute;
  margin-left: 70px;
  margin-top: 10px;
  color: #fa708a;
}
</style>