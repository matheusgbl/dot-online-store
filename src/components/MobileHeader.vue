<template>
  <header class="page_header_mobile" id="header">
    <nav class="header_logo">
      <img class="logo" src="../assets/dot-logo.png" alt="logo">
    </nav>
    <nav class="search_bar">
      <input type="text" placeholder="Pesquisa" />
      <fa class="search_icon" icon="search" size="lg" />
    </nav>
    <nav class="icons">
      <fa class="bars_icon" icon="bars" size="2x" />
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
  .logo {
    width: 100px;
  }

  .search_bar input {
    width: 200px;
  }

  .search_icon {
    position: relative;
    right: 40px;
    bottom: 2px;
    color: #333;
    cursor: pointer;
  }

  .icons {
    display: flex;
    margin-left: auto;
  }

  .bars_icon {
    cursor: pointer;
  }

</style>