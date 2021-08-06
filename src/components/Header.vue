<template>
  <header class="page_header" id="header">
    <nav class="header_logo">
      <h2>Logo</h2>
    </nav>
    <nav class="search_bar">
      <input type="text" placeholder="Pesquisa" />
      <fa class="search_icon" icon="search" size="lg" />
    </nav>
    <nav class="icons">
      <fa class="heart_icon" icon="heart" size="2x" />
      <fa class="cart_icon" icon="shopping-cart" size="2x" />
      <span class="quantity">0</span>
      <fa class="circle_icon" icon="circle" size="2x" />
    </nav>
  </header>
</template>

<script>
import '@/styles/header.css'
export default {
  name: 'Header',
}
</script>

<style scoped>
  .search_icon {
    position: relative;
    right: 40px;
    bottom: 2px;
    color: #333;
  }

  .heart_icon {
    margin-right: 20px;
    color: #fa708a;
  }

  .quantity {
    position: relative;
    bottom: 16px;
    left: 5px;
    font-weight: 600;
    z-index: 999;
  }
  .circle_icon {
    position: relative;
    bottom: 10px;
    right: 15px;
    color: #fad65f;
  }
</style>