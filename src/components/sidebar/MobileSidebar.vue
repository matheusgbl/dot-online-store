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
  display: none;
  height: calc(95vh - 35px);
  width: 25vw;
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
  margin-right: 18px;
  color: #fa708a;

  &:hover {
    cursor: pointer;
  }
}

.nav_mobile_fav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.cart_icon {
  margin-right: 15px;
}

.nav_mobile_cart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
