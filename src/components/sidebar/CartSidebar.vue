<template>
  <transition name="show">
    <aside :class="{ open: open }" v-if="open" id="cart_sidebar" class="sidebar">
        <nav class="nav_header">
        <p>Meu Carrinho</p>
        <a href="#">Esvaziar</a>
      </nav>
      <nav class="nav_footer">
        <div class="total">
        <p>Total:</p>
        <strong>R$ 0</strong>
        </div>
        <button type="button">Finalizar compra</button>
      </nav>
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'CartSidebar',
  props: {
    open: Boolean,
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

.nav_header {
  align-items: center;
  display: flex;
  justify-content: space-between;

  & > p {
    font-weight: 600;
    font-size: 20px;
  }
}

.nav_footer {
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 90%;

  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 18px;
  }

  & > button {
    background-color: #6558f5;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    color: white;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 0.5rem;
    padding: 10px 20px;
    width: 100%;
  }
}
</style>
