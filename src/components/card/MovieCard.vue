<template>
  <div class="movie_card">
    <fa class="heart_icon" icon="heart" size="2x" />
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.movie_card {
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  height: 30rem;
  margin-top: 20px;
  max-width: 15rem;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
}

.heart_icon {
  color: #fa708a;
  margin-left: 70px;
  margin-top: 10px;
  position: absolute;
}
</style>
