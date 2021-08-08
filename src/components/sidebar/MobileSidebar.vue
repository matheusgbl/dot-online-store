<template>
  <transition name="show">
    <aside :class="{ openMobile: openMobile }" v-if="openMobile" id="cart_sidebar" class="sidebar">
      <nav class="nav_mobile_fav">
        <fa class="heart_icon" icon="heart" size="2x" />
        <p>Meus favoritos</p>
      </nav>
      <nav class="nav_mobile_cart" >
        <fa class="cart_icon" icon="shopping-cart" size="2x" />
        <p>Meu carrinho</p>
      </nav>
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'MobileSidebar',
  props: {
    openMobile: Boolean,
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
  width: 25vw;
  z-index: 1;

  &.openMobile {
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

.heart_icon {
  color: #fa708a;
  margin-right: 18px;

  &:hover {
    cursor: pointer;
  }
}

.nav_mobile_fav {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
}

.cart_icon {
  margin-right: 15px;
}

.nav_mobile_cart {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 480px) {
  .nav_mobile_fav {
    & p {
      display: none;
    }
  }

  .nav_mobile_cart {
    & p {
      display: none;
    }
  }
}
</style>
