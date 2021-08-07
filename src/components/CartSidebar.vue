<template>
  <transition name="show">
    <div class="sidebar" v-if="open">
      <transition-group appear name="fade">
        <a 
          href="#" 
          class="sidebar-element"
         v-for="(item, index) in navElements" 
         :key="item" 
         :style="{'--index': index}"
         >
          <p>Meu Carrinho <a href="#">Esvaziar</a></p>
        </a>
        <div>
          <p>Total:</p>
          <button>Finalizar compra</button>
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    open: Boolean
  },
  data() {
    return {
      navElements: [
        'cart'
      ]
    }
  }
}
</script>

<style scoped>
   .sidebar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    flex-direction: column;
    width: 60px;
    height: calc(100vh - 50px);
    padding-top: 48px;
  }

  .sidebar-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
    cursor: pointer;
    color: #fefefe;
    background-color: #242424;
  }

  show-enter {
    opacity: 0;
    transform: translateX(-60px)
  }

  show-enter-active, show-leave-active {
    transition: all 500ms;
  }

  .fade-enter {
    opacity: 0;
    transform: translateX(-60px)
  }

  .fade-enter-active {
    transition: all 500ms ease-in-out;
  }
</style>