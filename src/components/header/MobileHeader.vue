<template>
  <header class="page_header_mobile" id="header">
    <nav class="header_logo">
      <img class="logo" src="../../assets/dot-logo.png" alt="logo">
    </nav>
    <nav class="search_bar">
      <input type="text" placeholder="Pesquisa" />
      <fa class="search_icon" icon="search" size="lg" />
    </nav>
    <nav class="icons">
      <fa @click="$emit('togglemobile')" class="bars_icon" icon="bars" size="2x" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MobileHeader',
};
</script>

<style scoped>
  .logo {
    width: 100px;
  }

  .search_bar {
    margin-left: auto;
  }

  .search_bar input {
    width: 250px;
    border: 2px solid rgb(180, 180, 180);
    border-radius: 5px;
    height: 40px;
    outline: none;
    font-size: 20px;
    text-indent: 10px;
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

  .page_header_mobile {
    align-items: center;
    background-color: #8dd7cf;
    display: flex;
    padding: 20px 40px;
    max-height: 80px;
    width: 100%;
}

</style>
