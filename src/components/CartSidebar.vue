<template>
  <transition name="show">
    <aside :class="{ open: open }" id="cart_sidebar" class="sidebar">
      <transition appear name="fade">
        <div class="items">
        <nav>
        <p>Meu Carrinho</p>
        <a href="#">Esvaziar</a>
      </nav>
      <nav>
        <p>Total:</p>
        <button>Finalizar </button>
      </nav>
        </div>
      </transition>
    </aside>
  </transition>
</template>

<script>
export default {
  props: {
    open: Boolean,
  },
};
</script>

<style lang="scss" scoped>
  .sidebar {
    display: none;
    height: 100%;
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
    padding-top: 40px;

    &.open {
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
  .fade {
    &-enter {
      opacity: 0;
      transform: translateX(60px);
    }
    &-enter-active {
      transition: all 500ms ease-in-out;
      transition-delay: calc( 50ms * var(--index) );
    }
  }
</style>
