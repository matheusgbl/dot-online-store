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
  name: 'FavSidebar',
  props: {
    openFav: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #eee;
  border-top: 2px solid rgb(180, 180, 180);
  border-left: 2px solid rgb(180, 180, 180);
  border-bottom: 2px solid rgb(180, 180, 180);
  display: none;
  height: calc(95vh - 35px);
  position: absolute;
  overflow-x: hidden;
  padding: 40px 20px;
  right: 0;
  transition: 0.5s;
  top: 80px;
  width: 20vw;
  z-index: 1;

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
  align-items: center;
  display: flex;
  justify-content: space-between;

  & > p {
    font-weight: 600;
    font-size: 20px;
  }
}

</style>
