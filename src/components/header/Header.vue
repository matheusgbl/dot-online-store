<template>
  <header class="page_header" id="header">
    <nav class="header_logo">
      <img class="logo" src="../../assets/dot-logo.png" alt="logo">
    </nav>
    <nav class="search_bar">
      <input type="text" placeholder="Pesquisa" />
      <fa class="search_icon" icon="search" size="lg" />
    </nav>
    <nav class="icons">
      <fa @click="$emit('togglefav')" class="heart_icon" icon="heart" size="2x" />
      <fa @click="$emit('togglenav')" class="cart_icon" icon="shopping-cart" size="2x" />
      <span class="quantity">0</span>
      <fa class="circle_icon" icon="circle" size="2x" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  .logo {
    width: 100px;
  }

  .search_icon {
    bottom: 2px;
    color: #333;
    cursor: pointer;
    position: relative;
    right: 40px;
  }

  .heart_icon {
    color: #fa708a;
    margin-right: 20px;

    &:hover {
      color: #f83f3f;
      cursor: pointer;
    }
  }

  .cart_icon {
    color: #222;

    &:hover {
      color: #111;
      cursor: pointer;
    }
  }

  .quantity {
    bottom: 16px;
    font-weight: 600;
    left: 5px;
    position: relative;
    z-index: 999;
  }

  .circle_icon {
    bottom: 10px;
    color: #fad65f;
    position: relative;
    right: 15px;
  }

  #header {
    align-items: center;
    background-color: #8dd7cf;
    display: flex;
    max-height: 80px;
    padding: 20px 40px;
    width: 100%;
}

.search_bar {
  margin-left: auto;

  & input {
    border: 2px solid rgb(180, 180, 180);
    border-radius: 5px;
    font-size: 20px;
    height: 40px;
    outline: none;
    text-indent: 10px;
    width: 400px;
  }
}

.icons {
  margin-left: auto;
}
</style>
