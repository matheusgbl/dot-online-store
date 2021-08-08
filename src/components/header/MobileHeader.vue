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

<style lang="scss" scoped>
  .logo {
    width: 100px;
  }

  .search_bar {
    margin-left: auto;
  }

  .search_bar input {
    border: 2px solid rgb(180, 180, 180);
    border-radius: 5px;
    font-size: 20px;
    height: 40px;
    outline: none;
    text-indent: 10px;
    width: 250px;
  }

  .search_icon {
    bottom: 2px;
    color: #333;
    cursor: pointer;
    position: relative;
    right: 40px;
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
    max-height: 80px;
    padding: 20px 10px;
    width: 100%;
}

@media (max-width: 480px) {
  .logo {
    width: 80px;
  }

  .search_bar input {
    width: 90%;
  }

  .search_icon {
    display: none;
  }
}
</style>
