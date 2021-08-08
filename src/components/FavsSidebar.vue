<template>
  <transition name="show">
    <aside :class="{ openFav: openFav }" v-if="openFav" id="cart_sidebar" class="sidebar">
        <nav class="nav_header">
        <p>Meus Favoritos</p>
        <a href="#">Esvaziar</a>
      </nav>
    </aside>
  </transition>
</template>

<script>
export default {
  props: {
    openFav: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: none;
  height: calc(95vh - 35px);
  width: 20vw;
  position: absolute;
  z-index: 1;
  border-top: 2px solid rgb(180, 180, 180);
  border-left: 2px solid rgb(180, 180, 180);
  border-bottom: 2px solid rgb(180, 180, 180);
  top: 80px;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding: 40px 20px;

  &.openFav {
    display: block;
    }
}

.show {
  &-enter, &-leave-to {
    opacity: 0;
    transform: translateX(60px);
  }
  &-enter-active, &-leave-active {
    transition: all 500ms;
  }
}

.nav_header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-weight: 600;
    font-size: 20px;
  }
}

</style>
