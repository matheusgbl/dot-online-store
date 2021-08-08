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
  props: {
    open: Boolean,
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
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    border: none;
    background-color: #6558f5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 10px 20px;
    width: 100%;
    color: white;
    font-weight: 600;
    font-size: 17px;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
}
</style>
