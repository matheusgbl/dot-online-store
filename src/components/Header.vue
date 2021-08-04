<template>
  <header id="header">
    <nav  class="header-logo">
      <h2>Logo</h2>
    </nav>
    <nav class="search_bar">
      <input type="text" placeholder="Pesquisa" />
    </nav>
    <nav class="icons">
      <p>favs</p>
      <p>cart</p>
    </nav>
  </header>
</template>

<script>
import '@/styles/header.css'
export default {
  name: 'Header',
}
</script>